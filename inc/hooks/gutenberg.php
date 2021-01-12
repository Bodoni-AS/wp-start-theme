<?php
/**
 * Gutenberg related settings
 *
 * @Author: Niku Hietanen
 * @Date: 2020-02-20 13:46:50
 * @Last Modified by: Niku Hietanen
 * @Last Modified time: 2021-01-12 16:21:35
 *
 * @package air-light
 */

namespace Air_Light;

// Enable Gutenberg extra features.
add_theme_support( 'align-wide' );
add_theme_support( 'wp-block-styles' );

/**
 * Restrict blocks to only allowed blocks in the settings
 */
function allowed_block_types( $allowed_blocks, $post ) {
  if ( null === THEME_SETTINGS['allowed_blocks'] || 'all' === THEME_SETTINGS['allowed_blocks'] ) {
    return $allowed_blocks;
  }

  // Add the default allowed blocks
  $allowed_blocks = null !== THEME_SETTINGS['allowed_blocks']['default'] ? THEME_SETTINGS['allowed_blocks']['default'] : [];

  // If there is post type specific blocks, add them to the allowed blocks list
  if ( null !== THEME_SETTINGS['allowed_blocks'][ get_post_type( $post->post_type ) ] ) {
    $allowed_blocks = array_merge( $allowed_blocks, THEME_SETTINGS['allowed_blocks'][ get_post_type( $post->post_type ) ] );
  }

  return $allowed_blocks;
}

/**
 * Check whether to use classic or block editor for a certain post type as defined in the settings
 */
function use_block_editor_for_post_type( $use_block_editor, $post_type ) {
  if ( in_array( $post_type, THEME_SETTINGS['use_classic_editor'], true ) ) {
    return false;
  }
  return true;
}

/**
 * Enqueue block editor JavaScript and CSS
 */
function register_block_editor_assets() {

  // Make paths variables so we don't write them twice
  $blocks = get_theme_file_uri( 'js/dist/block.js', __FILE__ );
  $editorstyles = get_theme_file_uri( 'css/gutenberg.min.css', __FILE__ );

  // Dependencies
  $dependencies = array(
    'wp-blocks',    // Provides useful functions and components for extending the editor
    'wp-i18n',      // Provides localization functions
    'wp-element',   // Provides React.Component
    'wp-components', // Provides many prebuilt components and controls
  );

  // Enqueue the bundled block JS file
  wp_enqueue_script( 'block-editor-js', $blocks, $dependencies, filemtime( $blocks ), 'all' );

  // Enqueue optional editor only styles
  wp_enqueue_style( 'block-editor-css', $editorstyles, $dependencies, filemtime( $editorstyles ), 'all' );
}
// Hook scripts function into block editor hook
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\register_block_editor_assets' );

/**
 * Register Gutenberg wp-admin editor style
 */
function setup_editor_styles() {
  // Add support for editor styles.
  add_theme_support( 'editor-styles' );

  // Enqueue editor styles.
  add_editor_style( get_theme_file_uri( 'css/gutenberg.min.css' ) );
}
add_action( 'after_setup_theme', __NAMESPACE__ . '\setup_editor_styles' );
