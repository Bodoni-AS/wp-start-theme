<?php
/**
 * General hooks.
 *
 * @Author: Niku Hietanen
 * @Date: 2020-02-20 13:46:50
 * @Last Modified by:   Elias Kautto
 * @Last Modified time: 2022-02-01 11:42:49
 *
 * @package air-light
 */

namespace Air_Light;

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function widgets_init() {
  register_sidebar( array(
    'name'          => esc_html__( 'Footer', 'air-light' ),
    'id'            => 'footer',
    'description'   => esc_html__( 'Add widgets here.', 'air-light' ),
    'before_widget' => '<section id="%1$s" class="widget %2$s">',
    'after_widget'  => '</section>',
    'before_title'  => '<h2 class="widget-title">',
    'after_title'   => '</h2>',
  ) );
} // end widgets_init

/**
 * Custom color palette
 *
 */

 // Disable the custom color picker
 // add_theme_support('disable-custom-colors');

 // Add custom color palette
 $color_brand_black = '#2E1E1F';

add_theme_support('editor-color-palette',
 array(
   array(
     'name' => esc_html__('Svart', 'air-light'),
     'slug' => 'black',
     'color' => $color_brand_black,
   )
 )
);


/**
 * Custom image sizes
 *
 */

add_filter( 'image_size_names_choose', __NAMESPACE__ . '\my_custom_sizes' );

add_image_size( 'xlarge', 1920, 1080, true );

// Add custom sizes to image block
function my_custom_sizes( $sizes ) {
    return array_merge( $sizes, array(
        'xlarge' => __( 'Extra large' ),
    ) );
}


/**
 * Block patterns
 *
 */

// Remove core patterns
remove_theme_support('core-block-patterns');


// Add pattern categories
/* add_action( 'init', __NAMESPACE__ . '\bodoni_register_pattern_categories' );
function bodoni_register_pattern_categories() {
  register_block_pattern_category(
    'content',
    array( 'label' => __( 'Sideinnhold', 'air-light' ) )
  );
} */


// Add patterns
/* add_action( 'init', __NAMESPACE__ . '\bodoni_register_infobox_pattern' );
function bodoni_register_hero_pattern() {
  function bodoni_register_infobox_pattern() {
    register_block_pattern(
      'bodoni/infobox',
      array(
        'title'       => __( 'Infoboks', 'air-light'),
        'description' => _x( 'En infoboks for å fremheve budskapet', 'Block pattern description', 'air-light'),
        'categories'  => array( 'content' ),
        'content'     => "<!-- wp:group {\"className\":\"is-style-infobox\"} --><div class=\"wp-block-group is-style-infobox is-style-infobox\"></div><!-- /wp:group -->",
      )
    );
  }
} */