/**
 * Air theme JavaScript.
 */

// Import modules (comment to disable)
import MoveTo from "moveto";
// import './sticky-nav.js'
// import slick from 'slick-carousel';
import "what-input";
import "./navigation.js";
import "./lazyload.js";

// Define Javascript is active by changing the body class
document.body.classList.remove("no-js");
document.body.classList.add("js");

// Init lazyload
// Usage example on template side when air-helper enabled:
// <?php image_lazyload_tag( get_post_thumbnail_id( $post->ID ) ); ?>
let images = document.querySelectorAll(".lazyload");
lazyload(images, {
  root: null,
  rootMargin: "0px",
  threshold: 0,
});

// jQuery start
(function ($) {
  // Accessibility: Ensure back to top is right color on right background
  // Note: Needs .has-light-bg or .has-dark-bg class on all blocks
  var stickyOffset = $(".back-to-top").offset();
  var $contentDivs = $(".block");
  $(document).scroll(function () {
    $contentDivs.each(function (k) {
      var _thisOffset = $(this).offset();
      var _actPosition = _thisOffset.top - $(window).scrollTop();
      if (
        _actPosition < stickyOffset.top &&
        _actPosition + $(this).height() > 0
      ) {
        $(".back-to-top")
          .removeClass("has-light-bg has-dark-bg")
          .addClass(
            $(this).hasClass("has-light-bg") ? "has-light-bg" : "has-dark-bg"
          );
        return false;
      }
    });
  });

  // Accessibility: Ensure back to top is right color on right background
  var stickyOffset = $(".back-to-top").offset();
  var $contentDivs = $(".block");
  $(document).scroll(function () {
    $contentDivs.each(function (k) {
      var _thisOffset = $(this).offset();
      var _actPosition = _thisOffset.top - $(window).scrollTop();
      if (
        _actPosition < stickyOffset.top &&
        _actPosition + $(this).height() > 0
      ) {
        $(".back-to-top")
          .removeClass("has-light-bg has-dark-bg")
          .addClass(
            $(this).hasClass("has-light-bg") ? "has-light-bg" : "has-dark-bg"
          );
        return false;
      }
    });
  });

  // Hide or show the "back to top" link
  $(window).scroll(function () {
    // Back to top
    var offset = 300; // Browser window scroll (in pixels) after which the "back to top" link is shown
    var offset_opacity = 1200; // Browser window scroll (in pixels) after which the link opacity is reduced
    var scroll_top_duration = 700; // Duration of the top scrolling animation (in ms)
    var link_class = ".back-to-top";

    if ($(this).scrollTop() > offset) {
      $(link_class).addClass("is-visible");
    } else {
      $(link_class).removeClass("is-visible");
    }

    if ($(this).scrollTop() > offset_opacity) {
      $(link_class).addClass("fade-out");
    } else {
      $(link_class).removeClass("fade-out");
    }
  });

  // Document ready start
  $(function () {
    // Your jQuery here
  });
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const easeFunctions = {
    easeInQuad: function (t, b, c, d) {
      t /= d;
      return c * t * t + b;
    },
    easeOutQuad: function (t, b, c, d) {
      t /= d;
      return -c * t * (t - 2) + b;
    },
  };
  const moveTo = new MoveTo(
    {
      ease: "easeInQuad",
    },
    easeFunctions
  );
  const triggers = document.getElementsByClassName("js-trigger");
  for (var i = 0; i < triggers.length; i++) {
    moveTo.registerTrigger(triggers[i]);
  }
});
