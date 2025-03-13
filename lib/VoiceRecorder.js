"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var defaultStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    gap: '12px',
    padding: '8px 16px',
    borderRadius: '40px',
    transition: 'all 0.3s ease'
  },
  timer: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    fontFamily: 'system-ui, sans-serif',
    minWidth: '72px',
    textAlign: 'center'
  },
  button: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.2s ease',
    color: '#374151',
    '&:hover:not(:disabled)': {
      transform: 'scale(1.05)',
      boxShadow: '0 2px 6px rgba(59, 130, 246, 0.3)'
    },
    '&:active:not(:disabled)': {
      transform: 'scale(0.95)'
    },
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    }
  },
  recording: {
    backgroundColor: '#ef4444',
    color: '#ffffff'
  },
  paused: {
    backgroundColor: '#f59e0b',
    color: '#ffffff'
  },
  recordingContainer: {
    backgroundColor: '#ffffff'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '4px',
    paddingLeft: '10px',
    paddingRight: '12px',
    borderRadius: '24px',
    backgroundColor: '#f3f4f6'
  },
  controlButton: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.2s ease',
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    '&:hover:not(:disabled)': {
      transform: 'scale(1.05)',
      boxShadow: '0 2px 6px rgba(59, 130, 246, 0.3)'
    },
    '&:active:not(:disabled)': {
      transform: 'scale(0.95)'
    }
  },
  stopButton: {
    backgroundColor: '#ef4444',
    color: '#ffffff'
  }
};
var VoiceRecorder = function VoiceRecorder(_ref) {
  var onRecordingStart = _ref.onRecordingStart,
    onRecordingStop = _ref.onRecordingStop,
    onRecordingPause = _ref.onRecordingPause,
    onRecordingResume = _ref.onRecordingResume,
    onError = _ref.onError,
    onMaxDuration = _ref.onMaxDuration,
    _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    _ref$classNames = _ref.classNames,
    classNames = _ref$classNames === void 0 ? {} : _ref$classNames,
    _ref$startIcon = _ref.startIcon,
    startIcon = _ref$startIcon === void 0 ? '🎤' : _ref$startIcon,
    _ref$stopIcon = _ref.stopIcon,
    stopIcon = _ref$stopIcon === void 0 ? '⏹' : _ref$stopIcon,
    _ref$pauseIcon = _ref.pauseIcon,
    pauseIcon = _ref$pauseIcon === void 0 ? '⏸' : _ref$pauseIcon,
    _ref$resumeIcon = _ref.resumeIcon,
    resumeIcon = _ref$resumeIcon === void 0 ? '▶' : _ref$resumeIcon,
    _ref$maxDuration = _ref.maxDuration,
    maxDuration = _ref$maxDuration === void 0 ? null : _ref$maxDuration,
    _ref$timerFormat = _ref.timerFormat,
    timerFormat = _ref$timerFormat === void 0 ? 'mm:ss' : _ref$timerFormat,
    _ref$showTimer = _ref.showTimer,
    showTimer = _ref$showTimer === void 0 ? true : _ref$showTimer,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$audioConstraints = _ref.audioConstraints,
    audioConstraints = _ref$audioConstraints === void 0 ? {
      echoCancellation: true,
      noiseSuppression: true,
      autoGainControl: true
    } : _ref$audioConstraints,
    _ref$mediaRecorderOpt = _ref.mediaRecorderOptions,
    mediaRecorderOptions = _ref$mediaRecorderOpt === void 0 ? {
      mimeType: 'audio/webm;codecs=opus'
    } : _ref$mediaRecorderOpt,
    _ref$chunkDuration = _ref.chunkDuration,
    chunkDuration = _ref$chunkDuration === void 0 ? 1000 : _ref$chunkDuration;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    recording = _useState2[0],
    setRecording = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    paused = _useState4[0],
    setPaused = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    time = _useState6[0],
    setTime = _useState6[1];
  var mediaRecorderRef = (0, _react.useRef)(null);
  var audioChunksRef = (0, _react.useRef)([]);
  var timerRef = (0, _react.useRef)(null);
  var streamRef = (0, _react.useRef)(null);

  // Cleanup on unmount
  (0, _react.useEffect)(function () {
    return function () {
      if (mediaRecorderRef.current) {
        var _mediaRecorderRef$cur;
        (_mediaRecorderRef$cur = mediaRecorderRef.current.stream) === null || _mediaRecorderRef$cur === void 0 || _mediaRecorderRef$cur.getTracks().forEach(function (track) {
          return track.stop();
        });
      }
      clearInterval(timerRef.current);
    };
  }, []);
  var mergeStyles = function mergeStyles(base, custom) {
    var states = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return _objectSpread(_objectSpread(_objectSpread({}, base), custom), Object.keys(states).reduce(function (acc, key) {
      if (states[key]) acc = _objectSpread(_objectSpread({}, acc), custom === null || custom === void 0 ? void 0 : custom[key]);
      return acc;
    }, {}));
  };
  var formatTime = function formatTime(seconds) {
    var hrs = Math.floor(seconds / 3600);
    var mins = Math.floor(seconds % 3600 / 60);
    var secs = seconds % 60;
    if (timerFormat === 'hh:mm:ss') {
      return "".concat(String(hrs).padStart(2, '0'), ":").concat(String(mins).padStart(2, '0'), ":").concat(String(secs).padStart(2, '0'));
    }
    if (timerFormat === 'mm:ss') {
      return "".concat(String(hrs * 60 + mins).padStart(2, '0'), ":").concat(String(secs).padStart(2, '0'));
    }
    return String(seconds).padStart(2, '0');
  };
  var startTimer = function startTimer() {
    timerRef.current = setInterval(function () {
      setTime(function (prev) {
        var newTime = prev + 1;
        if (maxDuration && newTime >= maxDuration) {
          clearInterval(timerRef.current);
          onMaxDuration === null || onMaxDuration === void 0 || onMaxDuration();
          stopRecording();
        }
        return newTime;
      });
    }, 1000);
  };
  var startRecording = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var stream, mediaRecorder;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return navigator.mediaDevices.getUserMedia({
              audio: audioConstraints
            });
          case 3:
            stream = _context.sent;
            streamRef.current = stream;
            mediaRecorder = new MediaRecorder(stream, mediaRecorderOptions);
            mediaRecorderRef.current = mediaRecorder;
            mediaRecorder.ondataavailable = function (_ref3) {
              var data = _ref3.data;
              audioChunksRef.current.push(data);
            };
            mediaRecorder.onstop = function () {
              var blob = new Blob(audioChunksRef.current, {
                type: mediaRecorderOptions.mimeType
              });
              onRecordingStop === null || onRecordingStop === void 0 || onRecordingStop(blob);
              audioChunksRef.current = [];
            };
            mediaRecorder.start(chunkDuration);
            setRecording(true);
            setPaused(false);
            startTimer();
            onRecordingStart === null || onRecordingStart === void 0 || onRecordingStart();
            _context.next = 19;
            break;
          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            onError === null || onError === void 0 || onError(_context.t0);
          case 19:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 16]]);
    }));
    return function startRecording() {
      return _ref2.apply(this, arguments);
    };
  }();
  var stopRecording = function stopRecording() {
    var _mediaRecorderRef$cur2, _mediaRecorderRef$cur3;
    if (((_mediaRecorderRef$cur2 = mediaRecorderRef.current) === null || _mediaRecorderRef$cur2 === void 0 ? void 0 : _mediaRecorderRef$cur2.state) === 'recording' || ((_mediaRecorderRef$cur3 = mediaRecorderRef.current) === null || _mediaRecorderRef$cur3 === void 0 ? void 0 : _mediaRecorderRef$cur3.state) === 'paused') {
      var _streamRef$current;
      mediaRecorderRef.current.stop();
      (_streamRef$current = streamRef.current) === null || _streamRef$current === void 0 || _streamRef$current.getTracks().forEach(function (track) {
        return track.stop();
      });
      clearInterval(timerRef.current);
      setRecording(false);
      setPaused(false);
      setTime(0);
    }
  };
  var togglePause = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _mediaRecorderRef$cur4;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (!paused) {
              _context2.next = 7;
              break;
            }
            _context2.next = 4;
            return startRecording();
          case 4:
            onRecordingResume === null || onRecordingResume === void 0 || onRecordingResume();
            _context2.next = 8;
            break;
          case 7:
            if (((_mediaRecorderRef$cur4 = mediaRecorderRef.current) === null || _mediaRecorderRef$cur4 === void 0 ? void 0 : _mediaRecorderRef$cur4.state) === 'recording') {
              mediaRecorderRef.current.pause();
              onRecordingPause === null || onRecordingPause === void 0 || onRecordingPause();
              clearInterval(timerRef.current);
              setPaused(true);
            }
          case 8:
            _context2.next = 13;
            break;
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            onError === null || onError === void 0 || onError(_context2.t0);
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 10]]);
    }));
    return function togglePause() {
      return _ref4.apply(this, arguments);
    };
  }();
  var buttonStyle = mergeStyles(defaultStyles.button, styles.button, {
    recording: recording,
    paused: paused
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: mergeStyles(defaultStyles.container, styles.container, {
      recording: recording && defaultStyles.recordingContainer
    }),
    className: "voice-recorder-container ".concat(classNames.container || ''),
    role: "region",
    "aria-label": "Voice Recorder"
  }, recording ? /*#__PURE__*/_react["default"].createElement("div", {
    style: mergeStyles(defaultStyles.controls, styles.controls),
    className: "voice-recorder-controls"
  }, showTimer && /*#__PURE__*/_react["default"].createElement("div", {
    style: mergeStyles(defaultStyles.timer, styles.timer),
    className: "voice-recorder-timer ".concat(classNames.timer || ''),
    "aria-live": "polite"
  }, formatTime(time)), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: togglePause,
    style: mergeStyles(defaultStyles.controlButton, styles.button, {
      recording: !paused && defaultStyles.recording,
      paused: paused && defaultStyles.paused
    }),
    className: "voice-recorder-control ".concat(paused ? 'paused' : 'recording', " ").concat(classNames.button || ''),
    disabled: disabled,
    "aria-label": paused ? 'Resume recording' : 'Pause recording'
  }, paused ? resumeIcon : pauseIcon), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: stopRecording,
    style: mergeStyles(defaultStyles.controlButton, defaultStyles.stopButton, styles.stopButton),
    className: "voice-recorder-stop ".concat(classNames.stopButton || ''),
    disabled: disabled,
    "aria-label": "Stop recording"
  }, stopIcon)) : /*#__PURE__*/_react["default"].createElement("button", {
    onClick: startRecording,
    style: _objectSpread(_objectSpread({}, buttonStyle), disabled && defaultStyles.button['&:disabled']),
    className: "voice-recorder-start ".concat(classNames.button || ''),
    disabled: disabled,
    "aria-label": "Start recording"
  }, startIcon));
};
VoiceRecorder.propTypes = {
  onRecordingStart: _propTypes["default"].func,
  onRecordingStop: _propTypes["default"].func,
  onRecordingPause: _propTypes["default"].func,
  onRecordingResume: _propTypes["default"].func,
  onError: _propTypes["default"].func,
  onMaxDuration: _propTypes["default"].func,
  styles: _propTypes["default"].shape({
    container: _propTypes["default"].object,
    timer: _propTypes["default"].object,
    button: _propTypes["default"].object,
    stopButton: _propTypes["default"].object,
    recording: _propTypes["default"].object,
    paused: _propTypes["default"].object
  }),
  classNames: _propTypes["default"].shape({
    container: _propTypes["default"].string,
    timer: _propTypes["default"].string,
    button: _propTypes["default"].string,
    stopButton: _propTypes["default"].string,
    paused: _propTypes["default"].string,
    controls: _propTypes["default"].string,
    controlButton: _propTypes["default"].string
  }),
  startIcon: _propTypes["default"].node,
  stopIcon: _propTypes["default"].node,
  pauseIcon: _propTypes["default"].node,
  resumeIcon: _propTypes["default"].node,
  maxDuration: _propTypes["default"].number,
  timerFormat: _propTypes["default"].oneOf(['hh:mm:ss', 'mm:ss', 'ss']),
  showTimer: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  audioConstraints: _propTypes["default"].object,
  mediaRecorderOptions: _propTypes["default"].object,
  chunkDuration: _propTypes["default"].number
};
var _default = exports["default"] = VoiceRecorder;