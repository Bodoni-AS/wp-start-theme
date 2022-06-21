/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/src/modules/gutenberg-helpers.js":
/*!*********************************************!*\
  !*** ./js/src/modules/gutenberg-helpers.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setFigureWidths": () => (/* binding */ setFigureWidths),
/* harmony export */   "setLazyLoadedFigureWidth": () => (/* binding */ setLazyLoadedFigureWidth)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var setFigureWidth = function setFigureWidth(figure) {
  var img = figure.querySelector('img');

  if (!img || _typeof(img) !== 'object' || !('clientWidth' in img)) {
    return;
  }

  figure.style.setProperty('--width-child-img', "".concat(img.clientWidth, "px"));
};

var setFigureWidths = function setFigureWidths(figures) {
  // Gutenberg magic for alignright and alignleft images
  figures.forEach(function (figure) {
    setFigureWidth(figure);
  });
};

var setLazyLoadedFigureWidth = function setLazyLoadedFigureWidth(image) {
  if (image.parentElement.tagName === 'figure') {
    setFigureWidth(image.parentElement);
  }
};



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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./js/src/gutenberg-editor.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_gutenberg_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gutenberg-helpers */ "./js/src/modules/gutenberg-helpers.js");
/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-02-11 15:38:14
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-05-12 17:49:01
 */

/* eslint-disable camelcase, prefer-arrow-callback, no-unused-vars, no-undef, vars-on-top, no-var, func-names, max-len, import/no-unresolved */
 // Declare the block you'd like to style.

/* wp.blocks.registerBlockStyle('core/paragraph', {
  name: 'boxed',
  label: 'Ramme',
}); */

var air_light_LazyLoad = new LazyLoad({
  callback_loaded: _modules_gutenberg_helpers__WEBPACK_IMPORTED_MODULE_0__.setLazyLoadedFigureWidth
}); // When document is ready as in when blocks are fully loaded

window.addEventListener('load', function () {
  /**
   * initializeBlock
   *
   * Adds custom JavaScript to the block HTML.
   *
   * @date    15/4/19
   * @since   1.0.0
   *
   * @param   object $block The block jQuery element.
   * @param   object attributes The block attributes (only available when editing).
   * @return  void
   *
   * @source https://www.advancedcustomfields.com/resources/acf_register_block_type/
   */
  var initializeBlock = function initializeBlock($block) {
    air_light_LazyLoad.update();
  }; // Initialize each block on page load (front end).


  air_light_LazyLoad.update(); // Set non-lazyloaded figures width so captions in aligned images will be same width as image

  var figures = document.querySelectorAll('figure');
  (0,_modules_gutenberg_helpers__WEBPACK_IMPORTED_MODULE_0__.setFigureWidths)(figures); // Initialize dynamic block preview (editor).

  if (window.acf) {
    window.acf.addAction('render_block_preview', initializeBlock);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2Rldi9ndXRlbmJlcmctZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxNQUFELEVBQVk7RUFDakMsSUFBTUMsR0FBRyxHQUFHRCxNQUFNLENBQUNFLGFBQVAsQ0FBcUIsS0FBckIsQ0FBWjs7RUFDQSxJQUFJLENBQUNELEdBQUQsSUFBUSxRQUFPQSxHQUFQLE1BQWUsUUFBdkIsSUFBbUMsRUFBRSxpQkFBaUJBLEdBQW5CLENBQXZDLEVBQWdFO0lBQzlEO0VBQ0Q7O0VBQ0RELE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxXQUFiLENBQXlCLG1CQUF6QixZQUFpREgsR0FBRyxDQUFDSSxXQUFyRDtBQUNELENBTkQ7O0FBUUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxPQUFELEVBQWE7RUFDbkM7RUFDQUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCLFVBQUNSLE1BQUQsRUFBWTtJQUMxQkQsY0FBYyxDQUFDQyxNQUFELENBQWQ7RUFDRCxDQUZEO0FBR0QsQ0FMRDs7QUFPQSxJQUFNUyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUNDLEtBQUQsRUFBVztFQUMxQyxJQUFJQSxLQUFLLENBQUNDLGFBQU4sQ0FBb0JDLE9BQXBCLEtBQWdDLFFBQXBDLEVBQThDO0lBQzVDYixjQUFjLENBQUNXLEtBQUssQ0FBQ0MsYUFBUCxDQUFkO0VBQ0Q7QUFDRixDQUpEOzs7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJRSxrQkFBa0IsR0FBRyxJQUFJQyxRQUFKLENBQWE7RUFDcENDLGVBQWUsRUFBRU4sZ0ZBQXdCQTtBQURMLENBQWIsQ0FBekIsRUFJQTs7QUFDQU8sTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFZO0VBQzFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDRSxJQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQVVDLE1BQVYsRUFBa0I7SUFDdENOLGtCQUFrQixDQUFDTyxNQUFuQjtFQUNELENBRkQsQ0FmMEMsQ0FtQjFDOzs7RUFDQVAsa0JBQWtCLENBQUNPLE1BQW5CLEdBcEIwQyxDQXNCMUM7O0VBQ0EsSUFBTWIsT0FBTyxHQUFHYyxRQUFRLENBQUNDLGdCQUFULENBQTBCLFFBQTFCLENBQWhCO0VBQ0FoQiwyRUFBZSxDQUFDQyxPQUFELENBQWYsQ0F4QjBDLENBMEIxQzs7RUFDQSxJQUFJUyxNQUFNLENBQUNPLEdBQVgsRUFBZ0I7SUFDZFAsTUFBTSxDQUFDTyxHQUFQLENBQVdDLFNBQVgsQ0FBcUIsc0JBQXJCLEVBQTZDTixlQUE3QztFQUNEO0FBQ0YsQ0E5QkQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0LXRoZW1lLy4vanMvc3JjL21vZHVsZXMvZ3V0ZW5iZXJnLWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vc3RhcnQtdGhlbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RhcnQtdGhlbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N0YXJ0LXRoZW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3RhcnQtdGhlbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdGFydC10aGVtZS8uL2pzL3NyYy9ndXRlbmJlcmctZWRpdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNldEZpZ3VyZVdpZHRoID0gKGZpZ3VyZSkgPT4ge1xuICBjb25zdCBpbWcgPSBmaWd1cmUucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gIGlmICghaW1nIHx8IHR5cGVvZiBpbWcgIT09ICdvYmplY3QnIHx8ICEoJ2NsaWVudFdpZHRoJyBpbiBpbWcpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZpZ3VyZS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS13aWR0aC1jaGlsZC1pbWcnLCBgJHtpbWcuY2xpZW50V2lkdGh9cHhgKTtcbn07XG5cbmNvbnN0IHNldEZpZ3VyZVdpZHRocyA9IChmaWd1cmVzKSA9PiB7XG4gIC8vIEd1dGVuYmVyZyBtYWdpYyBmb3IgYWxpZ25yaWdodCBhbmQgYWxpZ25sZWZ0IGltYWdlc1xuICBmaWd1cmVzLmZvckVhY2goKGZpZ3VyZSkgPT4ge1xuICAgIHNldEZpZ3VyZVdpZHRoKGZpZ3VyZSk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2V0TGF6eUxvYWRlZEZpZ3VyZVdpZHRoID0gKGltYWdlKSA9PiB7XG4gIGlmIChpbWFnZS5wYXJlbnRFbGVtZW50LnRhZ05hbWUgPT09ICdmaWd1cmUnKSB7XG4gICAgc2V0RmlndXJlV2lkdGgoaW1hZ2UucGFyZW50RWxlbWVudCk7XG4gIH1cbn07XG5leHBvcnQgeyBzZXRGaWd1cmVXaWR0aHMsIHNldExhenlMb2FkZWRGaWd1cmVXaWR0aCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIEBBdXRob3I6IFJvbmkgTGF1a2thcmluZW5cbiAqIEBEYXRlOiAgIDIwMjItMDItMTEgMTU6Mzg6MTRcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIFJvbmkgTGF1a2thcmluZW5cbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMjItMDUtMTIgMTc6NDk6MDFcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlLCBwcmVmZXItYXJyb3ctY2FsbGJhY2ssIG5vLXVudXNlZC12YXJzLCBuby11bmRlZiwgdmFycy1vbi10b3AsIG5vLXZhciwgZnVuYy1uYW1lcywgbWF4LWxlbiwgaW1wb3J0L25vLXVucmVzb2x2ZWQgKi9cbmltcG9ydCB7IHNldEZpZ3VyZVdpZHRocywgc2V0TGF6eUxvYWRlZEZpZ3VyZVdpZHRoIH0gZnJvbSAnLi9tb2R1bGVzL2d1dGVuYmVyZy1oZWxwZXJzJztcblxuLy8gRGVjbGFyZSB0aGUgYmxvY2sgeW91J2QgbGlrZSB0byBzdHlsZS5cbi8qIHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrU3R5bGUoJ2NvcmUvcGFyYWdyYXBoJywge1xuICBuYW1lOiAnYm94ZWQnLFxuICBsYWJlbDogJ1JhbW1lJyxcbn0pOyAqL1xuXG52YXIgYWlyX2xpZ2h0X0xhenlMb2FkID0gbmV3IExhenlMb2FkKHtcbiAgY2FsbGJhY2tfbG9hZGVkOiBzZXRMYXp5TG9hZGVkRmlndXJlV2lkdGgsXG59KTtcblxuLy8gV2hlbiBkb2N1bWVudCBpcyByZWFkeSBhcyBpbiB3aGVuIGJsb2NrcyBhcmUgZnVsbHkgbG9hZGVkXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIGluaXRpYWxpemVCbG9ja1xuICAgKlxuICAgKiBBZGRzIGN1c3RvbSBKYXZhU2NyaXB0IHRvIHRoZSBibG9jayBIVE1MLlxuICAgKlxuICAgKiBAZGF0ZSAgICAxNS80LzE5XG4gICAqIEBzaW5jZSAgIDEuMC4wXG4gICAqXG4gICAqIEBwYXJhbSAgIG9iamVjdCAkYmxvY2sgVGhlIGJsb2NrIGpRdWVyeSBlbGVtZW50LlxuICAgKiBAcGFyYW0gICBvYmplY3QgYXR0cmlidXRlcyBUaGUgYmxvY2sgYXR0cmlidXRlcyAob25seSBhdmFpbGFibGUgd2hlbiBlZGl0aW5nKS5cbiAgICogQHJldHVybiAgdm9pZFxuICAgKlxuICAgKiBAc291cmNlIGh0dHBzOi8vd3d3LmFkdmFuY2VkY3VzdG9tZmllbGRzLmNvbS9yZXNvdXJjZXMvYWNmX3JlZ2lzdGVyX2Jsb2NrX3R5cGUvXG4gICAqL1xuICB2YXIgaW5pdGlhbGl6ZUJsb2NrID0gZnVuY3Rpb24gKCRibG9jaykge1xuICAgIGFpcl9saWdodF9MYXp5TG9hZC51cGRhdGUoKTtcbiAgfTtcblxuICAvLyBJbml0aWFsaXplIGVhY2ggYmxvY2sgb24gcGFnZSBsb2FkIChmcm9udCBlbmQpLlxuICBhaXJfbGlnaHRfTGF6eUxvYWQudXBkYXRlKCk7XG5cbiAgLy8gU2V0IG5vbi1sYXp5bG9hZGVkIGZpZ3VyZXMgd2lkdGggc28gY2FwdGlvbnMgaW4gYWxpZ25lZCBpbWFnZXMgd2lsbCBiZSBzYW1lIHdpZHRoIGFzIGltYWdlXG4gIGNvbnN0IGZpZ3VyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmaWd1cmUnKTtcbiAgc2V0RmlndXJlV2lkdGhzKGZpZ3VyZXMpO1xuXG4gIC8vIEluaXRpYWxpemUgZHluYW1pYyBibG9jayBwcmV2aWV3IChlZGl0b3IpLlxuICBpZiAod2luZG93LmFjZikge1xuICAgIHdpbmRvdy5hY2YuYWRkQWN0aW9uKCdyZW5kZXJfYmxvY2tfcHJldmlldycsIGluaXRpYWxpemVCbG9jayk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInNldEZpZ3VyZVdpZHRoIiwiZmlndXJlIiwiaW1nIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJjbGllbnRXaWR0aCIsInNldEZpZ3VyZVdpZHRocyIsImZpZ3VyZXMiLCJmb3JFYWNoIiwic2V0TGF6eUxvYWRlZEZpZ3VyZVdpZHRoIiwiaW1hZ2UiLCJwYXJlbnRFbGVtZW50IiwidGFnTmFtZSIsImFpcl9saWdodF9MYXp5TG9hZCIsIkxhenlMb2FkIiwiY2FsbGJhY2tfbG9hZGVkIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXRpYWxpemVCbG9jayIsIiRibG9jayIsInVwZGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImFjZiIsImFkZEFjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=