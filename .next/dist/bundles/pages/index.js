module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ChoosePersona.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\thetr\\Projects\\Who_is_Home\\components\\ChoosePersona.js";


var ChoosePersona = function ChoosePersona(props) {
  var _props$people = props.people,
      people = _props$people === void 0 ? [] : _props$people,
      _props$count = props.count,
      count = _props$count === void 0 ? 3 : _props$count,
      _props$onSelected = props.onSelected,
      onSelected = _props$onSelected === void 0 ? function (f) {
    return f;
  } : _props$onSelected;
  var nameBadgeStyles = {
    fontSize: '0.8rem',
    height: 40,
    borderRadius: 20,
    cursor: 'pointer'
  };

  var choosePersona = function choosePersona(id) {
    return function (evt) {
      return onSelected(id);
    };
  };

  var randomPeople = function randomPeople(count) {
    return function (people) {
      var selected = [];
      var i = 0;
      count = Math.max(0, Math.min(count, people.length));

      while (i < count) {
        var index = Math.floor(Math.random() * people.length);
        if (selected.includes(index)) continue;
        ++i && selected.push(index);
      }

      return selected.map(function (index) {
        var _people$index = people[index],
            id = _people$index.id,
            name = _people$index.name;
        var className = 'd-flex align-items-center text-center text-white bg-secondary font-weight-bold py-2 px-4 mx-1 my-2';
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          key: index,
          className: className,
          style: nameBadgeStyles,
          title: name,
          onClick: choosePersona(id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, name);
      });
    };
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "w-100 h-100 px-3 pb-5 d-flex flex-wrap align-items-center align-content-center justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "h3 text-dark text-center py-3 w-100 font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "Choose your Persona"), randomPeople(count)(people));
};

/* harmony default export */ __webpack_exports__["a"] = (ChoosePersona);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "C:\\Users\\thetr\\Projects\\Who_is_Home\\components\\Layout.js";



var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, props.pageTitle || 'Realtime Geofencing')), props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Map.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MapContainer__ = __webpack_require__("./components/MapContainer.js");
var _jsxFileName = "C:\\Users\\thetr\\Projects\\Who_is_Home\\components\\Map.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var API_KEY = "AIzaSyBrwc2UzaNPf6ciHQfd0KdCHlYUKp3MYj0";
var MAP_URL = "https://maps.googleapis.com/maps/api/js?key=".concat(API_KEY, "&v=3.exp&libraries=geometry");

var Map =
/*#__PURE__*/
function (_Component) {
  _inherits(Map, _Component);

  function Map() {
    _classCallCheck(this, Map);

    return _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).apply(this, arguments));
  }

  _createClass(Map, [{
    key: "render",
    value: function render() {
      var containerStyles = {
        height: '100%',
        width: '100%',
        position: 'relative'
      };
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__MapContainer__["a" /* default */], _extends({
        googleMapURL: MAP_URL,
        loadingElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: containerStyles,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }),
        containerElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: containerStyles,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }),
        mapElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: containerStyles,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        })
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }));
    }
  }]);

  return Map;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

;
/* harmony default export */ __webpack_exports__["a"] = (Map);

/***/ }),

/***/ "./components/MapContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_google_maps__ = __webpack_require__("react-google-maps");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_google_maps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserMarker__ = __webpack_require__("./components/UserMarker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PersonMarker__ = __webpack_require__("./components/PersonMarker.js");
var _jsxFileName = "C:\\Users\\thetr\\Projects\\Who_is_Home\\components\\MapContainer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var MapContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(MapContainer, _Component);

  function MapContainer() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, MapContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = MapContainer.__proto__ || Object.getPrototypeOf(MapContainer)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "withinRegion", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(position, radius) {
        var to = new google.maps.LatLng(position.lat, position.lng);
        var distance = google.maps.geometry.spherical.computeDistanceBetween;
        return function (point) {
          var from = new google.maps.LatLng(point.lat, point.lng);
          return distance(from, to) <= radius;
        };
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "analyzeRegion", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(position, radius) {
        return function (people) {
          var _this$props$onRegionF = _this.props.onRegionFiltered,
              onRegionFiltered = _this$props$onRegionF === void 0 ? function (f) {
            return f;
          } : _this$props$onRegionF;

          var withinRegion = _this.withinRegion(position, radius);

          var mappedPeople = people.map(function (person) {
            var _ref2 = person || {},
                position = _ref2.position;

            var within = withinRegion(position);
            return _objectSpread({}, person, {
              within: within
            });
          });
          onRegionFiltered(mappedPeople);
        };
      }
    }), _temp));
  }

  _createClass(MapContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          _props$person = _props.person,
          id = _props$person.id,
          position = _props$person.position,
          radius = _props.radius,
          _props$people = _props.people,
          people = _props$people === void 0 ? [] : _props$people,
          _props$channel = _props.channel,
          channel = _props$channel === void 0 ? null : _props$channel;
      var mapContext = this.map.context['__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'];
      var setMapCenter = mapContext.setCenter.bind(mapContext);
      var lat = position.lat,
          lng = position.lng;
      channel && channel.bind('transit', function (_ref3) {
        var _ref3$person = _ref3.person,
            person = _ref3$person === void 0 ? {} : _ref3$person,
            people = _ref3.people;
        var $id = person.id,
            $position = person.position;
        var isUser = id === $id;
        var center = isUser ? $position : position;
        isUser && setMapCenter(center);

        _this2.analyzeRegion(center, radius)(people);
      });
      this.positionUpdate = setInterval(function () {
        lat = lat + Math.random() * 0.001;
        lng = lng + Math.random() * 0.001;
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post("/transit/".concat(id), {
          lat: lat,
          lng: lng
        });
      }, 10000);
      this.analyzeRegion(position, radius)(people);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.positionUpdate);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          _props2$person = _props2.person,
          id = _props2$person.id,
          position = _props2$person.position,
          radius = _props2.radius,
          people = _props2.people,
          channel = _props2.channel;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_google_maps__["GoogleMap"], {
        ref: function ref(elem) {
          return _this3.map = elem;
        },
        zoom: 15,
        center: position,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, people.map(function (person, index) {
        var props = {
          key: index,
          radius: radius,
          person: person,
          channel: channel
        };

        var withinRegion = function withinRegion(point) {
          return function (position, radius) {
            return _this3.withinRegion(position, radius)(point);
          };
        };

        return person.id === id ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__UserMarker__["a" /* default */], _extends({}, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        })) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__PersonMarker__["a" /* default */], _extends({
          user: _this3.props.person,
          withinRegion: withinRegion
        }, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }));
      })));
    }
  }]);

  return MapContainer;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_google_maps__["withScriptjs"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_google_maps__["withGoogleMap"])(MapContainer)));

/***/ }),

/***/ "./components/NearbyFriends.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\thetr\\Projects\\Who_is_Home\\components\\NearbyFriends.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


var BLACK_MARKER = 'https://i.imgur.com/8dOrls4.png?2';
var GREEN_MARKER = 'https://i.imgur.com/9v6uW8U.png';

var NearbyFriends =
/*#__PURE__*/
function (_Component) {
  _inherits(NearbyFriends, _Component);

  function NearbyFriends() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, NearbyFriends);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = NearbyFriends.__proto__ || Object.getPrototypeOf(NearbyFriends)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        people: []
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "updatePeople", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(people) {
        return _this.setState({
          people: people
        });
      }
    }), _temp));
  }

  _createClass(NearbyFriends, [{
    key: "render",
    value: function render() {
      var people = this.state.people;
      var _props$person = this.props.person,
          name = _props$person.name,
          id = _props$person.id;
      var nameBadgeStyles = {
        fontSize: '0.8rem',
        height: 40,
        borderRadius: 20,
        cursor: 'pointer'
      };

      var showPeople = function showPeople(filterFn, marker) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }, people.filter(filterFn).map(function (person, index) {
          if (person.id === id) return null;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            key: index,
            className: "d-flex border-bottom border-gray w-100 px-4 py-3 font-weight-bold text-secondary align-items-center",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "pl-2",
            style: {
              width: 30,
              height: 30
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
            src: marker,
            className: "img-fluid",
            alt: "marker",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
            className: "pl-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          }, person.name));
        }));
      };

      return id && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "border-bottom border-gray w-100 px-2 d-flex align-items-center bg-white justify-content-between",
        style: {
          height: 90
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "h4 text-dark mb-0 mx-4 font-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "Nearby Friends"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "d-flex align-items-center text-center text-white bg-primary font-weight-bold py-2 px-4 mx-4",
        style: nameBadgeStyles,
        title: name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, name)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "w-100 d-flex flex-wrap align-items-start align-content-start position-relative",
        style: {
          height: 'calc(100% - 90px)',
          overflowY: 'auto'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, showPeople(function (person) {
        return person.within;
      }, GREEN_MARKER), showPeople(function (person) {
        return !person.within;
      }, BLACK_MARKER)));
    }
  }]);

  return NearbyFriends;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

;
/* harmony default export */ __webpack_exports__["a"] = (NearbyFriends);

/***/ }),

/***/ "./components/PersonMarker.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_google_maps__ = __webpack_require__("react-google-maps");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_google_maps__);
var _jsxFileName = "C:\\Users\\thetr\\Projects\\Who_is_Home\\components\\PersonMarker.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var BLACK_MARKER = 'https://i.imgur.com/8dOrls4.png?2';
var GREEN_MARKER = 'https://i.imgur.com/9v6uW8U.png';

var PersonMarker =
/*#__PURE__*/
function (_Component) {
  _inherits(PersonMarker, _Component);

  function PersonMarker(props) {
    var _this;

    _classCallCheck(this, PersonMarker);

    _this = _possibleConstructorReturn(this, (PersonMarker.__proto__ || Object.getPrototypeOf(PersonMarker)).call(this, props));
    var _this$props = _this.props,
        _this$props$user = _this$props.user,
        userID = _this$props$user.id,
        userPosition = _this$props$user.position,
        _this$props$person = _this$props.person,
        _this$props$person$id = _this$props$person.id,
        id = _this$props$person$id === void 0 ? null : _this$props$person$id,
        _this$props$person$po = _this$props$person.position,
        position = _this$props$person$po === void 0 ? null : _this$props$person$po,
        _this$props$channel = _this$props.channel,
        channel = _this$props$channel === void 0 ? null : _this$props$channel;
    _this.id = id;
    _this.userID = userID;
    _this.channel = channel;
    _this.state = {
      position: position,
      userPosition: userPosition
    };
    return _this;
  }

  _createClass(PersonMarker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.channel && this.channel.bind('transit', function (_ref) {
        var _ref$person = _ref.person,
            person = _ref$person === void 0 ? {} : _ref$person;
        var id = person.id,
            position = person.position;
        id === _this2.id && _this2.setState({
          position: position
        });
        id === _this2.userID && _this2.setState({
          userPosition: position
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          position = _state.position,
          userPosition = _state.userPosition;
      var _props = this.props,
          name = _props.person.name,
          radius = _props.radius,
          _props$withinRegion = _props.withinRegion,
          withinRegion = _props$withinRegion === void 0 ? function (f) {
        return f;
      } : _props$withinRegion;
      var within = !!withinRegion(position)(userPosition, radius);
      var MARKER_SIZE = new google.maps.Size(25, 35);
      var MARKER_ICON = within ? GREEN_MARKER : BLACK_MARKER;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_google_maps__["Marker"], {
        position: position,
        title: name,
        options: {
          icon: {
            url: MARKER_ICON,
            scaledSize: MARKER_SIZE
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      });
    }
  }]);

  return PersonMarker;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

;
/* harmony default export */ __webpack_exports__["a"] = (PersonMarker);

/***/ }),

/***/ "./components/UserMarker.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_google_maps__ = __webpack_require__("react-google-maps");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_google_maps__);
var _jsxFileName = "C:\\Users\\thetr\\Projects\\Who_is_Home\\components\\UserMarker.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var UserMarker =
/*#__PURE__*/
function (_Component) {
  _inherits(UserMarker, _Component);

  function UserMarker(props) {
    var _this;

    _classCallCheck(this, UserMarker);

    _this = _possibleConstructorReturn(this, (UserMarker.__proto__ || Object.getPrototypeOf(UserMarker)).call(this, props));
    var _this$props = _this.props,
        _this$props$person = _this$props.person,
        _this$props$person$id = _this$props$person.id,
        id = _this$props$person$id === void 0 ? null : _this$props$person$id,
        _this$props$person$po = _this$props$person.position,
        position = _this$props$person$po === void 0 ? null : _this$props$person$po,
        _this$props$channel = _this$props.channel,
        channel = _this$props$channel === void 0 ? null : _this$props$channel;
    _this.id = id;
    _this.channel = channel;
    _this.state = {
      position: position
    };
    return _this;
  }

  _createClass(UserMarker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.channel && this.channel.bind('transit', function (_ref) {
        var _ref$person = _ref.person,
            person = _ref$person === void 0 ? {} : _ref$person;
        var id = person.id,
            position = person.position;
        id === _this2.id && _this2.setState({
          position: position
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var radius = this.props.radius;
      var position = this.state.position;
      var regionOptions = {
        fillOpacity: 0.1,
        strokeWidth: 1,
        strokeOpacity: 0.2
      };
      var MARKER_SIZE = new google.maps.Size(50, 70);
      var MARKER_ICON = 'https://i.imgur.com/Rhv5xQh.png';
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_google_maps__["Marker"], {
        position: position,
        title: "You",
        options: {
          icon: {
            url: MARKER_ICON,
            scaledSize: MARKER_SIZE
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_google_maps__["Circle"], {
        center: position,
        radius: radius,
        options: regionOptions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }));
    }
  }]);

  return UserMarker;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

;
/* harmony default export */ __webpack_exports__["a"] = (UserMarker);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pusher_js__ = __webpack_require__("pusher-js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pusher_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pusher_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ChoosePersona__ = __webpack_require__("./components/ChoosePersona.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Map__ = __webpack_require__("./components/Map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_NearbyFriends__ = __webpack_require__("./components/NearbyFriends.js");
var _jsxFileName = "C:\\Users\\thetr\\Projects\\Who_is_Home\\pages\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(IndexPage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  });
});



var IndexPage =
/*#__PURE__*/
function (_Component) {
  _inherits(IndexPage, _Component);

  function IndexPage() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, IndexPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        id: null,
        people: []
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "endConnection", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.pusher.disconnect();

        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post("/offline/".concat(_this.state.id));
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "personaSelected", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id) {
        _this.setState({
          id: id
        });

        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post("/online/".concat(id));
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "regionFiltered", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(people) {
        return _this.nearby.updatePeople(people);
      }
    }), _temp));
  }

  _createClass(IndexPage, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.pusher = new __WEBPACK_IMPORTED_MODULE_2_pusher_js___default.a("bed495614870c5518c58", {
        cluster: "us2",
        encrypted: true
      });
      this.channel = this.pusher.subscribe('map-geofencing');
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/people').then(function (_ref2) {
        var data = _ref2.data;
        var _data$people = data.people,
            people = _data$people === void 0 ? [] : _data$people;

        _this2.setState({
          people: people
        });
      });
      window.onbeforeunload = this.endConnection;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.endConnection();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          id = _state.id,
          people = _state.people;
      var person = people.find(function (person) {
        return person.id === id;
      }) || {};
      var peopleOffline = people.filter(function (person) {
        return !person.online;
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */], {
        pageTitle: "Realtime Geofencing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main", {
        className: "container-fluid position-absolute h-100 bg-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, id ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row position-absolute w-100 h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        className: "col-md-9 px-0 border-right border-gray position-relative h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Map__["a" /* default */], {
        person: person,
        radius: 1000,
        people: people,
        channel: this.channel,
        onRegionFiltered: this.regionFiltered,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        className: "col-md-3 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_NearbyFriends__["a" /* default */], {
        ref: function ref(elem) {
          return _this3.nearby = elem;
        },
        person: person,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }))) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_ChoosePersona__["a" /* default */], {
        count: 5,
        people: peopleOffline,
        onSelected: this.personaSelected,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })));
    }
  }]);

  return IndexPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "pusher-js":
/***/ (function(module, exports) {

module.exports = require("pusher-js");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-google-maps":
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map