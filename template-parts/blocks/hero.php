<?php
/**
 * Hero block
 *
 * @package airclean
 */

namespace Air_Light;

// Create id attribute allowing for custom "anchor" value.
$id = 'testimonial-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'testimonial';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

$title = get_field( 'title' );
$content = get_field( 'content' );

if ( empty( $title ) ) {
  return;
} ?>

<section id="<?php echo esc_attr($id); ?>" class="block block-hero <?php echo esc_attr($className); ?>">
  <div class="container">

    <div class="content">
      <?php if ( ! empty( $title ) ) : ?>
        <h1 class="block-title"><?php echo esc_html( $title ); ?></h1>
      <?php endif; ?>

      <?php if ( ! empty( $content ) ) : ?>
        <?php echo wp_kses_post( wpautop( $content ) ); ?>
      <?php endif; ?>
    </div>

  </div>
</section>
