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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLCtCQUErQjs7QUFFdEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsTUFBTTs7QUFFTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGLE9BQU87QUFDUDtBQUNBLENBQUM7QUFDRDs7Ozs7O1VDcGdCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnQtdGhlbWUvLi9qcy9zcmMvZnJvbnQtZW5kLmpzIiwid2VicGFjazovL3N0YXJ0LXRoZW1lLy4vanMvc3JjL21vZHVsZXMvYW5jaG9ycy5qcyIsIndlYnBhY2s6Ly9zdGFydC10aGVtZS8uL2pzL3NyYy9tb2R1bGVzL2V4dGVybmFsLWxpbmsuanMiLCJ3ZWJwYWNrOi8vc3RhcnQtdGhlbWUvLi9qcy9zcmMvbW9kdWxlcy9sb2NhbGl6YXRpb24uanMiLCJ3ZWJwYWNrOi8vc3RhcnQtdGhlbWUvLi9qcy9zcmMvbW9kdWxlcy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3N0YXJ0LXRoZW1lLy4vanMvc3JjL21vZHVsZXMvdG9wLmpzIiwid2VicGFjazovL3N0YXJ0LXRoZW1lLy4vc2Fzcy9nbG9iYWwuc2Nzcz85NWI3Iiwid2VicGFjazovL3N0YXJ0LXRoZW1lLy4vc2Fzcy9ndXRlbmJlcmctZWRpdG9yLXN0eWxlcy5zY3NzIiwid2VicGFjazovL3N0YXJ0LXRoZW1lLy4vbm9kZV9tb2R1bGVzL21vdmV0by9kaXN0L21vdmVUby5qcyIsIndlYnBhY2s6Ly9zdGFydC10aGVtZS8uL25vZGVfbW9kdWxlcy9yZWZyYW1lLmpzL2Rpc3QvcmVmcmFtZS5lcy5qcyIsIndlYnBhY2s6Ly9zdGFydC10aGVtZS8uL25vZGVfbW9kdWxlcy93aGF0LWlucHV0L2Rpc3Qvd2hhdC1pbnB1dC5qcyIsIndlYnBhY2s6Ly9zdGFydC10aGVtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdGFydC10aGVtZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3N0YXJ0LXRoZW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3N0YXJ0LXRoZW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zdGFydC10aGVtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N0YXJ0LXRoZW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3RhcnQtdGhlbWUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc3RhcnQtdGhlbWUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zdGFydC10aGVtZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3RhcnQtdGhlbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4sIG5vLXBhcmFtLXJlYXNzaWduLCBuby11bnVzZWQtdmFycyAqL1xuLyoqXG4gKiBBaXIgdGhlbWUgSmF2YVNjcmlwdC5cbiAqL1xuXG4vLyBJbXBvcnQgbW9kdWxlc1xuaW1wb3J0IHJlZnJhbWUgZnJvbSAncmVmcmFtZS5qcyc7XG5pbXBvcnQgZ2V0TG9jYWxpemF0aW9uIGZyb20gJy4vbW9kdWxlcy9sb2NhbGl6YXRpb24nO1xuaW1wb3J0IHsgc3R5bGVFeHRlcm5hbExpbmtzLCBpbml0RXh0ZXJuYWxMaW5rTGFiZWxzIH0gZnJvbSAnLi9tb2R1bGVzL2V4dGVybmFsLWxpbmsnO1xuaW1wb3J0IGluaXRBbmNob3JzIGZyb20gJy4vbW9kdWxlcy9hbmNob3JzJztcbmltcG9ydCBiYWNrVG9Ub3AgZnJvbSAnLi9tb2R1bGVzL3RvcCc7XG5pbXBvcnQgJ3doYXQtaW5wdXQnO1xuaW1wb3J0ICcuL21vZHVsZXMvbmF2aWdhdGlvbic7XG4vLyBpbXBvcnQgJy4vbW9kdWxlcy9zdGlja3ktbmF2JztcblxuLy8gRGVmaW5lIEphdmFzY3JpcHQgaXMgYWN0aXZlIGJ5IGNoYW5naW5nIHRoZSBib2R5IGNsYXNzXG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLWpzJyk7XG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2pzJyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGluaXRBbmNob3JzKCk7XG4gIGJhY2tUb1RvcCgpO1xuICBzdHlsZUV4dGVybmFsTGlua3MoKTtcbiAgaW5pdEV4dGVybmFsTGlua0xhYmVscygpO1xuXG4gIC8vIEZpdCB2aWRlbyBlbWJlZHMgdG8gY29udGFpbmVyXG4gIHJlZnJhbWUoJy53cC1oYXMtYXNwZWN0LXJhdGlvIGlmcmFtZScpO1xufSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiwgbm8tdW5kZWYgKi9cbi8qKlxuICogQEF1dGhvcjogUm9uaSBMYXVra2FyaW5lblxuICogQERhdGU6ICAgMjAyMi0wNS0wNyAxMjoyMDoxM1xuICogQExhc3QgTW9kaWZpZWQgYnk6ICAgUm9uaSBMYXVra2FyaW5lblxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAyMi0wNS0xMiAxNzozMjo0M1xuICovXG5pbXBvcnQgTW92ZVRvIGZyb20gJ21vdmV0byc7XG5cbmNvbnN0IGluaXRBbmNob3JzID0gKCkgPT4ge1xuICAvLyBHZW5lcmFsIGFuY2hvcnMgdXNlZCBpbiBsaW5rcyB3aXRoIGNsYXNzIFwianMtdHJpZ2dlclwiXG4gIGNvbnN0IGVhc2VGdW5jdGlvbnMgPSB7XG4gICAgZWFzZUluUXVhZCh0LCBiLCBjLCBkKSB7XG4gICAgICB0IC89IGQ7XG4gICAgICByZXR1cm4gYyAqIHQgKiB0ICsgYjtcbiAgICB9LFxuICAgIGVhc2VPdXRRdWFkKHQsIGIsIGMsIGQpIHtcbiAgICAgIHQgLz0gZDtcbiAgICAgIHJldHVybiAtYyAqIHQgKiAodCAtIDIpICsgYjtcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IG1vdmVUbyA9IG5ldyBNb3ZlVG8oXG4gICAge1xuICAgICAgZWFzZTogJ2Vhc2VJblF1YWQnLFxuICAgIH0sXG4gICAgZWFzZUZ1bmN0aW9ucyxcbiAgKTtcblxuICBjb25zdCB0cmlnZ2VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2pzLXRyaWdnZXInKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdHJpZ2dlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBtb3ZlVG8ucmVnaXN0ZXJUcmlnZ2VyKHRyaWdnZXJzW2ldKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdEFuY2hvcnM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyoqXG4gKiBAQXV0aG9yOiBSb25pIExhdWtrYXJpbmVuXG4gKiBARGF0ZTogICAyMDIxLTA5LTAxIDExOjU1OjM3XG4gKiBATGFzdCBNb2RpZmllZCBieTogICBSb25pIExhdWtrYXJpbmVuXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDIyLTA1LTI2IDEzOjM2OjQ5XG4gKi9cbi8qKlxuICogU3R5bGUgZXh0ZXJuYWwgbGlua3NcbiAqL1xuXG5pbXBvcnQgZ2V0TG9jYWxpemF0aW9uIGZyb20gJy4vbG9jYWxpemF0aW9uJztcblxuZnVuY3Rpb24gaXNMaW5rRXh0ZXJuYWwobGluaywgbG9jYWxEb21haW5zKSB7XG4gIC8vIEVtcHR5IGxpbmtzIGFyZSBub3QgZXh0ZXJuYWxcbiAgaWYgKCFsaW5rLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGV4Y2VwdGlvbnMgPSBbXG4gICAgJyMnLFxuICAgICd0ZWw6JyxcbiAgICAnbWFpbHRvOicsXG4gICAgJy8nLFxuICBdO1xuXG4gIC8vIENoZWNrIGlmIHRoZSB1cmwgc3RhcnRzIHdpdGggc29tZSBvZiB0aGUgZXhjZXB0aW9uc1xuICBjb25zdCBpc0V4Y2VwdGlvbiA9IGV4Y2VwdGlvbnMuc29tZSgoZXhjZXB0aW9uKSA9PiB7XG4gICAgY29uc3QgY29tcGFyZSA9IG5ldyBSZWdFeHAoYF4ke2V4Y2VwdGlvbn1gLCAnZycpO1xuICAgIHJldHVybiBjb21wYXJlLnRlc3QobGluayk7XG4gIH0pO1xuXG4gIGlmIChpc0V4Y2VwdGlvbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGxldCBsaW5rVXJsO1xuICB0cnkge1xuICAgIGxpbmtVcmwgPSBuZXcgVVJMKGxpbmspO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2coYEludmFsaWQgVVJMOiAke2xpbmt9YCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIENoZWNrIGlmIGhvc3QgaXMgb25lIG9mIHRoZSBsb2NhbCBkb21haW5zXG4gIHJldHVybiAhbG9jYWxEb21haW5zLnNvbWUoKGRvbWFpbikgPT4gbGlua1VybC5ob3N0ID09PSBkb21haW4pO1xufVxuXG4vKipcbiAqIFRyeSB0byBnZXQgaW1hZ2UgYWx0IHRleHRzIGZyb20gaW5zaWRlIGEgbGlua1xuICogdG8gdXNlIGluIGFyaWEtbGFiZWwsIHdoZW4gb25seSBlbGVtZW50cyBpbnNpZGVcbiAqIG9mIGxpbmsgYXJlIGltYWdlc1xuICogQHBhcmFtIHsqfSBsaW5rIERPTSBsaW5rIGVsZW1lbnRcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hpbGRBbHRUZXh0KGxpbmspIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBbLi4ubGluay5jaGlsZHJlbl07XG5cbiAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGNvbnN0IGNoaWxkSW1ncyA9IGNoaWxkcmVuLmZpbHRlcigoY2hpbGQpID0+IGNoaWxkLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2ltZycpO1xuXG4gIC8vIElmIHRoZXJlIGFyZSBvdGhlciBlbGVtZW50cyB0aGFuIGltZyBlbGVtZW50cywgbm8gbmVlZCB0byBhZGQgYXJpYS1sYWJlbFxuICBpZiAoY2hpbGRyZW4ubGVuZ3RoICE9PSBjaGlsZEltZ3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLy8gRmluZCBhbHQgdGV4dHMgYW5kIGFkZCB0byBhcnJheVxuICBjb25zdCBhbHRUZXh0cyA9IGNoaWxkSW1ncy5maWx0ZXIoKGNoaWxkKSA9PiBjaGlsZC5hbHQgJiYgY2hpbGQuYWx0ICE9PSAnJykubWFwKChjaGlsZCkgPT4gY2hpbGQuYWx0KTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyBhbHQgdGV4dHMsXG4gIGlmICghYWx0VGV4dHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcmV0dXJuIGFsdFRleHRzLmpvaW4oJywgJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZUV4dGVybmFsTGlua3MoKSB7XG4gIGxldCBsb2NhbERvbWFpbnMgPSBbXG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3QsXG4gIF07XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cuYWlyX2xpZ2h0X2V4dGVybmFsTGlua0RvbWFpbnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbG9jYWxEb21haW5zID0gbG9jYWxEb21haW5zLmNvbmNhdCh3aW5kb3cuYWlyX2xpZ2h0X2V4dGVybmFsTGlua0RvbWFpbnMpO1xuICB9XG5cbiAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG5cbiAgY29uc3QgZXh0ZXJuYWxMaW5rcyA9IFsuLi5saW5rc10uZmlsdGVyKChsaW5rKSA9PiBpc0xpbmtFeHRlcm5hbChsaW5rLmhyZWYsIGxvY2FsRG9tYWlucykpO1xuXG4gIGV4dGVybmFsTGlua3MuZm9yRWFjaCgoZXh0ZXJuYWxMaW5rKSA9PiB7XG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSBleHRlcm5hbExpbmsudGV4dENvbnRlbnQudHJpbSgpLmxlbmd0aFxuICAgICAgPyBleHRlcm5hbExpbmsudGV4dENvbnRlbnQudHJpbSgpIDogZ2V0Q2hpbGRBbHRUZXh0KGV4dGVybmFsTGluayk7XG4gICAgY29uc3QgYXJpYUxhYmVsID0gZXh0ZXJuYWxMaW5rLnRhcmdldCA9PT0gJ19ibGFuaycgPyBgJHt0ZXh0Q29udGVudH06ICR7Z2V0TG9jYWxpemF0aW9uKCdleHRlcm5hbF9saW5rJyl9LCAke2dldExvY2FsaXphdGlvbigndGFyZ2V0X2JsYW5rJyl9YCA6IGAke3RleHRDb250ZW50fTogJHtnZXRMb2NhbGl6YXRpb24oJ2V4dGVybmFsX2xpbmsnKX1gO1xuICAgIGV4dGVybmFsTGluay5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBhcmlhTGFiZWwpO1xuICAgIGV4dGVybmFsTGluay5jbGFzc0xpc3QuYWRkKCdpcy1leHRlcm5hbC1saW5rJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEV4dGVybmFsTGlua0xhYmVscygpIHtcbiAgLy8gQWRkIGFyaWEtbGFiZWxzIHRvIGxpbmtzIHdpdGhvdXQgdGV4dCBvciBhcmlhLWxhYmVscyBhbmQgY29udGFpbiBpbWFnZSB3aXRoIGFsdCB0ZXh0XG4gIGNvbnN0IGxpbmtzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKV07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBjb25zdCBsaW5rc1dpdGhJbWdDaGlsZHJlbiA9IGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAvLyBJZiBsaW5rIGFscmVhZHkgaGFzIHRleHQgY29udGVudCBvciBhbiBhcmlhIGxhYmVsIG5vIG5lZWQgdG8gYWRkIGFyaWEtbGFiZWxcbiAgICBpZiAobGluay50ZXh0Q29udGVudC50cmltKCkgIT09ICcnIHx8IGxpbmsuYXJpYUxhYmVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYXJpYUxhYmVsID0gZ2V0Q2hpbGRBbHRUZXh0KGxpbmspO1xuICAgIGlmIChhcmlhTGFiZWwgIT09ICcnKSB7XG4gICAgICBsaW5rLmFyaWFMYWJlbCA9IGFyaWFMYWJlbDtcbiAgICB9XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TG9jYWxpemF0aW9uKHN0cmluZ0tleSkge1xuICBpZiAodHlwZW9mIHdpbmRvdy5haXJfbGlnaHRfc2NyZWVuUmVhZGVyVGV4dCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdy5haXJfbGlnaHRfc2NyZWVuUmVhZGVyVGV4dFtzdHJpbmdLZXldID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcihgTWlzc2luZyB0cmFuc2xhdGlvbiBmb3IgJHtzdHJpbmdLZXl9YCk7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiB3aW5kb3cuYWlyX2xpZ2h0X3NjcmVlblJlYWRlclRleHRbc3RyaW5nS2V5XTtcbn1cbiIsIi8qKlxuICogQEF1dGhvcjogUm9uaSBMYXVra2FyaW5lblxuICogQERhdGU6ICAgMjAyMS0wNC0yMyAxMzoxMDo1MVxuICogQExhc3QgTW9kaWZpZWQgYnk6ICAgUm9uaSBMYXVra2FyaW5lblxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAyMi0wNS0xMiAxNToxMDowNFxuICovXG4vLyBUT0RPOiBSZWZhY3RvciBmaWxlXG4vKiBlc2xpbnQtZGlzYWJsZSBkZWZhdWx0LWNhc2UsIGNhbWVsY2FzZSwgZXFlcWVxLCBuby1yZXN0cmljdGVkLWdsb2JhbHMsIG5vLXVuZGVmLCBuby12YXIsIHZhcnMtb24tdG9wLCBtYXgtbGVuLCBwcmVmZXItZGVzdHJ1Y3R1cmluZywgbm8tcmVkZWNsYXJlLCBuby1wbHVzcGx1cywgbm8tdXNlLWJlZm9yZS1kZWZpbmUsIG5vLXVudXNlZC12YXJzLCBibG9jay1zY29wZWQtdmFyLCBmdW5jLW5hbWVzICovXG4vKlxuQW4gYWNjZXNzaWJsZSBtZW51IGZvciBXb3JkUHJlc3NcblxuaHR0cHM6Ly9naXRodWIuY29tL3RoZW1lLXNtaXRoL2FjY2Vzc2libGUtbmF2LXdwXG5LaXJzdGVuIFNtaXRoIChraXJzdGVuQHRoZW1lc21pdGguY28udWspXG5MaWNlbnNlZCBHUEwgdi4yIChodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLTIuMC5odG1sKVxuXG5UaGlzIHdvcmsgZGVyaXZlZCBmcm9tOlxuaHR0cHM6Ly9naXRodWIuY29tL1dvcmRQcmVzcy90d2VudHlzaXh0ZWVuIChHUEwgdi4yKVxuaHR0cHM6Ly9naXRodWIuY29tL3dwYWNjZXNzaWJpbGl0eS9hMTF5dGhlbWVwYXR0ZXJucy90cmVlL21hc3Rlci9tZW51LWtleWJvYXJkLWFycm93LW5hdiAoR1BMIHYuMilcbiovXG5cbi8qIVxuICogQ2hlY2sgaWYgYW4gZWxlbWVudCBpcyBvdXQgb2YgdGhlIHZpZXdwb3J0XG4gKiAoYykgMjAxOCBDaHJpcyBGZXJkaW5hbmRpLCBNSVQgTGljZW5zZSwgaHR0cHM6Ly9nb21ha2V0aGluZ3MuY29tXG4gKiBAcGFyYW0gIHtOb2RlfSAgZWxlbSBUaGUgZWxlbWVudCB0byBjaGVja1xuICogQHJldHVybiB7T2JqZWN0fSAgICAgQSBzZXQgb2YgYm9vbGVhbnMgZm9yIGVhY2ggc2lkZSBvZiB0aGUgZWxlbWVudFxuICogQHNvdXJjZSBodHRwczovL2dvbWFrZXRoaW5ncy5jb20vaG93LXRvLWNoZWNrLWlmLWFueS1wYXJ0LW9mLWFuLWVsZW1lbnQtaXMtb3V0LW9mLXRoZS12aWV3cG9ydC13aXRoLXZhbmlsbGEtanMvXG4gKi9cbnZhciBpc091dE9mVmlld3BvcnQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAvLyBHZXQgZWxlbWVudCdzIGJvdW5kaW5nXG4gIHZhciBib3VuZGluZyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgLy8gQ2hlY2sgaWYgaXQncyBvdXQgb2YgdGhlIHZpZXdwb3J0IG9uIGVhY2ggc2lkZVxuICB2YXIgb3V0ID0ge307XG4gIG91dC50b3AgPSBib3VuZGluZy50b3AgPCAwO1xuICBvdXQubGVmdCA9IGJvdW5kaW5nLmxlZnQgPCAwO1xuICBvdXQuYm90dG9tID0gYm91bmRpbmcuYm90dG9tID4gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcbiAgb3V0LnJpZ2h0ID0gYm91bmRpbmcucmlnaHQgPiAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcbiAgb3V0LmFueSA9IG91dC50b3AgfHwgb3V0LmxlZnQgfHwgb3V0LmJvdHRvbSB8fCBvdXQucmlnaHQ7XG5cbiAgcmV0dXJuIG91dDtcbn07XG5cbi8vIE5hdmlnYXRpb24uanMgc3RhcnRcbihmdW5jdGlvbiAoJCkge1xuICAvLyBSZXNwb25zaXZlIG5hdiB3aWR0aFxuICB2YXIgcmVzcG9uc2l2ZW5hdiA9IDk2MDtcbiAgdmFyIGh0bWw7XG4gIHZhciBib2R5O1xuICB2YXIgY29udGFpbmVyO1xuICB2YXIgYnV0dG9uO1xuICB2YXIgbWVudTtcbiAgdmFyIG1lbnVXcmFwcGVyO1xuICB2YXIgbGlua3M7XG4gIHZhciBzdWJNZW51cztcbiAgdmFyIGk7XG4gIHZhciBsZW47XG4gIHZhciBmb2N1c2FibGVFbGVtZW50cztcbiAgdmFyIGZpcnN0Rm9jdXNhYmxlRWxlbWVudDtcbiAgdmFyIGxhc3RGb2N1c2FibGVFbGVtZW50O1xuXG4gIC8vIEhvdmVyIGludGVudFxuICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtJyk7XG4gIC8vIGNvbnN0IGhvdmVySW50ZW50VGltZW91dCA9IDEwMDA7XG5cbiAgbWVudUl0ZW1zLmZvckVhY2goKGxpKSA9PiB7XG4gICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdob3Zlci1pbnRlbnQnKTtcbiAgICAgIHRoaXMucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdob3Zlci1pbnRlbnQnKTtcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChrZXlkb3duTW91c2VvdmVyRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGtleWRvd25Nb3VzZW92ZXJFdmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItaW50ZW50Jyk7XG4gICAgICAgICAgbGkucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci1pbnRlbnQnKTtcbiAgICAgICAgICBsaS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItaW50ZW50Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci1pbnRlbnQnKTtcbiAgICAgIHRoaXMucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci1pbnRlbnQnKTtcbiAgICAgIC8vIH0sIGhvdmVySW50ZW50VGltZW91dCk7XG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoa2V5ZG93bk1vdXNlbGVhdmVFdmVudCkgPT4ge1xuICAgICAgICBpZiAoa2V5ZG93bk1vdXNlbGVhdmVFdmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItaW50ZW50Jyk7XG4gICAgICAgICAgbGkucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci1pbnRlbnQnKTtcbiAgICAgICAgICBsaS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItaW50ZW50Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBJbml0IGlzT3V0IGNoZWNrXG4gIGNoZWNrRm9yU3VibWVudU92ZXJmbG93KCk7XG5cbiAgZnVuY3Rpb24gY2hlY2tGb3JTdWJtZW51T3ZlcmZsb3coKSB7XG4gICAgbWVudUl0ZW1zLmZvckVhY2goKGxpKSA9PiB7XG4gICAgICAvLyBGaW5kIHN1YiBtZW51c1xuICAgICAgdmFyIHN1Yk1lbnVzVW5kZXJNZW51SXRlbSA9IGxpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWItbWVudScpO1xuXG4gICAgICAvLyBMb29wIHRocm91Z2ggc3ViIG1lbnVzXG4gICAgICBzdWJNZW51c1VuZGVyTWVudUl0ZW0uZm9yRWFjaCgoc3ViTWVudSkgPT4ge1xuICAgICAgICAvLyBGaXJzdCBsZXQncyBjaGVjayBpZiBzdWJtZW51IGV4aXN0c1xuICAgICAgICBpZiAodHlwZW9mIHN1Yk1lbnVzVW5kZXJNZW51SXRlbSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgc3ViIG1lbnUgaXMgb3V0IG9mIHZpZXdwb3J0IG9yIG5vdFxuICAgICAgICAgIHZhciBpc091dCA9IGlzT3V0T2ZWaWV3cG9ydChzdWJNZW51KTtcblxuICAgICAgICAgIC8vIEF0IGxlYXN0IG9uZSBzaWRlIG9mIHRoZSBlbGVtZW50IGlzIG91dCBvZiB2aWV3cG9ydFxuICAgICAgICAgIGlmIChpc091dC5yaWdodCkge1xuICAgICAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKCdpcy1vdXQtb2Ytdmlld3BvcnQnKTtcbiAgICAgICAgICAgIHN1Yk1lbnUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLW91dC1vZi12aWV3cG9ydCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW91dC1vZi12aWV3cG9ydCcpO1xuICAgICAgICAgICAgc3ViTWVudS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3V0LW9mLXZpZXdwb3J0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFJlaW5pdCB2aWV3cG9ydCBjaGVjayBvbiByZXNpemUgZXZlbnRcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoZWNrRm9yU3VibWVudU92ZXJmbG93KTtcblxuICAvLyBEZWZpbmUgbWVudSBpdGVtc1xuICB2YXIgbWVudUNvbnRhaW5lciA9ICQoJy5uYXYtY29udGFpbmVyJyk7XG4gIHZhciBtZW51VG9nZ2xlID0gbWVudUNvbnRhaW5lci5maW5kKCcjbmF2LXRvZ2dsZScpO1xuICB2YXIgc2l0ZUhlYWRlck1lbnUgPSBtZW51Q29udGFpbmVyLmZpbmQoJyNtYWluLW5hdmlnYXRpb24td3JhcHBlcicpO1xuICB2YXIgc2l0ZU5hdmlnYXRpb24gPSBtZW51Q29udGFpbmVyLmZpbmQoJyNuYXYnKTtcblxuICAvLyBDbG9zZSBmb2N1c2VkIGRyb3Bkb3ducyB3aGVuIHByZXNzaW5nIGVzY1xuICAkKCcubWVudS1pdGVtIGEsIC5kcm9wZG93biBidXR0b24nKS5vbigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xuICAgIC8vIENoZWNraW5nIGFyZSBtZW51IGl0ZW1zIG9wZW4gb3Igbm90XG4gICAgY29uc3QgaXNTdWJNZW51RHJvcGRvd25PcGVuID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKVxuICAgICAgLmZpbmQoJy5zdWItbWVudScpXG4gICAgICAucHJldignLmRyb3Bkb3duLXRvZ2dsZScpXG4gICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcpO1xuICAgIGNvbnN0IGlzTWFpbk1lbnVEcm9wZG93bk9wZW4gPSAkKHRoaXMpLmNsb3Nlc3QoJy5tZW51LWl0ZW0nKS5maW5kKCcuZHJvcGRvd24tdG9nZ2xlJykuYXR0cignYXJpYS1leHBhbmRlZCcpO1xuICAgIGNvbnN0IGFyZVdlSW5Ecm9wZG93biA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkuaGFzQ2xhc3MoJ3N1Yi1tZW51Jyk7XG5cbiAgICBpZiAoaXNTdWJNZW51RHJvcGRvd25PcGVuID09PSAndHJ1ZScgfHwgaXNNYWluTWVudURyb3Bkb3duT3BlbiA9PT0gJ3RydWUnKSB7XG4gICAgICBpZiAoJCgnLmRyb3Bkb3duJykuZmluZCgnOmZvY3VzJykubGVuZ3RoICE9PSAwKSB7XG4gICAgICAvLyBDbG9zZSBtZW51IHVzaW5nIEVzYyBrZXkgYnV0IG9ubHkgaWYgZHJvcGRvd24gaXMgb3BlblxuICAgICAgICBpZiAoZS5jb2RlID09PSAnRXNjYXBlJykge1xuICAgICAgICAgIC8vIENsb3NlIHRoZSBkcm9wZG93biBtZW51XG4gICAgICAgICAgdmFyIHRoaXNEcm9wZG93biA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCk7XG5cbiAgICAgICAgICB2YXIgc2NyZWVuUmVhZGVyU3BhbiA9IHRoaXNEcm9wZG93bi5maW5kKCcuc2NyZWVuLXJlYWRlci10ZXh0Jyk7XG4gICAgICAgICAgdmFyIGRyb3Bkb3duVG9nZ2xlID0gdGhpc0Ryb3Bkb3duLmZpbmQoJy5kcm9wZG93bi10b2dnbGUnKTtcbiAgICAgICAgICB0aGlzRHJvcGRvd24uZmluZCgnLnN1Yi1tZW51JykucmVtb3ZlQ2xhc3MoJ3RvZ2dsZWQtb24nKTtcbiAgICAgICAgICB0aGlzRHJvcGRvd24uZmluZCgnLmRyb3Bkb3duLXRvZ2dsZScpLnJlbW92ZUNsYXNzKCd0b2dnbGVkLW9uJyk7XG4gICAgICAgICAgdGhpc0Ryb3Bkb3duLmZpbmQoJy5kcm9wZG93bicpLnJlbW92ZUNsYXNzKCd0b2dnbGVkLW9uJyk7XG4gICAgICAgICAgZHJvcGRvd25Ub2dnbGUuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICAgIC8vIGpzY3M6ZW5hYmxlXG4gICAgICAgICAgc2NyZWVuUmVhZGVyU3Bhbi50ZXh0KGFpcl9saWdodF9zY3JlZW5SZWFkZXJUZXh0LmV4cGFuZCk7XG4gICAgICAgICAgLy8gTW92ZSBmb2N1cyBiYWNrIHRvIHByZXZpb3VzIGRyb3Bkb3duIHNlbGVjdFxuICAgICAgICAgIC8vIEJ1dCBvbmx5IGlmIHdlIGFyZSBub3QgYWxyZWFkeSBpbiB0aGUgdG9nZ2xlIG9mIHRoZSBmaXJzdCBkcm9wZG93biBtZW51XG4gICAgICAgICAgaWYgKGFyZVdlSW5Ecm9wZG93biA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpc0Ryb3Bkb3duLmZpbmQoJy5kcm9wZG93bi10b2dnbGU6Zmlyc3QnKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IHJlc3BvbnNpdmVuYXYpIHtcbiAgICAgIC8vIENsb3NlIHByZXZpb3VzIGRyb3Bkb3duIGlmIHdlIGFyZSBvbiBtYWluIGxldmVsXG4gICAgICB2YXIgcHJldkRyb3Bkb3duID0gJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCk7XG5cbiAgICAgIHZhciBzY3JlZW5SZWFkZXJTcGFuUHJldiA9IHByZXZEcm9wZG93bi5maW5kKCcuc2NyZWVuLXJlYWRlci10ZXh0Jyk7XG4gICAgICB2YXIgZHJvcGRvd25Ub2dnbGVQcmV2ID0gcHJldkRyb3Bkb3duLmZpbmQoJy5kcm9wZG93bi10b2dnbGUnKTtcbiAgICAgIHByZXZEcm9wZG93bi5maW5kKCcuc3ViLW1lbnUnKS5yZW1vdmVDbGFzcygndG9nZ2xlZC1vbicpO1xuICAgICAgcHJldkRyb3Bkb3duLmZpbmQoJy5kcm9wZG93bi10b2dnbGUnKS5yZW1vdmVDbGFzcygndG9nZ2xlZC1vbicpO1xuICAgICAgcHJldkRyb3Bkb3duLmZpbmQoJy5kcm9wZG93bicpLnJlbW92ZUNsYXNzKCd0b2dnbGVkLW9uJyk7XG4gICAgICBkcm9wZG93blRvZ2dsZVByZXYuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgc2NyZWVuUmVhZGVyU3BhblByZXYudGV4dChhaXJfbGlnaHRfc2NyZWVuUmVhZGVyVGV4dC5leHBhbmQpO1xuXG4gICAgICAvLyBDbG9zZSBuZXh0IGRyb3Bkb3duIGlmIHdlIGFyZSBvbiBtYWluIGxldmVsXG4gICAgICB2YXIgbmV4dERyb3Bkb3duID0gJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCk7XG5cbiAgICAgIHZhciBzY3JlZW5SZWFkZXJTcGFuTmV4dCA9IG5leHREcm9wZG93bi5maW5kKCcuc2NyZWVuLXJlYWRlci10ZXh0Jyk7XG4gICAgICB2YXIgZHJvcGRvd25Ub2dnbGVOZXh0ID0gbmV4dERyb3Bkb3duLmZpbmQoJy5kcm9wZG93bi10b2dnbGUnKTtcbiAgICAgIG5leHREcm9wZG93bi5maW5kKCcuc3ViLW1lbnUnKS5yZW1vdmVDbGFzcygndG9nZ2xlZC1vbicpO1xuICAgICAgbmV4dERyb3Bkb3duLmZpbmQoJy5kcm9wZG93bi10b2dnbGUnKS5yZW1vdmVDbGFzcygndG9nZ2xlZC1vbicpO1xuICAgICAgbmV4dERyb3Bkb3duLmZpbmQoJy5kcm9wZG93bicpLnJlbW92ZUNsYXNzKCd0b2dnbGVkLW9uJyk7XG4gICAgICBkcm9wZG93blRvZ2dsZU5leHQuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgc2NyZWVuUmVhZGVyU3Bhbk5leHQudGV4dChhaXJfbGlnaHRfc2NyZWVuUmVhZGVyVGV4dC5leHBhbmQpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQWRkcyBhcmlhIGF0dHJpYnV0ZVxuICBzaXRlSGVhZGVyTWVudS5maW5kKCcubWVudS1pdGVtLWhhcy1jaGlsZHJlbicpLmF0dHIoJ2FyaWEtaGFzcG9wdXAnLCAndHJ1ZScpO1xuXG4gIC8vIEFkZCBkZWZhdWx0IGRyb3Bkb3duLXRvZ2dsZSBsYWJlbFxuICAkKCcuZHJvcGRvd24tdG9nZ2xlJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5hdHRyKCdhcmlhLWxhYmVsJywgYCR7YWlyX2xpZ2h0X3NjcmVlblJlYWRlclRleHQuZXhwYW5kX2Zvcn0gJHskKHRoaXMpLnByZXYoKS50ZXh0KCl9YCk7XG4gIH0pO1xuXG4gIC8vIFRvZ2dsZXMgdGhlIHN1Yi1tZW51IHdoZW4gZHJvcGRvd24gdG9nZ2xlIGJ1dHRvbiBhY2Nlc3NlZFxuICBzaXRlSGVhZGVyTWVudS5maW5kKCcuZHJvcGRvd24tdG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgZHJvcGRvd25NZW51ID0gJCh0aGlzKS5uZXh0QWxsKCcuc3ViLW1lbnUnKTtcblxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3RvZ2dsZWQtb24nKTtcbiAgICBkcm9wZG93bk1lbnUudG9nZ2xlQ2xhc3MoJ3RvZ2dsZWQtb24nKTtcblxuICAgIC8vIGpzY3M6ZGlzYWJsZVxuICAgICQodGhpcykuYXR0cihcbiAgICAgICdhcmlhLWV4cGFuZGVkJyxcbiAgICAgICQodGhpcykuYXR0cignYXJpYS1leHBhbmRlZCcpID09PSAnZmFsc2UnID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICApO1xuICAgIC8vIGpzY3M6ZW5hYmxlXG4gICAgLy8gQ2hhbmdlIHNjcmVlbiByZWFkZXIgb3Blbi9jbG9zZSBsYWJlbHNcblxuICAgICQodGhpcykuYXR0cihcbiAgICAgICdhcmlhLWxhYmVsJyxcbiAgICAgICQodGhpcykuYXR0cignYXJpYS1sYWJlbCcpID09PSBgJHthaXJfbGlnaHRfc2NyZWVuUmVhZGVyVGV4dC5jb2xsYXBzZV9mb3J9ICR7JCh0aGlzKS5wcmV2KCkudGV4dCgpfWBcbiAgICAgICAgPyBgJHthaXJfbGlnaHRfc2NyZWVuUmVhZGVyVGV4dC5leHBhbmRfZm9yfSAkeyQodGhpcykucHJldigpLnRleHQoKX1gXG4gICAgICAgIDogYCR7YWlyX2xpZ2h0X3NjcmVlblJlYWRlclRleHQuY29sbGFwc2VfZm9yfSAkeyQodGhpcykucHJldigpLnRleHQoKX1gLFxuICAgICk7XG4gIH0pO1xuXG4gIC8vIEFkZHMgYSBjbGFzcyB0byBzdWItbWVudXMgZm9yIHN0eWxpbmdcbiAgJCgnLnN1Yi1tZW51IC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJylcbiAgICAucGFyZW50KCcuc3ViLW1lbnUnKVxuICAgIC5hZGRDbGFzcygnaGFzLXN1Yi1tZW51Jyk7XG5cbiAgLy8gS2V5Ym9hcmQgbmF2aWdhdGlvblxuICAkKCcubWVudS1pdGVtIGEsIGJ1dHRvbi5kcm9wZG93bi10b2dnbGUnKS5vbigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKFsnQXJyb3dVcCcsICdBcnJvd0Rvd24nLCAnQXJyb3dMZWZ0JywgJ0Fycm93UmlnaHQnXS5pbmRleE9mKGUuY29kZSkgPT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGUuY29kZSkge1xuICAgIGNhc2UgJ0Fycm93TGVmdCc6IC8vIExlZnQga2V5XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnZHJvcGRvd24tdG9nZ2xlJykpIHtcbiAgICAgICAgJCh0aGlzKS5wcmV2KCdhJykudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICQodGhpcykucGFyZW50KCkucHJldigpLmNoaWxkcmVuKCdidXR0b24uZHJvcGRvd24tdG9nZ2xlJykubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCkuY2hpbGRyZW4oJ2J1dHRvbi5kcm9wZG93bi10b2dnbGUnKVxuICAgICAgICAgIC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCkuY2hpbGRyZW4oJ2EnKVxuICAgICAgICAgIC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgfVxuXG4gICAgICBpZiAoJCh0aGlzKS5pcygndWwgdWwgdWwuc3ViLW1lbnUudG9nZ2xlZC1vbiBsaTpmaXJzdC1jaGlsZCBhJykpIHtcbiAgICAgICAgJCh0aGlzKVxuICAgICAgICAgIC5wYXJlbnRzKCd1bC5zdWItbWVudS50b2dnbGVkLW9uIGxpJylcbiAgICAgICAgICAuY2hpbGRyZW4oJ2J1dHRvbi5kcm9wZG93bi10b2dnbGUnKVxuICAgICAgICAgIC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ0Fycm93UmlnaHQnOiAvLyBSaWdodCBrZXlcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIGlmICgkKHRoaXMpLm5leHQoJ2J1dHRvbi5kcm9wZG93bi10b2dnbGUnKS5sZW5ndGgpIHtcbiAgICAgICAgJCh0aGlzKS5uZXh0KCdidXR0b24uZHJvcGRvd24tdG9nZ2xlJykudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkuZmluZCgnaW5wdXQnKS5sZW5ndGgpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkuZmluZCgnaW5wdXQnKVxuICAgICAgICAgIC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkuY2hpbGRyZW4oJ2EnKVxuICAgICAgICAgIC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgfVxuXG4gICAgICBpZiAoJCh0aGlzKS5pcygndWwuc3ViLW1lbnUgLmRyb3Bkb3duLXRvZ2dsZS50b2dnbGVkLW9uJykpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCd1bC5zdWItbWVudSBsaTpmaXJzdC1jaGlsZCBhJykudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdBcnJvd0Rvd24nOiAvLyBEb3duIGtleVxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgaWYgKCQodGhpcykubmV4dCgpLmxlbmd0aCkge1xuICAgICAgICAkKHRoaXMpLm5leHQoKS5maW5kKCdsaTpmaXJzdC1jaGlsZCBhJykuZmlyc3QoKVxuICAgICAgICAgIC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgfSBlbHNlIGlmICgkKHRoaXMpLnBhcmVudCgpLm5leHQoKS5maW5kKCdpbnB1dCcpLmxlbmd0aCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoKS5maW5kKCdpbnB1dCcpXG4gICAgICAgICAgLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoKS5jaGlsZHJlbignYScpXG4gICAgICAgICAgLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgJCh0aGlzKS5pcygndWwuc3ViLW1lbnUgYScpXG4gICAgICAgICAgJiYgJCh0aGlzKS5uZXh0KCdidXR0b24uZHJvcGRvd24tdG9nZ2xlJykubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkuY2hpbGRyZW4oJ2EnKVxuICAgICAgICAgIC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgICQodGhpcykuaXMoJ3VsLnN1Yi1tZW51IC5kcm9wZG93bi10b2dnbGUnKVxuICAgICAgICAgICYmICQodGhpcykucGFyZW50KCkubmV4dCgpLmNoaWxkcmVuKCcuZHJvcGRvd24tdG9nZ2xlJykubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkuY2hpbGRyZW4oJy5kcm9wZG93bi10b2dnbGUnKVxuICAgICAgICAgIC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ0Fycm93VXAnOiAvLyBVcCBrZXlcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLnByZXYoKS5sZW5ndGgpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCkuY2hpbGRyZW4oJ2EnKVxuICAgICAgICAgIC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh0aGlzKVxuICAgICAgICAgIC5wYXJlbnRzKCd1bCcpXG4gICAgICAgICAgLmZpcnN0KClcbiAgICAgICAgICAucHJldignLmRyb3Bkb3duLXRvZ2dsZS50b2dnbGVkLW9uJylcbiAgICAgICAgICAudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICAkKHRoaXMpLmlzKCd1bC5zdWItbWVudSAuZHJvcGRvd24tdG9nZ2xlJylcbiAgICAgICAgICAmJiAkKHRoaXMpLnBhcmVudCgpLnByZXYoKS5jaGlsZHJlbignLmRyb3Bkb3duLXRvZ2dsZScpLmxlbmd0aFxuICAgICAgKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkucHJldigpLmNoaWxkcmVuKCcuZHJvcGRvd24tdG9nZ2xlJylcbiAgICAgICAgICAudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcblxuICBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2Jyk7XG4gIGlmICghY29udGFpbmVyKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi10b2dnbGUnKTtcbiAgaWYgKHR5cGVvZiBidXR0b24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gU2V0IHZhcnMuXG4gIGh0bWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdO1xuICBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbiAgbWVudSA9IGNvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgndWwnKVswXTtcbiAgbWVudVdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1uYXZpZ2F0aW9uLXdyYXBwZXInKTtcblxuICBmdW5jdGlvbiBtb2JpbGVOYXYoKSB7XG4gICAgdmFyIG1vYmlsZU5hdkluc3RhbmNlO1xuXG4gICAgLy8gVG9nZ2xlcyB0aGUgbWVudSBidXR0b25cbiAgICBpZiAoIW1lbnVUb2dnbGUubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRG8gbm90IHNldCBhcmlhLWV4cGFuZGVkIGZhbHNlIG9uIGRlc2t0b3BcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCByZXNwb25zaXZlbmF2KSB7XG4gICAgICBtZW51VG9nZ2xlLmFkZChzaXRlTmF2aWdhdGlvbikuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIH1cblxuICAgIG1lbnVUb2dnbGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS5hZGQoc2l0ZUhlYWRlck1lbnUpLnRvZ2dsZUNsYXNzKCd0b2dnbGVkLW9uJyk7XG5cbiAgICAgIC8vIENoYW5nZSBzY3JlZW4gcmVhZGVyIGV4cGFuZGVkIHN0YXRlXG4gICAgICAkKHRoaXMpLmF0dHIoXG4gICAgICAgICdhcmlhLWV4cGFuZGVkJyxcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdhcmlhLWV4cGFuZGVkJykgPT09ICdmYWxzZScgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgKTtcblxuICAgICAgLy8gQ2hhbmdlIHNjcmVlbiByZWFkZXIgb3Blbi9jbG9zZSBsYWJlbHNcbiAgICAgICQoJyNuYXYtdG9nZ2xlLWxhYmVsJykudGV4dChcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgICQoJyNuYXYtdG9nZ2xlLWxhYmVsJykudGV4dCgpID09PSBhaXJfbGlnaHRfc2NyZWVuUmVhZGVyVGV4dC5leHBhbmRfdG9nZ2xlXG4gICAgICAgICAgPyBhaXJfbGlnaHRfc2NyZWVuUmVhZGVyVGV4dC5jb2xsYXBzZV90b2dnbGVcbiAgICAgICAgICA6IGFpcl9saWdodF9zY3JlZW5SZWFkZXJUZXh0LmV4cGFuZF90b2dnbGUsXG4gICAgICApO1xuXG4gICAgICAkKHRoaXMpLmF0dHIoXG4gICAgICAgICdhcmlhLWxhYmVsJyxcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdhcmlhLWxhYmVsJykgPT09IGFpcl9saWdodF9zY3JlZW5SZWFkZXJUZXh0LmV4cGFuZF90b2dnbGVcbiAgICAgICAgICA/IGFpcl9saWdodF9zY3JlZW5SZWFkZXJUZXh0LmNvbGxhcHNlX3RvZ2dsZVxuICAgICAgICAgIDogYWlyX2xpZ2h0X3NjcmVlblJlYWRlclRleHQuZXhwYW5kX3RvZ2dsZSxcbiAgICAgICk7XG5cbiAgICAgIC8vIGpzY3M6ZGlzYWJsZVxuICAgICAgJCh0aGlzKVxuICAgICAgICAuYWRkKHNpdGVOYXZpZ2F0aW9uKVxuICAgICAgICAuYXR0cihcbiAgICAgICAgICAnYXJpYS1leHBhbmRlZCcsXG4gICAgICAgICAgJCh0aGlzKS5hZGQoc2l0ZU5hdmlnYXRpb24pLmF0dHIoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ2ZhbHNlJ1xuICAgICAgICAgICAgPyAndHJ1ZSdcbiAgICAgICAgICAgIDogJ2ZhbHNlJyxcbiAgICAgICAgKTtcblxuICAgICAgLy8gU2Nyb2xsIHRvIHRvcCB3aGVuIHRyaWdnZXJpbmcgbW9iaWxlIG5hdmlnYXRpb25cbiAgICAgIC8vIHRvIGVuc3VyZSBubyBnYXBzIGFyZSBiZXR3ZWVuIGhlYWRlciBhbmQgbmF2aWdhdGlvblxuICAgICAgLy8gUGxlYXNlIG5vdGUsIGlmIHlvdSB1c2Ugc3RpY2t5LW5hdiwgY29tbWVudCBvdXQgdGhlIG5leHQgbGluZVxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgLy8ganNjczplbmFibGVcbiAgICB9KTtcblxuICAgIC8vIEhpZGUgbWVudSB0b2dnbGUgYnV0dG9uIGlmIG1lbnUgaXMgZW1wdHkgYW5kIHJldHVybiBlYXJseS5cbiAgICBpZiAodHlwZW9mIG1lbnUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEbyBub3Qgc2V0IGFyaWEtZXhwYW5kZWQgZmFsc2Ugb24gZGVza3RvcFxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IHJlc3BvbnNpdmVuYXYpIHtcbiAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgfVxuXG4gICAgaWYgKG1lbnUuY2xhc3NOYW1lLmluZGV4T2YoJ25hdi1tZW51JykgPT09IC0xKSB7XG4gICAgICBtZW51LmNsYXNzTmFtZSArPSAnIG5hdi1tZW51JztcbiAgICB9XG5cbiAgICAvLyBGb2N1cyB0cmFwIGZvciBtb2JpbGUgbmF2aWdhdGlvblxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IHJlc3BvbnNpdmVuYXYpIHtcbiAgICAgIGZpcnN0Rm9jdXNhYmxlRWxlbWVudCA9IG51bGw7XG4gICAgICBsYXN0Rm9jdXNhYmxlRWxlbWVudCA9IG51bGw7XG5cbiAgICAgIC8vIFNlbGVjdCBuYXYgaXRlbXNcbiAgICAgIHZhciBuYXZFbGVtZW50cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFtcbiAgICAgICAgJy5uYXYtcHJpbWFyeSBhW2hyZWZdJyxcbiAgICAgICAgJy5uYXYtcHJpbWFyeSBidXR0b24nLFxuICAgICAgXSk7XG5cbiAgICAgIC8vIExpc3RlbiBmb3Iga2V5IGV2ZW50cyBvbiBuYXYgZWxlbWVudHMgYW5kIHRoZSB0b2dnbGUgYnV0dG9uXG4gICAgICAvLyB0byB0cmlnZ2VyIGZvY3VzIHRyYXBcbiAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBuYXZFbGVtZW50cy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgbmF2RWxlbWVudHNbaWldLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmb2N1c1RyYXApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdoYXQgaGFwcGVucyB3aGVuIGNsaWNraW5nIG1lbnUgdG9nZ2xlXG4gICAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY29udGFpbmVyLmNsYXNzTmFtZS5pbmRleE9mKCdpcy1hY3RpdmUnKSAhPT0gLTEpIHtcbiAgICAgICAgY2xvc2VNZW51KCk7IC8vIENsb3NlIG1lbnUuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBodG1sLmNsYXNzTmFtZSArPSAnIGRpc2FibGUtc2Nyb2xsJztcbiAgICAgICAgYm9keS5jbGFzc05hbWUgKz0gJyBqcy1uYXYtYWN0aXZlJztcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSArPSAnIGlzLWFjdGl2ZSc7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgKz0gJyBpcy1hY3RpdmUnO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuXG4gICAgICAgIC8vIEFkZCBmb2N1cyB0cmFwIHdoZW4gbWVudSBvcGVuXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZm9jdXNUcmFwLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIENsb3NlIG1lbnUgdXNpbmcgRXNjIGtleS5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmNvZGUgPT0gJ0VzY2FwZScgfHwgZXZlbnQuY29kZSA9PSAnRXNjJykge1xuICAgICAgICBpZiAoY29udGFpbmVyLmNsYXNzTmFtZS5pbmRleE9mKCdpcy1hY3RpdmUnKSAhPT0gLTEpIHtcbiAgICAgICAgICBjbG9zZU1lbnUoKTsgLy8gQ2xvc2UgbWVudS5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ2xvc2UgbWVudSBjbGlja2luZyBtZW51IHdyYXBwZXIgYXJlYS5cbiAgICBtZW51V3JhcHBlci5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZS50YXJnZXQgPT0gbWVudVdyYXBwZXJcbiAgICAgICAgJiYgY29udGFpbmVyLmNsYXNzTmFtZS5pbmRleE9mKCdpcy1hY3RpdmUnKSAhPT0gLTFcbiAgICAgICkge1xuICAgICAgICBjbG9zZU1lbnUoKTsgLy8gQ2xvc2UgbWVudS5cbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IHJlc3BvbnNpdmVuYXYpIHtcbiAgICBtb2JpbGVOYXYoKTsgLy8gZmlyZSByaWdodCBhd2F5IGZvciBtb2JpbGUgZGV2aWNlc1xuICB9XG5cbiAgLy8gQ2xvc2UgbWVudSBmdW5jdGlvbi5cbiAgZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZm9jdXNUcmFwLCBmYWxzZSk7XG4gICAgaHRtbC5jbGFzc05hbWUgPSBodG1sLmNsYXNzTmFtZS5yZXBsYWNlKCcgZGlzYWJsZS1zY3JvbGwnLCAnJyk7XG4gICAgYm9keS5jbGFzc05hbWUgPSBib2R5LmNsYXNzTmFtZS5yZXBsYWNlKCcganMtbmF2LWFjdGl2ZScsICcnKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gY29udGFpbmVyLmNsYXNzTmFtZS5yZXBsYWNlKCcgaXMtYWN0aXZlJywgJycpO1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBidXR0b24uY2xhc3NOYW1lLnJlcGxhY2UoJyBpcy1hY3RpdmUnLCAnJyk7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgJCgnI25hdi10b2dnbGUtbGFiZWwnKS50ZXh0KGFpcl9saWdodF9zY3JlZW5SZWFkZXJUZXh0LmV4cGFuZF90b2dnbGUpO1xuXG4gICAgLy8gUmV0dXJuIGZvY3VzIHRvIG5hdi10b2dnbGVcbiAgICBidXR0b24uZm9jdXMoKTtcbiAgfVxuXG4gIC8vIEdldCBhbGwgdGhlIGxpbmsgZWxlbWVudHMgd2l0aGluIHRoZSBtZW51LlxuICBsaW5rcyA9IG1lbnUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKTtcbiAgc3ViTWVudXMgPSBtZW51LmdldEVsZW1lbnRzQnlUYWdOYW1lKCd1bCcpO1xuXG4gIC8vIEVhY2ggdGltZSBhIG1lbnUgbGluayBpcyBmb2N1c2VkIG9yIGJsdXJyZWQsIHRvZ2dsZSBmb2N1cy5cbiAgZm9yIChpID0gMCwgbGVuID0gbGlua3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBsaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRvZ2dsZUZvY3VzLCB0cnVlKTtcbiAgICBsaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdG9nZ2xlRm9jdXMsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgb3IgcmVtb3ZlcyAuZm9jdXMgY2xhc3Mgb24gYW4gZWxlbWVudC5cbiAgICovXG4gIGZ1bmN0aW9uIHRvZ2dsZUZvY3VzKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIE1vdmUgdXAgdGhyb3VnaCB0aGUgYW5jZXN0b3JzIG9mIHRoZSBjdXJyZW50IGxpbmsgdW50aWwgd2UgaGl0IC5uYXYtbWVudS5cbiAgICB3aGlsZSAoc2VsZi5jbGFzc05hbWUuaW5kZXhPZignbmF2LW1lbnUnKSA9PT0gLTEpIHtcbiAgICAgIC8vIE9uIGxpIGVsZW1lbnRzIHRvZ2dsZSB0aGUgY2xhc3MgLmZvY3VzLlxuICAgICAgaWYgKHNlbGYudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnbGknKSB7XG4gICAgICAgIGlmIChzZWxmLmNsYXNzTmFtZS5pbmRleE9mKCdmb2N1cycpICE9PSAtMSkge1xuICAgICAgICAgIHNlbGYuY2xhc3NOYW1lID0gc2VsZi5jbGFzc05hbWUucmVwbGFjZSgnIGZvY3VzJywgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuY2xhc3NOYW1lICs9ICcgZm9jdXMnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNlbGYgPSBzZWxmLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZm9jdXNUcmFwKGUpIHtcbiAgICAvLyBTZXQgZm9jdXNhYmxlIGVsZW1lbnRzIGluc2lkZSBtYWluIG5hdmlnYXRpb24uXG4gICAgZm9jdXNhYmxlRWxlbWVudHMgPSBbLi4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnYSwgYnV0dG9uLCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCwgZGV0YWlscywgW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pJyxcbiAgICApXS5maWx0ZXIoKGVsKSA9PiAhZWwuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKS5maWx0ZXIoKGVsKSA9PiAhIShlbC5vZmZzZXRXaWR0aCB8fCBlbC5vZmZzZXRIZWlnaHQgfHwgZWwuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpKTtcblxuICAgIGZpcnN0Rm9jdXNhYmxlRWxlbWVudCA9IGZvY3VzYWJsZUVsZW1lbnRzWzBdO1xuICAgIGxhc3RGb2N1c2FibGVFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMV07XG5cbiAgICAvLyBSZWRpcmVjdCBsYXN0IFRhYiB0byBmaXJzdCBmb2N1c2FibGUgZWxlbWVudC5cbiAgICBpZiAobGFzdEZvY3VzYWJsZUVsZW1lbnQgPT09IGUudGFyZ2V0ICYmIGUuY29kZSA9PT0gJ1RhYicgJiYgIWUuc2hpZnRLZXkpIHtcbiAgICAgIGJ1dHRvbi5mb2N1cygpOyAvLyBTZXQgZm9jdXMgb24gZmlyc3QgZWxlbWVudCAtIHRoYXQncyBhY3R1YWxseSBjbG9zZSBtZW51IGJ1dHRvbi5cbiAgICB9XG5cbiAgICAvLyBSZWRpcmVjdCBmaXJzdCBTaGlmdCtUYWIgdG8gdG9nZ2xlIGJ1dHRvbiBlbGVtZW50LlxuICAgIGlmIChmaXJzdEZvY3VzYWJsZUVsZW1lbnQgPT09IGUudGFyZ2V0ICYmIGUuY29kZSA9PT0gJ1RhYicgJiYgZS5zaGlmdEtleSkge1xuICAgICAgYnV0dG9uLmZvY3VzKCk7IC8vIFNldCBmb2N1cyBvbiBsYXN0IGVsZW1lbnQuXG4gICAgfVxuXG4gICAgLy8gUmVkaXJlY3QgU2hpZnQrVGFiIGZyb20gdGhlIHRvZ2dsZSBidXR0b24gdG8gbGFzdCBmb2N1c2FibGUgZWxlbWVudC5cbiAgICBpZiAoYnV0dG9uID09PSBlLnRhcmdldCAmJiBlLmNvZGUgPT09ICdUYWInICYmIGUuc2hpZnRLZXkpIHtcbiAgICAgIGxhc3RGb2N1c2FibGVFbGVtZW50LmZvY3VzKCk7IC8vIFNldCBmb2N1cyBvbiBsYXN0IGVsZW1lbnQuXG4gICAgfVxuICB9XG5cbiAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gcmVzcG9uc2l2ZW5hdiAmJiBib2R5LmNsYXNzTmFtZS5pbmRleE9mKCdqcy1uYXYtYWN0aXZlJykgIT09IC0xKSB7XG4gICAgICBjbG9zZU1lbnUoKTsgLy8gQ2xvc2UgbWVudS5cbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgcmVzcG9uc2l2ZW5hdiAmJiB0eXBlb2Ygd2luZG93Lm1vYmlsZU5hdkluc3RhbmNlID09ICd1bmRlZmluZWQnKSB7XG4gICAgICBtb2JpbGVOYXYoKTtcbiAgICB9XG4gIH0pO1xufShqUXVlcnkpKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qKlxuICogQEF1dGhvcjogUm9uaSBMYXVra2FyaW5lblxuICogQERhdGU6ICAgMjAyMi0wNS0wNyAxMjoyMDoxM1xuICogQExhc3QgTW9kaWZpZWQgYnk6ICAgUm9uaSBMYXVra2FyaW5lblxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAyMi0wNS0xMiAxODowNDoyNlxuICovXG5pbXBvcnQgTW92ZVRvIGZyb20gJ21vdmV0byc7XG5cbmNvbnN0IGJhY2tUb1RvcCA9ICgpID0+IHtcbiAgLy8gQmFjayB0byB0b3AgYnV0dG9uXG4gIGNvbnN0IG1vdmVUb1RvcCA9IG5ldyBNb3ZlVG8oeyBkdXJhdGlvbjogMzAwLCBlYXNpbmc6ICdlYXNlT3V0UXVhcnQnIH0pO1xuICBjb25zdCB0b3BCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wJyk7XG4gIGNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLCBhLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pJyk7XG5cbiAgZnVuY3Rpb24gdHJhY2tTY3JvbGwoKSB7XG4gICAgY29uc3Qgc2Nyb2xsZWQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgY29uc3Qgc2Nyb2xsQW1vdW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIGlmIChzY3JvbGxlZCA+IHNjcm9sbEFtb3VudCkge1xuICAgICAgdG9wQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2lzLXZpc2libGUnKTtcbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsZWQgPCBzY3JvbGxBbW91bnQpIHtcbiAgICAgIHRvcEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYmFja1RvVG9wRXZlbnQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gRm9jdXMgdG8gdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IG9uIHRoZSBwYWdlXG4gICAgbW92ZVRvVG9wLm1vdmUoZm9jdXNhYmxlRWxlbWVudHNbMF0pO1xuICB9XG5cbiAgaWYgKHRvcEJ1dHRvbikge1xuICAgIHRvcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJhY2tUb1RvcEV2ZW50KTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0cmFja1Njcm9sbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBiYWNrVG9Ub3A7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiFcbiAqIE1vdmVUbyAtIEEgbGlnaHR3ZWlnaHQgc2Nyb2xsIGFuaW1hdGlvbiBqYXZhc2NyaXB0IGxpYnJhcnkgd2l0aG91dCBhbnkgZGVwZW5kZW5jeS5cbiAqIFZlcnNpb24gMS44LjIgKDI4LTA2LTIwMTkgMTQ6MzApXG4gKiBMaWNlbnNlZCB1bmRlciBNSVRcbiAqIENvcHlyaWdodCAyMDE5IEhhc2FuIEF5ZG/En2R1IDxoc25heWRkQGdtYWlsLmNvbT5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIE1vdmVUbyA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIERlZmF1bHRzXG4gICAqIEB0eXBlIHtvYmplY3R9XG4gICAqL1xuICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgdG9sZXJhbmNlOiAwLFxuICAgIGR1cmF0aW9uOiA4MDAsXG4gICAgZWFzaW5nOiAnZWFzZU91dFF1YXJ0JyxcbiAgICBjb250YWluZXI6IHdpbmRvdyxcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gY2FsbGJhY2soKSB7fVxuICB9O1xuICAvKipcbiAgICogZWFzZU91dFF1YXJ0IEVhc2luZyBGdW5jdGlvblxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IHQgLSBjdXJyZW50IHRpbWVcbiAgICogQHBhcmFtICB7bnVtYmVyfSBiIC0gc3RhcnQgdmFsdWVcbiAgICogQHBhcmFtICB7bnVtYmVyfSBjIC0gY2hhbmdlIGluIHZhbHVlXG4gICAqIEBwYXJhbSAge251bWJlcn0gZCAtIGR1cmF0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn0gLSBjYWxjdWxhdGVkIHZhbHVlXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGVhc2VPdXRRdWFydCh0LCBiLCBjLCBkKSB7XG4gICAgdCAvPSBkO1xuICAgIHQtLTtcbiAgICByZXR1cm4gLWMgKiAodCAqIHQgKiB0ICogdCAtIDEpICsgYjtcbiAgfVxuICAvKipcbiAgICogTWVyZ2UgdHdvIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0gIHtvYmplY3R9IG9iajFcbiAgICogQHBhcmFtICB7b2JqZWN0fSBvYmoyXG4gICAqIEByZXR1cm4ge29iamVjdH0gbWVyZ2VkIG9iamVjdFxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIG1lcmdlT2JqZWN0KG9iajEsIG9iajIpIHtcbiAgICB2YXIgb2JqMyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKG9iajEpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgICAgb2JqM1twcm9wZXJ0eU5hbWVdID0gb2JqMVtwcm9wZXJ0eU5hbWVdO1xuICAgIH0pO1xuICAgIE9iamVjdC5rZXlzKG9iajIpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgICAgb2JqM1twcm9wZXJ0eU5hbWVdID0gb2JqMltwcm9wZXJ0eU5hbWVdO1xuICAgIH0pO1xuICAgIHJldHVybiBvYmozO1xuICB9XG5cbiAgO1xuICAvKipcbiAgICogQ29udmVydHMgY2FtZWwgY2FzZSB0byBrZWJhYiBjYXNlXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdmFsIHRoZSB2YWx1ZSB0byBiZSBjb252ZXJ0ZWRcbiAgICogQHJldHVybiB7c3RyaW5nfSB0aGUgY29udmVydGVkIHZhbHVlXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGtlYmFiQ2FzZSh2YWwpIHtcbiAgICByZXR1cm4gdmFsLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24gKCQxKSB7XG4gICAgICByZXR1cm4gJy0nICsgJDEudG9Mb3dlckNhc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIDtcbiAgLyoqXG4gICAqIENvdW50IGEgbnVtYmVyIG9mIGl0ZW0gc2Nyb2xsZWQgdG9wXG4gICAqIEBwYXJhbSAge1dpbmRvd3xIVE1MRWxlbWVudH0gY29udGFpbmVyXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG5cbiAgZnVuY3Rpb24gY291bnRTY3JvbGxUb3AoY29udGFpbmVyKSB7XG4gICAgaWYgKGNvbnRhaW5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICByZXR1cm4gY29udGFpbmVyLnNjcm9sbFRvcDtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGFpbmVyLnBhZ2VZT2Zmc2V0O1xuICB9XG5cbiAgO1xuICAvKipcbiAgICogTW92ZVRvIENvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIE9wdGlvbnNcbiAgICogQHBhcmFtIHtvYmplY3R9IGVhc2VGdW5jdGlvbnMgQ3VzdG9tIGVhc2UgZnVuY3Rpb25zXG4gICAqL1xuXG4gIGZ1bmN0aW9uIE1vdmVUbygpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIGVhc2VGdW5jdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlT2JqZWN0KGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLmVhc2VGdW5jdGlvbnMgPSBtZXJnZU9iamVjdCh7XG4gICAgICBlYXNlT3V0UXVhcnQ6IGVhc2VPdXRRdWFydFxuICAgIH0sIGVhc2VGdW5jdGlvbnMpO1xuICB9XG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGRvbSBlbGVtZW50IGFzIHRyaWdnZXJcbiAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGRvbSBEb20gdHJpZ2dlciBlbGVtZW50XG4gICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvblxuICAgKiBAcmV0dXJuIHtmdW5jdGlvbnx2b2lkfSB1bnJlZ2lzdGVyIGZ1bmN0aW9uXG4gICAqL1xuXG5cbiAgTW92ZVRvLnByb3RvdHlwZS5yZWdpc3RlclRyaWdnZXIgPSBmdW5jdGlvbiAoZG9tLCBjYWxsYmFjaykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAoIWRvbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBocmVmID0gZG9tLmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8IGRvbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7IC8vIFRoZSBlbGVtZW50IHRvIGJlIHNjcm9sbGVkXG5cbiAgICB2YXIgdGFyZ2V0ID0gaHJlZiAmJiBocmVmICE9PSAnIycgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChocmVmLnN1YnN0cmluZygxKSkgOiBkb2N1bWVudC5ib2R5O1xuICAgIHZhciBvcHRpb25zID0gbWVyZ2VPYmplY3QodGhpcy5vcHRpb25zLCBfZ2V0T3B0aW9uc0Zyb21UcmlnZ2VyRG9tKGRvbSwgdGhpcy5vcHRpb25zKSk7XG5cbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvcHRpb25zLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBfdGhpcy5tb3ZlKHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgIH07XG4gIH07XG4gIC8qKlxuICAgKiBNb3ZlXG4gICAqIFNjcm9sbHMgdG8gZ2l2ZW4gZWxlbWVudCBieSB1c2luZyBlYXNlT3V0UXVhcnQgZnVuY3Rpb25cbiAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR8bnVtYmVyfSB0YXJnZXQgVGFyZ2V0IGVsZW1lbnQgdG8gYmUgc2Nyb2xsZWQgb3IgdGFyZ2V0IHBvc2l0aW9uXG4gICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9ucyBDdXN0b20gb3B0aW9uc1xuICAgKi9cblxuXG4gIE1vdmVUby5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIGlmICh0YXJnZXQgIT09IDAgJiYgIXRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSBtZXJnZU9iamVjdCh0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIHZhciBkaXN0YW5jZSA9IHR5cGVvZiB0YXJnZXQgPT09ICdudW1iZXInID8gdGFyZ2V0IDogdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICB2YXIgZnJvbSA9IGNvdW50U2Nyb2xsVG9wKG9wdGlvbnMuY29udGFpbmVyKTtcbiAgICB2YXIgc3RhcnRUaW1lID0gbnVsbDtcbiAgICB2YXIgbGFzdFlPZmZzZXQ7XG4gICAgZGlzdGFuY2UgLT0gb3B0aW9ucy50b2xlcmFuY2U7IC8vIHJBRiBsb29wXG5cbiAgICB2YXIgbG9vcCA9IGZ1bmN0aW9uIGxvb3AoY3VycmVudFRpbWUpIHtcbiAgICAgIHZhciBjdXJyZW50WU9mZnNldCA9IGNvdW50U2Nyb2xsVG9wKF90aGlzMi5vcHRpb25zLmNvbnRhaW5lcik7XG5cbiAgICAgIGlmICghc3RhcnRUaW1lKSB7XG4gICAgICAgIC8vIFRvIHN0YXJ0cyB0aW1lIGZyb20gMSwgd2Ugc3VidHJhY3RlZCAxIGZyb20gY3VycmVudCB0aW1lXG4gICAgICAgIC8vIElmIHRpbWUgc3RhcnRzIGZyb20gMSBUaGUgZmlyc3QgbG9vcCB3aWxsIG5vdCBkbyBhbnl0aGluZyxcbiAgICAgICAgLy8gYmVjYXVzZSBlYXNpbmcgdmFsdWUgd2lsbCBiZSB6ZXJvXG4gICAgICAgIHN0YXJ0VGltZSA9IGN1cnJlbnRUaW1lIC0gMTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRpbWVFbGFwc2VkID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XG5cbiAgICAgIGlmIChsYXN0WU9mZnNldCkge1xuICAgICAgICBpZiAoZGlzdGFuY2UgPiAwICYmIGxhc3RZT2Zmc2V0ID4gY3VycmVudFlPZmZzZXQgfHwgZGlzdGFuY2UgPCAwICYmIGxhc3RZT2Zmc2V0IDwgY3VycmVudFlPZmZzZXQpIHtcbiAgICAgICAgICByZXR1cm4gb3B0aW9ucy5jYWxsYmFjayh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxhc3RZT2Zmc2V0ID0gY3VycmVudFlPZmZzZXQ7XG5cbiAgICAgIHZhciB2YWwgPSBfdGhpczIuZWFzZUZ1bmN0aW9uc1tvcHRpb25zLmVhc2luZ10odGltZUVsYXBzZWQsIGZyb20sIGRpc3RhbmNlLCBvcHRpb25zLmR1cmF0aW9uKTtcblxuICAgICAgb3B0aW9ucy5jb250YWluZXIuc2Nyb2xsKDAsIHZhbCk7XG5cbiAgICAgIGlmICh0aW1lRWxhcHNlZCA8IG9wdGlvbnMuZHVyYXRpb24pIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnMuY29udGFpbmVyLnNjcm9sbCgwLCBkaXN0YW5jZSArIGZyb20pO1xuICAgICAgICBvcHRpb25zLmNhbGxiYWNrKHRhcmdldCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gIH07XG4gIC8qKlxuICAgKiBBZGRzIGN1c3RvbSBlYXNlIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgIG5hbWUgRWFzZSBmdW5jdGlvbiBuYW1lXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuICAgRWFzZSBmdW5jdGlvblxuICAgKi9cblxuXG4gIE1vdmVUby5wcm90b3R5cGUuYWRkRWFzZUZ1bmN0aW9uID0gZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gICAgdGhpcy5lYXNlRnVuY3Rpb25zW25hbWVdID0gZm47XG4gIH07XG4gIC8qKlxuICAgKiBSZXR1cm5zIG9wdGlvbnMgd2hpY2ggY3JlYXRlZCBmcm9tIHRyaWdnZXIgZG9tIGVsZW1lbnRcbiAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGRvbSBUcmlnZ2VyIGRvbSBlbGVtZW50XG4gICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9ucyBUaGUgaW5zdGFuY2UncyBvcHRpb25zXG4gICAqIEByZXR1cm4ge29iamVjdH0gVGhlIG9wdGlvbnMgd2hpY2ggY3JlYXRlZCBmcm9tIHRyaWdnZXIgZG9tIGVsZW1lbnRcbiAgICovXG5cblxuICBmdW5jdGlvbiBfZ2V0T3B0aW9uc0Zyb21UcmlnZ2VyRG9tKGRvbSwgb3B0aW9ucykge1xuICAgIHZhciBkb21PcHRpb25zID0ge307XG4gICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgdmFsdWUgPSBkb20uZ2V0QXR0cmlidXRlKFwiZGF0YS1tdC1cIi5jb25jYXQoa2ViYWJDYXNlKGtleSkpKTtcblxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGRvbU9wdGlvbnNba2V5XSA9IGlzTmFOKHZhbHVlKSA/IHZhbHVlIDogcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZG9tT3B0aW9ucztcbiAgfVxuXG4gIHJldHVybiBNb3ZlVG87XG59KCk7XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IE1vdmVUbztcbn0gZWxzZSB7XG4gIHdpbmRvdy5Nb3ZlVG8gPSBNb3ZlVG87XG59IiwiLyoqXG4gIHJlZnJhbWUuanMgLSBSZWZyYW1lLmpzOiByZXNwb25zaXZlIGlmcmFtZXMgZm9yIGVtYmVkZGVkIGNvbnRlbnRcbiAgQHZlcnNpb24gdjMuMC4yXG4gIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS95b3dhaW53cmlnaHQvcmVmcmFtZS50cyNyZWFkbWVcbiAgQGF1dGhvciBKZWZmIFdhaW53cmlnaHQgPHlvd2FpbndyaWdodEBnbWFpbC5jb20+IChodHRwOi8vamVmZnJ5LmluKVxuICBAbGljZW5zZSBNSVRcbioqL1xuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbmZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cblxuLyoqXG4gKiBSRUZSQU1FLlRTIPCflrxcbiAqIC0tLVxuICogQHBhcmFtIHRhcmdldFxuICogQHBhcmFtIGNOYW1lXG4gKiBAc3VtbWFyeSBkZWZpbmVzIHRoZSBoZWlnaHQvd2lkdGggcmF0aW8gb2YgdGhlIHRhcmdldGVkIDxlbGVtZW50PlxuICovXG5mdW5jdGlvbiByZWZyYW1lKHRhcmdldCwgY05hbWUpIHtcbiAgICBpZiAoY05hbWUgPT09IHZvaWQgMCkgeyBjTmFtZSA9ICdqcy1yZWZyYW1lJzsgfVxuICAgIHZhciBmcmFtZXMgPSB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IF9fc3ByZWFkQXJyYXlzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0KSkgOiAnbGVuZ3RoJyBpbiB0YXJnZXQgPyBfX3NwcmVhZEFycmF5cyh0YXJnZXQpIDogW3RhcmdldF07XG4gICAgcmV0dXJuIGZyYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChmcmFtZSkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB2YXIgaGFzQ2xhc3MgPSBmcmFtZS5jbGFzc05hbWUuc3BsaXQoJyAnKS5pbmRleE9mKGNOYW1lKSAhPT0gLTE7XG4gICAgICAgIGlmIChoYXNDbGFzcyB8fCBmcmFtZS5zdHlsZS53aWR0aC5pbmRleE9mKCclJykgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGdldCBoZWlnaHQgd2lkdGggYXR0cmlidXRlc1xuICAgICAgICB2YXIgaGVpZ2h0ID0gZnJhbWUuZ2V0QXR0cmlidXRlKCdoZWlnaHQnKSB8fCBmcmFtZS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHZhciB3aWR0aCA9IGZyYW1lLmdldEF0dHJpYnV0ZSgnd2lkdGgnKSB8fCBmcmFtZS5vZmZzZXRXaWR0aDtcbiAgICAgICAgdmFyIGhlaWdodE51bWJlciA9IHR5cGVvZiBoZWlnaHQgPT09ICdzdHJpbmcnID8gcGFyc2VJbnQoaGVpZ2h0KSA6IGhlaWdodDtcbiAgICAgICAgdmFyIHdpZHRoTnVtYmVyID0gdHlwZW9mIHdpZHRoID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHdpZHRoKSA6IHdpZHRoO1xuICAgICAgICAvLyBnZW5lcmFsIHRhcmdldGVkIDxlbGVtZW50PiBzaXplc1xuICAgICAgICB2YXIgcGFkZGluZyA9IChoZWlnaHROdW1iZXIgLyB3aWR0aE51bWJlcikgKiAxMDA7XG4gICAgICAgIC8vIGNyZWF0ZWQgZWxlbWVudCA8d3JhcHBlcj4gb2YgZ2VuZXJhbCByZWZyYW1lZCBpdGVtXG4gICAgICAgIC8vID0+IHNldCBuZWNlc3Nhcnkgc3R5bGVzIG9mIGNyZWF0ZWQgZWxlbWVudCA8d3JhcHBlcj5cbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NOYW1lID0gY05hbWU7XG4gICAgICAgIHZhciBkaXZTdHlsZXMgPSBkaXYuc3R5bGU7XG4gICAgICAgIGRpdlN0eWxlcy5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIGRpdlN0eWxlcy53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgZGl2U3R5bGVzLnBhZGRpbmdUb3AgPSBwYWRkaW5nICsgXCIlXCI7XG4gICAgICAgIC8vIHNldCBuZWNlc3Nhcnkgc3R5bGVzIG9mIHRhcmdldGVkIDxlbGVtZW50PlxuICAgICAgICB2YXIgZnJhbWVTdHlsZSA9IGZyYW1lLnN0eWxlO1xuICAgICAgICBmcmFtZVN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgZnJhbWVTdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgZnJhbWVTdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIGZyYW1lU3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgZnJhbWVTdHlsZS50b3AgPSAnMCc7XG4gICAgICAgIC8vIHJlZnJhbWUgdGFyZ2V0ZWQgPGVsZW1lbnQ+XG4gICAgICAgIChfYSA9IGZyYW1lLnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pbnNlcnRCZWZvcmUoZGl2LCBmcmFtZSk7XG4gICAgICAgIChfYiA9IGZyYW1lLnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZW1vdmVDaGlsZChmcmFtZSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChmcmFtZSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZnJhbWU7XG4iLCIvKipcbiAqIHdoYXQtaW5wdXQgLSBBIGdsb2JhbCB1dGlsaXR5IGZvciB0cmFja2luZyB0aGUgY3VycmVudCBpbnB1dCBtZXRob2QgKG1vdXNlLCBrZXlib2FyZCBvciB0b3VjaCkuXG4gKiBAdmVyc2lvbiB2NS4yLjEyXG4gKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vdGVuMXNldmVuL3doYXQtaW5wdXRcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIndoYXRJbnB1dFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ3aGF0SW5wdXRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wid2hhdElucHV0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcblxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cblxuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdCAgLypcblx0ICAgKiBiYWlsIG91dCBpZiB0aGVyZSBpcyBubyBkb2N1bWVudCBvciB3aW5kb3dcblx0ICAgKiAoaS5lLiBpbiBhIG5vZGUvbm9uLURPTSBlbnZpcm9ubWVudClcblx0ICAgKlxuXHQgICAqIFJldHVybiBhIHN0dWJiZWQgQVBJIGluc3RlYWRcblx0ICAgKi9cblx0ICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgLy8gYWx3YXlzIHJldHVybiBcImluaXRpYWxcIiBiZWNhdXNlIG5vIGludGVyYWN0aW9uIHdpbGwgZXZlciBiZSBkZXRlY3RlZFxuXHQgICAgICBhc2s6IGZ1bmN0aW9uIGFzaygpIHtcblx0ICAgICAgICByZXR1cm4gJ2luaXRpYWwnO1xuXHQgICAgICB9LFxuXG5cdCAgICAgIC8vIGFsd2F5cyByZXR1cm4gbnVsbFxuXHQgICAgICBlbGVtZW50OiBmdW5jdGlvbiBlbGVtZW50KCkge1xuXHQgICAgICAgIHJldHVybiBudWxsO1xuXHQgICAgICB9LFxuXG5cdCAgICAgIC8vIG5vLW9wXG5cdCAgICAgIGlnbm9yZUtleXM6IGZ1bmN0aW9uIGlnbm9yZUtleXMoKSB7fSxcblxuXHQgICAgICAvLyBuby1vcFxuXHQgICAgICBzcGVjaWZpY0tleXM6IGZ1bmN0aW9uIHNwZWNpZmljS2V5cygpIHt9LFxuXG5cdCAgICAgIC8vIG5vLW9wXG5cdCAgICAgIHJlZ2lzdGVyT25DaGFuZ2U6IGZ1bmN0aW9uIHJlZ2lzdGVyT25DaGFuZ2UoKSB7fSxcblxuXHQgICAgICAvLyBuby1vcFxuXHQgICAgICB1blJlZ2lzdGVyT25DaGFuZ2U6IGZ1bmN0aW9uIHVuUmVnaXN0ZXJPbkNoYW5nZSgpIHt9XG5cdCAgICB9O1xuXHQgIH1cblxuXHQgIC8qXG5cdCAgICogdmFyaWFibGVzXG5cdCAgICovXG5cblx0ICAvLyBjYWNoZSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcblx0ICB2YXIgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXHQgIC8vIGN1cnJlbnRseSBmb2N1c2VkIGRvbSBlbGVtZW50XG5cdCAgdmFyIGN1cnJlbnRFbGVtZW50ID0gbnVsbDtcblxuXHQgIC8vIGxhc3QgdXNlZCBpbnB1dCB0eXBlXG5cdCAgdmFyIGN1cnJlbnRJbnB1dCA9ICdpbml0aWFsJztcblxuXHQgIC8vIGxhc3QgdXNlZCBpbnB1dCBpbnRlbnRcblx0ICB2YXIgY3VycmVudEludGVudCA9IGN1cnJlbnRJbnB1dDtcblxuXHQgIC8vIFVOSVggdGltZXN0YW1wIG9mIGN1cnJlbnQgZXZlbnRcblx0ICB2YXIgY3VycmVudFRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cblx0ICAvLyBjaGVjayBmb3IgYSBgZGF0YS13aGF0cGVyc2lzdGAgYXR0cmlidXRlIG9uIGVpdGhlciB0aGUgYGh0bWxgIG9yIGBib2R5YCBlbGVtZW50cywgZGVmYXVsdHMgdG8gYHRydWVgXG5cdCAgdmFyIHNob3VsZFBlcnNpc3QgPSBmYWxzZTtcblxuXHQgIC8vIGZvcm0gaW5wdXQgdHlwZXNcblx0ICB2YXIgZm9ybUlucHV0cyA9IFsnYnV0dG9uJywgJ2lucHV0JywgJ3NlbGVjdCcsICd0ZXh0YXJlYSddO1xuXG5cdCAgLy8gZW1wdHkgYXJyYXkgZm9yIGhvbGRpbmcgY2FsbGJhY2sgZnVuY3Rpb25zXG5cdCAgdmFyIGZ1bmN0aW9uTGlzdCA9IFtdO1xuXG5cdCAgLy8gbGlzdCBvZiBtb2RpZmllciBrZXlzIGNvbW1vbmx5IHVzZWQgd2l0aCB0aGUgbW91c2UgYW5kXG5cdCAgLy8gY2FuIGJlIHNhZmVseSBpZ25vcmVkIHRvIHByZXZlbnQgZmFsc2Uga2V5Ym9hcmQgZGV0ZWN0aW9uXG5cdCAgdmFyIGlnbm9yZU1hcCA9IFsxNiwgLy8gc2hpZnRcblx0ICAxNywgLy8gY29udHJvbFxuXHQgIDE4LCAvLyBhbHRcblx0ICA5MSwgLy8gV2luZG93cyBrZXkgLyBsZWZ0IEFwcGxlIGNtZFxuXHQgIDkzIC8vIFdpbmRvd3MgbWVudSAvIHJpZ2h0IEFwcGxlIGNtZFxuXHQgIF07XG5cblx0ICB2YXIgc3BlY2lmaWNNYXAgPSBbXTtcblxuXHQgIC8vIG1hcHBpbmcgb2YgZXZlbnRzIHRvIGlucHV0IHR5cGVzXG5cdCAgdmFyIGlucHV0TWFwID0ge1xuXHQgICAga2V5ZG93bjogJ2tleWJvYXJkJyxcblx0ICAgIGtleXVwOiAna2V5Ym9hcmQnLFxuXHQgICAgbW91c2Vkb3duOiAnbW91c2UnLFxuXHQgICAgbW91c2Vtb3ZlOiAnbW91c2UnLFxuXHQgICAgTVNQb2ludGVyRG93bjogJ3BvaW50ZXInLFxuXHQgICAgTVNQb2ludGVyTW92ZTogJ3BvaW50ZXInLFxuXHQgICAgcG9pbnRlcmRvd246ICdwb2ludGVyJyxcblx0ICAgIHBvaW50ZXJtb3ZlOiAncG9pbnRlcicsXG5cdCAgICB0b3VjaHN0YXJ0OiAndG91Y2gnLFxuXHQgICAgdG91Y2hlbmQ6ICd0b3VjaCdcblxuXHQgICAgLy8gYm9vbGVhbjogdHJ1ZSBpZiB0aGUgcGFnZSBpcyBiZWluZyBzY3JvbGxlZFxuXHQgIH07dmFyIGlzU2Nyb2xsaW5nID0gZmFsc2U7XG5cblx0ICAvLyBzdG9yZSBjdXJyZW50IG1vdXNlIHBvc2l0aW9uXG5cdCAgdmFyIG1vdXNlUG9zID0ge1xuXHQgICAgeDogbnVsbCxcblx0ICAgIHk6IG51bGxcblxuXHQgICAgLy8gbWFwIG9mIElFIDEwIHBvaW50ZXIgZXZlbnRzXG5cdCAgfTt2YXIgcG9pbnRlck1hcCA9IHtcblx0ICAgIDI6ICd0b3VjaCcsXG5cdCAgICAzOiAndG91Y2gnLCAvLyB0cmVhdCBwZW4gbGlrZSB0b3VjaFxuXHQgICAgNDogJ21vdXNlJ1xuXG5cdCAgICAvLyBjaGVjayBzdXBwb3J0IGZvciBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyc1xuXHQgIH07dmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuXG5cdCAgdHJ5IHtcblx0ICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcblx0ICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdCAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwgb3B0cyk7XG5cdCAgfSBjYXRjaCAoZSkge31cblx0ICAvLyBmYWlsIHNpbGVudGx5XG5cblxuXHQgIC8qXG5cdCAgICogc2V0IHVwXG5cdCAgICovXG5cblx0ICB2YXIgc2V0VXAgPSBmdW5jdGlvbiBzZXRVcCgpIHtcblx0ICAgIC8vIGFkZCBjb3JyZWN0IG1vdXNlIHdoZWVsIGV2ZW50IG1hcHBpbmcgdG8gYGlucHV0TWFwYFxuXHQgICAgaW5wdXRNYXBbZGV0ZWN0V2hlZWwoKV0gPSAnbW91c2UnO1xuXG5cdCAgICBhZGRMaXN0ZW5lcnMoKTtcblx0ICB9O1xuXG5cdCAgLypcblx0ICAgKiBldmVudHNcblx0ICAgKi9cblxuXHQgIHZhciBhZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKSB7XG5cdCAgICAvLyBgcG9pbnRlcm1vdmVgLCBgTVNQb2ludGVyTW92ZWAsIGBtb3VzZW1vdmVgIGFuZCBtb3VzZSB3aGVlbCBldmVudCBiaW5kaW5nXG5cdCAgICAvLyBjYW4gb25seSBkZW1vbnN0cmF0ZSBwb3RlbnRpYWwsIGJ1dCBub3QgYWN0dWFsLCBpbnRlcmFjdGlvblxuXHQgICAgLy8gYW5kIGFyZSB0cmVhdGVkIHNlcGFyYXRlbHlcblx0ICAgIHZhciBvcHRpb25zID0gc3VwcG9ydHNQYXNzaXZlID8geyBwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiB0cnVlIH0gOiB0cnVlO1xuXG5cdCAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgc2V0UGVyc2lzdCwgdHJ1ZSk7XG5cblx0ICAgIC8vIHBvaW50ZXIgZXZlbnRzIChtb3VzZSwgcGVuLCB0b3VjaClcblx0ICAgIGlmICh3aW5kb3cuUG9pbnRlckV2ZW50KSB7XG5cdCAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHNldElucHV0LCB0cnVlKTtcblx0ICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgc2V0SW50ZW50LCB0cnVlKTtcblx0ICAgIH0gZWxzZSBpZiAod2luZG93Lk1TUG9pbnRlckV2ZW50KSB7XG5cdCAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJEb3duJywgc2V0SW5wdXQsIHRydWUpO1xuXHQgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyTW92ZScsIHNldEludGVudCwgdHJ1ZSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAvLyBtb3VzZSBldmVudHNcblx0ICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNldElucHV0LCB0cnVlKTtcblx0ICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHNldEludGVudCwgdHJ1ZSk7XG5cblx0ICAgICAgLy8gdG91Y2ggZXZlbnRzXG5cdCAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHtcblx0ICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHNldElucHV0LCBvcHRpb25zKTtcblx0ICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBzZXRJbnB1dCwgdHJ1ZSk7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgLy8gbW91c2Ugd2hlZWxcblx0ICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGRldGVjdFdoZWVsKCksIHNldEludGVudCwgb3B0aW9ucyk7XG5cblx0ICAgIC8vIGtleWJvYXJkIGV2ZW50c1xuXHQgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzZXRJbnB1dCwgdHJ1ZSk7XG5cdCAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBzZXRJbnB1dCwgdHJ1ZSk7XG5cblx0ICAgIC8vIGZvY3VzIGV2ZW50c1xuXHQgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBzZXRFbGVtZW50LCB0cnVlKTtcblx0ICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGNsZWFyRWxlbWVudCwgdHJ1ZSk7XG5cdCAgfTtcblxuXHQgIC8vIGNoZWNrcyBpZiBpbnB1dCBwZXJzaXN0ZW5jZSBzaG91bGQgaGFwcGVuIGFuZFxuXHQgIC8vIGdldCBzYXZlZCBzdGF0ZSBmcm9tIHNlc3Npb24gc3RvcmFnZSBpZiB0cnVlIChkZWZhdWx0cyB0byBgZmFsc2VgKVxuXHQgIHZhciBzZXRQZXJzaXN0ID0gZnVuY3Rpb24gc2V0UGVyc2lzdCgpIHtcblx0ICAgIHNob3VsZFBlcnNpc3QgPSAhKGRvY0VsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXdoYXRwZXJzaXN0JykgPT09ICdmYWxzZScgfHwgZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2hhdHBlcnNpc3QnKSA9PT0gJ2ZhbHNlJyk7XG5cblx0ICAgIGlmIChzaG91bGRQZXJzaXN0KSB7XG5cdCAgICAgIC8vIGNoZWNrIGZvciBzZXNzaW9uIHZhcmlhYmxlcyBhbmQgdXNlIGlmIGF2YWlsYWJsZVxuXHQgICAgICB0cnkge1xuXHQgICAgICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2hhdC1pbnB1dCcpKSB7XG5cdCAgICAgICAgICBjdXJyZW50SW5wdXQgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2hhdC1pbnB1dCcpO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2hhdC1pbnRlbnQnKSkge1xuXHQgICAgICAgICAgY3VycmVudEludGVudCA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aGF0LWludGVudCcpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgIC8vIGZhaWwgc2lsZW50bHlcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICAvLyBhbHdheXMgcnVuIHRoZXNlIHNvIGF0IGxlYXN0IGBpbml0aWFsYCBzdGF0ZSBpcyBzZXRcblx0ICAgIGRvVXBkYXRlKCdpbnB1dCcpO1xuXHQgICAgZG9VcGRhdGUoJ2ludGVudCcpO1xuXHQgIH07XG5cblx0ICAvLyBjaGVja3MgY29uZGl0aW9ucyBiZWZvcmUgdXBkYXRpbmcgbmV3IGlucHV0XG5cdCAgdmFyIHNldElucHV0ID0gZnVuY3Rpb24gc2V0SW5wdXQoZXZlbnQpIHtcblx0ICAgIHZhciBldmVudEtleSA9IGV2ZW50LndoaWNoO1xuXHQgICAgdmFyIHZhbHVlID0gaW5wdXRNYXBbZXZlbnQudHlwZV07XG5cblx0ICAgIGlmICh2YWx1ZSA9PT0gJ3BvaW50ZXInKSB7XG5cdCAgICAgIHZhbHVlID0gcG9pbnRlclR5cGUoZXZlbnQpO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgaWdub3JlTWF0Y2ggPSAhc3BlY2lmaWNNYXAubGVuZ3RoICYmIGlnbm9yZU1hcC5pbmRleE9mKGV2ZW50S2V5KSA9PT0gLTE7XG5cblx0ICAgIHZhciBzcGVjaWZpY01hdGNoID0gc3BlY2lmaWNNYXAubGVuZ3RoICYmIHNwZWNpZmljTWFwLmluZGV4T2YoZXZlbnRLZXkpICE9PSAtMTtcblxuXHQgICAgdmFyIHNob3VsZFVwZGF0ZSA9IHZhbHVlID09PSAna2V5Ym9hcmQnICYmIGV2ZW50S2V5ICYmIChpZ25vcmVNYXRjaCB8fCBzcGVjaWZpY01hdGNoKSB8fCB2YWx1ZSA9PT0gJ21vdXNlJyB8fCB2YWx1ZSA9PT0gJ3RvdWNoJztcblxuXHQgICAgLy8gcHJldmVudCB0b3VjaCBkZXRlY3Rpb24gZnJvbSBiZWluZyBvdmVycmlkZGVuIGJ5IGV2ZW50IGV4ZWN1dGlvbiBvcmRlclxuXHQgICAgaWYgKHZhbGlkYXRlVG91Y2godmFsdWUpKSB7XG5cdCAgICAgIHNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoc2hvdWxkVXBkYXRlICYmIGN1cnJlbnRJbnB1dCAhPT0gdmFsdWUpIHtcblx0ICAgICAgY3VycmVudElucHV0ID0gdmFsdWU7XG5cblx0ICAgICAgcGVyc2lzdElucHV0KCdpbnB1dCcsIGN1cnJlbnRJbnB1dCk7XG5cdCAgICAgIGRvVXBkYXRlKCdpbnB1dCcpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoc2hvdWxkVXBkYXRlICYmIGN1cnJlbnRJbnRlbnQgIT09IHZhbHVlKSB7XG5cdCAgICAgIC8vIHByZXNlcnZlIGludGVudCBmb3Iga2V5Ym9hcmQgaW50ZXJhY3Rpb24gd2l0aCBmb3JtIGZpZWxkc1xuXHQgICAgICB2YXIgYWN0aXZlRWxlbSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdCAgICAgIHZhciBub3RGb3JtSW5wdXQgPSBhY3RpdmVFbGVtICYmIGFjdGl2ZUVsZW0ubm9kZU5hbWUgJiYgKGZvcm1JbnB1dHMuaW5kZXhPZihhY3RpdmVFbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpID09PSAtMSB8fCBhY3RpdmVFbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdidXR0b24nICYmICFjaGVja0Nsb3Nlc3QoYWN0aXZlRWxlbSwgJ2Zvcm0nKSk7XG5cblx0ICAgICAgaWYgKG5vdEZvcm1JbnB1dCkge1xuXHQgICAgICAgIGN1cnJlbnRJbnRlbnQgPSB2YWx1ZTtcblxuXHQgICAgICAgIHBlcnNpc3RJbnB1dCgnaW50ZW50JywgY3VycmVudEludGVudCk7XG5cdCAgICAgICAgZG9VcGRhdGUoJ2ludGVudCcpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIC8vIHVwZGF0ZXMgdGhlIGRvYyBhbmQgYGlucHV0VHlwZXNgIGFycmF5IHdpdGggbmV3IGlucHV0XG5cdCAgdmFyIGRvVXBkYXRlID0gZnVuY3Rpb24gZG9VcGRhdGUod2hpY2gpIHtcblx0ICAgIGRvY0VsZW0uc2V0QXR0cmlidXRlKCdkYXRhLXdoYXQnICsgd2hpY2gsIHdoaWNoID09PSAnaW5wdXQnID8gY3VycmVudElucHV0IDogY3VycmVudEludGVudCk7XG5cblx0ICAgIGZpcmVGdW5jdGlvbnMod2hpY2gpO1xuXHQgIH07XG5cblx0ICAvLyB1cGRhdGVzIGlucHV0IGludGVudCBmb3IgYG1vdXNlbW92ZWAgYW5kIGBwb2ludGVybW92ZWBcblx0ICB2YXIgc2V0SW50ZW50ID0gZnVuY3Rpb24gc2V0SW50ZW50KGV2ZW50KSB7XG5cdCAgICB2YXIgdmFsdWUgPSBpbnB1dE1hcFtldmVudC50eXBlXTtcblxuXHQgICAgaWYgKHZhbHVlID09PSAncG9pbnRlcicpIHtcblx0ICAgICAgdmFsdWUgPSBwb2ludGVyVHlwZShldmVudCk7XG5cdCAgICB9XG5cblx0ICAgIC8vIHRlc3QgdG8gc2VlIGlmIGBtb3VzZW1vdmVgIGhhcHBlbmVkIHJlbGF0aXZlIHRvIHRoZSBzY3JlZW4gdG8gZGV0ZWN0IHNjcm9sbGluZyB2ZXJzdXMgbW91c2Vtb3ZlXG5cdCAgICBkZXRlY3RTY3JvbGxpbmcoZXZlbnQpO1xuXG5cdCAgICAvLyBvbmx5IGV4ZWN1dGUgaWYgc2Nyb2xsaW5nIGlzbid0IGhhcHBlbmluZ1xuXHQgICAgaWYgKCghaXNTY3JvbGxpbmcgJiYgIXZhbGlkYXRlVG91Y2godmFsdWUpIHx8IGlzU2Nyb2xsaW5nICYmIGV2ZW50LnR5cGUgPT09ICd3aGVlbCcgfHwgZXZlbnQudHlwZSA9PT0gJ21vdXNld2hlZWwnIHx8IGV2ZW50LnR5cGUgPT09ICdET01Nb3VzZVNjcm9sbCcpICYmIGN1cnJlbnRJbnRlbnQgIT09IHZhbHVlKSB7XG5cdCAgICAgIGN1cnJlbnRJbnRlbnQgPSB2YWx1ZTtcblxuXHQgICAgICBwZXJzaXN0SW5wdXQoJ2ludGVudCcsIGN1cnJlbnRJbnRlbnQpO1xuXHQgICAgICBkb1VwZGF0ZSgnaW50ZW50Jyk7XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIHZhciBzZXRFbGVtZW50ID0gZnVuY3Rpb24gc2V0RWxlbWVudChldmVudCkge1xuXHQgICAgaWYgKCFldmVudC50YXJnZXQubm9kZU5hbWUpIHtcblx0ICAgICAgLy8gSWYgbm9kZU5hbWUgaXMgdW5kZWZpbmVkLCBjbGVhciB0aGUgZWxlbWVudFxuXHQgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgY2xpY2sgaW5zaWRlIGFuIDxzdmc+IGVsZW1lbnQuXG5cdCAgICAgIGNsZWFyRWxlbWVudCgpO1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cblx0ICAgIGN1cnJlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdCAgICBkb2NFbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS13aGF0ZWxlbWVudCcsIGN1cnJlbnRFbGVtZW50KTtcblxuXHQgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QgJiYgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5sZW5ndGgpIHtcblx0ICAgICAgZG9jRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtd2hhdGNsYXNzZXMnLCBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvU3RyaW5nKCkucmVwbGFjZSgnICcsICcsJykpO1xuXHQgICAgfVxuXHQgIH07XG5cblx0ICB2YXIgY2xlYXJFbGVtZW50ID0gZnVuY3Rpb24gY2xlYXJFbGVtZW50KCkge1xuXHQgICAgY3VycmVudEVsZW1lbnQgPSBudWxsO1xuXG5cdCAgICBkb2NFbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS13aGF0ZWxlbWVudCcpO1xuXHQgICAgZG9jRWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtd2hhdGNsYXNzZXMnKTtcblx0ICB9O1xuXG5cdCAgdmFyIHBlcnNpc3RJbnB1dCA9IGZ1bmN0aW9uIHBlcnNpc3RJbnB1dCh3aGljaCwgdmFsdWUpIHtcblx0ICAgIGlmIChzaG91bGRQZXJzaXN0KSB7XG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3doYXQtJyArIHdoaWNoLCB2YWx1ZSk7XG5cdCAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAvLyBmYWlsIHNpbGVudGx5XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9O1xuXG5cdCAgLypcblx0ICAgKiB1dGlsaXRpZXNcblx0ICAgKi9cblxuXHQgIHZhciBwb2ludGVyVHlwZSA9IGZ1bmN0aW9uIHBvaW50ZXJUeXBlKGV2ZW50KSB7XG5cdCAgICBpZiAodHlwZW9mIGV2ZW50LnBvaW50ZXJUeXBlID09PSAnbnVtYmVyJykge1xuXHQgICAgICByZXR1cm4gcG9pbnRlck1hcFtldmVudC5wb2ludGVyVHlwZV07XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAvLyB0cmVhdCBwZW4gbGlrZSB0b3VjaFxuXHQgICAgICByZXR1cm4gZXZlbnQucG9pbnRlclR5cGUgPT09ICdwZW4nID8gJ3RvdWNoJyA6IGV2ZW50LnBvaW50ZXJUeXBlO1xuXHQgICAgfVxuXHQgIH07XG5cblx0ICAvLyBwcmV2ZW50IHRvdWNoIGRldGVjdGlvbiBmcm9tIGJlaW5nIG92ZXJyaWRkZW4gYnkgZXZlbnQgZXhlY3V0aW9uIG9yZGVyXG5cdCAgdmFyIHZhbGlkYXRlVG91Y2ggPSBmdW5jdGlvbiB2YWxpZGF0ZVRvdWNoKHZhbHVlKSB7XG5cdCAgICB2YXIgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcblxuXHQgICAgdmFyIHRvdWNoSXNWYWxpZCA9IHZhbHVlID09PSAnbW91c2UnICYmIGN1cnJlbnRJbnB1dCA9PT0gJ3RvdWNoJyAmJiB0aW1lc3RhbXAgLSBjdXJyZW50VGltZXN0YW1wIDwgMjAwO1xuXG5cdCAgICBjdXJyZW50VGltZXN0YW1wID0gdGltZXN0YW1wO1xuXG5cdCAgICByZXR1cm4gdG91Y2hJc1ZhbGlkO1xuXHQgIH07XG5cblx0ICAvLyBkZXRlY3QgdmVyc2lvbiBvZiBtb3VzZSB3aGVlbCBldmVudCB0byB1c2Vcblx0ICAvLyB2aWEgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvd2hlZWxfZXZlbnRcblx0ICB2YXIgZGV0ZWN0V2hlZWwgPSBmdW5jdGlvbiBkZXRlY3RXaGVlbCgpIHtcblx0ICAgIHZhciB3aGVlbFR5cGUgPSBudWxsO1xuXG5cdCAgICAvLyBNb2Rlcm4gYnJvd3NlcnMgc3VwcG9ydCBcIndoZWVsXCJcblx0ICAgIGlmICgnb253aGVlbCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpIHtcblx0ICAgICAgd2hlZWxUeXBlID0gJ3doZWVsJztcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIC8vIFdlYmtpdCBhbmQgSUUgc3VwcG9ydCBhdCBsZWFzdCBcIm1vdXNld2hlZWxcIlxuXHQgICAgICAvLyBvciBhc3N1bWUgdGhhdCByZW1haW5pbmcgYnJvd3NlcnMgYXJlIG9sZGVyIEZpcmVmb3hcblx0ICAgICAgd2hlZWxUeXBlID0gZG9jdW1lbnQub25tb3VzZXdoZWVsICE9PSB1bmRlZmluZWQgPyAnbW91c2V3aGVlbCcgOiAnRE9NTW91c2VTY3JvbGwnO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gd2hlZWxUeXBlO1xuXHQgIH07XG5cblx0ICAvLyBydW5zIGNhbGxiYWNrIGZ1bmN0aW9uc1xuXHQgIHZhciBmaXJlRnVuY3Rpb25zID0gZnVuY3Rpb24gZmlyZUZ1bmN0aW9ucyh0eXBlKSB7XG5cdCAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZnVuY3Rpb25MaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIGlmIChmdW5jdGlvbkxpc3RbaV0udHlwZSA9PT0gdHlwZSkge1xuXHQgICAgICAgIGZ1bmN0aW9uTGlzdFtpXS5mbi5jYWxsKHVuZGVmaW5lZCwgdHlwZSA9PT0gJ2lucHV0JyA/IGN1cnJlbnRJbnB1dCA6IGN1cnJlbnRJbnRlbnQpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIC8vIGZpbmRzIG1hdGNoaW5nIGVsZW1lbnQgaW4gYW4gb2JqZWN0XG5cdCAgdmFyIG9ialBvcyA9IGZ1bmN0aW9uIG9ialBvcyhtYXRjaCkge1xuXHQgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGZ1bmN0aW9uTGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICBpZiAoZnVuY3Rpb25MaXN0W2ldLmZuID09PSBtYXRjaCkge1xuXHQgICAgICAgIHJldHVybiBpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIHZhciBkZXRlY3RTY3JvbGxpbmcgPSBmdW5jdGlvbiBkZXRlY3RTY3JvbGxpbmcoZXZlbnQpIHtcblx0ICAgIGlmIChtb3VzZVBvcy54ICE9PSBldmVudC5zY3JlZW5YIHx8IG1vdXNlUG9zLnkgIT09IGV2ZW50LnNjcmVlblkpIHtcblx0ICAgICAgaXNTY3JvbGxpbmcgPSBmYWxzZTtcblxuXHQgICAgICBtb3VzZVBvcy54ID0gZXZlbnQuc2NyZWVuWDtcblx0ICAgICAgbW91c2VQb3MueSA9IGV2ZW50LnNjcmVlblk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBpc1Njcm9sbGluZyA9IHRydWU7XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIC8vIG1hbnVhbCB2ZXJzaW9uIG9mIGBjbG9zZXN0KClgXG5cdCAgdmFyIGNoZWNrQ2xvc2VzdCA9IGZ1bmN0aW9uIGNoZWNrQ2xvc2VzdChlbGVtLCB0YWcpIHtcblx0ICAgIHZhciBFbGVtZW50UHJvdG90eXBlID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlO1xuXG5cdCAgICBpZiAoIUVsZW1lbnRQcm90b3R5cGUubWF0Y2hlcykge1xuXHQgICAgICBFbGVtZW50UHJvdG90eXBlLm1hdGNoZXMgPSBFbGVtZW50UHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnRQcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoIUVsZW1lbnRQcm90b3R5cGUuY2xvc2VzdCkge1xuXHQgICAgICBkbyB7XG5cdCAgICAgICAgaWYgKGVsZW0ubWF0Y2hlcyh0YWcpKSB7XG5cdCAgICAgICAgICByZXR1cm4gZWxlbTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBlbGVtID0gZWxlbS5wYXJlbnRFbGVtZW50IHx8IGVsZW0ucGFyZW50Tm9kZTtcblx0ICAgICAgfSB3aGlsZSAoZWxlbSAhPT0gbnVsbCAmJiBlbGVtLm5vZGVUeXBlID09PSAxKTtcblxuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBlbGVtLmNsb3Nlc3QodGFnKTtcblx0ICAgIH1cblx0ICB9O1xuXG5cdCAgLypcblx0ICAgKiBpbml0XG5cdCAgICovXG5cblx0ICAvLyBkb24ndCBzdGFydCBzY3JpcHQgdW5sZXNzIGJyb3dzZXIgY3V0cyB0aGUgbXVzdGFyZFxuXHQgIC8vIChhbHNvIHBhc3NlcyBpZiBwb2x5ZmlsbHMgYXJlIHVzZWQpXG5cdCAgaWYgKCdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cgJiYgQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcblx0ICAgIHNldFVwKCk7XG5cdCAgfVxuXG5cdCAgLypcblx0ICAgKiBhcGlcblx0ICAgKi9cblxuXHQgIHJldHVybiB7XG5cdCAgICAvLyByZXR1cm5zIHN0cmluZzogdGhlIGN1cnJlbnQgaW5wdXQgdHlwZVxuXHQgICAgLy8gb3B0OiAnaW50ZW50J3wnaW5wdXQnXG5cdCAgICAvLyAnaW5wdXQnIChkZWZhdWx0KTogcmV0dXJucyB0aGUgc2FtZSB2YWx1ZSBhcyB0aGUgYGRhdGEtd2hhdGlucHV0YCBhdHRyaWJ1dGVcblx0ICAgIC8vICdpbnRlbnQnOiBpbmNsdWRlcyBgZGF0YS13aGF0aW50ZW50YCB2YWx1ZSBpZiBpdCdzIGRpZmZlcmVudCB0aGFuIGBkYXRhLXdoYXRpbnB1dGBcblx0ICAgIGFzazogZnVuY3Rpb24gYXNrKG9wdCkge1xuXHQgICAgICByZXR1cm4gb3B0ID09PSAnaW50ZW50JyA/IGN1cnJlbnRJbnRlbnQgOiBjdXJyZW50SW5wdXQ7XG5cdCAgICB9LFxuXG5cdCAgICAvLyByZXR1cm5zIHN0cmluZzogdGhlIGN1cnJlbnRseSBmb2N1c2VkIGVsZW1lbnQgb3IgbnVsbFxuXHQgICAgZWxlbWVudDogZnVuY3Rpb24gZWxlbWVudCgpIHtcblx0ICAgICAgcmV0dXJuIGN1cnJlbnRFbGVtZW50O1xuXHQgICAgfSxcblxuXHQgICAgLy8gb3ZlcndyaXRlcyBpZ25vcmVkIGtleXMgd2l0aCBwcm92aWRlZCBhcnJheVxuXHQgICAgaWdub3JlS2V5czogZnVuY3Rpb24gaWdub3JlS2V5cyhhcnIpIHtcblx0ICAgICAgaWdub3JlTWFwID0gYXJyO1xuXHQgICAgfSxcblxuXHQgICAgLy8gb3ZlcndyaXRlcyBzcGVjaWZpYyBjaGFyIGtleXMgdG8gdXBkYXRlIG9uXG5cdCAgICBzcGVjaWZpY0tleXM6IGZ1bmN0aW9uIHNwZWNpZmljS2V5cyhhcnIpIHtcblx0ICAgICAgc3BlY2lmaWNNYXAgPSBhcnI7XG5cdCAgICB9LFxuXG5cdCAgICAvLyBhdHRhY2ggZnVuY3Rpb25zIHRvIGlucHV0IGFuZCBpbnRlbnQgXCJldmVudHNcIlxuXHQgICAgLy8gZnVuY3Q6IGZ1bmN0aW9uIHRvIGZpcmUgb24gY2hhbmdlXG5cdCAgICAvLyBldmVudFR5cGU6ICdpbnB1dCd8J2ludGVudCdcblx0ICAgIHJlZ2lzdGVyT25DaGFuZ2U6IGZ1bmN0aW9uIHJlZ2lzdGVyT25DaGFuZ2UoZm4sIGV2ZW50VHlwZSkge1xuXHQgICAgICBmdW5jdGlvbkxpc3QucHVzaCh7XG5cdCAgICAgICAgZm46IGZuLFxuXHQgICAgICAgIHR5cGU6IGV2ZW50VHlwZSB8fCAnaW5wdXQnXG5cdCAgICAgIH0pO1xuXHQgICAgfSxcblxuXHQgICAgdW5SZWdpc3Rlck9uQ2hhbmdlOiBmdW5jdGlvbiB1blJlZ2lzdGVyT25DaGFuZ2UoZm4pIHtcblx0ICAgICAgdmFyIHBvc2l0aW9uID0gb2JqUG9zKGZuKTtcblxuXHQgICAgICBpZiAocG9zaXRpb24gfHwgcG9zaXRpb24gPT09IDApIHtcblx0ICAgICAgICBmdW5jdGlvbkxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcblx0ICAgICAgfVxuXHQgICAgfSxcblxuXHQgICAgY2xlYXJTdG9yYWdlOiBmdW5jdGlvbiBjbGVhclN0b3JhZ2UoKSB7XG5cdCAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xuXHQgICAgfVxuXHQgIH07XG5cdH0oKTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pXG59KTtcbjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi9qcy9kZXYvZnJvbnQtZW5kXCI6IDAsXG5cdFwiY3NzL2Rldi9ndXRlbmJlcmctZWRpdG9yLXN0eWxlc1wiOiAwLFxuXHRcImNzcy9kZXYvZ2xvYmFsXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3N0YXJ0X3RoZW1lXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3N0YXJ0X3RoZW1lXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiY3NzL2Rldi9ndXRlbmJlcmctZWRpdG9yLXN0eWxlc1wiLFwiY3NzL2Rldi9nbG9iYWxcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9qcy9zcmMvZnJvbnQtZW5kLmpzXCIpKSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImNzcy9kZXYvZ3V0ZW5iZXJnLWVkaXRvci1zdHlsZXNcIixcImNzcy9kZXYvZ2xvYmFsXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc2Fzcy9nbG9iYWwuc2Nzc1wiKSkpXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImNzcy9kZXYvZ3V0ZW5iZXJnLWVkaXRvci1zdHlsZXNcIixcImNzcy9kZXYvZ2xvYmFsXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc2Fzcy9ndXRlbmJlcmctZWRpdG9yLXN0eWxlcy5zY3NzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsicmVmcmFtZSIsImdldExvY2FsaXphdGlvbiIsInN0eWxlRXh0ZXJuYWxMaW5rcyIsImluaXRFeHRlcm5hbExpbmtMYWJlbHMiLCJpbml0QW5jaG9ycyIsImJhY2tUb1RvcCIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJNb3ZlVG8iLCJlYXNlRnVuY3Rpb25zIiwiZWFzZUluUXVhZCIsInQiLCJiIiwiYyIsImQiLCJlYXNlT3V0UXVhZCIsIm1vdmVUbyIsImVhc2UiLCJ0cmlnZ2VycyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpIiwibGVuZ3RoIiwicmVnaXN0ZXJUcmlnZ2VyIiwiaXNMaW5rRXh0ZXJuYWwiLCJsaW5rIiwibG9jYWxEb21haW5zIiwiZXhjZXB0aW9ucyIsImlzRXhjZXB0aW9uIiwic29tZSIsImV4Y2VwdGlvbiIsImNvbXBhcmUiLCJSZWdFeHAiLCJ0ZXN0IiwibGlua1VybCIsIlVSTCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRvbWFpbiIsImhvc3QiLCJnZXRDaGlsZEFsdFRleHQiLCJjaGlsZHJlbiIsImNoaWxkSW1ncyIsImZpbHRlciIsImNoaWxkIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiYWx0VGV4dHMiLCJhbHQiLCJtYXAiLCJqb2luIiwid2luZG93IiwibG9jYXRpb24iLCJhaXJfbGlnaHRfZXh0ZXJuYWxMaW5rRG9tYWlucyIsImNvbmNhdCIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImV4dGVybmFsTGlua3MiLCJocmVmIiwiZm9yRWFjaCIsImV4dGVybmFsTGluayIsInRleHRDb250ZW50IiwidHJpbSIsImFyaWFMYWJlbCIsInRhcmdldCIsInNldEF0dHJpYnV0ZSIsImxpbmtzV2l0aEltZ0NoaWxkcmVuIiwic3RyaW5nS2V5IiwiYWlyX2xpZ2h0X3NjcmVlblJlYWRlclRleHQiLCJpc091dE9mVmlld3BvcnQiLCJlbGVtIiwiYm91bmRpbmciLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJvdXQiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImFueSIsIiQiLCJyZXNwb25zaXZlbmF2IiwiaHRtbCIsImNvbnRhaW5lciIsImJ1dHRvbiIsIm1lbnUiLCJtZW51V3JhcHBlciIsInN1Yk1lbnVzIiwibGVuIiwiZm9jdXNhYmxlRWxlbWVudHMiLCJmaXJzdEZvY3VzYWJsZUVsZW1lbnQiLCJsYXN0Rm9jdXNhYmxlRWxlbWVudCIsIm1lbnVJdGVtcyIsImxpIiwicGFyZW50Tm9kZSIsImtleWRvd25Nb3VzZW92ZXJFdmVudCIsImtleSIsImtleWRvd25Nb3VzZWxlYXZlRXZlbnQiLCJjaGVja0ZvclN1Ym1lbnVPdmVyZmxvdyIsInN1Yk1lbnVzVW5kZXJNZW51SXRlbSIsInN1Yk1lbnUiLCJpc091dCIsInBhcmVudEVsZW1lbnQiLCJtZW51Q29udGFpbmVyIiwibWVudVRvZ2dsZSIsImZpbmQiLCJzaXRlSGVhZGVyTWVudSIsInNpdGVOYXZpZ2F0aW9uIiwib24iLCJlIiwiaXNTdWJNZW51RHJvcGRvd25PcGVuIiwicGFyZW50IiwicHJldiIsImF0dHIiLCJpc01haW5NZW51RHJvcGRvd25PcGVuIiwiY2xvc2VzdCIsImFyZVdlSW5Ecm9wZG93biIsImhhc0NsYXNzIiwiY29kZSIsInRoaXNEcm9wZG93biIsInNjcmVlblJlYWRlclNwYW4iLCJkcm9wZG93blRvZ2dsZSIsInJlbW92ZUNsYXNzIiwidGV4dCIsImV4cGFuZCIsInRyaWdnZXIiLCJwcmV2RHJvcGRvd24iLCJzY3JlZW5SZWFkZXJTcGFuUHJldiIsImRyb3Bkb3duVG9nZ2xlUHJldiIsIm5leHREcm9wZG93biIsIm5leHQiLCJzY3JlZW5SZWFkZXJTcGFuTmV4dCIsImRyb3Bkb3duVG9nZ2xlTmV4dCIsImVhY2giLCJleHBhbmRfZm9yIiwiZHJvcGRvd25NZW51IiwibmV4dEFsbCIsInRvZ2dsZUNsYXNzIiwiY29sbGFwc2VfZm9yIiwiYWRkQ2xhc3MiLCJpbmRleE9mIiwic3RvcFByb3BhZ2F0aW9uIiwiaXMiLCJwYXJlbnRzIiwiZmlyc3QiLCJnZXRFbGVtZW50QnlJZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibW9iaWxlTmF2IiwibW9iaWxlTmF2SW5zdGFuY2UiLCJleHBhbmRfdG9nZ2xlIiwiY29sbGFwc2VfdG9nZ2xlIiwic2Nyb2xsVG8iLCJzdHlsZSIsImRpc3BsYXkiLCJjbGFzc05hbWUiLCJuYXZFbGVtZW50cyIsImlpIiwiZm9jdXNUcmFwIiwib25jbGljayIsImNsb3NlTWVudSIsImV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlcGxhY2UiLCJmb2N1cyIsInRvZ2dsZUZvY3VzIiwic2VsZiIsImVsIiwiaGFzQXR0cmlidXRlIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJnZXRDbGllbnRSZWN0cyIsInNoaWZ0S2V5IiwialF1ZXJ5IiwibW92ZVRvVG9wIiwiZHVyYXRpb24iLCJlYXNpbmciLCJ0b3BCdXR0b24iLCJ0cmFja1Njcm9sbCIsInNjcm9sbGVkIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxBbW91bnQiLCJiYWNrVG9Ub3BFdmVudCIsInByZXZlbnREZWZhdWx0IiwibW92ZSJdLCJzb3VyY2VSb290IjoiIn0=