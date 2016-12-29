/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _contributionsCalendar = __webpack_require__(4);

	var _contributionsCalendar2 = _interopRequireDefault(_contributionsCalendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _contributionsCalendar2.default;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(5)

	/* template */
	var __vue_template__ = __webpack_require__(7)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/dikunin/SubProject/vue-contribution-calendar/src/contributions-calendar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5785a691", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5785a691", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] contributions-calendar.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _generateDays = __webpack_require__(6);

	exports.default = {
	  props: {
	    year: {
	      type: Number,
	      default: new Date().getFullYear()
	    },
	    history: Object
	  },
	  data: function data() {
	    return {
	      days: []
	    };
	  },

	  methods: {
	    calculateValue: function calculateValue(value) {
	      var valueExists = this.history[value];
	      if (valueExists) {
	        if (valueExists >= 10) {
	          return '#1e6823';
	        }
	        if (valueExists >= 7 & valueExists < 10) {
	          return '#44a340';
	        }
	        if (valueExists >= 4 & valueExists < 7) {
	          return '#8cc665';
	        }
	        if (valueExists <= 3) {
	          return '#d6e685';
	        }
	      }
	      return '#eeeeee';
	    }
	  },
	  mounted: function mounted() {
	    this.days = (0, _generateDays.daysOfTheYear)(this.year);
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	var daysInMonthFromDate = function daysInMonthFromDate(date) {
	  return 32 - new Date(date).getDate();
	};

	var daysInMonth = function daysInMonth(month, year) {
	  return daysInMonthFromDate(new Date(year, month, 32));
	};

	var getDayIndex = function getDayIndex(month, year, index) {
	  return new Date(year, month, index).getDay();
	};

	var generateDays = function generateDays(month, year) {
	  var original = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	  var daysOfCurMonth = daysInMonth(month, year);
	  var daysArray = [];
	  var index = 0;

	  while (index < daysOfCurMonth) {
	    daysArray.push(index);
	    index = index += 1;
	  }

	  return daysArray.map(function (day, i) {
	    var w = getWeek(year, month, day + 1);
	    return {
	      dayIndex: getDayIndex(month, year, i),
	      weekIndex: w >= 53 ? 0 : w,
	      currentMonth: original,
	      date: day + 1 + '-' + (month + 1) + '-' + year
	    };
	  });
	};

	var daysOfTheYear = function daysOfTheYear(year) {
	  return Array(12).fill(0).reduce(function (newArray, zero, index) {
	    return newArray.concat(generateDays(index, year));
	  }, []);
	};

	function getWeek(year, month, day) {
	  month += 1;
	  var a = Math.floor((14 - month) / 12);
	  var y = year + 4800 - a;
	  var m = month + 12 * a - 3;
	  var jd = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
	  var d4 = (jd + 31741 - jd % 7) % 146097 % 36524 % 1461;
	  var L = Math.floor(d4 / 1460);
	  var d1 = (d4 - L) % 365 + L;
	  return Math.floor(d1 / 7) + 1;
	}
	module.exports = { generateDays: generateDays, daysOfTheYear: daysOfTheYear, getWeek: getWeek };

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', [_h('svg', {
	    attrs: {
	      "width": "700",
	      "height": "100"
	    }
	  }, [_vm._l((_vm.days), function(day, index) {
	    return _h('g', {
	      attrs: {
	        "width": "10",
	        "height": "10",
	        "data-index": (day.dayIndex + 1),
	        "data-week-index": day.weekIndex,
	        "data-day-index": day.dayIndex
	      }
	    }, [_h('rect', {
	      attrs: {
	        "x": day.weekIndex * 13,
	        "y": day.dayIndex * 13,
	        "fill": _vm.calculateValue(day.date),
	        "width": "10",
	        "height": "10"
	      }
	    }, [_h('title', [_vm._s(day.date)])])])
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5785a691", module.exports)
	  }
	}

/***/ }
/******/ ]);