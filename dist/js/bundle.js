/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   openModal: () => (/* binding */ openModal)
/* harmony export */ });
const closeModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('modal-active');
}

const openModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('modal-active');
}

function modal(modalSelector) {
    const btnAddTask = document.querySelector('.modal-open'),
          modalClose = document.querySelector('.modal-cancel');

    btnAddTask.addEventListener('click', () => {
        openModal(modalSelector) 
    });


    modalClose.addEventListener('click', () => {
        closeModal(modalSelector);
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);




/***/ }),

/***/ "./src/js/modules/tasks.js":
/*!*********************************!*\
  !*** ./src/js/modules/tasks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");


function tasks() {
    class Task {
        constructor(title, description) {
            this.title = title;
            this.description = description;
            this.status = 'to-do';
        }

        createElement() {
            const element = document.createElement('li');
            element.classList.add('task-card');
            element.innerHTML = `
                <div class="task-card__header">
                    <strong class="task-card__title">${this.title}</strong>
                    <button class="task-card__menu" title="Actions" type="button">⋮</button>
                </div>
                <div class="task-card__desc">${this.description}</div>
            `;
            return element;
        }
        
        render() {
            document.querySelector('#todo-list').append(this.createElement());
        }
    }
        
        
    document.querySelector('.modal-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.querySelector('[name="title"]').value,
              description = form.querySelector('[name="description"]').value;
        if (!title.trim() || !description.trim()) return;
    
        new Task(title, description).render();
        form.reset();
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal.js */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tasks.js */ "./src/js/modules/tasks.js");



window.addEventListener('DOMContentLoaded', () => {
    (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal');
    (0,_modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map