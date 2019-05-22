(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Erizo"] = factory();
	else
		root["Erizo"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* global console */

/*
 * API to write logs based on traditional logging mechanisms: debug, trace, info, warning, error
 */
const Logger = (() => {
  const DEBUG = 0;
  const TRACE = 1;
  const INFO = 2;
  const WARNING = 3;
  const ERROR = 4;
  const NONE = 5;
  let logPrefix = '';
  let outputFunction;

    // It sets the new log level. We can set it to NONE if we do not want to print logs
  const setLogLevel = (level) => {
    let targetLevel = level;
    if (level > Logger.NONE) {
      targetLevel = Logger.NONE;
    } else if (level < Logger.DEBUG) {
      targetLevel = Logger.DEBUG;
    }
    Logger.logLevel = targetLevel;
  };

  outputFunction = (args) => {
    // eslint-disable-next-line no-console
    console.log(...args);
  };

  const setOutputFunction = (newOutputFunction) => {
    outputFunction = newOutputFunction;
  };

  const setLogPrefix = (newLogPrefix) => {
    logPrefix = newLogPrefix;
  };

    // Generic function to print logs for a given level:
    //  Logger.[DEBUG, TRACE, INFO, WARNING, ERROR]
  const log = (level, ...args) => {
    let out = logPrefix;
    if (level < Logger.logLevel) {
      return;
    }
    if (level === Logger.DEBUG) {
      out = `${out}DEBUG`;
    } else if (level === Logger.TRACE) {
      out = `${out}TRACE`;
    } else if (level === Logger.INFO) {
      out = `${out}INFO`;
    } else if (level === Logger.WARNING) {
      out = `${out}WARNING`;
    } else if (level === Logger.ERROR) {
      out = `${out}ERROR`;
    }
    out = `${out}: `;
    const tempArgs = [out].concat(args);
    if (Logger.panel !== undefined) {
      let tmp = '';
      for (let idx = 0; idx < tempArgs.length; idx += 1) {
        tmp += tempArgs[idx];
      }
      Logger.panel.value = `${Logger.panel.value}\n${tmp}`;
    } else {
      outputFunction.apply(Logger, [tempArgs]);
    }
  };

  const debug = (...args) => {
    Logger.log(Logger.DEBUG, ...args);
  };

  const trace = (...args) => {
    Logger.log(Logger.TRACE, ...args);
  };

  const info = (...args) => {
    Logger.log(Logger.INFO, ...args);
  };

  const warning = (...args) => {
    Logger.log(Logger.WARNING, ...args);
  };

  const error = (...args) => {
    Logger.log(Logger.ERROR, ...args);
  };

  return {
    DEBUG,
    TRACE,
    INFO,
    WARNING,
    ERROR,
    NONE,
    setLogLevel,
    setOutputFunction,
    setLogPrefix,
    log,
    debug,
    trace,
    info,
    warning,
    error,
  };
})();

/* harmony default export */ __webpack_exports__["a"] = (Logger);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EventDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EventEmitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LicodeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RoomEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return StreamEvent; });
/* unused harmony export PublisherEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_Logger__ = __webpack_require__(0);
/* global */


/*
 * Class EventDispatcher provides event handling to sub-classes.
 * It is inherited from Publisher, Room, etc.
 */
const EventDispatcher = () => {
  const that = {};
  // Private vars
  const dispatcher = {
    eventListeners: {},
  };

  // Public functions

  // It adds an event listener attached to an event type.
  that.addEventListener = (eventType, listener) => {
    if (dispatcher.eventListeners[eventType] === undefined) {
      dispatcher.eventListeners[eventType] = [];
    }
    dispatcher.eventListeners[eventType].push(listener);
  };

  // It removes an available event listener.
  that.removeEventListener = (eventType, listener) => {
    if (!dispatcher.eventListeners[eventType]) {
      return;
    }
    const index = dispatcher.eventListeners[eventType].indexOf(listener);
    if (index !== -1) {
      dispatcher.eventListeners[eventType].splice(index, 1);
    }
  };

  // It removes all listeners
  that.removeAllListeners = () => {
    dispatcher.eventListeners = {};
  };

  // It dispatch a new event to the event listeners, based on the type
  // of event. All events are intended to be LicodeEvents.
  that.dispatchEvent = (event) => {
    if (!event || !event.type) {
      throw new Error('Undefined event');
    }
    __WEBPACK_IMPORTED_MODULE_0__utils_Logger__["a" /* default */].debug(`Event: ${event.type}`);
    const listeners = dispatcher.eventListeners[event.type] || [];
    for (let i = 0; i < listeners.length; i += 1) {
      listeners[i](event);
    }
  };

  that.on = that.addEventListener;
  that.off = that.removeEventListener;
  that.emit = that.dispatchEvent;

  return that;
};

class EventEmitter {
  constructor() {
    this.emitter = EventDispatcher();
  }
  addEventListener(eventType, listener) {
    this.emitter.addEventListener(eventType, listener);
  }
  removeEventListener(eventType, listener) {
    this.emitter.removeEventListener(eventType, listener);
  }
  dispatchEvent(evt) {
    this.emitter.dispatchEvent(evt);
  }
  on(eventType, listener) {
    this.addEventListener(eventType, listener);
  }
  off(eventType, listener) {
    this.removeEventListener(eventType, listener);
  }
  emit(evt) {
    this.dispatchEvent(evt);
  }
}


// **** EVENTS ****

/*
 * Class LicodeEvent represents a generic Event in the library.
 * It handles the type of event, that is important when adding
 * event listeners to EventDispatchers and dispatching new events.
 * A LicodeEvent can be initialized this way:
 * var event = LicodeEvent({type: "room-connected"});
 */
const LicodeEvent = (spec) => {
  const that = {};

  // Event type. Examples are: 'room-connected', 'stream-added', etc.
  that.type = spec.type;

  return that;
};

/*
 * Class ConnectionEvent represents an Event that happens in a Room. It is a
 * LicodeEvent.
 * It is usually initialized as:
 * var roomEvent = RoomEvent({type:"stream-added", streams:[stream1, stream2]});
 * Event types:
 * 'stream-added' - a stream has been added to the connection.
 * 'stream-removed' - a stream has been removed from the connection.
 * 'ice-state-change' - ICE state changed
 */
const ConnectionEvent = (spec) => {
  const that = LicodeEvent(spec);

  that.stream = spec.stream;
  that.state = spec.state;

  return that;
};

/*
 * Class RoomEvent represents an Event that happens in a Room. It is a
 * LicodeEvent.
 * It is usually initialized as:
 * var roomEvent = RoomEvent({type:"room-connected", streams:[stream1, stream2]});
 * Event types:
 * 'room-connected' - points out that the user has been successfully connected to the room.
 * 'room-disconnected' - shows that the user has been already disconnected.
 */
const RoomEvent = (spec) => {
  const that = LicodeEvent(spec);

  // A list with the streams that are published in the room.
  that.streams = spec.streams;
  that.message = spec.message;

  return that;
};

/*
 * Class StreamEvent represents an event related to a stream. It is a LicodeEvent.
 * It is usually initialized this way:
 * var streamEvent = StreamEvent({type:"stream-added", stream:stream1});
 * Event types:
 * 'stream-added' - indicates that there is a new stream available in the room.
 * 'stream-removed' - shows that a previous available stream has been removed from the room.
 */
const StreamEvent = (spec) => {
  const that = LicodeEvent(spec);

  // The stream related to this event.
  that.stream = spec.stream;

  that.msg = spec.msg;
  that.bandwidth = spec.bandwidth;
  that.attrs = spec.attrs;

  return that;
};

/*
 * Class PublisherEvent represents an event related to a publisher. It is a LicodeEvent.
 * It usually initializes as:
 * var publisherEvent = PublisherEvent({})
 * Event types:
 * 'access-accepted' - indicates that the user has accepted to share his camera and microphone
 */
const PublisherEvent = (spec) => {
  const that = LicodeEvent(spec);

  return that;
};




/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Enum = __webpack_require__(5);

const DirectionWay = Enum('SEND', 'RECV');

DirectionWay.byValue = direction => DirectionWay[direction.toUpperCase()];

DirectionWay.toString = (direction) => {
  switch (direction) {
    case DirectionWay.SEND:
      return 'send';
    case DirectionWay.RECV:
      return 'recv';
    default:
      return 'unknown';
  }
};

DirectionWay.reverse = (direction) => {
  switch (direction) {
    case DirectionWay.SEND:
      return DirectionWay.RECV;
    case DirectionWay.RECV:
      return DirectionWay.SEND;
    default:
      return DirectionWay.SEND;
  }
};

module.exports = DirectionWay;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Events__ = __webpack_require__(1);
/*
 * View class represents a HTML component
 * Every view is an EventDispatcher.
 */



const View = () => {
  const that = Object(__WEBPACK_IMPORTED_MODULE_0__Events__["b" /* EventDispatcher */])({});

  // Variables

  // URL where it will look for icons and assets
  that.url = '';
  return that;
};

/* harmony default export */ __webpack_exports__["a"] = (View);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const Enum = __webpack_require__(5);

const Setup = Enum('ACTIVE', 'PASSIVE', 'ACTPASS', 'INACTIVE');

Setup.byValue = setup => Setup[setup.toUpperCase()];

Setup.toString = (setup) => {
  switch (setup) {
    case Setup.ACTIVE:
      return 'active';
    case Setup.PASSIVE:
      return 'passive';
    case Setup.ACTPASS:
      return 'actpass';
    case Setup.INACTIVE:
      return 'inactive';
    default:
      return null;
  }
};

Setup.reverse = (setup) => {
  switch (setup) {
    case Setup.ACTIVE:
      return Setup.PASSIVE;
    case Setup.PASSIVE:
      return Setup.ACTIVE;
    case Setup.ACTPASS:
      return Setup.PASSIVE;
    case Setup.INACTIVE:
      return Setup.INACTIVE;
    default:
      return Setup.ACTIVE;
  }
};

module.exports = Setup;


/***/ }),
/* 5 */
/***/ (function(module, exports) {


function Enum(...args) {
  if (!(this instanceof Enum)) {
    return new (Function.prototype.bind.apply(Enum,
      [null].concat(Array.prototype.slice.call(args))))();
  }
  Array.from(args).forEach((arg) => {
    this[arg] = Symbol.for(`LICODE_SEMANTIC_SDP_${arg}`);
  });
}

module.exports = Enum;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const Enum = __webpack_require__(5);

const Direction = Enum('SENDRECV', 'SENDONLY', 'RECVONLY', 'INACTIVE');

Direction.byValue = direction => Direction[direction.toUpperCase()];

/**
* Get Direction name
* @memberOf Direction
* @param {Direction} direction
* @returns {String}
*/
Direction.toString = (direction) => {
  switch (direction) {
    case Direction.SENDRECV:
      return 'sendrecv';
    case Direction.SENDONLY:
      return 'sendonly';
    case Direction.RECVONLY:
      return 'recvonly';
    case Direction.INACTIVE:
      return 'inactive';
    default:
      return 'unknown';
  }
};

Direction.reverse = (direction) => {
  switch (direction) {
    case Direction.SENDRECV:
      return Direction.SENDRECV;
    case Direction.SENDONLY:
      return Direction.RECVONLY;
    case Direction.RECVONLY:
      return Direction.SENDONLY;
    case Direction.INACTIVE:
      return Direction.INACTIVE;
    default:
      return Direction.SENDRECV;
  }
};

module.exports = Direction;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* global unescape */

const ErizoMap = () => {
  const that = {};
  let values = {};

  that.add = (id, value) => {
    values[id] = value;
  };

  that.get = id => values[id];

  that.has = id => values[id] !== undefined;

  that.size = () => Object.keys(values).length;

  that.forEach = (func) => {
    const keys = Object.keys(values);
    for (let index = 0; index < keys.length; index += 1) {
      const key = keys[index];
      const value = values[key];
      func(value, key);
    }
  };

  that.keys = () => Object.keys(values);

  that.remove = (id) => {
    delete values[id];
  };

  that.clear = () => {
    values = {};
  };

  return that;
};

/* harmony default export */ __webpack_exports__["a"] = (ErizoMap);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Logger__ = __webpack_require__(0);
/* global navigator, window, chrome */


const getBrowser = () => {
  let browser = 'fake';
  return browser;

  if ((typeof module !== 'undefined' && module.exports)) {
    browser = 'fake';
  } else if (window.navigator.userAgent.match('Firefox') !== null) {
    // Firefox
    browser = 'mozilla';
  } else if (window.navigator.userAgent.match('Chrome') !== null) {
    browser = 'chrome-stable';
    if (window.navigator.userAgent.match('Electron') !== null) {
      browser = 'electron';
    }
  } else if (window.navigator.userAgent.match('Safari') !== null) {
    browser = 'safari';
  } else if (window.navigator.userAgent.match('AppleWebKit') !== null) {
    browser = 'safari';
  }
  return browser;
};

const GetUserMedia = (config, callback = () => {}, error = () => {}) => {
  let screenConfig;

  const getUserMedia = (userMediaConfig, cb, errorCb) => {
    navigator.mediaDevices.getUserMedia(userMediaConfig).then(cb).catch(errorCb);
  };

  const configureScreensharing = () => {
    __WEBPACK_IMPORTED_MODULE_0__Logger__["a" /* default */].debug('Screen access requested');
    switch (getBrowser()) {
      case 'electron' :
        __WEBPACK_IMPORTED_MODULE_0__Logger__["a" /* default */].debug('Screen sharing in Electron');
        screenConfig = {};
        screenConfig.video = config.video || {};
        screenConfig.video.mandatory = config.video.mandatory || {};
        screenConfig.video.mandatory.chromeMediaSource = 'desktop';
        screenConfig.video.mandatory.chromeMediaSourceId = config.desktopStreamId;
        getUserMedia(screenConfig, callback, error);
        break;
      case 'mozilla':
        __WEBPACK_IMPORTED_MODULE_0__Logger__["a" /* default */].debug('Screen sharing in Firefox');
        screenConfig = {};
        if (config.video !== undefined) {
          screenConfig.video = config.video;
          if (!screenConfig.video.mediaSource) {
            screenConfig.video.mediaSource = 'window' || 'screen';
          }
        } else {
          screenConfig = {
            audio: config.audio,
            video: { mediaSource: 'window' || 'screen' },
          };
        }
        getUserMedia(screenConfig, callback, error);
        break;

      case 'chrome-stable':
        __WEBPACK_IMPORTED_MODULE_0__Logger__["a" /* default */].debug('Screen sharing in Chrome');
        screenConfig = {};
        if (config.desktopStreamId) {
          screenConfig.video = config.video || { mandatory: {} };
          screenConfig.video.mandatory = screenConfig.video.mandatory || {};
          screenConfig.video.mandatory.chromeMediaSource = 'desktop';
          screenConfig.video.mandatory.chromeMediaSourceId = config.desktopStreamId;
          getUserMedia(screenConfig, callback, error);
        } else {
          // Default extensionId - this extension is only usable in our server,
          // please make your own extension based on the code in
          // erizo_controller/erizoClient/extras/chrome-extension
          let extensionId = 'okeephmleflklcdebijnponpabbmmgeo';
          if (config.extensionId) {
            __WEBPACK_IMPORTED_MODULE_0__Logger__["a" /* default */].debug(`extensionId supplied, using ${config.extensionId}`);
            extensionId = config.extensionId;
          }
          __WEBPACK_IMPORTED_MODULE_0__Logger__["a" /* default */].debug('Screen access on chrome stable, looking for extension');
          try {
            chrome.runtime.sendMessage(extensionId, { getStream: true },
              (response) => {
                if (response === undefined) {
                  __WEBPACK_IMPORTED_MODULE_0__Logger__["a" /* default */].error('Access to screen denied');
                  const theError = { code: 'Access to screen denied' };
                  error(theError);
                  return;
                }
                const theId = response.streamId;
                if (config.video.mandatory !== undefined) {
                  screenConfig.video = config.video || { mandatory: {} };
                  screenConfig.video.mandatory.chromeMediaSource = 'desktop';
                  screenConfig.video.mandatory.chromeMediaSourceId = theId;
                } else {
                  screenConfig = { video: { mandatory: { chromeMediaSource: 'desktop',
                    chromeMediaSourceId: theId } } };
                }
                getUserMedia(screenConfig, callback, error);
              });
          } catch (e) {
            __WEBPACK_IMPORTED_MODULE_0__Logger__["a" /* default */].debug('Screensharing plugin is not accessible ');
            const theError = { code: 'no_plugin_present' };
            error(theError);
          }
        }
        break;
      default:
        __WEBPACK_IMPORTED_MODULE_0__Logger__["a" /* default */].error('This browser does not support ScreenSharing');
    }
  };

  if (config.screen) {
    configureScreensharing();
  } else if (typeof module !== 'undefined' && module.exports) {
    __WEBPACK_IMPORTED_MODULE_0__Logger__["a" /* default */].error('Video/audio streams not supported in erizofc yet');
  } else {
    __WEBPACK_IMPORTED_MODULE_0__Logger__["a" /* default */].debug('Calling getUserMedia with config', config);
    getUserMedia(config, callback, error);
  }
};


const ConnectionHelpers = { GetUserMedia, getBrowser };

/* harmony default export */ __webpack_exports__["a"] = (ConnectionHelpers);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(38)(module)))

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_semanticSdp_SemanticSdp__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_semanticSdp_SemanticSdp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_semanticSdp_SemanticSdp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_SdpHelpers__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_Logger__ = __webpack_require__(0);
/* global RTCSessionDescription, RTCIceCandidate, RTCPeerConnection */
// eslint-disable-next-line





const BaseStack = (specInput) => {
  const that = {};
  const specBase = specInput;
  const offerQueue = [];
  let localDesc;
  let remoteDesc;
  let localSdp;
  let remoteSdp;
  let processOffer;
  let isNegotiating = false;
  let latestSessionVersion = -1;

  __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].info('Starting Base stack', specBase);

  that.pcConfig = {
    iceServers: [],
  };

  that.con = {};
  if (specBase.iceServers !== undefined) {
    that.pcConfig.iceServers = specBase.iceServers;
  }
  if (specBase.forceTurn === true) {
    that.pcConfig.iceTransportPolicy = 'relay';
  }
  that.audio = specBase.audio;
  that.video = specBase.video;
  if (that.audio === undefined) {
    that.audio = true;
  }
  if (that.video === undefined) {
    that.video = true;
  }
  specBase.remoteCandidates = [];
  specBase.localCandidates = [];
  specBase.remoteDescriptionSet = false;

  that.mediaConstraints = {
    offerToReceiveVideo: (that.video !== undefined && that.video !== false),
    offerToReceiveAudio: (that.audio !== undefined && that.audio !== false),
  };

  that.peerConnection = new RTCPeerConnection(that.pcConfig, that.con);

  // Aux functions

  const errorCallback = (where, errorcb, message) => {
    __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].error('message:', message, 'in baseStack at', where);
    if (errorcb !== undefined) {
      errorcb('error');
    }
  };

  const successCallback = (message) => {
    __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].info('Success in BaseStack', message);
  };

  const onIceCandidate = (event) => {
    let candidateObject = {};
    const candidate = event.candidate;
    if (!candidate) {
      __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].info('Gathered all candidates. Sending END candidate');
      candidateObject = {
        sdpMLineIndex: -1,
        sdpMid: 'end',
        candidate: 'end',
      };
    } else {
      candidateObject = {
        sdpMLineIndex: candidate.sdpMLineIndex,
        sdpMid: candidate.sdpMid,
        candidate: candidate.candidate,
      };
      if (!candidateObject.candidate.match(/a=/)) {
        candidateObject.candidate = `a=${candidateObject.candidate}`;
      }
    }

    if (specBase.remoteDescriptionSet) {
      specBase.callback({ type: 'candidate', candidate: candidateObject });
    } else {
      specBase.localCandidates.push(candidateObject);
      __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].info('Storing candidate: ', specBase.localCandidates.length, candidateObject);
    }
  };

  const checkOfferQueue = () => {
    if (!isNegotiating && offerQueue.length > 0) {
      const args = offerQueue.pop();
      if (args[0] === 'local') {
        that.createOffer(args[1], args[2], args[3]);
      } else {
        processOffer(args[1]);
      }
    }
  };

  const setLocalDescForOffer = (isSubscribe, streamId, sessionDescription) => {
    localDesc = sessionDescription;
    if (!isSubscribe) {
      localDesc.sdp = that.enableSimulcast(localDesc.sdp);
    }
    localSdp = __WEBPACK_IMPORTED_MODULE_0__common_semanticSdp_SemanticSdp___default.a.SDPInfo.processString(localDesc.sdp);
    __WEBPACK_IMPORTED_MODULE_1__utils_SdpHelpers__["a" /* default */].setMaxBW(localSdp, specBase);
    localDesc.sdp = localSdp.toString();
    that.localSdp = localSdp;

    specBase.callback({
      type: localDesc.type,
      sdp: localDesc.sdp,
      config: { maxVideoBW: specBase.maxVideoBW },
    }, streamId);
  };

  const setLocalDescForAnswer = (sessionDescription) => {
    localDesc = sessionDescription;
    localSdp = __WEBPACK_IMPORTED_MODULE_0__common_semanticSdp_SemanticSdp___default.a.SDPInfo.processString(localDesc.sdp);
    __WEBPACK_IMPORTED_MODULE_1__utils_SdpHelpers__["a" /* default */].setMaxBW(localSdp, specBase);
    localDesc.sdp = localSdp.toString();
    that.localSdp = localSdp;
    specBase.callback({
      type: localDesc.type,
      sdp: localDesc.sdp,
      config: { maxVideoBW: specBase.maxVideoBW },
    });
    __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].info('Setting local description', localDesc);
    that.peerConnection.setLocalDescription(localDesc).then(() => {
      isNegotiating = false;
      checkOfferQueue();
      successCallback();
    }).catch(errorCallback);
  };

  processOffer = (message) => {
    const msg = message;
    if (isNegotiating) {
      offerQueue.push(['remote', message]);
      return;
    }
    isNegotiating = true;
    remoteSdp = __WEBPACK_IMPORTED_MODULE_0__common_semanticSdp_SemanticSdp___default.a.SDPInfo.processString(msg.sdp);
    __WEBPACK_IMPORTED_MODULE_1__utils_SdpHelpers__["a" /* default */].setMaxBW(remoteSdp, specBase);
    msg.sdp = remoteSdp.toString();
    that.remoteSdp = remoteSdp;
    that.peerConnection.setRemoteDescription(msg).then(() => {
      that.peerConnection.createAnswer(that.mediaConstraints)
      .then(setLocalDescForAnswer)
      .catch(errorCallback.bind(null, 'createAnswer', undefined));
      specBase.remoteDescriptionSet = true;
    }).catch(errorCallback.bind(null, 'process Offer', undefined));
  };

  const processAnswer = (message) => {
    const msg = message;

    remoteSdp = __WEBPACK_IMPORTED_MODULE_0__common_semanticSdp_SemanticSdp___default.a.SDPInfo.processString(msg.sdp);
    const sessionVersion = remoteSdp && remoteSdp.origin && remoteSdp.origin.sessionVersion;
    if (latestSessionVersion >= sessionVersion) {
      return;
    }
    __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].info('Set remote and local description');
    latestSessionVersion = sessionVersion;

    __WEBPACK_IMPORTED_MODULE_1__utils_SdpHelpers__["a" /* default */].setMaxBW(remoteSdp, specBase);
    that.setStartVideoBW(remoteSdp);
    that.setHardMinVideoBW(remoteSdp);

    msg.sdp = remoteSdp.toString();
    __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].debug('Remote Description', msg.sdp);
    __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].debug('Local Description', localDesc.sdp);
    that.remoteSdp = remoteSdp;

    remoteDesc = msg;
    that.peerConnection.setLocalDescription(localDesc).then(() => {
      that.peerConnection.setRemoteDescription(new RTCSessionDescription(msg)).then(() => {
        specBase.remoteDescriptionSet = true;
        __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].info('Candidates to be added: ', specBase.remoteCandidates.length,
                      specBase.remoteCandidates);
        while (specBase.remoteCandidates.length > 0) {
          // IMPORTANT: preserve ordering of candidates
          that.peerConnection.addIceCandidate(specBase.remoteCandidates.shift());
        }
        __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].info('Local candidates to send:', specBase.localCandidates.length);
        while (specBase.localCandidates.length > 0) {
          // IMPORTANT: preserve ordering of candidates
          specBase.callback({ type: 'candidate', candidate: specBase.localCandidates.shift() });
        }
        isNegotiating = false;
        checkOfferQueue();
      }).catch(errorCallback.bind(null, 'processAnswer', undefined));
    }).catch(errorCallback.bind(null, 'processAnswer', undefined));
  };

  const processNewCandidate = (message) => {
    const msg = message;
    try {
      let obj;
      if (typeof (msg.candidate) === 'object') {
        obj = msg.candidate;
      } else {
        obj = JSON.parse(msg.candidate);
      }
      if (obj.candidate === 'end') {
        // ignore the end candidate for chrome
        return;
      }
      obj.candidate = obj.candidate.replace(/a=/g, '');
      obj.sdpMLineIndex = parseInt(obj.sdpMLineIndex, 10);
      const candidate = new RTCIceCandidate(obj);
      if (specBase.remoteDescriptionSet) {
        that.peerConnection.addIceCandidate(candidate);
      } else {
        specBase.remoteCandidates.push(candidate);
      }
    } catch (e) {
      __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].error('Error parsing candidate', msg.candidate);
    }
  };

  // Peerconnection events

  that.peerConnection.onicecandidate = onIceCandidate;
  // public functions

  that.setStartVideoBW = (sdpInput) => {
    __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].error('startVideoBW not implemented for this browser');
    return sdpInput;
  };

  that.setHardMinVideoBW = (sdpInput) => {
    __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].error('hardMinVideoBw not implemented for this browser');
    return sdpInput;
  };

  that.enableSimulcast = (sdpInput) => {
    __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].error('Simulcast not implemented');
    return sdpInput;
  };

  that.close = () => {
    that.state = 'closed';
    that.peerConnection.close();
  };

  that.setSimulcast = (enable) => {
    that.simulcast = enable;
  };

  that.setVideo = (video) => {
    that.video = video;
  };

  that.setAudio = (audio) => {
    that.audio = audio;
  };

  that.updateSpec = (configInput, streamId, callback = () => {}) => {
    const config = configInput;
    const shouldApplyMaxVideoBWToSdp = specBase.p2p && config.maxVideoBW;
    const shouldSendMaxVideoBWInOptions = !specBase.p2p && config.maxVideoBW;
    if (shouldApplyMaxVideoBWToSdp || config.maxAudioBW) {
      if (config.maxVideoBW) {
        __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].debug('Maxvideo Requested:', config.maxVideoBW,
                                'limit:', specBase.limitMaxVideoBW);
        if (config.maxVideoBW > specBase.limitMaxVideoBW) {
          config.maxVideoBW = specBase.limitMaxVideoBW;
        }
        specBase.maxVideoBW = config.maxVideoBW;
        __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].debug('Result', specBase.maxVideoBW);
      }
      if (config.maxAudioBW) {
        if (config.maxAudioBW > specBase.limitMaxAudioBW) {
          config.maxAudioBW = specBase.limitMaxAudioBW;
        }
        specBase.maxAudioBW = config.maxAudioBW;
      }

      localSdp = __WEBPACK_IMPORTED_MODULE_0__common_semanticSdp_SemanticSdp___default.a.SDPInfo.processString(localDesc.sdp);
      __WEBPACK_IMPORTED_MODULE_1__utils_SdpHelpers__["a" /* default */].setMaxBW(localSdp, specBase);
      localDesc.sdp = localSdp.toString();
      that.localSdp = localSdp;

      if (config.Sdp || config.maxAudioBW) {
        __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].debug('Updating with SDP renegotiation', specBase.maxVideoBW, specBase.maxAudioBW);
        that.peerConnection.setLocalDescription(localDesc)
          .then(() => {
            remoteSdp = __WEBPACK_IMPORTED_MODULE_0__common_semanticSdp_SemanticSdp___default.a.SDPInfo.processString(remoteDesc.sdp);
            __WEBPACK_IMPORTED_MODULE_1__utils_SdpHelpers__["a" /* default */].setMaxBW(remoteSdp, specBase);
            remoteDesc.sdp = remoteSdp.toString();
            that.remoteSdp = remoteSdp;
            return that.peerConnection.setRemoteDescription(new RTCSessionDescription(remoteDesc));
          }).then(() => {
            specBase.remoteDescriptionSet = true;
            specBase.callback({ type: 'updatestream', sdp: localDesc.sdp }, streamId);
          }).catch(errorCallback.bind(null, 'updateSpec', callback));
      } else {
        __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].debug('Updating without SDP renegotiation, ' +
                     'newVideoBW:', specBase.maxVideoBW,
                     'newAudioBW:', specBase.maxAudioBW);
        specBase.callback({ type: 'updatestream', sdp: localDesc.sdp }, streamId);
      }
    }
    if (shouldSendMaxVideoBWInOptions ||
        config.minVideoBW ||
        (config.slideShowMode !== undefined) ||
        (config.muteStream !== undefined) ||
        (config.qualityLayer !== undefined) ||
        (config.slideShowBelowLayer !== undefined) ||
        (config.video !== undefined)) {
      __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].debug('MaxVideoBW Changed to ', config.maxVideoBW);
      __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].debug('MinVideo Changed to ', config.minVideoBW);
      __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].debug('SlideShowMode Changed to ', config.slideShowMode);
      __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].debug('muteStream changed to ', config.muteStream);
      __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].debug('Video Constraints', config.video);
      __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].debug('Will activate slideshow when below layer', config.slideShowBelowLayer);
      specBase.callback({ type: 'updatestream', config }, streamId);
    }
  };

  that.createOffer = (isSubscribe = false, forceOfferToReceive = false, streamId = '') => {
    if (!isSubscribe && !forceOfferToReceive) {
      that.mediaConstraints = {
        offerToReceiveVideo: false,
        offerToReceiveAudio: false,
      };
    }
    if (isNegotiating) {
      offerQueue.push(['local', isSubscribe, forceOfferToReceive, streamId]);
      return;
    }
    isNegotiating = true;
    __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].debug('Creating offer', that.mediaConstraints, streamId);
    that.peerConnection.createOffer(that.mediaConstraints)
    .then(setLocalDescForOffer.bind(null, isSubscribe, streamId))
    .catch(errorCallback.bind(null, 'Create Offer', undefined));
  };

  that.addStream = (stream) => {
    that.peerConnection.addStream(stream);
  };

  that.removeStream = (stream) => {
    that.peerConnection.removeStream(stream);
  };

  that.processSignalingMessage = (msgInput) => {
    if (msgInput.type === 'offer') {
      processOffer(msgInput);
    } else if (msgInput.type === 'answer') {
      processAnswer(msgInput);
    } else if (msgInput.type === 'candidate') {
      processNewCandidate(msgInput);
    }
  };

  return that;
};

/* harmony default export */ __webpack_exports__["a"] = (BaseStack);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var grammar = module.exports = {
  v: [{
    name: 'version',
    reg: /^(\d*)$/
  }],
  o: [{ //o=- 20518 0 IN IP4 203.0.113.1
    // NB: sessionId will be a String in most cases because it is huge
    name: 'origin',
    reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
    names: ['username', 'sessionId', 'sessionVersion', 'netType', 'ipVer', 'address'],
    format: '%s %s %d %s IP%d %s'
  }],
  // default parsing of these only (though some of these feel outdated)
  s: [{ name: 'name' }],
  i: [{ name: 'description' }],
  u: [{ name: 'uri' }],
  e: [{ name: 'email' }],
  p: [{ name: 'phone' }],
  z: [{ name: 'timezones' }], // TODO: this one can actually be parsed properly..
  r: [{ name: 'repeats' }],   // TODO: this one can also be parsed properly
  //k: [{}], // outdated thing ignored
  t: [{ //t=0 0
    name: 'timing',
    reg: /^(\d*) (\d*)/,
    names: ['start', 'stop'],
    format: '%d %d'
  }],
  c: [{ //c=IN IP4 10.47.197.26
    name: 'connection',
    reg: /^IN IP(\d) (\S*)/,
    names: ['version', 'ip'],
    format: 'IN IP%d %s'
  }],
  b: [{ //b=AS:4000
    push: 'bandwidth',
    reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
    names: ['type', 'limit'],
    format: '%s:%s'
  }],
  m: [{ //m=video 51744 RTP/AVP 126 97 98 34 31
    // NB: special - pushes to session
    // TODO: rtp/fmtp should be filtered by the payloads found here?
    reg: /^(\w*) (\d*) ([\w\/]*)(?: (.*))?/,
    names: ['type', 'port', 'protocol', 'payloads'],
    format: '%s %d %s %s'
  }],
  a: [
    { //a=rtpmap:110 opus/48000/2
      push: 'rtp',
      reg: /^rtpmap:(\d*) ([\w\-\.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
      names: ['payload', 'codec', 'rate', 'encoding'],
      format: function (o) {
        return (o.encoding) ?
          'rtpmap:%d %s/%s/%s':
          o.rate ?
          'rtpmap:%d %s/%s':
          'rtpmap:%d %s';
      }
    },
    { //a=fmtp:108 profile-level-id=24;object=23;bitrate=64000
      //a=fmtp:111 minptime=10; useinbandfec=1
      push: 'fmtp',
      reg: /^fmtp:(\d*) ([\S| ]*)/,
      names: ['payload', 'config'],
      format: 'fmtp:%d %s'
    },
    { //a=control:streamid=0
      name: 'control',
      reg: /^control:(.*)/,
      format: 'control:%s'
    },
    { //a=rtcp:65179 IN IP4 193.84.77.194
      name: 'rtcp',
      reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
      names: ['port', 'netType', 'ipVer', 'address'],
      format: function (o) {
        return (o.address != null) ?
          'rtcp:%d %s IP%d %s':
          'rtcp:%d';
      }
    },
    { //a=rtcp-fb:98 trr-int 100
      push: 'rtcpFbTrrInt',
      reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
      names: ['payload', 'value'],
      format: 'rtcp-fb:%d trr-int %d'
    },
    { //a=rtcp-fb:98 nack rpsi
      push: 'rtcpFb',
      reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
      names: ['payload', 'type', 'subtype'],
      format: function (o) {
        return (o.subtype != null) ?
          'rtcp-fb:%s %s %s':
          'rtcp-fb:%s %s';
      }
    },
    { //a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
      //a=extmap:1/recvonly URI-gps-string
      push: 'ext',
      reg: /^extmap:(\d+)(?:\/(\w+))? (\S*)(?: (\S*))?/,
      names: ['value', 'direction', 'uri', 'config'],
      format: function (o) {
        return 'extmap:%d' + (o.direction ? '/%s' : '%v') + ' %s' + (o.config ? ' %s' : '');
      }
    },
    { //a=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:PS1uQCVeeCFCanVmcjkpPywjNWhcYD0mXXtxaVBR|2^20|1:32
      push: 'crypto',
      reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
      names: ['id', 'suite', 'config', 'sessionConfig'],
      format: function (o) {
        return (o.sessionConfig != null) ?
          'crypto:%d %s %s %s':
          'crypto:%d %s %s';
      }
    },
    { //a=setup:actpass
      name: 'setup',
      reg: /^setup:(\w*)/,
      format: 'setup:%s'
    },
    { //a=mid:1
      name: 'mid',
      reg: /^mid:([^\s]*)/,
      format: 'mid:%s'
    },
    { //a=msid:0c8b064d-d807-43b4-b434-f92a889d8587 98178685-d409-46e0-8e16-7ef0db0db64a
      name: 'msid',
      reg: /^msid:(.*)/,
      format: 'msid:%s'
    },
    { //a=ptime:20
      name: 'ptime',
      reg: /^ptime:(\d*)/,
      format: 'ptime:%d'
    },
    { //a=maxptime:60
      name: 'maxptime',
      reg: /^maxptime:(\d*)/,
      format: 'maxptime:%d'
    },
    { //a=sendrecv
      name: 'direction',
      reg: /^(sendrecv|recvonly|sendonly|inactive)/
    },
    { //a=ice-lite
      name: 'icelite',
      reg: /^(ice-lite)/
    },
    { //a=ice-ufrag:F7gI
      name: 'iceUfrag',
      reg: /^ice-ufrag:(\S*)/,
      format: 'ice-ufrag:%s'
    },
    { //a=ice-pwd:x9cml/YzichV2+XlhiMu8g
      name: 'icePwd',
      reg: /^ice-pwd:(\S*)/,
      format: 'ice-pwd:%s'
    },
    { //a=fingerprint:SHA-1 00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33
      name: 'fingerprint',
      reg: /^fingerprint:(\S*) (\S*)/,
      names: ['type', 'hash'],
      format: 'fingerprint:%s %s'
    },
    { //a=candidate:0 1 UDP 2113667327 203.0.113.1 54400 typ host
      //a=candidate:1162875081 1 udp 2113937151 192.168.34.75 60017 typ host generation 0 network-id 3 network-cost 10
      //a=candidate:3289912957 2 udp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 generation 0 network-id 3 network-cost 10
      //a=candidate:229815620 1 tcp 1518280447 192.168.150.19 60017 typ host tcptype active generation 0 network-id 3 network-cost 10
      //a=candidate:3289912957 2 tcp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 tcptype passive generation 0 network-id 3 network-cost 10
      push:'candidates',
      reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
      names: ['foundation', 'component', 'transport', 'priority', 'ip', 'port', 'type', 'raddr', 'rport', 'tcptype', 'generation', 'network-id', 'network-cost'],
      format: function (o) {
        var str = 'candidate:%s %d %s %d %s %d typ %s';

        str += (o.raddr != null) ? ' raddr %s rport %d' : '%v%v';

        // NB: candidate has three optional chunks, so %void middles one if it's missing
        str += (o.tcptype != null) ? ' tcptype %s' : '%v';

        if (o.generation != null) {
          str += ' generation %d';
        }

        str += (o['network-id'] != null) ? ' network-id %d' : '%v';
        str += (o['network-cost'] != null) ? ' network-cost %d' : '%v';
        return str;
      }
    },
    { //a=end-of-candidates (keep after the candidates line for readability)
      name: 'endOfCandidates',
      reg: /^(end-of-candidates)/
    },
    { //a=remote-candidates:1 203.0.113.1 54400 2 203.0.113.1 54401 ...
      name: 'remoteCandidates',
      reg: /^remote-candidates:(.*)/,
      format: 'remote-candidates:%s'
    },
    { //a=ice-options:google-ice
      name: 'iceOptions',
      reg: /^ice-options:(\S*)/,
      format: 'ice-options:%s'
    },
    { //a=ssrc:2566107569 cname:t9YU8M1UxTF8Y1A1
      push: 'ssrcs',
      reg: /^ssrc:(\d*) ([\w_]*)(?::(.*))?/,
      names: ['id', 'attribute', 'value'],
      format: function (o) {
        var str = 'ssrc:%d';
        if (o.attribute != null) {
          str += ' %s';
          if (o.value != null) {
            str += ':%s';
          }
        }
        return str;
      }
    },
    { //a=ssrc-group:FEC 1 2
      //a=ssrc-group:FEC-FR 3004364195 1080772241
      push: 'ssrcGroups',
      // token-char = %x21 / %x23-27 / %x2A-2B / %x2D-2E / %x30-39 / %x41-5A / %x5E-7E
      reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
      names: ['semantics', 'ssrcs'],
      format: 'ssrc-group:%s %s'
    },
    { //a=msid-semantic: WMS Jvlam5X3SX1OP6pn20zWogvaKJz5Hjf9OnlV
      name: 'msidSemantic',
      reg: /^msid-semantic:\s?(\w*) (\S*)/,
      names: ['semantic', 'token'],
      format: 'msid-semantic: %s %s' // space after ':' is not accidental
    },
    { //a=group:BUNDLE audio video
      push: 'groups',
      reg: /^group:(\w*) (.*)/,
      names: ['type', 'mids'],
      format: 'group:%s %s'
    },
    { //a=rtcp-mux
      name: 'rtcpMux',
      reg: /^(rtcp-mux)/
    },
    { //a=rtcp-rsize
      name: 'rtcpRsize',
      reg: /^(rtcp-rsize)/
    },
    { //a=sctpmap:5000 webrtc-datachannel 1024
      name: 'sctpmap',
      reg: /^sctpmap:([\w_\/]*) (\S*)(?: (\S*))?/,
      names: ['sctpmapNumber', 'app', 'maxMessageSize'],
      format: function (o) {
        return (o.maxMessageSize != null) ?
          'sctpmap:%s %s %s' :
          'sctpmap:%s %s';
      }
    },
    { //a=x-google-flag:conference
      name: 'xGoogleFlag',
      reg: /^x-google-flag:([^\s]*)/,
      format: 'x-google-flag:%s'
    },
    { //a=rid:1 send max-width=1280;max-height=720;max-fps=30;depend=0
      push: 'rids',
      reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
      names: ['id', 'direction', 'params'],
      format: function (o) {
        return (o.params) ? 'rid:%s %s %s' : 'rid:%s %s';
      }
    },
    { //a=imageattr:97 send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320] recv [x=330,y=250]
      //a=imageattr:* send [x=800,y=640] recv *
      //a=imageattr:100 recv [x=320,y=240]
      push: 'imageattrs',
      reg: new RegExp(
        //a=imageattr:97
        '^imageattr:(\\d+|\\*)' +
        //send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320]
        '[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)' +
        //recv [x=330,y=250]
        '(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?'
      ),
      names: ['pt', 'dir1', 'attrs1', 'dir2', 'attrs2'],
      format: function (o) {
        return 'imageattr:%s %s %s' + (o.dir2 ? ' %s %s' : '');
      }
    },
    { //a=simulcast:send 1,2,3;~4,~5 recv 6;~7,~8
      //a=simulcast:recv 1;4,5 send 6;7
      name: 'simulcast',
      reg: new RegExp(
        //a=simulcast:
        '^simulcast:' +
        //send 1,2,3;~4,~5
        '(send|recv) ([a-zA-Z0-9\\-_~;,]+)' +
        //space + recv 6;~7,~8
        '(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?' +
        //end
        '$'
      ),
      names: ['dir1', 'list1', 'dir2', 'list2'],
      format: function (o) {
        return 'simulcast:%s %s' + (o.dir2 ? ' %s %s' : '');
      }
    },
    { //Old simulcast draft 03 (implemented by Firefox)
      //  https://tools.ietf.org/html/draft-ietf-mmusic-sdp-simulcast-03
      //a=simulcast: recv pt=97;98 send pt=97
      //a=simulcast: send rid=5;6;7 paused=6,7
      name: 'simulcast_03',
      reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
      names: ['value'],
      format: 'simulcast: %s'
    },
    {
      //a=framerate:25
      //a=framerate:29.97
      name: 'framerate',
      reg: /^framerate:(\d+(?:$|\.\d+))/,
      format: 'framerate:%s'
    },
    { // any a= that we don't understand is kepts verbatim on media.invalid
      push: 'invalid',
      names: ['value']
    }
  ]
};

// set sensible defaults to avoid polluting the grammar with boring details
Object.keys(grammar).forEach(function (key) {
  var objs = grammar[key];
  objs.forEach(function (obj) {
    if (!obj.reg) {
      obj.reg = /(.*)/;
    }
    if (!obj.format) {
      obj.format = '%s';
    }
  });
});


/***/ }),
/* 11 */
/***/ (function(module, exports) {

class CandidateInfo {
  constructor(foundation, componentId, transport, priority, address, port,
    type, generation, relAddr, relPort) {
    this.foundation = foundation;
    this.componentId = componentId;
    this.transport = transport;
    this.priority = priority;
    this.address = address;
    this.port = port;
    this.type = type;
    this.generation = generation;
    this.relAddr = relAddr;
    this.relPort = relPort;
  }

  clone() {
    return new CandidateInfo(this.foundation, this.componentId, this.transport, this.priority,
              this.address, this.port, this.type, this.generation, this.relAddr, this.relPort);
  }

  plain() {
    const plain = {
      foundation: this.foundation,
      componentId: this.componentId,
      transport: this.transport,
      priority: this.priority,
      address: this.address,
      port: this.port,
      type: this.type,
      generation: this.generation,
    };
    if (this.relAddr) plain.relAddr = this.relAddr;
    if (this.relPort) plain.relPort = this.relPort;
    return plain;
  }

  getFoundation() {
    return this.foundation;
  }

  getComponentId() {
    return this.componentId;
  }

  getTransport() {
    return this.transport;
  }

  getPriority() {
    return this.priority;
  }

  getAddress() {
    return this.address;
  }

  getPort() {
    return this.port;
  }

  getType() {
    return this.type;
  }

  getGeneration() {
    return this.generation;
  }

  getRelAddr() {
    return this.relAddr;
  }

  getRelPort() {
    return this.relPort;
  }

}

module.exports = CandidateInfo;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

class CodecInfo {

  constructor(codec, type, rate, encoding, params, feedback) {
    this.codec = codec;
    this.type = type;
    this.rate = rate;
    this.encoding = encoding;
    this.params = params || {};
    this.feedback = feedback || [];
  }

  clone() {
    const cloned = new CodecInfo(this.codec, this.type, this.rate, this.encoding,
      this.params, this.feedback);
    if (this.rtx) {
      cloned.setRTX(this.rtx);
    }
    return cloned;
  }


  plain() {
    return {
      codec: this.codec,
      type: this.type,
      rate: this.rate,
      encoding: this.encoding,
      params: this.params,
      feedback: this.feedback,
    };
  }

  setRTX(rtx) {
    this.rtx = rtx;
  }

  getType() {
    return this.type;
  }

  setType(type) {
    this.type = type;
  }

  getCodec() {
    return this.codec;
  }

  getParams() {
    return this.params;
  }

  setParam(paramName, value) {
    this.params[paramName] = value;
  }

  hasRTX() {
    return this.rtx;
  }

  getRTX() {
    return this.rtx;
  }

  getRate() {
    return this.rate;
  }

  getEncoding() {
    return this.encoding;
  }

  getFeedback() {
    return this.feedback;
  }
}

CodecInfo.mapFromNames = (names, rtx) => {
  const codecs = new Map();

  let dyn = 96;
  names.forEach((nameWithUpperCases) => {
    let pt;
    const name = nameWithUpperCases.toLowerCase();
    if (name === 'pcmu') pt = 0;
    else if (name === 'pcma') pt = 8;
    else {
      dyn += 1;
      pt = dyn;
    }
    const codec = new CodecInfo(name, pt);
    if (rtx && name !== 'ulpfec' && name !== 'flexfec-03' && name !== 'red') {
      dyn += 1;
      codec.setRTX(dyn);
    }
    codecs.set(codec.getCodec().toLowerCase(), codec);
  });
  return codecs;
};

module.exports = CodecInfo;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

const Setup = __webpack_require__(4);

class DTLSInfo {
  constructor(setup, hash, fingerprint) {
    this.setup = setup;
    this.hash = hash;
    this.fingerprint = fingerprint;
  }

  clone() {
    return new DTLSInfo(this.setup, this.hash, this.fingerprint);
  }

  plain() {
    return {
      setup: Setup.toString(this.setup),
      hash: this.hash,
      fingerprint: this.fingerprint,
    };
  }

  getFingerprint() {
    return this.fingerprint;
  }

  getHash() {
    return this.hash;
  }

  getSetup() {
    return this.setup;
  }

  setSetup(setup) {
    this.setup = setup;
  }
}

module.exports = DTLSInfo;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

function randomIntInc(low, high) {
  const range = (high - low) + 1;
  const random = Math.random() * range;
  return Math.floor(random + low);
}

function randomBytes(size) {
  const numbers = new Uint8Array(size);

  for (let i = 0; i < numbers.length; i += 1) {
    numbers[i] = randomIntInc(0, 255);
  }
  return numbers;
}

function buf2hex(buffer) {
  return Array.prototype.map.call(new Uint8Array(buffer), (x) => {
    const hexValue = x.toString(16);
    return `00${hexValue}`.slice(-2);
  }).join('');
}

class ICEInfo {
  constructor(ufrag, pwd, opts) {
    this.ufrag = ufrag;
    this.pwd = pwd;
    this.opts = opts;
    this.lite = false;
    this.endOfCandidates = false;
  }

  clone() {
    const cloned = new ICEInfo(this.ufrag, this.pwd, this.opts);
    cloned.setLite(this.lite);
    cloned.setEndOfCandidates(this.endOfCandidates);
    return cloned;
  }

  plain() {
    const plain = {
      ufrag: this.ufrag,
      pwd: this.pwd,
    };
    if (this.lite) plain.lite = this.lite;
    if (this.endOfCandidates) plain.endOfCandidates = this.endOfCandidates;
    return plain;
  }

  getUfrag() {
    return this.ufrag;
  }

  getPwd() {
    return this.pwd;
  }

  isLite() {
    return this.lite;
  }

  getOpts() {
    return this.opts;
  }

  setLite(lite) {
    this.lite = lite;
  }

  isEndOfCandidates() {
    return this.endOfCandidates;
  }

  setEndOfCandidates(endOfCandidates) {
    this.endOfCandidates = endOfCandidates;
  }

}

ICEInfo.generate = () => {
  const info = new ICEInfo();
  const frag = randomBytes(8);
  const pwd = randomBytes(24);
  info.ufrag = buf2hex(frag);
  info.pwd = buf2hex(pwd);
  return info;
};

module.exports = ICEInfo;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

const SimulcastInfo = __webpack_require__(16);
const Direction = __webpack_require__(6);
const DirectionWay = __webpack_require__(2);

class MediaInfo {
  constructor(id, port, type) {
    this.id = id;
    this.type = type;
    this.port = port;
    this.direction = Direction.SENDRECV;
    this.extensions = new Map();
    this.codecs = new Map();
    this.rids = new Map();
    this.simulcast = null;
    this.simulcast_03 = null;
    this.bitrate = 0;
    this.ice = null;
    this.dtls = null;
    this.connection = null;
    this.candidates = [];
  }

  clone() {
    const cloned = new MediaInfo(this.id, this.port, this.type);
    cloned.setDirection(this.direction);
    cloned.setBitrate(this.bitrate);
    cloned.setConnection(this.connection);
    this.codecs.forEach((codec) => {
      cloned.addCodec(codec.clone());
    });
    this.extensions.forEach((extension, id) => {
      cloned.addExtension(id, extension);
    });
    this.rids.forEach((rid, id) => {
      cloned.addRID(id, rid.clone());
    });
    if (this.simulcast) {
      cloned.setSimulcast(this.simulcast.clone());
    }
    if (this.xGoogleFlag) {
      cloned.setXGoogleFlag(this.xGoogleFlag);
    }
    if (this.ice) {
      cloned.setICE(this.ice.clone());
    }
    if (this.dtls) {
      cloned.setDTLS(this.dtls.clone());
    }
    this.candidates.forEach((candidate) => {
      cloned.addCandidate(candidate.clone());
    });
    if (this.setup) {
      cloned.setSetup(this.setup);
    }
    return cloned;
  }

  plain() {
    const plain = {
      id: this.id,
      port: this.port,
      type: this.type,
      connection: this.connection,
      direction: Direction.toString(this.direction),
      xGoogleFlag: this.xGoogleFlag,
      extensions: {},
      rids: [],
      codecs: [],
      candidates: [],
    };
    if (this.bitrate) {
      plain.bitrate = this.bitrate;
    }
    this.codecs.forEach((codec) => {
      plain.codecs.push(codec.plain());
    });
    this.extensions.forEach((extension) => {
      plain.extensions.push(extension.plain());
    });
    this.rids.forEach((rid) => {
      plain.rids.push(rid.plain());
    });
    if (this.simulcast) {
      plain.simulcast = this.simulcast.plain();
    }
    this.candidates.forEach((candidate) => {
      plain.candidates.push(candidate.plain());
    });
    plain.ice = this.ice && this.ice.plain();
    plain.dtls = this.dtls && this.dtls.plain();
    return plain;
  }

  getType() {
    return this.type;
  }

  getPort() {
    return this.port;
  }

  getId() {
    return this.id;
  }

  addExtension(id, name) {
    this.extensions.set(id, name);
  }

  addRID(ridInfo) {
    this.rids.set(ridInfo.getId(), ridInfo);
  }

  addCodec(codecInfo) {
    this.codecs.set(codecInfo.getType(), codecInfo);
  }

  getCodecForType(type) {
    return this.codecs.get(type);
  }

  getCodec(codec) {
    let result;
    this.codecs.forEach((info) => {
      if (info.getCodec().toLowerCase() === codec.toLowerCase()) {
        result = info;
      }
    });
    return result;
  }

  hasCodec(codec) {
    return this.getCodec(codec) !== null;
  }

  getCodecs() {
    return this.codecs;
  }

  getExtensions() {
    return this.extensions;
  }

  getRIDs() {
    return this.rids;
  }

  getRID(id) {
    return this.rids.get(id);
  }

  getBitrate() {
    return this.bitrate;
  }

  setBitrate(bitrate) {
    this.bitrate = bitrate;
  }

  getDirection() {
    return this.direction;
  }

  setDirection(direction) {
    this.direction = direction;
  }

  getDTLS() {
    return this.dtls;
  }

  setDTLS(dtlsInfo) {
    this.dtls = dtlsInfo;
  }

  getICE() {
    return this.ice;
  }

  setICE(iceInfo) {
    this.ice = iceInfo;
  }

  addCandidate(candidate) {
    this.candidates.push(candidate);
  }

  addCandidates(candidates) {
    candidates.forEach((candidate) => {
      this.addCandidate(candidate);
    });
  }

  getCandidates() {
    return this.candidates;
  }

  setXGoogleFlag(value) {
    this.xGoogleFlag = value;
  }

  getXGoogleFlag() {
    return this.xGoogleFlag;
  }

  getConnection() {
    return this.connection;
  }

  setConnection(connection) {
    this.connection = connection;
  }

  answer(supported) {
    const answer = new MediaInfo(this.id, this.port, this.type);

    answer.setDirection(Direction.reverse(this.direction));

    if (supported.codecs) {
      this.codecs.forEach((codec) => {
        if (supported.codecs.has(codec.getCodec().toLowerCase())) {
          const cloned = supported.codecs.get(codec.getCodec().toLowerCase()).clone();
          cloned.setType(codec.getType());
          if (cloned.hasRTX()) {
            cloned.setRTX(codec.getRTX());
          }
          answer.addCodec(cloned);
        }
      });
    }

    this.extensions.forEach((extension, id) => {
      if (supported.extensions.has(id)) {
        answer.addExtension(id, extension);
      }
    });

    if (supported.simulcast && this.simulcast) {
      const simulcast = new SimulcastInfo();
      const sendEntries = this.simulcast.getSimulcastStreams(DirectionWay.SEND);
      if (sendEntries) {
        sendEntries.forEach((sendStreams) => {
          const alternatives = [];
          sendStreams.forEach((sendStream) => {
            alternatives.push(sendStream.clone());
          });
          simulcast.addSimulcastAlternativeStreams(DirectionWay.RECV, alternatives);
        });
      }

      const recvEntries = this.simulcast.getSimulcastStreams(DirectionWay.RECV);
      if (recvEntries) {
        recvEntries.forEach((recvStreams) => {
          const alternatives = [];
          recvStreams.forEach((recvStream) => {
            alternatives.push(recvStream.clone());
          });
          simulcast.addSimulcastAlternativeStreams(DirectionWay.SEND, alternatives);
        });
      }

      this.rids.forEach((rid) => {
        const reversed = rid.clone();
        reversed.setDirection(DirectionWay.reverse(rid.getDirection()));
        answer.addRID(reversed);
      });

      answer.setSimulcast(simulcast);
    }
    return answer;
  }

  getSimulcast() {
    return this.simulcast;
  }

  setSimulcast(simulcast) {
    this.simulcast = simulcast;
  }

  getSimulcast03() {
    return this.simulcast_03;
  }

  setSimulcast03(simulcast) {
    this.simulcast_03 = simulcast;
  }

  getSetup() {
    return this.setup;
  }

  setSetup(setup) {
    this.setup = setup;
  }
}

module.exports = MediaInfo;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

const DirectionWay = __webpack_require__(2);

class SimulcastInfo {
  constructor() {
    this.send = [];
    this.recv = [];
    this.plainString = null;
  }

  clone() {
    const cloned = new SimulcastInfo();
    this.send.forEach((sendStreams) => {
      const alternatives = [];
      sendStreams.forEach((sendStream) => {
        alternatives.push(sendStream.clone());
      });
      cloned.addSimulcastAlternativeStreams(alternatives);
    });
    this.recv.forEach((recvStreams) => {
      const alternatives = [];
      recvStreams.forEach((recvStream) => {
        alternatives.push(recvStream.clone());
      });
      cloned.addSimulcastAlternativeStreams(alternatives);
    });
    return cloned;
  }

  plain() {
    const plain = {
      send: [],
      recv: [],
    };
    this.send.forEach((sendStreams) => {
      const alternatives = [];
      sendStreams.forEach((sendStream) => {
        alternatives.push(sendStream.plain());
      });
      plain.send.push(alternatives);
    });
    this.recv.forEach((recvStreams) => {
      const alternatives = [];
      recvStreams.forEach((recvStream) => {
        alternatives.push(recvStream.plain());
      });
      plain.recv.push(alternatives);
    });
    return plain;
  }

  addSimulcastAlternativeStreams(direction, streams) {
    if (direction === DirectionWay.SEND) {
      return this.send.push(streams);
    }
    return this.recv.push(streams);
  }

  addSimulcastStream(direction, stream) {
    if (direction === DirectionWay.SEND) {
      return this.send.push([stream]);
    }
    return this.recv.push([stream]);
  }

  getSimulcastStreams(direction) {
    if (direction === DirectionWay.SEND) {
      return this.send;
    }
    return this.recv;
  }

  setSimulcastPlainString(string) {
    this.plainString = string;
  }

  getSimulcastPlainString() {
    return this.plainString;
  }
}

module.exports = SimulcastInfo;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

class SourceGroupInfo {
  constructor(semantics, ssrcs) {
    this.semantics = semantics;
    this.ssrcs = [];
    ssrcs.forEach((ssrc) => {
      this.ssrcs.push(parseInt(ssrc, 10));
    });
  }

  clone() {
    return new SourceGroupInfo(this.semantics, this.ssrcs);
  }

  plain() {
    const plain = {
      semantics: this.semantics,
      ssrcs: [],
    };
    plain.ssrcs = this.ssrcs;
    return plain;
  }

  getSemantics() {
    return this.semantics;
  }

  getSSRCs() {
    return this.ssrcs;
  }
}

module.exports = SourceGroupInfo;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

class SourceInfo {
  constructor(ssrc) {
    this.ssrc = ssrc;
  }

  clone() {
    const clone = new SourceInfo(this.ssrc);
    clone.setCName(this.cname);
    clone.setStreamId(this.streamId);
    this.setTrackId(this.trackId);
  }


  plain() {
    const plain = {
      ssrc: this.ssrc,
    };
    if (this.cname) plain.cname = this.cname;
    if (this.label) plain.label = this.label;
    if (this.mslabel) plain.mslabel = this.mslabel;
    if (this.streamId) plain.streamId = this.streamId;
    if (this.trackId) plain.trackid = this.trackId;
    return plain;
  }

  getCName() {
    return this.cname;
  }

  setCName(cname) {
    this.cname = cname;
  }

  getStreamId() {
    return this.streamId;
  }

  setStreamId(streamId) {
    this.streamId = streamId;
  }

  getTrackId() {
    return this.trackId;
  }

  setTrackId(trackId) {
    this.trackId = trackId;
  }

  getMSLabel() {
    return this.mslabel;
  }

  setMSLabel(mslabel) {
    this.mslabel = mslabel;
  }

  getLabel() {
    return this.label;
  }

  setLabel(label) {
    this.label = label;
  }

  getSSRC() {
    return this.ssrc;
  }
}

module.exports = SourceInfo;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

class StreamInfo {
  constructor(id) {
    this.id = id;
    this.tracks = new Map();
  }

  clone() {
    const cloned = new StreamInfo(this.id);
    this.tracks.forEach((track) => {
      cloned.addTrack(track.clone());
    });
    return cloned;
  }

  plain() {
    const plain = {
      id: this.id,
      tracks: [],
    };
    this.tracks.forEach((track) => {
      plain.tracks.push(track.plain());
    });
    return plain;
  }

  getId() {
    return this.id;
  }

  addTrack(track) {
    this.tracks.set(track.getId(), track);
  }

  getFirstTrack(media) {
    let result;
    this.tracks.forEach((track) => {
      if (track.getMedia().toLowerCase() === media.toLowerCase()) {
        result = track;
      }
    });
    return result;
  }

  getTracks() {
    return this.tracks;
  }

  removeAllTracks() {
    this.tracks.clear();
  }

  getTrack(trackId) {
    return this.tracks.get(trackId);
  }
}

module.exports = StreamInfo;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

class TrackInfo {
  constructor(media, id) {
    this.media = media;
    this.id = id;
    this.ssrcs = [];
    this.groups = [];
    this.encodings = [];
  }

  clone() {
    const cloned = new TrackInfo(this.media, this.id);
    if (this.mediaId) {
      cloned.setMediaId(this.mediaId);
    }
    this.ssrcs.forEach((ssrc) => {
      cloned.addSSRC(ssrc);
    });
    this.groups.forEach((group) => {
      cloned.addSourceGroup(group.clone());
    });
    this.encodings.forEach((encoding) => {
      const alternatives = [];
      encoding.forEach((entry) => {
        alternatives.push(entry.cloned());
      });
      cloned.addAlternativeEncoding(alternatives);
    });
    return cloned;
  }

  plain() {
    const plain = {
      media: this.media,
      id: this.id,
      ssrcs: [],
      groups: [],
      encodings: [],
    };
    if (this.mediaId) {
      plain.mediaId = this.mediaId;
    }
    this.ssrcs.forEach((ssrc) => {
      plain.ssrcs.push(ssrc);
    });
    this.groups.forEach((group) => {
      plain.groups.push(group.plain());
    });
    this.encodings.forEach((encoding) => {
      const alternatives = [];
      encoding.forEach((entry) => {
        alternatives.push(entry.plain());
      });
      plain.encodings.push(alternatives);
    });
    return plain;
  }

  getMedia() {
    return this.media;
  }

  setMediaId(mediaId) {
    this.mediaId = mediaId;
  }

  getMediaId() {
    return this.mediaId;
  }

  getId() {
    return this.id;
  }

  addSSRC(ssrc) {
    this.ssrcs.push(ssrc);
  }

  getSSRCs() {
    return this.ssrcs;
  }

  addSourceGroup(group) {
    this.groups.push(group);
  }

  getSourceGroup(schematics) {
    let result;
    this.groups.forEach((group) => {
      if (group.getSemantics().toLowerCase() === schematics.toLowerCase()) {
        result = group;
      }
    });
    return result;
  }

  getSourceGroups() {
    return this.groups;
  }

  hasSourceGroup(schematics) {
    let result = false;
    this.groups.forEach((group) => {
      if (group.getSemantics().toLowerCase() === schematics.toLowerCase()) {
        result = true;
      }
    });
    return result;
  }

  getEncodings() {
    return this.encodings;
  }

  addAlternaticeEncodings(alternatives) {
    this.encodings.push(alternatives);
  }

  setEncodings(encodings) {
    this.encodings = encodings;
  }
}

module.exports = TrackInfo;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const SdpHelpers = {};

SdpHelpers.addSim = (spatialLayers) => {
  let line = 'a=ssrc-group:SIM';
  spatialLayers.forEach((spatialLayerId) => {
    line += ` ${spatialLayerId}`;
  });
  return `${line}\r\n`;
};

SdpHelpers.addGroup = (spatialLayerId, spatialLayerIdRtx) =>
  `a=ssrc-group:FID ${spatialLayerId} ${spatialLayerIdRtx}\r\n`;

SdpHelpers.addSpatialLayer = (cname, msid, mslabel,
  label, spatialLayerId, spatialLayerIdRtx) =>
  `a=ssrc:${spatialLayerId} cname:${cname}\r\n` +
  `a=ssrc:${spatialLayerId} msid:${msid}\r\n` +
  `a=ssrc:${spatialLayerId} mslabel:${mslabel}\r\n` +
  `a=ssrc:${spatialLayerId} label:${label}\r\n` +
  `a=ssrc:${spatialLayerIdRtx} cname:${cname}\r\n` +
  `a=ssrc:${spatialLayerIdRtx} msid:${msid}\r\n` +
  `a=ssrc:${spatialLayerIdRtx} mslabel:${mslabel}\r\n` +
  `a=ssrc:${spatialLayerIdRtx} label:${label}\r\n`;

SdpHelpers.setMaxBW = (sdp, spec) => {
  if (!spec.p2p) {
    return;
  }
  if (spec.video && spec.maxVideoBW) {
    const video = sdp.getMedia('video');
    if (video) {
      video.setBitrate(spec.maxVideoBW);
    }
  }

  if (spec.audio && spec.maxAudioBW) {
    const audio = sdp.getMedia('audio');
    if (audio) {
      audio.setBitrate(spec.maxAudioBW);
    }
  }
};

SdpHelpers.enableOpusNacks = (sdpInput) => {
  let sdp = sdpInput;
  const sdpMatch = sdp.match(/a=rtpmap:(.*)opus.*\r\n/);
  if (sdpMatch !== null) {
    const theLine = `${sdpMatch[0]}a=rtcp-fb:${sdpMatch[1]}nack\r\n`;
    sdp = sdp.replace(sdpMatch[0], theLine);
  }

  return sdp;
};

SdpHelpers.setParamForCodecs = (sdpInfo, mediaType, paramName, value) => {
  sdpInfo.medias.forEach((mediaInfo) => {
    if (mediaInfo.id === mediaType) {
      mediaInfo.codecs.forEach((codec) => {
        codec.setParam(paramName, value);
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (SdpHelpers);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Events__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ConnectionHelpers__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ErizoMap__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_VideoPlayer__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_AudioPlayer__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_Logger__ = __webpack_require__(0);
/* global document */








/*
 * Class Stream represents a local or a remote Stream in the Room. It will handle the WebRTC
 * stream and identify the stream and where it should be drawn.
 */
const Stream = (altConnectionHelpers, specInput) => {
  const spec = specInput;
  const that = Object(__WEBPACK_IMPORTED_MODULE_0__Events__["b" /* EventDispatcher */])(spec);

  that.stream = spec.stream;
  that.url = spec.url;
  that.recording = spec.recording;
  that.room = undefined;
  that.showing = false;
  that.local = false;
  that.video = spec.video;
  that.audio = spec.audio;
  that.screen = spec.screen;
  that.videoSize = spec.videoSize;
  that.videoFrameRate = spec.videoFrameRate;
  that.extensionId = spec.extensionId;
  that.desktopStreamId = spec.desktopStreamId;
  that.audioMuted = false;
  that.videoMuted = false;
  that.p2p = false;
  that.ConnectionHelpers =
    altConnectionHelpers === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_ConnectionHelpers__["a" /* default */] : altConnectionHelpers;

  const onStreamAddedToPC = (evt) => {
    if (evt.stream.id === that.getLabel()) {
      that.emit(Object(__WEBPACK_IMPORTED_MODULE_0__Events__["f" /* StreamEvent */])({ type: 'added', stream: evt.stream }));
    }
  };

  const onStreamRemovedFroPC = (evt) => {
    if (evt.stream.id === that.getLabel()) {
      that.emit(Object(__WEBPACK_IMPORTED_MODULE_0__Events__["f" /* StreamEvent */])({ type: 'removed', stream: that }));
    }
  };

  const onICEConnectionStateChange = (msg) => {
    that.emit(Object(__WEBPACK_IMPORTED_MODULE_0__Events__["f" /* StreamEvent */])({ type: 'icestatechanged', msg }));
  };

  if (that.videoSize !== undefined &&
        (!(that.videoSize instanceof Array) ||
           that.videoSize.length !== 4)) {
    throw Error('Invalid Video Size');
  }
  if (spec.local === undefined || spec.local === true) {
    that.local = true;
  }

  // Public functions
  that.getID = () => {
    let id;
    // Unpublished local streams don't yet have an ID.
    if (that.local && !spec.streamID) {
      id = 'local';
    } else {
      id = spec.streamID;
    }
    return id;
  };

  that.getLabel = () => {
    if (that.stream && that.stream.id) {
      return that.stream.id;
    }
    return spec.label;
  };

  // Get attributes of this stream.
  that.getAttributes = () => spec.attributes;

  // Changes the attributes of this stream in the room.
  that.setAttributes = (attrs) => {
    if (that.local) {
      that.emit(Object(__WEBPACK_IMPORTED_MODULE_0__Events__["f" /* StreamEvent */])({ type: 'internal-set-attributes', stream: that, attrs }));
      return;
    }
    __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* default */].error('Failed to set attributes data. This Stream object has not been published.');
  };

  that.updateLocalAttributes = (attrs) => {
    spec.attributes = attrs;
  };

  // Indicates if the stream has audio activated
  that.hasAudio = () => spec.audio !== false && spec.audio !== undefined;

  // Indicates if the stream has video activated
  that.hasVideo = () => spec.video !== false && spec.video !== undefined;

  // Indicates if the stream has data activated
  that.hasData = () => spec.data !== false && spec.data !== undefined;

  // Indicates if the stream has screen activated
  that.hasScreen = () => spec.screen;

  that.hasMedia = () => spec.audio || spec.video || spec.screen;

  that.isExternal = () => that.url !== undefined || that.recording !== undefined;

  that.addPC = (pc, p2pKey = undefined) => {
    if (p2pKey) {
      that.p2p = true;
      if (that.pc === undefined) {
        that.pc = Object(__WEBPACK_IMPORTED_MODULE_2__utils_ErizoMap__["a" /* default */])();
      }
      that.pc.add(p2pKey, pc);
      pc.on('ice-state-change', onICEConnectionStateChange);
      return;
    }
    if (that.pc) {
      that.pc.off('add-stream', onStreamAddedToPC);
      that.pc.off('remove-stream', onStreamRemovedFroPC);
      that.pc.off('ice-state-change', onICEConnectionStateChange);
    }
    that.pc = pc;
    that.pc.on('add-stream', onStreamAddedToPC);
    that.pc.on('remove-stream', onStreamRemovedFroPC);
    that.pc.on('ice-state-change', onICEConnectionStateChange);
  };

  // Sends data through this stream.
  that.sendData = (msg) => {
    if (that.local && that.hasData()) {
      that.emit(Object(__WEBPACK_IMPORTED_MODULE_0__Events__["f" /* StreamEvent */])({ type: 'internal-send-data', stream: that, msg }));
      return;
    }
    __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* default */].error('Failed to send data. This Stream object has not been published.');
  };

  // Initializes the stream and tries to retrieve a stream from local video and audio
  // We need to call this method before we can publish it in the room.
  that.init = () => {
    try {
      if ((spec.audio || spec.video || spec.screen) && spec.url === undefined) {
        __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* default */].info('Requested access to local media');
        let videoOpt = spec.video;
        if (videoOpt === true || spec.screen === true) {
          videoOpt = videoOpt === true || videoOpt === null ? {} : videoOpt;
          if (that.videoSize !== undefined) {
            videoOpt.width = {
              min: that.videoSize[0],
              max: that.videoSize[2],
            };

            videoOpt.height = {
              min: that.videoSize[1],
              max: that.videoSize[3],
            };
          }

          if (that.videoFrameRate !== undefined) {
            videoOpt.frameRate = {
              min: that.videoFrameRate[0],
              max: that.videoFrameRate[1],
            };
          }
        } else if (spec.screen === true && videoOpt === undefined) {
          videoOpt = true;
        }
        const opt = { video: videoOpt,
          audio: spec.audio,
          fake: spec.fake,
          screen: spec.screen,
          extensionId: that.extensionId,
          desktopStreamId: that.desktopStreamId };

        that.ConnectionHelpers.GetUserMedia(opt, (stream) => {
          __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* default */].info('User has granted access to local media.');
          that.stream = stream;

          that.dispatchEvent(Object(__WEBPACK_IMPORTED_MODULE_0__Events__["f" /* StreamEvent */])({ type: 'access-accepted' }));

          that.stream.getTracks().forEach((trackInput) => {
            __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* default */].info('getTracks', trackInput);
            const track = trackInput;
            track.onended = () => {
              that.stream.getTracks().forEach((secondTrackInput) => {
                const secondTrack = secondTrackInput;
                secondTrack.onended = null;
              });
              const streamEvent = Object(__WEBPACK_IMPORTED_MODULE_0__Events__["f" /* StreamEvent */])({ type: 'stream-ended',
                stream: that,
                msg: track.kind });
              that.dispatchEvent(streamEvent);
            };
          });
        }, (error) => {
          __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* default */].error(`Failed to get access to local media. Error code was ${
                           error.code}.`);
          const streamEvent = Object(__WEBPACK_IMPORTED_MODULE_0__Events__["f" /* StreamEvent */])({ type: 'access-denied', msg: error });
          that.dispatchEvent(streamEvent);
        });
      } else {
        const streamEvent = Object(__WEBPACK_IMPORTED_MODULE_0__Events__["f" /* StreamEvent */])({ type: 'access-accepted' });
        that.dispatchEvent(streamEvent);
      }
    } catch (e) {
      __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* default */].error(`Failed to get access to local media. Error was ${e}.`);
      const streamEvent = Object(__WEBPACK_IMPORTED_MODULE_0__Events__["f" /* StreamEvent */])({ type: 'access-denied', msg: e });
      that.dispatchEvent(streamEvent);
    }
  };


  that.close = () => {
    if (that.local) {
      if (that.room !== undefined) {
        that.room.unpublish(that);
      }
      // Remove HTML element
      that.hide();
      if (that.stream !== undefined) {
        that.stream.getTracks().forEach((trackInput) => {
          const track = trackInput;
          track.onended = null;
          track.stop();
        });
      }
      that.stream = undefined;
    }
    if (that.pc && !that.p2p) {
      that.pc.off('add-stream', onStreamAddedToPC);
      that.pc.off('remove-stream', onStreamRemovedFroPC);
      that.pc.off('ice-state-change', onICEConnectionStateChange);
    } else if (that.pc && that.p2p) {
      that.pc.forEach((pc) => {
        pc.off('add-stream', onStreamAddedToPC);
        pc.off('remove-stream', onStreamRemovedFroPC);
        pc.off('ice-state-change', onICEConnectionStateChange);
      });
    }
    that.removeAllListeners();
  };

  that.play = (elementID, optionsInput) => {
    const options = optionsInput || {};
    that.elementID = elementID;
    let player;
    if (that.hasVideo() || that.hasScreen()) {
      // Draw on HTML
      if (elementID !== undefined) {
        player = Object(__WEBPACK_IMPORTED_MODULE_3__views_VideoPlayer__["a" /* default */])({ id: that.getID(),
          stream: that,
          elementID,
          options });
        that.player = player;
        that.showing = true;
      }
    } else if (that.hasAudio()) {
      player = Object(__WEBPACK_IMPORTED_MODULE_4__views_AudioPlayer__["a" /* default */])({ id: that.getID(),
        stream: that,
        elementID,
        options });
      that.player = player;
      that.showing = true;
    }
  };

  that.stop = () => {
    if (that.showing) {
      if (that.player !== undefined) {
        that.player.destroy();
        that.showing = false;
      }
    }
  };

  that.show = that.play;
  that.hide = that.stop;

  const getFrame = () => {
    if (that.player !== undefined && that.stream !== undefined) {
      const video = that.player.video;
      const style = document.defaultView.getComputedStyle(video);
      const width = parseInt(style.getPropertyValue('width'), 10);
      const height = parseInt(style.getPropertyValue('height'), 10);
      const left = parseInt(style.getPropertyValue('left'), 10);
      const top = parseInt(style.getPropertyValue('top'), 10);

      let div;
      if (typeof that.elementID === 'object' &&
              typeof that.elementID.appendChild === 'function') {
        div = that.elementID;
      } else {
        div = document.getElementById(that.elementID);
      }

      const divStyle = document.defaultView.getComputedStyle(div);
      const divWidth = parseInt(divStyle.getPropertyValue('width'), 10);
      const divHeight = parseInt(divStyle.getPropertyValue('height'), 10);
      const canvas = document.createElement('canvas');

      canvas.id = 'testing';
      canvas.width = divWidth;
      canvas.height = divHeight;
      canvas.setAttribute('style', 'display: none');
      // document.body.appendChild(canvas);
      const context = canvas.getContext('2d');

      context.drawImage(video, left, top, width, height);

      return canvas;
    }
    return null;
  };

  that.getVideoFrameURL = (format) => {
    const canvas = getFrame();
    if (canvas !== null) {
      if (format) {
        return canvas.toDataURL(format);
      }
      return canvas.toDataURL();
    }
    return null;
  };

  that.getVideoFrame = () => {
    const canvas = getFrame();
    if (canvas !== null) {
      return canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
    }
    return null;
  };

  that.checkOptions = (configInput, isUpdate) => {
    const config = configInput;
    // TODO: Check for any incompatible options
    if (isUpdate === true) {  // We are updating the stream
      if (config.audio || config.screen) {
        __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* default */].warning('Cannot update type of subscription');
        config.audio = undefined;
        config.screen = undefined;
      }
    } else if (that.local === false) { // check what we can subscribe to
      if (config.video === true && that.hasVideo() === false) {
        __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* default */].warning('Trying to subscribe to video when there is no ' +
                                   'video, won\'t subscribe to video');
        config.video = false;
      }
      if (config.audio === true && that.hasAudio() === false) {
        __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* default */].warning('Trying to subscribe to audio when there is no ' +
                                   'audio, won\'t subscribe to audio');
        config.audio = false;
      }
    }
    if (that.local === false) {
      if (!that.hasVideo() && (config.slideShowMode === true)) {
        __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* default */].warning('Cannot enable slideShowMode if it is not a video ' +
                                 'subscription, please check your parameters');
        config.slideShowMode = false;
      }
    }
  };

  const muteStream = (callback = () => {}) => {
    if (that.room && that.room.p2p) {
      __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* default */].warning('muteAudio/muteVideo are not implemented in p2p streams');
      callback('error');
      return;
    }
    if (that.stream) {
      for (let index = 0; index < that.stream.getVideoTracks().length; index += 1) {
        const track = that.stream.getVideoTracks()[index];
        track.enabled = !that.videoMuted;
      }
    }
    const config = { muteStream: { audio: that.audioMuted, video: that.videoMuted } };
    that.checkOptions(config, true);
    if (that.pc) {
      that.pc.updateSpec(config, that.getID(), callback);
    }
  };

  that.muteAudio = (isMuted, callback = () => {}) => {
    that.audioMuted = isMuted;
    muteStream(callback);
  };

  that.muteVideo = (isMuted, callback = () => {}) => {
    that.videoMuted = isMuted;
    muteStream(callback);
  };

  // eslint-disable-next-line no-underscore-dangle
  that._setStaticQualityLayer = (spatialLayer, temporalLayer, callback = () => {}) => {
    if (that.room && that.room.p2p) {
      __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* default */].warning('setStaticQualityLayer is not implemented in p2p streams');
      callback('error');
      return;
    }
    const config = { qualityLayer: { spatialLayer, temporalLayer } };
    that.checkOptions(config, true);
    that.pc.updateSpec(config, that.getID(), callback);
  };

  // eslint-disable-next-line no-underscore-dangle
  that._setDynamicQualityLayer = (callback) => {
    if (that.room && that.room.p2p) {
      __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* default */].warning('setDynamicQualityLayer is not implemented in p2p streams');
      callback('error');
      return;
    }
    const config = { qualityLayer: { spatialLayer: -1, temporalLayer: -1 } };
    that.checkOptions(config, true);
    that.pc.updateSpec(config, that.getID(), callback);
  };

  // eslint-disable-next-line no-underscore-dangle
  that._enableSlideShowBelowSpatialLayer = (enabled, spatialLayer = 0, callback = () => {}) => {
    if (that.room && that.room.p2p) {
      __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* default */].warning('enableSlideShowBelowSpatialLayer is not implemented in p2p streams');
      callback('error');
      return;
    }
    const config = { slideShowBelowLayer: { enabled, spatialLayer } };
    that.checkOptions(config, true);
    __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* default */].debug('Calling updateSpec with config', config);
    that.pc.updateSpec(config, that.getID(), callback);
  };

  // This is an alias to keep backwards compatibility
  // eslint-disable-next-line no-underscore-dangle
  that._setMinSpatialLayer = that._enableSlideShowBelowSpatialLayer.bind(this, true);

  const controlHandler = (handlersInput, publisherSideInput, enable) => {
    let publisherSide = publisherSideInput;
    let handlers = handlersInput;
    if (publisherSide !== true) {
      publisherSide = false;
    }

    handlers = (typeof handlers === 'string') ? [handlers] : handlers;
    handlers = (handlers instanceof Array) ? handlers : [];

    if (handlers.length > 0) {
      that.room.sendControlMessage(that, 'control', { name: 'controlhandlers',
        enable,
        publisherSide,
        handlers });
    }
  };

  that.disableHandlers = (handlers, publisherSide) => {
    controlHandler(handlers, publisherSide, false);
  };

  that.enableHandlers = (handlers, publisherSide) => {
    controlHandler(handlers, publisherSide, true);
  };

  that.updateConfiguration = (config, callback = () => {}) => {
    if (config === undefined) { return; }
    if (that.pc) {
      that.checkOptions(config, true);
      if (that.local) {
        if (that.room.p2p) {
          for (let index = 0; index < that.pc.length; index += 1) {
            that.pc[index].updateSpec(config, that.getID(), callback);
          }
        } else {
          that.pc.updateSpec(config, that.getID(), callback);
        }
      } else {
        that.pc.updateSpec(config, that.getID(), callback);
      }
    } else {
      callback('This stream has no peerConnection attached, ignoring');
    }
  };

  return that;
};

/* harmony default export */ __webpack_exports__["a"] = (Stream);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Speaker__ = __webpack_require__(42);
/* global document, clearTimeout, setTimeout */




/*
 * Bar represents the bottom menu bar of every mediaPlayer.
 * It contains a Speaker and an icon.
 * Every Bar is a View.
 * Ex.: var bar = Bar({elementID: element, id: id});
 */
const Bar = (spec) => {
  const that = Object(__WEBPACK_IMPORTED_MODULE_0__View__["a" /* default */])({});
  let waiting;

  // Variables

  // DOM element in which the Bar will be appended
  that.elementID = spec.elementID;

  // Bar ID
  that.id = spec.id;

  // Container
  that.div = document.createElement('div');
  that.div.setAttribute('id', `bar_${that.id}`);
  that.div.setAttribute('class', 'licode_bar');

  // Bottom bar
  that.bar = document.createElement('div');
  that.bar.setAttribute('style', 'width: 100%; height: 15%; max-height: 30px; ' +
                                 'position: absolute; bottom: 0; right: 0; ' +
                                 'background-color: rgba(255,255,255,0.62)');
  that.bar.setAttribute('id', `subbar_${that.id}`);
  that.bar.setAttribute('class', 'licode_subbar');

  // Lynckia icon
  that.link = document.createElement('a');
  that.link.setAttribute('href', 'http://www.lynckia.com/');
  that.link.setAttribute('class', 'licode_link');
  that.link.setAttribute('target', '_blank');

  that.logo = document.createElement('img');
  that.logo.setAttribute('style', 'width: 100%; height: 100%; max-width: 30px; ' +
                                  'position: absolute; top: 0; left: 2px;');
  that.logo.setAttribute('class', 'licode_logo');
  that.logo.setAttribute('alt', 'Lynckia');
  that.logo.setAttribute('src', `${that.url}/assets/star.svg`);

  // Private functions
  const show = (displaying) => {
    let action = displaying;
    if (displaying !== 'block') {
      action = 'none';
    } else {
      clearTimeout(waiting);
    }

    that.div.setAttribute('style',
      `width: 100%; height: 100%; position: relative; bottom: 0; right: 0; display: ${action}`);
  };

  // Public functions
  that.display = () => {
    show('block');
  };

  that.hide = () => {
    waiting = setTimeout(show, 1000);
  };

  document.getElementById(that.elementID).appendChild(that.div);
  that.div.appendChild(that.bar);
  that.bar.appendChild(that.link);
  that.link.appendChild(that.logo);

  // Speaker component
  if (!spec.stream.screen && (spec.options === undefined ||
                              spec.options.speaker === undefined ||
                              spec.options.speaker === true)) {
    that.speaker = Object(__WEBPACK_IMPORTED_MODULE_1__Speaker__["a" /* default */])({ elementID: `subbar_${that.id}`,
      id: that.id,
      stream: spec.stream,
      media: spec.media });
  }

  that.display();
  that.hide();

  return that;
};

/* harmony default export */ __webpack_exports__["a"] = (Bar);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Room__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Events__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Stream__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Logger__ = __webpack_require__(0);




// Using script-loader to load global variables

const Erizo = {
  Room: __WEBPACK_IMPORTED_MODULE_0__Room__["a" /* default */],
  LicodeEvent: __WEBPACK_IMPORTED_MODULE_1__Events__["d" /* LicodeEvent */],
  RoomEvent: __WEBPACK_IMPORTED_MODULE_1__Events__["e" /* RoomEvent */],
  StreamEvent: __WEBPACK_IMPORTED_MODULE_1__Events__["f" /* StreamEvent */],
  Stream: __WEBPACK_IMPORTED_MODULE_2__Stream__["a" /* default */],
  Logger: __WEBPACK_IMPORTED_MODULE_3__utils_Logger__["a" /* default */],
};

/* harmony default export */ __webpack_exports__["default"] = (Erizo);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ErizoConnectionManager__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ConnectionHelpers__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Events__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Socket__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Stream__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_ErizoMap__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_Base64__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_Logger__ = __webpack_require__(0);









/*
 * Class Room represents a Licode Room. It will handle the connection, local stream publication and
 * remote stream subscription.
 * Typical Room initialization would be:
 * var room = Erizo.Room({token:'213h8012hwduahd-321ueiwqewq'});
 * It also handles RoomEvents and StreamEvents. For example:
 * Event 'room-connected' points out that the user has been successfully connected to the room.
 * Event 'room-disconnected' shows that the user has been already disconnected.
 * Event 'stream-added' indicates that there is a new stream available in the room.
 * Event 'stream-removed' shows that a previous available stream has been removed from the room.
 */
const Room = (altIo, altConnectionHelpers, altConnectionManager, specInput) => {
  const spec = specInput;
  const that = Object(__WEBPACK_IMPORTED_MODULE_2__Events__["b" /* EventDispatcher */])(specInput);
  const DISCONNECTED = 0;
  const CONNECTING = 1;
  const CONNECTED = 2;


  that.remoteStreams = Object(__WEBPACK_IMPORTED_MODULE_5__utils_ErizoMap__["a" /* default */])();
  that.localStreams = Object(__WEBPACK_IMPORTED_MODULE_5__utils_ErizoMap__["a" /* default */])();
  that.roomID = '';
  that.state = DISCONNECTED;
  that.p2p = false;
  that.ConnectionHelpers =
    altConnectionHelpers === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_ConnectionHelpers__["a" /* default */] : altConnectionHelpers;

  that.erizoConnectionManager =
    altConnectionManager === undefined ? new __WEBPACK_IMPORTED_MODULE_0__ErizoConnectionManager__["a" /* default */]()
    : new altConnectionManager.ErizoConnectionManager();

  let socket = Object(__WEBPACK_IMPORTED_MODULE_3__Socket__["a" /* Socket */])(altIo);
  that.socket = socket;
  let remoteStreams = that.remoteStreams;
  let localStreams = that.localStreams;
  // Private functions
  const removeStream = (streamInput) => {
    const stream = streamInput;
    stream.removeAllListeners();

    if (stream.pc && !that.p2p) {
      stream.pc.removeStream(stream);
    }

    __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].debug('Removed stream');
    if (stream.stream) {
      // Remove HTML element
      stream.hide();

      stream.stop();
      stream.close();
      delete stream.stream;
    }

    // Close PC stream
    if (stream.pc) {
      if (stream.local && that.p2p) {
        stream.pc.forEach((connection, id) => {
          connection.close();
          stream.pc.remove(id);
        });
      } else {
        that.erizoConnectionManager.maybeCloseConnection(stream.pc);
        delete stream.pc;
      }
    }
  };

  const onStreamFailed = (streamInput, message) => {
    const stream = streamInput;
    if (that.state !== DISCONNECTED && stream && !stream.failed) {
      stream.failed = true;
      const streamFailedEvt = Object(__WEBPACK_IMPORTED_MODULE_2__Events__["f" /* StreamEvent */])(
        { type: 'stream-failed',
          msg: message || 'Stream failed after connection',
          stream });
      that.dispatchEvent(streamFailedEvt);
      if (stream.local) {
        that.unpublish(stream);
      } else {
        that.unsubscribe(stream);
      }
    }
  };

  const dispatchStreamSubscribed = (streamInput, evt) => {
    const stream = streamInput;
    // Draw on html
    __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].info('Stream subscribed');
    stream.stream = evt.stream;
    if (!that.p2p) {
      stream.pc.addStream(stream);
    }
    const evt2 = Object(__WEBPACK_IMPORTED_MODULE_2__Events__["f" /* StreamEvent */])({ type: 'stream-subscribed', stream });
    that.dispatchEvent(evt2);
  };

  const getP2PConnectionOptions = (stream, peerSocket) => {
    const options = {
      callback(msg) {
        socket.sendSDP('signaling_message', {
          streamId: stream.getID(),
          peerSocket,
          msg });
      },
      audio: stream.hasAudio(),
      video: stream.hasVideo(),
      iceServers: that.iceServers,
      maxAudioBW: stream.maxAudioBW,
      maxVideoBW: stream.maxVideoBW,
      limitMaxAudioBW: spec.maxAudioBW,
      limitMaxVideoBW: spec.maxVideoBW,
      forceTurn: stream.forceTurn,
      p2p: true,
    };
    return options;
  };

  const createRemoteStreamP2PConnection = (streamInput, peerSocket) => {
    const stream = streamInput;
    stream.addPC(that.erizoConnectionManager.getOrBuildErizoConnection(
      getP2PConnectionOptions(stream, peerSocket)));
    stream.on('added', dispatchStreamSubscribed.bind(null, stream));
    stream.on('icestatechanged', (evt) => {
      __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].info(`${stream.getID()} - iceConnectionState: ${evt.msg.state}`);
      if (evt.msg.state === 'failed') {
        onStreamFailed(stream);
      }
    });
  };

  const createLocalStreamP2PConnection = (streamInput, peerSocket) => {
    const stream = streamInput;
    const connection = that.erizoConnectionManager.getOrBuildErizoConnection(
      getP2PConnectionOptions(stream, peerSocket));

    stream.addPC(connection, peerSocket);

    stream.on('icestatechanged', (evt) => {
      __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].info(`${stream.getID()} - iceConnectionState: ${evt.msg.state}`);
      if (evt.msg.state === 'failed') {
        stream.pc.get(peerSocket).close();
        stream.pc.remove(peerSocket);
      }
    });
    connection.addStream(stream);
    connection.createOffer();
  };

  const removeLocalStreamP2PConnection = (streamInput, peerSocket) => {
    const stream = streamInput;
    if (stream.pc === undefined || !stream.pc.has(peerSocket)) {
      return;
    }
    const pc = stream.pc.get(peerSocket);
    pc.close();
    stream.pc.remove(peerSocket);
  };

  const getErizoConnectionOptions = (stream, options, isRemote) => {
    const connectionOpts = {
      callback(message, streamId = stream.getID()) {
        __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].info('Sending message', message, stream.getID(), streamId);
        socket.sendSDP('signaling_message', {
          streamId,
          msg: message,
          browser: stream.pc && stream.pc.browser }, undefined, () => {});
      },
      nop2p: true,
      audio: options.audio && stream.hasAudio(),
      video: options.video && stream.hasVideo(),
      maxAudioBW: options.maxAudioBW,
      maxVideoBW: options.maxVideoBW,
      limitMaxAudioBW: spec.maxAudioBW,
      limitMaxVideoBW: spec.maxVideoBW,
      label: stream.getLabel(),
      iceServers: that.iceServers,
      forceTurn: stream.forceTurn,
      p2p: false,
    };
    if (!isRemote) {
      connectionOpts.simulcast = options.simulcast;
      connectionOpts.startVideoBW = options.startVideoBW;
      connectionOpts.hardMinVideoBW = options.hardMinVideoBW;
    }
    return connectionOpts;
  };

  const createRemoteStreamErizoConnection = (streamInput, erizoId, options) => {
    const stream = streamInput;
    stream.addPC(that.erizoConnectionManager.getOrBuildErizoConnection(
      getErizoConnectionOptions(stream, options, true), erizoId, spec.singlePC));
    stream.on('added', dispatchStreamSubscribed.bind(null, stream));
    stream.on('icestatechanged', (evt) => {
      __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].info(`${stream.getID()} - iceConnectionState: ${evt.msg.state}`);
      if (evt.msg.state === 'failed') {
        onStreamFailed(stream);
      }
    });
    stream.pc.createOffer(true, false, stream.getID());
  };

  const createLocalStreamErizoConnection = (streamInput, erizoId, options) => {
    const stream = streamInput;
    stream.addPC(that.erizoConnectionManager.getOrBuildErizoConnection(
      getErizoConnectionOptions(stream, options), erizoId, spec.singlePC));

    stream.on('icestatechanged', (evt) => {
      __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].info(`${stream.getID()} - iceConnectionState: ${evt.msg.state}`);
      if (evt.msg.state === 'failed') {
        onStreamFailed(stream);
      }
    });
    stream.pc.addStream(stream);
    if (!options.createOffer) { stream.pc.createOffer(false, spec.singlePC, stream.getID()); }
  };

  // We receive an event with a new stream in the room.
  // type can be "media" or "data"

  const socketOnAddStream = (arg) => {
    if (remoteStreams.has(arg.id)) {
      return;
    }
    const stream = Object(__WEBPACK_IMPORTED_MODULE_4__Stream__["a" /* default */])(that.Connection, { streamID: arg.id,
      local: localStreams.has(arg.id),
      audio: arg.audio,
      video: arg.video,
      data: arg.data,
      label: arg.label,
      screen: arg.screen,
      attributes: arg.attributes });
    stream.room = that;
    remoteStreams.add(arg.id, stream);
    const evt = Object(__WEBPACK_IMPORTED_MODULE_2__Events__["f" /* StreamEvent */])({ type: 'stream-added', stream });
    that.dispatchEvent(evt);
  };

  const socketOnErizoMessage = (arg) => {
    let stream;
    if (arg.peerId) {
      stream = remoteStreams.get(arg.peerId);
    } else {
      stream = localStreams.get(arg.streamId);
    }

    if (stream && stream.pc && !stream.failed) {
      stream.pc.processSignalingMessage(arg.mess);
    }
  };

  const socketOnPeerMessage = (arg) => {
    let stream = localStreams.get(arg.streamId);

    if (stream && !stream.failed) {
      stream.pc.get(arg.peerSocket).processSignalingMessage(arg.msg);
    } else {
      stream = remoteStreams.get(arg.streamId);

      if (!stream.pc) {
        createRemoteStreamP2PConnection(stream, arg.peerSocket);
      }
      stream.pc.processSignalingMessage(arg.msg);
    }
  };

  const socketOnPublishMe = (arg) => {
    const myStream = localStreams.get(arg.streamId);

    createLocalStreamP2PConnection(myStream, arg.peerSocket);
  };

  const socketOnUnpublishMe = (arg) => {
    const myStream = localStreams.get(arg.streamId);
    if (myStream) {
      removeLocalStreamP2PConnection(myStream, arg.peerSocket);
    }
  };

  const socketOnBandwidthAlert = (arg) => {
    __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].info('Bandwidth Alert on', arg.streamID, 'message',
                        arg.message, 'BW:', arg.bandwidth);
    if (arg.streamID) {
      const stream = remoteStreams.get(arg.streamID);
      if (stream && !stream.failed) {
        const evt = Object(__WEBPACK_IMPORTED_MODULE_2__Events__["f" /* StreamEvent */])({ type: 'bandwidth-alert',
          stream,
          msg: arg.message,
          bandwidth: arg.bandwidth });
        stream.dispatchEvent(evt);
      }
    }
  };

  // We receive an event of new data in one of the streams
  const socketOnDataStream = (arg) => {
    const stream = remoteStreams.get(arg.id);
    const evt = Object(__WEBPACK_IMPORTED_MODULE_2__Events__["f" /* StreamEvent */])({ type: 'stream-data', msg: arg.msg, stream });
    stream.dispatchEvent(evt);
  };

  // We receive an event of new data in one of the streams
  const socketOnUpdateAttributeStream = (arg) => {
    const stream = remoteStreams.get(arg.id);
    const evt = Object(__WEBPACK_IMPORTED_MODULE_2__Events__["f" /* StreamEvent */])({ type: 'stream-attributes-update',
      attrs: arg.attrs,
      stream });
    stream.updateLocalAttributes(arg.attrs);
    stream.dispatchEvent(evt);
  };

  // We receive an event of a stream removed from the room
  const socketOnRemoveStream = (arg) => {
    let stream = localStreams.get(arg.id);
    if (stream) {
      onStreamFailed(stream);
      return;
    }
    stream = remoteStreams.get(arg.id);
    if (stream) {
      removeStream(stream);
      remoteStreams.remove(arg.id);
      const evt = Object(__WEBPACK_IMPORTED_MODULE_2__Events__["f" /* StreamEvent */])({ type: 'stream-removed', stream });
      that.dispatchEvent(evt);
    }
  };

  // The socket has disconnected
  const socketOnDisconnect = () => {
    __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].info('Socket disconnected, lost connection to ErizoController');
    if (that.state !== DISCONNECTED) {
      __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].error('Unexpected disconnection from ErizoController');
      const disconnectEvt = Object(__WEBPACK_IMPORTED_MODULE_2__Events__["e" /* RoomEvent */])({ type: 'room-disconnected',
        message: 'unexpected-disconnection' });
      that.dispatchEvent(disconnectEvt);
    }
  };

  const socketOnICEConnectionFailed = (arg) => {
    let stream;
    if (!arg.streamId) {
      return;
    }
    const message = `ICE Connection Failed on ${arg.type} ${arg.streamId} ${that.state}`;
    __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].error(message);
    if (arg.type === 'publish') {
      stream = localStreams.get(arg.streamId);
    } else {
      stream = remoteStreams.get(arg.streamId);
    }
    onStreamFailed(stream, message);
  };

  const socketOnError = (e) => {
    __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].error('Cannot connect to erizo Controller');
    const connectEvt = Object(__WEBPACK_IMPORTED_MODULE_2__Events__["e" /* RoomEvent */])({ type: 'room-error', message: e });
    that.dispatchEvent(connectEvt);
  };

  const sendDataSocketFromStreamEvent = (evt) => {
    const stream = evt.stream;
    const msg = evt.msg;
    if (stream.local) {
      socket.sendMessage('sendDataStream', { id: stream.getID(), msg });
    } else {
      __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].error('You can not send data through a remote stream');
    }
  };

  const updateAttributesFromStreamEvent = (evt) => {
    const stream = evt.stream;
    const attrs = evt.attrs;
    if (stream.local) {
      stream.updateLocalAttributes(attrs);
      socket.sendMessage('updateStreamAttributes', { id: stream.getID(), attrs });
    } else {
      __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].error('You can not update attributes in a remote stream');
    }
  };

  const socketEventToArgs = (func, event) => {
    if (event.args) {
      func(...event.args);
    } else {
      func();
    }
  };

  const createSdpConstraints = (type, stream, options) => ({
    state: type,
    data: stream.hasData(),
    audio: stream.hasAudio(),
    video: stream.hasVideo(),
    label: stream.getLabel(),
    screen: stream.hasScreen(),
    attributes: stream.getAttributes(),
    metadata: options.metadata,
    createOffer: options.createOffer,
    muteStream: options.muteStream,
  });

  const populateStreamFunctions = (id, streamInput, error, callback = () => {}) => {
    const stream = streamInput;
    if (id === null) {
      __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].error('Error when publishing the stream', error);
      // Unauth -1052488119
      // Network -5
      callback(undefined, error);
      return;
    }
    __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].info('Stream published');
    stream.getID = () => id;
    stream.on('internal-send-data', sendDataSocketFromStreamEvent);
    stream.on('internal-set-attributes', updateAttributesFromStreamEvent);
    localStreams.add(id, stream);
    stream.room = that;
    callback(id);
  };

  const publishExternal = (streamInput, options, callback = () => {}) => {
    const stream = streamInput;
    let type;
    let arg;
    if (stream.url) {
      type = 'url';
      arg = stream.url;
    } else {
      type = 'recording';
      arg = stream.recording;
    }
    __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].info('Checking publish options for', stream.getID());
    stream.checkOptions(options);
    socket.sendSDP('publish', createSdpConstraints(type, stream, options), arg,
      (id, error) => {
        populateStreamFunctions(id, stream, error, callback);
      });
  };

  const publishP2P = (streamInput, options, callback = () => {}) => {
    const stream = streamInput;
    // We save them now to be used when actually publishing in P2P mode.
    stream.maxAudioBW = options.maxAudioBW;
    stream.maxVideoBW = options.maxVideoBW;
    socket.sendSDP('publish', createSdpConstraints('p2p', stream, options), undefined, (id, error) => {
      populateStreamFunctions(id, stream, error, callback);
    });
  };

  const publishData = (streamInput, options, callback = () => {}) => {
    const stream = streamInput;
    socket.sendSDP('publish', createSdpConstraints('data', stream, options), undefined, (id, error) => {
      populateStreamFunctions(id, stream, error, callback);
    });
  };

  const publishErizo = (streamInput, options, callback = () => {}) => {
    const stream = streamInput;
    __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].info('Publishing to Erizo Normally, is createOffer', options.createOffer);
    const constraints = createSdpConstraints('erizo', stream, options);
    constraints.minVideoBW = options.minVideoBW;
    constraints.maxVideoBW = options.maxVideoBW;
    constraints.scheme = options.scheme;

    socket.sendSDP('publish', constraints, undefined, (id, erizoId, error) => {
      if (id === null) {
        __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].error('Error publishing stream', error);
        callback(undefined, error);
        return;
      }
      populateStreamFunctions(id, stream, error, undefined);
      createLocalStreamErizoConnection(stream, erizoId, options);
      callback(id);
    });
  };

  const getVideoConstraints = (stream, video) => {
    const hasVideo = video && stream.hasVideo();
    const width = video && video.width;
    const height = video && video.height;
    const frameRate = video && video.frameRate;
    if (width || height || frameRate) {
      return { width, height, frameRate };
    }
    return hasVideo;
  };

  const subscribeErizo = (streamInput, optionsInput, callback = () => {}) => {
    const stream = streamInput;
    const options = optionsInput;
    options.maxVideoBW = options.maxVideoBW || spec.defaultVideoBW;
    if (options.maxVideoBW > spec.maxVideoBW) {
      options.maxVideoBW = spec.maxVideoBW;
    }
    options.audio = (options.audio === undefined) ? true : options.audio;
    options.video = (options.video === undefined) ? true : options.video;
    options.data = (options.data === undefined) ? true : options.data;
    stream.checkOptions(options);
    const constraint = { streamId: stream.getID(),
      audio: options.audio && stream.hasAudio(),
      video: getVideoConstraints(stream, options.video),
      maxVideoBW: options.maxVideoBW,
      data: options.data && stream.hasData(),
      browser: that.ConnectionHelpers.getBrowser(),
      createOffer: options.createOffer,
      metadata: options.metadata,
      muteStream: options.muteStream,
      slideShowMode: options.slideShowMode };
    socket.sendSDP('subscribe', constraint, undefined, (result, erizoId, error) => {
      if (result === null) {
        __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].error('Error subscribing to stream ', error);
        callback(undefined, error);
        return;
      }

      __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].info('Subscriber added');
      createRemoteStreamErizoConnection(stream, erizoId, options);

      callback(true);
    });
  };

  const subscribeData = (streamInput, options, callback = () => {}) => {
    const stream = streamInput;
    socket.sendSDP('subscribe',
      { streamId: stream.getID(),
        data: options.data,
        metadata: options.metadata },
      undefined, (result, error) => {
        if (result === null) {
          __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].error('Error subscribing to stream ', error);
          callback(undefined, error);
          return;
        }
        __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].info('Stream subscribed');
        const evt = Object(__WEBPACK_IMPORTED_MODULE_2__Events__["f" /* StreamEvent */])({ type: 'stream-subscribed', stream });
        that.dispatchEvent(evt);
        callback(true);
      });
  };

  const clearAll = () => {
    that.state = DISCONNECTED;
    socket.state = socket.DISCONNECTED;

    // Remove all streams
    remoteStreams.forEach((stream, id) => {
      removeStream(stream);
      remoteStreams.remove(id);
      if (stream && !stream.failed) {
        const evt2 = Object(__WEBPACK_IMPORTED_MODULE_2__Events__["f" /* StreamEvent */])({ type: 'stream-removed', stream });
        that.dispatchEvent(evt2);
      }
    });
    remoteStreams = Object(__WEBPACK_IMPORTED_MODULE_5__utils_ErizoMap__["a" /* default */])();

    // Close Peer Connections
    localStreams.forEach((stream, id) => {
      removeStream(stream);
      localStreams.remove(id);
    });
    localStreams = Object(__WEBPACK_IMPORTED_MODULE_5__utils_ErizoMap__["a" /* default */])();

    // Close socket
    try {
      socket.disconnect();
    } catch (error) {
      __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].debug('Socket already disconnected');
    }
    socket = undefined;
  };

  // Public functions

  // It stablishes a connection to the room.
  // Once it is done it throws a RoomEvent("room-connected")
  that.connect = (options = {}) => {
    const token = __WEBPACK_IMPORTED_MODULE_6__utils_Base64__["a" /* default */].decodeBase64(spec.token);

    if (that.state !== DISCONNECTED) {
      __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].warning('Room already connected');
    }

    // 1- Connect to Erizo-Controller
    that.state = CONNECTING;
    socket.connect(JSON.parse(token), options, (response) => {
      let stream;
      const streamList = [];
      const streams = response.streams || [];
      const roomId = response.id;

      that.p2p = response.p2p;
      that.iceServers = response.iceServers;
      that.state = CONNECTED;
      spec.singlePC = response.singlePC;
      spec.defaultVideoBW = response.defaultVideoBW;
      spec.maxVideoBW = response.maxVideoBW;

      // 2- Retrieve list of streams
      const streamIndices = Object.keys(streams);
      for (let index = 0; index < streamIndices.length; index += 1) {
        const arg = streams[streamIndices[index]];
        stream = Object(__WEBPACK_IMPORTED_MODULE_4__Stream__["a" /* default */])(that.ConnectionHelpers, { streamID: arg.id,
          local: false,
          audio: arg.audio,
          video: arg.video,
          data: arg.data,
          label: arg.label,
          screen: arg.screen,
          attributes: arg.attributes });
        stream.room = that;
        streamList.push(stream);
        remoteStreams.add(arg.id, stream);
      }

      // 3 - Update RoomID
      that.roomID = roomId;

      __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].info(`Connected to room ${that.roomID}`);

      const connectEvt = Object(__WEBPACK_IMPORTED_MODULE_2__Events__["e" /* RoomEvent */])({ type: 'room-connected', streams: streamList });
      that.dispatchEvent(connectEvt);
    }, (error) => {
      __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].error(`Not Connected! Error: ${error}`);
      const connectEvt = Object(__WEBPACK_IMPORTED_MODULE_2__Events__["e" /* RoomEvent */])({ type: 'room-error', message: error });
      that.dispatchEvent(connectEvt);
    });
  };

  // It disconnects from the room, dispatching a new RoomEvent("room-disconnected")
  that.disconnect = () => {
    __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].debug('Disconnection requested');
    // 1- Disconnect from room
    const disconnectEvt = Object(__WEBPACK_IMPORTED_MODULE_2__Events__["e" /* RoomEvent */])({ type: 'room-disconnected',
      message: 'expected-disconnection' });
    that.dispatchEvent(disconnectEvt);
  };

  // It publishes the stream provided as argument. Once it is added it throws a
  // StreamEvent("stream-added").
  that.publish = (streamInput, optionsInput = {}, callback = () => {}) => {
    const stream = streamInput;
    const options = optionsInput;

    options.maxVideoBW = options.maxVideoBW || spec.defaultVideoBW;
    if (options.maxVideoBW > spec.maxVideoBW) {
      options.maxVideoBW = spec.maxVideoBW;
    }

    if (options.minVideoBW === undefined) {
      options.minVideoBW = 0;
    }

    if (options.minVideoBW > spec.defaultVideoBW) {
      options.minVideoBW = spec.defaultVideoBW;
    }

    stream.forceTurn = options.forceTurn;

    options.simulcast = options.simulcast || false;

    options.muteStream = {
      audio: stream.audioMuted,
      video: stream.videoMuted,
    };

    // 1- If the stream is not local or it is a failed stream we do nothing.
    if (stream && stream.local && !stream.failed && !localStreams.has(stream.getID())) {
      // 2- Publish Media Stream to Erizo-Controller
      if (stream.hasMedia()) {
        if (stream.isExternal()) {
          publishExternal(stream, options, callback);
        } else if (that.p2p) {
          publishP2P(stream, options, callback);
        } else {
          publishErizo(stream, options, callback);
        }
      } else if (stream.hasData()) {
        publishData(stream, options, callback);
      }
    } else {
      __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].error('Trying to publish invalid stream');
      callback(undefined, 'Invalid Stream');
    }
  };

  // Returns callback(id, error)
  that.startRecording = (stream, callback = () => {}) => {
    if (stream === undefined) {
      __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].error('Trying to start recording on an invalid stream', stream);
      callback(undefined, 'Invalid Stream');
      return;
    }
    __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].debug(`Start Recording stream: ${stream.getID()}`);
    socket.sendMessage('startRecorder', { to: stream.getID() }, (id, error) => {
      if (id === null) {
        __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].error('Error on start recording', error);
        callback(undefined, error);
        return;
      }

      __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].info('Start recording', id);
      callback(id);
    });
  };

  // Returns callback(id, error)
  that.stopRecording = (recordingId, callback = () => {}) => {
    socket.sendMessage('stopRecorder', { id: recordingId }, (result, error) => {
      if (result === null) {
        __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].error('Error on stop recording', error);
        callback(undefined, error);
        return;
      }
      __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].info('Stop recording', recordingId);
      callback(true);
    });
  };

  // It unpublishes the local stream in the room, dispatching a StreamEvent("stream-removed")
  that.unpublish = (streamInput, callback = () => {}) => {
    const stream = streamInput;
    // Unpublish stream from Erizo-Controller
    if (stream && stream.local) {
      // Media stream
      socket.sendMessage('unpublish', stream.getID(), (result, error) => {
        if (result === null) {
          __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].error('Error unpublishing stream', error);
          callback(undefined, error);
          return;
        }

        delete stream.failed;
        callback(true);
      });

      __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].info('Stream unpublished');
      stream.room = undefined;
      if (stream.hasMedia() && !stream.isExternal()) {
        const localStream = localStreams.has(stream.getID()) ?
                              localStreams.get(stream.getID()) : stream;
        removeStream(localStream);
      }
      localStreams.remove(stream.getID());

      stream.getID = () => {};
      stream.off('internal-send-data', sendDataSocketFromStreamEvent);
      stream.off('internal-set-attributes', updateAttributesFromStreamEvent);
    } else {
      const error = 'Cannot unpublish, stream does not exist or is not local';
      __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].error(error);
      callback(undefined, error);
    }
  };

  that.sendControlMessage = (stream, type, action) => {
    if (stream && stream.getID()) {
      const msg = { type: 'control', action };
      socket.sendSDP('signaling_message', { streamId: stream.getID(), msg });
    }
  };

  // It subscribe to a remote stream and draws it inside the HTML tag given by the ID='elementID'
  that.subscribe = (streamInput, optionsInput = {}, callback = () => {}) => {
    const stream = streamInput;
    const options = optionsInput;

    if (stream && !stream.local && !stream.failed) {
      if (stream.hasMedia()) {
        // 1- Subscribe to Stream
        if (!stream.hasVideo() && !stream.hasScreen()) {
          options.video = false;
        }
        if (!stream.hasAudio()) {
          options.audio = false;
        }

        options.muteStream = {
          audio: stream.audioMuted,
          video: stream.videoMuted,
        };

        stream.forceTurn = options.forceTurn;

        if (that.p2p) {
          const streamToSubscribe = remoteStreams.get(stream.getID());
          streamToSubscribe.maxAudioBW = options.maxAudioBW;
          streamToSubscribe.maxVideoBW = options.maxVideoBW;
          socket.sendSDP('subscribe', { streamId: stream.getID(), metadata: options.metadata });
          callback(true);
        } else {
          subscribeErizo(stream, options, callback);
        }
      } else if (stream.hasData() && options.data !== false) {
        subscribeData(stream, options, callback);
      } else {
        __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].warning('There\'s nothing to subscribe to');
        callback(undefined, 'Nothing to subscribe to');
        return;
      }
      // Subscribe to stream stream
      __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].info(`Subscribing to: ${stream.getID()}`);
    } else {
      let error = 'Error on subscribe';
      if (!stream) {
        __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].warning('Cannot subscribe to invalid stream');
        error = 'Invalid or undefined stream';
      } else if (stream.local) {
        __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].warning('Cannot subscribe to local stream, you should ' +
                         'subscribe to the remote version of your local stream');
        error = 'Local copy of stream';
      } else if (stream.failed) {
        __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].warning('Cannot subscribe to failed stream.');
        error = 'Failed stream';
      }
      callback(undefined, error);
    }
  };

  // It unsubscribes from the stream, removing the HTML element.
  that.unsubscribe = (streamInput, callback = () => {}) => {
    const stream = streamInput;
    // Unsubscribe from stream
    if (socket !== undefined) {
      if (stream && !stream.local) {
        socket.sendMessage('unsubscribe', stream.getID(), (result, error) => {
          if (result === null) {
            callback(undefined, error);
            return;
          }
          removeStream(stream);
          delete stream.failed;
          callback(true);
        }, () => {
          __WEBPACK_IMPORTED_MODULE_7__utils_Logger__["a" /* default */].error('Error calling unsubscribe.');
        });
      }
    }
  };

  that.getStreamStats = (stream, callback = () => {}) => {
    if (!socket) {
      return 'Error getting stats - no socket';
    }
    if (!stream) {
      return 'Error getting stats - no stream';
    }

    socket.sendMessage('getStreamStats', stream.getID(), (result) => {
      if (result) {
        callback(result);
      }
    });
    return undefined;
  };

  // It searchs the streams that have "name" attribute with "value" value
  that.getStreamsByAttribute = (name, value) => {
    const streams = [];

    remoteStreams.forEach((stream) => {
      if (stream.getAttributes() !== undefined && stream.getAttributes()[name] === value) {
        streams.push(stream);
      }
    });

    return streams;
  };

  that.on('room-disconnected', clearAll);

  socket.on('onAddStream', socketEventToArgs.bind(null, socketOnAddStream));
  socket.on('signaling_message_erizo', socketEventToArgs.bind(null, socketOnErizoMessage));
  socket.on('signaling_message_peer', socketEventToArgs.bind(null, socketOnPeerMessage));
  socket.on('publish_me', socketEventToArgs.bind(null, socketOnPublishMe));
  socket.on('unpublish_me', socketEventToArgs.bind(null, socketOnUnpublishMe));
  socket.on('onBandwidthAlert', socketEventToArgs.bind(null, socketOnBandwidthAlert));
  socket.on('onDataStream', socketEventToArgs.bind(null, socketOnDataStream));
  socket.on('onUpdateAttributeStream', socketEventToArgs.bind(null, socketOnUpdateAttributeStream));
  socket.on('onRemoveStream', socketEventToArgs.bind(null, socketOnRemoveStream));
  socket.on('disconnect', socketEventToArgs.bind(null, socketOnDisconnect));
  socket.on('connection_failed', socketEventToArgs.bind(null, socketOnICEConnectionFailed));
  socket.on('error', socketEventToArgs.bind(null, socketOnError));

  return that;
};

/* harmony default export */ __webpack_exports__["a"] = (Room);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__webrtc_stacks_ChromeStableStack__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__webrtc_stacks_FirefoxStack__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__webrtc_stacks_FcStack__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Logger__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Events__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_ErizoMap__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_ConnectionHelpers__ = __webpack_require__(8);
/* global */








const EventEmitterConst = __WEBPACK_IMPORTED_MODULE_4__Events__["c" /* EventEmitter */]; // makes google-closure-compiler happy
let ErizoSessionId = 103;

class ErizoConnection extends EventEmitterConst {
  constructor(specInput, erizoId = undefined) {
    super();
    __WEBPACK_IMPORTED_MODULE_3__utils_Logger__["a" /* default */].debug('Building a new Connection');
    this.stack = {};

    this.erizoId = erizoId;
    this.streamsMap = Object(__WEBPACK_IMPORTED_MODULE_5__utils_ErizoMap__["a" /* default */])(); // key:streamId, value: stream

    const spec = specInput;
    ErizoSessionId += 1;
    spec.sessionId = ErizoSessionId;
    this.sessionId = ErizoSessionId;

    // Check which WebRTC Stack is installed.
    this.browser = __WEBPACK_IMPORTED_MODULE_6__utils_ConnectionHelpers__["a" /* default */].getBrowser();
    if (this.browser === 'fake') {
      __WEBPACK_IMPORTED_MODULE_3__utils_Logger__["a" /* default */].warning('Publish/subscribe video/audio streams not supported in erizofc yet');
      this.stack = Object(__WEBPACK_IMPORTED_MODULE_2__webrtc_stacks_FcStack__["a" /* default */])(spec);
    } else if (this.browser === 'mozilla') {
      __WEBPACK_IMPORTED_MODULE_3__utils_Logger__["a" /* default */].debug('Firefox Stack');
      this.stack = Object(__WEBPACK_IMPORTED_MODULE_1__webrtc_stacks_FirefoxStack__["a" /* default */])(spec);
    } else if (this.browser === 'safari') {
      __WEBPACK_IMPORTED_MODULE_3__utils_Logger__["a" /* default */].debug('Safari using Chrome Stable Stack');
      this.stack = Object(__WEBPACK_IMPORTED_MODULE_0__webrtc_stacks_ChromeStableStack__["a" /* default */])(spec);
    } else if (this.browser === 'chrome-stable' || this.browser === 'electron') {
      __WEBPACK_IMPORTED_MODULE_3__utils_Logger__["a" /* default */].debug('Chrome Stable Stack');
      this.stack = Object(__WEBPACK_IMPORTED_MODULE_0__webrtc_stacks_ChromeStableStack__["a" /* default */])(spec);
    } else {
      __WEBPACK_IMPORTED_MODULE_3__utils_Logger__["a" /* default */].error('No stack available for this browser');
      throw new Error('WebRTC stack not available');
    }
    if (!this.stack.updateSpec) {
      this.stack.updateSpec = (newSpec, callback = () => {}) => {
        __WEBPACK_IMPORTED_MODULE_3__utils_Logger__["a" /* default */].error('Update Configuration not implemented in this browser');
        callback('unimplemented');
      };
    }
    if (!this.stack.setSignallingCallback) {
      this.stack.setSignallingCallback = () => {
        __WEBPACK_IMPORTED_MODULE_3__utils_Logger__["a" /* default */].error('setSignallingCallback is not implemented in this stack');
      };
    }

    // PeerConnection Events
    if (this.stack.peerConnection) {
      this.peerConnection = this.stack.peerConnection; // For backwards compatibility
      this.stack.peerConnection.onaddstream = (evt) => {
        this.emit(Object(__WEBPACK_IMPORTED_MODULE_4__Events__["a" /* ConnectionEvent */])({ type: 'add-stream', stream: evt.stream }));
      };

      this.stack.peerConnection.onremovestream = (evt) => {
        this.emit(Object(__WEBPACK_IMPORTED_MODULE_4__Events__["a" /* ConnectionEvent */])({ type: 'remove-stream', stream: evt.stream }));
      };

      this.stack.peerConnection.oniceconnectionstatechange = () => {
        const state = this.stack.peerConnection.iceConnectionState;
        this.emit(Object(__WEBPACK_IMPORTED_MODULE_4__Events__["a" /* ConnectionEvent */])({ type: 'ice-state-change', state }));
      };
    }
  }

  close() {
    __WEBPACK_IMPORTED_MODULE_3__utils_Logger__["a" /* default */].debug('Closing ErizoConnection');
    this.streamsMap.clear();
    this.stack.close();
  }

  createOffer(isSubscribe, forceOfferToReceive, streamId) {
    this.stack.createOffer(isSubscribe, forceOfferToReceive, streamId);
  }

  addStream(stream) {
    __WEBPACK_IMPORTED_MODULE_3__utils_Logger__["a" /* default */].debug(`message: Adding stream to Connection, streamId: ${stream.getID()}`);
    this.streamsMap.add(stream.getID(), stream);
    if (stream.local) {
      this.stack.addStream(stream.stream);
    }
  }

  removeStream(stream) {
    const streamId = stream.getID();
    if (!this.streamsMap.has(streamId)) {
      __WEBPACK_IMPORTED_MODULE_3__utils_Logger__["a" /* default */].warning(`message: Cannot remove stream not in map, streamId: ${streamId}`);
      return;
    }
    if (stream.local) {
      this.stack.removeStream(stream.stream);
    }
    this.streamsMap.remove(streamId);
  }

  processSignalingMessage(msg) {
    this.stack.processSignalingMessage(msg);
  }

  sendSignalingMessage(msg) {
    this.stack.sendSignalingMessage(msg);
  }

  setSimulcast(enable) {
    this.stack.setSimulcast(enable);
  }

  setVideo(video) {
    this.stack.setVideo(video);
  }

  setAudio(audio) {
    this.stack.setAudio(audio);
  }

  updateSpec(configInput, streamId, callback) {
    this.stack.updateSpec(configInput, streamId, callback);
  }
}

class ErizoConnectionManager {
  constructor() {
    this.ErizoConnectionsMap = new Map(); // key: erizoId, value: {connectionId: connection}
  }

  getOrBuildErizoConnection(specInput, erizoId = undefined, singlePC = false) {
    __WEBPACK_IMPORTED_MODULE_3__utils_Logger__["a" /* default */].debug(`message: getOrBuildErizoConnection, erizoId: ${erizoId}`);
    let connection = {};

    if (erizoId === undefined) {
      // we have no erizoJS id - p2p
      return new ErizoConnection(specInput);
    }
    if (singlePC) {
      let connectionEntry;
      if (this.ErizoConnectionsMap.has(erizoId)) {
        connectionEntry = this.ErizoConnectionsMap.get(erizoId);
      } else {
        connectionEntry = {};
        this.ErizoConnectionsMap.set(erizoId, connectionEntry);
      }
      if (!connectionEntry['single-pc']) {
        connectionEntry['single-pc'] = new ErizoConnection(specInput, erizoId);
      }
      connection = connectionEntry['single-pc'];
    } else {
      connection = new ErizoConnection(specInput, erizoId);
      if (this.ErizoConnectionsMap.has(erizoId)) {
        this.ErizoConnectionsMap.get(erizoId)[connection.sessionId] = connection;
      } else {
        const connectionEntry = {};
        connectionEntry[connection.sessionId] = connection;
        this.ErizoConnectionsMap.set(erizoId, connectionEntry);
      }
    }
    if (specInput.simulcast) {
      connection.setSimulcast(specInput.simulcast);
    }
    if (specInput.video) {
      connection.setVideo(specInput.video);
    }
    if (specInput.audio) {
      connection.setVideo(specInput.audio);
    }

    return connection;
  }

  maybeCloseConnection(connection) {
    __WEBPACK_IMPORTED_MODULE_3__utils_Logger__["a" /* default */].debug(`Trying to remove connection ${connection.sessionId}
       with erizoId ${connection.erizoId}`);
    if (connection.streamsMap.size() === 0) {
      connection.close();
      if (this.ErizoConnectionsMap.get(connection.erizoId) !== undefined) {
        delete this.ErizoConnectionsMap.get(connection.erizoId)['single-pc'];
        delete this.ErizoConnectionsMap.get(connection.erizoId)[connection.sessionId];
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ErizoConnectionManager);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseStack__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_SdpHelpers__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_Logger__ = __webpack_require__(0);




const ChromeStableStack = (specInput) => {
  __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].info('Starting Chrome stable stack', specInput);
  const spec = specInput;
  const that = Object(__WEBPACK_IMPORTED_MODULE_0__BaseStack__["a" /* default */])(specInput);
  const defaultSimulcastSpatialLayers = 2;
  that.mediaConstraints = {
    offerToReceiveVideo: true,
    offerToReceiveAudio: true,
  };

  that.enableSimulcast = (sdpInput) => {
    let result;
    let sdp = sdpInput;
    if (!that.simulcast) {
      return sdp;
    }

    // TODO(javier): Improve the way we check for current video ssrcs
    const matchGroup = sdp.match(/a=ssrc-group:FID ([0-9]*) ([0-9]*)\r?\n/);
    if (!matchGroup || (matchGroup.length <= 0)) {
      return sdp;
    }
    // TODO (pedro): Consider adding these to SdpHelpers
    const numSpatialLayers = that.simulcast.numSpatialLayers || defaultSimulcastSpatialLayers;
    const baseSsrc = parseInt(matchGroup[1], 10);
    const baseSsrcRtx = parseInt(matchGroup[2], 10);
    const cname = sdp.match(new RegExp(`a=ssrc:${matchGroup[1]} cname:(.*)\r?\n`))[1];
    const msid = sdp.match(new RegExp(`a=ssrc:${matchGroup[1]} msid:(.*)\r?\n`))[1];
    const mslabel = sdp.match(new RegExp(`a=ssrc:${matchGroup[1]} mslabel:(.*)\r?\n`))[1];
    const label = sdp.match(new RegExp(`a=ssrc:${matchGroup[1]} label:(.*)\r?\n`))[1];

    sdp.match(new RegExp(`a=ssrc:${matchGroup[1]}.*\r?\n`, 'g')).forEach((line) => {
      sdp = sdp.replace(line, '');
    });
    sdp.match(new RegExp(`a=ssrc:${matchGroup[2]}.*\r?\n`, 'g')).forEach((line) => {
      sdp = sdp.replace(line, '');
    });

    const spatialLayers = [baseSsrc];
    const spatialLayersRtx = [baseSsrcRtx];

    for (let i = 1; i < numSpatialLayers; i += 1) {
      spatialLayers.push(baseSsrc + (i * 1000));
      spatialLayersRtx.push(baseSsrcRtx + (i * 1000));
    }

    result = __WEBPACK_IMPORTED_MODULE_1__utils_SdpHelpers__["a" /* default */].addSim(spatialLayers);
    let spatialLayerId;
    let spatialLayerIdRtx;
    for (let i = 0; i < spatialLayers.length; i += 1) {
      spatialLayerId = spatialLayers[i];
      spatialLayerIdRtx = spatialLayersRtx[i];
      result += __WEBPACK_IMPORTED_MODULE_1__utils_SdpHelpers__["a" /* default */].addGroup(spatialLayerId, spatialLayerIdRtx);
    }

    for (let i = 0; i < spatialLayers.length; i += 1) {
      spatialLayerId = spatialLayers[i];
      spatialLayerIdRtx = spatialLayersRtx[i];
      result += __WEBPACK_IMPORTED_MODULE_1__utils_SdpHelpers__["a" /* default */].addSpatialLayer(cname,
        msid, mslabel, label, spatialLayerId, spatialLayerIdRtx);
    }
    result += 'a=x-google-flag:conference\r\n';
    return sdp.replace(matchGroup[0], result);
  };

  that.setStartVideoBW = (sdpInfo) => {
    if (that.video && spec.startVideoBW) {
      __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].debug(`startVideoBW requested: ${spec.startVideoBW}`);
      __WEBPACK_IMPORTED_MODULE_1__utils_SdpHelpers__["a" /* default */].setParamForCodecs(sdpInfo, 'video', 'x-google-start-bitrate', spec.startVideoBW);
    }
  };

  that.setHardMinVideoBW = (sdpInfo) => {
    if (that.video && spec.hardMinVideoBW) {
      __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* default */].debug(`hardMinVideoBW requested: ${spec.hardMinVideoBW}`);
      __WEBPACK_IMPORTED_MODULE_1__utils_SdpHelpers__["a" /* default */].setParamForCodecs(sdpInfo, 'video', 'x-google-min-bitrate', spec.hardMinVideoBW);
    }
  };

  return that;
};

/* harmony default export */ __webpack_exports__["a"] = (ChromeStableStack);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

const SDPInfo = __webpack_require__(29);
const CandidateInfo = __webpack_require__(11);
const CodecInfo = __webpack_require__(12);
const DTLSInfo = __webpack_require__(13);
const ICEInfo = __webpack_require__(14);
const MediaInfo = __webpack_require__(15);
const Setup = __webpack_require__(4);
const SourceGroupInfo = __webpack_require__(17);
const SourceInfo = __webpack_require__(18);
const StreamInfo = __webpack_require__(19);
const TrackInfo = __webpack_require__(20);
const Direction = __webpack_require__(6);

module.exports = {
  SDPInfo,
  CandidateInfo,
  CodecInfo,
  DTLSInfo,
  ICEInfo,
  MediaInfo,
  Setup,
  SourceGroupInfo,
  SourceInfo,
  StreamInfo,
  TrackInfo,
  Direction,
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

const SDPTransform = __webpack_require__(30);  // eslint-disable-line
const CandidateInfo = __webpack_require__(11);
const CodecInfo = __webpack_require__(12);
const DTLSInfo = __webpack_require__(13);
const ICEInfo = __webpack_require__(14);
const MediaInfo = __webpack_require__(15);
const Setup = __webpack_require__(4);
const Direction = __webpack_require__(6);
const DirectionWay = __webpack_require__(2);
const SourceGroupInfo = __webpack_require__(17);
const SourceInfo = __webpack_require__(18);
const StreamInfo = __webpack_require__(19);
const TrackInfo = __webpack_require__(20);
const TrackEncodingInfo = __webpack_require__(33);
const SimulcastInfo = __webpack_require__(16);
const SimulcastStreamInfo = __webpack_require__(34);
const RIDInfo = __webpack_require__(35);

class SDPInfo {
  constructor(version) {
    this.version = version || 1;
    this.name = 'sdp-semantic';
    this.streams = new Map();
    this.medias = [];
    this.candidates = [];
    this.connection = null;
    this.ice = null;
    this.dtls = null;
  }

  clone() {
    const cloned = new SDPInfo(this.version);
    cloned.name = this.name;
    cloned.setConnection(this.connection);
    this.medias.forEach((media) => {
      cloned.addMedia(media.clone());
    });
    this.streams.forEach((stream) => {
      cloned.addStream(stream.clone());
    });
    this.candidates.forEach((candidate) => {
      cloned.addCandidate(candidate.clone());
    });
    cloned.setICE(this.ice.clone());
    cloned.setDTLS(this.dtls.clone());
    return cloned;
  }

  plain() {
    const plain = {
      version: this.version,
      name: this.name,
      streams: [],
      medias: [],
      candidates: [],
      connection: this.connection,
    };
    this.medias.forEach((media) => {
      plain.medias.push(media.plain());
    });
    this.streams.forEach((stream) => {
      plain.streams.push(stream.plain());
    });
    this.candidates.forEach((candidate) => {
      plain.candidates.push(candidate.plain());
    });
    plain.ice = this.ice && this.ice.plain();
    plain.dtls = this.dtls && this.dtls.plain();
    return plain;
  }

  setVersion(version) {
    this.version = version;
  }

  setOrigin(origin) {
    this.origin = origin;
  }

  setName(name) {
    this.name = name;
  }

  getConnection() {
    return this.connection;
  }

  setConnection(connection) {
    this.connection = connection;
  }

  setTiming(timing) {
    this.timing = timing;
  }

  addMedia(media) {
    this.medias.push(media);
  }

  getMedia(type) {
    let result;
    this.medias.forEach((media) => {
      if (media.getType().toLowerCase() === type.toLowerCase()) {
        result = media;
      }
    });
    return result;
  }

  getMedias(type) {
    if (!type) {
      return this.medias;
    }
    const medias = [];
    this.medias.forEach((media) => {
      if (media.getType().toLowerCase() === type.toLowerCase()) {
        medias.push(media);
      }
    });
    return medias;
  }

  getMediaById(msid) {
    let result;
    this.medias.forEach((media) => {
      if (media.getId().toLowerCase() === msid.toLowerCase()) {
        result = media;
      }
    });
    return result;
  }

  getVersion() {
    return this.version;
  }

  getDTLS() {
    return this.dtls;
  }

  setDTLS(dtlsInfo) {
    this.dtls = dtlsInfo;
  }

  getICE() {
    return this.ice;
  }

  setICE(iceInfo) {
    this.ice = iceInfo;
  }

  addCandidate(candidate) {
    this.candidates.push(candidate);
  }

  addCandidates(candidates) {
    candidates.forEach((candidate) => {
      this.addCandidate(candidate);
    });
  }

  getCandidates() {
    return this.candidates;
  }

  getStream(id) {
    return this.streams.get(id);
  }

  getStreams() {
    return this.streams;
  }

  getFirstStream() {
    if (this.streams.values().length > 0) {
      return this.streams.values()[0];
    }
    return null;
  }

  addStream(stream) {
    this.streams.set(stream.getId(), stream);
  }

  removeStream(stream) {
    this.streams.delete(stream.getId());
  }

  toJSON() {
    const sdp = {
      version: 0,
      media: [],
    };

    sdp.version = this.version || 0;
    sdp.origin = this.origin || {
      username: '-',
      sessionId: (new Date()).getTime(),
      sessionVersion: this.version,
      netType: 'IN',
      ipVer: 4,
      address: '127.0.0.1',
    };

    sdp.name = this.name || 'semantic-sdp';

    sdp.connection = this.getConnection();
    sdp.timing = this.timing || { start: 0, stop: 0 };

    let ice = this.getICE();
    if (ice) {
      if (ice.isLite()) {
        sdp.icelite = 'ice-lite';
      }
      sdp.iceOptions = ice.getOpts();
      sdp.iceUfrag = ice.getUfrag();
      sdp.icePwd = ice.getPwd();
    }

    sdp.msidSemantic = this.msidSemantic || { semantic: 'WMS', token: '*' };
    sdp.groups = [];

    const bundle = { type: 'BUNDLE', mids: [] };
    let dtls = this.getDTLS();
    if (dtls) {
      sdp.fingerprint = {
        type: dtls.getHash(),
        hash: dtls.getFingerprint(),
      };

      sdp.setup = Setup.toString(dtls.getSetup());
    }

    this.medias.forEach((media) => {
      const md = {
        type: media.getType(),
        port: media.getPort(),
        protocol: 'UDP/TLS/RTP/SAVPF',
        fmtp: [],
        rtp: [],
        rtcpFb: [],
        ext: [],
        bandwidth: [],
        candidates: [],
        ssrcGroups: [],
        ssrcs: [],
        rids: [],
      };

      md.direction = Direction.toString(media.getDirection());

      md.rtcpMux = 'rtcp-mux';

      md.connection = media.getConnection();

      md.xGoogleFlag = media.getXGoogleFlag();

      md.mid = media.getId();

      bundle.mids.push(media.getId());
      md.rtcp = media.rtcp;

      if (media.getBitrate() > 0) {
        md.bandwidth.push({
          type: 'AS',
          limit: media.getBitrate(),
        });
      }

      const candidates = media.getCandidates();
      candidates.forEach((candidate) => {
        md.candidates.push({
          foundation: candidate.getFoundation(),
          component: candidate.getComponentId(),
          transport: candidate.getTransport(),
          priority: candidate.getPriority(),
          ip: candidate.getAddress(),
          port: candidate.getPort(),
          type: candidate.getType(),
          relAddr: candidate.getRelAddr(),
          relPort: candidate.getRelPort(),
          generation: candidate.getGeneration(),
        });
      });

      ice = media.getICE();
      if (ice) {
        if (ice.isLite()) {
          md.icelite = 'ice-lite';
        }
        md.iceOptions = ice.getOpts();
        md.iceUfrag = ice.getUfrag();
        md.icePwd = ice.getPwd();
        if (ice.isEndOfCandidates()) {
          md.endOfCandidates = ice.isEndOfCandidates();
        }
      }

      dtls = media.getDTLS();
      if (dtls) {
        md.fingerprint = {
          type: dtls.getHash(),
          hash: dtls.getFingerprint(),
        };

        md.setup = Setup.toString(dtls.getSetup());
      }

      if (media.setup) {
        md.setup = Setup.toString(media.setup);
      }

      media.getCodecs().forEach((codec) => {
        md.rtp.push({
          payload: codec.getType(),
          codec: codec.getCodec(),
          rate: codec.getRate(),
          encoding: codec.getEncoding(),
        });

        const params = codec.getParams();
        if (Object.keys(params).length > 0) {
          md.fmtp.push({
            payload: codec.getType(),
            config: Object.keys(params)
                          .map(item => item + (params[item] ? `=${params[item]}` : ''))
                          .join(';'),
          });
        }

        codec.getFeedback().forEach((rtcpFb) => {
          md.rtcpFb.push({
            payload: codec.getType(),
            type: rtcpFb.type,
            subtype: rtcpFb.subtype,
          });
        });

        if (codec.hasRTX()) {
          md.rtp.push({
            payload: codec.getRTX(),
            codec: 'rtx',
            rate: codec.getRate(),
            encoding: codec.getEncoding(),
          });
          md.fmtp.push({
            payload: codec.getRTX(),
            config: `apt=${codec.getType()}`,
          });
        }
      });
      const payloads = [];

      md.rtp.forEach((rtp) => {
        payloads.push(rtp.payload);
      });

      md.payloads = payloads.join(' ');

      media.getExtensions().forEach((uri, value) => {
        md.ext.push({
          value,
          uri,
        });
      });

      media.getRIDs().forEach((ridInfo) => {
        const rid = {
          id: ridInfo.getId(),
          direction: DirectionWay.toString(ridInfo.getDirection()),
          params: '',
        };
        if (ridInfo.getFormats().length) {
          rid.params = `pt=${ridInfo.getFormats().join(',')}`;
        }
        ridInfo.getParams().forEach((param, key) => {
          const prefix = rid.params.length ? ';' : '';
          rid.params += `${prefix}${key}=${param}`;
        });

        md.rids.push(rid);
      });

      const simulcast = media.getSimulcast();
      const simulcast03 = media.getSimulcast03();

      if (simulcast) {
        let index = 1;
        md.simulcast = {};
        const send = simulcast.getSimulcastStreams(DirectionWay.SEND);
        const recv = simulcast.getSimulcastStreams(DirectionWay.RECV);

        if (send && send.length) {
          let list = '';
          send.forEach((stream) => {
            let alternatives = '';
            stream.forEach((entry) => {
              alternatives +=
                (alternatives.length ? ',' : '') + (entry.isPaused() ? '~' : '') + entry.getId();
            });
            list += (list.length ? ';' : '') + alternatives;
          });
          md.simulcast[`dir${index}`] = 'send';
          md.simulcast[`list${index}`] = list;
          index += 1;
        }

        if (recv && recv.length) {
          let list = [];
          recv.forEach((stream) => {
            let alternatives = '';
            stream.forEach((entry) => {
              alternatives +=
                (alternatives.length ? ',' : '') + (entry.isPaused() ? '~' : '') + entry.getId();
            });
            list += (list.length ? ';' : '') + alternatives;
          });
          md.simulcast[`dir${index}`] = 'recv';
          md.simulcast[`list${index}`] = list;
          index += 1;
        }
      }

      if (simulcast03) {
        md.simulcast_03 = {
          value: simulcast03.getSimulcastPlainString(),
        };
      }

      sdp.media.push(md);
    });
    bundle.mids.sort();
    sdp.media.sort((m1, m2) => {
      if (m1.mid < m2.mid) return -1;
      if (m1.mid > m2.mid) return 1;
      return 0;
    });

    for (const stream of this.streams.values()) { // eslint-disable-line no-restricted-syntax
      for (const track of stream.getTracks().values()) { // eslint-disable-line no-restricted-syntax
        for (const md of sdp.media) { // eslint-disable-line no-restricted-syntax
          // Check if it is unified or plan B
          if (track.getMediaId()) {
            // Unified, check if it is bounded to an specific line
            if (track.getMediaId() === md.mid) {
              track.getSourceGroups().forEach((group) => {
                md.ssrcGroups.push({
                  semantics: group.getSemantics(),
                  ssrcs: group.getSSRCs().join(' '),
                });
              });

              track.getSSRCs().forEach((source) => {
                md.ssrcs.push({
                  id: source.ssrc,
                  attribute: 'cname',
                  value: source.getCName(),
                });
              });
              if (stream.getId() && track.getId()) {
                md.msid = `${stream.getId()} ${track.getId()}`;
              }
              break;
            }
          } else if (md.type.toLowerCase() === track.getMedia().toLowerCase()) {
            // Plan B
            track.getSourceGroups().forEach((group) => {
              md.ssrcGroups.push({
                semantics: group.getSemantics(),
                ssrcs: group.getSSRCs().join(' '),
              });
            });

            track.getSSRCs().forEach((source) => {
              md.ssrcs.push({
                id: source.ssrc,
                attribute: 'cname',
                value: source.getCName(),
              });
              if (source.getStreamId() && source.getTrackId()) {
                md.ssrcs.push({
                  id: source.ssrc,
                  attribute: 'msid',
                  value: `${source.getStreamId()} ${source.getTrackId()}`,
                });
              }
              if (source.getMSLabel()) {
                md.ssrcs.push({
                  id: source.ssrc,
                  attribute: 'mslabel',
                  value: source.getMSLabel(),
                });
              }
              if (source.getLabel()) {
                md.ssrcs.push({
                  id: source.ssrc,
                  attribute: 'label',
                  value: source.getLabel(),
                });
              }
            });
            break;
          }
        }
      }
    }

    bundle.mids = bundle.mids.join(' ');
    sdp.groups.push(bundle);

    return sdp;
  }

  toString() {
    const sdp = this.toJSON();
    return SDPTransform.write(sdp);
  }
}

function getFormats(mediaInfo, md) {
  const apts = new Map();

  md.rtp.forEach((fmt) => {
    const type = fmt.payload;
    const codec = fmt.codec;
    const rate = fmt.rate;
    const encoding = fmt.encoding;

    const params = {};
    const feedback = [];

    md.fmtp.forEach((fmtp) => {
      if (fmtp.payload === type) {
        const list = fmtp.config.split(';');
        list.forEach((entry) => {
          const param = entry.split('=');
          params[param[0].trim()] = (param[1] || '').trim();
        });
      }
    });
    if (md.rtcpFb) {
      md.rtcpFb.forEach((rtcpFb) => {
        if (rtcpFb.payload === type) {
          feedback.push({ type: rtcpFb.type, subtype: rtcpFb.subtype });
        }
      });
    }
    if (codec.toUpperCase() === 'RTX') {
      apts.set(parseInt(params.apt, 10), type);
    } else {
      mediaInfo.addCodec(new CodecInfo(codec, type, rate, encoding, params, feedback));
    }
  });

  apts.forEach((apt, id) => {
    const codecInfo = mediaInfo.getCodecForType(id);
    if (codecInfo) {
      codecInfo.setRTX(apt);
    }
  });
}

function getRIDs(mediaInfo, md) {
  const rids = md.rids;
  if (!rids) {
    return;
  }
  rids.forEach((rid) => {
    const ridInfo = new RIDInfo(rid.id, DirectionWay.byValue(rid.direction));
    let formats = [];
    const params = new Map();
    if (rid.params) {
      const list = SDPTransform.parseParams(rid.params);
      Object.keys(list).forEach((key) => {
        if (key === 'pt') {
          formats = list[key].split(',');
        } else {
          params.set(key, list[key]);
        }
      });
      ridInfo.setFormats(formats);
      ridInfo.setParams(params);
    }
    mediaInfo.addRID(ridInfo);
  });
}

function getSimulcastDir(index, md, simulcast) {
  const simulcastDir = md.simulcast[`dir${index}`];
  const simulcastList = md.simulcast[`list${index}`];
  if (simulcastDir) {
    const direction = DirectionWay.byValue(simulcastDir);
    const list = SDPTransform.parseSimulcastStreamList(simulcastList);
    list.forEach((stream) => {
      const alternatives = [];
      stream.forEach((entry) => {
        alternatives.push(new SimulcastStreamInfo(entry.scid, entry.paused));
      });
      simulcast.addSimulcastAlternativeStreams(direction, alternatives);
    });
  }
}

function getSimulcast3Dir(md, simulcast) {
  simulcast.setSimulcastPlainString(md.simulcast_03.value);
}

function getSimulcast(mediaInfo, md) {
  const encodings = [];
  if (md.simulcast) {
    const simulcast = new SimulcastInfo();
    getSimulcastDir('1', md, simulcast);
    getSimulcastDir('2', md, simulcast);

    simulcast.getSimulcastStreams(DirectionWay.SEND).forEach((streams) => {
      const alternatives = [];
      streams.forEach((stream) => {
        const encoding = new TrackEncodingInfo(stream.getId(), stream.isPaused());
        const ridInfo = mediaInfo.getRID(encoding.getId());
        if (ridInfo) {
          const formats = ridInfo.getFormats();
          formats.forEach((format) => {
            const codecInfo = mediaInfo.getCodecForType(format);
            if (codecInfo) {
              encoding.addCodec(codecInfo);
            }
          });
          encoding.setParams(ridInfo.getParams());
          alternatives.push(encoding);
        }
      });
      if (alternatives.length) {
        encodings.push(alternatives);
      }
    });

    mediaInfo.setSimulcast(simulcast);
  }
  if (md.simulcast_03) {
    const simulcast = new SimulcastInfo();
    getSimulcast3Dir(md, simulcast);
    mediaInfo.setSimulcast03(simulcast);
  }
  return encodings;
}

function getTracks(encodings, sdpInfo, md) {
  const sources = new Map();
  const media = md.type;
  if (md.ssrcs) {
    let track;
    let stream;
    let source;
    md.ssrcs.forEach((ssrcAttr) => {
      const ssrc = ssrcAttr.id;
      const key = ssrcAttr.attribute;
      const value = ssrcAttr.value;
      source = sources.get(ssrc);
      if (!source) {
        source = new SourceInfo(ssrc);
        sources.set(source.getSSRC(), source);
      }
      if (key.toLowerCase() === 'cname') {
        source.setCName(value);
      } else if (key.toLowerCase() === 'mslabel') {
        source.setMSLabel(value);
      } else if (key.toLowerCase() === 'label') {
        source.setLabel(value);
      } else if (key.toLowerCase() === 'msid') {
        const ids = value.split(' ');
        const streamId = ids[0];
        const trackId = ids[1];
        source.setStreamId(streamId);
        source.setTrackId(trackId);
        stream = sdpInfo.getStream(streamId);
        if (!stream) {
          stream = new StreamInfo(streamId);
          sdpInfo.addStream(stream);
        }
        track = stream.getTrack(trackId);
        if (!track) {
          track = new TrackInfo(media, trackId);
          track.setEncodings(encodings);
          stream.addTrack(track);
        }
        track.addSSRC(source);
      }
    });
  }

  if (md.msid) {
    const ids = md.msid.split(' ');
    const streamId = ids[0];
    const trackId = ids[1];

    let stream = sdpInfo.getStream(streamId);
    if (!stream) {
      stream = new StreamInfo(streamId);
      sdpInfo.addStream(stream);
    }
    let track = stream.getTrack(trackId);
    if (!track) {
      track = new TrackInfo(media, trackId);
      track.setMediaId(md.mid);
      track.setEncodings(encodings);
      stream.addTrack(track);
    }

    sources.forEach((key, ssrc) => {
      const source = sources.get(ssrc);
      if (!source.getStreamId()) {
        source.setStreamId(streamId);
        source.setTrackId(trackId);
        track.addSSRC(source);
      }
    });
  }

  if (md.ssrcGroups) {
    md.ssrcGroups.forEach((ssrcGroupAttr) => {
      const ssrcs = ssrcGroupAttr.ssrcs.split(' ');
      const group = new SourceGroupInfo(ssrcGroupAttr.semantics, ssrcs);
      const source = sources.get(parseInt(ssrcs[0], 10));
      sdpInfo
        .getStream(source.getStreamId())
        .getTrack(source.getTrackId())
        .addSourceGroup(group);
    });
  }
}

SDPInfo.processString = (string) => {
  const sdp = SDPTransform.parse(string);
  return SDPInfo.process(sdp);
};


SDPInfo.process = (sdp) => {
  const sdpInfo = new SDPInfo();

  sdpInfo.setVersion(sdp.version);
  sdpInfo.setTiming(sdp.timing);
  sdpInfo.setConnection(sdp.connection);
  sdpInfo.setOrigin(sdp.origin);
  sdpInfo.msidSemantic = sdp.msidSemantic;
  sdpInfo.name = sdp.name;

  let ufrag = sdp.iceUfrag;
  let pwd = sdp.icePwd;
  let iceOptions = sdp.iceOptions;
  if (ufrag || pwd || iceOptions) {
    sdpInfo.setICE(new ICEInfo(ufrag, pwd, iceOptions));
  }

  let fingerprintAttr = sdp.fingerprint;
  if (fingerprintAttr) {
    const remoteHash = fingerprintAttr.type;
    const remoteFingerprint = fingerprintAttr.hash;
    let setup = null;
    if (sdp.setup) {
      setup = Setup.byValue(sdp.setup);
    }

    sdpInfo.setDTLS(new DTLSInfo(setup, remoteHash, remoteFingerprint));
  }

  sdp.media.forEach((md) => {
    const media = md.type;
    const mid = md.mid;
    const port = md.port;
    const mediaInfo = new MediaInfo(mid, port, media);
    mediaInfo.setXGoogleFlag(md.xGoogleFlag);
    mediaInfo.rtcp = md.rtcp;
    mediaInfo.setConnection(md.connection);

    if (md.bandwidth && md.bandwidth.length > 0) {
      md.bandwidth.forEach((bandwidth) => {
        if (bandwidth.type === 'AS') {
          mediaInfo.setBitrate(bandwidth.limit);
        }
      });
    }

    ufrag = md.iceUfrag;
    pwd = md.icePwd;
    iceOptions = md.iceOptions;
    if (ufrag || pwd || iceOptions) {
      const thisIce = new ICEInfo(ufrag, pwd, iceOptions);
      if (md.endOfCandidates) {
        thisIce.setEndOfCandidates('end-of-candidates');
      }
      mediaInfo.setICE(thisIce);
    }

    fingerprintAttr = md.fingerprint;
    if (fingerprintAttr) {
      const remoteHash = fingerprintAttr.type;
      const remoteFingerprint = fingerprintAttr.hash;
      let setup = Setup.ACTPASS;
      if (md.setup) {
        setup = Setup.byValue(md.setup);
      }

      mediaInfo.setDTLS(new DTLSInfo(setup, remoteHash, remoteFingerprint));
    }

    if (md.setup) {
      mediaInfo.setSetup(Setup.byValue(md.setup));
    }

    let direction = Direction.SENDRECV;

    if (md.direction) {
      direction = Direction.byValue(md.direction.toUpperCase());
    }

    mediaInfo.setDirection(direction);

    const candidates = md.candidates;
    if (candidates) {
      candidates.forEach((candidate) => {
        mediaInfo.addCandidate(new CandidateInfo(candidate.foundation, candidate.component,
          candidate.transport, candidate.priority, candidate.ip, candidate.port, candidate.type,
          candidate.generation, candidate.relAddr, candidate.relPort));
      });
    }

    getFormats(mediaInfo, md);

    const extmaps = md.ext;
    if (extmaps) {
      extmaps.forEach((extmap) => {
        mediaInfo.addExtension(extmap.value, extmap.uri);
      });
    }

    getRIDs(mediaInfo, md);

    const encodings = getSimulcast(mediaInfo, md);

    getTracks(encodings, sdpInfo, md);

    sdpInfo.addMedia(mediaInfo);
  });
  return sdpInfo;
};

module.exports = SDPInfo;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__(31);
var writer = __webpack_require__(32);

exports.write = writer;
exports.parse = parser.parse;
exports.parseFmtpConfig = parser.parseFmtpConfig;
exports.parseParams = parser.parseParams;
exports.parsePayloads = parser.parsePayloads;
exports.parseRemoteCandidates = parser.parseRemoteCandidates;
exports.parseImageAttributes = parser.parseImageAttributes;
exports.parseSimulcastStreamList = parser.parseSimulcastStreamList;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var toIntIfInt = function (v) {
  return String(Number(v)) === v ? Number(v) : v;
};

var attachProperties = function (match, location, names, rawName) {
  if (rawName && !names) {
    location[rawName] = toIntIfInt(match[1]);
  }
  else {
    for (var i = 0; i < names.length; i += 1) {
      if (match[i+1] != null) {
        location[names[i]] = toIntIfInt(match[i+1]);
      }
    }
  }
};

var parseReg = function (obj, location, content) {
  var needsBlank = obj.name && obj.names;
  if (obj.push && !location[obj.push]) {
    location[obj.push] = [];
  }
  else if (needsBlank && !location[obj.name]) {
    location[obj.name] = {};
  }
  var keyLocation = obj.push ?
    {} :  // blank object that will be pushed
    needsBlank ? location[obj.name] : location; // otherwise, named location or root

  attachProperties(content.match(obj.reg), keyLocation, obj.names, obj.name);

  if (obj.push) {
    location[obj.push].push(keyLocation);
  }
};

var grammar = __webpack_require__(10);
var validLine = RegExp.prototype.test.bind(/^([a-z])=(.*)/);

exports.parse = function (sdp) {
  var session = {}
    , media = []
    , location = session; // points at where properties go under (one of the above)

  // parse lines we understand
  sdp.split(/(\r\n|\r|\n)/).filter(validLine).forEach(function (l) {
    var type = l[0];
    var content = l.slice(2);
    if (type === 'm') {
      media.push({rtp: [], fmtp: []});
      location = media[media.length-1]; // point at latest media line
    }

    for (var j = 0; j < (grammar[type] || []).length; j += 1) {
      var obj = grammar[type][j];
      if (obj.reg.test(content)) {
        return parseReg(obj, location, content);
      }
    }
  });

  session.media = media; // link it up
  return session;
};

var paramReducer = function (acc, expr) {
  var s = expr.split(/=(.+)/, 2);
  if (s.length === 2) {
    acc[s[0]] = toIntIfInt(s[1]);
  }
  return acc;
};

exports.parseParams = function (str) {
  return str.split(/\;\s?/).reduce(paramReducer, {});
};

// For backward compatibility - alias will be removed in 3.0.0
exports.parseFmtpConfig = exports.parseParams;

exports.parsePayloads = function (str) {
  return str.split(' ').map(Number);
};

exports.parseRemoteCandidates = function (str) {
  var candidates = [];
  var parts = str.split(' ').map(toIntIfInt);
  for (var i = 0; i < parts.length; i += 3) {
    candidates.push({
      component: parts[i],
      ip: parts[i + 1],
      port: parts[i + 2]
    });
  }
  return candidates;
};

exports.parseImageAttributes = function (str) {
  return str.split(' ').map(function (item) {
    return item.substring(1, item.length-1).split(',').reduce(paramReducer, {});
  });
};

exports.parseSimulcastStreamList = function (str) {
  return str.split(';').map(function (stream) {
    return stream.split(',').map(function (format) {
      var scid, paused = false;

      if (format[0] !== '~') {
        scid = toIntIfInt(format);
      } else {
        scid = toIntIfInt(format.substring(1, format.length));
        paused = true;
      }

      return {
        scid: scid,
        paused: paused
      };
    });
  });
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var grammar = __webpack_require__(10);

// customized util.format - discards excess arguments and can void middle ones
var formatRegExp = /%[sdv%]/g;
var format = function (formatStr) {
  var i = 1;
  var args = arguments;
  var len = args.length;
  return formatStr.replace(formatRegExp, function (x) {
    if (i >= len) {
      return x; // missing argument
    }
    var arg = args[i];
    i += 1;
    switch (x) {
    case '%%':
      return '%';
    case '%s':
      return String(arg);
    case '%d':
      return Number(arg);
    case '%v':
      return '';
    }
  });
  // NB: we discard excess arguments - they are typically undefined from makeLine
};

var makeLine = function (type, obj, location) {
  var str = obj.format instanceof Function ?
    (obj.format(obj.push ? location : location[obj.name])) :
    obj.format;

  var args = [type + '=' + str];
  if (obj.names) {
    for (var i = 0; i < obj.names.length; i += 1) {
      var n = obj.names[i];
      if (obj.name) {
        args.push(location[obj.name][n]);
      }
      else { // for mLine and push attributes
        args.push(location[obj.names[i]]);
      }
    }
  }
  else {
    args.push(location[obj.name]);
  }
  return format.apply(null, args);
};

// RFC specified order
// TODO: extend this with all the rest
var defaultOuterOrder = [
  'v', 'o', 's', 'i',
  'u', 'e', 'p', 'c',
  'b', 't', 'r', 'z', 'a'
];
var defaultInnerOrder = ['i', 'c', 'b', 'a'];


module.exports = function (session, opts) {
  opts = opts || {};
  // ensure certain properties exist
  if (session.version == null) {
    session.version = 0; // 'v=0' must be there (only defined version atm)
  }
  if (session.name == null) {
    session.name = ' '; // 's= ' must be there if no meaningful name set
  }
  session.media.forEach(function (mLine) {
    if (mLine.payloads == null) {
      mLine.payloads = '';
    }
  });

  var outerOrder = opts.outerOrder || defaultOuterOrder;
  var innerOrder = opts.innerOrder || defaultInnerOrder;
  var sdp = [];

  // loop through outerOrder for matching properties on session
  outerOrder.forEach(function (type) {
    grammar[type].forEach(function (obj) {
      if (obj.name in session && session[obj.name] != null) {
        sdp.push(makeLine(type, obj, session));
      }
      else if (obj.push in session && session[obj.push] != null) {
        session[obj.push].forEach(function (el) {
          sdp.push(makeLine(type, obj, el));
        });
      }
    });
  });

  // then for each media line, follow the innerOrder
  session.media.forEach(function (mLine) {
    sdp.push(makeLine('m', grammar.m[0], mLine));

    innerOrder.forEach(function (type) {
      grammar[type].forEach(function (obj) {
        if (obj.name in mLine && mLine[obj.name] != null) {
          sdp.push(makeLine(type, obj, mLine));
        }
        else if (obj.push in mLine && mLine[obj.push] != null) {
          mLine[obj.push].forEach(function (el) {
            sdp.push(makeLine(type, obj, el));
          });
        }
      });
    });
  });

  return sdp.join('\r\n') + '\r\n';
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

class TrackEncodingInfo {
  constructor(id, paused) {
    this.id = id;
    this.paused = paused;
    this.codecs = new Map();
    this.params = new Map();
  }

  clone() {
    const cloned = new TrackEncodingInfo(this.id, this.paused);
    this.codecs.forEach((codec) => {
      cloned.addCodec(codec.cloned());
    });
    cloned.setParams(this.params);
    return cloned;
  }

  plain() {
    const plain = {
      id: this.id,
      paused: this.paused,
      codecs: {},
      params: {},
    };
    this.codecs.keys().forEach((id) => {
      plain.codecs[id] = this.codecs.get(id).plain();
    });
    this.params.keys().forEach((id) => {
      plain.params[id] = this.params.get(id).param;
    });
    return plain;
  }

  getId() {
    return this.id;
  }

  getCodecs() {
    return this.codecs;
  }

  addCodec(codec) {
    this.codecs.set(codec.getType(), codec);
  }

  getParams() {
    return this.params;
  }

  setParams(params) {
    this.params = new Map(params);
  }

  isPaused() {
    return this.paused;
  }
}

module.exports = TrackEncodingInfo;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

class SimulcastStreamInfo {
  constructor(id, paused) {
    this.paused = paused;
    this.id = id;
  }

  clone() {
    return new SimulcastStreamInfo(this.id, this.paused);
  }

  plain() {
    return {
      id: this.id,
      paused: this.paused,
    };
  }

  isPaused() {
    return this.paused;
  }

  getId() {
    return this.id;
  }
}

module.exports = SimulcastStreamInfo;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

const DirectionWay = __webpack_require__(2);

class RIDInfo {
  constructor(id, direction) {
    this.id = id;
    this.direction = direction;
    this.formats = [];
    this.params = new Map();
  }

  clone() {
    const cloned = new RIDInfo(this.id, this.direction);
    cloned.setFormats(this.formats);
    cloned.setParams(this.params);
    return cloned;
  }

  plain() {
    const plain = {
      id: this.id,
      direction: DirectionWay.toString(this.direction),
      formats: this.formats,
      params: {},
    };
    this.params.forEach((param, id) => {
      plain.params[id] = param;
    });
    return plain;
  }

  getId() {
    return this.id;
  }

  getDirection() {
    return this.direction;
  }

  setDirection(direction) {
    this.direction = direction;
  }

  getFormats() {
    return this.formats;
  }

  setFormats(formats) {
    this.formats = [];
    formats.forEach((format) => {
      this.formats.push(parseInt(format, 10));
    });
  }

  getParams() {
    return this.params;
  }

  setParams(params) {
    this.params = new Map(params);
  }
}

module.exports = RIDInfo;


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_Logger__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseStack__ = __webpack_require__(9);



const FirefoxStack = (specInput) => {
  __WEBPACK_IMPORTED_MODULE_0__utils_Logger__["a" /* default */].info('Starting Firefox stack');
  const that = Object(__WEBPACK_IMPORTED_MODULE_1__BaseStack__["a" /* default */])(specInput);
  const defaultSimulcastSpatialLayers = 2;

  const possibleLayers = [
    { rid: 'low', scaleResolutionDownBy: 3 },
    { rid: 'med', scaleResolutionDownBy: 2 },
    { rid: 'high' },
  ];

  const getSimulcastParameters = (sender) => {
    let numSpatialLayers = that.simulcast.numSpatialLayers || defaultSimulcastSpatialLayers;
    const totalLayers = possibleLayers.length;
    numSpatialLayers = numSpatialLayers < totalLayers ?
                          numSpatialLayers : totalLayers;
    const parameters = sender.getParameters() || {};
    parameters.encodings = [];

    for (let layer = totalLayers - 1; layer >= totalLayers - numSpatialLayers; layer -= 1) {
      parameters.encodings.push(possibleLayers[layer]);
    }
    return sender.setParameters(parameters);
  };

  const enableSimulcast = () => {
    if (!that.simulcast) {
      return [];
    }
    const promises = [];
    that.peerConnection.getSenders().forEach((sender) => {
      if (sender.track.kind === 'video') {
        promises.push(getSimulcastParameters(sender));
      }
    });
    return promises;
  };

  that.enableSimulcast = sdp => sdp;

  const baseCreateOffer = that.createOffer;

  that.createOffer = (isSubscribe, forceOfferToReceive = false, streamId = '') => {
    let promises = [];
    if (isSubscribe !== true) {
      promises = enableSimulcast();
    }
    Promise.all(promises).then(() => {
      baseCreateOffer(isSubscribe, forceOfferToReceive, streamId);
    });
  };

  return that;
};

/* harmony default export */ __webpack_exports__["a"] = (FirefoxStack);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_Logger__ = __webpack_require__(0);


const FcStack = (spec) => {
  /*
  spec.callback({
      type: sessionDescription.type,
      sdp: sessionDescription.sdp
  });
  */
  const that = {};

  that.pcConfig = {};

  that.peerConnection = {};
  that.desc = {};
  that.signalCallback = undefined;

  that.close = () => {
    __WEBPACK_IMPORTED_MODULE_0__utils_Logger__["a" /* default */].info('Close FcStack');
  };

  that.createOffer = () => {
    __WEBPACK_IMPORTED_MODULE_0__utils_Logger__["a" /* default */].debug('FCSTACK: CreateOffer');
  };

  that.addStream = (stream) => {
    __WEBPACK_IMPORTED_MODULE_0__utils_Logger__["a" /* default */].debug('FCSTACK: addStream', stream);
  };

  that.processSignalingMessage = (msg) => {
    __WEBPACK_IMPORTED_MODULE_0__utils_Logger__["a" /* default */].debug('FCSTACK: processSignaling', msg);
    if (that.signalCallback !== undefined) { that.signalCallback(msg); }
  };

  that.sendSignalingMessage = (msg) => {
    __WEBPACK_IMPORTED_MODULE_0__utils_Logger__["a" /* default */].debug('FCSTACK: Sending signaling Message', msg);
    spec.callback(msg);
  };

  that.setSignalingCallback = (callback = () => {}) => {
    __WEBPACK_IMPORTED_MODULE_0__utils_Logger__["a" /* default */].debug('FCSTACK: Setting signalling callback');
    that.signalCallback = callback;
  };
  return that;
};

/* harmony default export */ __webpack_exports__["a"] = (FcStack);


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SocketEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Socket; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_socket_io__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lib_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Logger__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Events__ = __webpack_require__(1);
/* global */






const SocketEvent = (type, specInput) => {
  const that = Object(__WEBPACK_IMPORTED_MODULE_2__Events__["d" /* LicodeEvent */])({ type });
  that.args = specInput.args;
  return that;
};

/*
 * Class Stream represents a local or a remote Stream in the Room. It will handle the WebRTC
 * stream and identify the stream and where it should be drawn.
 */
const Socket = (newIo) => {
  const that = Object(__WEBPACK_IMPORTED_MODULE_2__Events__["b" /* EventDispatcher */])();
  const defaultCallback = () => {};
  const messageBuffer = [];

  that.CONNECTED = Symbol('connected');
  that.RECONNECTING = Symbol('reconnecting');
  that.DISCONNECTED = Symbol('disconnected');

  const WEBSOCKET_NORMAL_CLOSURE = 1000;
  that.state = that.DISCONNECTED;
  that.IO = newIo === undefined ? __WEBPACK_IMPORTED_MODULE_0__lib_socket_io___default.a : newIo;

  let socket;

  const emit = (type, ...args) => {
    that.emit(SocketEvent(type, { args }));
  };

  const addToBuffer = (type, message, callback, error) => {
    messageBuffer.push([type, message, callback, error]);
  };

  const flushBuffer = () => {
    if (that.state !== that.CONNECTED) {
      return;
    }
    messageBuffer.forEach((message) => {
      that.sendMessage(...message);
    });
  };

  that.connect = (token, userOptions, callback = defaultCallback, error = defaultCallback) => {
    const options = {
      reconnection: true,
      reconnectionAttempts: 3,
      secure: token.secure,
      forceNew: true,
      transports: ['websocket'],
      rejectUnauthorized: false,
    };
    const transport = token.secure ? 'wss://' : 'ws://';
    const host = token.host;
    socket = that.IO.connect(transport + host, options);

    // Hack to know the exact reason of the WS closure (socket.io does not publish it)
    let closeCode = WEBSOCKET_NORMAL_CLOSURE;
    const socketOnCloseFunction = socket.io.engine.transport.ws.onclose;
    socket.io.engine.transport.ws.onclose = (closeEvent) => {
      __WEBPACK_IMPORTED_MODULE_1__utils_Logger__["a" /* default */].warning('WebSocket closed, code:', closeEvent.code);
      closeCode = closeEvent.code;
      socketOnCloseFunction(closeEvent);
    };
    that.socket = socket;
    socket.on('onAddStream', emit.bind(that, 'onAddStream'));

    socket.on('signaling_message_erizo', emit.bind(that, 'signaling_message_erizo'));
    socket.on('signaling_message_peer', emit.bind(that, 'signaling_message_peer'));
    socket.on('publish_me', emit.bind(that, 'publish_me'));
    socket.on('unpublish_me', emit.bind(that, 'unpublish_me'));
    socket.on('onBandwidthAlert', emit.bind(that, 'onBandwidthAlert'));

    // We receive an event of new data in one of the streams
    socket.on('onDataStream', emit.bind(that, 'onDataStream'));

    // We receive an event of new data in one of the streams
    socket.on('onUpdateAttributeStream', emit.bind(that, 'onUpdateAttributeStream'));

    // We receive an event of a stream removed from the room
    socket.on('onRemoveStream', emit.bind(that, 'onRemoveStream'));

    // The socket has disconnected
    socket.on('disconnect', (reason) => {
      __WEBPACK_IMPORTED_MODULE_1__utils_Logger__["a" /* default */].debug('disconnect', that.id, reason);
      if (closeCode !== WEBSOCKET_NORMAL_CLOSURE) {
        that.state = that.RECONNECTING;
        return;
      }
      emit('disconnect', reason);
      socket.close();
    });

    socket.on('connection_failed', (evt) => {
      __WEBPACK_IMPORTED_MODULE_1__utils_Logger__["a" /* default */].error('connection failed, id:', that.id);
      emit('connection_failed', evt);
    });
    socket.on('error', (err) => {
      __WEBPACK_IMPORTED_MODULE_1__utils_Logger__["a" /* default */].warning('socket error, id:', that.id, ', error:', err.message);
      emit('error');
    });
    socket.on('connect_error', (err) => {
      __WEBPACK_IMPORTED_MODULE_1__utils_Logger__["a" /* default */].warning('connect error, id:', that.id, ', error:', err.message);
    });

    socket.on('connect_timeout', (err) => {
      __WEBPACK_IMPORTED_MODULE_1__utils_Logger__["a" /* default */].warning('connect timeout, id:', that.id, ', error:', err.message);
    });

    socket.on('reconnecting', (attemptNumber) => {
      __WEBPACK_IMPORTED_MODULE_1__utils_Logger__["a" /* default */].debug('reconnecting, id:', that.id, ', attempet:', attemptNumber);
    });

    socket.on('reconnect', (attemptNumber) => {
      __WEBPACK_IMPORTED_MODULE_1__utils_Logger__["a" /* default */].debug('reconnected, id:', that.id, ', attempet:', attemptNumber);
      that.state = that.CONNECTED;
      socket.emit('reconnected', that.id);
      flushBuffer();
    });

    socket.on('reconnect_attempt', (attemptNumber) => {
      __WEBPACK_IMPORTED_MODULE_1__utils_Logger__["a" /* default */].debug('reconnect attempt, id:', that.id, ', attempet:', attemptNumber);
    });

    socket.on('reconnect_error', (err) => {
      __WEBPACK_IMPORTED_MODULE_1__utils_Logger__["a" /* default */].debug('error reconnecting, id:', that.id, ', error:', err.message);
    });

    socket.on('reconnect_failed', () => {
      __WEBPACK_IMPORTED_MODULE_1__utils_Logger__["a" /* default */].warning('reconnect failed, id:', that.id);
      that.state = that.DISCONNECTED;
      emit('disconnect', 'reconnect failed');
    });

    // First message with the token
    const message = userOptions;
    message.token = token;
    that.sendMessage('token', message, (response) => {
      that.state = that.CONNECTED;
      that.id = response.clientId;
      callback(response);
    }, error);
  };

  that.disconnect = () => {
    that.state = that.DISCONNECTED;
    socket.disconnect();
  };

  // Function to send a message to the server using socket.io
  that.sendMessage = (type, msg, callback = defaultCallback, error = defaultCallback) => {
    if (that.state === that.DISCONNECTED && type !== 'token') {
      __WEBPACK_IMPORTED_MODULE_1__utils_Logger__["a" /* default */].error('Trying to send a message over a disconnected Socket');
      return;
    }
    if (that.state === that.RECONNECTING) {
      addToBuffer(type, msg, callback, error);
      return;
    }
    socket.emit(type, msg, (respType, resp) => {
      if (respType === 'success') {
        callback(resp);
      } else if (respType === 'error') {
        error(resp);
      } else {
        callback(respType, resp);
      }
    });
  };

  // It sends a SDP message to the server using socket.io
  that.sendSDP = (type, options, sdp, callback = defaultCallback) => {
    if (that.state === that.DISCONNECTED) {
      __WEBPACK_IMPORTED_MODULE_1__utils_Logger__["a" /* default */].error('Trying to send a message over a disconnected Socket');
      return;
    }
    socket.emit(type, options, sdp, (...args) => {
      callback(...args);
    });
  };
  return that;
};




/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.io=e():t.io=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t,e){"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{};var n,r=i(t),s=r.source,u=r.id,h=r.path,f=p[u]&&h in p[u].nsps,l=e.forceNew||e["force new connection"]||!1===e.multiplex||f;return l?(c("ignoring socket cache for %s",s),n=a(s,e)):(p[u]||(c("new io instance for %s",s),p[u]=a(s,e)),n=p[u]),r.query&&!e.query&&(e.query=r.query),n.socket(r.path,e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(1),s=n(7),a=n(13),c=n(3)("socket.io-client");t.exports=e=r;var p=e.managers={};e.protocol=s.protocol,e.connect=r,e.Manager=n(13),e.Socket=n(39)},function(t,e,n){(function(e){"use strict";function r(t,n){var r=t;n=n||e.location,null==t&&(t=n.protocol+"//"+n.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?n.protocol+t:n.host+t),/^(https?|wss?):\/\//.test(t)||(i("protocol-less url %s",t),t="undefined"!=typeof n?n.protocol+"//"+t:"https://"+t),i("parse %s",t),r=o(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";var s=r.host.indexOf(":")!==-1,a=s?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+a+":"+r.port,r.href=r.protocol+"://"+a+(n&&n.port===r.port?"":":"+r.port),r}var o=n(2),i=n(3)("socket.io-client:url");t.exports=r}).call(e,function(){return this}())},function(t,e){var n=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,r=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,o=t.indexOf("["),i=t.indexOf("]");o!=-1&&i!=-1&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,";")+t.substring(i,t.length));for(var s=n.exec(t||""),a={},c=14;c--;)a[r[c]]=s[c]||"";return o!=-1&&i!=-1&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e,n){(function(r){function o(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function i(t){var n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),n){var r="color: "+this.color;t.splice(1,0,r,"color: inherit");var o=0,i=0;t[0].replace(/%[a-zA-Z%]/g,function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))}),t.splice(i,0,r)}}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(n){}}function c(){var t;try{t=e.storage.debug}catch(n){}return!t&&"undefined"!=typeof r&&"env"in r&&(t=r.env.DEBUG),t}function p(){try{return window.localStorage}catch(t){}}e=t.exports=n(5),e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=o,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:p(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},e.enable(c())}).call(e,n(4))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(h===clearTimeout)return clearTimeout(t);if((h===r||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}function s(){y&&l&&(y=!1,l.length?d=l.concat(d):m=-1,d.length&&a())}function a(){if(!y){var t=o(s);y=!0;for(var e=d.length;e;){for(l=d,d=[];++m<e;)l&&l[m].run();m=-1,e=d.length}l=null,y=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function p(){}var u,h,f=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{h="function"==typeof clearTimeout?clearTimeout:r}catch(t){h=r}}();var l,d=[],y=!1,m=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new c(t,e)),1!==d.length||y||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=p,f.addListener=p,f.once=p,f.off=p,f.removeListener=p,f.removeAllListeners=p,f.emit=p,f.prependListener=p,f.prependOnceListener=p,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e,n){function r(t){var n,r=0;for(n in t)r=(r<<5)-r+t.charCodeAt(n),r|=0;return e.colors[Math.abs(r)%e.colors.length]}function o(t){function n(){if(n.enabled){var t=n,r=+new Date,o=r-(p||r);t.diff=o,t.prev=p,t.curr=r,p=r;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=e.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var a=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;a++;var o=e.formatters[r];if("function"==typeof o){var s=i[a];n=o.call(t,s),i.splice(a,1),a--}return n}),e.formatArgs.call(t,i);var c=n.log||e.log||console.log.bind(console);c.apply(t,i)}}return n.namespace=t,n.enabled=e.enabled(t),n.useColors=e.useColors(),n.color=r(t),"function"==typeof e.init&&e.init(n),n}function i(t){e.save(t),e.names=[],e.skips=[];for(var n=("string"==typeof t?t:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&(t=n[o].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function s(){e.enable("")}function a(t){var n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return!0;return!1}function c(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o.debug=o["default"]=o,e.coerce=c,e.disable=s,e.enable=i,e.enabled=a,e.humanize=n(6),e.names=[],e.skips=[],e.formatters={};var p},function(t,e){function n(t){if(t=String(t),!(t.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),r=(e[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*u;case"days":case"day":case"d":return n*p;case"hours":case"hour":case"hrs":case"hr":case"h":return n*c;case"minutes":case"minute":case"mins":case"min":case"m":return n*a;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function r(t){return t>=p?Math.round(t/p)+"d":t>=c?Math.round(t/c)+"h":t>=a?Math.round(t/a)+"m":t>=s?Math.round(t/s)+"s":t+"ms"}function o(t){return i(t,p,"day")||i(t,c,"hour")||i(t,a,"minute")||i(t,s,"second")||t+" ms"}function i(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}var s=1e3,a=60*s,c=60*a,p=24*c,u=365.25*p;t.exports=function(t,e){e=e||{};var i=typeof t;if("string"===i&&t.length>0)return n(t);if("number"===i&&isNaN(t)===!1)return e["long"]?o(t):r(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,n){function r(){}function o(t){var n=""+t.type;return e.BINARY_EVENT!==t.type&&e.BINARY_ACK!==t.type||(n+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(n+=t.nsp+","),null!=t.id&&(n+=t.id),null!=t.data&&(n+=JSON.stringify(t.data)),h("encoded %j as %s",t,n),n}function i(t,e){function n(t){var n=d.deconstructPacket(t),r=o(n.packet),i=n.buffers;i.unshift(r),e(i)}d.removeBlobs(t,n)}function s(){this.reconstructor=null}function a(t){var n=0,r={type:Number(t.charAt(0))};if(null==e.types[r.type])return u();if(e.BINARY_EVENT===r.type||e.BINARY_ACK===r.type){for(var o="";"-"!==t.charAt(++n)&&(o+=t.charAt(n),n!=t.length););if(o!=Number(o)||"-"!==t.charAt(n))throw new Error("Illegal attachments");r.attachments=Number(o)}if("/"===t.charAt(n+1))for(r.nsp="";++n;){var i=t.charAt(n);if(","===i)break;if(r.nsp+=i,n===t.length)break}else r.nsp="/";var s=t.charAt(n+1);if(""!==s&&Number(s)==s){for(r.id="";++n;){var i=t.charAt(n);if(null==i||Number(i)!=i){--n;break}if(r.id+=t.charAt(n),n===t.length)break}r.id=Number(r.id)}return t.charAt(++n)&&(r=c(r,t.substr(n))),h("decoded %s as %j",t,r),r}function c(t,e){try{t.data=JSON.parse(e)}catch(n){return u()}return t}function p(t){this.reconPack=t,this.buffers=[]}function u(){return{type:e.ERROR,data:"parser error"}}var h=n(3)("socket.io-parser"),f=n(8),l=n(9),d=n(11),y=n(12);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=r,e.Decoder=s,r.prototype.encode=function(t,n){if(t.type!==e.EVENT&&t.type!==e.ACK||!l(t.data)||(t.type=t.type===e.EVENT?e.BINARY_EVENT:e.BINARY_ACK),h("encoding packet %j",t),e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type)i(t,n);else{var r=o(t);n([r])}},f(s.prototype),s.prototype.add=function(t){var n;if("string"==typeof t)n=a(t),e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type?(this.reconstructor=new p(n),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",n)):this.emit("decoded",n);else{if(!y(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,this.emit("decoded",n))}},s.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},p.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=d.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},p.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,n){function r(t){if(t)return o(t)}function o(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r,o=0;o<n.length;o++)if(r=n[o],r===e||r.fn===e){n.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var r=0,o=n.length;r<o;++r)n[r].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,n){(function(e){function r(t){if(!t||"object"!=typeof t)return!1;if(o(t)){for(var n=0,i=t.length;n<i;n++)if(r(t[n]))return!0;return!1}if("function"==typeof e.Buffer&&e.Buffer.isBuffer&&e.Buffer.isBuffer(t)||"function"==typeof e.ArrayBuffer&&t instanceof ArrayBuffer||s&&t instanceof Blob||a&&t instanceof File)return!0;if(t.toJSON&&"function"==typeof t.toJSON&&1===arguments.length)return r(t.toJSON(),!0);for(var c in t)if(Object.prototype.hasOwnProperty.call(t,c)&&r(t[c]))return!0;return!1}var o=n(10),i=Object.prototype.toString,s="function"==typeof e.Blob||"[object BlobConstructor]"===i.call(e.Blob),a="function"==typeof e.File||"[object FileConstructor]"===i.call(e.File);t.exports=r}).call(e,function(){return this}())},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e,n){(function(t){function r(t,e){if(!t)return t;if(s(t)){var n={_placeholder:!0,num:e.length};return e.push(t),n}if(i(t)){for(var o=new Array(t.length),a=0;a<t.length;a++)o[a]=r(t[a],e);return o}if("object"==typeof t&&!(t instanceof Date)){var o={};for(var c in t)o[c]=r(t[c],e);return o}return t}function o(t,e){if(!t)return t;if(t&&t._placeholder)return e[t.num];if(i(t))for(var n=0;n<t.length;n++)t[n]=o(t[n],e);else if("object"==typeof t)for(var r in t)t[r]=o(t[r],e);return t}var i=n(10),s=n(12),a=Object.prototype.toString,c="function"==typeof t.Blob||"[object BlobConstructor]"===a.call(t.Blob),p="function"==typeof t.File||"[object FileConstructor]"===a.call(t.File);e.deconstructPacket=function(t){var e=[],n=t.data,o=t;return o.data=r(n,e),o.attachments=e.length,{packet:o,buffers:e}},e.reconstructPacket=function(t,e){return t.data=o(t.data,e),t.attachments=void 0,t},e.removeBlobs=function(t,e){function n(t,a,u){if(!t)return t;if(c&&t instanceof Blob||p&&t instanceof File){r++;var h=new FileReader;h.onload=function(){u?u[a]=this.result:o=this.result,--r||e(o)},h.readAsArrayBuffer(t)}else if(i(t))for(var f=0;f<t.length;f++)n(t[f],f,t);else if("object"==typeof t&&!s(t))for(var l in t)n(t[l],l,t)}var r=0,o=t;n(o),r||e(o)}}).call(e,function(){return this}())},function(t,e){(function(e){function n(t){return e.Buffer&&e.Buffer.isBuffer(t)||e.ArrayBuffer&&t instanceof ArrayBuffer}t.exports=n}).call(e,function(){return this}())},function(t,e,n){"use strict";function r(t,e){if(!(this instanceof r))return new r(t,e);t&&"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new l({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var n=e.parser||c;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this.autoConnect=e.autoConnect!==!1,this.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(14),s=n(39),a=n(8),c=n(7),p=n(41),u=n(42),h=n(3)("socket.io-client:manager"),f=n(37),l=n(43),d=Object.prototype.hasOwnProperty;t.exports=r,r.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)d.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},r.prototype.updateSocketIds=function(){for(var t in this.nsps)d.call(this.nsps,t)&&(this.nsps[t].id=this.generateId(t))},r.prototype.generateId=function(t){return("/"===t?"":t+"#")+this.engine.id},a(r.prototype),r.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},r.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},r.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},r.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},r.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},r.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},r.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},r.prototype.open=r.prototype.connect=function(t,e){if(h("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;h("opening %s",this.uri),this.engine=i(this.uri,this.opts);var n=this.engine,r=this;this.readyState="opening",this.skipReconnect=!1;var o=p(n,"open",function(){r.onopen(),t&&t()}),s=p(n,"error",function(e){if(h("connect_error"),r.cleanup(),r.readyState="closed",r.emitAll("connect_error",e),t){var n=new Error("Connection error");n.data=e,t(n)}else r.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout;h("connect attempt will timeout after %d",a);var c=setTimeout(function(){h("connect attempt timed out after %d",a),o.destroy(),n.close(),n.emit("error","timeout"),r.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(c)}})}return this.subs.push(o),this.subs.push(s),this},r.prototype.onopen=function(){h("open"),this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(p(t,"data",u(this,"ondata"))),this.subs.push(p(t,"ping",u(this,"onping"))),this.subs.push(p(t,"pong",u(this,"onpong"))),this.subs.push(p(t,"error",u(this,"onerror"))),this.subs.push(p(t,"close",u(this,"onclose"))),this.subs.push(p(this.decoder,"decoded",u(this,"ondecoded")))},r.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},r.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},r.prototype.ondata=function(t){this.decoder.add(t)},r.prototype.ondecoded=function(t){this.emit("packet",t)},r.prototype.onerror=function(t){h("error",t),this.emitAll("error",t)},r.prototype.socket=function(t,e){function n(){~f(o.connecting,r)||o.connecting.push(r)}var r=this.nsps[t];if(!r){r=new s(this,t,e),this.nsps[t]=r;var o=this;r.on("connecting",n),r.on("connect",function(){r.id=o.generateId(t)}),this.autoConnect&&n()}return r},r.prototype.destroy=function(t){var e=f(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},r.prototype.packet=function(t){h("writing packet %j",t);var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(n){for(var r=0;r<n.length;r++)e.engine.write(n[r],t.options);e.encoding=!1,e.processPacketQueue()}))},r.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},r.prototype.cleanup=function(){h("cleanup");for(var t=this.subs.length,e=0;e<t;e++){var n=this.subs.shift();n.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},r.prototype.close=r.prototype.disconnect=function(){h("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},r.prototype.onclose=function(t){h("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},r.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)h("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();h("will wait %dms before reconnect attempt",e),this.reconnecting=!0;var n=setTimeout(function(){t.skipReconnect||(h("attempting reconnect"),t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(h("reconnect attempt error"),t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):(h("reconnect success"),t.onreconnect())}))},e);this.subs.push({destroy:function(){clearTimeout(n)}})}},r.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e,n){t.exports=n(15)},function(t,e,n){t.exports=n(16),t.exports.parser=n(23)},function(t,e,n){(function(e){function r(t,n){if(!(this instanceof r))return new r(t,n);n=n||{},t&&"object"==typeof t&&(n=t,t=null),t?(t=u(t),n.hostname=t.host,n.secure="https"===t.protocol||"wss"===t.protocol,n.port=t.port,t.query&&(n.query=t.query)):n.host&&(n.hostname=u(n.host).host),this.secure=null!=n.secure?n.secure:e.location&&"https:"===location.protocol,n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.agent=n.agent||!1,this.hostname=n.hostname||(e.location?location.hostname:"localhost"),this.port=n.port||(e.location&&location.port?location.port:this.secure?443:80),this.query=n.query||{},"string"==typeof this.query&&(this.query=f.decode(this.query)),this.upgrade=!1!==n.upgrade,this.path=(n.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!n.forceJSONP,this.jsonp=!1!==n.jsonp,this.forceBase64=!!n.forceBase64,this.enablesXDR=!!n.enablesXDR,this.timestampParam=n.timestampParam||"t",this.timestampRequests=n.timestampRequests,this.transports=n.transports||["polling","websocket"],this.transportOptions=n.transportOptions||{},this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=n.policyPort||843,this.rememberUpgrade=n.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=n.onlyBinaryUpgrades,this.perMessageDeflate=!1!==n.perMessageDeflate&&(n.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=n.pfx||null,this.key=n.key||null,this.passphrase=n.passphrase||null,this.cert=n.cert||null,this.ca=n.ca||null,this.ciphers=n.ciphers||null,this.rejectUnauthorized=void 0===n.rejectUnauthorized||n.rejectUnauthorized,this.forceNode=!!n.forceNode;var o="object"==typeof e&&e;o.global===o&&(n.extraHeaders&&Object.keys(n.extraHeaders).length>0&&(this.extraHeaders=n.extraHeaders),n.localAddress&&(this.localAddress=n.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,this.open()}function o(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var i=n(17),s=n(8),a=n(3)("engine.io-client:socket"),c=n(37),p=n(23),u=n(2),h=n(38),f=n(31);t.exports=r,r.priorWebsocketSuccess=!1,s(r.prototype),r.protocol=p.protocol,r.Socket=r,r.Transport=n(22),r.transports=n(17),r.parser=n(23),r.prototype.createTransport=function(t){a('creating transport "%s"',t);var e=o(this.query);e.EIO=p.protocol,e.transport=t;var n=this.transportOptions[t]||{};this.id&&(e.sid=this.id);var r=new i[t]({query:e,socket:this,agent:n.agent||this.agent,hostname:n.hostname||this.hostname,port:n.port||this.port,secure:n.secure||this.secure,path:n.path||this.path,forceJSONP:n.forceJSONP||this.forceJSONP,jsonp:n.jsonp||this.jsonp,forceBase64:n.forceBase64||this.forceBase64,enablesXDR:n.enablesXDR||this.enablesXDR,timestampRequests:n.timestampRequests||this.timestampRequests,timestampParam:n.timestampParam||this.timestampParam,policyPort:n.policyPort||this.policyPort,pfx:n.pfx||this.pfx,key:n.key||this.key,passphrase:n.passphrase||this.passphrase,cert:n.cert||this.cert,ca:n.ca||this.ca,ciphers:n.ciphers||this.ciphers,rejectUnauthorized:n.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:n.perMessageDeflate||this.perMessageDeflate,extraHeaders:n.extraHeaders||this.extraHeaders,forceNode:n.forceNode||this.forceNode,localAddress:n.localAddress||this.localAddress,requestTimeout:n.requestTimeout||this.requestTimeout,protocols:n.protocols||void 0});return r},r.prototype.open=function(){var t;if(this.rememberUpgrade&&r.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(n){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},r.prototype.setTransport=function(t){a("setting transport %s",t.name);var e=this;this.transport&&(a("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},r.prototype.probe=function(t){function e(){if(f.onlyBinaryUpgrades){var e=!this.supportsBinary&&f.transport.supportsBinary;h=h||e}h||(a('probe transport "%s" opened',t),u.send([{type:"ping",data:"probe"}]),u.once("packet",function(e){if(!h)if("pong"===e.type&&"probe"===e.data){if(a('probe transport "%s" pong',t),f.upgrading=!0,f.emit("upgrading",u),!u)return;r.priorWebsocketSuccess="websocket"===u.name,a('pausing current transport "%s"',f.transport.name),f.transport.pause(function(){h||"closed"!==f.readyState&&(a("changing transport and sending upgrade packet"),p(),f.setTransport(u),u.send([{type:"upgrade"}]),f.emit("upgrade",u),u=null,f.upgrading=!1,f.flush())})}else{a('probe transport "%s" failed',t);var n=new Error("probe error");n.transport=u.name,f.emit("upgradeError",n)}}))}function n(){h||(h=!0,p(),u.close(),u=null)}function o(e){var r=new Error("probe error: "+e);r.transport=u.name,n(),a('probe transport "%s" failed because of error: %s',t,e),f.emit("upgradeError",r)}function i(){o("transport closed")}function s(){o("socket closed")}function c(t){u&&t.name!==u.name&&(a('"%s" works - aborting "%s"',t.name,u.name),n())}function p(){u.removeListener("open",e),u.removeListener("error",o),u.removeListener("close",i),f.removeListener("close",s),f.removeListener("upgrading",c)}a('probing transport "%s"',t);var u=this.createTransport(t,{probe:1}),h=!1,f=this;r.priorWebsocketSuccess=!1,u.once("open",e),u.once("error",o),u.once("close",i),this.once("close",s),this.once("upgrading",c),u.open()},r.prototype.onOpen=function(){if(a("socket open"),this.readyState="open",r.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){a("starting upgrade probes");for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},r.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(a('socket receive: type "%s", data "%s"',t.type,t.data),this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(h(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}else a('packet received with socket readyState "%s"',this.readyState)},r.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},r.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},r.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){a("writing ping packet - expecting pong within %sms",t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},r.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},r.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},r.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(a("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},r.prototype.write=r.prototype.send=function(t,e,n){return this.sendPacket("message",t,e,n),this},r.prototype.sendPacket=function(t,e,n,r){if("function"==typeof e&&(r=e,e=void 0),"function"==typeof n&&(r=n,n=null),"closing"!==this.readyState&&"closed"!==this.readyState){n=n||{},n.compress=!1!==n.compress;var o={type:t,data:e,options:n};this.emit("packetCreate",o),this.writeBuffer.push(o),r&&this.once("flush",r),this.flush()}},r.prototype.close=function(){function t(){r.onClose("forced close"),a("socket closing - telling transport to close"),r.transport.close()}function e(){r.removeListener("upgrade",e),r.removeListener("upgradeError",e),t()}function n(){r.once("upgrade",e),r.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var r=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?n():t()}):this.upgrading?n():t()}return this},r.prototype.onError=function(t){a("socket error %j",t),r.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},r.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){a('socket close with reason: "%s"',t);var n=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),n.writeBuffer=[],n.prevBufferLen=0}},r.prototype.filterUpgrades=function(t){for(var e=[],n=0,r=t.length;n<r;n++)~c(this.transports,t[n])&&e.push(t[n]);return e}}).call(e,function(){return this}())},function(t,e,n){(function(t){function r(e){var n,r=!1,a=!1,c=!1!==e.jsonp;if(t.location){var p="https:"===location.protocol,u=location.port;u||(u=p?443:80),r=e.hostname!==location.hostname||u!==e.port,a=e.secure!==p}if(e.xdomain=r,e.xscheme=a,n=new o(e),"open"in n&&!e.forceJSONP)return new i(e);if(!c)throw new Error("JSONP disabled");return new s(e)}var o=n(18),i=n(20),s=n(34),a=n(35);e.polling=r,e.websocket=a}).call(e,function(){return this}())},function(t,e,n){(function(e){var r=n(19);t.exports=function(t){var n=t.xdomain,o=t.xscheme,i=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!n||r))return new XMLHttpRequest}catch(s){}try{if("undefined"!=typeof XDomainRequest&&!o&&i)return new XDomainRequest}catch(s){}if(!n)try{
return new(e[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(s){}}}).call(e,function(){return this}())},function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(n){t.exports=!1}},function(t,e,n){(function(e){function r(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,e.location){var n="https:"===location.protocol,r=location.port;r||(r=n?443:80),this.xd=t.hostname!==e.location.hostname||r!==t.port,this.xs=t.secure!==n}}function i(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&&i.requests[t].abort()}var a=n(18),c=n(21),p=n(8),u=n(32),h=n(3)("engine.io-client:polling-xhr");t.exports=o,t.exports.Request=i,u(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var n="string"!=typeof t&&void 0!==t,r=this.request({method:"POST",data:t,isBinary:n}),o=this;r.on("success",e),r.on("error",function(t){o.onError("xhr post error",t)}),this.sendXhr=r},o.prototype.doPoll=function(){h("xhr poll");var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},p(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var n=this.xhr=new a(t),r=this;try{h("xhr open %s: %s",this.method,this.uri),n.open(this.method,this.uri,this.async);try{if(this.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(var o in this.extraHeaders)this.extraHeaders.hasOwnProperty(o)&&n.setRequestHeader(o,this.extraHeaders[o])}}catch(s){}if("POST"===this.method)try{this.isBinary?n.setRequestHeader("Content-type","application/octet-stream"):n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(s){}try{n.setRequestHeader("Accept","*/*")}catch(s){}"withCredentials"in n&&(n.withCredentials=!0),this.requestTimeout&&(n.timeout=this.requestTimeout),this.hasXDR()?(n.onload=function(){r.onLoad()},n.onerror=function(){r.onError(n.responseText)}):n.onreadystatechange=function(){if(2===n.readyState){var t;try{t=n.getResponseHeader("Content-Type")}catch(e){}"application/octet-stream"===t&&(n.responseType="arraybuffer")}4===n.readyState&&(200===n.status||1223===n.status?r.onLoad():setTimeout(function(){r.onError(n.status)},0))},h("xhr data %s",this.data),n.send(this.data)}catch(s){return void setTimeout(function(){r.onError(s)},0)}e.document&&(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},i.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},i.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},i.prototype.cleanup=function(t){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=r:this.xhr.onreadystatechange=r,t)try{this.xhr.abort()}catch(n){}e.document&&delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type")}catch(n){}t="application/octet-stream"===e?this.xhr.response||this.xhr.responseText:this.xhr.responseText}catch(n){this.onError(n)}null!=t&&this.onData(t)},i.prototype.hasXDR=function(){return"undefined"!=typeof e.XDomainRequest&&!this.xs&&this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},e.document&&(e.attachEvent?e.attachEvent("onunload",s):e.addEventListener&&e.addEventListener("beforeunload",s,!1))}).call(e,function(){return this}())},function(t,e,n){function r(t){var e=t&&t.forceBase64;u&&!e||(this.supportsBinary=!1),o.call(this,t)}var o=n(22),i=n(31),s=n(23),a=n(32),c=n(33),p=n(3)("engine.io-client:polling");t.exports=r;var u=function(){var t=n(18),e=new t({xdomain:!1});return null!=e.responseType}();a(r,o),r.prototype.name="polling",r.prototype.doOpen=function(){this.poll()},r.prototype.pause=function(t){function e(){p("paused"),n.readyState="paused",t()}var n=this;if(this.readyState="pausing",this.polling||!this.writable){var r=0;this.polling&&(p("we are currently polling - waiting to pause"),r++,this.once("pollComplete",function(){p("pre-pause polling complete"),--r||e()})),this.writable||(p("we are currently writing - waiting to pause"),r++,this.once("drain",function(){p("pre-pause writing complete"),--r||e()}))}else e()},r.prototype.poll=function(){p("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},r.prototype.onData=function(t){var e=this;p("polling got data %s",t);var n=function(t,n,r){return"opening"===e.readyState&&e.onOpen(),"close"===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,n),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState?this.poll():p('ignoring poll - transport state "%s"',this.readyState))},r.prototype.doClose=function(){function t(){p("writing close packet"),e.write([{type:"close"}])}var e=this;"open"===this.readyState?(p("transport open - closing"),t()):(p("transport not open - deferring close"),this.once("open",t))},r.prototype.write=function(t){var e=this;this.writable=!1;var n=function(){e.writable=!0,e.emit("drain")};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,n)})},r.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",n="";!1!==this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(n=":"+this.port),t.length&&(t="?"+t);var r=this.hostname.indexOf(":")!==-1;return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t}},function(t,e,n){function r(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=n(23),i=n(8);t.exports=r,i(r.prototype),r.prototype.onError=function(t,e){var n=new Error(t);return n.type="TransportError",n.description=e,this.emit("error",n),this},r.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},r.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},r.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},r.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},r.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},r.prototype.onPacket=function(t){this.emit("packet",t)},r.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e,n){(function(t){function r(t,n){var r="b"+e.packets[t.type]+t.data.data;return n(r)}function o(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a<i.length;a++)s[a+1]=i[a];return r(s.buffer)}function i(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=new FileReader;return o.onload=function(){t.data=o.result,e.encodePacket(t,n,!0,r)},o.readAsArrayBuffer(t.data)}function s(t,n,r){if(!n)return e.encodeBase64Packet(t,r);if(g)return i(t,n,r);var o=new Uint8Array(1);o[0]=v[t.type];var s=new k([o.buffer,t.data]);return r(s)}function a(t){try{t=d.decode(t,{strict:!1})}catch(e){return!1}return t}function c(t,e,n){for(var r=new Array(t.length),o=l(t.length,n),i=function(t,n,o){e(n,function(e,n){r[t]=n,o(e,r)})},s=0;s<t.length;s++)i(s,t[s],o)}var p,u=n(24),h=n(9),f=n(25),l=n(26),d=n(27);t&&t.ArrayBuffer&&(p=n(29));var y="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),m="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),g=y||m;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=u(v),w={type:"error",data:"parser error"},k=n(30);e.encodePacket=function(e,n,i,a){"function"==typeof n&&(a=n,n=!1),"function"==typeof i&&(a=i,i=null);var c=void 0===e.data?void 0:e.data.buffer||e.data;if(t.ArrayBuffer&&c instanceof ArrayBuffer)return o(e,n,a);if(k&&c instanceof t.Blob)return s(e,n,a);if(c&&c.base64)return r(e,a);var p=v[e.type];return void 0!==e.data&&(p+=i?d.encode(String(e.data),{strict:!1}):String(e.data)),a(""+p)},e.encodeBase64Packet=function(n,r){var o="b"+e.packets[n.type];if(k&&n.data instanceof t.Blob){var i=new FileReader;return i.onload=function(){var t=i.result.split(",")[1];r(o+t)},i.readAsDataURL(n.data)}var s;try{s=String.fromCharCode.apply(null,new Uint8Array(n.data))}catch(a){for(var c=new Uint8Array(n.data),p=new Array(c.length),u=0;u<c.length;u++)p[u]=c[u];s=String.fromCharCode.apply(null,p)}return o+=t.btoa(s),r(o)},e.decodePacket=function(t,n,r){if(void 0===t)return w;if("string"==typeof t){if("b"===t.charAt(0))return e.decodeBase64Packet(t.substr(1),n);if(r&&(t=a(t),t===!1))return w;var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:w}var i=new Uint8Array(t),o=i[0],s=f(t,1);return k&&"blob"===n&&(s=new k([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var n=b[t.charAt(0)];if(!p)return{type:n,data:{base64:!0,data:t.substr(1)}};var r=p.decode(t.substr(1));return"blob"===e&&k&&(r=new k([r])),{type:n,data:r}},e.encodePayload=function(t,n,r){function o(t){return t.length+":"+t}function i(t,r){e.encodePacket(t,!!s&&n,!1,function(t){r(null,o(t))})}"function"==typeof n&&(r=n,n=null);var s=h(t);return n&&s?k&&!g?e.encodePayloadAsBlob(t,r):e.encodePayloadAsArrayBuffer(t,r):t.length?void c(t,i,function(t,e){return r(e.join(""))}):r("0:")},e.decodePayload=function(t,n,r){if("string"!=typeof t)return e.decodePayloadAsBinary(t,n,r);"function"==typeof n&&(r=n,n=null);var o;if(""===t)return r(w,0,1);for(var i,s,a="",c=0,p=t.length;c<p;c++){var u=t.charAt(c);if(":"===u){if(""===a||a!=(i=Number(a)))return r(w,0,1);if(s=t.substr(c+1,i),a!=s.length)return r(w,0,1);if(s.length){if(o=e.decodePacket(s,n,!1),w.type===o.type&&w.data===o.data)return r(w,0,1);var h=r(o,c+i,p);if(!1===h)return}c+=i,a=""}else a+=u}return""!==a?r(w,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){return n(null,t)})}return t.length?void c(t,r,function(t,e){var r=e.reduce(function(t,e){var n;return n="string"==typeof e?e.length:e.byteLength,t+n.toString().length+n+2},0),o=new Uint8Array(r),i=0;return e.forEach(function(t){var e="string"==typeof t,n=t;if(e){for(var r=new Uint8Array(t.length),s=0;s<t.length;s++)r[s]=t.charCodeAt(s);n=r.buffer}e?o[i++]=0:o[i++]=1;for(var a=n.byteLength.toString(),s=0;s<a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var r=new Uint8Array(n),s=0;s<r.length;s++)o[i++]=r[s]}),n(o.buffer)}):n(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,"string"==typeof t){for(var r=new Uint8Array(t.length),o=0;o<t.length;o++)r[o]=t.charCodeAt(o);t=r.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o<s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,k){var c=new k([e.buffer,a.buffer,t]);n(null,c)}})}c(t,r,function(t,e){return n(new k(e))})},e.decodePayloadAsBinary=function(t,n,r){"function"==typeof n&&(r=n,n=null);for(var o=t,i=[];o.byteLength>0;){for(var s=new Uint8Array(o),a=0===s[0],c="",p=1;255!==s[p];p++){if(c.length>310)return r(w,0,1);c+=s[p]}o=f(o,2+c.length),c=parseInt(c);var u=f(o,0,c);if(a)try{u=String.fromCharCode.apply(null,new Uint8Array(u))}catch(h){var l=new Uint8Array(u);u="";for(var p=0;p<l.length;p++)u+=String.fromCharCode(l[p])}i.push(u),o=f(o,c)}var d=i.length;i.forEach(function(t,o){r(e.decodePacket(t,n,!0),o,d)})}}).call(e,function(){return this}())},function(t,e){t.exports=Object.keys||function(t){var e=[],n=Object.prototype.hasOwnProperty;for(var r in t)n.call(t,r)&&e.push(r);return e}},function(t,e){t.exports=function(t,e,n){var r=t.byteLength;if(e=e||0,n=n||r,t.slice)return t.slice(e,n);if(e<0&&(e+=r),n<0&&(n+=r),n>r&&(n=r),e>=r||e>=n||0===r)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(n-e),s=e,a=0;s<n;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function n(t,e,n){function o(t,r){if(o.count<=0)throw new Error("after called too many times");--o.count,t?(i=!0,e(t),e=n):0!==o.count||i||e(null,r)}var i=!1;return n=n||r,o.count=t,0===t?e():o}function r(){}t.exports=n},function(t,e,n){var r;(function(t,o){!function(i){function s(t){for(var e,n,r=[],o=0,i=t.length;o<i;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<i?(n=t.charCodeAt(o++),56320==(64512&n)?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),o--)):r.push(e);return r}function a(t){for(var e,n=t.length,r=-1,o="";++r<n;)e=t[r],e>65535&&(e-=65536,o+=w(e>>>10&1023|55296),e=56320|1023&e),o+=w(e);return o}function c(t,e){if(t>=55296&&t<=57343){if(e)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value");return!1}return!0}function p(t,e){return w(t>>e&63|128)}function u(t,e){if(0==(4294967168&t))return w(t);var n="";return 0==(4294965248&t)?n=w(t>>6&31|192):0==(4294901760&t)?(c(t,e)||(t=65533),n=w(t>>12&15|224),n+=p(t,6)):0==(4292870144&t)&&(n=w(t>>18&7|240),n+=p(t,12),n+=p(t,6)),n+=w(63&t|128)}function h(t,e){e=e||{};for(var n,r=!1!==e.strict,o=s(t),i=o.length,a=-1,c="";++a<i;)n=o[a],c+=u(n,r);return c}function f(){if(b>=v)throw Error("Invalid byte index");var t=255&g[b];if(b++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function l(t){var e,n,r,o,i;if(b>v)throw Error("Invalid byte index");if(b==v)return!1;if(e=255&g[b],b++,0==(128&e))return e;if(192==(224&e)){if(n=f(),i=(31&e)<<6|n,i>=128)return i;throw Error("Invalid continuation byte")}if(224==(240&e)){if(n=f(),r=f(),i=(15&e)<<12|n<<6|r,i>=2048)return c(i,t)?i:65533;throw Error("Invalid continuation byte")}if(240==(248&e)&&(n=f(),r=f(),o=f(),i=(7&e)<<18|n<<12|r<<6|o,i>=65536&&i<=1114111))return i;throw Error("Invalid UTF-8 detected")}function d(t,e){e=e||{};var n=!1!==e.strict;g=s(t),v=g.length,b=0;for(var r,o=[];(r=l(n))!==!1;)o.push(r);return a(o)}var y="object"==typeof e&&e,m=("object"==typeof t&&t&&t.exports==y&&t,"object"==typeof o&&o);m.global!==m&&m.window!==m||(i=m);var g,v,b,w=String.fromCharCode,k={version:"2.1.2",encode:h,decode:d};r=function(){return k}.call(e,n,e,t),!(void 0!==r&&(t.exports=r))}(this)}).call(e,n(28)(t),function(){return this}())},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){!function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=new Uint8Array(256),r=0;r<t.length;r++)n[t.charCodeAt(r)]=r;e.encode=function(e){var n,r=new Uint8Array(e),o=r.length,i="";for(n=0;n<o;n+=3)i+=t[r[n]>>2],i+=t[(3&r[n])<<4|r[n+1]>>4],i+=t[(15&r[n+1])<<2|r[n+2]>>6],i+=t[63&r[n+2]];return o%3===2?i=i.substring(0,i.length-1)+"=":o%3===1&&(i=i.substring(0,i.length-2)+"=="),i},e.decode=function(t){var e,r,o,i,s,a=.75*t.length,c=t.length,p=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var u=new ArrayBuffer(a),h=new Uint8Array(u);for(e=0;e<c;e+=4)r=n[t.charCodeAt(e)],o=n[t.charCodeAt(e+1)],i=n[t.charCodeAt(e+2)],s=n[t.charCodeAt(e+3)],h[p++]=r<<2|o>>4,h[p++]=(15&o)<<4|i>>2,h[p++]=(3&i)<<6|63&s;return u}}()},function(t,e){(function(e){function n(t){for(var e=0;e<t.length;e++){var n=t[e];if(n.buffer instanceof ArrayBuffer){var r=n.buffer;if(n.byteLength!==r.byteLength){var o=new Uint8Array(n.byteLength);o.set(new Uint8Array(r,n.byteOffset,n.byteLength)),r=o.buffer}t[e]=r}}}function r(t,e){e=e||{};var r=new i;n(t);for(var o=0;o<t.length;o++)r.append(t[o]);return e.type?r.getBlob(e.type):r.getBlob()}function o(t,e){return n(t),new Blob(t,e||{})}var i=e.BlobBuilder||e.WebKitBlobBuilder||e.MSBlobBuilder||e.MozBlobBuilder,s=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(e){return!1}}(),a=s&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(e){return!1}}(),c=i&&i.prototype.append&&i.prototype.getBlob;t.exports=function(){return s?a?e.Blob:o:c?r:void 0}()}).call(e,function(){return this}())},function(t,e){e.encode=function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e},e.decode=function(t){for(var e={},n=t.split("&"),r=0,o=n.length;r<o;r++){var i=n[r].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e){"use strict";function n(t){var e="";do e=s[t%a]+e,t=Math.floor(t/a);while(t>0);return e}function r(t){var e=0;for(u=0;u<t.length;u++)e=e*a+c[t.charAt(u)];return e}function o(){var t=n(+new Date);return t!==i?(p=0,i=t):t+"."+n(p++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},p=0,u=0;u<a;u++)c[s[u]]=u;o.encode=n,o.decode=r,t.exports=o},function(t,e,n){(function(e){function r(){}function o(t){i.call(this,t),this.query=this.query||{},a||(e.___eio||(e.___eio=[]),a=e.___eio),this.index=a.length;var n=this;a.push(function(t){n.onData(t)}),this.query.j=this.index,e.document&&e.addEventListener&&e.addEventListener("beforeunload",function(){n.script&&(n.script.onerror=r)},!1)}var i=n(21),s=n(32);t.exports=o;var a,c=/\n/g,p=/\\n/g;s(o,i),o.prototype.supportsBinary=!1,o.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),i.prototype.doClose.call(this)},o.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var n=document.getElementsByTagName("script")[0];n?n.parentNode.insertBefore(e,n):(document.head||document.body).appendChild(e),this.script=e;var r="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);r&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},o.prototype.doWrite=function(t,e){function n(){r(),e()}function r(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError("jsonp polling iframe removal error",t)}try{var e='<iframe src="javascript:0" name="'+o.iframeId+'">';i=document.createElement(e)}catch(t){i=document.createElement("iframe"),i.name=o.iframeId,i.src="javascript:0"}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement("form"),a=document.createElement("textarea"),u=this.iframeId="eio_iframe_"+this.index;s.className="socketio",s.style.position="absolute",s.style.top="-1000px",s.style.left="-1000px",s.target=u,s.method="POST",s.setAttribute("accept-charset","utf-8"),a.name="d",s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),r(),t=t.replace(p,"\\\n"),this.area.value=t.replace(c,"\\n");try{this.form.submit()}catch(h){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===o.iframe.readyState&&n()}:this.iframe.onload=n}}).call(e,function(){return this}())},function(t,e,n){(function(e){function r(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=h&&!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(l=o),i.call(this,t)}var o,i=n(22),s=n(23),a=n(31),c=n(32),p=n(33),u=n(3)("engine.io-client:websocket"),h=e.WebSocket||e.MozWebSocket;if("undefined"==typeof window)try{o=n(36)}catch(f){}var l=h;l||"undefined"!=typeof window||(l=o),t.exports=r,c(r,i),r.prototype.name="websocket",r.prototype.supportsBinary=!0,r.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,n={agent:this.agent,perMessageDeflate:this.perMessageDeflate};n.pfx=this.pfx,n.key=this.key,n.passphrase=this.passphrase,n.cert=this.cert,n.ca=this.ca,n.ciphers=this.ciphers,n.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(n.headers=this.extraHeaders),this.localAddress&&(n.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket?e?new l(t,e):new l(t):new l(t,e,n)}catch(r){return this.emit("error",r)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},r.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},r.prototype.write=function(t){function n(){r.emit("flush"),setTimeout(function(){r.writable=!0,r.emit("drain")},0)}var r=this;this.writable=!1;for(var o=t.length,i=0,a=o;i<a;i++)!function(t){s.encodePacket(t,r.supportsBinary,function(i){if(!r.usingBrowserWebSocket){var s={};if(t.options&&(s.compress=t.options.compress),r.perMessageDeflate){var a="string"==typeof i?e.Buffer.byteLength(i):i.length;a<r.perMessageDeflate.threshold&&(s.compress=!1)}}try{r.usingBrowserWebSocket?r.ws.send(i):r.ws.send(i,s)}catch(c){u("websocket closed before onclose event")}--o||n()})}(t[i])},r.prototype.onClose=function(){i.prototype.onClose.call(this)},r.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},r.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",n="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(n=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=p()),this.supportsBinary||(t.b64=1),t=a.encode(t),t.length&&(t="?"+t);var r=this.hostname.indexOf(":")!==-1;return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t},r.prototype.check=function(){return!(!l||"__initialize"in l&&this.name===r.prototype.name)}}).call(e,function(){return this}())},function(t,e){},function(t,e){var n=[].indexOf;t.exports=function(t,e){if(n)return t.indexOf(e);for(var r=0;r<t.length;++r)if(t[r]===e)return r;return-1}},function(t,e){(function(e){var n=/^[\],:{}\s]*$/,r=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,o=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,i=/(?:^|:|,)(?:\s*\[)+/g,s=/^\s+/,a=/\s+$/;t.exports=function(t){return"string"==typeof t&&t?(t=t.replace(s,"").replace(a,""),e.JSON&&JSON.parse?JSON.parse(t):n.test(t.replace(r,"@").replace(o,"]").replace(i,""))?new Function("return "+t)():void 0):null}}).call(e,function(){return this}())},function(t,e,n){"use strict";function r(t,e,n){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,n&&n.query&&(this.query=n.query),this.io.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(7),s=n(8),a=n(40),c=n(41),p=n(42),u=n(3)("socket.io-client:socket"),h=n(31);t.exports=e=r;var f={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},l=s.prototype.emit;s(r.prototype),r.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[c(t,"open",p(this,"onopen")),c(t,"packet",p(this,"onpacket")),c(t,"close",p(this,"onclose"))]}},r.prototype.open=r.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},r.prototype.send=function(){var t=a(arguments);return t.unshift("message"),this.emit.apply(this,t),this},r.prototype.emit=function(t){if(f.hasOwnProperty(t))return l.apply(this,arguments),this;var e=a(arguments),n={type:i.EVENT,data:e};return n.options={},n.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(u("emitting packet with ack id %d",this.ids),this.acks[this.ids]=e.pop(),n.id=this.ids++),this.connected?this.packet(n):this.sendBuffer.push(n),delete this.flags,this},r.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},r.prototype.onopen=function(){if(u("transport is open - connecting"),"/"!==this.nsp)if(this.query){var t="object"===o(this.query)?h.encode(this.query):this.query;u("sending connect packet with query %s",t),this.packet({type:i.CONNECT,query:t})}else this.packet({type:i.CONNECT})},r.prototype.onclose=function(t){u("close (%s)",t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},r.prototype.onpacket=function(t){if(t.nsp===this.nsp)switch(t.type){case i.CONNECT:this.onconnect();break;case i.EVENT:this.onevent(t);break;case i.BINARY_EVENT:this.onevent(t);break;case i.ACK:this.onack(t);break;case i.BINARY_ACK:this.onack(t);break;case i.DISCONNECT:this.ondisconnect();break;case i.ERROR:this.emit("error",t.data)}},r.prototype.onevent=function(t){var e=t.data||[];u("emitting event %j",e),null!=t.id&&(u("attaching ack callback to event"),e.push(this.ack(t.id))),this.connected?l.apply(this,e):this.receiveBuffer.push(e)},r.prototype.ack=function(t){var e=this,n=!1;return function(){if(!n){n=!0;var r=a(arguments);u("sending ack %j",r),e.packet({type:i.ACK,id:t,data:r})}}},r.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e?(u("calling ack %s with %j",t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):u("bad ack %s",t.id)},r.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},r.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)l.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},r.prototype.ondisconnect=function(){u("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},r.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},r.prototype.close=r.prototype.disconnect=function(){return this.connected&&(u("performing disconnect (%s)",this.nsp),this.packet({type:i.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},r.prototype.compress=function(t){return this.flags=this.flags||{},this.flags.compress=t,this}},function(t,e){function n(t,e){var n=[];e=e||0;for(var r=e||0;r<t.length;r++)n[r-e]=t[r];return n}t.exports=n},function(t,e){"use strict";function n(t,e,n){return t.on(e,n),{destroy:function(){t.removeListener(e,n)}}}t.exports=n},function(t,e){var n=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var r=n.call(arguments,2);return function(){return e.apply(t,r.concat(n.call(arguments)))}}},function(t,e){function n(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=n,n.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-n:t+n}return 0|Math.min(t,this.max)},n.prototype.reset=function(){this.attempts=0},n.prototype.setMin=function(t){this.ms=t},n.prototype.setMax=function(t){this.max=t},n.prototype.setJitter=function(t){this.jitter=t}}])});
//# sourceMappingURL=socket.io.js.map

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Bar__ = __webpack_require__(23);
/* global document, L */




/*
 * VideoPlayer represents a Licode video component that shows either a local or a remote video.
 * Ex.: var player = VideoPlayer({id: id, stream: stream, elementID: elementID});
 * A VideoPlayer is also a View component.
 */
const VideoPlayer = (spec) => {
  const that = Object(__WEBPACK_IMPORTED_MODULE_0__View__["a" /* default */])({});

  // Variables

  // VideoPlayer ID
  that.id = spec.id;

  // Stream that the VideoPlayer will play
  that.stream = spec.stream.stream;

  // DOM element in which the VideoPlayer will be appended
  that.elementID = spec.elementID;

  // Private functions
  const onmouseover = () => {
    that.bar.display();
  };

  const onmouseout = () => {
    that.bar.hide();
  };

  const applyRatio = (ratio, width, height, reverse) => {
    const condition = !reverse ? width * (1 / ratio) < height : width * (1 / ratio) > height;
    if (condition) {
      that.video.style.width = `${width}px`;
      that.video.style.height = `${(1 / ratio) * width}px`;

      that.video.style.top = `${-((((1 / ratio) * width) / 2) - (height / 2))}px`;
      that.video.style.left = '0px';
    } else {
      that.video.style.height = `${height}px`;
      that.video.style.width = `${ratio * height}px`;

      that.video.style.left = `${-(((ratio * height) / 2) - (width / 2))}px`;
      that.video.style.top = '0px';
    }
  };

  // Public functions

  // It will stop the VideoPlayer and remove it from the HTML
  that.destroy = () => {
    that.video.pause();
    delete that.resizer;
    that.parentNode.removeChild(that.div);
  };

  that.resize = () => {
    const width = that.container.offsetWidth;
    const height = that.container.offsetHeight;

    if (spec.stream.screen || spec.options.crop === false) {
      applyRatio(16 / 9, width, height, false);
    } else if (width !== that.containerWidth || height !== that.containerHeight) {
      applyRatio(4 / 3, width, height, true);
    }

    that.containerWidth = width;
    that.containerHeight = height;
  };

  /* window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      document.getElementById(key).value = unescape(value);
  }); */

  // Container
  that.div = document.createElement('div');
  that.div.setAttribute('id', `player_${that.id}`);
  that.div.setAttribute('class', 'licode_player');
  that.div.setAttribute('style', 'width: 100%; height: 100%; position: relative; ' +
                                   'background-color: black; overflow: hidden;');

  // Loader icon
  if (spec.options.loader !== false) {
    that.loader = document.createElement('img');
    that.loader.setAttribute('style', 'width: 16px; height: 16px; position: absolute; ' +
                                        'top: 50%; left: 50%; margin-top: -8px; margin-left: -8px');
    that.loader.setAttribute('id', `back_${that.id}`);
    that.loader.setAttribute('class', 'licode_loader');
    that.loader.setAttribute('src', `${that.url}/assets/loader.gif`);
  }

  // Video tag
  that.video = document.createElement('video');
  that.video.setAttribute('id', `stream${that.id}`);
  that.video.setAttribute('class', 'licode_stream');
  that.video.setAttribute('style', 'width: 100%; height: 100%; position: absolute');
  that.video.setAttribute('autoplay', 'autoplay');
  that.video.setAttribute('playsinline', 'playsinline');

  if (spec.stream.local) { that.video.volume = 0; }

  if (that.elementID !== undefined) {
    // Check for a passed DOM node.
    if (typeof that.elementID === 'object' &&
          typeof that.elementID.appendChild === 'function') {
      that.container = that.elementID;
    } else {
      that.container = document.getElementById(that.elementID);
    }
  } else {
    that.container = document.body;
  }
  that.container.appendChild(that.div);

  that.parentNode = that.div.parentNode;

  if (that.loader) {
    that.div.appendChild(that.loader);
  }
  that.div.appendChild(that.video);

  that.containerWidth = 0;
  that.containerHeight = 0;

  if (spec.options.resizer !== false) {
    that.resizer = L.ResizeSensor(that.container, that.resize);

    that.resize();
  }

  // Bottom Bar
  if (spec.options.bar !== false) {
    that.bar = Object(__WEBPACK_IMPORTED_MODULE_1__Bar__["a" /* default */])({ elementID: `player_${that.id}`,
      id: that.id,
      stream: spec.stream,
      media: that.video,
      options: spec.options });

    that.div.onmouseover = onmouseover;
    that.div.onmouseout = onmouseout;
  } else {
    // Expose a consistent object to manipulate the media.
    that.media = that.video;
  }

  that.video.srcObject = that.stream;

  return that;
};

/* harmony default export */ __webpack_exports__["a"] = (VideoPlayer);


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View__ = __webpack_require__(3);
/* global document */



/*
 * Speaker represents the volume icon that will be shown in the mediaPlayer, for example.
 * It manages the volume level of the media tag given in the constructor.
 * Every Speaker is a View.
 * Ex.: var speaker = Speaker({elementID: element, media: mediaTag, id: id});
 */
const Speaker = (spec) => {
  const that = Object(__WEBPACK_IMPORTED_MODULE_0__View__["a" /* default */])({});
  let lastVolume = 50;

  const mute = () => {
    that.media.muted = true;
    that.icon.setAttribute('src', `${that.url}/assets/mute48.png`);
    if (that.stream.local) {
      that.stream.stream.getAudioTracks()[0].enabled = false;
    } else {
      lastVolume = that.picker.value;
      that.picker.value = 0;
      that.media.volume = 0;
    }
  };

  const unmute = () => {
    that.media.muted = false;
    that.icon.setAttribute('src', `${that.url}/assets/sound48.png`);
    if (that.stream.local) {
      that.stream.stream.getAudioTracks()[0].enabled = true;
    } else {
      that.picker.value = lastVolume;
      that.media.volume = that.picker.value / 100;
    }
  };

  // Variables

  // DOM element in which the Speaker will be appended
  that.elementID = spec.elementID;

  // media tag
  that.media = spec.media;

  // Speaker id
  that.id = spec.id;

  // MediaStream
  that.stream = spec.stream;

  // Container
  that.div = document.createElement('div');
  that.div.setAttribute('style', 'width: 40%; height: 100%; max-width: 32px; ' +
                                   'position: absolute; right: 0;z-index:0;');

  // Volume icon
  that.icon = document.createElement('img');
  that.icon.setAttribute('id', `volume_${that.id}`);
  that.icon.setAttribute('src', `${that.url}/assets/sound48.png`);
  that.icon.setAttribute('style', 'width: 80%; height: 100%; position: absolute;');
  that.div.appendChild(that.icon);

  that.icon.onclick = () => {
    if (that.media.muted) {
      unmute();
    } else {
      mute();
    }
  };

  if (!that.stream.local) {
    // Volume bar
    that.picker = document.createElement('input');
    that.picker.setAttribute('id', `picker_${that.id}`);
    that.picker.type = 'range';
    that.picker.min = 0;
    that.picker.max = 100;
    that.picker.step = 10;
    that.picker.value = lastVolume;
    //  FireFox supports range sliders as of version 23
    that.picker.setAttribute('orient', 'vertical');
    that.div.appendChild(that.picker);
    that.media.volume = that.picker.value / 100;
    that.media.muted = false;

    that.picker.oninput = () => {
      if (that.picker.value > 0) {
        that.media.muted = false;
        that.icon.setAttribute('src', `${that.url}/assets/sound48.png`);
      } else {
        that.media.muted = true;
        that.icon.setAttribute('src', `${that.url}/assets/mute48.png`);
      }
      that.media.volume = that.picker.value / 100;
    };

    // Private functions
    const show = (displaying) => {
      that.picker.setAttribute('style', `background: transparent; width: 32px;
                                         height: 100px; position: absolute; bottom: 90%;
                                         z-index: 1; right: 0px; -webkit-appearance: slider-vertical;
                                         bottom: ${that.div.offsetHeight}px; display: ${displaying}`);
    };

    // Public functions
    that.div.onmouseover = () => {
      show('block');
    };

    that.div.onmouseout = () => {
      show('none');
    };

    show('none');
  }

  document.getElementById(that.elementID).appendChild(that.div);
  return that;
};

/* harmony default export */ __webpack_exports__["a"] = (Speaker);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Bar__ = __webpack_require__(23);
/* global document */




/*
 * AudioPlayer represents a Licode Audio component that shows either a local or a remote Audio.
 * Ex.: var player = AudioPlayer({id: id, stream: stream, elementID: elementID});
 * A AudioPlayer is also a View component.
 */

const AudioPlayer = (spec) => {
  const that = Object(__WEBPACK_IMPORTED_MODULE_0__View__["a" /* default */])({});
  let onmouseover;
  let onmouseout;

  // Variables

  // AudioPlayer ID
  that.id = spec.id;

  // Stream that the AudioPlayer will play
  that.stream = spec.stream.stream;

  // DOM element in which the AudioPlayer will be appended
  that.elementID = spec.elementID;


    // Audio tag
  that.audio = document.createElement('audio');
  that.audio.setAttribute('id', `stream${that.id}`);
  that.audio.setAttribute('class', 'licode_stream');
  that.audio.setAttribute('style', 'width: 100%; height: 100%; position: absolute');
  that.audio.setAttribute('autoplay', 'autoplay');

  if (spec.stream.local) { that.audio.volume = 0; }

  if (that.elementID !== undefined) {
    // It will stop the AudioPlayer and remove it from the HTML
    that.destroy = () => {
      that.audio.pause();
      that.parentNode.removeChild(that.div);
    };

    onmouseover = () => {
      that.bar.display();
    };

    onmouseout = () => {
      that.bar.hide();
    };

    // Container
    that.div = document.createElement('div');
    that.div.setAttribute('id', `player_${that.id}`);
    that.div.setAttribute('class', 'licode_player');
    that.div.setAttribute('style', 'width: 100%; height: 100%; position: relative; ' +
                              'overflow: hidden;');

    // Check for a passed DOM node.
    if (typeof that.elementID === 'object' &&
          typeof that.elementID.appendChild === 'function') {
      that.container = that.elementID;
    } else {
      that.container = document.getElementById(that.elementID);
    }
    that.container.appendChild(that.div);

    that.parentNode = that.div.parentNode;

    that.div.appendChild(that.audio);

    // Bottom Bar
    if (spec.options.bar !== false) {
      that.bar = Object(__WEBPACK_IMPORTED_MODULE_1__Bar__["a" /* default */])({ elementID: `player_${that.id}`,
        id: that.id,
        stream: spec.stream,
        media: that.audio,
        options: spec.options });

      that.div.onmouseover = onmouseover;
      that.div.onmouseout = onmouseout;
    } else {
      // Expose a consistent object to manipulate the media.
      that.media = that.audio;
    }
  } else {
    // It will stop the AudioPlayer and remove it from the HTML
    that.destroy = () => {
      that.audio.pause();
      that.parentNode.removeChild(that.audio);
    };

    document.body.appendChild(that.audio);
    that.parentNode = document.body;
  }

  that.audio.srcObject = that.stream;

  return that;
};

/* harmony default export */ __webpack_exports__["a"] = (AudioPlayer);


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* global unescape */

const Base64 = (() => {
  let base64Str;
  let base64Count;

  const END_OF_INPUT = -1;
  const base64Chars = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z', '0', '1', '2', '3',
    '4', '5', '6', '7', '8', '9', '+', '/',
  ];

  const reverseBase64Chars = [];

  for (let i = 0; i < base64Chars.length; i += 1) {
    reverseBase64Chars[base64Chars[i]] = i;
  }

  const setBase64Str = (str) => {
    base64Str = str;
    base64Count = 0;
  };

  const readBase64 = () => {
    if (!base64Str) {
      return END_OF_INPUT;
    }
    if (base64Count >= base64Str.length) {
      return END_OF_INPUT;
    }
    const c = base64Str.charCodeAt(base64Count) & 0xff;  // eslint-disable-line no-bitwise
    base64Count += 1;
    return c;
  };

  const encodeBase64 = (str) => {
    let result;
    let lineCount;
    let done;
    setBase64Str(str);
    result = '';
    const inBuffer = new Array(3);
    lineCount = 0;
    done = false;
    while (!done && (inBuffer[0] = readBase64()) !== END_OF_INPUT) {
      inBuffer[1] = readBase64();
      inBuffer[2] = readBase64();
      // eslint-disable-next-line no-bitwise
      result += (base64Chars[inBuffer[0] >> 2]);
      if (inBuffer[1] !== END_OF_INPUT) {
        // eslint-disable-next-line no-bitwise
        result += (base64Chars[((inBuffer[0] << 4) & 0x30) | (inBuffer[1] >> 4)]);
        if (inBuffer[2] !== END_OF_INPUT) {
          // eslint-disable-next-line no-bitwise
          result += (base64Chars[((inBuffer[1] << 2) & 0x3c) | (inBuffer[2] >> 6)]);
          // eslint-disable-next-line no-bitwise
          result += (base64Chars[inBuffer[2] & 0x3F]);
        } else {
          // eslint-disable-next-line no-bitwise
          result += (base64Chars[((inBuffer[1] << 2) & 0x3c)]);
          result = `${result}=`;
          done = true;
        }
      } else {
        // eslint-disable-next-line no-bitwise
        result += (base64Chars[((inBuffer[0] << 4) & 0x30)]);
        result = `${result}=`;
        result = `${result}=`;
        done = true;
      }
      lineCount += 4;
      if (lineCount >= 76) {
        result = `${result}\n`;
        lineCount = 0;
      }
    }
    return result;
  };

  const readReverseBase64 = () => {
    if (!base64Str) {
      return END_OF_INPUT;
    }
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (base64Count >= base64Str.length) {
        return END_OF_INPUT;
      }
      const nextCharacter = base64Str.charAt(base64Count);
      base64Count += 1;
      if (reverseBase64Chars[nextCharacter]) {
        return reverseBase64Chars[nextCharacter];
      }
      if (nextCharacter === 'A') {
        return 0;
      }
    }
  };

  const ntos = (value) => {
    let n = value.toString(16);
    if (n.length === 1) {
      n = `0${n}`;
    }
    n = `%${n}`;
    return unescape(n);
  };

  const decodeBase64 = (str) => {
    let result;
    let done;
    setBase64Str(str);
    result = '';
    const inBuffer = new Array(4);
    done = false;
    while (!done &&
              (inBuffer[0] = readReverseBase64()) !== END_OF_INPUT &&
              (inBuffer[1] = readReverseBase64()) !== END_OF_INPUT) {
      inBuffer[2] = readReverseBase64();
      inBuffer[3] = readReverseBase64();
      // eslint-disable-next-line no-bitwise,no-mixed-operators
      result += ntos((((inBuffer[0] << 2) & 0xff) | inBuffer[1] >> 4));
      if (inBuffer[2] !== END_OF_INPUT) {
        // eslint-disable-next-line no-bitwise,no-mixed-operators
        result += ntos((((inBuffer[1] << 4) & 0xff) | inBuffer[2] >> 2));
        if (inBuffer[3] !== END_OF_INPUT) {
          // eslint-disable-next-line no-bitwise
          result += ntos((((inBuffer[2] << 6) & 0xff) | inBuffer[3]));
        } else {
          done = true;
        }
      } else {
        done = true;
      }
    }
    return result;
  };

  return {
    encodeBase64,
    decodeBase64,
  };
})();

/* harmony default export */ __webpack_exports__["a"] = (Base64);


/***/ })
/******/ ])["default"];
});
