/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/src/front-end.js":
/*!*****************************!*\
  !*** ./js/src/front-end.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reframe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reframe.js */ "./node_modules/reframe.js/dist/reframe.es.js");
/* harmony import */ var _modules_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/localization */ "./js/src/modules/localization.js");
/* harmony import */ var _modules_external_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/external-link */ "./js/src/modules/external-link.js");
/* harmony import */ var _modules_anchors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/anchors */ "./js/src/modules/anchors.js");
/* harmony import */ var _modules_top__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/top */ "./js/src/modules/top.js");
/* harmony import */ var what_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! what-input */ "./node_modules/what-input/dist/what-input.js");
/* harmony import */ var what_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(what_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/navigation */ "./js/src/modules/navigation.js");
/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_navigation__WEBPACK_IMPORTED_MODULE_6__);
/* eslint-disable max-len, no-param-reassign, no-unused-vars */

/**
 * Air theme JavaScript.
 */
// Import modules






 // import './modules/sticky-nav';
// Define Javascript is active by changing the body class

document.body.classList.remove('no-js');
document.body.classList.add('js');
document.addEventListener('DOMContentLoaded', function () {
  (0,_modules_anchors__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_top__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_external_link__WEBPACK_IMPORTED_MODULE_2__.styleExternalLinks)();
  (0,_modules_external_link__WEBPACK_IMPORTED_MODULE_2__.initExternalLinkLabels)(); // Fit video embeds to container

  (0,reframe_js__WEBPACK_IMPORTED_MODULE_0__["default"])('.wp-has-aspect-ratio iframe');
});

/***/ }),

/***/ "./js/src/modules/anchors.js":
/*!***********************************!*\
  !*** ./js/src/modules/anchors.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moveto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moveto */ "./node_modules/moveto/dist/moveTo.js");
/* harmony import */ var moveto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moveto__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-param-reassign, no-undef */

/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-05-07 12:20:13
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-05-12 17:32:43
 */


var initAnchors = function initAnchors() {
  // General anchors used in links with class "js-trigger"
  var easeFunctions = {
    easeInQuad: function easeInQuad(t, b, c, d) {
      t /= d;
      return c * t * t + b;
    },
    easeOutQuad: function easeOutQuad(t, b, c, d) {
      t /= d;
      return -c * t * (t - 2) + b;
    }
  };
  var moveTo = new (moveto__WEBPACK_IMPORTED_MODULE_0___default())({
    ease: 'easeInQuad'
  }, easeFunctions);
  var triggers = document.getElementsByClassName('js-trigger'); // eslint-disable-next-line no-plusplus

  for (var i = 0; i < triggers.length; i++) {
    moveTo.registerTrigger(triggers[i]);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initAnchors);

/***/ }),

/***/ "./js/src/modules/external-link.js":
/*!*****************************************!*\
  !*** ./js/src/modules/external-link.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getChildAltText": () => (/* binding */ getChildAltText),
/* harmony export */   "initExternalLinkLabels": () => (/* binding */ initExternalLinkLabels),
/* harmony export */   "styleExternalLinks": () => (/* binding */ styleExternalLinks)
/* harmony export */ });
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localization */ "./js/src/modules/localization.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable no-param-reassign */

/**
 * @Author: Roni Laukkarinen
 * @Date:   2021-09-01 11:55:37
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-05-26 13:36:49
 */

/**
 * Style external links
 */


function isLinkExternal(link, localDomains) {
  // Empty links are not external
  if (!link.length) {
    return false;
  }

  var exceptions = ['#', 'tel:', 'mailto:', '/']; // Check if the url starts with some of the exceptions

  var isException = exceptions.some(function (exception) {
    var compare = new RegExp("^".concat(exception), 'g');
    return compare.test(link);
  });

  if (isException) {
    return false;
  }

  var linkUrl;

  try {
    linkUrl = new URL(link);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Invalid URL: ".concat(link));
    return false;
  } // Check if host is one of the local domains


  return !localDomains.some(function (domain) {
    return linkUrl.host === domain;
  });
}
/**
 * Try to get image alt texts from inside a link
 * to use in aria-label, when only elements inside
 * of link are images
 * @param {*} link DOM link element
 * @returns string
 */


function getChildAltText(link) {
  var children = _toConsumableArray(link.children);

  if (children.length === 0) {
    return '';
  }

  var childImgs = children.filter(function (child) {
    return child.tagName.toLowerCase() === 'img';
  }); // If there are other elements than img elements, no need to add aria-label

  if (children.length !== childImgs.length) {
    return '';
  } // Find alt texts and add to array


  var altTexts = childImgs.filter(function (child) {
    return child.alt && child.alt !== '';
  }).map(function (child) {
    return child.alt;
  }); // If there is no alt texts,

  if (!altTexts.length) {
    return '';
  }

  return altTexts.join(', ');
}
function styleExternalLinks() {
  var localDomains = [window.location.host];

  if (typeof window.air_light_externalLinkDomains !== 'undefined') {
    localDomains = localDomains.concat(window.air_light_externalLinkDomains);
  }

  var links = document.querySelectorAll('a');

  var externalLinks = _toConsumableArray(links).filter(function (link) {
    return isLinkExternal(link.href, localDomains);
  });

  externalLinks.forEach(function (externalLink) {
    var textContent = externalLink.textContent.trim().length ? externalLink.textContent.trim() : getChildAltText(externalLink);
    var ariaLabel = externalLink.target === '_blank' ? "".concat(textContent, ": ").concat((0,_localization__WEBPACK_IMPORTED_MODULE_0__["default"])('external_link'), ", ").concat((0,_localization__WEBPACK_IMPORTED_MODULE_0__["default"])('target_blank')) : "".concat(textContent, ": ").concat((0,_localization__WEBPACK_IMPORTED_MODULE_0__["default"])('external_link'));
    externalLink.setAttribute('aria-label', ariaLabel);
    externalLink.classList.add('is-external-link');
  });
}
function initExternalLinkLabels() {
  // Add aria-labels to links without text or aria-labels and contain image with alt text
  var links = _toConsumableArray(document.querySelectorAll('a')); // eslint-disable-next-line no-unused-vars


  var linksWithImgChildren = links.forEach(function (link) {
    // If link already has text content or an aria label no need to add aria-label
    if (link.textContent.trim() !== '' || link.ariaLabel) {
      return;
    }

    var ariaLabel = getChildAltText(link);

    if (ariaLabel !== '') {
      link.ariaLabel = ariaLabel;
    }
  });
}

/***/ }),

/***/ "./js/src/modules/localization.js":
/*!****************************************!*\
  !*** ./js/src/modules/localization.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLocalization)
/* harmony export */ });
function getLocalization(stringKey) {
  if (typeof window.air_light_screenReaderText === 'undefined' || typeof window.air_light_screenReaderText[stringKey] === 'undefined') {
    // eslint-disable-next-line no-console
    console.error("Missing translation for ".concat(stringKey));
    return '';
  }

  return window.air_light_screenReaderText[stringKey];
}

/***/ }),

/***/ "./js/src/modules/navigation.js":
/*!**************************************!*\
  !*** ./js/src/modules/navigation.js ***!
  \**************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @Author: Roni Laukkarinen
 * @Date:   2021-04-23 13:10:51
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-05-12 15:10:04
 */
// TODO: Refactor file

/* eslint-disable default-case, camelcase, eqeqeq, no-restricted-globals, no-undef, no-var, vars-on-top, max-len, prefer-destructuring, no-redeclare, no-plusplus, no-use-before-define, no-unused-vars, block-scoped-var, func-names */

/*
An accessible menu for WordPress

https://github.com/theme-smith/accessible-nav-wp
Kirsten Smith (kirsten@themesmith.co.uk)
Licensed GPL v.2 (http://www.gnu.org/licenses/gpl-2.0.html)

This work derived from:
https://github.com/WordPress/twentysixteen (GPL v.2)
https://github.com/wpaccessibility/a11ythemepatterns/tree/master/menu-keyboard-arrow-nav (GPL v.2)
*/

/*!
 * Check if an element is out of the viewport
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}  elem The element to check
 * @return {Object}     A set of booleans for each side of the element
 * @source https://gomakethings.com/how-to-check-if-any-part-of-an-element-is-out-of-the-viewport-with-vanilla-js/
 */
var isOutOfViewport = function isOutOfViewport(elem) {
  // Get element's bounding
  var bounding = elem.getBoundingClientRect(); // Check if it's out of the viewport on each side

  var out = {};
  out.top = bounding.top < 0;
  out.left = bounding.left < 0;
  out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
  out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;
  return out;
}; // Navigation.js start


(function ($) {
  // Responsive nav width
  var responsivenav = 960;
  var html;
  var body;
  var container;
  var button;
  var menu;
  var menuWrapper;
  var links;
  var subMenus;
  var i;
  var len;
  var focusableElements;
  var firstFocusableElement;
  var lastFocusableElement; // Hover intent

  var menuItems = document.querySelectorAll('.menu-item'); // const hoverIntentTimeout = 1000;

  menuItems.forEach(function (li) {
    li.addEventListener('mouseover', function () {
      this.classList.add('hover-intent');
      this.parentNode.classList.add('hover-intent');
      document.addEventListener('keydown', function (keydownMouseoverEvent) {
        if (keydownMouseoverEvent.key === 'Escape') {
          li.classList.remove('hover-intent');
          li.parentNode.classList.remove('hover-intent');
          li.parentNode.parentNode.classList.remove('hover-intent');
        }
      });
    });
    li.addEventListener('mouseleave', function () {
      // setTimeout(() => {
      this.classList.remove('hover-intent');
      this.parentNode.classList.remove('hover-intent'); // }, hoverIntentTimeout);

      document.addEventListener('keydown', function (keydownMouseleaveEvent) {
        if (keydownMouseleaveEvent.key === 'Escape') {
          li.classList.remove('hover-intent');
          li.parentNode.classList.remove('hover-intent');
          li.parentNode.parentNode.classList.remove('hover-intent');
        }
      });
    });
  }); // Init isOut check

  checkForSubmenuOverflow();

  function checkForSubmenuOverflow() {
    menuItems.forEach(function (li) {
      // Find sub menus
      var subMenusUnderMenuItem = li.querySelectorAll('.sub-menu'); // Loop through sub menus

      subMenusUnderMenuItem.forEach(function (subMenu) {
        // First let's check if submenu exists
        if (typeof subMenusUnderMenuItem !== 'undefined') {
          // Check if the sub menu is out of viewport or not
          var isOut = isOutOfViewport(subMenu); // At least one side of the element is out of viewport

          if (isOut.right) {
            subMenu.classList.add('is-out-of-viewport');
            subMenu.parentElement.parentElement.classList.add('is-out-of-viewport');
          } else {
            subMenu.classList.remove('is-out-of-viewport');
            subMenu.parentElement.parentElement.classList.remove('is-out-of-viewport');
          }
        }
      });
    });
  } // Reinit viewport check on resize event


  window.addEventListener('resize', checkForSubmenuOverflow); // Define menu items

  var menuContainer = $('.nav-container');
  var menuToggle = menuContainer.find('#nav-toggle');
  var siteHeaderMenu = menuContainer.find('#main-navigation-wrapper');
  var siteNavigation = menuContainer.find('#nav'); // Close focused dropdowns when pressing esc

  $('.menu-item a, .dropdown button').on('keyup', function (e) {
    // Checking are menu items open or not
    var isSubMenuDropdownOpen = $(this).parent().parent().parent().find('.sub-menu').prev('.dropdown-toggle').attr('aria-expanded');
    var isMainMenuDropdownOpen = $(this).closest('.menu-item').find('.dropdown-toggle').attr('aria-expanded');
    var areWeInDropdown = $(this).parent().parent().hasClass('sub-menu');

    if (isSubMenuDropdownOpen === 'true' || isMainMenuDropdownOpen === 'true') {
      if ($('.dropdown').find(':focus').length !== 0) {
        // Close menu using Esc key but only if dropdown is open
        if (e.code === 'Escape') {
          // Close the dropdown menu
          var thisDropdown = $(this).parent().parent().parent();
          var screenReaderSpan = thisDropdown.find('.screen-reader-text');
          var dropdownToggle = thisDropdown.find('.dropdown-toggle');
          thisDropdown.find('.sub-menu').removeClass('toggled-on');
          thisDropdown.find('.dropdown-toggle').removeClass('toggled-on');
          thisDropdown.find('.dropdown').removeClass('toggled-on');
          dropdownToggle.attr('aria-expanded', 'false'); // jscs:enable

          screenReaderSpan.text(air_light_screenReaderText.expand); // Move focus back to previous dropdown select
          // But only if we are not already in the toggle of the first dropdown menu

          if (areWeInDropdown === true) {
            thisDropdown.find('.dropdown-toggle:first').trigger('focus');
          }
        }
      }
    }

    if (window.innerWidth > responsivenav) {
      // Close previous dropdown if we are on main level
      var prevDropdown = $(this).parent().prev();
      var screenReaderSpanPrev = prevDropdown.find('.screen-reader-text');
      var dropdownTogglePrev = prevDropdown.find('.dropdown-toggle');
      prevDropdown.find('.sub-menu').removeClass('toggled-on');
      prevDropdown.find('.dropdown-toggle').removeClass('toggled-on');
      prevDropdown.find('.dropdown').removeClass('toggled-on');
      dropdownTogglePrev.attr('aria-expanded', 'false');
      screenReaderSpanPrev.text(air_light_screenReaderText.expand); // Close next dropdown if we are on main level

      var nextDropdown = $(this).parent().next();
      var screenReaderSpanNext = nextDropdown.find('.screen-reader-text');
      var dropdownToggleNext = nextDropdown.find('.dropdown-toggle');
      nextDropdown.find('.sub-menu').removeClass('toggled-on');
      nextDropdown.find('.dropdown-toggle').removeClass('toggled-on');
      nextDropdown.find('.dropdown').removeClass('toggled-on');
      dropdownToggleNext.attr('aria-expanded', 'false');
      screenReaderSpanNext.text(air_light_screenReaderText.expand);
    }
  }); // Adds aria attribute

  siteHeaderMenu.find('.menu-item-has-children').attr('aria-haspopup', 'true'); // Add default dropdown-toggle label

  $('.dropdown-toggle').each(function () {
    $(this).attr('aria-label', "".concat(air_light_screenReaderText.expand_for, " ").concat($(this).prev().text()));
  }); // Toggles the sub-menu when dropdown toggle button accessed

  siteHeaderMenu.find('.dropdown-toggle').on('click', function (e) {
    var dropdownMenu = $(this).nextAll('.sub-menu');
    $(this).toggleClass('toggled-on');
    dropdownMenu.toggleClass('toggled-on'); // jscs:disable

    $(this).attr('aria-expanded', $(this).attr('aria-expanded') === 'false' ? 'true' : 'false'); // jscs:enable
    // Change screen reader open/close labels

    $(this).attr('aria-label', $(this).attr('aria-label') === "".concat(air_light_screenReaderText.collapse_for, " ").concat($(this).prev().text()) ? "".concat(air_light_screenReaderText.expand_for, " ").concat($(this).prev().text()) : "".concat(air_light_screenReaderText.collapse_for, " ").concat($(this).prev().text()));
  }); // Adds a class to sub-menus for styling

  $('.sub-menu .menu-item-has-children').parent('.sub-menu').addClass('has-sub-menu'); // Keyboard navigation

  $('.menu-item a, button.dropdown-toggle').on('keydown', function (e) {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.code) == -1) {
      return;
    }

    switch (e.code) {
      case 'ArrowLeft':
        // Left key
        e.stopPropagation();

        if ($(this).hasClass('dropdown-toggle')) {
          $(this).prev('a').trigger('focus');
        } else if ($(this).parent().prev().children('button.dropdown-toggle').length) {
          $(this).parent().prev().children('button.dropdown-toggle').trigger('focus');
        } else {
          $(this).parent().prev().children('a').trigger('focus');
        }

        if ($(this).is('ul ul ul.sub-menu.toggled-on li:first-child a')) {
          $(this).parents('ul.sub-menu.toggled-on li').children('button.dropdown-toggle').trigger('focus');
        }

        break;

      case 'ArrowRight':
        // Right key
        e.stopPropagation();

        if ($(this).next('button.dropdown-toggle').length) {
          $(this).next('button.dropdown-toggle').trigger('focus');
        } else if ($(this).parent().next().find('input').length) {
          $(this).parent().next().find('input').trigger('focus');
        } else {
          $(this).parent().next().children('a').trigger('focus');
        }

        if ($(this).is('ul.sub-menu .dropdown-toggle.toggled-on')) {
          $(this).parent().find('ul.sub-menu li:first-child a').trigger('focus');
        }

        break;

      case 'ArrowDown':
        // Down key
        e.stopPropagation();

        if ($(this).next().length) {
          $(this).next().find('li:first-child a').first().trigger('focus');
        } else if ($(this).parent().next().find('input').length) {
          $(this).parent().next().find('input').trigger('focus');
        } else {
          $(this).parent().next().children('a').trigger('focus');
        }

        if ($(this).is('ul.sub-menu a') && $(this).next('button.dropdown-toggle').length) {
          $(this).parent().next().children('a').trigger('focus');
        }

        if ($(this).is('ul.sub-menu .dropdown-toggle') && $(this).parent().next().children('.dropdown-toggle').length) {
          $(this).parent().next().children('.dropdown-toggle').trigger('focus');
        }

        break;

      case 'ArrowUp':
        // Up key
        e.stopPropagation();

        if ($(this).parent().prev().length) {
          $(this).parent().prev().children('a').trigger('focus');
        } else {
          $(this).parents('ul').first().prev('.dropdown-toggle.toggled-on').trigger('focus');
        }

        if ($(this).is('ul.sub-menu .dropdown-toggle') && $(this).parent().prev().children('.dropdown-toggle').length) {
          $(this).parent().prev().children('.dropdown-toggle').trigger('focus');
        }

        break;
    }
  });
  container = document.getElementById('nav');

  if (!container) {
    return;
  }

  button = document.getElementById('nav-toggle');

  if (typeof button === 'undefined') {
    return;
  } // Set vars.


  html = document.getElementsByTagName('html')[0];
  body = document.getElementsByTagName('body')[0];
  menu = container.getElementsByTagName('ul')[0];
  menuWrapper = document.getElementById('main-navigation-wrapper');

  function mobileNav() {
    var mobileNavInstance; // Toggles the menu button

    if (!menuToggle.length) {
      return;
    } // Do not set aria-expanded false on desktop


    if (window.innerWidth < responsivenav) {
      menuToggle.add(siteNavigation).attr('aria-expanded', 'false');
    }

    menuToggle.on('click', function () {
      $(this).add(siteHeaderMenu).toggleClass('toggled-on'); // Change screen reader expanded state

      $(this).attr('aria-expanded', $(this).attr('aria-expanded') === 'false' ? 'true' : 'false'); // Change screen reader open/close labels

      $('#nav-toggle-label').text( // eslint-disable-next-line no-undef
      $('#nav-toggle-label').text() === air_light_screenReaderText.expand_toggle ? air_light_screenReaderText.collapse_toggle : air_light_screenReaderText.expand_toggle);
      $(this).attr('aria-label', $(this).attr('aria-label') === air_light_screenReaderText.expand_toggle ? air_light_screenReaderText.collapse_toggle : air_light_screenReaderText.expand_toggle); // jscs:disable

      $(this).add(siteNavigation).attr('aria-expanded', $(this).add(siteNavigation).attr('aria-expanded') === 'false' ? 'true' : 'false'); // Scroll to top when triggering mobile navigation
      // to ensure no gaps are between header and navigation
      // Please note, if you use sticky-nav, comment out the next line

      window.scrollTo(0, 0); // jscs:enable
    }); // Hide menu toggle button if menu is empty and return early.

    if (typeof menu === 'undefined') {
      button.style.display = 'none';
      return;
    } // Do not set aria-expanded false on desktop


    if (window.innerWidth < responsivenav) {
      menu.setAttribute('aria-expanded', 'false');
    }

    if (menu.className.indexOf('nav-menu') === -1) {
      menu.className += ' nav-menu';
    } // Focus trap for mobile navigation


    if (window.innerWidth < responsivenav) {
      firstFocusableElement = null;
      lastFocusableElement = null; // Select nav items

      var navElements = container.querySelectorAll(['.nav-primary a[href]', '.nav-primary button']); // Listen for key events on nav elements and the toggle button
      // to trigger focus trap

      for (var ii = 0; ii < navElements.length; ii++) {
        navElements[ii].addEventListener('keydown', focusTrap);
      }
    } // What happens when clicking menu toggle


    button.onclick = function () {
      if (container.className.indexOf('is-active') !== -1) {
        closeMenu(); // Close menu.
      } else {
        html.className += ' disable-scroll';
        body.className += ' js-nav-active';
        container.className += ' is-active';
        button.className += ' is-active';
        button.setAttribute('aria-expanded', 'true');
        menu.setAttribute('aria-expanded', 'true'); // Add focus trap when menu open

        button.addEventListener('keydown', focusTrap, false);
      }
    }; // Close menu using Esc key.


    document.addEventListener('keyup', function (event) {
      if (event.code == 'Escape' || event.code == 'Esc') {
        if (container.className.indexOf('is-active') !== -1) {
          closeMenu(); // Close menu.
        }
      }
    }); // Close menu clicking menu wrapper area.

    menuWrapper.onclick = function (e) {
      if (e.target == menuWrapper && container.className.indexOf('is-active') !== -1) {
        closeMenu(); // Close menu.
      }
    };
  }

  if (window.innerWidth < responsivenav) {
    mobileNav(); // fire right away for mobile devices
  } // Close menu function.


  function closeMenu() {
    button.removeEventListener('keydown', focusTrap, false);
    html.className = html.className.replace(' disable-scroll', '');
    body.className = body.className.replace(' js-nav-active', '');
    container.className = container.className.replace(' is-active', '');
    button.className = button.className.replace(' is-active', '');
    button.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-expanded', 'false');
    $('#nav-toggle-label').text(air_light_screenReaderText.expand_toggle); // Return focus to nav-toggle

    button.focus();
  } // Get all the link elements within the menu.


  links = menu.getElementsByTagName('a');
  subMenus = menu.getElementsByTagName('ul'); // Each time a menu link is focused or blurred, toggle focus.

  for (i = 0, len = links.length; i < len; i++) {
    links[i].addEventListener('focus', toggleFocus, true);
    links[i].addEventListener('blur', toggleFocus, true);
  }
  /**
   * Sets or removes .focus class on an element.
   */


  function toggleFocus() {
    var self = this; // Move up through the ancestors of the current link until we hit .nav-menu.

    while (self.className.indexOf('nav-menu') === -1) {
      // On li elements toggle the class .focus.
      if (self.tagName.toLowerCase() === 'li') {
        if (self.className.indexOf('focus') !== -1) {
          self.className = self.className.replace(' focus', '');
        } else {
          self.className += ' focus';
        }
      }

      self = self.parentElement;
    }
  }

  function focusTrap(e) {
    // Set focusable elements inside main navigation.
    focusableElements = _toConsumableArray(container.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')).filter(function (el) {
      return !el.hasAttribute('disabled');
    }).filter(function (el) {
      return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
    });
    firstFocusableElement = focusableElements[0];
    lastFocusableElement = focusableElements[focusableElements.length - 1]; // Redirect last Tab to first focusable element.

    if (lastFocusableElement === e.target && e.code === 'Tab' && !e.shiftKey) {
      button.focus(); // Set focus on first element - that's actually close menu button.
    } // Redirect first Shift+Tab to toggle button element.


    if (firstFocusableElement === e.target && e.code === 'Tab' && e.shiftKey) {
      button.focus(); // Set focus on last element.
    } // Redirect Shift+Tab from the toggle button to last focusable element.


    if (button === e.target && e.code === 'Tab' && e.shiftKey) {
      lastFocusableElement.focus(); // Set focus on last element.
    }
  }

  $(window).on('resize', function () {
    if (window.innerWidth > responsivenav && body.className.indexOf('js-nav-active') !== -1) {
      closeMenu(); // Close menu.
    } else if (window.innerWidth < responsivenav && typeof window.mobileNavInstance == 'undefined') {
      mobileNav();
    }
  });
})(jQuery);

/***/ }),

/***/ "./js/src/modules/top.js":
/*!*******************************!*\
  !*** ./js/src/modules/top.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moveto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moveto */ "./node_modules/moveto/dist/moveTo.js");
/* harmony import */ var moveto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moveto__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable max-len */

/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-05-07 12:20:13
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-05-12 18:04:26
 */


var backToTop = function backToTop() {
  // Back to top button
  var moveToTop = new (moveto__WEBPACK_IMPORTED_MODULE_0___default())({
    duration: 300,
    easing: 'easeOutQuart'
  });
  var topButton = document.getElementById('top');
  var focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var scrollAmount = document.documentElement.clientHeight;

    if (scrolled > scrollAmount) {
      topButton.classList.add('is-visible');
    }

    if (scrolled < scrollAmount) {
      topButton.classList.remove('is-visible');
    }
  }

  function backToTopEvent(event) {
    event.preventDefault(); // Focus to the first focusable element on the page

    moveToTop.move(focusableElements[0]);
  }

  if (topButton) {
    topButton.addEventListener('click', backToTopEvent);
  }

  window.addEventListener('scroll', trackScroll);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backToTop);

/***/ }),

/***/ "./sass/global.scss":
/*!**************************!*\
  !*** ./sass/global.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sass/gutenberg-editor-styles.scss":
/*!*******************************************!*\
  !*** ./sass/gutenberg-editor-styles.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/moveto/dist/moveTo.js":
/*!********************************************!*\
  !*** ./node_modules/moveto/dist/moveTo.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";
/*!
 * MoveTo - A lightweight scroll animation javascript library without any dependency.
 * Version 1.8.2 (28-06-2019 14:30)
 * Licensed under MIT
 * Copyright 2019 Hasan Aydoğdu <hsnaydd@gmail.com>
 */



var MoveTo = function () {
  /**
   * Defaults
   * @type {object}
   */
  var defaults = {
    tolerance: 0,
    duration: 800,
    easing: 'easeOutQuart',
    container: window,
    callback: function callback() {}
  };
  /**
   * easeOutQuart Easing Function
   * @param  {number} t - current time
   * @param  {number} b - start value
   * @param  {number} c - change in value
   * @param  {number} d - duration
   * @return {number} - calculated value
   */

  function easeOutQuart(t, b, c, d) {
    t /= d;
    t--;
    return -c * (t * t * t * t - 1) + b;
  }
  /**
   * Merge two object
   *
   * @param  {object} obj1
   * @param  {object} obj2
   * @return {object} merged object
   */


  function mergeObject(obj1, obj2) {
    var obj3 = {};
    Object.keys(obj1).forEach(function (propertyName) {
      obj3[propertyName] = obj1[propertyName];
    });
    Object.keys(obj2).forEach(function (propertyName) {
      obj3[propertyName] = obj2[propertyName];
    });
    return obj3;
  }

  ;
  /**
   * Converts camel case to kebab case
   * @param  {string} val the value to be converted
   * @return {string} the converted value
   */

  function kebabCase(val) {
    return val.replace(/([A-Z])/g, function ($1) {
      return '-' + $1.toLowerCase();
    });
  }

  ;
  /**
   * Count a number of item scrolled top
   * @param  {Window|HTMLElement} container
   * @return {number}
   */

  function countScrollTop(container) {
    if (container instanceof HTMLElement) {
      return container.scrollTop;
    }

    return container.pageYOffset;
  }

  ;
  /**
   * MoveTo Constructor
   * @param {object} options Options
   * @param {object} easeFunctions Custom ease functions
   */

  function MoveTo() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var easeFunctions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.options = mergeObject(defaults, options);
    this.easeFunctions = mergeObject({
      easeOutQuart: easeOutQuart
    }, easeFunctions);
  }
  /**
   * Register a dom element as trigger
   * @param  {HTMLElement} dom Dom trigger element
   * @param  {function} callback Callback function
   * @return {function|void} unregister function
   */


  MoveTo.prototype.registerTrigger = function (dom, callback) {
    var _this = this;

    if (!dom) {
      return;
    }

    var href = dom.getAttribute('href') || dom.getAttribute('data-target'); // The element to be scrolled

    var target = href && href !== '#' ? document.getElementById(href.substring(1)) : document.body;
    var options = mergeObject(this.options, _getOptionsFromTriggerDom(dom, this.options));

    if (typeof callback === 'function') {
      options.callback = callback;
    }

    var listener = function listener(e) {
      e.preventDefault();

      _this.move(target, options);
    };

    dom.addEventListener('click', listener, false);
    return function () {
      return dom.removeEventListener('click', listener, false);
    };
  };
  /**
   * Move
   * Scrolls to given element by using easeOutQuart function
   * @param  {HTMLElement|number} target Target element to be scrolled or target position
   * @param  {object} options Custom options
   */


  MoveTo.prototype.move = function (target) {
    var _this2 = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (target !== 0 && !target) {
      return;
    }

    options = mergeObject(this.options, options);
    var distance = typeof target === 'number' ? target : target.getBoundingClientRect().top;
    var from = countScrollTop(options.container);
    var startTime = null;
    var lastYOffset;
    distance -= options.tolerance; // rAF loop

    var loop = function loop(currentTime) {
      var currentYOffset = countScrollTop(_this2.options.container);

      if (!startTime) {
        // To starts time from 1, we subtracted 1 from current time
        // If time starts from 1 The first loop will not do anything,
        // because easing value will be zero
        startTime = currentTime - 1;
      }

      var timeElapsed = currentTime - startTime;

      if (lastYOffset) {
        if (distance > 0 && lastYOffset > currentYOffset || distance < 0 && lastYOffset < currentYOffset) {
          return options.callback(target);
        }
      }

      lastYOffset = currentYOffset;

      var val = _this2.easeFunctions[options.easing](timeElapsed, from, distance, options.duration);

      options.container.scroll(0, val);

      if (timeElapsed < options.duration) {
        window.requestAnimationFrame(loop);
      } else {
        options.container.scroll(0, distance + from);
        options.callback(target);
      }
    };

    window.requestAnimationFrame(loop);
  };
  /**
   * Adds custom ease function
   * @param {string}   name Ease function name
   * @param {function} fn   Ease function
   */


  MoveTo.prototype.addEaseFunction = function (name, fn) {
    this.easeFunctions[name] = fn;
  };
  /**
   * Returns options which created from trigger dom element
   * @param  {HTMLElement} dom Trigger dom element
   * @param  {object} options The instance's options
   * @return {object} The options which created from trigger dom element
   */


  function _getOptionsFromTriggerDom(dom, options) {
    var domOptions = {};
    Object.keys(options).forEach(function (key) {
      var value = dom.getAttribute("data-mt-".concat(kebabCase(key)));

      if (value) {
        domOptions[key] = isNaN(value) ? value : parseInt(value, 10);
      }
    });
    return domOptions;
  }

  return MoveTo;
}();

if (true) {
  module.exports = MoveTo;
} else {}

/***/ }),

/***/ "./node_modules/reframe.js/dist/reframe.es.js":
/*!****************************************************!*\
  !*** ./node_modules/reframe.js/dist/reframe.es.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
  reframe.js - Reframe.js: responsive iframes for embedded content
  @version v3.0.2
  @link https://github.com/yowainwright/reframe.ts#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (http://jeffry.in)
  @license MIT
**/
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * REFRAME.TS 🖼
 * ---
 * @param target
 * @param cName
 * @summary defines the height/width ratio of the targeted <element>
 */
function reframe(target, cName) {
    if (cName === void 0) { cName = 'js-reframe'; }
    var frames = typeof target === 'string' ? __spreadArrays(document.querySelectorAll(target)) : 'length' in target ? __spreadArrays(target) : [target];
    return frames.forEach(function (frame) {
        var _a, _b;
        var hasClass = frame.className.split(' ').indexOf(cName) !== -1;
        if (hasClass || frame.style.width.indexOf('%') > -1) {
            return;
        }
        // get height width attributes
        var height = frame.getAttribute('height') || frame.offsetHeight;
        var width = frame.getAttribute('width') || frame.offsetWidth;
        var heightNumber = typeof height === 'string' ? parseInt(height) : height;
        var widthNumber = typeof width === 'string' ? parseInt(width) : width;
        // general targeted <element> sizes
        var padding = (heightNumber / widthNumber) * 100;
        // created element <wrapper> of general reframed item
        // => set necessary styles of created element <wrapper>
        var div = document.createElement('div');
        div.className = cName;
        var divStyles = div.style;
        divStyles.position = 'relative';
        divStyles.width = '100%';
        divStyles.paddingTop = padding + "%";
        // set necessary styles of targeted <element>
        var frameStyle = frame.style;
        frameStyle.position = 'absolute';
        frameStyle.width = '100%';
        frameStyle.height = '100%';
        frameStyle.left = '0';
        frameStyle.top = '0';
        // reframe targeted <element>
        (_a = frame.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(div, frame);
        (_b = frame.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(frame);
        div.appendChild(frame);
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reframe);


/***/ }),

/***/ "./node_modules/what-input/dist/what-input.js":
/*!****************************************************!*\
  !*** ./node_modules/what-input/dist/what-input.js ***!
  \****************************************************/
/***/ (function(module) {

/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.2.12
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __nested_webpack_require_738__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_738__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_738__.m = modules;

/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_738__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_738__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_738__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = function () {
	  /*
	   * bail out if there is no document or window
	   * (i.e. in a node/non-DOM environment)
	   *
	   * Return a stubbed API instead
	   */
	  if (typeof document === 'undefined' || typeof window === 'undefined') {
	    return {
	      // always return "initial" because no interaction will ever be detected
	      ask: function ask() {
	        return 'initial';
	      },

	      // always return null
	      element: function element() {
	        return null;
	      },

	      // no-op
	      ignoreKeys: function ignoreKeys() {},

	      // no-op
	      specificKeys: function specificKeys() {},

	      // no-op
	      registerOnChange: function registerOnChange() {},

	      // no-op
	      unRegisterOnChange: function unRegisterOnChange() {}
	    };
	  }

	  /*
	   * variables
	   */

	  // cache document.documentElement
	  var docElem = document.documentElement;

	  // currently focused dom element
	  var currentElement = null;

	  // last used input type
	  var currentInput = 'initial';

	  // last used input intent
	  var currentIntent = currentInput;

	  // UNIX timestamp of current event
	  var currentTimestamp = Date.now();

	  // check for a `data-whatpersist` attribute on either the `html` or `body` elements, defaults to `true`
	  var shouldPersist = false;

	  // form input types
	  var formInputs = ['button', 'input', 'select', 'textarea'];

	  // empty array for holding callback functions
	  var functionList = [];

	  // list of modifier keys commonly used with the mouse and
	  // can be safely ignored to prevent false keyboard detection
	  var ignoreMap = [16, // shift
	  17, // control
	  18, // alt
	  91, // Windows key / left Apple cmd
	  93 // Windows menu / right Apple cmd
	  ];

	  var specificMap = [];

	  // mapping of events to input types
	  var inputMap = {
	    keydown: 'keyboard',
	    keyup: 'keyboard',
	    mousedown: 'mouse',
	    mousemove: 'mouse',
	    MSPointerDown: 'pointer',
	    MSPointerMove: 'pointer',
	    pointerdown: 'pointer',
	    pointermove: 'pointer',
	    touchstart: 'touch',
	    touchend: 'touch'

	    // boolean: true if the page is being scrolled
	  };var isScrolling = false;

	  // store current mouse position
	  var mousePos = {
	    x: null,
	    y: null

	    // map of IE 10 pointer events
	  };var pointerMap = {
	    2: 'touch',
	    3: 'touch', // treat pen like touch
	    4: 'mouse'

	    // check support for passive event listeners
	  };var supportsPassive = false;

	  try {
	    var opts = Object.defineProperty({}, 'passive', {
	      get: function get() {
	        supportsPassive = true;
	      }
	    });

	    window.addEventListener('test', null, opts);
	  } catch (e) {}
	  // fail silently


	  /*
	   * set up
	   */

	  var setUp = function setUp() {
	    // add correct mouse wheel event mapping to `inputMap`
	    inputMap[detectWheel()] = 'mouse';

	    addListeners();
	  };

	  /*
	   * events
	   */

	  var addListeners = function addListeners() {
	    // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
	    // can only demonstrate potential, but not actual, interaction
	    // and are treated separately
	    var options = supportsPassive ? { passive: true, capture: true } : true;

	    document.addEventListener('DOMContentLoaded', setPersist, true);

	    // pointer events (mouse, pen, touch)
	    if (window.PointerEvent) {
	      window.addEventListener('pointerdown', setInput, true);
	      window.addEventListener('pointermove', setIntent, true);
	    } else if (window.MSPointerEvent) {
	      window.addEventListener('MSPointerDown', setInput, true);
	      window.addEventListener('MSPointerMove', setIntent, true);
	    } else {
	      // mouse events
	      window.addEventListener('mousedown', setInput, true);
	      window.addEventListener('mousemove', setIntent, true);

	      // touch events
	      if ('ontouchstart' in window) {
	        window.addEventListener('touchstart', setInput, options);
	        window.addEventListener('touchend', setInput, true);
	      }
	    }

	    // mouse wheel
	    window.addEventListener(detectWheel(), setIntent, options);

	    // keyboard events
	    window.addEventListener('keydown', setInput, true);
	    window.addEventListener('keyup', setInput, true);

	    // focus events
	    window.addEventListener('focusin', setElement, true);
	    window.addEventListener('focusout', clearElement, true);
	  };

	  // checks if input persistence should happen and
	  // get saved state from session storage if true (defaults to `false`)
	  var setPersist = function setPersist() {
	    shouldPersist = !(docElem.getAttribute('data-whatpersist') === 'false' || document.body.getAttribute('data-whatpersist') === 'false');

	    if (shouldPersist) {
	      // check for session variables and use if available
	      try {
	        if (window.sessionStorage.getItem('what-input')) {
	          currentInput = window.sessionStorage.getItem('what-input');
	        }

	        if (window.sessionStorage.getItem('what-intent')) {
	          currentIntent = window.sessionStorage.getItem('what-intent');
	        }
	      } catch (e) {
	        // fail silently
	      }
	    }

	    // always run these so at least `initial` state is set
	    doUpdate('input');
	    doUpdate('intent');
	  };

	  // checks conditions before updating new input
	  var setInput = function setInput(event) {
	    var eventKey = event.which;
	    var value = inputMap[event.type];

	    if (value === 'pointer') {
	      value = pointerType(event);
	    }

	    var ignoreMatch = !specificMap.length && ignoreMap.indexOf(eventKey) === -1;

	    var specificMatch = specificMap.length && specificMap.indexOf(eventKey) !== -1;

	    var shouldUpdate = value === 'keyboard' && eventKey && (ignoreMatch || specificMatch) || value === 'mouse' || value === 'touch';

	    // prevent touch detection from being overridden by event execution order
	    if (validateTouch(value)) {
	      shouldUpdate = false;
	    }

	    if (shouldUpdate && currentInput !== value) {
	      currentInput = value;

	      persistInput('input', currentInput);
	      doUpdate('input');
	    }

	    if (shouldUpdate && currentIntent !== value) {
	      // preserve intent for keyboard interaction with form fields
	      var activeElem = document.activeElement;
	      var notFormInput = activeElem && activeElem.nodeName && (formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1 || activeElem.nodeName.toLowerCase() === 'button' && !checkClosest(activeElem, 'form'));

	      if (notFormInput) {
	        currentIntent = value;

	        persistInput('intent', currentIntent);
	        doUpdate('intent');
	      }
	    }
	  };

	  // updates the doc and `inputTypes` array with new input
	  var doUpdate = function doUpdate(which) {
	    docElem.setAttribute('data-what' + which, which === 'input' ? currentInput : currentIntent);

	    fireFunctions(which);
	  };

	  // updates input intent for `mousemove` and `pointermove`
	  var setIntent = function setIntent(event) {
	    var value = inputMap[event.type];

	    if (value === 'pointer') {
	      value = pointerType(event);
	    }

	    // test to see if `mousemove` happened relative to the screen to detect scrolling versus mousemove
	    detectScrolling(event);

	    // only execute if scrolling isn't happening
	    if ((!isScrolling && !validateTouch(value) || isScrolling && event.type === 'wheel' || event.type === 'mousewheel' || event.type === 'DOMMouseScroll') && currentIntent !== value) {
	      currentIntent = value;

	      persistInput('intent', currentIntent);
	      doUpdate('intent');
	    }
	  };

	  var setElement = function setElement(event) {
	    if (!event.target.nodeName) {
	      // If nodeName is undefined, clear the element
	      // This can happen if click inside an <svg> element.
	      clearElement();
	      return;
	    }

	    currentElement = event.target.nodeName.toLowerCase();
	    docElem.setAttribute('data-whatelement', currentElement);

	    if (event.target.classList && event.target.classList.length) {
	      docElem.setAttribute('data-whatclasses', event.target.classList.toString().replace(' ', ','));
	    }
	  };

	  var clearElement = function clearElement() {
	    currentElement = null;

	    docElem.removeAttribute('data-whatelement');
	    docElem.removeAttribute('data-whatclasses');
	  };

	  var persistInput = function persistInput(which, value) {
	    if (shouldPersist) {
	      try {
	        window.sessionStorage.setItem('what-' + which, value);
	      } catch (e) {
	        // fail silently
	      }
	    }
	  };

	  /*
	   * utilities
	   */

	  var pointerType = function pointerType(event) {
	    if (typeof event.pointerType === 'number') {
	      return pointerMap[event.pointerType];
	    } else {
	      // treat pen like touch
	      return event.pointerType === 'pen' ? 'touch' : event.pointerType;
	    }
	  };

	  // prevent touch detection from being overridden by event execution order
	  var validateTouch = function validateTouch(value) {
	    var timestamp = Date.now();

	    var touchIsValid = value === 'mouse' && currentInput === 'touch' && timestamp - currentTimestamp < 200;

	    currentTimestamp = timestamp;

	    return touchIsValid;
	  };

	  // detect version of mouse wheel event to use
	  // via https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event
	  var detectWheel = function detectWheel() {
	    var wheelType = null;

	    // Modern browsers support "wheel"
	    if ('onwheel' in document.createElement('div')) {
	      wheelType = 'wheel';
	    } else {
	      // Webkit and IE support at least "mousewheel"
	      // or assume that remaining browsers are older Firefox
	      wheelType = document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
	    }

	    return wheelType;
	  };

	  // runs callback functions
	  var fireFunctions = function fireFunctions(type) {
	    for (var i = 0, len = functionList.length; i < len; i++) {
	      if (functionList[i].type === type) {
	        functionList[i].fn.call(undefined, type === 'input' ? currentInput : currentIntent);
	      }
	    }
	  };

	  // finds matching element in an object
	  var objPos = function objPos(match) {
	    for (var i = 0, len = functionList.length; i < len; i++) {
	      if (functionList[i].fn === match) {
	        return i;
	      }
	    }
	  };

	  var detectScrolling = function detectScrolling(event) {
	    if (mousePos.x !== event.screenX || mousePos.y !== event.screenY) {
	      isScrolling = false;

	      mousePos.x = event.screenX;
	      mousePos.y = event.screenY;
	    } else {
	      isScrolling = true;
	    }
	  };

	  // manual version of `closest()`
	  var checkClosest = function checkClosest(elem, tag) {
	    var ElementPrototype = window.Element.prototype;

	    if (!ElementPrototype.matches) {
	      ElementPrototype.matches = ElementPrototype.msMatchesSelector || ElementPrototype.webkitMatchesSelector;
	    }

	    if (!ElementPrototype.closest) {
	      do {
	        if (elem.matches(tag)) {
	          return elem;
	        }

	        elem = elem.parentElement || elem.parentNode;
	      } while (elem !== null && elem.nodeType === 1);

	      return null;
	    } else {
	      return elem.closest(tag);
	    }
	  };

	  /*
	   * init
	   */

	  // don't start script unless browser cuts the mustard
	  // (also passes if polyfills are used)
	  if ('addEventListener' in window && Array.prototype.indexOf) {
	    setUp();
	  }

	  /*
	   * api
	   */

	  return {
	    // returns string: the current input type
	    // opt: 'intent'|'input'
	    // 'input' (default): returns the same value as the `data-whatinput` attribute
	    // 'intent': includes `data-whatintent` value if it's different than `data-whatinput`
	    ask: function ask(opt) {
	      return opt === 'intent' ? currentIntent : currentInput;
	    },

	    // returns string: the currently focused element or null
	    element: function element() {
	      return currentElement;
	    },

	    // overwrites ignored keys with provided array
	    ignoreKeys: function ignoreKeys(arr) {
	      ignoreMap = arr;
	    },

	    // overwrites specific char keys to update on
	    specificKeys: function specificKeys(arr) {
	      specificMap = arr;
	    },

	    // attach functions to input and intent "events"
	    // funct: function to fire on change
	    // eventType: 'input'|'intent'
	    registerOnChange: function registerOnChange(fn, eventType) {
	      functionList.push({
	        fn: fn,
	        type: eventType || 'input'
	      });
	    },

	    unRegisterOnChange: function unRegisterOnChange(fn) {
	      var position = objPos(fn);

	      if (position || position === 0) {
	        functionList.splice(position, 1);
	      }
	    },

	    clearStorage: function clearStorage() {
	      window.sessionStorage.clear();
	    }
	  };
	}();

/***/ })
/******/ ])
});
;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/dev/front-end": 0,
/******/ 			"css/dev/gutenberg-editor-styles": 0,
/******/ 			"css/dev/global": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkstart_theme"] = self["webpackChunkstart_theme"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/dev/gutenberg-editor-styles","css/dev/global"], () => (__webpack_require__("./js/src/front-end.js")))
/******/ 	__webpack_require__.O(undefined, ["css/dev/gutenberg-editor-styles","css/dev/global"], () => (__webpack_require__("./sass/global.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/dev/gutenberg-editor-styles","css/dev/global"], () => (__webpack_require__("./sass/gutenberg-editor-styles.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLCtCQUErQjs7QUFFdEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsTUFBTTs7QUFFTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGLE9BQU87QUFDUDtBQUNBLENBQUM7QUFDRDs7Ozs7O1VDcGdCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnQtdGhlbWUvLi9qcy9zcmMvZnJvbnQtZW5kLmpzIiwid2VicGFjazovL3N0YXJ0LXRoZW1lLy4vanMvc3JjL21vZHVsZXMvYW5jaG9ycy5qcyIsIndlYnBhY2s6Ly9zdGFydC10aGVtZS8uL2pzL3NyYy9tb2R1bGVzL2V4dGVybmFsLWxpbmsuanMiLCJ3ZWJwYWNrOi8vc3RhcnQtdGhlbWUvLi9qcy9zcmMvbW9kdWxlcy9sb2NhbGl6YXRpb24uanMiLCJ3ZWJwYWNrOi8vc3RhcnQtdGhlbWUvLi9qcy9zcmMvbW9kdWxlcy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3N0YXJ0LXRoZW1lLy4vanMvc3JjL21vZHVsZXMvdG9wLmpzIiwid2VicGFjazovL3N0YXJ0LXRoZW1lLy4vc2Fzcy9nbG9iYWwuc2Nzcz85NWI3Iiwid2VicGFjazovL3N0YXJ0LXRoZW1lLy4vc2Fzcy9ndXRlbmJlcmctZWRpdG9yLXN0eWxlcy5zY3NzP2VlYmIiLCJ3ZWJwYWNrOi8vc3RhcnQtdGhlbWUvLi9ub2RlX21vZHVsZXMvbW92ZXRvL2Rpc3QvbW92ZVRvLmpzIiwid2VicGFjazovL3N0YXJ0LXRoZW1lLy4vbm9kZV9tb2R1bGVzL3JlZnJhbWUuanMvZGlzdC9yZWZyYW1lLmVzLmpzIiwid2VicGFjazovL3N0YXJ0LXRoZW1lLy4vbm9kZV9tb2R1bGVzL3doYXQtaW5wdXQvZGlzdC93aGF0LWlucHV0LmpzIiwid2VicGFjazovL3N0YXJ0LXRoZW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0YXJ0LXRoZW1lL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vc3RhcnQtdGhlbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc3RhcnQtdGhlbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N0YXJ0LXRoZW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3RhcnQtdGhlbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdGFydC10aGVtZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zdGFydC10aGVtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3N0YXJ0LXRoZW1lL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zdGFydC10aGVtZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiwgbm8tcGFyYW0tcmVhc3NpZ24sIG5vLXVudXNlZC12YXJzICovXG4vKipcbiAqIEFpciB0aGVtZSBKYXZhU2NyaXB0LlxuICovXG5cbi8vIEltcG9ydCBtb2R1bGVzXG5pbXBvcnQgcmVmcmFtZSBmcm9tICdyZWZyYW1lLmpzJztcbmltcG9ydCBnZXRMb2NhbGl6YXRpb24gZnJvbSAnLi9tb2R1bGVzL2xvY2FsaXphdGlvbic7XG5pbXBvcnQgeyBzdHlsZUV4dGVybmFsTGlua3MsIGluaXRFeHRlcm5hbExpbmtMYWJlbHMgfSBmcm9tICcuL21vZHVsZXMvZXh0ZXJuYWwtbGluayc7XG5pbXBvcnQgaW5pdEFuY2hvcnMgZnJvbSAnLi9tb2R1bGVzL2FuY2hvcnMnO1xuaW1wb3J0IGJhY2tUb1RvcCBmcm9tICcuL21vZHVsZXMvdG9wJztcbmltcG9ydCAnd2hhdC1pbnB1dCc7XG5pbXBvcnQgJy4vbW9kdWxlcy9uYXZpZ2F0aW9uJztcbi8vIGltcG9ydCAnLi9tb2R1bGVzL3N0aWNreS1uYXYnO1xuXG4vLyBEZWZpbmUgSmF2YXNjcmlwdCBpcyBhY3RpdmUgYnkgY2hhbmdpbmcgdGhlIGJvZHkgY2xhc3NcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tanMnKTtcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnanMnKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgaW5pdEFuY2hvcnMoKTtcbiAgYmFja1RvVG9wKCk7XG4gIHN0eWxlRXh0ZXJuYWxMaW5rcygpO1xuICBpbml0RXh0ZXJuYWxMaW5rTGFiZWxzKCk7XG5cbiAgLy8gRml0IHZpZGVvIGVtYmVkcyB0byBjb250YWluZXJcbiAgcmVmcmFtZSgnLndwLWhhcy1hc3BlY3QtcmF0aW8gaWZyYW1lJyk7XG59KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduLCBuby11bmRlZiAqL1xuLyoqXG4gKiBAQXV0aG9yOiBSb25pIExhdWtrYXJpbmVuXG4gKiBARGF0ZTogICAyMDIyLTA1LTA3IDEyOjIwOjEzXG4gKiBATGFzdCBNb2RpZmllZCBieTogICBSb25pIExhdWtrYXJpbmVuXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDIyLTA1LTEyIDE3OjMyOjQzXG4gKi9cbmltcG9ydCBNb3ZlVG8gZnJvbSAnbW92ZXRvJztcblxuY29uc3QgaW5pdEFuY2hvcnMgPSAoKSA9PiB7XG4gIC8vIEdlbmVyYWwgYW5jaG9ycyB1c2VkIGluIGxpbmtzIHdpdGggY2xhc3MgXCJqcy10cmlnZ2VyXCJcbiAgY29uc3QgZWFzZUZ1bmN0aW9ucyA9IHtcbiAgICBlYXNlSW5RdWFkKHQsIGIsIGMsIGQpIHtcbiAgICAgIHQgLz0gZDtcbiAgICAgIHJldHVybiBjICogdCAqIHQgKyBiO1xuICAgIH0sXG4gICAgZWFzZU91dFF1YWQodCwgYiwgYywgZCkge1xuICAgICAgdCAvPSBkO1xuICAgICAgcmV0dXJuIC1jICogdCAqICh0IC0gMikgKyBiO1xuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgbW92ZVRvID0gbmV3IE1vdmVUbyhcbiAgICB7XG4gICAgICBlYXNlOiAnZWFzZUluUXVhZCcsXG4gICAgfSxcbiAgICBlYXNlRnVuY3Rpb25zLFxuICApO1xuXG4gIGNvbnN0IHRyaWdnZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnanMtdHJpZ2dlcicpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmlnZ2Vycy5sZW5ndGg7IGkrKykge1xuICAgIG1vdmVUby5yZWdpc3RlclRyaWdnZXIodHJpZ2dlcnNbaV0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0QW5jaG9ycztcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKipcbiAqIEBBdXRob3I6IFJvbmkgTGF1a2thcmluZW5cbiAqIEBEYXRlOiAgIDIwMjEtMDktMDEgMTE6NTU6MzdcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIFJvbmkgTGF1a2thcmluZW5cbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMjItMDUtMjYgMTM6MzY6NDlcbiAqL1xuLyoqXG4gKiBTdHlsZSBleHRlcm5hbCBsaW5rc1xuICovXG5cbmltcG9ydCBnZXRMb2NhbGl6YXRpb24gZnJvbSAnLi9sb2NhbGl6YXRpb24nO1xuXG5mdW5jdGlvbiBpc0xpbmtFeHRlcm5hbChsaW5rLCBsb2NhbERvbWFpbnMpIHtcbiAgLy8gRW1wdHkgbGlua3MgYXJlIG5vdCBleHRlcm5hbFxuICBpZiAoIWxpbmsubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZXhjZXB0aW9ucyA9IFtcbiAgICAnIycsXG4gICAgJ3RlbDonLFxuICAgICdtYWlsdG86JyxcbiAgICAnLycsXG4gIF07XG5cbiAgLy8gQ2hlY2sgaWYgdGhlIHVybCBzdGFydHMgd2l0aCBzb21lIG9mIHRoZSBleGNlcHRpb25zXG4gIGNvbnN0IGlzRXhjZXB0aW9uID0gZXhjZXB0aW9ucy5zb21lKChleGNlcHRpb24pID0+IHtcbiAgICBjb25zdCBjb21wYXJlID0gbmV3IFJlZ0V4cChgXiR7ZXhjZXB0aW9ufWAsICdnJyk7XG4gICAgcmV0dXJuIGNvbXBhcmUudGVzdChsaW5rKTtcbiAgfSk7XG5cbiAgaWYgKGlzRXhjZXB0aW9uKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGV0IGxpbmtVcmw7XG4gIHRyeSB7XG4gICAgbGlua1VybCA9IG5ldyBVUkwobGluayk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyhgSW52YWxpZCBVUkw6ICR7bGlua31gKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQ2hlY2sgaWYgaG9zdCBpcyBvbmUgb2YgdGhlIGxvY2FsIGRvbWFpbnNcbiAgcmV0dXJuICFsb2NhbERvbWFpbnMuc29tZSgoZG9tYWluKSA9PiBsaW5rVXJsLmhvc3QgPT09IGRvbWFpbik7XG59XG5cbi8qKlxuICogVHJ5IHRvIGdldCBpbWFnZSBhbHQgdGV4dHMgZnJvbSBpbnNpZGUgYSBsaW5rXG4gKiB0byB1c2UgaW4gYXJpYS1sYWJlbCwgd2hlbiBvbmx5IGVsZW1lbnRzIGluc2lkZVxuICogb2YgbGluayBhcmUgaW1hZ2VzXG4gKiBAcGFyYW0geyp9IGxpbmsgRE9NIGxpbmsgZWxlbWVudFxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGlsZEFsdFRleHQobGluaykge1xuICBjb25zdCBjaGlsZHJlbiA9IFsuLi5saW5rLmNoaWxkcmVuXTtcblxuICBpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3QgY2hpbGRJbWdzID0gY2hpbGRyZW4uZmlsdGVyKChjaGlsZCkgPT4gY2hpbGQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW1nJyk7XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG90aGVyIGVsZW1lbnRzIHRoYW4gaW1nIGVsZW1lbnRzLCBubyBuZWVkIHRvIGFkZCBhcmlhLWxhYmVsXG4gIGlmIChjaGlsZHJlbi5sZW5ndGggIT09IGNoaWxkSW1ncy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyBGaW5kIGFsdCB0ZXh0cyBhbmQgYWRkIHRvIGFycmF5XG4gIGNvbnN0IGFsdFRleHRzID0gY2hpbGRJbWdzLmZpbHRlcigoY2hpbGQpID0+IGNoaWxkLmFsdCAmJiBjaGlsZC5hbHQgIT09ICcnKS5tYXAoKGNoaWxkKSA9PiBjaGlsZC5hbHQpO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vIGFsdCB0ZXh0cyxcbiAgaWYgKCFhbHRUZXh0cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gYWx0VGV4dHMuam9pbignLCAnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlRXh0ZXJuYWxMaW5rcygpIHtcbiAgbGV0IGxvY2FsRG9tYWlucyA9IFtcbiAgICB3aW5kb3cubG9jYXRpb24uaG9zdCxcbiAgXTtcblxuICBpZiAodHlwZW9mIHdpbmRvdy5haXJfbGlnaHRfZXh0ZXJuYWxMaW5rRG9tYWlucyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsb2NhbERvbWFpbnMgPSBsb2NhbERvbWFpbnMuY29uY2F0KHdpbmRvdy5haXJfbGlnaHRfZXh0ZXJuYWxMaW5rRG9tYWlucyk7XG4gIH1cblxuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcblxuICBjb25zdCBleHRlcm5hbExpbmtzID0gWy4uLmxpbmtzXS5maWx0ZXIoKGxpbmspID0+IGlzTGlua0V4dGVybmFsKGxpbmsuaHJlZiwgbG9jYWxEb21haW5zKSk7XG5cbiAgZXh0ZXJuYWxMaW5rcy5mb3JFYWNoKChleHRlcm5hbExpbmspID0+IHtcbiAgICBjb25zdCB0ZXh0Q29udGVudCA9IGV4dGVybmFsTGluay50ZXh0Q29udGVudC50cmltKCkubGVuZ3RoXG4gICAgICA/IGV4dGVybmFsTGluay50ZXh0Q29udGVudC50cmltKCkgOiBnZXRDaGlsZEFsdFRleHQoZXh0ZXJuYWxMaW5rKTtcbiAgICBjb25zdCBhcmlhTGFiZWwgPSBleHRlcm5hbExpbmsudGFyZ2V0ID09PSAnX2JsYW5rJyA/IGAke3RleHRDb250ZW50fTogJHtnZXRMb2NhbGl6YXRpb24oJ2V4dGVybmFsX2xpbmsnKX0sICR7Z2V0TG9jYWxpemF0aW9uKCd0YXJnZXRfYmxhbmsnKX1gIDogYCR7dGV4dENvbnRlbnR9OiAke2dldExvY2FsaXphdGlvbignZXh0ZXJuYWxfbGluaycpfWA7XG4gICAgZXh0ZXJuYWxMaW5rLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGFyaWFMYWJlbCk7XG4gICAgZXh0ZXJuYWxMaW5rLmNsYXNzTGlzdC5hZGQoJ2lzLWV4dGVybmFsLWxpbmsnKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RXh0ZXJuYWxMaW5rTGFiZWxzKCkge1xuICAvLyBBZGQgYXJpYS1sYWJlbHMgdG8gbGlua3Mgd2l0aG91dCB0ZXh0IG9yIGFyaWEtbGFiZWxzIGFuZCBjb250YWluIGltYWdlIHdpdGggYWx0IHRleHRcbiAgY29uc3QgbGlua3MgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIGNvbnN0IGxpbmtzV2l0aEltZ0NoaWxkcmVuID0gbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIC8vIElmIGxpbmsgYWxyZWFkeSBoYXMgdGV4dCBjb250ZW50IG9yIGFuIGFyaWEgbGFiZWwgbm8gbmVlZCB0byBhZGQgYXJpYS1sYWJlbFxuICAgIGlmIChsaW5rLnRleHRDb250ZW50LnRyaW0oKSAhPT0gJycgfHwgbGluay5hcmlhTGFiZWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhcmlhTGFiZWwgPSBnZXRDaGlsZEFsdFRleHQobGluayk7XG4gICAgaWYgKGFyaWFMYWJlbCAhPT0gJycpIHtcbiAgICAgIGxpbmsuYXJpYUxhYmVsID0gYXJpYUxhYmVsO1xuICAgIH1cbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRMb2NhbGl6YXRpb24oc3RyaW5nS2V5KSB7XG4gIGlmICh0eXBlb2Ygd2luZG93LmFpcl9saWdodF9zY3JlZW5SZWFkZXJUZXh0ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93LmFpcl9saWdodF9zY3JlZW5SZWFkZXJUZXh0W3N0cmluZ0tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKGBNaXNzaW5nIHRyYW5zbGF0aW9uIGZvciAke3N0cmluZ0tleX1gKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHdpbmRvdy5haXJfbGlnaHRfc2NyZWVuUmVhZGVyVGV4dFtzdHJpbmdLZXldO1xufVxuIiwiLyoqXG4gKiBAQXV0aG9yOiBSb25pIExhdWtrYXJpbmVuXG4gKiBARGF0ZTogICAyMDIxLTA0LTIzIDEzOjEwOjUxXG4gKiBATGFzdCBNb2RpZmllZCBieTogICBSb25pIExhdWtrYXJpbmVuXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDIyLTA1LTEyIDE1OjEwOjA0XG4gKi9cbi8vIFRPRE86IFJlZmFjdG9yIGZpbGVcbi8qIGVzbGludC1kaXNhYmxlIGRlZmF1bHQtY2FzZSwgY2FtZWxjYXNlLCBlcWVxZXEsIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscywgbm8tdW5kZWYsIG5vLXZhciwgdmFycy1vbi10b3AsIG1heC1sZW4sIHByZWZlci1kZXN0cnVjdHVyaW5nLCBuby1yZWRlY2xhcmUsIG5vLXBsdXNwbHVzLCBuby11c2UtYmVmb3JlLWRlZmluZSwgbm8tdW51c2VkLXZhcnMsIGJsb2NrLXNjb3BlZC12YXIsIGZ1bmMtbmFtZXMgKi9cbi8qXG5BbiBhY2Nlc3NpYmxlIG1lbnUgZm9yIFdvcmRQcmVzc1xuXG5odHRwczovL2dpdGh1Yi5jb20vdGhlbWUtc21pdGgvYWNjZXNzaWJsZS1uYXYtd3BcbktpcnN0ZW4gU21pdGggKGtpcnN0ZW5AdGhlbWVzbWl0aC5jby51aylcbkxpY2Vuc2VkIEdQTCB2LjIgKGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwtMi4wLmh0bWwpXG5cblRoaXMgd29yayBkZXJpdmVkIGZyb206XG5odHRwczovL2dpdGh1Yi5jb20vV29yZFByZXNzL3R3ZW50eXNpeHRlZW4gKEdQTCB2LjIpXG5odHRwczovL2dpdGh1Yi5jb20vd3BhY2Nlc3NpYmlsaXR5L2ExMXl0aGVtZXBhdHRlcm5zL3RyZWUvbWFzdGVyL21lbnUta2V5Ym9hcmQtYXJyb3ctbmF2IChHUEwgdi4yKVxuKi9cblxuLyohXG4gKiBDaGVjayBpZiBhbiBlbGVtZW50IGlzIG91dCBvZiB0aGUgdmlld3BvcnRcbiAqIChjKSAyMDE4IENocmlzIEZlcmRpbmFuZGksIE1JVCBMaWNlbnNlLCBodHRwczovL2dvbWFrZXRoaW5ncy5jb21cbiAqIEBwYXJhbSAge05vZGV9ICBlbGVtIFRoZSBlbGVtZW50IHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICBBIHNldCBvZiBib29sZWFucyBmb3IgZWFjaCBzaWRlIG9mIHRoZSBlbGVtZW50XG4gKiBAc291cmNlIGh0dHBzOi8vZ29tYWtldGhpbmdzLmNvbS9ob3ctdG8tY2hlY2staWYtYW55LXBhcnQtb2YtYW4tZWxlbWVudC1pcy1vdXQtb2YtdGhlLXZpZXdwb3J0LXdpdGgtdmFuaWxsYS1qcy9cbiAqL1xudmFyIGlzT3V0T2ZWaWV3cG9ydCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gIC8vIEdldCBlbGVtZW50J3MgYm91bmRpbmdcbiAgdmFyIGJvdW5kaW5nID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAvLyBDaGVjayBpZiBpdCdzIG91dCBvZiB0aGUgdmlld3BvcnQgb24gZWFjaCBzaWRlXG4gIHZhciBvdXQgPSB7fTtcbiAgb3V0LnRvcCA9IGJvdW5kaW5nLnRvcCA8IDA7XG4gIG91dC5sZWZ0ID0gYm91bmRpbmcubGVmdCA8IDA7XG4gIG91dC5ib3R0b20gPSBib3VuZGluZy5ib3R0b20gPiAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICBvdXQucmlnaHQgPSBib3VuZGluZy5yaWdodCA+ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpO1xuICBvdXQuYW55ID0gb3V0LnRvcCB8fCBvdXQubGVmdCB8fCBvdXQuYm90dG9tIHx8IG91dC5yaWdodDtcblxuICByZXR1cm4gb3V0O1xufTtcblxuLy8gTmF2aWdhdGlvbi5qcyBzdGFydFxuKGZ1bmN0aW9uICgkKSB7XG4gIC8vIFJlc3BvbnNpdmUgbmF2IHdpZHRoXG4gIHZhciByZXNwb25zaXZlbmF2ID0gOTYwO1xuICB2YXIgaHRtbDtcbiAgdmFyIGJvZHk7XG4gIHZhciBjb250YWluZXI7XG4gIHZhciBidXR0b247XG4gIHZhciBtZW51O1xuICB2YXIgbWVudVdyYXBwZXI7XG4gIHZhciBsaW5rcztcbiAgdmFyIHN1Yk1lbnVzO1xuICB2YXIgaTtcbiAgdmFyIGxlbjtcbiAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzO1xuICB2YXIgZmlyc3RGb2N1c2FibGVFbGVtZW50O1xuICB2YXIgbGFzdEZvY3VzYWJsZUVsZW1lbnQ7XG5cbiAgLy8gSG92ZXIgaW50ZW50XG4gIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0nKTtcbiAgLy8gY29uc3QgaG92ZXJJbnRlbnRUaW1lb3V0ID0gMTAwMDtcblxuICBtZW51SXRlbXMuZm9yRWFjaCgobGkpID0+IHtcbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLWludGVudCcpO1xuICAgICAgdGhpcy5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLWludGVudCcpO1xuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGtleWRvd25Nb3VzZW92ZXJFdmVudCkgPT4ge1xuICAgICAgICBpZiAoa2V5ZG93bk1vdXNlb3ZlckV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci1pbnRlbnQnKTtcbiAgICAgICAgICBsaS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLWludGVudCcpO1xuICAgICAgICAgIGxpLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci1pbnRlbnQnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLWludGVudCcpO1xuICAgICAgdGhpcy5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLWludGVudCcpO1xuICAgICAgLy8gfSwgaG92ZXJJbnRlbnRUaW1lb3V0KTtcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChrZXlkb3duTW91c2VsZWF2ZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChrZXlkb3duTW91c2VsZWF2ZUV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci1pbnRlbnQnKTtcbiAgICAgICAgICBsaS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLWludGVudCcpO1xuICAgICAgICAgIGxpLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci1pbnRlbnQnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIEluaXQgaXNPdXQgY2hlY2tcbiAgY2hlY2tGb3JTdWJtZW51T3ZlcmZsb3coKTtcblxuICBmdW5jdGlvbiBjaGVja0ZvclN1Ym1lbnVPdmVyZmxvdygpIHtcbiAgICBtZW51SXRlbXMuZm9yRWFjaCgobGkpID0+IHtcbiAgICAgIC8vIEZpbmQgc3ViIG1lbnVzXG4gICAgICB2YXIgc3ViTWVudXNVbmRlck1lbnVJdGVtID0gbGkucXVlcnlTZWxlY3RvckFsbCgnLnN1Yi1tZW51Jyk7XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCBzdWIgbWVudXNcbiAgICAgIHN1Yk1lbnVzVW5kZXJNZW51SXRlbS5mb3JFYWNoKChzdWJNZW51KSA9PiB7XG4gICAgICAgIC8vIEZpcnN0IGxldCdzIGNoZWNrIGlmIHN1Ym1lbnUgZXhpc3RzXG4gICAgICAgIGlmICh0eXBlb2Ygc3ViTWVudXNVbmRlck1lbnVJdGVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBzdWIgbWVudSBpcyBvdXQgb2Ygdmlld3BvcnQgb3Igbm90XG4gICAgICAgICAgdmFyIGlzT3V0ID0gaXNPdXRPZlZpZXdwb3J0KHN1Yk1lbnUpO1xuXG4gICAgICAgICAgLy8gQXQgbGVhc3Qgb25lIHNpZGUgb2YgdGhlIGVsZW1lbnQgaXMgb3V0IG9mIHZpZXdwb3J0XG4gICAgICAgICAgaWYgKGlzT3V0LnJpZ2h0KSB7XG4gICAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoJ2lzLW91dC1vZi12aWV3cG9ydCcpO1xuICAgICAgICAgICAgc3ViTWVudS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtb3V0LW9mLXZpZXdwb3J0Jyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3V0LW9mLXZpZXdwb3J0Jyk7XG4gICAgICAgICAgICBzdWJNZW51LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vdXQtb2Ytdmlld3BvcnQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gUmVpbml0IHZpZXdwb3J0IGNoZWNrIG9uIHJlc2l6ZSBldmVudFxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2hlY2tGb3JTdWJtZW51T3ZlcmZsb3cpO1xuXG4gIC8vIERlZmluZSBtZW51IGl0ZW1zXG4gIHZhciBtZW51Q29udGFpbmVyID0gJCgnLm5hdi1jb250YWluZXInKTtcbiAgdmFyIG1lbnVUb2dnbGUgPSBtZW51Q29udGFpbmVyLmZpbmQoJyNuYXYtdG9nZ2xlJyk7XG4gIHZhciBzaXRlSGVhZGVyTWVudSA9IG1lbnVDb250YWluZXIuZmluZCgnI21haW4tbmF2aWdhdGlvbi13cmFwcGVyJyk7XG4gIHZhciBzaXRlTmF2aWdhdGlvbiA9IG1lbnVDb250YWluZXIuZmluZCgnI25hdicpO1xuXG4gIC8vIENsb3NlIGZvY3VzZWQgZHJvcGRvd25zIHdoZW4gcHJlc3NpbmcgZXNjXG4gICQoJy5tZW51LWl0ZW0gYSwgLmRyb3Bkb3duIGJ1dHRvbicpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gQ2hlY2tpbmcgYXJlIG1lbnUgaXRlbXMgb3BlbiBvciBub3RcbiAgICBjb25zdCBpc1N1Yk1lbnVEcm9wZG93bk9wZW4gPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpXG4gICAgICAuZmluZCgnLnN1Yi1tZW51JylcbiAgICAgIC5wcmV2KCcuZHJvcGRvd24tdG9nZ2xlJylcbiAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJyk7XG4gICAgY29uc3QgaXNNYWluTWVudURyb3Bkb3duT3BlbiA9ICQodGhpcykuY2xvc2VzdCgnLm1lbnUtaXRlbScpLmZpbmQoJy5kcm9wZG93bi10b2dnbGUnKS5hdHRyKCdhcmlhLWV4cGFuZGVkJyk7XG4gICAgY29uc3QgYXJlV2VJbkRyb3Bkb3duID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5oYXNDbGFzcygnc3ViLW1lbnUnKTtcblxuICAgIGlmIChpc1N1Yk1lbnVEcm9wZG93bk9wZW4gPT09ICd0cnVlJyB8fCBpc01haW5NZW51RHJvcGRvd25PcGVuID09PSAndHJ1ZScpIHtcbiAgICAgIGlmICgkKCcuZHJvcGRvd24nKS5maW5kKCc6Zm9jdXMnKS5sZW5ndGggIT09IDApIHtcbiAgICAgIC8vIENsb3NlIG1lbnUgdXNpbmcgRXNjIGtleSBidXQgb25seSBpZiBkcm9wZG93biBpcyBvcGVuXG4gICAgICAgIGlmIChlLmNvZGUgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgLy8gQ2xvc2UgdGhlIGRyb3Bkb3duIG1lbnVcbiAgICAgICAgICB2YXIgdGhpc0Ryb3Bkb3duID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKTtcblxuICAgICAgICAgIHZhciBzY3JlZW5SZWFkZXJTcGFuID0gdGhpc0Ryb3Bkb3duLmZpbmQoJy5zY3JlZW4tcmVhZGVyLXRleHQnKTtcbiAgICAgICAgICB2YXIgZHJvcGRvd25Ub2dnbGUgPSB0aGlzRHJvcGRvd24uZmluZCgnLmRyb3Bkb3duLXRvZ2dsZScpO1xuICAgICAgICAgIHRoaXNEcm9wZG93bi5maW5kKCcuc3ViLW1lbnUnKS5yZW1vdmVDbGFzcygndG9nZ2xlZC1vbicpO1xuICAgICAgICAgIHRoaXNEcm9wZG93bi5maW5kKCcuZHJvcGRvd24tdG9nZ2xlJykucmVtb3ZlQ2xhc3MoJ3RvZ2dsZWQtb24nKTtcbiAgICAgICAgICB0aGlzRHJvcGRvd24uZmluZCgnLmRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ3RvZ2dsZWQtb24nKTtcbiAgICAgICAgICBkcm9wZG93blRvZ2dsZS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgLy8ganNjczplbmFibGVcbiAgICAgICAgICBzY3JlZW5SZWFkZXJTcGFuLnRleHQoYWlyX2xpZ2h0X3NjcmVlblJlYWRlclRleHQuZXhwYW5kKTtcbiAgICAgICAgICAvLyBNb3ZlIGZvY3VzIGJhY2sgdG8gcHJldmlvdXMgZHJvcGRvd24gc2VsZWN0XG4gICAgICAgICAgLy8gQnV0IG9ubHkgaWYgd2UgYXJlIG5vdCBhbHJlYWR5IGluIHRoZSB0b2dnbGUgb2YgdGhlIGZpcnN0IGRyb3Bkb3duIG1lbnVcbiAgICAgICAgICBpZiAoYXJlV2VJbkRyb3Bkb3duID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzRHJvcGRvd24uZmluZCgnLmRyb3Bkb3duLXRvZ2dsZTpmaXJzdCcpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gcmVzcG9uc2l2ZW5hdikge1xuICAgICAgLy8gQ2xvc2UgcHJldmlvdXMgZHJvcGRvd24gaWYgd2UgYXJlIG9uIG1haW4gbGV2ZWxcbiAgICAgIHZhciBwcmV2RHJvcGRvd24gPSAkKHRoaXMpLnBhcmVudCgpLnByZXYoKTtcblxuICAgICAgdmFyIHNjcmVlblJlYWRlclNwYW5QcmV2ID0gcHJldkRyb3Bkb3duLmZpbmQoJy5zY3JlZW4tcmVhZGVyLXRleHQnKTtcbiAgICAgIHZhciBkcm9wZG93blRvZ2dsZVByZXYgPSBwcmV2RHJvcGRvd24uZmluZCgnLmRyb3Bkb3duLXRvZ2dsZScpO1xuICAgICAgcHJldkRyb3Bkb3duLmZpbmQoJy5zdWItbWVudScpLnJlbW92ZUNsYXNzKCd0b2dnbGVkLW9uJyk7XG4gICAgICBwcmV2RHJvcGRvd24uZmluZCgnLmRyb3Bkb3duLXRvZ2dsZScpLnJlbW92ZUNsYXNzKCd0b2dnbGVkLW9uJyk7XG4gICAgICBwcmV2RHJvcGRvd24uZmluZCgnLmRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ3RvZ2dsZWQtb24nKTtcbiAgICAgIGRyb3Bkb3duVG9nZ2xlUHJldi5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICBzY3JlZW5SZWFkZXJTcGFuUHJldi50ZXh0KGFpcl9saWdodF9zY3JlZW5SZWFkZXJUZXh0LmV4cGFuZCk7XG5cbiAgICAgIC8vIENsb3NlIG5leHQgZHJvcGRvd24gaWYgd2UgYXJlIG9uIG1haW4gbGV2ZWxcbiAgICAgIHZhciBuZXh0RHJvcGRvd24gPSAkKHRoaXMpLnBhcmVudCgpLm5leHQoKTtcblxuICAgICAgdmFyIHNjcmVlblJlYWRlclNwYW5OZXh0ID0gbmV4dERyb3Bkb3duLmZpbmQoJy5zY3JlZW4tcmVhZGVyLXRleHQnKTtcbiAgICAgIHZhciBkcm9wZG93blRvZ2dsZU5leHQgPSBuZXh0RHJvcGRvd24uZmluZCgnLmRyb3Bkb3duLXRvZ2dsZScpO1xuICAgICAgbmV4dERyb3Bkb3duLmZpbmQoJy5zdWItbWVudScpLnJlbW92ZUNsYXNzKCd0b2dnbGVkLW9uJyk7XG4gICAgICBuZXh0RHJvcGRvd24uZmluZCgnLmRyb3Bkb3duLXRvZ2dsZScpLnJlbW92ZUNsYXNzKCd0b2dnbGVkLW9uJyk7XG4gICAgICBuZXh0RHJvcGRvd24uZmluZCgnLmRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ3RvZ2dsZWQtb24nKTtcbiAgICAgIGRyb3Bkb3duVG9nZ2xlTmV4dC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICBzY3JlZW5SZWFkZXJTcGFuTmV4dC50ZXh0KGFpcl9saWdodF9zY3JlZW5SZWFkZXJUZXh0LmV4cGFuZCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBBZGRzIGFyaWEgYXR0cmlidXRlXG4gIHNpdGVIZWFkZXJNZW51LmZpbmQoJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJykuYXR0cignYXJpYS1oYXNwb3B1cCcsICd0cnVlJyk7XG5cbiAgLy8gQWRkIGRlZmF1bHQgZHJvcGRvd24tdG9nZ2xlIGxhYmVsXG4gICQoJy5kcm9wZG93bi10b2dnbGUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLmF0dHIoJ2FyaWEtbGFiZWwnLCBgJHthaXJfbGlnaHRfc2NyZWVuUmVhZGVyVGV4dC5leHBhbmRfZm9yfSAkeyQodGhpcykucHJldigpLnRleHQoKX1gKTtcbiAgfSk7XG5cbiAgLy8gVG9nZ2xlcyB0aGUgc3ViLW1lbnUgd2hlbiBkcm9wZG93biB0b2dnbGUgYnV0dG9uIGFjY2Vzc2VkXG4gIHNpdGVIZWFkZXJNZW51LmZpbmQoJy5kcm9wZG93bi10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBkcm9wZG93bk1lbnUgPSAkKHRoaXMpLm5leHRBbGwoJy5zdWItbWVudScpO1xuXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygndG9nZ2xlZC1vbicpO1xuICAgIGRyb3Bkb3duTWVudS50b2dnbGVDbGFzcygndG9nZ2xlZC1vbicpO1xuXG4gICAgLy8ganNjczpkaXNhYmxlXG4gICAgJCh0aGlzKS5hdHRyKFxuICAgICAgJ2FyaWEtZXhwYW5kZWQnLFxuICAgICAgJCh0aGlzKS5hdHRyKCdhcmlhLWV4cGFuZGVkJykgPT09ICdmYWxzZScgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICk7XG4gICAgLy8ganNjczplbmFibGVcbiAgICAvLyBDaGFuZ2Ugc2NyZWVuIHJlYWRlciBvcGVuL2Nsb3NlIGxhYmVsc1xuXG4gICAgJCh0aGlzKS5hdHRyKFxuICAgICAgJ2FyaWEtbGFiZWwnLFxuICAgICAgJCh0aGlzKS5hdHRyKCdhcmlhLWxhYmVsJykgPT09IGAke2Fpcl9saWdodF9zY3JlZW5SZWFkZXJUZXh0LmNvbGxhcHNlX2Zvcn0gJHskKHRoaXMpLnByZXYoKS50ZXh0KCl9YFxuICAgICAgICA/IGAke2Fpcl9saWdodF9zY3JlZW5SZWFkZXJUZXh0LmV4cGFuZF9mb3J9ICR7JCh0aGlzKS5wcmV2KCkudGV4dCgpfWBcbiAgICAgICAgOiBgJHthaXJfbGlnaHRfc2NyZWVuUmVhZGVyVGV4dC5jb2xsYXBzZV9mb3J9ICR7JCh0aGlzKS5wcmV2KCkudGV4dCgpfWAsXG4gICAgKTtcbiAgfSk7XG5cbiAgLy8gQWRkcyBhIGNsYXNzIHRvIHN1Yi1tZW51cyBmb3Igc3R5bGluZ1xuICAkKCcuc3ViLW1lbnUgLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nKVxuICAgIC5wYXJlbnQoJy5zdWItbWVudScpXG4gICAgLmFkZENsYXNzKCdoYXMtc3ViLW1lbnUnKTtcblxuICAvLyBLZXlib2FyZCBuYXZpZ2F0aW9uXG4gICQoJy5tZW51LWl0ZW0gYSwgYnV0dG9uLmRyb3Bkb3duLXRvZ2dsZScpLm9uKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoWydBcnJvd1VwJywgJ0Fycm93RG93bicsICdBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCddLmluZGV4T2YoZS5jb2RlKSA9PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZS5jb2RlKSB7XG4gICAgY2FzZSAnQXJyb3dMZWZ0JzogLy8gTGVmdCBrZXlcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdkcm9wZG93bi10b2dnbGUnKSkge1xuICAgICAgICAkKHRoaXMpLnByZXYoJ2EnKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCkuY2hpbGRyZW4oJ2J1dHRvbi5kcm9wZG93bi10b2dnbGUnKS5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnByZXYoKS5jaGlsZHJlbignYnV0dG9uLmRyb3Bkb3duLXRvZ2dsZScpXG4gICAgICAgICAgLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnByZXYoKS5jaGlsZHJlbignYScpXG4gICAgICAgICAgLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICgkKHRoaXMpLmlzKCd1bCB1bCB1bC5zdWItbWVudS50b2dnbGVkLW9uIGxpOmZpcnN0LWNoaWxkIGEnKSkge1xuICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgLnBhcmVudHMoJ3VsLnN1Yi1tZW51LnRvZ2dsZWQtb24gbGknKVxuICAgICAgICAgIC5jaGlsZHJlbignYnV0dG9uLmRyb3Bkb3duLXRvZ2dsZScpXG4gICAgICAgICAgLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnQXJyb3dSaWdodCc6IC8vIFJpZ2h0IGtleVxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgaWYgKCQodGhpcykubmV4dCgnYnV0dG9uLmRyb3Bkb3duLXRvZ2dsZScpLmxlbmd0aCkge1xuICAgICAgICAkKHRoaXMpLm5leHQoJ2J1dHRvbi5kcm9wZG93bi10b2dnbGUnKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgfSBlbHNlIGlmICgkKHRoaXMpLnBhcmVudCgpLm5leHQoKS5maW5kKCdpbnB1dCcpLmxlbmd0aCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoKS5maW5kKCdpbnB1dCcpXG4gICAgICAgICAgLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoKS5jaGlsZHJlbignYScpXG4gICAgICAgICAgLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICgkKHRoaXMpLmlzKCd1bC5zdWItbWVudSAuZHJvcGRvd24tdG9nZ2xlLnRvZ2dsZWQtb24nKSkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ3VsLnN1Yi1tZW51IGxpOmZpcnN0LWNoaWxkIGEnKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ0Fycm93RG93bic6IC8vIERvd24ga2V5XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBpZiAoJCh0aGlzKS5uZXh0KCkubGVuZ3RoKSB7XG4gICAgICAgICQodGhpcykubmV4dCgpLmZpbmQoJ2xpOmZpcnN0LWNoaWxkIGEnKS5maXJzdCgpXG4gICAgICAgICAgLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICB9IGVsc2UgaWYgKCQodGhpcykucGFyZW50KCkubmV4dCgpLmZpbmQoJ2lucHV0JykubGVuZ3RoKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkubmV4dCgpLmZpbmQoJ2lucHV0JylcbiAgICAgICAgICAudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkubmV4dCgpLmNoaWxkcmVuKCdhJylcbiAgICAgICAgICAudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICAkKHRoaXMpLmlzKCd1bC5zdWItbWVudSBhJylcbiAgICAgICAgICAmJiAkKHRoaXMpLm5leHQoJ2J1dHRvbi5kcm9wZG93bi10b2dnbGUnKS5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoKS5jaGlsZHJlbignYScpXG4gICAgICAgICAgLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgJCh0aGlzKS5pcygndWwuc3ViLW1lbnUgLmRyb3Bkb3duLXRvZ2dsZScpXG4gICAgICAgICAgJiYgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkuY2hpbGRyZW4oJy5kcm9wZG93bi10b2dnbGUnKS5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoKS5jaGlsZHJlbignLmRyb3Bkb3duLXRvZ2dsZScpXG4gICAgICAgICAgLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnQXJyb3dVcCc6IC8vIFVwIGtleVxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgaWYgKCQodGhpcykucGFyZW50KCkucHJldigpLmxlbmd0aCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnByZXYoKS5jaGlsZHJlbignYScpXG4gICAgICAgICAgLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgLnBhcmVudHMoJ3VsJylcbiAgICAgICAgICAuZmlyc3QoKVxuICAgICAgICAgIC5wcmV2KCcuZHJvcGRvd24tdG9nZ2xlLnRvZ2dsZWQtb24nKVxuICAgICAgICAgIC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgICQodGhpcykuaXMoJ3VsLnN1Yi1tZW51IC5kcm9wZG93bi10b2dnbGUnKVxuICAgICAgICAgICYmICQodGhpcykucGFyZW50KCkucHJldigpLmNoaWxkcmVuKCcuZHJvcGRvd24tdG9nZ2xlJykubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCkuY2hpbGRyZW4oJy5kcm9wZG93bi10b2dnbGUnKVxuICAgICAgICAgIC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYnKTtcbiAgaWYgKCFjb250YWluZXIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LXRvZ2dsZScpO1xuICBpZiAodHlwZW9mIGJ1dHRvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBTZXQgdmFycy5cbiAgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF07XG4gIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICBtZW51ID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd1bCcpWzBdO1xuICBtZW51V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLW5hdmlnYXRpb24td3JhcHBlcicpO1xuXG4gIGZ1bmN0aW9uIG1vYmlsZU5hdigpIHtcbiAgICB2YXIgbW9iaWxlTmF2SW5zdGFuY2U7XG5cbiAgICAvLyBUb2dnbGVzIHRoZSBtZW51IGJ1dHRvblxuICAgIGlmICghbWVudVRvZ2dsZS5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEbyBub3Qgc2V0IGFyaWEtZXhwYW5kZWQgZmFsc2Ugb24gZGVza3RvcFxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IHJlc3BvbnNpdmVuYXYpIHtcbiAgICAgIG1lbnVUb2dnbGUuYWRkKHNpdGVOYXZpZ2F0aW9uKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgfVxuXG4gICAgbWVudVRvZ2dsZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLmFkZChzaXRlSGVhZGVyTWVudSkudG9nZ2xlQ2xhc3MoJ3RvZ2dsZWQtb24nKTtcblxuICAgICAgLy8gQ2hhbmdlIHNjcmVlbiByZWFkZXIgZXhwYW5kZWQgc3RhdGVcbiAgICAgICQodGhpcykuYXR0cihcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnLFxuICAgICAgICAkKHRoaXMpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ2ZhbHNlJyA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICApO1xuXG4gICAgICAvLyBDaGFuZ2Ugc2NyZWVuIHJlYWRlciBvcGVuL2Nsb3NlIGxhYmVsc1xuICAgICAgJCgnI25hdi10b2dnbGUtbGFiZWwnKS50ZXh0KFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgJCgnI25hdi10b2dnbGUtbGFiZWwnKS50ZXh0KCkgPT09IGFpcl9saWdodF9zY3JlZW5SZWFkZXJUZXh0LmV4cGFuZF90b2dnbGVcbiAgICAgICAgICA/IGFpcl9saWdodF9zY3JlZW5SZWFkZXJUZXh0LmNvbGxhcHNlX3RvZ2dsZVxuICAgICAgICAgIDogYWlyX2xpZ2h0X3NjcmVlblJlYWRlclRleHQuZXhwYW5kX3RvZ2dsZSxcbiAgICAgICk7XG5cbiAgICAgICQodGhpcykuYXR0cihcbiAgICAgICAgJ2FyaWEtbGFiZWwnLFxuICAgICAgICAkKHRoaXMpLmF0dHIoJ2FyaWEtbGFiZWwnKSA9PT0gYWlyX2xpZ2h0X3NjcmVlblJlYWRlclRleHQuZXhwYW5kX3RvZ2dsZVxuICAgICAgICAgID8gYWlyX2xpZ2h0X3NjcmVlblJlYWRlclRleHQuY29sbGFwc2VfdG9nZ2xlXG4gICAgICAgICAgOiBhaXJfbGlnaHRfc2NyZWVuUmVhZGVyVGV4dC5leHBhbmRfdG9nZ2xlLFxuICAgICAgKTtcblxuICAgICAgLy8ganNjczpkaXNhYmxlXG4gICAgICAkKHRoaXMpXG4gICAgICAgIC5hZGQoc2l0ZU5hdmlnYXRpb24pXG4gICAgICAgIC5hdHRyKFxuICAgICAgICAgICdhcmlhLWV4cGFuZGVkJyxcbiAgICAgICAgICAkKHRoaXMpLmFkZChzaXRlTmF2aWdhdGlvbikuYXR0cignYXJpYS1leHBhbmRlZCcpID09PSAnZmFsc2UnXG4gICAgICAgICAgICA/ICd0cnVlJ1xuICAgICAgICAgICAgOiAnZmFsc2UnLFxuICAgICAgICApO1xuXG4gICAgICAvLyBTY3JvbGwgdG8gdG9wIHdoZW4gdHJpZ2dlcmluZyBtb2JpbGUgbmF2aWdhdGlvblxuICAgICAgLy8gdG8gZW5zdXJlIG5vIGdhcHMgYXJlIGJldHdlZW4gaGVhZGVyIGFuZCBuYXZpZ2F0aW9uXG4gICAgICAvLyBQbGVhc2Ugbm90ZSwgaWYgeW91IHVzZSBzdGlja3ktbmF2LCBjb21tZW50IG91dCB0aGUgbmV4dCBsaW5lXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAvLyBqc2NzOmVuYWJsZVxuICAgIH0pO1xuXG4gICAgLy8gSGlkZSBtZW51IHRvZ2dsZSBidXR0b24gaWYgbWVudSBpcyBlbXB0eSBhbmQgcmV0dXJuIGVhcmx5LlxuICAgIGlmICh0eXBlb2YgbWVudSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIERvIG5vdCBzZXQgYXJpYS1leHBhbmRlZCBmYWxzZSBvbiBkZXNrdG9wXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgcmVzcG9uc2l2ZW5hdikge1xuICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICB9XG5cbiAgICBpZiAobWVudS5jbGFzc05hbWUuaW5kZXhPZignbmF2LW1lbnUnKSA9PT0gLTEpIHtcbiAgICAgIG1lbnUuY2xhc3NOYW1lICs9ICcgbmF2LW1lbnUnO1xuICAgIH1cblxuICAgIC8vIEZvY3VzIHRyYXAgZm9yIG1vYmlsZSBuYXZpZ2F0aW9uXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgcmVzcG9uc2l2ZW5hdikge1xuICAgICAgZmlyc3RGb2N1c2FibGVFbGVtZW50ID0gbnVsbDtcbiAgICAgIGxhc3RGb2N1c2FibGVFbGVtZW50ID0gbnVsbDtcblxuICAgICAgLy8gU2VsZWN0IG5hdiBpdGVtc1xuICAgICAgdmFyIG5hdkVsZW1lbnRzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoW1xuICAgICAgICAnLm5hdi1wcmltYXJ5IGFbaHJlZl0nLFxuICAgICAgICAnLm5hdi1wcmltYXJ5IGJ1dHRvbicsXG4gICAgICBdKTtcblxuICAgICAgLy8gTGlzdGVuIGZvciBrZXkgZXZlbnRzIG9uIG5hdiBlbGVtZW50cyBhbmQgdGhlIHRvZ2dsZSBidXR0b25cbiAgICAgIC8vIHRvIHRyaWdnZXIgZm9jdXMgdHJhcFxuICAgICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG5hdkVsZW1lbnRzLmxlbmd0aDsgaWkrKykge1xuICAgICAgICBuYXZFbGVtZW50c1tpaV0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZvY3VzVHJhcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2hhdCBoYXBwZW5zIHdoZW4gY2xpY2tpbmcgbWVudSB0b2dnbGVcbiAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjb250YWluZXIuY2xhc3NOYW1lLmluZGV4T2YoJ2lzLWFjdGl2ZScpICE9PSAtMSkge1xuICAgICAgICBjbG9zZU1lbnUoKTsgLy8gQ2xvc2UgbWVudS5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGh0bWwuY2xhc3NOYW1lICs9ICcgZGlzYWJsZS1zY3JvbGwnO1xuICAgICAgICBib2R5LmNsYXNzTmFtZSArPSAnIGpzLW5hdi1hY3RpdmUnO1xuICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lICs9ICcgaXMtYWN0aXZlJztcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSArPSAnIGlzLWFjdGl2ZSc7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICBtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG5cbiAgICAgICAgLy8gQWRkIGZvY3VzIHRyYXAgd2hlbiBtZW51IG9wZW5cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmb2N1c1RyYXAsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gQ2xvc2UgbWVudSB1c2luZyBFc2Mga2V5LlxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuY29kZSA9PSAnRXNjYXBlJyB8fCBldmVudC5jb2RlID09ICdFc2MnKSB7XG4gICAgICAgIGlmIChjb250YWluZXIuY2xhc3NOYW1lLmluZGV4T2YoJ2lzLWFjdGl2ZScpICE9PSAtMSkge1xuICAgICAgICAgIGNsb3NlTWVudSgpOyAvLyBDbG9zZSBtZW51LlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDbG9zZSBtZW51IGNsaWNraW5nIG1lbnUgd3JhcHBlciBhcmVhLlxuICAgIG1lbnVXcmFwcGVyLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKFxuICAgICAgICBlLnRhcmdldCA9PSBtZW51V3JhcHBlclxuICAgICAgICAmJiBjb250YWluZXIuY2xhc3NOYW1lLmluZGV4T2YoJ2lzLWFjdGl2ZScpICE9PSAtMVxuICAgICAgKSB7XG4gICAgICAgIGNsb3NlTWVudSgpOyAvLyBDbG9zZSBtZW51LlxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgcmVzcG9uc2l2ZW5hdikge1xuICAgIG1vYmlsZU5hdigpOyAvLyBmaXJlIHJpZ2h0IGF3YXkgZm9yIG1vYmlsZSBkZXZpY2VzXG4gIH1cblxuICAvLyBDbG9zZSBtZW51IGZ1bmN0aW9uLlxuICBmdW5jdGlvbiBjbG9zZU1lbnUoKSB7XG4gICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmb2N1c1RyYXAsIGZhbHNlKTtcbiAgICBodG1sLmNsYXNzTmFtZSA9IGh0bWwuY2xhc3NOYW1lLnJlcGxhY2UoJyBkaXNhYmxlLXNjcm9sbCcsICcnKTtcbiAgICBib2R5LmNsYXNzTmFtZSA9IGJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoJyBqcy1uYXYtYWN0aXZlJywgJycpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBjb250YWluZXIuY2xhc3NOYW1lLnJlcGxhY2UoJyBpcy1hY3RpdmUnLCAnJyk7XG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IGJ1dHRvbi5jbGFzc05hbWUucmVwbGFjZSgnIGlzLWFjdGl2ZScsICcnKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAkKCcjbmF2LXRvZ2dsZS1sYWJlbCcpLnRleHQoYWlyX2xpZ2h0X3NjcmVlblJlYWRlclRleHQuZXhwYW5kX3RvZ2dsZSk7XG5cbiAgICAvLyBSZXR1cm4gZm9jdXMgdG8gbmF2LXRvZ2dsZVxuICAgIGJ1dHRvbi5mb2N1cygpO1xuICB9XG5cbiAgLy8gR2V0IGFsbCB0aGUgbGluayBlbGVtZW50cyB3aXRoaW4gdGhlIG1lbnUuXG4gIGxpbmtzID0gbWVudS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpO1xuICBzdWJNZW51cyA9IG1lbnUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3VsJyk7XG5cbiAgLy8gRWFjaCB0aW1lIGEgbWVudSBsaW5rIGlzIGZvY3VzZWQgb3IgYmx1cnJlZCwgdG9nZ2xlIGZvY3VzLlxuICBmb3IgKGkgPSAwLCBsZW4gPSBsaW5rcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGxpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdG9nZ2xlRm9jdXMsIHRydWUpO1xuICAgIGxpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0b2dnbGVGb2N1cywgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBvciByZW1vdmVzIC5mb2N1cyBjbGFzcyBvbiBhbiBlbGVtZW50LlxuICAgKi9cbiAgZnVuY3Rpb24gdG9nZ2xlRm9jdXMoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gTW92ZSB1cCB0aHJvdWdoIHRoZSBhbmNlc3RvcnMgb2YgdGhlIGN1cnJlbnQgbGluayB1bnRpbCB3ZSBoaXQgLm5hdi1tZW51LlxuICAgIHdoaWxlIChzZWxmLmNsYXNzTmFtZS5pbmRleE9mKCduYXYtbWVudScpID09PSAtMSkge1xuICAgICAgLy8gT24gbGkgZWxlbWVudHMgdG9nZ2xlIHRoZSBjbGFzcyAuZm9jdXMuXG4gICAgICBpZiAoc2VsZi50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdsaScpIHtcbiAgICAgICAgaWYgKHNlbGYuY2xhc3NOYW1lLmluZGV4T2YoJ2ZvY3VzJykgIT09IC0xKSB7XG4gICAgICAgICAgc2VsZi5jbGFzc05hbWUgPSBzZWxmLmNsYXNzTmFtZS5yZXBsYWNlKCcgZm9jdXMnLCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5jbGFzc05hbWUgKz0gJyBmb2N1cyc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2VsZiA9IHNlbGYucGFyZW50RWxlbWVudDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmb2N1c1RyYXAoZSkge1xuICAgIC8vIFNldCBmb2N1c2FibGUgZWxlbWVudHMgaW5zaWRlIG1haW4gbmF2aWdhdGlvbi5cbiAgICBmb2N1c2FibGVFbGVtZW50cyA9IFsuLi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICdhLCBidXR0b24sIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0LCBkZXRhaWxzLCBbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSknLFxuICAgICldLmZpbHRlcigoZWwpID0+ICFlbC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpLmZpbHRlcigoZWwpID0+ICEhKGVsLm9mZnNldFdpZHRoIHx8IGVsLm9mZnNldEhlaWdodCB8fCBlbC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkpO1xuXG4gICAgZmlyc3RGb2N1c2FibGVFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbMF07XG4gICAgbGFzdEZvY3VzYWJsZUVsZW1lbnQgPSBmb2N1c2FibGVFbGVtZW50c1tmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxXTtcblxuICAgIC8vIFJlZGlyZWN0IGxhc3QgVGFiIHRvIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50LlxuICAgIGlmIChsYXN0Rm9jdXNhYmxlRWxlbWVudCA9PT0gZS50YXJnZXQgJiYgZS5jb2RlID09PSAnVGFiJyAmJiAhZS5zaGlmdEtleSkge1xuICAgICAgYnV0dG9uLmZvY3VzKCk7IC8vIFNldCBmb2N1cyBvbiBmaXJzdCBlbGVtZW50IC0gdGhhdCdzIGFjdHVhbGx5IGNsb3NlIG1lbnUgYnV0dG9uLlxuICAgIH1cblxuICAgIC8vIFJlZGlyZWN0IGZpcnN0IFNoaWZ0K1RhYiB0byB0b2dnbGUgYnV0dG9uIGVsZW1lbnQuXG4gICAgaWYgKGZpcnN0Rm9jdXNhYmxlRWxlbWVudCA9PT0gZS50YXJnZXQgJiYgZS5jb2RlID09PSAnVGFiJyAmJiBlLnNoaWZ0S2V5KSB7XG4gICAgICBidXR0b24uZm9jdXMoKTsgLy8gU2V0IGZvY3VzIG9uIGxhc3QgZWxlbWVudC5cbiAgICB9XG5cbiAgICAvLyBSZWRpcmVjdCBTaGlmdCtUYWIgZnJvbSB0aGUgdG9nZ2xlIGJ1dHRvbiB0byBsYXN0IGZvY3VzYWJsZSBlbGVtZW50LlxuICAgIGlmIChidXR0b24gPT09IGUudGFyZ2V0ICYmIGUuY29kZSA9PT0gJ1RhYicgJiYgZS5zaGlmdEtleSkge1xuICAgICAgbGFzdEZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTsgLy8gU2V0IGZvY3VzIG9uIGxhc3QgZWxlbWVudC5cbiAgICB9XG4gIH1cblxuICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsICgpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiByZXNwb25zaXZlbmF2ICYmIGJvZHkuY2xhc3NOYW1lLmluZGV4T2YoJ2pzLW5hdi1hY3RpdmUnKSAhPT0gLTEpIHtcbiAgICAgIGNsb3NlTWVudSgpOyAvLyBDbG9zZSBtZW51LlxuICAgIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPCByZXNwb25zaXZlbmF2ICYmIHR5cGVvZiB3aW5kb3cubW9iaWxlTmF2SW5zdGFuY2UgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG1vYmlsZU5hdigpO1xuICAgIH1cbiAgfSk7XG59KGpRdWVyeSkpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyoqXG4gKiBAQXV0aG9yOiBSb25pIExhdWtrYXJpbmVuXG4gKiBARGF0ZTogICAyMDIyLTA1LTA3IDEyOjIwOjEzXG4gKiBATGFzdCBNb2RpZmllZCBieTogICBSb25pIExhdWtrYXJpbmVuXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDIyLTA1LTEyIDE4OjA0OjI2XG4gKi9cbmltcG9ydCBNb3ZlVG8gZnJvbSAnbW92ZXRvJztcblxuY29uc3QgYmFja1RvVG9wID0gKCkgPT4ge1xuICAvLyBCYWNrIHRvIHRvcCBidXR0b25cbiAgY29uc3QgbW92ZVRvVG9wID0gbmV3IE1vdmVUbyh7IGR1cmF0aW9uOiAzMDAsIGVhc2luZzogJ2Vhc2VPdXRRdWFydCcgfSk7XG4gIGNvbnN0IHRvcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3AnKTtcbiAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24sIGEsIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSknKTtcblxuICBmdW5jdGlvbiB0cmFja1Njcm9sbCgpIHtcbiAgICBjb25zdCBzY3JvbGxlZCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBjb25zdCBzY3JvbGxBbW91bnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgaWYgKHNjcm9sbGVkID4gc2Nyb2xsQW1vdW50KSB7XG4gICAgICB0b3BCdXR0b24uY2xhc3NMaXN0LmFkZCgnaXMtdmlzaWJsZScpO1xuICAgIH1cblxuICAgIGlmIChzY3JvbGxlZCA8IHNjcm9sbEFtb3VudCkge1xuICAgICAgdG9wQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZpc2libGUnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBiYWNrVG9Ub3BFdmVudChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBGb2N1cyB0byB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgb24gdGhlIHBhZ2VcbiAgICBtb3ZlVG9Ub3AubW92ZShmb2N1c2FibGVFbGVtZW50c1swXSk7XG4gIH1cblxuICBpZiAodG9wQnV0dG9uKSB7XG4gICAgdG9wQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYmFja1RvVG9wRXZlbnQpO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRyYWNrU2Nyb2xsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJhY2tUb1RvcDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qIVxuICogTW92ZVRvIC0gQSBsaWdodHdlaWdodCBzY3JvbGwgYW5pbWF0aW9uIGphdmFzY3JpcHQgbGlicmFyeSB3aXRob3V0IGFueSBkZXBlbmRlbmN5LlxuICogVmVyc2lvbiAxLjguMiAoMjgtMDYtMjAxOSAxNDozMClcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVFxuICogQ29weXJpZ2h0IDIwMTkgSGFzYW4gQXlkb8SfZHUgPGhzbmF5ZGRAZ21haWwuY29tPlxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgTW92ZVRvID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogRGVmYXVsdHNcbiAgICogQHR5cGUge29iamVjdH1cbiAgICovXG4gIHZhciBkZWZhdWx0cyA9IHtcbiAgICB0b2xlcmFuY2U6IDAsXG4gICAgZHVyYXRpb246IDgwMCxcbiAgICBlYXNpbmc6ICdlYXNlT3V0UXVhcnQnLFxuICAgIGNvbnRhaW5lcjogd2luZG93LFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjaygpIHt9XG4gIH07XG4gIC8qKlxuICAgKiBlYXNlT3V0UXVhcnQgRWFzaW5nIEZ1bmN0aW9uXG4gICAqIEBwYXJhbSAge251bWJlcn0gdCAtIGN1cnJlbnQgdGltZVxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IGIgLSBzdGFydCB2YWx1ZVxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IGMgLSBjaGFuZ2UgaW4gdmFsdWVcbiAgICogQHBhcmFtICB7bnVtYmVyfSBkIC0gZHVyYXRpb25cbiAgICogQHJldHVybiB7bnVtYmVyfSAtIGNhbGN1bGF0ZWQgdmFsdWVcbiAgICovXG5cbiAgZnVuY3Rpb24gZWFzZU91dFF1YXJ0KHQsIGIsIGMsIGQpIHtcbiAgICB0IC89IGQ7XG4gICAgdC0tO1xuICAgIHJldHVybiAtYyAqICh0ICogdCAqIHQgKiB0IC0gMSkgKyBiO1xuICB9XG4gIC8qKlxuICAgKiBNZXJnZSB0d28gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSAge29iamVjdH0gb2JqMVxuICAgKiBAcGFyYW0gIHtvYmplY3R9IG9iajJcbiAgICogQHJldHVybiB7b2JqZWN0fSBtZXJnZWQgb2JqZWN0XG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gbWVyZ2VPYmplY3Qob2JqMSwgb2JqMikge1xuICAgIHZhciBvYmozID0ge307XG4gICAgT2JqZWN0LmtleXMob2JqMSkuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgICBvYmozW3Byb3BlcnR5TmFtZV0gPSBvYmoxW3Byb3BlcnR5TmFtZV07XG4gICAgfSk7XG4gICAgT2JqZWN0LmtleXMob2JqMikuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgICBvYmozW3Byb3BlcnR5TmFtZV0gPSBvYmoyW3Byb3BlcnR5TmFtZV07XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajM7XG4gIH1cblxuICA7XG4gIC8qKlxuICAgKiBDb252ZXJ0cyBjYW1lbCBjYXNlIHRvIGtlYmFiIGNhc2VcbiAgICogQHBhcmFtICB7c3RyaW5nfSB2YWwgdGhlIHZhbHVlIHRvIGJlIGNvbnZlcnRlZFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBjb252ZXJ0ZWQgdmFsdWVcbiAgICovXG5cbiAgZnVuY3Rpb24ga2ViYWJDYXNlKHZhbCkge1xuICAgIHJldHVybiB2YWwucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbiAoJDEpIHtcbiAgICAgIHJldHVybiAnLScgKyAkMS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgO1xuICAvKipcbiAgICogQ291bnQgYSBudW1iZXIgb2YgaXRlbSBzY3JvbGxlZCB0b3BcbiAgICogQHBhcmFtICB7V2luZG93fEhUTUxFbGVtZW50fSBjb250YWluZXJcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cblxuICBmdW5jdGlvbiBjb3VudFNjcm9sbFRvcChjb250YWluZXIpIHtcbiAgICBpZiAoY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBjb250YWluZXIuc2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIHJldHVybiBjb250YWluZXIucGFnZVlPZmZzZXQ7XG4gIH1cblxuICA7XG4gIC8qKlxuICAgKiBNb3ZlVG8gQ29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgT3B0aW9uc1xuICAgKiBAcGFyYW0ge29iamVjdH0gZWFzZUZ1bmN0aW9ucyBDdXN0b20gZWFzZSBmdW5jdGlvbnNcbiAgICovXG5cbiAgZnVuY3Rpb24gTW92ZVRvKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB2YXIgZWFzZUZ1bmN0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VPYmplY3QoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHRoaXMuZWFzZUZ1bmN0aW9ucyA9IG1lcmdlT2JqZWN0KHtcbiAgICAgIGVhc2VPdXRRdWFydDogZWFzZU91dFF1YXJ0XG4gICAgfSwgZWFzZUZ1bmN0aW9ucyk7XG4gIH1cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgZG9tIGVsZW1lbnQgYXMgdHJpZ2dlclxuICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZG9tIERvbSB0cmlnZ2VyIGVsZW1lbnRcbiAgICogQHBhcmFtICB7ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9ufHZvaWR9IHVucmVnaXN0ZXIgZnVuY3Rpb25cbiAgICovXG5cblxuICBNb3ZlVG8ucHJvdG90eXBlLnJlZ2lzdGVyVHJpZ2dlciA9IGZ1bmN0aW9uIChkb20sIGNhbGxiYWNrKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICghZG9tKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGhyZWYgPSBkb20uZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgZG9tLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTsgLy8gVGhlIGVsZW1lbnQgdG8gYmUgc2Nyb2xsZWRcblxuICAgIHZhciB0YXJnZXQgPSBocmVmICYmIGhyZWYgIT09ICcjJyA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhyZWYuc3Vic3RyaW5nKDEpKSA6IGRvY3VtZW50LmJvZHk7XG4gICAgdmFyIG9wdGlvbnMgPSBtZXJnZU9iamVjdCh0aGlzLm9wdGlvbnMsIF9nZXRPcHRpb25zRnJvbVRyaWdnZXJEb20oZG9tLCB0aGlzLm9wdGlvbnMpKTtcblxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9wdGlvbnMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIF90aGlzLm1vdmUodGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgfTtcbiAgfTtcbiAgLyoqXG4gICAqIE1vdmVcbiAgICogU2Nyb2xscyB0byBnaXZlbiBlbGVtZW50IGJ5IHVzaW5nIGVhc2VPdXRRdWFydCBmdW5jdGlvblxuICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudHxudW1iZXJ9IHRhcmdldCBUYXJnZXQgZWxlbWVudCB0byBiZSBzY3JvbGxlZCBvciB0YXJnZXQgcG9zaXRpb25cbiAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zIEN1c3RvbSBvcHRpb25zXG4gICAqL1xuXG5cbiAgTW92ZVRvLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgaWYgKHRhcmdldCAhPT0gMCAmJiAhdGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IG1lcmdlT2JqZWN0KHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgdmFyIGRpc3RhbmNlID0gdHlwZW9mIHRhcmdldCA9PT0gJ251bWJlcicgPyB0YXJnZXQgOiB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIHZhciBmcm9tID0gY291bnRTY3JvbGxUb3Aob3B0aW9ucy5jb250YWluZXIpO1xuICAgIHZhciBzdGFydFRpbWUgPSBudWxsO1xuICAgIHZhciBsYXN0WU9mZnNldDtcbiAgICBkaXN0YW5jZSAtPSBvcHRpb25zLnRvbGVyYW5jZTsgLy8gckFGIGxvb3BcblxuICAgIHZhciBsb29wID0gZnVuY3Rpb24gbG9vcChjdXJyZW50VGltZSkge1xuICAgICAgdmFyIGN1cnJlbnRZT2Zmc2V0ID0gY291bnRTY3JvbGxUb3AoX3RoaXMyLm9wdGlvbnMuY29udGFpbmVyKTtcblxuICAgICAgaWYgKCFzdGFydFRpbWUpIHtcbiAgICAgICAgLy8gVG8gc3RhcnRzIHRpbWUgZnJvbSAxLCB3ZSBzdWJ0cmFjdGVkIDEgZnJvbSBjdXJyZW50IHRpbWVcbiAgICAgICAgLy8gSWYgdGltZSBzdGFydHMgZnJvbSAxIFRoZSBmaXJzdCBsb29wIHdpbGwgbm90IGRvIGFueXRoaW5nLFxuICAgICAgICAvLyBiZWNhdXNlIGVhc2luZyB2YWx1ZSB3aWxsIGJlIHplcm9cbiAgICAgICAgc3RhcnRUaW1lID0gY3VycmVudFRpbWUgLSAxO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGltZUVsYXBzZWQgPSBjdXJyZW50VGltZSAtIHN0YXJ0VGltZTtcblxuICAgICAgaWYgKGxhc3RZT2Zmc2V0KSB7XG4gICAgICAgIGlmIChkaXN0YW5jZSA+IDAgJiYgbGFzdFlPZmZzZXQgPiBjdXJyZW50WU9mZnNldCB8fCBkaXN0YW5jZSA8IDAgJiYgbGFzdFlPZmZzZXQgPCBjdXJyZW50WU9mZnNldCkge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLmNhbGxiYWNrKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGFzdFlPZmZzZXQgPSBjdXJyZW50WU9mZnNldDtcblxuICAgICAgdmFyIHZhbCA9IF90aGlzMi5lYXNlRnVuY3Rpb25zW29wdGlvbnMuZWFzaW5nXSh0aW1lRWxhcHNlZCwgZnJvbSwgZGlzdGFuY2UsIG9wdGlvbnMuZHVyYXRpb24pO1xuXG4gICAgICBvcHRpb25zLmNvbnRhaW5lci5zY3JvbGwoMCwgdmFsKTtcblxuICAgICAgaWYgKHRpbWVFbGFwc2VkIDwgb3B0aW9ucy5kdXJhdGlvbikge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9ucy5jb250YWluZXIuc2Nyb2xsKDAsIGRpc3RhbmNlICsgZnJvbSk7XG4gICAgICAgIG9wdGlvbnMuY2FsbGJhY2sodGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgfTtcbiAgLyoqXG4gICAqIEFkZHMgY3VzdG9tIGVhc2UgZnVuY3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9ICAgbmFtZSBFYXNlIGZ1bmN0aW9uIG5hbWVcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gICBFYXNlIGZ1bmN0aW9uXG4gICAqL1xuXG5cbiAgTW92ZVRvLnByb3RvdHlwZS5hZGRFYXNlRnVuY3Rpb24gPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICB0aGlzLmVhc2VGdW5jdGlvbnNbbmFtZV0gPSBmbjtcbiAgfTtcbiAgLyoqXG4gICAqIFJldHVybnMgb3B0aW9ucyB3aGljaCBjcmVhdGVkIGZyb20gdHJpZ2dlciBkb20gZWxlbWVudFxuICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZG9tIFRyaWdnZXIgZG9tIGVsZW1lbnRcbiAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zIFRoZSBpbnN0YW5jZSdzIG9wdGlvbnNcbiAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgb3B0aW9ucyB3aGljaCBjcmVhdGVkIGZyb20gdHJpZ2dlciBkb20gZWxlbWVudFxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIF9nZXRPcHRpb25zRnJvbVRyaWdnZXJEb20oZG9tLCBvcHRpb25zKSB7XG4gICAgdmFyIGRvbU9wdGlvbnMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGRvbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW10LVwiLmNvbmNhdChrZWJhYkNhc2Uoa2V5KSkpO1xuXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgZG9tT3B0aW9uc1trZXldID0gaXNOYU4odmFsdWUpID8gdmFsdWUgOiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkb21PcHRpb25zO1xuICB9XG5cbiAgcmV0dXJuIE1vdmVUbztcbn0oKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gTW92ZVRvO1xufSBlbHNlIHtcbiAgd2luZG93Lk1vdmVUbyA9IE1vdmVUbztcbn0iLCIvKipcbiAgcmVmcmFtZS5qcyAtIFJlZnJhbWUuanM6IHJlc3BvbnNpdmUgaWZyYW1lcyBmb3IgZW1iZWRkZWQgY29udGVudFxuICBAdmVyc2lvbiB2My4wLjJcbiAgQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3lvd2FpbndyaWdodC9yZWZyYW1lLnRzI3JlYWRtZVxuICBAYXV0aG9yIEplZmYgV2FpbndyaWdodCA8eW93YWlud3JpZ2h0QGdtYWlsLmNvbT4gKGh0dHA6Ly9qZWZmcnkuaW4pXG4gIEBsaWNlbnNlIE1JVFxuKiovXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxuXG4vKipcbiAqIFJFRlJBTUUuVFMg8J+WvFxuICogLS0tXG4gKiBAcGFyYW0gdGFyZ2V0XG4gKiBAcGFyYW0gY05hbWVcbiAqIEBzdW1tYXJ5IGRlZmluZXMgdGhlIGhlaWdodC93aWR0aCByYXRpbyBvZiB0aGUgdGFyZ2V0ZWQgPGVsZW1lbnQ+XG4gKi9cbmZ1bmN0aW9uIHJlZnJhbWUodGFyZ2V0LCBjTmFtZSkge1xuICAgIGlmIChjTmFtZSA9PT0gdm9pZCAwKSB7IGNOYW1lID0gJ2pzLXJlZnJhbWUnOyB9XG4gICAgdmFyIGZyYW1lcyA9IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gX19zcHJlYWRBcnJheXMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXQpKSA6ICdsZW5ndGgnIGluIHRhcmdldCA/IF9fc3ByZWFkQXJyYXlzKHRhcmdldCkgOiBbdGFyZ2V0XTtcbiAgICByZXR1cm4gZnJhbWVzLmZvckVhY2goZnVuY3Rpb24gKGZyYW1lKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHZhciBoYXNDbGFzcyA9IGZyYW1lLmNsYXNzTmFtZS5zcGxpdCgnICcpLmluZGV4T2YoY05hbWUpICE9PSAtMTtcbiAgICAgICAgaWYgKGhhc0NsYXNzIHx8IGZyYW1lLnN0eWxlLndpZHRoLmluZGV4T2YoJyUnKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZ2V0IGhlaWdodCB3aWR0aCBhdHRyaWJ1dGVzXG4gICAgICAgIHZhciBoZWlnaHQgPSBmcmFtZS5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpIHx8IGZyYW1lLm9mZnNldEhlaWdodDtcbiAgICAgICAgdmFyIHdpZHRoID0gZnJhbWUuZ2V0QXR0cmlidXRlKCd3aWR0aCcpIHx8IGZyYW1lLm9mZnNldFdpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0TnVtYmVyID0gdHlwZW9mIGhlaWdodCA9PT0gJ3N0cmluZycgPyBwYXJzZUludChoZWlnaHQpIDogaGVpZ2h0O1xuICAgICAgICB2YXIgd2lkdGhOdW1iZXIgPSB0eXBlb2Ygd2lkdGggPT09ICdzdHJpbmcnID8gcGFyc2VJbnQod2lkdGgpIDogd2lkdGg7XG4gICAgICAgIC8vIGdlbmVyYWwgdGFyZ2V0ZWQgPGVsZW1lbnQ+IHNpemVzXG4gICAgICAgIHZhciBwYWRkaW5nID0gKGhlaWdodE51bWJlciAvIHdpZHRoTnVtYmVyKSAqIDEwMDtcbiAgICAgICAgLy8gY3JlYXRlZCBlbGVtZW50IDx3cmFwcGVyPiBvZiBnZW5lcmFsIHJlZnJhbWVkIGl0ZW1cbiAgICAgICAgLy8gPT4gc2V0IG5lY2Vzc2FyeSBzdHlsZXMgb2YgY3JlYXRlZCBlbGVtZW50IDx3cmFwcGVyPlxuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc05hbWUgPSBjTmFtZTtcbiAgICAgICAgdmFyIGRpdlN0eWxlcyA9IGRpdi5zdHlsZTtcbiAgICAgICAgZGl2U3R5bGVzLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgZGl2U3R5bGVzLndpZHRoID0gJzEwMCUnO1xuICAgICAgICBkaXZTdHlsZXMucGFkZGluZ1RvcCA9IHBhZGRpbmcgKyBcIiVcIjtcbiAgICAgICAgLy8gc2V0IG5lY2Vzc2FyeSBzdHlsZXMgb2YgdGFyZ2V0ZWQgPGVsZW1lbnQ+XG4gICAgICAgIHZhciBmcmFtZVN0eWxlID0gZnJhbWUuc3R5bGU7XG4gICAgICAgIGZyYW1lU3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBmcmFtZVN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICBmcmFtZVN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgZnJhbWVTdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgICBmcmFtZVN0eWxlLnRvcCA9ICcwJztcbiAgICAgICAgLy8gcmVmcmFtZSB0YXJnZXRlZCA8ZWxlbWVudD5cbiAgICAgICAgKF9hID0gZnJhbWUucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmluc2VydEJlZm9yZShkaXYsIGZyYW1lKTtcbiAgICAgICAgKF9iID0gZnJhbWUucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnJlbW92ZUNoaWxkKGZyYW1lKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVmcmFtZTtcbiIsIi8qKlxuICogd2hhdC1pbnB1dCAtIEEgZ2xvYmFsIHV0aWxpdHkgZm9yIHRyYWNraW5nIHRoZSBjdXJyZW50IGlucHV0IG1ldGhvZCAobW91c2UsIGtleWJvYXJkIG9yIHRvdWNoKS5cbiAqIEB2ZXJzaW9uIHY1LjIuMTJcbiAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS90ZW4xc2V2ZW4vd2hhdC1pbnB1dFxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwid2hhdElucHV0XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndoYXRJbnB1dFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3aGF0SW5wdXRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuXG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0ICAvKlxuXHQgICAqIGJhaWwgb3V0IGlmIHRoZXJlIGlzIG5vIGRvY3VtZW50IG9yIHdpbmRvd1xuXHQgICAqIChpLmUuIGluIGEgbm9kZS9ub24tRE9NIGVudmlyb25tZW50KVxuXHQgICAqXG5cdCAgICogUmV0dXJuIGEgc3R1YmJlZCBBUEkgaW5zdGVhZFxuXHQgICAqL1xuXHQgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICByZXR1cm4ge1xuXHQgICAgICAvLyBhbHdheXMgcmV0dXJuIFwiaW5pdGlhbFwiIGJlY2F1c2Ugbm8gaW50ZXJhY3Rpb24gd2lsbCBldmVyIGJlIGRldGVjdGVkXG5cdCAgICAgIGFzazogZnVuY3Rpb24gYXNrKCkge1xuXHQgICAgICAgIHJldHVybiAnaW5pdGlhbCc7XG5cdCAgICAgIH0sXG5cblx0ICAgICAgLy8gYWx3YXlzIHJldHVybiBudWxsXG5cdCAgICAgIGVsZW1lbnQ6IGZ1bmN0aW9uIGVsZW1lbnQoKSB7XG5cdCAgICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICAgIH0sXG5cblx0ICAgICAgLy8gbm8tb3Bcblx0ICAgICAgaWdub3JlS2V5czogZnVuY3Rpb24gaWdub3JlS2V5cygpIHt9LFxuXG5cdCAgICAgIC8vIG5vLW9wXG5cdCAgICAgIHNwZWNpZmljS2V5czogZnVuY3Rpb24gc3BlY2lmaWNLZXlzKCkge30sXG5cblx0ICAgICAgLy8gbm8tb3Bcblx0ICAgICAgcmVnaXN0ZXJPbkNoYW5nZTogZnVuY3Rpb24gcmVnaXN0ZXJPbkNoYW5nZSgpIHt9LFxuXG5cdCAgICAgIC8vIG5vLW9wXG5cdCAgICAgIHVuUmVnaXN0ZXJPbkNoYW5nZTogZnVuY3Rpb24gdW5SZWdpc3Rlck9uQ2hhbmdlKCkge31cblx0ICAgIH07XG5cdCAgfVxuXG5cdCAgLypcblx0ICAgKiB2YXJpYWJsZXNcblx0ICAgKi9cblxuXHQgIC8vIGNhY2hlIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuXHQgIHZhciBkb2NFbGVtID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cdCAgLy8gY3VycmVudGx5IGZvY3VzZWQgZG9tIGVsZW1lbnRcblx0ICB2YXIgY3VycmVudEVsZW1lbnQgPSBudWxsO1xuXG5cdCAgLy8gbGFzdCB1c2VkIGlucHV0IHR5cGVcblx0ICB2YXIgY3VycmVudElucHV0ID0gJ2luaXRpYWwnO1xuXG5cdCAgLy8gbGFzdCB1c2VkIGlucHV0IGludGVudFxuXHQgIHZhciBjdXJyZW50SW50ZW50ID0gY3VycmVudElucHV0O1xuXG5cdCAgLy8gVU5JWCB0aW1lc3RhbXAgb2YgY3VycmVudCBldmVudFxuXHQgIHZhciBjdXJyZW50VGltZXN0YW1wID0gRGF0ZS5ub3coKTtcblxuXHQgIC8vIGNoZWNrIGZvciBhIGBkYXRhLXdoYXRwZXJzaXN0YCBhdHRyaWJ1dGUgb24gZWl0aGVyIHRoZSBgaHRtbGAgb3IgYGJvZHlgIGVsZW1lbnRzLCBkZWZhdWx0cyB0byBgdHJ1ZWBcblx0ICB2YXIgc2hvdWxkUGVyc2lzdCA9IGZhbHNlO1xuXG5cdCAgLy8gZm9ybSBpbnB1dCB0eXBlc1xuXHQgIHZhciBmb3JtSW5wdXRzID0gWydidXR0b24nLCAnaW5wdXQnLCAnc2VsZWN0JywgJ3RleHRhcmVhJ107XG5cblx0ICAvLyBlbXB0eSBhcnJheSBmb3IgaG9sZGluZyBjYWxsYmFjayBmdW5jdGlvbnNcblx0ICB2YXIgZnVuY3Rpb25MaXN0ID0gW107XG5cblx0ICAvLyBsaXN0IG9mIG1vZGlmaWVyIGtleXMgY29tbW9ubHkgdXNlZCB3aXRoIHRoZSBtb3VzZSBhbmRcblx0ICAvLyBjYW4gYmUgc2FmZWx5IGlnbm9yZWQgdG8gcHJldmVudCBmYWxzZSBrZXlib2FyZCBkZXRlY3Rpb25cblx0ICB2YXIgaWdub3JlTWFwID0gWzE2LCAvLyBzaGlmdFxuXHQgIDE3LCAvLyBjb250cm9sXG5cdCAgMTgsIC8vIGFsdFxuXHQgIDkxLCAvLyBXaW5kb3dzIGtleSAvIGxlZnQgQXBwbGUgY21kXG5cdCAgOTMgLy8gV2luZG93cyBtZW51IC8gcmlnaHQgQXBwbGUgY21kXG5cdCAgXTtcblxuXHQgIHZhciBzcGVjaWZpY01hcCA9IFtdO1xuXG5cdCAgLy8gbWFwcGluZyBvZiBldmVudHMgdG8gaW5wdXQgdHlwZXNcblx0ICB2YXIgaW5wdXRNYXAgPSB7XG5cdCAgICBrZXlkb3duOiAna2V5Ym9hcmQnLFxuXHQgICAga2V5dXA6ICdrZXlib2FyZCcsXG5cdCAgICBtb3VzZWRvd246ICdtb3VzZScsXG5cdCAgICBtb3VzZW1vdmU6ICdtb3VzZScsXG5cdCAgICBNU1BvaW50ZXJEb3duOiAncG9pbnRlcicsXG5cdCAgICBNU1BvaW50ZXJNb3ZlOiAncG9pbnRlcicsXG5cdCAgICBwb2ludGVyZG93bjogJ3BvaW50ZXInLFxuXHQgICAgcG9pbnRlcm1vdmU6ICdwb2ludGVyJyxcblx0ICAgIHRvdWNoc3RhcnQ6ICd0b3VjaCcsXG5cdCAgICB0b3VjaGVuZDogJ3RvdWNoJ1xuXG5cdCAgICAvLyBib29sZWFuOiB0cnVlIGlmIHRoZSBwYWdlIGlzIGJlaW5nIHNjcm9sbGVkXG5cdCAgfTt2YXIgaXNTY3JvbGxpbmcgPSBmYWxzZTtcblxuXHQgIC8vIHN0b3JlIGN1cnJlbnQgbW91c2UgcG9zaXRpb25cblx0ICB2YXIgbW91c2VQb3MgPSB7XG5cdCAgICB4OiBudWxsLFxuXHQgICAgeTogbnVsbFxuXG5cdCAgICAvLyBtYXAgb2YgSUUgMTAgcG9pbnRlciBldmVudHNcblx0ICB9O3ZhciBwb2ludGVyTWFwID0ge1xuXHQgICAgMjogJ3RvdWNoJyxcblx0ICAgIDM6ICd0b3VjaCcsIC8vIHRyZWF0IHBlbiBsaWtlIHRvdWNoXG5cdCAgICA0OiAnbW91c2UnXG5cblx0ICAgIC8vIGNoZWNrIHN1cHBvcnQgZm9yIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzXG5cdCAgfTt2YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG5cblx0ICB0cnkge1xuXHQgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuXHQgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCBvcHRzKTtcblx0ICB9IGNhdGNoIChlKSB7fVxuXHQgIC8vIGZhaWwgc2lsZW50bHlcblxuXG5cdCAgLypcblx0ICAgKiBzZXQgdXBcblx0ICAgKi9cblxuXHQgIHZhciBzZXRVcCA9IGZ1bmN0aW9uIHNldFVwKCkge1xuXHQgICAgLy8gYWRkIGNvcnJlY3QgbW91c2Ugd2hlZWwgZXZlbnQgbWFwcGluZyB0byBgaW5wdXRNYXBgXG5cdCAgICBpbnB1dE1hcFtkZXRlY3RXaGVlbCgpXSA9ICdtb3VzZSc7XG5cblx0ICAgIGFkZExpc3RlbmVycygpO1xuXHQgIH07XG5cblx0ICAvKlxuXHQgICAqIGV2ZW50c1xuXHQgICAqL1xuXG5cdCAgdmFyIGFkZExpc3RlbmVycyA9IGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcblx0ICAgIC8vIGBwb2ludGVybW92ZWAsIGBNU1BvaW50ZXJNb3ZlYCwgYG1vdXNlbW92ZWAgYW5kIG1vdXNlIHdoZWVsIGV2ZW50IGJpbmRpbmdcblx0ICAgIC8vIGNhbiBvbmx5IGRlbW9uc3RyYXRlIHBvdGVudGlhbCwgYnV0IG5vdCBhY3R1YWwsIGludGVyYWN0aW9uXG5cdCAgICAvLyBhbmQgYXJlIHRyZWF0ZWQgc2VwYXJhdGVseVxuXHQgICAgdmFyIG9wdGlvbnMgPSBzdXBwb3J0c1Bhc3NpdmUgPyB7IHBhc3NpdmU6IHRydWUsIGNhcHR1cmU6IHRydWUgfSA6IHRydWU7XG5cblx0ICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBzZXRQZXJzaXN0LCB0cnVlKTtcblxuXHQgICAgLy8gcG9pbnRlciBldmVudHMgKG1vdXNlLCBwZW4sIHRvdWNoKVxuXHQgICAgaWYgKHdpbmRvdy5Qb2ludGVyRXZlbnQpIHtcblx0ICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgc2V0SW5wdXQsIHRydWUpO1xuXHQgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBzZXRJbnRlbnQsIHRydWUpO1xuXHQgICAgfSBlbHNlIGlmICh3aW5kb3cuTVNQb2ludGVyRXZlbnQpIHtcblx0ICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlckRvd24nLCBzZXRJbnB1dCwgdHJ1ZSk7XG5cdCAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJNb3ZlJywgc2V0SW50ZW50LCB0cnVlKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIC8vIG1vdXNlIGV2ZW50c1xuXHQgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2V0SW5wdXQsIHRydWUpO1xuXHQgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc2V0SW50ZW50LCB0cnVlKTtcblxuXHQgICAgICAvLyB0b3VjaCBldmVudHNcblx0ICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuXHQgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc2V0SW5wdXQsIG9wdGlvbnMpO1xuXHQgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHNldElucHV0LCB0cnVlKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICAvLyBtb3VzZSB3aGVlbFxuXHQgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZGV0ZWN0V2hlZWwoKSwgc2V0SW50ZW50LCBvcHRpb25zKTtcblxuXHQgICAgLy8ga2V5Ym9hcmQgZXZlbnRzXG5cdCAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHNldElucHV0LCB0cnVlKTtcblx0ICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHNldElucHV0LCB0cnVlKTtcblxuXHQgICAgLy8gZm9jdXMgZXZlbnRzXG5cdCAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHNldEVsZW1lbnQsIHRydWUpO1xuXHQgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgY2xlYXJFbGVtZW50LCB0cnVlKTtcblx0ICB9O1xuXG5cdCAgLy8gY2hlY2tzIGlmIGlucHV0IHBlcnNpc3RlbmNlIHNob3VsZCBoYXBwZW4gYW5kXG5cdCAgLy8gZ2V0IHNhdmVkIHN0YXRlIGZyb20gc2Vzc2lvbiBzdG9yYWdlIGlmIHRydWUgKGRlZmF1bHRzIHRvIGBmYWxzZWApXG5cdCAgdmFyIHNldFBlcnNpc3QgPSBmdW5jdGlvbiBzZXRQZXJzaXN0KCkge1xuXHQgICAgc2hvdWxkUGVyc2lzdCA9ICEoZG9jRWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2hhdHBlcnNpc3QnKSA9PT0gJ2ZhbHNlJyB8fCBkb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZSgnZGF0YS13aGF0cGVyc2lzdCcpID09PSAnZmFsc2UnKTtcblxuXHQgICAgaWYgKHNob3VsZFBlcnNpc3QpIHtcblx0ICAgICAgLy8gY2hlY2sgZm9yIHNlc3Npb24gdmFyaWFibGVzIGFuZCB1c2UgaWYgYXZhaWxhYmxlXG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgaWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aGF0LWlucHV0JykpIHtcblx0ICAgICAgICAgIGN1cnJlbnRJbnB1dCA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aGF0LWlucHV0Jyk7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgaWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aGF0LWludGVudCcpKSB7XG5cdCAgICAgICAgICBjdXJyZW50SW50ZW50ID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3doYXQtaW50ZW50Jyk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgLy8gZmFpbCBzaWxlbnRseVxuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIC8vIGFsd2F5cyBydW4gdGhlc2Ugc28gYXQgbGVhc3QgYGluaXRpYWxgIHN0YXRlIGlzIHNldFxuXHQgICAgZG9VcGRhdGUoJ2lucHV0Jyk7XG5cdCAgICBkb1VwZGF0ZSgnaW50ZW50Jyk7XG5cdCAgfTtcblxuXHQgIC8vIGNoZWNrcyBjb25kaXRpb25zIGJlZm9yZSB1cGRhdGluZyBuZXcgaW5wdXRcblx0ICB2YXIgc2V0SW5wdXQgPSBmdW5jdGlvbiBzZXRJbnB1dChldmVudCkge1xuXHQgICAgdmFyIGV2ZW50S2V5ID0gZXZlbnQud2hpY2g7XG5cdCAgICB2YXIgdmFsdWUgPSBpbnB1dE1hcFtldmVudC50eXBlXTtcblxuXHQgICAgaWYgKHZhbHVlID09PSAncG9pbnRlcicpIHtcblx0ICAgICAgdmFsdWUgPSBwb2ludGVyVHlwZShldmVudCk7XG5cdCAgICB9XG5cblx0ICAgIHZhciBpZ25vcmVNYXRjaCA9ICFzcGVjaWZpY01hcC5sZW5ndGggJiYgaWdub3JlTWFwLmluZGV4T2YoZXZlbnRLZXkpID09PSAtMTtcblxuXHQgICAgdmFyIHNwZWNpZmljTWF0Y2ggPSBzcGVjaWZpY01hcC5sZW5ndGggJiYgc3BlY2lmaWNNYXAuaW5kZXhPZihldmVudEtleSkgIT09IC0xO1xuXG5cdCAgICB2YXIgc2hvdWxkVXBkYXRlID0gdmFsdWUgPT09ICdrZXlib2FyZCcgJiYgZXZlbnRLZXkgJiYgKGlnbm9yZU1hdGNoIHx8IHNwZWNpZmljTWF0Y2gpIHx8IHZhbHVlID09PSAnbW91c2UnIHx8IHZhbHVlID09PSAndG91Y2gnO1xuXG5cdCAgICAvLyBwcmV2ZW50IHRvdWNoIGRldGVjdGlvbiBmcm9tIGJlaW5nIG92ZXJyaWRkZW4gYnkgZXZlbnQgZXhlY3V0aW9uIG9yZGVyXG5cdCAgICBpZiAodmFsaWRhdGVUb3VjaCh2YWx1ZSkpIHtcblx0ICAgICAgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG5cdCAgICB9XG5cblx0ICAgIGlmIChzaG91bGRVcGRhdGUgJiYgY3VycmVudElucHV0ICE9PSB2YWx1ZSkge1xuXHQgICAgICBjdXJyZW50SW5wdXQgPSB2YWx1ZTtcblxuXHQgICAgICBwZXJzaXN0SW5wdXQoJ2lucHV0JywgY3VycmVudElucHV0KTtcblx0ICAgICAgZG9VcGRhdGUoJ2lucHV0Jyk7XG5cdCAgICB9XG5cblx0ICAgIGlmIChzaG91bGRVcGRhdGUgJiYgY3VycmVudEludGVudCAhPT0gdmFsdWUpIHtcblx0ICAgICAgLy8gcHJlc2VydmUgaW50ZW50IGZvciBrZXlib2FyZCBpbnRlcmFjdGlvbiB3aXRoIGZvcm0gZmllbGRzXG5cdCAgICAgIHZhciBhY3RpdmVFbGVtID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0ICAgICAgdmFyIG5vdEZvcm1JbnB1dCA9IGFjdGl2ZUVsZW0gJiYgYWN0aXZlRWxlbS5ub2RlTmFtZSAmJiAoZm9ybUlucHV0cy5pbmRleE9mKGFjdGl2ZUVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkgPT09IC0xIHx8IGFjdGl2ZUVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2J1dHRvbicgJiYgIWNoZWNrQ2xvc2VzdChhY3RpdmVFbGVtLCAnZm9ybScpKTtcblxuXHQgICAgICBpZiAobm90Rm9ybUlucHV0KSB7XG5cdCAgICAgICAgY3VycmVudEludGVudCA9IHZhbHVlO1xuXG5cdCAgICAgICAgcGVyc2lzdElucHV0KCdpbnRlbnQnLCBjdXJyZW50SW50ZW50KTtcblx0ICAgICAgICBkb1VwZGF0ZSgnaW50ZW50Jyk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9O1xuXG5cdCAgLy8gdXBkYXRlcyB0aGUgZG9jIGFuZCBgaW5wdXRUeXBlc2AgYXJyYXkgd2l0aCBuZXcgaW5wdXRcblx0ICB2YXIgZG9VcGRhdGUgPSBmdW5jdGlvbiBkb1VwZGF0ZSh3aGljaCkge1xuXHQgICAgZG9jRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtd2hhdCcgKyB3aGljaCwgd2hpY2ggPT09ICdpbnB1dCcgPyBjdXJyZW50SW5wdXQgOiBjdXJyZW50SW50ZW50KTtcblxuXHQgICAgZmlyZUZ1bmN0aW9ucyh3aGljaCk7XG5cdCAgfTtcblxuXHQgIC8vIHVwZGF0ZXMgaW5wdXQgaW50ZW50IGZvciBgbW91c2Vtb3ZlYCBhbmQgYHBvaW50ZXJtb3ZlYFxuXHQgIHZhciBzZXRJbnRlbnQgPSBmdW5jdGlvbiBzZXRJbnRlbnQoZXZlbnQpIHtcblx0ICAgIHZhciB2YWx1ZSA9IGlucHV0TWFwW2V2ZW50LnR5cGVdO1xuXG5cdCAgICBpZiAodmFsdWUgPT09ICdwb2ludGVyJykge1xuXHQgICAgICB2YWx1ZSA9IHBvaW50ZXJUeXBlKGV2ZW50KTtcblx0ICAgIH1cblxuXHQgICAgLy8gdGVzdCB0byBzZWUgaWYgYG1vdXNlbW92ZWAgaGFwcGVuZWQgcmVsYXRpdmUgdG8gdGhlIHNjcmVlbiB0byBkZXRlY3Qgc2Nyb2xsaW5nIHZlcnN1cyBtb3VzZW1vdmVcblx0ICAgIGRldGVjdFNjcm9sbGluZyhldmVudCk7XG5cblx0ICAgIC8vIG9ubHkgZXhlY3V0ZSBpZiBzY3JvbGxpbmcgaXNuJ3QgaGFwcGVuaW5nXG5cdCAgICBpZiAoKCFpc1Njcm9sbGluZyAmJiAhdmFsaWRhdGVUb3VjaCh2YWx1ZSkgfHwgaXNTY3JvbGxpbmcgJiYgZXZlbnQudHlwZSA9PT0gJ3doZWVsJyB8fCBldmVudC50eXBlID09PSAnbW91c2V3aGVlbCcgfHwgZXZlbnQudHlwZSA9PT0gJ0RPTU1vdXNlU2Nyb2xsJykgJiYgY3VycmVudEludGVudCAhPT0gdmFsdWUpIHtcblx0ICAgICAgY3VycmVudEludGVudCA9IHZhbHVlO1xuXG5cdCAgICAgIHBlcnNpc3RJbnB1dCgnaW50ZW50JywgY3VycmVudEludGVudCk7XG5cdCAgICAgIGRvVXBkYXRlKCdpbnRlbnQnKTtcblx0ICAgIH1cblx0ICB9O1xuXG5cdCAgdmFyIHNldEVsZW1lbnQgPSBmdW5jdGlvbiBzZXRFbGVtZW50KGV2ZW50KSB7XG5cdCAgICBpZiAoIWV2ZW50LnRhcmdldC5ub2RlTmFtZSkge1xuXHQgICAgICAvLyBJZiBub2RlTmFtZSBpcyB1bmRlZmluZWQsIGNsZWFyIHRoZSBlbGVtZW50XG5cdCAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiBjbGljayBpbnNpZGUgYW4gPHN2Zz4gZWxlbWVudC5cblx0ICAgICAgY2xlYXJFbGVtZW50KCk7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgY3VycmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0ICAgIGRvY0VsZW0uc2V0QXR0cmlidXRlKCdkYXRhLXdoYXRlbGVtZW50JywgY3VycmVudEVsZW1lbnQpO1xuXG5cdCAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdCAmJiBldmVudC50YXJnZXQuY2xhc3NMaXN0Lmxlbmd0aCkge1xuXHQgICAgICBkb2NFbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS13aGF0Y2xhc3NlcycsIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9TdHJpbmcoKS5yZXBsYWNlKCcgJywgJywnKSk7XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIHZhciBjbGVhckVsZW1lbnQgPSBmdW5jdGlvbiBjbGVhckVsZW1lbnQoKSB7XG5cdCAgICBjdXJyZW50RWxlbWVudCA9IG51bGw7XG5cblx0ICAgIGRvY0VsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXdoYXRlbGVtZW50Jyk7XG5cdCAgICBkb2NFbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS13aGF0Y2xhc3NlcycpO1xuXHQgIH07XG5cblx0ICB2YXIgcGVyc2lzdElucHV0ID0gZnVuY3Rpb24gcGVyc2lzdElucHV0KHdoaWNoLCB2YWx1ZSkge1xuXHQgICAgaWYgKHNob3VsZFBlcnNpc3QpIHtcblx0ICAgICAgdHJ5IHtcblx0ICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnd2hhdC0nICsgd2hpY2gsIHZhbHVlKTtcblx0ICAgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgIC8vIGZhaWwgc2lsZW50bHlcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH07XG5cblx0ICAvKlxuXHQgICAqIHV0aWxpdGllc1xuXHQgICAqL1xuXG5cdCAgdmFyIHBvaW50ZXJUeXBlID0gZnVuY3Rpb24gcG9pbnRlclR5cGUoZXZlbnQpIHtcblx0ICAgIGlmICh0eXBlb2YgZXZlbnQucG9pbnRlclR5cGUgPT09ICdudW1iZXInKSB7XG5cdCAgICAgIHJldHVybiBwb2ludGVyTWFwW2V2ZW50LnBvaW50ZXJUeXBlXTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIC8vIHRyZWF0IHBlbiBsaWtlIHRvdWNoXG5cdCAgICAgIHJldHVybiBldmVudC5wb2ludGVyVHlwZSA9PT0gJ3BlbicgPyAndG91Y2gnIDogZXZlbnQucG9pbnRlclR5cGU7XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIC8vIHByZXZlbnQgdG91Y2ggZGV0ZWN0aW9uIGZyb20gYmVpbmcgb3ZlcnJpZGRlbiBieSBldmVudCBleGVjdXRpb24gb3JkZXJcblx0ICB2YXIgdmFsaWRhdGVUb3VjaCA9IGZ1bmN0aW9uIHZhbGlkYXRlVG91Y2godmFsdWUpIHtcblx0ICAgIHZhciB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuXG5cdCAgICB2YXIgdG91Y2hJc1ZhbGlkID0gdmFsdWUgPT09ICdtb3VzZScgJiYgY3VycmVudElucHV0ID09PSAndG91Y2gnICYmIHRpbWVzdGFtcCAtIGN1cnJlbnRUaW1lc3RhbXAgPCAyMDA7XG5cblx0ICAgIGN1cnJlbnRUaW1lc3RhbXAgPSB0aW1lc3RhbXA7XG5cblx0ICAgIHJldHVybiB0b3VjaElzVmFsaWQ7XG5cdCAgfTtcblxuXHQgIC8vIGRldGVjdCB2ZXJzaW9uIG9mIG1vdXNlIHdoZWVsIGV2ZW50IHRvIHVzZVxuXHQgIC8vIHZpYSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC93aGVlbF9ldmVudFxuXHQgIHZhciBkZXRlY3RXaGVlbCA9IGZ1bmN0aW9uIGRldGVjdFdoZWVsKCkge1xuXHQgICAgdmFyIHdoZWVsVHlwZSA9IG51bGw7XG5cblx0ICAgIC8vIE1vZGVybiBicm93c2VycyBzdXBwb3J0IFwid2hlZWxcIlxuXHQgICAgaWYgKCdvbndoZWVsJyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkge1xuXHQgICAgICB3aGVlbFR5cGUgPSAnd2hlZWwnO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgLy8gV2Via2l0IGFuZCBJRSBzdXBwb3J0IGF0IGxlYXN0IFwibW91c2V3aGVlbFwiXG5cdCAgICAgIC8vIG9yIGFzc3VtZSB0aGF0IHJlbWFpbmluZyBicm93c2VycyBhcmUgb2xkZXIgRmlyZWZveFxuXHQgICAgICB3aGVlbFR5cGUgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgIT09IHVuZGVmaW5lZCA/ICdtb3VzZXdoZWVsJyA6ICdET01Nb3VzZVNjcm9sbCc7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiB3aGVlbFR5cGU7XG5cdCAgfTtcblxuXHQgIC8vIHJ1bnMgY2FsbGJhY2sgZnVuY3Rpb25zXG5cdCAgdmFyIGZpcmVGdW5jdGlvbnMgPSBmdW5jdGlvbiBmaXJlRnVuY3Rpb25zKHR5cGUpIHtcblx0ICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBmdW5jdGlvbkxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgaWYgKGZ1bmN0aW9uTGlzdFtpXS50eXBlID09PSB0eXBlKSB7XG5cdCAgICAgICAgZnVuY3Rpb25MaXN0W2ldLmZuLmNhbGwodW5kZWZpbmVkLCB0eXBlID09PSAnaW5wdXQnID8gY3VycmVudElucHV0IDogY3VycmVudEludGVudCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9O1xuXG5cdCAgLy8gZmluZHMgbWF0Y2hpbmcgZWxlbWVudCBpbiBhbiBvYmplY3Rcblx0ICB2YXIgb2JqUG9zID0gZnVuY3Rpb24gb2JqUG9zKG1hdGNoKSB7XG5cdCAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZnVuY3Rpb25MaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIGlmIChmdW5jdGlvbkxpc3RbaV0uZm4gPT09IG1hdGNoKSB7XG5cdCAgICAgICAgcmV0dXJuIGk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9O1xuXG5cdCAgdmFyIGRldGVjdFNjcm9sbGluZyA9IGZ1bmN0aW9uIGRldGVjdFNjcm9sbGluZyhldmVudCkge1xuXHQgICAgaWYgKG1vdXNlUG9zLnggIT09IGV2ZW50LnNjcmVlblggfHwgbW91c2VQb3MueSAhPT0gZXZlbnQuc2NyZWVuWSkge1xuXHQgICAgICBpc1Njcm9sbGluZyA9IGZhbHNlO1xuXG5cdCAgICAgIG1vdXNlUG9zLnggPSBldmVudC5zY3JlZW5YO1xuXHQgICAgICBtb3VzZVBvcy55ID0gZXZlbnQuc2NyZWVuWTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGlzU2Nyb2xsaW5nID0gdHJ1ZTtcblx0ICAgIH1cblx0ICB9O1xuXG5cdCAgLy8gbWFudWFsIHZlcnNpb24gb2YgYGNsb3Nlc3QoKWBcblx0ICB2YXIgY2hlY2tDbG9zZXN0ID0gZnVuY3Rpb24gY2hlY2tDbG9zZXN0KGVsZW0sIHRhZykge1xuXHQgICAgdmFyIEVsZW1lbnRQcm90b3R5cGUgPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGU7XG5cblx0ICAgIGlmICghRWxlbWVudFByb3RvdHlwZS5tYXRjaGVzKSB7XG5cdCAgICAgIEVsZW1lbnRQcm90b3R5cGUubWF0Y2hlcyA9IEVsZW1lbnRQcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudFByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG5cdCAgICB9XG5cblx0ICAgIGlmICghRWxlbWVudFByb3RvdHlwZS5jbG9zZXN0KSB7XG5cdCAgICAgIGRvIHtcblx0ICAgICAgICBpZiAoZWxlbS5tYXRjaGVzKHRhZykpIHtcblx0ICAgICAgICAgIHJldHVybiBlbGVtO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGVsZW0gPSBlbGVtLnBhcmVudEVsZW1lbnQgfHwgZWxlbS5wYXJlbnROb2RlO1xuXHQgICAgICB9IHdoaWxlIChlbGVtICE9PSBudWxsICYmIGVsZW0ubm9kZVR5cGUgPT09IDEpO1xuXG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIGVsZW0uY2xvc2VzdCh0YWcpO1xuXHQgICAgfVxuXHQgIH07XG5cblx0ICAvKlxuXHQgICAqIGluaXRcblx0ICAgKi9cblxuXHQgIC8vIGRvbid0IHN0YXJ0IHNjcmlwdCB1bmxlc3MgYnJvd3NlciBjdXRzIHRoZSBtdXN0YXJkXG5cdCAgLy8gKGFsc28gcGFzc2VzIGlmIHBvbHlmaWxscyBhcmUgdXNlZClcblx0ICBpZiAoJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdyAmJiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xuXHQgICAgc2V0VXAoKTtcblx0ICB9XG5cblx0ICAvKlxuXHQgICAqIGFwaVxuXHQgICAqL1xuXG5cdCAgcmV0dXJuIHtcblx0ICAgIC8vIHJldHVybnMgc3RyaW5nOiB0aGUgY3VycmVudCBpbnB1dCB0eXBlXG5cdCAgICAvLyBvcHQ6ICdpbnRlbnQnfCdpbnB1dCdcblx0ICAgIC8vICdpbnB1dCcgKGRlZmF1bHQpOiByZXR1cm5zIHRoZSBzYW1lIHZhbHVlIGFzIHRoZSBgZGF0YS13aGF0aW5wdXRgIGF0dHJpYnV0ZVxuXHQgICAgLy8gJ2ludGVudCc6IGluY2x1ZGVzIGBkYXRhLXdoYXRpbnRlbnRgIHZhbHVlIGlmIGl0J3MgZGlmZmVyZW50IHRoYW4gYGRhdGEtd2hhdGlucHV0YFxuXHQgICAgYXNrOiBmdW5jdGlvbiBhc2sob3B0KSB7XG5cdCAgICAgIHJldHVybiBvcHQgPT09ICdpbnRlbnQnID8gY3VycmVudEludGVudCA6IGN1cnJlbnRJbnB1dDtcblx0ICAgIH0sXG5cblx0ICAgIC8vIHJldHVybnMgc3RyaW5nOiB0aGUgY3VycmVudGx5IGZvY3VzZWQgZWxlbWVudCBvciBudWxsXG5cdCAgICBlbGVtZW50OiBmdW5jdGlvbiBlbGVtZW50KCkge1xuXHQgICAgICByZXR1cm4gY3VycmVudEVsZW1lbnQ7XG5cdCAgICB9LFxuXG5cdCAgICAvLyBvdmVyd3JpdGVzIGlnbm9yZWQga2V5cyB3aXRoIHByb3ZpZGVkIGFycmF5XG5cdCAgICBpZ25vcmVLZXlzOiBmdW5jdGlvbiBpZ25vcmVLZXlzKGFycikge1xuXHQgICAgICBpZ25vcmVNYXAgPSBhcnI7XG5cdCAgICB9LFxuXG5cdCAgICAvLyBvdmVyd3JpdGVzIHNwZWNpZmljIGNoYXIga2V5cyB0byB1cGRhdGUgb25cblx0ICAgIHNwZWNpZmljS2V5czogZnVuY3Rpb24gc3BlY2lmaWNLZXlzKGFycikge1xuXHQgICAgICBzcGVjaWZpY01hcCA9IGFycjtcblx0ICAgIH0sXG5cblx0ICAgIC8vIGF0dGFjaCBmdW5jdGlvbnMgdG8gaW5wdXQgYW5kIGludGVudCBcImV2ZW50c1wiXG5cdCAgICAvLyBmdW5jdDogZnVuY3Rpb24gdG8gZmlyZSBvbiBjaGFuZ2Vcblx0ICAgIC8vIGV2ZW50VHlwZTogJ2lucHV0J3wnaW50ZW50J1xuXHQgICAgcmVnaXN0ZXJPbkNoYW5nZTogZnVuY3Rpb24gcmVnaXN0ZXJPbkNoYW5nZShmbiwgZXZlbnRUeXBlKSB7XG5cdCAgICAgIGZ1bmN0aW9uTGlzdC5wdXNoKHtcblx0ICAgICAgICBmbjogZm4sXG5cdCAgICAgICAgdHlwZTogZXZlbnRUeXBlIHx8ICdpbnB1dCdcblx0ICAgICAgfSk7XG5cdCAgICB9LFxuXG5cdCAgICB1blJlZ2lzdGVyT25DaGFuZ2U6IGZ1bmN0aW9uIHVuUmVnaXN0ZXJPbkNoYW5nZShmbikge1xuXHQgICAgICB2YXIgcG9zaXRpb24gPSBvYmpQb3MoZm4pO1xuXG5cdCAgICAgIGlmIChwb3NpdGlvbiB8fCBwb3NpdGlvbiA9PT0gMCkge1xuXHQgICAgICAgIGZ1bmN0aW9uTGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuXHQgICAgICB9XG5cdCAgICB9LFxuXG5cdCAgICBjbGVhclN0b3JhZ2U6IGZ1bmN0aW9uIGNsZWFyU3RvcmFnZSgpIHtcblx0ICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XG5cdCAgICB9XG5cdCAgfTtcblx0fSgpO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSlcbn0pO1xuOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiL2pzL2Rldi9mcm9udC1lbmRcIjogMCxcblx0XCJjc3MvZGV2L2d1dGVuYmVyZy1lZGl0b3Itc3R5bGVzXCI6IDAsXG5cdFwiY3NzL2Rldi9nbG9iYWxcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rc3RhcnRfdGhlbWVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rc3RhcnRfdGhlbWVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJjc3MvZGV2L2d1dGVuYmVyZy1lZGl0b3Itc3R5bGVzXCIsXCJjc3MvZGV2L2dsb2JhbFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL2pzL3NyYy9mcm9udC1lbmQuanNcIikpKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiY3NzL2Rldi9ndXRlbmJlcmctZWRpdG9yLXN0eWxlc1wiLFwiY3NzL2Rldi9nbG9iYWxcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zYXNzL2dsb2JhbC5zY3NzXCIpKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiY3NzL2Rldi9ndXRlbmJlcmctZWRpdG9yLXN0eWxlc1wiLFwiY3NzL2Rldi9nbG9iYWxcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zYXNzL2d1dGVuYmVyZy1lZGl0b3Itc3R5bGVzLnNjc3NcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJyZWZyYW1lIiwiZ2V0TG9jYWxpemF0aW9uIiwic3R5bGVFeHRlcm5hbExpbmtzIiwiaW5pdEV4dGVybmFsTGlua0xhYmVscyIsImluaXRBbmNob3JzIiwiYmFja1RvVG9wIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk1vdmVUbyIsImVhc2VGdW5jdGlvbnMiLCJlYXNlSW5RdWFkIiwidCIsImIiLCJjIiwiZCIsImVhc2VPdXRRdWFkIiwibW92ZVRvIiwiZWFzZSIsInRyaWdnZXJzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW5ndGgiLCJyZWdpc3RlclRyaWdnZXIiLCJpc0xpbmtFeHRlcm5hbCIsImxpbmsiLCJsb2NhbERvbWFpbnMiLCJleGNlcHRpb25zIiwiaXNFeGNlcHRpb24iLCJzb21lIiwiZXhjZXB0aW9uIiwiY29tcGFyZSIsIlJlZ0V4cCIsInRlc3QiLCJsaW5rVXJsIiwiVVJMIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZG9tYWluIiwiaG9zdCIsImdldENoaWxkQWx0VGV4dCIsImNoaWxkcmVuIiwiY2hpbGRJbWdzIiwiZmlsdGVyIiwiY2hpbGQiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJhbHRUZXh0cyIsImFsdCIsIm1hcCIsImpvaW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImFpcl9saWdodF9leHRlcm5hbExpbmtEb21haW5zIiwiY29uY2F0IiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXh0ZXJuYWxMaW5rcyIsImhyZWYiLCJmb3JFYWNoIiwiZXh0ZXJuYWxMaW5rIiwidGV4dENvbnRlbnQiLCJ0cmltIiwiYXJpYUxhYmVsIiwidGFyZ2V0Iiwic2V0QXR0cmlidXRlIiwibGlua3NXaXRoSW1nQ2hpbGRyZW4iLCJzdHJpbmdLZXkiLCJhaXJfbGlnaHRfc2NyZWVuUmVhZGVyVGV4dCIsImlzT3V0T2ZWaWV3cG9ydCIsImVsZW0iLCJib3VuZGluZyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm91dCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJpbm5lckhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwiYW55IiwiJCIsInJlc3BvbnNpdmVuYXYiLCJodG1sIiwiY29udGFpbmVyIiwiYnV0dG9uIiwibWVudSIsIm1lbnVXcmFwcGVyIiwic3ViTWVudXMiLCJsZW4iLCJmb2N1c2FibGVFbGVtZW50cyIsImZpcnN0Rm9jdXNhYmxlRWxlbWVudCIsImxhc3RGb2N1c2FibGVFbGVtZW50IiwibWVudUl0ZW1zIiwibGkiLCJwYXJlbnROb2RlIiwia2V5ZG93bk1vdXNlb3ZlckV2ZW50Iiwia2V5Iiwia2V5ZG93bk1vdXNlbGVhdmVFdmVudCIsImNoZWNrRm9yU3VibWVudU92ZXJmbG93Iiwic3ViTWVudXNVbmRlck1lbnVJdGVtIiwic3ViTWVudSIsImlzT3V0IiwicGFyZW50RWxlbWVudCIsIm1lbnVDb250YWluZXIiLCJtZW51VG9nZ2xlIiwiZmluZCIsInNpdGVIZWFkZXJNZW51Iiwic2l0ZU5hdmlnYXRpb24iLCJvbiIsImUiLCJpc1N1Yk1lbnVEcm9wZG93bk9wZW4iLCJwYXJlbnQiLCJwcmV2IiwiYXR0ciIsImlzTWFpbk1lbnVEcm9wZG93bk9wZW4iLCJjbG9zZXN0IiwiYXJlV2VJbkRyb3Bkb3duIiwiaGFzQ2xhc3MiLCJjb2RlIiwidGhpc0Ryb3Bkb3duIiwic2NyZWVuUmVhZGVyU3BhbiIsImRyb3Bkb3duVG9nZ2xlIiwicmVtb3ZlQ2xhc3MiLCJ0ZXh0IiwiZXhwYW5kIiwidHJpZ2dlciIsInByZXZEcm9wZG93biIsInNjcmVlblJlYWRlclNwYW5QcmV2IiwiZHJvcGRvd25Ub2dnbGVQcmV2IiwibmV4dERyb3Bkb3duIiwibmV4dCIsInNjcmVlblJlYWRlclNwYW5OZXh0IiwiZHJvcGRvd25Ub2dnbGVOZXh0IiwiZWFjaCIsImV4cGFuZF9mb3IiLCJkcm9wZG93bk1lbnUiLCJuZXh0QWxsIiwidG9nZ2xlQ2xhc3MiLCJjb2xsYXBzZV9mb3IiLCJhZGRDbGFzcyIsImluZGV4T2YiLCJzdG9wUHJvcGFnYXRpb24iLCJpcyIsInBhcmVudHMiLCJmaXJzdCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJtb2JpbGVOYXYiLCJtb2JpbGVOYXZJbnN0YW5jZSIsImV4cGFuZF90b2dnbGUiLCJjb2xsYXBzZV90b2dnbGUiLCJzY3JvbGxUbyIsInN0eWxlIiwiZGlzcGxheSIsImNsYXNzTmFtZSIsIm5hdkVsZW1lbnRzIiwiaWkiLCJmb2N1c1RyYXAiLCJvbmNsaWNrIiwiY2xvc2VNZW51IiwiZXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVwbGFjZSIsImZvY3VzIiwidG9nZ2xlRm9jdXMiLCJzZWxmIiwiZWwiLCJoYXNBdHRyaWJ1dGUiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImdldENsaWVudFJlY3RzIiwic2hpZnRLZXkiLCJqUXVlcnkiLCJtb3ZlVG9Ub3AiLCJkdXJhdGlvbiIsImVhc2luZyIsInRvcEJ1dHRvbiIsInRyYWNrU2Nyb2xsIiwic2Nyb2xsZWQiLCJwYWdlWU9mZnNldCIsInNjcm9sbEFtb3VudCIsImJhY2tUb1RvcEV2ZW50IiwicHJldmVudERlZmF1bHQiLCJtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==