(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["live"] = factory();
	else
		root["live"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "wmdO");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/Ab0":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("fASn");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "0LZ3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("wpi5");
var descriptor = __webpack_require__("cXTM");
var setToStringTag = __webpack_require__("vFnv");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("9lDQ")(IteratorPrototype, __webpack_require__("fTBS")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "0fhx":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("35i+");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "1KmH":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("35i+");
var setPrototypeOf = __webpack_require__("J4V5").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "2d8b":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("Ys9B");
var defined = __webpack_require__("PoVn");
var fails = __webpack_require__("kQxc");
var spaces = __webpack_require__("3Uat");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "35i+":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "36Wf":
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports = {
  STATIC_PATH: __dirname,
};

/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "3SlG":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("9JpJ");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "3Uat":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "4lhl":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("ZrbI") && !__webpack_require__("kQxc")(function () {
  return Object.defineProperty(__webpack_require__("9E2N")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "6lnQ":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "7eYx":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("iY+s");
var hide = __webpack_require__("9lDQ");
var has = __webpack_require__("B/2H");
var SRC = __webpack_require__("6lnQ")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("IeQK").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "7gfC":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "9E2N":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("35i+");
var document = __webpack_require__("iY+s").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "9JpJ":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "9lDQ":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("PHqZ");
var createDesc = __webpack_require__("cXTM");
module.exports = __webpack_require__("ZrbI") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "B/2H":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "B0Zk":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("Zyql");
var toLength = __webpack_require__("ZNLW");
var toAbsoluteIndex = __webpack_require__("/Ab0");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "BWSN":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "EHCt":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("BWSN");
var createDesc = __webpack_require__("cXTM");
var toIObject = __webpack_require__("Zyql");
var toPrimitive = __webpack_require__("Fm9r");
var has = __webpack_require__("B/2H");
var IE8_DOM_DEFINE = __webpack_require__("4lhl");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("ZrbI") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "EzFN":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("PHqZ");
var anObject = __webpack_require__("0fhx");
var getKeys = __webpack_require__("I2nS");

module.exports = __webpack_require__("ZrbI") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "Fm9r":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("35i+");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "FsIF":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  let i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "I2nS":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("tpGB");
var enumBugKeys = __webpack_require__("cyEu");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "IeQK":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "J4V5":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("35i+");
var anObject = __webpack_require__("0fhx");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("3SlG")(Function.call, __webpack_require__("EHCt").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "JLIw":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("rRxW")('keys');
var uid = __webpack_require__("6lnQ");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "M509":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("xhb2");
var $export = __webpack_require__("Ys9B");
var redefine = __webpack_require__("7eYx");
var hide = __webpack_require__("9lDQ");
var has = __webpack_require__("B/2H");
var Iterators = __webpack_require__("7gfC");
var $iterCreate = __webpack_require__("0LZ3");
var setToStringTag = __webpack_require__("vFnv");
var getPrototypeOf = __webpack_require__("aqQd");
var ITERATOR = __webpack_require__("fTBS")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "PHqZ":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("0fhx");
var IE8_DOM_DEFINE = __webpack_require__("4lhl");
var toPrimitive = __webpack_require__("Fm9r");
var dP = Object.defineProperty;

exports.f = __webpack_require__("ZrbI") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "PoVn":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "QFGi":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("PoVn");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "R1+l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_0_3_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_LButton_vue_vue_type_style_index_0_id_35b67ef8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xZq9");
/* harmony import */ var _config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_0_3_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_LButton_vue_vue_type_style_index_0_id_35b67ef8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_0_3_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_LButton_vue_vue_type_style_index_0_id_35b67ef8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_config_yarn_global_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_5_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_0_3_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_1_2_2_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_2_4_vue_loader_lib_index_js_vue_loader_options_LButton_vue_vue_type_style_index_0_id_35b67ef8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "SCE9":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("ilKk");
var getKeys = __webpack_require__("I2nS");
var redefine = __webpack_require__("7eYx");
var global = __webpack_require__("iY+s");
var hide = __webpack_require__("9lDQ");
var Iterators = __webpack_require__("7gfC");
var wks = __webpack_require__("fTBS");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "SRpm":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("fTBS")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("9lDQ")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "YHSo":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("tpGB");
var hiddenKeys = __webpack_require__("cyEu").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "Ys9B":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("iY+s");
var core = __webpack_require__("IeQK");
var hide = __webpack_require__("9lDQ");
var redefine = __webpack_require__("7eYx");
var ctx = __webpack_require__("3SlG");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "Z9ym":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("PHqZ").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("ZrbI") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "ZNLW":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("fASn");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "ZNPN":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("Ys9B");
var $values = __webpack_require__("sFf8")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "ZrbI":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("kQxc")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "Zyql":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("aBWn");
var defined = __webpack_require__("PoVn");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "aBWn":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("kIFj");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "aqQd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("B/2H");
var toObject = __webpack_require__("QFGi");
var IE_PROTO = __webpack_require__("JLIw")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "cXTM":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "cyEu":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "fASn":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "fTBS":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("rRxW")('wks');
var uid = __webpack_require__("6lnQ");
var Symbol = __webpack_require__("iY+s").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "iY+s":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "ilKk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("SRpm");
var step = __webpack_require__("r2X+");
var Iterators = __webpack_require__("7gfC");
var toIObject = __webpack_require__("Zyql");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("M509")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "kIFj":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "kQxc":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "r2X+":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "rRxW":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("iY+s");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "sFf8":
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__("I2nS");
var toIObject = __webpack_require__("Zyql");
var isEnum = __webpack_require__("BWSN").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ "ss3V":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("iY+s");
var has = __webpack_require__("B/2H");
var cof = __webpack_require__("kIFj");
var inheritIfRequired = __webpack_require__("1KmH");
var toPrimitive = __webpack_require__("Fm9r");
var fails = __webpack_require__("kQxc");
var gOPN = __webpack_require__("YHSo").f;
var gOPD = __webpack_require__("EHCt").f;
var dP = __webpack_require__("PHqZ").f;
var $trim = __webpack_require__("2d8b").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("wpi5")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("ZrbI") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("7eYx")(global, NUMBER, $Number);
}


/***/ }),

/***/ "tpGB":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("B/2H");
var toIObject = __webpack_require__("Zyql");
var arrayIndexOf = __webpack_require__("B0Zk")(false);
var IE_PROTO = __webpack_require__("JLIw")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "vFnv":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("PHqZ").f;
var has = __webpack_require__("B/2H");
var TAG = __webpack_require__("fTBS")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "wcMv":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "wmdO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Users/haoeryou/.config/yarn/global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("FsIF");

// EXTERNAL MODULE: /Users/haoeryou/.config/yarn/global/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("ilKk");

// EXTERNAL MODULE: /Users/haoeryou/.config/yarn/global/node_modules/core-js/modules/es7.object.values.js
var es7_object_values = __webpack_require__("ZNPN");

// EXTERNAL MODULE: /Users/haoeryou/.config/yarn/global/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("SCE9");

// EXTERNAL MODULE: ./node_modules/_material-design-icons@3.0.1@material-design-icons/index.js
var _material_design_icons_3_0_1_material_design_icons = __webpack_require__("36Wf");

// EXTERNAL MODULE: ./node_modules/_material-design-icons@3.0.1@material-design-icons/iconfont/material-icons.css
var material_icons = __webpack_require__("yzsw");

// EXTERNAL MODULE: ./src/assets/scss/main.scss
var main = __webpack_require__("wcMv");

// EXTERNAL MODULE: /Users/haoeryou/.config/yarn/global/node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("Z9ym");

// CONCATENATED MODULE: ./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/haoeryou/fed/hey/live/node_modules/.cache/vue-loader","cacheIdentifier":"b3fca2dc-vue-loader-template"}!/Users/haoeryou/.config/yarn/global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./src/components/LButton/LButton.vue?vue&type=template&id=35b67ef8&scoped=true
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:_vm.classes,on:{"click":_vm.click}},[(_vm.icon)?_c('i',{class:{ 'material-icons': _vm.icon, 'live-icon-btn': _vm.$slots.default, 'live-icon-circle-btn': !_vm.$slots.default }},[_vm._v(_vm._s(_vm.icon))]):_vm._e(),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LButton/LButton.vue?vue&type=template&id=35b67ef8&scoped=true

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.0.0-beta.47@@babel/runtime/helpers/builtin/es6/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: /Users/haoeryou/.config/yarn/global/node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("ss3V");

// CONCATENATED MODULE: ./node_modules/_thread-loader@1.1.5@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.0-beta.3@babel-loader/lib??ref--12-1!./node_modules/_cache-loader@1.2.2@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.2.4@vue-loader/lib??vue-loader-options!./src/components/LButton/LButton.vue?vue&type=script&lang=js



//
//
//
//
//
//
//
/* harmony default export */ var LButtonvue_type_script_lang_js = ({
  name: 'LButton',
  props: {
    icon: String,
    type: {
      type: String,
      default: 'default'
    },
    size: [String, Number],
    shape: String
  },
  data: function data() {
    return {};
  },
  computed: {
    classes: function classes() {
      var _ref;

      return [(_ref = {
        'live-btn': true
      }, _defineProperty(_ref, "live-btn-".concat(this.type), !!this.type), _defineProperty(_ref, "live-btn-".concat(this.size), !!this.size), _defineProperty(_ref, "live-btn-".concat(this.shape), !!this.shape), _ref)];
    }
  },
  methods: {
    click: function click(e) {
      this.$emit('click', e);
    }
  }
});
// CONCATENATED MODULE: ./src/components/LButton/LButton.vue?vue&type=script&lang=js
 /* harmony default export */ var LButton_LButtonvue_type_script_lang_js = (LButtonvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/LButton/LButton.vue?vue&type=style&index=0&id=35b67ef8&lang=scss&scoped=true
var LButtonvue_type_style_index_0_id_35b67ef8_lang_scss_scoped_true = __webpack_require__("R1+l");

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.2.4@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/LButton/LButton.vue






/* normalize component */

var component = normalizeComponent(
  LButton_LButtonvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "35b67ef8",
  null
  
)

/* harmony default export */ var LButton = (component.exports);
// CONCATENATED MODULE: ./src/components/LButton/index.js


 // LButton.install = function (Vue) {
//   Vue.component(LButton.name, LButton)
// }
// export default LButton

/* harmony default export */ var components_LButton = (function (Vue) {
  Vue.component(LButton.name, LButton);
});
// CONCATENATED MODULE: ./src/index.js










var components = [components_LButton]; // const install = function (Vue) {
//   if (install.installed) return
//   components.map(component => Vue.component(component.name, component))
// }
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }
// export default {
//   install,
//   LButton,
// }

var Live = {
  install: function install(Vue, options) {
    Object.values(components).forEach(function (component) {
      Vue.use(component);
    });
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Live);
}

/* harmony default export */ var src = (Live);
// CONCATENATED MODULE: /Users/haoeryou/.config/yarn/global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ }),

/***/ "wpi5":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("0fhx");
var dPs = __webpack_require__("EzFN");
var enumBugKeys = __webpack_require__("cyEu");
var IE_PROTO = __webpack_require__("JLIw")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("9E2N")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("zxRW").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "xZq9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "xhb2":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "yzsw":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "zxRW":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("iY+s").document;
module.exports = document && document.documentElement;


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=live.umd.js.map