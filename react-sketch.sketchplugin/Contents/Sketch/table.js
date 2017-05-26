var console = {
  log: log,
  warn: log,
  error: log,
  dump: function (obj) {
    log('#####################################################################')
    log('## Dumping object ' + obj)
    if (obj.className) {
      log('## obj class is: ' + obj.className())
    }
    log('#####################################################################')

    if (obj.class && obj.class().mocha) {
      log('obj.properties:')
      log(obj.class().mocha().properties())
      log('obj.propertiesWithAncestors:')
      log(obj.class().mocha().propertiesWithAncestors())

      log('obj.classMethods:')
      log(obj.class().mocha().classMethods())
      log('obj.classMethodsWithAncestors:')
      log(obj.class().mocha().classMethodsWithAncestors())

      log('obj.instanceMethods:')
      log(obj.class().mocha().instanceMethods())
      log('obj.instanceMethodsWithAncestors:')
      log(obj.class().mocha().instanceMethodsWithAncestors())

      log('obj.protocols:')
      log(obj.class().mocha().protocols())
      log('obj.protocolsWithAncestors:')
      log(obj.class().mocha().protocolsWithAncestors())
    }

    if (obj.treeAsDictionary) {
      log('obj.treeAsDictionary():')
      log(obj.treeAsDictionary())
    }
  }
};

var onRun =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
/******/ })
/************************************************************************/
/******/ ({

/***/ 24:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jiangyijie/Sites/github_proj/react-sketchapp/examples/basic-setup/node_modules/react-sketchapp/lib/index.js'");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jiangyijie/Sites/github_proj/react-sketchapp/examples/basic-setup/node_modules/react/react.js'");

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

module.exports = {
  // rows 是你每一行的数据
  rows: function () {
    function rows() {
      return [{
        info_0: "广告项目一",
        info_1: "朋友圈广告",
        info_2: "34,535,254",
        info_3: "43,435,245",
        info_4: "3,532,536",
        info_5: "425.4"
      }, {
        info_0: "广告项目二",
        info_1: "朋友圈广告",
        info_2: "5,543,533",
        info_3: "2,364,643",
        info_4: "644,253",
        info_5: "425.4"
      }, {
        info_0: "广告项目三",
        info_1: "朋友圈广告",
        info_2: "8,474,254",
        info_3: "253,644",
        info_4: "55,353",
        info_5: "425.4"
      }, {
        info_0: "广告项目四",
        info_1: "公众号广告",
        info_2: "9,353,774",
        info_3: "34,258",
        info_4: "2,576",
        info_5: "425.4"
      }, {
        info_0: "广告项目五",
        info_1: "公众号广告",
        info_2: "12,475,475",
        info_3: "3,535,478",
        info_4: "364,755",
        info_5: "425.4"
      }];
    }

    return rows;
  }(),

  // columns 是你每一列的配置

  // 一个完整的对象：
  // title:         列名称
  // dataIndex:     这一列的数据索引
  // width:         宽度，没有宽度的列会将剩余的宽度平分
  // type:"number"  指定该项为数字（目前只有 number 这个值）
  // align:"left || center || right" 列对齐方式

  columns: function () {
    function columns() {
      return [{
        title: "广告项目名称",
        dataIndex: "info_0",
        width: 150
      }, {
        title: "广告位置",
        dataIndex: "info_1",
        width: 300
      }, {
        title: "曝光量",
        dataIndex: "info_2",
        align: "right",
        type: "number"
      }, {
        title: "点击量",
        dataIndex: "info_3",
        align: "right",
        type: "number"
      }, {
        title: "转发量",
        dataIndex: "info_4",
        align: "right",
        type: "number"
      }, {
        title: "转化指标",
        dataIndex: "info_5",
        align: "right",
        type: "number"
      }];
    }

    return columns;
  }()
};

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSketchapp = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Column = function Column(_ref) {
  var title = _ref.title,
      dataIndex = _ref.dataIndex;
  return _react2['default'].createElement(_reactSketchapp.View, {
    name: 'Column'
  });
};

Column.propTypes = {
  title: _propTypes2['default'].string,
  dataIndex: _propTypes2['default'].string,
  align: _propTypes2['default'].string,
  type: _propTypes2['default'].string,
  width: _propTypes2['default'].number
};

module.exports = Column;

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSketchapp = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var dataInfo = [];
var widths = [];
var totalWidth = 0;

var Table = function Table(_ref) {
  var dataSource = _ref.dataSource,
      children = _ref.children;

  children.map(function (child, i) {
    if (child.props.width) {
      widths.push(child.props.width);
    }
  });
  widths.forEach(function (o) {
    totalWidth += o;
  });
  return _react2['default'].createElement(
    _reactSketchapp.View,
    {
      name: 'Table',
      style: {
        borderWidth: 1,
        borderBottomWidth: 0,
        borderColor: "#e4e6eb",
        minWidth: 925
      }
    },
    _react2['default'].createElement(
      _reactSketchapp.View,
      {
        style: {
          flexDirection: 'row',
          backgroundColor: '#f4f6f9',
          borderBottomWidth: 1,
          borderBottomColor: "#e4e6eb"
        }
      },
      children.map(function (child, i) {
        var columnInfo = {
          index: child.props.dataIndex,
          align: child.props.align,
          type: child.props.type,
          width: child.props.width
        };
        dataInfo.push(columnInfo);
        return _react2['default'].createElement(
          _reactSketchapp.Text,
          {
            style: {
              padding: 12,
              paddingLeft: i === 0 ? 20 : 12,
              paddingRight: i === children.length - 1 ? 20 : 12,
              lineHeight: 20,
              width: child.props.width ? child.props.width : (927 - totalWidth) / (children.length - widths.length),
              textAlign: child.props.align
            },
            key: i
          },
          child.props.title
        );
      })
    ),
    _react2['default'].createElement(
      _reactSketchapp.View,
      {
        style: {
          backgroundColor: '#fff'
        }
      },
      dataSource.map(function (row, i) {
        return _react2['default'].createElement(
          _reactSketchapp.View,
          {
            key: i,
            style: {
              flexDirection: 'row',
              minWidth: 927,
              borderBottomWidth: 1,
              borderBottomColor: "#e4e6eb"
            }
          },
          dataInfo.map(function (info, index) {
            return _react2['default'].createElement(
              _reactSketchapp.Text,
              {
                key: index,
                style: {
                  padding: 12,
                  paddingLeft: info.index === dataInfo[0].index ? 20 : 12,
                  paddingRight: info.index === dataInfo[dataInfo.length - 1].index ? 20 : 12,
                  lineHeight: 20,
                  width: info.width ? info.width : (927 - totalWidth) / (children.length - widths.length),
                  textAlign: info.align,
                  color: info.type === "number" ? "#65676e" : "#24262e"
                }
              },
              row[info.index]
            );
          })
        );
      })
    )
  );
};

Table.propTypes = {
  dataSource: _propTypes2['default'].array
};

module.exports = Table;

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSketchapp = __webpack_require__(24);

var _Table = __webpack_require__(64);

var _Table2 = _interopRequireDefault(_Table);

var _Column = __webpack_require__(63);

var _Column2 = _interopRequireDefault(_Column);

var _data = __webpack_require__(62);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Document = function Document(_ref) {
  var dataSource = _ref.dataSource;
  return _react2['default'].createElement(
    _reactSketchapp.Artboard,
    {
      style: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 1136,
        padding: 100
      }
    },
    _react2['default'].createElement(
      _Table2['default'],
      {
        dataSource: dataSource
      },
      _data2['default'].columns().map(function (column, i) {
        return _react2['default'].createElement(_Column2['default'], {
          key: i,
          title: column.title,
          dataIndex: column.dataIndex,
          width: column.width ? column.width : null,
          type: column.type ? column.type : null,
          align: column.align ? column.align : null
        });
      })
    )
  );
};

// 这里引入你的数据


Document.propTypes = {
  dataSource: _propTypes2['default'].array
};

exports['default'] = function (context) {
  (0, _reactSketchapp.render)(_react2['default'].createElement(Document, { dataSource: _data2['default'].rows() }), context.document.currentPage());
};

module.exports = exports['default'];

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jiangyijie/Sites/github_proj/react-sketchapp/examples/basic-setup/node_modules/prop-types/index.js'");

/***/ })

/******/ });