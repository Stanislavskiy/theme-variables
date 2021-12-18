// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dLPE9":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "7fceb6ce7e58da8e";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"dkWBj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _yargs = require("yargs");
var _yargsDefault = parcelHelpers.interopDefault(_yargs);
// import fs from 'fs';
const options = _yargsDefault.default.usage("Usage: -c <config>").option("c", {
    alias: "config",
    describe: "Path to the theme config file",
    type: "string",
    demandOption: true
}).argv;
console.log('CLI interface test', options.config);

},{"yargs":"bAm01","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bAm01":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Bootstraps yargs for ESM:
var _esmMjs = require("./lib/platform-shims/esm.mjs");
var _esmMjsDefault = parcelHelpers.interopDefault(_esmMjs);
var _yargsFactoryJs = require("./build/lib/yargs-factory.js");
'use strict';
const Yargs = _yargsFactoryJs.YargsFactory(_esmMjsDefault.default);
exports.default = Yargs;

},{"./lib/platform-shims/esm.mjs":"5ItC1","./build/lib/yargs-factory.js":"1AO3V","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5ItC1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assert = require("assert");
var _cliui = require("cliui");
var _cliuiDefault = parcelHelpers.interopDefault(_cliui);
var _sync = require("escalade/sync");
var _syncDefault = parcelHelpers.interopDefault(_sync);
var _util = require("util");
var _fs = require("fs");
var _url = require("url");
var _yargsParser = require("yargs-parser");
var _yargsParserDefault = parcelHelpers.interopDefault(_yargsParser);
var _path = require("path");
var _processArgvJs = require("../../build/lib/utils/process-argv.js");
var _yerrorJs = require("../../build/lib/yerror.js");
var _y18N = require("y18n");
var _y18NDefault = parcelHelpers.interopDefault(_y18N);
var process = require("process");
'use strict';
const REQUIRE_ERROR = 'require is not supported by ESM';
const REQUIRE_DIRECTORY_ERROR = 'loading a directory of commands is not supported yet for ESM';
let __dirname;
try {
    __dirname = _url.fileURLToPath("file:///node_modules/yargs/lib/platform-shims/esm.mjs");
} catch (e) {
    __dirname = process.cwd();
}
const mainFilename = __dirname.split('node_modules')[0];
exports.default = {
    assert: {
        notStrictEqual: _assert.notStrictEqual,
        strictEqual: _assert.strictEqual
    },
    cliui: _cliuiDefault.default,
    findUp: _syncDefault.default,
    getEnv: (key)=>{
        return process.env[key];
    },
    inspect: _util.inspect,
    getCallerFile: ()=>{
        throw new _yerrorJs.YError(REQUIRE_DIRECTORY_ERROR);
    },
    getProcessArgvBin: _processArgvJs.getProcessArgvBin,
    mainFilename: mainFilename || process.cwd(),
    Parser: _yargsParserDefault.default,
    path: {
        basename: _path.basename,
        dirname: _path.dirname,
        extname: _path.extname,
        relative: _path.relative,
        resolve: _path.resolve
    },
    process: {
        argv: ()=>process.argv
        ,
        cwd: process.cwd,
        emitWarning: (warning, type)=>process.emitWarning(warning, type)
        ,
        execPath: ()=>process.execPath
        ,
        exit: process.exit,
        nextTick: process.nextTick,
        stdColumns: typeof process.stdout.columns !== 'undefined' ? process.stdout.columns : null
    },
    readFileSync: _fs.readFileSync,
    require: ()=>{
        throw new _yerrorJs.YError(REQUIRE_ERROR);
    },
    requireDirectory: ()=>{
        throw new _yerrorJs.YError(REQUIRE_DIRECTORY_ERROR);
    },
    stringWidth: (str)=>{
        return [
            ...str
        ].length;
    },
    y18n: _y18NDefault.default({
        directory: _path.resolve(__dirname, '../../../locales'),
        updateFiles: false
    })
};

},{"process":"lDnB8","assert":"bTbxk","cliui":"9c9cD","escalade/sync":"5Odro","util":"fZQoa","fs":"joWnX","url":"1F0iP","yargs-parser":"8WlR1","path":"dTeSu","../../build/lib/utils/process-argv.js":"4A2hM","../../build/lib/yerror.js":"gpV5X","y18n":"9GQn6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lDnB8":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {
};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {
};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"bTbxk":[function(require,module,exports) {
var process = require("process");
// Currently in sync with Node.js lib/assert.js
// https://github.com/nodejs/node/commit/2a51ae424a513ec9a6aa3466baa0cc1d55dd4f3b
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var _require = require('./internal/errors'), _require$codes = _require.codes, ERR_AMBIGUOUS_ARGUMENT = _require$codes.ERR_AMBIGUOUS_ARGUMENT, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_INVALID_ARG_VALUE = _require$codes.ERR_INVALID_ARG_VALUE, ERR_INVALID_RETURN_VALUE = _require$codes.ERR_INVALID_RETURN_VALUE, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
var AssertionError = require('./internal/assert/assertion_error');
var _require2 = require('util/'), inspect = _require2.inspect;
var _require$types = require('util/').types, isPromise = _require$types.isPromise, isRegExp = _require$types.isRegExp;
var objectAssign = Object.assign ? Object.assign : require('es6-object-assign').assign;
var objectIs = Object.is ? Object.is : require('object-is');
var errorCache = new Map();
var isDeepEqual;
var isDeepStrictEqual;
var parseExpressionAt;
var findNodeAround;
var decoder;
function lazyLoadComparison() {
    var comparison = require('./internal/util/comparisons');
    isDeepEqual = comparison.isDeepEqual;
    isDeepStrictEqual = comparison.isDeepStrictEqual;
} // Escape control characters but not \n and \t to keep the line breaks and
// indentation intact.
// eslint-disable-next-line no-control-regex
var escapeSequencesRegExp = /[\x00-\x08\x0b\x0c\x0e-\x1f]/g;
var meta = [
    "\\u0000",
    "\\u0001",
    "\\u0002",
    "\\u0003",
    "\\u0004",
    "\\u0005",
    "\\u0006",
    "\\u0007",
    '\\b',
    '',
    '',
    "\\u000b",
    '\\f',
    '',
    "\\u000e",
    "\\u000f",
    "\\u0010",
    "\\u0011",
    "\\u0012",
    "\\u0013",
    "\\u0014",
    "\\u0015",
    "\\u0016",
    "\\u0017",
    "\\u0018",
    "\\u0019",
    "\\u001a",
    "\\u001b",
    "\\u001c",
    "\\u001d",
    "\\u001e",
    "\\u001f"
];
var escapeFn = function escapeFn(str) {
    return meta[str.charCodeAt(0)];
};
var warned = false; // The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.
var assert = module.exports = ok;
var NO_EXCEPTION_SENTINEL = {
}; // All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided. All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.
function innerFail(obj) {
    if (obj.message instanceof Error) throw obj.message;
    throw new AssertionError(obj);
}
function fail(actual, expected, message, operator, stackStartFn) {
    var argsLen = arguments.length;
    var internalMessage;
    if (argsLen === 0) internalMessage = 'Failed';
    else if (argsLen === 1) {
        message = actual;
        actual = undefined;
    } else {
        if (warned === false) {
            warned = true;
            var warn = process.emitWarning ? process.emitWarning : console.warn.bind(console);
            warn("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", 'DeprecationWarning', 'DEP0094');
        }
        if (argsLen === 2) operator = '!=';
    }
    if (message instanceof Error) throw message;
    var errArgs = {
        actual: actual,
        expected: expected,
        operator: operator === undefined ? 'fail' : operator,
        stackStartFn: stackStartFn || fail
    };
    if (message !== undefined) errArgs.message = message;
    var err = new AssertionError(errArgs);
    if (internalMessage) {
        err.message = internalMessage;
        err.generatedMessage = true;
    }
    throw err;
}
assert.fail = fail; // The AssertionError is defined in internal/error.
assert.AssertionError = AssertionError;
function innerOk(fn, argLen, value, message) {
    if (!value) {
        var generatedMessage = false;
        if (argLen === 0) {
            generatedMessage = true;
            message = 'No value argument passed to `assert.ok()`';
        } else if (message instanceof Error) throw message;
        var err = new AssertionError({
            actual: value,
            expected: true,
            message: message,
            operator: '==',
            stackStartFn: fn
        });
        err.generatedMessage = generatedMessage;
        throw err;
    }
} // Pure assertion tests whether a value is truthy, as determined
// by !!value.
function ok() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    innerOk.apply(void 0, [
        ok,
        args.length
    ].concat(args));
}
assert.ok = ok; // The equality assertion tests shallow, coercive equality with ==.
/* eslint-disable no-restricted-properties */ assert.equal = function equal(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
     // eslint-disable-next-line eqeqeq
    if (actual != expected) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: '==',
        stackStartFn: equal
    });
}; // The non-equality assertion tests for whether two objects are not
// equal with !=.
assert.notEqual = function notEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
     // eslint-disable-next-line eqeqeq
    if (actual == expected) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: '!=',
        stackStartFn: notEqual
    });
}; // The equivalence assertion tests a deep equality relation.
assert.deepEqual = function deepEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (!isDeepEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'deepEqual',
        stackStartFn: deepEqual
    });
}; // The non-equivalence assertion tests for any deep inequality.
assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (isDeepEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'notDeepEqual',
        stackStartFn: notDeepEqual
    });
};
/* eslint-enable */ assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (!isDeepStrictEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'deepStrictEqual',
        stackStartFn: deepStrictEqual
    });
};
assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (isDeepStrictEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'notDeepStrictEqual',
        stackStartFn: notDeepStrictEqual
    });
}
assert.strictEqual = function strictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (!objectIs(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'strictEqual',
        stackStartFn: strictEqual
    });
};
assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS('actual', 'expected');
    if (objectIs(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: 'notStrictEqual',
        stackStartFn: notStrictEqual
    });
};
var Comparison1 = function Comparison(obj, keys, actual) {
    var _this = this;
    _classCallCheck(this, Comparison);
    keys.forEach(function(key) {
        if (key in obj) {
            if (actual !== undefined && typeof actual[key] === 'string' && isRegExp(obj[key]) && obj[key].test(actual[key])) _this[key] = actual[key];
            else _this[key] = obj[key];
        }
    });
};
function compareExceptionKey(actual, expected, key, message, keys, fn) {
    if (!(key in actual) || !isDeepStrictEqual(actual[key], expected[key])) {
        if (!message) {
            // Create placeholder objects to create a nice output.
            var a = new Comparison1(actual, keys);
            var b = new Comparison1(expected, keys, actual);
            var err = new AssertionError({
                actual: a,
                expected: b,
                operator: 'deepStrictEqual',
                stackStartFn: fn
            });
            err.actual = actual;
            err.expected = expected;
            err.operator = fn.name;
            throw err;
        }
        innerFail({
            actual: actual,
            expected: expected,
            message: message,
            operator: fn.name,
            stackStartFn: fn
        });
    }
}
function expectedException(actual, expected, msg, fn) {
    if (typeof expected !== 'function') {
        if (isRegExp(expected)) return expected.test(actual); // assert.doesNotThrow does not accept objects.
        if (arguments.length === 2) throw new ERR_INVALID_ARG_TYPE('expected', [
            'Function',
            'RegExp'
        ], expected);
         // Handle primitives properly.
        if (_typeof(actual) !== 'object' || actual === null) {
            var err = new AssertionError({
                actual: actual,
                expected: expected,
                message: msg,
                operator: 'deepStrictEqual',
                stackStartFn: fn
            });
            err.operator = fn.name;
            throw err;
        }
        var keys = Object.keys(expected); // Special handle errors to make sure the name and the message are compared
        // as well.
        if (expected instanceof Error) keys.push('name', 'message');
        else if (keys.length === 0) throw new ERR_INVALID_ARG_VALUE('error', expected, 'may not be an empty object');
        if (isDeepEqual === undefined) lazyLoadComparison();
        keys.forEach(function(key) {
            if (typeof actual[key] === 'string' && isRegExp(expected[key]) && expected[key].test(actual[key])) return;
            compareExceptionKey(actual, expected, key, msg, keys, fn);
        });
        return true;
    } // Guard instanceof against arrow functions as they don't have a prototype.
    if (expected.prototype !== undefined && actual instanceof expected) return true;
    if (Error.isPrototypeOf(expected)) return false;
    return expected.call({
    }, actual) === true;
}
function getActual(fn) {
    if (typeof fn !== 'function') throw new ERR_INVALID_ARG_TYPE('fn', 'Function', fn);
    try {
        fn();
    } catch (e) {
        return e;
    }
    return NO_EXCEPTION_SENTINEL;
}
function checkIsPromise(obj) {
    // Accept native ES6 promises and promises that are implemented in a similar
    // way. Do not accept thenables that use a function as `obj` and that have no
    // `catch` handler.
    // TODO: thenables are checked up until they have the correct methods,
    // but according to documentation, the `then` method should receive
    // the `fulfill` and `reject` arguments as well or it may be never resolved.
    return isPromise(obj) || obj !== null && _typeof(obj) === 'object' && typeof obj.then === 'function' && typeof obj.catch === 'function';
}
function waitForActual(promiseFn) {
    return Promise.resolve().then(function() {
        var resultPromise;
        if (typeof promiseFn === 'function') {
            // Return a rejected promise if `promiseFn` throws synchronously.
            resultPromise = promiseFn(); // Fail in case no promise is returned.
            if (!checkIsPromise(resultPromise)) throw new ERR_INVALID_RETURN_VALUE('instance of Promise', 'promiseFn', resultPromise);
        } else if (checkIsPromise(promiseFn)) resultPromise = promiseFn;
        else throw new ERR_INVALID_ARG_TYPE('promiseFn', [
            'Function',
            'Promise'
        ], promiseFn);
        return Promise.resolve().then(function() {
            return resultPromise;
        }).then(function() {
            return NO_EXCEPTION_SENTINEL;
        }).catch(function(e) {
            return e;
        });
    });
}
function expectsError(stackStartFn, actual, error, message) {
    if (typeof error === 'string') {
        if (arguments.length === 4) throw new ERR_INVALID_ARG_TYPE('error', [
            'Object',
            'Error',
            'Function',
            'RegExp'
        ], error);
        if (_typeof(actual) === 'object' && actual !== null) {
            if (actual.message === error) throw new ERR_AMBIGUOUS_ARGUMENT('error/message', "The error message \"".concat(actual.message, "\" is identical to the message."));
        } else if (actual === error) throw new ERR_AMBIGUOUS_ARGUMENT('error/message', "The error \"".concat(actual, "\" is identical to the message."));
        message = error;
        error = undefined;
    } else if (error != null && _typeof(error) !== 'object' && typeof error !== 'function') throw new ERR_INVALID_ARG_TYPE('error', [
        'Object',
        'Error',
        'Function',
        'RegExp'
    ], error);
    if (actual === NO_EXCEPTION_SENTINEL) {
        var details = '';
        if (error && error.name) details += " (".concat(error.name, ")");
        details += message ? ": ".concat(message) : '.';
        var fnType = stackStartFn.name === 'rejects' ? 'rejection' : 'exception';
        innerFail({
            actual: undefined,
            expected: error,
            operator: stackStartFn.name,
            message: "Missing expected ".concat(fnType).concat(details),
            stackStartFn: stackStartFn
        });
    }
    if (error && !expectedException(actual, error, message, stackStartFn)) throw actual;
}
function expectsNoError(stackStartFn, actual, error, message) {
    if (actual === NO_EXCEPTION_SENTINEL) return;
    if (typeof error === 'string') {
        message = error;
        error = undefined;
    }
    if (!error || expectedException(actual, error)) {
        var details = message ? ": ".concat(message) : '.';
        var fnType = stackStartFn.name === 'doesNotReject' ? 'rejection' : 'exception';
        innerFail({
            actual: actual,
            expected: error,
            operator: stackStartFn.name,
            message: "Got unwanted ".concat(fnType).concat(details, "\n") + "Actual message: \"".concat(actual && actual.message, "\""),
            stackStartFn: stackStartFn
        });
    }
    throw actual;
}
assert.throws = function throws(promiseFn) {
    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
    expectsError.apply(void 0, [
        throws,
        getActual(promiseFn)
    ].concat(args));
};
assert.rejects = function rejects(promiseFn) {
    for(var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)args[_key3 - 1] = arguments[_key3];
    return waitForActual(promiseFn).then(function(result) {
        return expectsError.apply(void 0, [
            rejects,
            result
        ].concat(args));
    });
};
assert.doesNotThrow = function doesNotThrow(fn) {
    for(var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++)args[_key4 - 1] = arguments[_key4];
    expectsNoError.apply(void 0, [
        doesNotThrow,
        getActual(fn)
    ].concat(args));
};
assert.doesNotReject = function doesNotReject(fn) {
    for(var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++)args[_key5 - 1] = arguments[_key5];
    return waitForActual(fn).then(function(result) {
        return expectsNoError.apply(void 0, [
            doesNotReject,
            result
        ].concat(args));
    });
};
assert.ifError = function ifError(err) {
    if (err !== null && err !== undefined) {
        var message = 'ifError got unwanted exception: ';
        if (_typeof(err) === 'object' && typeof err.message === 'string') {
            if (err.message.length === 0 && err.constructor) message += err.constructor.name;
            else message += err.message;
        } else message += inspect(err);
        var newErr = new AssertionError({
            actual: err,
            expected: null,
            operator: 'ifError',
            message: message,
            stackStartFn: ifError
        }); // Make sure we actually have a stack trace!
        var origStack = err.stack;
        if (typeof origStack === 'string') {
            // This will remove any duplicated frames from the error frames taken
            // from within `ifError` and add the original error frames to the newly
            // created ones.
            var tmp2 = origStack.split('\n');
            tmp2.shift(); // Filter all frames existing in err.stack.
            var tmp1 = newErr.stack.split('\n');
            for(var i = 0; i < tmp2.length; i++){
                // Find the first occurrence of the frame.
                var pos = tmp1.indexOf(tmp2[i]);
                if (pos !== -1) {
                    // Only keep new frames.
                    tmp1 = tmp1.slice(0, pos);
                    break;
                }
            }
            newErr.stack = "".concat(tmp1.join('\n'), "\n").concat(tmp2.join('\n'));
        }
        throw newErr;
    }
}; // Expose a strict only variant of assert
function strict() {
    for(var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++)args[_key6] = arguments[_key6];
    innerOk.apply(void 0, [
        strict,
        args.length
    ].concat(args));
}
assert.strict = objectAssign(strict, assert, {
    equal: assert.strictEqual,
    deepEqual: assert.deepStrictEqual,
    notEqual: assert.notStrictEqual,
    notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

},{"process":"lDnB8","./internal/errors":"LSymQ","./internal/assert/assertion_error":"1yuNT","util/":"fZQoa","es6-object-assign":"fc6lQ","object-is":"V34yE","./internal/util/comparisons":"56qKQ"}],"LSymQ":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/errors.js
// https://github.com/nodejs/node/commit/3b044962c48fe313905877a96b5d0894a5404f6f
/* eslint node-core/documented-errors: "error" */ /* eslint node-core/alphabetize-errors: "error" */ /* eslint node-core/prefer-util-format-errors: "error" */ 'use strict'; // The whole point behind this internal module is to allow Node.js to no
// longer be forced to treat every error message change as a semver-major
// change. The NodeError classes here all expose a `code` property whose
// value statically and permanently identifies the error. While the error
// message may change, the code should not.
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
var codes = {
}; // Lazy loaded
var assert;
var util;
function createErrorType(code, message, Base) {
    if (!Base) Base = Error;
    function getMessage(arg1, arg2, arg3) {
        if (typeof message === 'string') return message;
        else return message(arg1, arg2, arg3);
    }
    var NodeError1 = /*#__PURE__*/ function(_Base) {
        _inherits(NodeError, _Base);
        function NodeError(arg1, arg2, arg3) {
            var _this;
            _classCallCheck(this, NodeError);
            _this = _possibleConstructorReturn(this, _getPrototypeOf(NodeError).call(this, getMessage(arg1, arg2, arg3)));
            _this.code = code;
            return _this;
        }
        return NodeError;
    }(Base);
    codes[code] = NodeError1;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i) {
            return String(i);
        });
        if (len > 2) return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
        else if (len === 2) return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        else return "of ".concat(thing, " ").concat(expected[0]);
    } else return "of ".concat(thing, " ").concat(String(expected));
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function includes(str, search, start) {
    if (typeof start !== 'number') start = 0;
    if (start + search.length > str.length) return false;
    else return str.indexOf(search, start) !== -1;
}
createErrorType('ERR_AMBIGUOUS_ARGUMENT', 'The "%s" argument is ambiguous. %s', TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function(name, expected, actual) {
    if (assert === undefined) assert = require('../assert');
    assert(typeof name === 'string', "'name' must be a string"); // determiner: 'must be' or 'must not be'
    var determiner;
    if (typeof expected === 'string' && startsWith(expected, 'not ')) {
        determiner = 'must not be';
        expected = expected.replace(/^not /, '');
    } else determiner = 'must be';
    var msg;
    if (endsWith(name, ' argument')) // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
    else {
        var type = includes(name, '.') ? 'property' : 'argument';
        msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
    } // TODO(BridgeAR): Improve the output by showing `null` and similar.
    msg += ". Received type ".concat(_typeof(actual));
    return msg;
}, TypeError);
createErrorType('ERR_INVALID_ARG_VALUE', function(name, value) {
    var reason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'is invalid';
    if (util === undefined) util = require('util/');
    var inspected = util.inspect(value);
    if (inspected.length > 128) inspected = "".concat(inspected.slice(0, 128), "...");
    return "The argument '".concat(name, "' ").concat(reason, ". Received ").concat(inspected);
}, TypeError, RangeError);
createErrorType('ERR_INVALID_RETURN_VALUE', function(input, name, value) {
    var type;
    if (value && value.constructor && value.constructor.name) type = "instance of ".concat(value.constructor.name);
    else type = "type ".concat(_typeof(value));
    return "Expected ".concat(input, " to be returned from the \"").concat(name, "\"") + " function but got ".concat(type, ".");
}, TypeError);
createErrorType('ERR_MISSING_ARGS', function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    if (assert === undefined) assert = require('../assert');
    assert(args.length > 0, 'At least one arg needs to be specified');
    var msg = 'The ';
    var len = args.length;
    args = args.map(function(a) {
        return "\"".concat(a, "\"");
    });
    switch(len){
        case 1:
            msg += "".concat(args[0], " argument");
            break;
        case 2:
            msg += "".concat(args[0], " and ").concat(args[1], " arguments");
            break;
        default:
            msg += args.slice(0, len - 1).join(', ');
            msg += ", and ".concat(args[len - 1], " arguments");
            break;
    }
    return "".concat(msg, " must be specified");
}, TypeError);
module.exports.codes = codes;

},{"../assert":"bTbxk","util/":"fZQoa"}],"fZQoa":[function(require,module,exports) {
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {
    };
    for(var i = 0; i < keys.length; i++)descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    return descriptors;
};
var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
    if (!isString(f)) {
        var objects = [];
        for(var i = 0; i < arguments.length; i++)objects.push(inspect(arguments[i]));
        return objects.join(' ');
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function(x) {
        if (x === '%%') return '%';
        if (i >= len) return x;
        switch(x){
            case '%s':
                return String(args[i++]);
            case '%d':
                return Number(args[i++]);
            case '%j':
                try {
                    return JSON.stringify(args[i++]);
                } catch (_) {
                    return '[Circular]';
                }
            default:
                return x;
        }
    });
    for(var x1 = args[i]; i < len; x1 = args[++i])if (isNull(x1) || !isObject(x1)) str += ' ' + x1;
    else str += ' ' + inspect(x1);
    return str;
};
// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
    if (typeof process !== 'undefined' && process.noDeprecation === true) return fn;
    // Allow for deprecating things in the process of starting up.
    if (typeof process === 'undefined') return function() {
        return exports.deprecate(fn, msg).apply(this, arguments);
    };
    var warned = false;
    function deprecated() {
        if (!warned) {
            if (process.throwDeprecation) throw new Error(msg);
            else if (process.traceDeprecation) console.trace(msg);
            else console.error(msg);
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
};
var debugs = {
};
var debugEnvRegex = /^$/;
var debugEnv;
exports.debuglog = function(set) {
    set = set.toUpperCase();
    if (!debugs[set]) {
        if (debugEnvRegex.test(set)) {
            var pid = process.pid;
            debugs[set] = function() {
                var msg = exports.format.apply(exports, arguments);
                console.error('%s %d: %s', set, pid, msg);
            };
        } else debugs[set] = function() {
        };
    }
    return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */ /* legacy: obj, showHidden, depth, colors*/ function inspect(obj, opts) {
    // default options
    var ctx = {
        seen: [],
        stylize: stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if (isBoolean(opts)) // legacy...
    ctx.showHidden = opts;
    else if (opts) // got an "options" object
    exports._extend(ctx, opts);
    // set default options
    if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if (isUndefined(ctx.depth)) ctx.depth = 2;
    if (isUndefined(ctx.colors)) ctx.colors = false;
    if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;
// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
    'bold': [
        1,
        22
    ],
    'italic': [
        3,
        23
    ],
    'underline': [
        4,
        24
    ],
    'inverse': [
        7,
        27
    ],
    'white': [
        37,
        39
    ],
    'grey': [
        90,
        39
    ],
    'black': [
        30,
        39
    ],
    'blue': [
        34,
        39
    ],
    'cyan': [
        36,
        39
    ],
    'green': [
        32,
        39
    ],
    'magenta': [
        35,
        39
    ],
    'red': [
        31,
        39
    ],
    'yellow': [
        33,
        39
    ]
};
// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
    'special': 'cyan',
    'number': 'yellow',
    'boolean': 'yellow',
    'undefined': 'grey',
    'null': 'bold',
    'string': 'green',
    'date': 'magenta',
    // "name": intentionally not styling
    'regexp': 'red'
};
function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];
    if (style) return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
    else return str;
}
function stylizeNoColor(str, styleType) {
    return str;
}
function arrayToHash(array) {
    var hash = {
    };
    array.forEach(function(val, idx) {
        hash[val] = true;
    });
    return hash;
}
function formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) ret = formatValue(ctx, ret, recurseTimes);
        return ret;
    }
    // Primitive types cannot have properties
    var primitive = formatPrimitive(ctx, value);
    if (primitive) return primitive;
    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);
    if (ctx.showHidden) keys = Object.getOwnPropertyNames(value);
    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) return formatError(value);
    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
        if (isFunction(value)) {
            var name = value.name ? ': ' + value.name : '';
            return ctx.stylize('[Function' + name + ']', 'special');
        }
        if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        if (isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), 'date');
        if (isError(value)) return formatError(value);
    }
    var base = '', array = false, braces = [
        '{',
        '}'
    ];
    // Make Array say that they are Array
    if (isArray(value)) {
        array = true;
        braces = [
            '[',
            ']'
        ];
    }
    // Make functions say that they are functions
    if (isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
    }
    // Make RegExps say that they are RegExps
    if (isRegExp(value)) base = ' ' + RegExp.prototype.toString.call(value);
    // Make dates with properties first say the date
    if (isDate(value)) base = ' ' + Date.prototype.toUTCString.call(value);
    // Make error with message first say the error
    if (isError(value)) base = ' ' + formatError(value);
    if (keys.length === 0 && (!array || value.length == 0)) return braces[0] + base + braces[1];
    if (recurseTimes < 0) {
        if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        else return ctx.stylize('[Object]', 'special');
    }
    ctx.seen.push(value);
    var output;
    if (array) output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    else output = keys.map(function(key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
    ctx.seen.pop();
    return reduceToSingleString(output, base, braces);
}
function formatPrimitive(ctx, value) {
    if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
    if (isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
    }
    if (isNumber(value)) return ctx.stylize('' + value, 'number');
    if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
    // For some reason typeof null is "object", so special case here.
    if (isNull(value)) return ctx.stylize('null', 'null');
}
function formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
}
function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for(var i = 0, l = value.length; i < l; ++i)if (hasOwnProperty(value, String(i))) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    else output.push('');
    keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    });
    return output;
}
function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key]
    };
    if (desc.get) {
        if (desc.set) str = ctx.stylize('[Getter/Setter]', 'special');
        else str = ctx.stylize('[Getter]', 'special');
    } else if (desc.set) str = ctx.stylize('[Setter]', 'special');
    if (!hasOwnProperty(visibleKeys, key)) name = '[' + key + ']';
    if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) str = formatValue(ctx, desc.value, null);
            else str = formatValue(ctx, desc.value, recurseTimes - 1);
            if (str.indexOf('\n') > -1) {
                if (array) str = str.split('\n').map(function(line) {
                    return '  ' + line;
                }).join('\n').substr(2);
                else str = '\n' + str.split('\n').map(function(line) {
                    return '   ' + line;
                }).join('\n');
            }
        } else str = ctx.stylize('[Circular]', 'special');
    }
    if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) return str;
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.substr(1, name.length - 2);
            name = ctx.stylize(name, 'name');
        } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, 'string');
        }
    }
    return name + ': ' + str;
}
function reduceToSingleString(output, base, braces) {
    var numLinesEst = 0;
    var length = output.reduce(function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf('\n') >= 0) numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);
    if (length > 60) return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}
// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
exports.types = require('./support/types');
function isArray(ar) {
    return Array.isArray(ar);
}
exports.isArray = isArray;
function isBoolean(arg) {
    return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;
function isNull(arg) {
    return arg === null;
}
exports.isNull = isNull;
function isNullOrUndefined(arg) {
    return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;
function isNumber(arg) {
    return typeof arg === 'number';
}
exports.isNumber = isNumber;
function isString(arg) {
    return typeof arg === 'string';
}
exports.isString = isString;
function isSymbol(arg) {
    return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;
function isUndefined(arg) {
    return arg === void 0;
}
exports.isUndefined = isUndefined;
function isRegExp(re) {
    return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;
exports.types.isRegExp = isRegExp;
function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;
function isDate(d) {
    return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;
exports.types.isDate = isDate;
function isError(e) {
    return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;
exports.types.isNativeError = isError;
function isFunction(arg) {
    return typeof arg === 'function';
}
exports.isFunction = isFunction;
function isPrimitive(arg) {
    return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;
exports.isBuffer = require('./support/isBuffer');
function objectToString(o) {
    return Object.prototype.toString.call(o);
}
function pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
}
var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
// 26 Feb 16:19:34
function timestamp() {
    var d = new Date();
    var time = [
        pad(d.getHours()),
        pad(d.getMinutes()),
        pad(d.getSeconds())
    ].join(':');
    return [
        d.getDate(),
        months[d.getMonth()],
        time
    ].join(' ');
}
// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
    console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */ exports.inherits = require('inherits');
exports._extend = function(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !isObject(add)) return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while(i--)origin[keys[i]] = add[keys[i]];
    return origin;
};
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;
exports.promisify = function promisify(original) {
    if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');
    if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
        var fn = original[kCustomPromisifiedSymbol];
        if (typeof fn !== 'function') throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
        });
        return fn;
    }
    function fn() {
        var promiseResolve, promiseReject;
        var promise = new Promise(function(resolve, reject) {
            promiseResolve = resolve;
            promiseReject = reject;
        });
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        args.push(function(err, value) {
            if (err) promiseReject(err);
            else promiseResolve(value);
        });
        try {
            original.apply(this, args);
        } catch (err) {
            promiseReject(err);
        }
        return promise;
    }
    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
    if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
    });
    return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
};
exports.promisify.custom = kCustomPromisifiedSymbol;
function callbackifyOnRejected(reason, cb) {
    // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
    // Because `null` is a special error value in callbacks which means "no error
    // occurred", we error-wrap so the callback consumer can distinguish between
    // "the promise rejected with null" or "the promise fulfilled with undefined".
    if (!reason) {
        var newReason = new Error('Promise was rejected with a falsy value');
        newReason.reason = reason;
        reason = newReason;
    }
    return cb(reason);
}
function callbackify(original) {
    if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');
    // We DO NOT return the promise as it gives the user a false sense that
    // the promise is actually somehow related to the callback's execution
    // and that the callback throwing will reject the promise.
    function callbackified() {
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        var maybeCb = args.pop();
        if (typeof maybeCb !== 'function') throw new TypeError('The last argument must be of type Function');
        var self = this;
        var cb = function() {
            return maybeCb.apply(self, arguments);
        };
        // In true node style we process the callback on `nextTick` with all the
        // implications (stack, `uncaughtException`, `async_hooks`)
        original.apply(this, args).then(function(ret) {
            process.nextTick(cb.bind(null, null, ret));
        }, function(rej) {
            process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
        });
    }
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
    return callbackified;
}
exports.callbackify = callbackify;

},{"process":"lDnB8","./support/types":"9tAOj","./support/isBuffer":"k1wGR","inherits":"d3hL2"}],"9tAOj":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
'use strict';
var isArgumentsObject = require('is-arguments');
var isGeneratorFunction = require('is-generator-function');
var whichTypedArray = require('which-typed-array');
var isTypedArray = require('is-typed-array');
function uncurryThis(f) {
    return f.call.bind(f);
}
var BigIntSupported = typeof BigInt !== 'undefined';
var SymbolSupported = typeof Symbol !== 'undefined';
var ObjectToString = uncurryThis(Object.prototype.toString);
var numberValue = uncurryThis(Number.prototype.valueOf);
var stringValue = uncurryThis(String.prototype.valueOf);
var booleanValue = uncurryThis(Boolean.prototype.valueOf);
if (BigIntSupported) var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
if (SymbolSupported) var symbolValue = uncurryThis(Symbol.prototype.valueOf);
function checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== 'object') return false;
    try {
        prototypeValueOf(value);
        return true;
    } catch (e) {
        return false;
    }
}
exports.isArgumentsObject = isArgumentsObject;
exports.isGeneratorFunction = isGeneratorFunction;
exports.isTypedArray = isTypedArray;
// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function isPromise(input) {
    return typeof Promise !== 'undefined' && input instanceof Promise || input !== null && typeof input === 'object' && typeof input.then === 'function' && typeof input.catch === 'function';
}
exports.isPromise = isPromise;
function isArrayBufferView(value) {
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) return ArrayBuffer.isView(value);
    return isTypedArray(value) || isDataView(value);
}
exports.isArrayBufferView = isArrayBufferView;
function isUint8Array(value) {
    return whichTypedArray(value) === 'Uint8Array';
}
exports.isUint8Array = isUint8Array;
function isUint8ClampedArray(value) {
    return whichTypedArray(value) === 'Uint8ClampedArray';
}
exports.isUint8ClampedArray = isUint8ClampedArray;
function isUint16Array(value) {
    return whichTypedArray(value) === 'Uint16Array';
}
exports.isUint16Array = isUint16Array;
function isUint32Array(value) {
    return whichTypedArray(value) === 'Uint32Array';
}
exports.isUint32Array = isUint32Array;
function isInt8Array(value) {
    return whichTypedArray(value) === 'Int8Array';
}
exports.isInt8Array = isInt8Array;
function isInt16Array(value) {
    return whichTypedArray(value) === 'Int16Array';
}
exports.isInt16Array = isInt16Array;
function isInt32Array(value) {
    return whichTypedArray(value) === 'Int32Array';
}
exports.isInt32Array = isInt32Array;
function isFloat32Array(value) {
    return whichTypedArray(value) === 'Float32Array';
}
exports.isFloat32Array = isFloat32Array;
function isFloat64Array(value) {
    return whichTypedArray(value) === 'Float64Array';
}
exports.isFloat64Array = isFloat64Array;
function isBigInt64Array(value) {
    return whichTypedArray(value) === 'BigInt64Array';
}
exports.isBigInt64Array = isBigInt64Array;
function isBigUint64Array(value) {
    return whichTypedArray(value) === 'BigUint64Array';
}
exports.isBigUint64Array = isBigUint64Array;
function isMapToString(value) {
    return ObjectToString(value) === '[object Map]';
}
isMapToString.working = typeof Map !== 'undefined' && isMapToString(new Map());
function isMap(value) {
    if (typeof Map === 'undefined') return false;
    return isMapToString.working ? isMapToString(value) : value instanceof Map;
}
exports.isMap = isMap;
function isSetToString(value) {
    return ObjectToString(value) === '[object Set]';
}
isSetToString.working = typeof Set !== 'undefined' && isSetToString(new Set());
function isSet(value) {
    if (typeof Set === 'undefined') return false;
    return isSetToString.working ? isSetToString(value) : value instanceof Set;
}
exports.isSet = isSet;
function isWeakMapToString(value) {
    return ObjectToString(value) === '[object WeakMap]';
}
isWeakMapToString.working = typeof WeakMap !== 'undefined' && isWeakMapToString(new WeakMap());
function isWeakMap(value) {
    if (typeof WeakMap === 'undefined') return false;
    return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
}
exports.isWeakMap = isWeakMap;
function isWeakSetToString(value) {
    return ObjectToString(value) === '[object WeakSet]';
}
isWeakSetToString.working = typeof WeakSet !== 'undefined' && isWeakSetToString(new WeakSet());
function isWeakSet(value) {
    return isWeakSetToString(value);
}
exports.isWeakSet = isWeakSet;
function isArrayBufferToString(value) {
    return ObjectToString(value) === '[object ArrayBuffer]';
}
isArrayBufferToString.working = typeof ArrayBuffer !== 'undefined' && isArrayBufferToString(new ArrayBuffer());
function isArrayBuffer(value) {
    if (typeof ArrayBuffer === 'undefined') return false;
    return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
}
exports.isArrayBuffer = isArrayBuffer;
function isDataViewToString(value) {
    return ObjectToString(value) === '[object DataView]';
}
isDataViewToString.working = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined' && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
function isDataView(value) {
    if (typeof DataView === 'undefined') return false;
    return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
}
exports.isDataView = isDataView;
// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;
function isSharedArrayBufferToString(value) {
    return ObjectToString(value) === '[object SharedArrayBuffer]';
}
function isSharedArrayBuffer(value) {
    if (typeof SharedArrayBufferCopy === 'undefined') return false;
    if (typeof isSharedArrayBufferToString.working === 'undefined') isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
    return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
}
exports.isSharedArrayBuffer = isSharedArrayBuffer;
function isAsyncFunction(value) {
    return ObjectToString(value) === '[object AsyncFunction]';
}
exports.isAsyncFunction = isAsyncFunction;
function isMapIterator(value) {
    return ObjectToString(value) === '[object Map Iterator]';
}
exports.isMapIterator = isMapIterator;
function isSetIterator(value) {
    return ObjectToString(value) === '[object Set Iterator]';
}
exports.isSetIterator = isSetIterator;
function isGeneratorObject(value) {
    return ObjectToString(value) === '[object Generator]';
}
exports.isGeneratorObject = isGeneratorObject;
function isWebAssemblyCompiledModule(value) {
    return ObjectToString(value) === '[object WebAssembly.Module]';
}
exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
function isNumberObject(value) {
    return checkBoxedPrimitive(value, numberValue);
}
exports.isNumberObject = isNumberObject;
function isStringObject(value) {
    return checkBoxedPrimitive(value, stringValue);
}
exports.isStringObject = isStringObject;
function isBooleanObject(value) {
    return checkBoxedPrimitive(value, booleanValue);
}
exports.isBooleanObject = isBooleanObject;
function isBigIntObject(value) {
    return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
}
exports.isBigIntObject = isBigIntObject;
function isSymbolObject(value) {
    return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
}
exports.isSymbolObject = isSymbolObject;
function isBoxedPrimitive(value) {
    return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
}
exports.isBoxedPrimitive = isBoxedPrimitive;
function isAnyArrayBuffer(value) {
    return typeof Uint8Array !== 'undefined' && (isArrayBuffer(value) || isSharedArrayBuffer(value));
}
exports.isAnyArrayBuffer = isAnyArrayBuffer;
[
    'isProxy',
    'isExternal',
    'isModuleNamespaceObject'
].forEach(function(method) {
    Object.defineProperty(exports, method, {
        enumerable: false,
        value: function() {
            throw new Error(method + ' is not supported in userland');
        }
    });
});

},{"is-arguments":"8gHs4","is-generator-function":"kT8Ou","which-typed-array":"iDM4O","is-typed-array":"6c7tM"}],"8gHs4":[function(require,module,exports) {
'use strict';
var hasToStringTag = require('has-tostringtag/shams')();
var callBound = require('call-bind/callBound');
var $toString = callBound('Object.prototype.toString');
var isStandardArguments = function isArguments(value) {
    if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) return false;
    return $toString(value) === '[object Arguments]';
};
var isLegacyArguments = function isArguments(value) {
    if (isStandardArguments(value)) return true;
    return value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && $toString(value) !== '[object Array]' && $toString(value.callee) === '[object Function]';
};
var supportsStandardArguments = function() {
    return isStandardArguments(arguments);
}();
isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests
module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

},{"has-tostringtag/shams":"7aneK","call-bind/callBound":"f0fyo"}],"7aneK":[function(require,module,exports) {
'use strict';
var hasSymbols = require('has-symbols/shams');
module.exports = function hasToStringTagShams() {
    return hasSymbols() && !!Symbol.toStringTag;
};

},{"has-symbols/shams":"lhOu9"}],"lhOu9":[function(require,module,exports) {
'use strict';
/* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') return false;
    if (typeof Symbol.iterator === 'symbol') return true;
    var obj = {
    };
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') return false;
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') return false;
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') return false;
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(sym in obj)return false;
     // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) return false;
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) return false;
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) return false;
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
    }
    return true;
};

},{}],"f0fyo":[function(require,module,exports) {
'use strict';
var GetIntrinsic = require('get-intrinsic');
var callBind = require('./');
var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));
module.exports = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) return callBind(intrinsic);
    return intrinsic;
};

},{"get-intrinsic":"4hk6k","./":"bPDkM"}],"4hk6k":[function(require,module,exports) {
'use strict';
var undefined;
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {
    }
};
var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) try {
    $gOPD({
    }, '');
} catch (e) {
    $gOPD = null; // this is IE 8, which has a broken gOPD
}
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = require('has-symbols')();
var getProto = Object.getPrototypeOf || function(x) {
    return x.__proto__;
}; // eslint-disable-line no-proto
var needsEval = {
};
var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': Error,
    '%eval%': eval,
    '%EvalError%': EvalError,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': Object,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': RangeError,
    '%ReferenceError%': ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
    '%Symbol%': hasSymbols ? Symbol : undefined,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%URIError%': URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};
var doEval1 = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') value = getEvalledConstructor('async function () {}');
    else if (name === '%GeneratorFunction%') value = getEvalledConstructor('function* () {}');
    else if (name === '%AsyncGeneratorFunction%') value = getEvalledConstructor('async function* () {}');
    else if (name === '%AsyncGenerator%') {
        var fn = doEval('%AsyncGeneratorFunction%');
        if (fn) value = fn.prototype;
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval('%AsyncGenerator%');
        if (gen) value = getProto(gen.prototype);
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    '%ArrayBufferPrototype%': [
        'ArrayBuffer',
        'prototype'
    ],
    '%ArrayPrototype%': [
        'Array',
        'prototype'
    ],
    '%ArrayProto_entries%': [
        'Array',
        'prototype',
        'entries'
    ],
    '%ArrayProto_forEach%': [
        'Array',
        'prototype',
        'forEach'
    ],
    '%ArrayProto_keys%': [
        'Array',
        'prototype',
        'keys'
    ],
    '%ArrayProto_values%': [
        'Array',
        'prototype',
        'values'
    ],
    '%AsyncFunctionPrototype%': [
        'AsyncFunction',
        'prototype'
    ],
    '%AsyncGenerator%': [
        'AsyncGeneratorFunction',
        'prototype'
    ],
    '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%BooleanPrototype%': [
        'Boolean',
        'prototype'
    ],
    '%DataViewPrototype%': [
        'DataView',
        'prototype'
    ],
    '%DatePrototype%': [
        'Date',
        'prototype'
    ],
    '%ErrorPrototype%': [
        'Error',
        'prototype'
    ],
    '%EvalErrorPrototype%': [
        'EvalError',
        'prototype'
    ],
    '%Float32ArrayPrototype%': [
        'Float32Array',
        'prototype'
    ],
    '%Float64ArrayPrototype%': [
        'Float64Array',
        'prototype'
    ],
    '%FunctionPrototype%': [
        'Function',
        'prototype'
    ],
    '%Generator%': [
        'GeneratorFunction',
        'prototype'
    ],
    '%GeneratorPrototype%': [
        'GeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%Int8ArrayPrototype%': [
        'Int8Array',
        'prototype'
    ],
    '%Int16ArrayPrototype%': [
        'Int16Array',
        'prototype'
    ],
    '%Int32ArrayPrototype%': [
        'Int32Array',
        'prototype'
    ],
    '%JSONParse%': [
        'JSON',
        'parse'
    ],
    '%JSONStringify%': [
        'JSON',
        'stringify'
    ],
    '%MapPrototype%': [
        'Map',
        'prototype'
    ],
    '%NumberPrototype%': [
        'Number',
        'prototype'
    ],
    '%ObjectPrototype%': [
        'Object',
        'prototype'
    ],
    '%ObjProto_toString%': [
        'Object',
        'prototype',
        'toString'
    ],
    '%ObjProto_valueOf%': [
        'Object',
        'prototype',
        'valueOf'
    ],
    '%PromisePrototype%': [
        'Promise',
        'prototype'
    ],
    '%PromiseProto_then%': [
        'Promise',
        'prototype',
        'then'
    ],
    '%Promise_all%': [
        'Promise',
        'all'
    ],
    '%Promise_reject%': [
        'Promise',
        'reject'
    ],
    '%Promise_resolve%': [
        'Promise',
        'resolve'
    ],
    '%RangeErrorPrototype%': [
        'RangeError',
        'prototype'
    ],
    '%ReferenceErrorPrototype%': [
        'ReferenceError',
        'prototype'
    ],
    '%RegExpPrototype%': [
        'RegExp',
        'prototype'
    ],
    '%SetPrototype%': [
        'Set',
        'prototype'
    ],
    '%SharedArrayBufferPrototype%': [
        'SharedArrayBuffer',
        'prototype'
    ],
    '%StringPrototype%': [
        'String',
        'prototype'
    ],
    '%SymbolPrototype%': [
        'Symbol',
        'prototype'
    ],
    '%SyntaxErrorPrototype%': [
        'SyntaxError',
        'prototype'
    ],
    '%TypedArrayPrototype%': [
        'TypedArray',
        'prototype'
    ],
    '%TypeErrorPrototype%': [
        'TypeError',
        'prototype'
    ],
    '%Uint8ArrayPrototype%': [
        'Uint8Array',
        'prototype'
    ],
    '%Uint8ClampedArrayPrototype%': [
        'Uint8ClampedArray',
        'prototype'
    ],
    '%Uint16ArrayPrototype%': [
        'Uint16Array',
        'prototype'
    ],
    '%Uint32ArrayPrototype%': [
        'Uint32Array',
        'prototype'
    ],
    '%URIErrorPrototype%': [
        'URIError',
        'prototype'
    ],
    '%WeakMapPrototype%': [
        'WeakMap',
        'prototype'
    ],
    '%WeakSetPrototype%': [
        'WeakSet',
        'prototype'
    ]
};
var bind = require('function-bind');
var hasOwn = require('has');
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === '%' && last !== '%') throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    else if (last === '%' && first !== '%') throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) value = doEval1(intrinsicName);
        if (typeof value === 'undefined' && !allowMissing) throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) throw new $TypeError('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') throw new $TypeError('"allowMissing" argument must be a boolean');
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) throw new $SyntaxError('property names with quotes must have matching quotes');
        if (part === 'constructor' || !isOwn) skipFurtherCaching = true;
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName];
        else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                return void 0;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && 'get' in desc && !('originalValue' in desc.get)) value = desc.get;
                else value = value[part];
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
        }
    }
    return value;
};

},{"has-symbols":"iwqSm","function-bind":"13Udp","has":"6Inba"}],"iwqSm":[function(require,module,exports) {
'use strict';
var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = require('./shams');
module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') return false;
    if (typeof Symbol !== 'function') return false;
    if (typeof origSymbol('foo') !== 'symbol') return false;
    if (typeof Symbol('bar') !== 'symbol') return false;
    return hasSymbolSham();
};

},{"./shams":"lhOu9"}],"13Udp":[function(require,module,exports) {
'use strict';
var implementation = require('./implementation');
module.exports = Function.prototype.bind || implementation;

},{"./implementation":"iyrnl"}],"iyrnl":[function(require,module,exports) {
'use strict';
/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
    var args = slice.call(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, args.concat(slice.call(arguments)));
            if (Object(result) === result) return result;
            return this;
        } else return target.apply(that, args.concat(slice.call(arguments)));
    };
    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++)boundArgs.push('$' + i);
    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};

},{}],"6Inba":[function(require,module,exports) {
'use strict';
var bind = require('function-bind');
module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

},{"function-bind":"13Udp"}],"bPDkM":[function(require,module,exports) {
'use strict';
var bind = require('function-bind');
var GetIntrinsic = require('get-intrinsic');
var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);
var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');
if ($defineProperty) try {
    $defineProperty({
    }, 'a', {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $defineProperty = null;
}
module.exports = function callBind(originalFunction) {
    var func = $reflectApply(bind, $call, arguments);
    if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, 'length');
        if (desc.configurable) // original length, plus the receiver, minus any additional arguments (after the receiver)
        $defineProperty(func, 'length', {
            value: 1 + $max(0, originalFunction.length - (arguments.length - 1))
        });
    }
    return func;
};
var applyBind = function applyBind() {
    return $reflectApply(bind, $apply, arguments);
};
if ($defineProperty) $defineProperty(module.exports, 'apply', {
    value: applyBind
});
else module.exports.apply = applyBind;

},{"function-bind":"13Udp","get-intrinsic":"4hk6k"}],"kT8Ou":[function(require,module,exports) {
'use strict';
var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;
var hasToStringTag = require('has-tostringtag/shams')();
var getProto = Object.getPrototypeOf;
var getGeneratorFunc = function() {
    if (!hasToStringTag) return false;
    try {
        return Function('return function*() {}')();
    } catch (e) {
    }
};
var GeneratorFunction;
module.exports = function isGeneratorFunction(fn) {
    if (typeof fn !== 'function') return false;
    if (isFnRegex.test(fnToStr.call(fn))) return true;
    if (!hasToStringTag) {
        var str = toStr.call(fn);
        return str === '[object GeneratorFunction]';
    }
    if (!getProto) return false;
    if (typeof GeneratorFunction === 'undefined') {
        var generatorFunc = getGeneratorFunc();
        GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
    }
    return getProto(fn) === GeneratorFunction;
};

},{"has-tostringtag/shams":"7aneK"}],"iDM4O":[function(require,module,exports) {
var global = arguments[3];
'use strict';
var forEach = require('foreach');
var availableTypedArrays = require('available-typed-arrays');
var callBound = require('call-bind/callBound');
var $toString = callBound('Object.prototype.toString');
var hasToStringTag = require('has-tostringtag/shams')();
var g = typeof globalThis === 'undefined' ? global : globalThis;
var typedArrays = availableTypedArrays();
var $slice = callBound('String.prototype.slice');
var toStrTags = {
};
var gOPD = require('es-abstract/helpers/getOwnPropertyDescriptor');
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) forEach(typedArrays, function(typedArray) {
    if (typeof g[typedArray] === 'function') {
        var arr = new g[typedArray]();
        if (Symbol.toStringTag in arr) {
            var proto = getPrototypeOf(arr);
            var descriptor = gOPD(proto, Symbol.toStringTag);
            if (!descriptor) {
                var superProto = getPrototypeOf(proto);
                descriptor = gOPD(superProto, Symbol.toStringTag);
            }
            toStrTags[typedArray] = descriptor.get;
        }
    }
});
var tryTypedArrays = function tryAllTypedArrays(value) {
    var foundName = false;
    forEach(toStrTags, function(getter, typedArray) {
        if (!foundName) try {
            var name = getter.call(value);
            if (name === typedArray) foundName = name;
        } catch (e) {
        }
    });
    return foundName;
};
var isTypedArray = require('is-typed-array');
module.exports = function whichTypedArray(value) {
    if (!isTypedArray(value)) return false;
    if (!hasToStringTag || !(Symbol.toStringTag in value)) return $slice($toString(value), 8, -1);
    return tryTypedArrays(value);
};

},{"foreach":"h6wOr","available-typed-arrays":"9Wjza","call-bind/callBound":"f0fyo","has-tostringtag/shams":"7aneK","es-abstract/helpers/getOwnPropertyDescriptor":"gx5Wc","is-typed-array":"6c7tM"}],"h6wOr":[function(require,module,exports) {
var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;
module.exports = function forEach(obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') throw new TypeError('iterator must be a function');
    var l = obj.length;
    if (l === +l) for(var i = 0; i < l; i++)fn.call(ctx, obj[i], i, obj);
    else {
        for(var k in obj)if (hasOwn.call(obj, k)) fn.call(ctx, obj[k], k, obj);
    }
};

},{}],"9Wjza":[function(require,module,exports) {
var global = arguments[3];
'use strict';
var possibleNames = [
    'BigInt64Array',
    'BigUint64Array',
    'Float32Array',
    'Float64Array',
    'Int16Array',
    'Int32Array',
    'Int8Array',
    'Uint16Array',
    'Uint32Array',
    'Uint8Array',
    'Uint8ClampedArray'
];
var g = typeof globalThis === 'undefined' ? global : globalThis;
module.exports = function availableTypedArrays() {
    var out = [];
    for(var i = 0; i < possibleNames.length; i++)if (typeof g[possibleNames[i]] === 'function') out[out.length] = possibleNames[i];
    return out;
};

},{}],"gx5Wc":[function(require,module,exports) {
'use strict';
var GetIntrinsic = require('get-intrinsic');
var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
if ($gOPD) try {
    $gOPD([], 'length');
} catch (e) {
    // IE 8 has a broken gOPD
    $gOPD = null;
}
module.exports = $gOPD;

},{"get-intrinsic":"4hk6k"}],"6c7tM":[function(require,module,exports) {
var global = arguments[3];
'use strict';
var forEach = require('foreach');
var availableTypedArrays = require('available-typed-arrays');
var callBound = require('call-bind/callBound');
var $toString = callBound('Object.prototype.toString');
var hasToStringTag = require('has-tostringtag/shams')();
var g = typeof globalThis === 'undefined' ? global : globalThis;
var typedArrays = availableTypedArrays();
var $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {
    for(var i = 0; i < array.length; i += 1){
        if (array[i] === value) return i;
    }
    return -1;
};
var $slice = callBound('String.prototype.slice');
var toStrTags = {
};
var gOPD = require('es-abstract/helpers/getOwnPropertyDescriptor');
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) forEach(typedArrays, function(typedArray) {
    var arr = new g[typedArray]();
    if (Symbol.toStringTag in arr) {
        var proto = getPrototypeOf(arr);
        var descriptor = gOPD(proto, Symbol.toStringTag);
        if (!descriptor) {
            var superProto = getPrototypeOf(proto);
            descriptor = gOPD(superProto, Symbol.toStringTag);
        }
        toStrTags[typedArray] = descriptor.get;
    }
});
var tryTypedArrays = function tryAllTypedArrays(value) {
    var anyTrue = false;
    forEach(toStrTags, function(getter, typedArray) {
        if (!anyTrue) try {
            anyTrue = getter.call(value) === typedArray;
        } catch (e) {
        }
    });
    return anyTrue;
};
module.exports = function isTypedArray(value) {
    if (!value || typeof value !== 'object') return false;
    if (!hasToStringTag || !(Symbol.toStringTag in value)) {
        var tag = $slice($toString(value), 8, -1);
        return $indexOf(typedArrays, tag) > -1;
    }
    if (!gOPD) return false;
    return tryTypedArrays(value);
};

},{"foreach":"h6wOr","available-typed-arrays":"9Wjza","call-bind/callBound":"f0fyo","has-tostringtag/shams":"7aneK","es-abstract/helpers/getOwnPropertyDescriptor":"gx5Wc"}],"k1wGR":[function(require,module,exports) {
module.exports = function isBuffer(arg) {
    return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

},{}],"d3hL2":[function(require,module,exports) {
if (typeof Object.create === 'function') // implementation from standard node.js 'util' module
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    }
};
else // old school shim for old browsers
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
};

},{}],"1yuNT":[function(require,module,exports) {
var process = require("process");
// Currently in sync with Node.js lib/internal/assert/assertion_error.js
// https://github.com/nodejs/node/commit/0817840f775032169ddd70c85ac059f18ffcc81c
'use strict';
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _wrapNativeSuper(Class1) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class1);
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent1, args1, Class2) {
    if (isNativeReflectConstruct()) _construct = Reflect.construct;
    else _construct = function _construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o1, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o1, p1);
}
function _getPrototypeOf(o2) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o2);
}
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
var _require = require('util/'), inspect = _require.inspect;
var _require2 = require('../errors'), ERR_INVALID_ARG_TYPE = _require2.codes.ERR_INVALID_ARG_TYPE; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function repeat(str, count) {
    count = Math.floor(count);
    if (str.length == 0 || count == 0) return '';
    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while(count){
        str += str;
        count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
}
var blue = '';
var green = '';
var red = '';
var white = '';
var kReadableOperator = {
    deepStrictEqual: 'Expected values to be strictly deep-equal:',
    strictEqual: 'Expected values to be strictly equal:',
    strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
    deepEqual: 'Expected values to be loosely deep-equal:',
    equal: 'Expected values to be loosely equal:',
    notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
    notStrictEqual: 'Expected "actual" to be strictly unequal to:',
    notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
    notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
    notEqual: 'Expected "actual" to be loosely unequal to:',
    notIdentical: 'Values identical but not reference-equal:'
}; // Comparing short primitives should just show === / !== instead of using the
// diff.
var kMaxShortLength = 10;
function copyError(source) {
    var keys = Object.keys(source);
    var target = Object.create(Object.getPrototypeOf(source));
    keys.forEach(function(key) {
        target[key] = source[key];
    });
    Object.defineProperty(target, 'message', {
        value: source.message
    });
    return target;
}
function inspectValue(val) {
    // The util.inspect default values could be changed. This makes sure the
    // error messages contain the necessary information nevertheless.
    return inspect(val, {
        compact: false,
        customInspect: false,
        depth: 1000,
        maxArrayLength: Infinity,
        // Assert compares only enumerable properties (with a few exceptions).
        showHidden: false,
        // Having a long line as error is better than wrapping the line for
        // comparison for now.
        // TODO(BridgeAR): `breakLength` should be limited as soon as soon as we
        // have meta information about the inspected properties (i.e., know where
        // in what line the property starts and ends).
        breakLength: Infinity,
        // Assert does not detect proxies currently.
        showProxy: false,
        sorted: true,
        // Inspect getters as we also check them when comparing entries.
        getters: true
    });
}
function createErrDiff(actual, expected, operator) {
    var other = '';
    var res = '';
    var lastPos = 0;
    var end = '';
    var skipped = false;
    var actualInspected = inspectValue(actual);
    var actualLines = actualInspected.split('\n');
    var expectedLines = inspectValue(expected).split('\n');
    var i = 0;
    var indicator = ''; // In case both values are objects explicitly mark them as not reference equal
    // for the `strictEqual` operator.
    if (operator === 'strictEqual' && _typeof(actual) === 'object' && _typeof(expected) === 'object' && actual !== null && expected !== null) operator = 'strictEqualObject';
     // If "actual" and "expected" fit on a single line and they are not strictly
    // equal, check further special handling.
    if (actualLines.length === 1 && expectedLines.length === 1 && actualLines[0] !== expectedLines[0]) {
        var inputLength = actualLines[0].length + expectedLines[0].length; // If the character length of "actual" and "expected" together is less than
        // kMaxShortLength and if neither is an object and at least one of them is
        // not `zero`, use the strict equal comparison to visualize the output.
        if (inputLength <= kMaxShortLength) {
            if ((_typeof(actual) !== 'object' || actual === null) && (_typeof(expected) !== 'object' || expected === null) && (actual !== 0 || expected !== 0)) // -0 === +0
            return "".concat(kReadableOperator[operator], "\n\n") + "".concat(actualLines[0], " !== ").concat(expectedLines[0], "\n");
        } else if (operator !== 'strictEqualObject') {
            // If the stderr is a tty and the input length is lower than the current
            // columns per line, add a mismatch indicator below the output. If it is
            // not a tty, use a default value of 80 characters.
            var maxLength = process.stderr && process.stderr.isTTY ? process.stderr.columns : 80;
            if (inputLength < maxLength) {
                while(actualLines[0][i] === expectedLines[0][i])i++;
                 // Ignore the first characters.
                if (i > 2) {
                    // Add position indicator for the first mismatch in case it is a
                    // single line and the input length is less than the column length.
                    indicator = "\n  ".concat(repeat(' ', i), "^");
                    i = 0;
                }
            }
        }
    } // Remove all ending lines that match (this optimizes the output for
    // readability by reducing the number of total changed lines).
    var a = actualLines[actualLines.length - 1];
    var b = expectedLines[expectedLines.length - 1];
    while(a === b){
        if (i++ < 2) end = "\n  ".concat(a).concat(end);
        else other = a;
        actualLines.pop();
        expectedLines.pop();
        if (actualLines.length === 0 || expectedLines.length === 0) break;
        a = actualLines[actualLines.length - 1];
        b = expectedLines[expectedLines.length - 1];
    }
    var maxLines = Math.max(actualLines.length, expectedLines.length); // Strict equal with identical objects that are not identical by reference.
    // E.g., assert.deepStrictEqual({ a: Symbol() }, { a: Symbol() })
    if (maxLines === 0) {
        // We have to get the result again. The lines were all removed before.
        var _actualLines = actualInspected.split('\n'); // Only remove lines in case it makes sense to collapse those.
        // TODO: Accept env to always show the full error.
        if (_actualLines.length > 30) {
            _actualLines[26] = "".concat(blue, "...").concat(white);
            while(_actualLines.length > 27)_actualLines.pop();
        }
        return "".concat(kReadableOperator.notIdentical, "\n\n").concat(_actualLines.join('\n'), "\n");
    }
    if (i > 3) {
        end = "\n".concat(blue, "...").concat(white).concat(end);
        skipped = true;
    }
    if (other !== '') {
        end = "\n  ".concat(other).concat(end);
        other = '';
    }
    var printedLines = 0;
    var msg = kReadableOperator[operator] + "\n".concat(green, "+ actual").concat(white, " ").concat(red, "- expected").concat(white);
    var skippedMsg = " ".concat(blue, "...").concat(white, " Lines skipped");
    for(i = 0; i < maxLines; i++){
        // Only extra expected lines exist
        var cur = i - lastPos;
        if (actualLines.length < i + 1) {
            // If the last diverging line is more than one line above and the
            // current line is at least line three, add some of the former lines and
            // also add dots to indicate skipped entries.
            if (cur > 1 && i > 2) {
                if (cur > 4) {
                    res += "\n".concat(blue, "...").concat(white);
                    skipped = true;
                } else if (cur > 3) {
                    res += "\n  ".concat(expectedLines[i - 2]);
                    printedLines++;
                }
                res += "\n  ".concat(expectedLines[i - 1]);
                printedLines++;
            } // Mark the current line as the last diverging one.
            lastPos = i; // Add the expected line to the cache.
            other += "\n".concat(red, "-").concat(white, " ").concat(expectedLines[i]);
            printedLines++; // Only extra actual lines exist
        } else if (expectedLines.length < i + 1) {
            // If the last diverging line is more than one line above and the
            // current line is at least line three, add some of the former lines and
            // also add dots to indicate skipped entries.
            if (cur > 1 && i > 2) {
                if (cur > 4) {
                    res += "\n".concat(blue, "...").concat(white);
                    skipped = true;
                } else if (cur > 3) {
                    res += "\n  ".concat(actualLines[i - 2]);
                    printedLines++;
                }
                res += "\n  ".concat(actualLines[i - 1]);
                printedLines++;
            } // Mark the current line as the last diverging one.
            lastPos = i; // Add the actual line to the result.
            res += "\n".concat(green, "+").concat(white, " ").concat(actualLines[i]);
            printedLines++; // Lines diverge
        } else {
            var expectedLine = expectedLines[i];
            var actualLine = actualLines[i]; // If the lines diverge, specifically check for lines that only diverge by
            // a trailing comma. In that case it is actually identical and we should
            // mark it as such.
            var divergingLines = actualLine !== expectedLine && (!endsWith(actualLine, ',') || actualLine.slice(0, -1) !== expectedLine); // If the expected line has a trailing comma but is otherwise identical,
            // add a comma at the end of the actual line. Otherwise the output could
            // look weird as in:
            //
            //   [
            //     1         // No comma at the end!
            // +   2
            //   ]
            //
            if (divergingLines && endsWith(expectedLine, ',') && expectedLine.slice(0, -1) === actualLine) {
                divergingLines = false;
                actualLine += ',';
            }
            if (divergingLines) {
                // If the last diverging line is more than one line above and the
                // current line is at least line three, add some of the former lines and
                // also add dots to indicate skipped entries.
                if (cur > 1 && i > 2) {
                    if (cur > 4) {
                        res += "\n".concat(blue, "...").concat(white);
                        skipped = true;
                    } else if (cur > 3) {
                        res += "\n  ".concat(actualLines[i - 2]);
                        printedLines++;
                    }
                    res += "\n  ".concat(actualLines[i - 1]);
                    printedLines++;
                } // Mark the current line as the last diverging one.
                lastPos = i; // Add the actual line to the result and cache the expected diverging
                // line so consecutive diverging lines show up as +++--- and not +-+-+-.
                res += "\n".concat(green, "+").concat(white, " ").concat(actualLine);
                other += "\n".concat(red, "-").concat(white, " ").concat(expectedLine);
                printedLines += 2; // Lines are identical
            } else {
                // Add all cached information to the result before adding other things
                // and reset the cache.
                res += other;
                other = ''; // If the last diverging line is exactly one line above or if it is the
                // very first line, add the line to the result.
                if (cur === 1 || i === 0) {
                    res += "\n  ".concat(actualLine);
                    printedLines++;
                }
            }
        } // Inspected object to big (Show ~20 rows max)
        if (printedLines > 20 && i < maxLines - 2) return "".concat(msg).concat(skippedMsg, "\n").concat(res, "\n").concat(blue, "...").concat(white).concat(other, "\n") + "".concat(blue, "...").concat(white);
    }
    return "".concat(msg).concat(skipped ? skippedMsg : '', "\n").concat(res).concat(other).concat(end).concat(indicator);
}
var AssertionError1 = /*#__PURE__*/ function(_Error) {
    _inherits(AssertionError, _Error);
    function AssertionError(options) {
        var _this;
        _classCallCheck(this, AssertionError);
        if (_typeof(options) !== 'object' || options === null) throw new ERR_INVALID_ARG_TYPE('options', 'Object', options);
        var message = options.message, operator = options.operator, stackStartFn = options.stackStartFn;
        var actual = options.actual, expected = options.expected;
        var limit = Error.stackTraceLimit;
        Error.stackTraceLimit = 0;
        if (message != null) _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, String(message)));
        else {
            if (process.stderr && process.stderr.isTTY) {
                // Reset on each call to make sure we handle dynamically set environment
                // variables correct.
                if (process.stderr && process.stderr.getColorDepth && process.stderr.getColorDepth() !== 1) {
                    blue = "\x1B[34m";
                    green = "\x1B[32m";
                    white = "\x1B[39m";
                    red = "\x1B[31m";
                } else {
                    blue = '';
                    green = '';
                    white = '';
                    red = '';
                }
            } // Prevent the error stack from being visible by duplicating the error
            // in a very close way to the original in case both sides are actually
            // instances of Error.
            if (_typeof(actual) === 'object' && actual !== null && _typeof(expected) === 'object' && expected !== null && 'stack' in actual && actual instanceof Error && 'stack' in expected && expected instanceof Error) {
                actual = copyError(actual);
                expected = copyError(expected);
            }
            if (operator === 'deepStrictEqual' || operator === 'strictEqual') _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, createErrDiff(actual, expected, operator)));
            else if (operator === 'notDeepStrictEqual' || operator === 'notStrictEqual') {
                // In case the objects are equal but the operator requires unequal, show
                // the first object and say A equals B
                var base = kReadableOperator[operator];
                var res = inspectValue(actual).split('\n'); // In case "actual" is an object, it should not be reference equal.
                if (operator === 'notStrictEqual' && _typeof(actual) === 'object' && actual !== null) base = kReadableOperator.notStrictEqualObject;
                 // Only remove lines in case it makes sense to collapse those.
                // TODO: Accept env to always show the full error.
                if (res.length > 30) {
                    res[26] = "".concat(blue, "...").concat(white);
                    while(res.length > 27)res.pop();
                } // Only print a single input.
                if (res.length === 1) _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(base, " ").concat(res[0])));
                else _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(base, "\n\n").concat(res.join('\n'), "\n")));
            } else {
                var _res = inspectValue(actual);
                var other = '';
                var knownOperators = kReadableOperator[operator];
                if (operator === 'notDeepEqual' || operator === 'notEqual') {
                    _res = "".concat(kReadableOperator[operator], "\n\n").concat(_res);
                    if (_res.length > 1024) _res = "".concat(_res.slice(0, 1021), "...");
                } else {
                    other = "".concat(inspectValue(expected));
                    if (_res.length > 512) _res = "".concat(_res.slice(0, 509), "...");
                    if (other.length > 512) other = "".concat(other.slice(0, 509), "...");
                    if (operator === 'deepEqual' || operator === 'equal') _res = "".concat(knownOperators, "\n\n").concat(_res, "\n\nshould equal\n\n");
                    else other = " ".concat(operator, " ").concat(other);
                }
                _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(_res).concat(other)));
            }
        }
        Error.stackTraceLimit = limit;
        _this.generatedMessage = !message;
        Object.defineProperty(_assertThisInitialized(_this), 'name', {
            value: 'AssertionError [ERR_ASSERTION]',
            enumerable: false,
            writable: true,
            configurable: true
        });
        _this.code = 'ERR_ASSERTION';
        _this.actual = actual;
        _this.expected = expected;
        _this.operator = operator;
        if (Error.captureStackTrace) // eslint-disable-next-line no-restricted-syntax
        Error.captureStackTrace(_assertThisInitialized(_this), stackStartFn);
         // Create error message including the error code in the name.
        _this.stack; // Reset the name.
        _this.name = 'AssertionError';
        return _possibleConstructorReturn(_this);
    }
    _createClass(AssertionError, [
        {
            key: "toString",
            value: function toString() {
                return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
            }
        },
        {
            key: inspect.custom,
            value: function value(recurseTimes, ctx) {
                // This limits the `actual` and `expected` property default inspection to
                // the minimum depth. Otherwise those values would be too verbose compared
                // to the actual error message which contains a combined view of these two
                // input values.
                return inspect(this, _objectSpread({
                }, ctx, {
                    customInspect: false,
                    depth: 0
                }));
            }
        }
    ]);
    return AssertionError;
}(_wrapNativeSuper(Error));
module.exports = AssertionError1;

},{"process":"lDnB8","util/":"fZQoa","../errors":"LSymQ"}],"fc6lQ":[function(require,module,exports) {
/**
 * Code refactored from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */ 'use strict';
function assign(target, firstSource) {
    if (target === undefined || target === null) throw new TypeError('Cannot convert first argument to object');
    var to = Object(target);
    for(var i = 1; i < arguments.length; i++){
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) continue;
        var keysArray = Object.keys(Object(nextSource));
        for(var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++){
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) to[nextKey] = nextSource[nextKey];
        }
    }
    return to;
}
function polyfill() {
    if (!Object.assign) Object.defineProperty(Object, 'assign', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: assign
    });
}
module.exports = {
    assign: assign,
    polyfill: polyfill
};

},{}],"V34yE":[function(require,module,exports) {
'use strict';
var define = require('define-properties');
var callBind = require('call-bind');
var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');
var polyfill = callBind(getPolyfill(), Object);
define(polyfill, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = polyfill;

},{"define-properties":"arjVC","call-bind":"bPDkM","./implementation":"jrTsN","./polyfill":"lK2ec","./shim":"5RYmr"}],"arjVC":[function(require,module,exports) {
'use strict';
var keys = require('object-keys');
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';
var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;
var isFunction = function(fn) {
    return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};
var arePropertyDescriptorsSupported = function() {
    var obj = {
    };
    try {
        origDefineProperty(obj, 'x', {
            enumerable: false,
            value: obj
        });
        // eslint-disable-next-line no-unused-vars, no-restricted-syntax
        for(var _ in obj)return false;
        return obj.x === obj;
    } catch (e) {
        return false;
    }
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();
var defineProperty = function(object, name, value, predicate) {
    if (name in object && (!isFunction(predicate) || !predicate())) return;
    if (supportsDescriptors) origDefineProperty(object, name, {
        configurable: true,
        enumerable: false,
        value: value,
        writable: true
    });
    else object[name] = value;
};
var defineProperties = function(object, map) {
    var predicates = arguments.length > 2 ? arguments[2] : {
    };
    var props = keys(map);
    if (hasSymbols) props = concat.call(props, Object.getOwnPropertySymbols(map));
    for(var i = 0; i < props.length; i += 1)defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
};
defineProperties.supportsDescriptors = !!supportsDescriptors;
module.exports = defineProperties;

},{"object-keys":"6eM0B"}],"6eM0B":[function(require,module,exports) {
'use strict';
var slice = Array.prototype.slice;
var isArgs = require('./isArguments');
var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) {
    return origKeys(o);
} : require('./implementation');
var originalKeys = Object.keys;
keysShim.shim = function shimObjectKeys() {
    if (Object.keys) {
        var keysWorksWithArguments = function() {
            // Safari 5.0 bug
            var args = Object.keys(arguments);
            return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) Object.keys = function keys(object) {
            if (isArgs(object)) return originalKeys(slice.call(object));
            return originalKeys(object);
        };
    } else Object.keys = keysShim;
    return Object.keys || keysShim;
};
module.exports = keysShim;

},{"./isArguments":"7W6XO","./implementation":"k0enN"}],"7W6XO":[function(require,module,exports) {
'use strict';
var toStr = Object.prototype.toString;
module.exports = function isArguments(value) {
    var str = toStr.call(value);
    var isArgs = str === '[object Arguments]';
    if (!isArgs) isArgs = str !== '[object Array]' && value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr.call(value.callee) === '[object Function]';
    return isArgs;
};

},{}],"k0enN":[function(require,module,exports) {
'use strict';
var keysShim;
if (!Object.keys) {
    // modified from https://github.com/es-shims/es5-shim
    var has = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var isArgs = require('./isArguments'); // eslint-disable-line global-require
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var hasDontEnumBug = !isEnumerable.call({
        toString: null
    }, 'toString');
    var hasProtoEnumBug = isEnumerable.call(function() {
    }, 'prototype');
    var dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
    ];
    var equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
    };
    var excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
    };
    var hasAutomationEqualityBug = function() {
        /* global window */ if (typeof window === 'undefined') return false;
        for(var k in window)try {
            if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') try {
                equalsConstructorPrototype(window[k]);
            } catch (e) {
                return true;
            }
        } catch (e) {
            return true;
        }
        return false;
    }();
    var equalsConstructorPrototypeIfNotBuggy = function(o) {
        /* global window */ if (typeof window === 'undefined' || !hasAutomationEqualityBug) return equalsConstructorPrototype(o);
        try {
            return equalsConstructorPrototype(o);
        } catch (e) {
            return false;
        }
    };
    keysShim = function keys(object) {
        var isObject = object !== null && typeof object === 'object';
        var isFunction = toStr.call(object) === '[object Function]';
        var isArguments = isArgs(object);
        var isString = isObject && toStr.call(object) === '[object String]';
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) throw new TypeError('Object.keys called on a non-object');
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) for(var i = 0; i < object.length; ++i)theKeys.push(String(i));
        if (isArguments && object.length > 0) for(var j = 0; j < object.length; ++j)theKeys.push(String(j));
        else {
            for(var name in object)if (!(skipProto && name === 'prototype') && has.call(object, name)) theKeys.push(String(name));
        }
        if (hasDontEnumBug) {
            var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
            for(var k = 0; k < dontEnums.length; ++k)if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) theKeys.push(dontEnums[k]);
        }
        return theKeys;
    };
}
module.exports = keysShim;

},{"./isArguments":"7W6XO"}],"jrTsN":[function(require,module,exports) {
'use strict';
var numberIsNaN = function(value) {
    return value !== value;
};
module.exports = function is(a, b) {
    if (a === 0 && b === 0) return 1 / a === 1 / b;
    if (a === b) return true;
    if (numberIsNaN(a) && numberIsNaN(b)) return true;
    return false;
};

},{}],"lK2ec":[function(require,module,exports) {
'use strict';
var implementation = require('./implementation');
module.exports = function getPolyfill() {
    return typeof Object.is === 'function' ? Object.is : implementation;
};

},{"./implementation":"jrTsN"}],"5RYmr":[function(require,module,exports) {
'use strict';
var getPolyfill = require('./polyfill');
var define = require('define-properties');
module.exports = function shimObjectIs() {
    var polyfill = getPolyfill();
    define(Object, {
        is: polyfill
    }, {
        is: function testObjectIs() {
            return Object.is !== polyfill;
        }
    });
    return polyfill;
};

},{"./polyfill":"lK2ec","define-properties":"arjVC"}],"56qKQ":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/util/comparisons.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
'use strict';
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
var regexFlagsSupported = /a/g.flags !== undefined;
var arrayFromSet = function arrayFromSet(set) {
    var array = [];
    set.forEach(function(value) {
        return array.push(value);
    });
    return array;
};
var arrayFromMap = function arrayFromMap(map) {
    var array = [];
    map.forEach(function(value, key) {
        return array.push([
            key,
            value
        ]);
    });
    return array;
};
var objectIs = Object.is ? Object.is : require('object-is');
var objectGetOwnPropertySymbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
    return [];
};
var numberIsNaN = Number.isNaN ? Number.isNaN : require('is-nan');
function uncurryThis(f) {
    return f.call.bind(f);
}
var hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);
var propertyIsEnumerable = uncurryThis(Object.prototype.propertyIsEnumerable);
var objectToString = uncurryThis(Object.prototype.toString);
var _require$types = require('util/').types, isAnyArrayBuffer = _require$types.isAnyArrayBuffer, isArrayBufferView = _require$types.isArrayBufferView, isDate = _require$types.isDate, isMap = _require$types.isMap, isRegExp = _require$types.isRegExp, isSet = _require$types.isSet, isNativeError = _require$types.isNativeError, isBoxedPrimitive = _require$types.isBoxedPrimitive, isNumberObject = _require$types.isNumberObject, isStringObject = _require$types.isStringObject, isBooleanObject = _require$types.isBooleanObject, isBigIntObject = _require$types.isBigIntObject, isSymbolObject = _require$types.isSymbolObject, isFloat32Array = _require$types.isFloat32Array, isFloat64Array = _require$types.isFloat64Array;
function isNonIndex(key) {
    if (key.length === 0 || key.length > 10) return true;
    for(var i = 0; i < key.length; i++){
        var code = key.charCodeAt(i);
        if (code < 48 || code > 57) return true;
    } // The maximum size for an array is 2 ** 32 -1.
    return key.length === 10 && key >= Math.pow(2, 32);
}
function getOwnNonIndexProperties(value) {
    return Object.keys(value).filter(isNonIndex).concat(objectGetOwnPropertySymbols(value).filter(Object.prototype.propertyIsEnumerable.bind(value)));
} // Taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */ function compare(a, b) {
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
}
var ONLY_ENUMERABLE = undefined;
var kStrict = true;
var kLoose = false;
var kNoIterator = 0;
var kIsArray = 1;
var kIsSet = 2;
var kIsMap = 3; // Check if they have the same source and flags
function areSimilarRegExps(a, b) {
    return regexFlagsSupported ? a.source === b.source && a.flags === b.flags : RegExp.prototype.toString.call(a) === RegExp.prototype.toString.call(b);
}
function areSimilarFloatArrays(a, b) {
    if (a.byteLength !== b.byteLength) return false;
    for(var offset = 0; offset < a.byteLength; offset++){
        if (a[offset] !== b[offset]) return false;
    }
    return true;
}
function areSimilarTypedArrays(a, b) {
    if (a.byteLength !== b.byteLength) return false;
    return compare(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), new Uint8Array(b.buffer, b.byteOffset, b.byteLength)) === 0;
}
function areEqualArrayBuffers(buf1, buf2) {
    return buf1.byteLength === buf2.byteLength && compare(new Uint8Array(buf1), new Uint8Array(buf2)) === 0;
}
function isEqualBoxedPrimitive(val1, val2) {
    if (isNumberObject(val1)) return isNumberObject(val2) && objectIs(Number.prototype.valueOf.call(val1), Number.prototype.valueOf.call(val2));
    if (isStringObject(val1)) return isStringObject(val2) && String.prototype.valueOf.call(val1) === String.prototype.valueOf.call(val2);
    if (isBooleanObject(val1)) return isBooleanObject(val2) && Boolean.prototype.valueOf.call(val1) === Boolean.prototype.valueOf.call(val2);
    if (isBigIntObject(val1)) return isBigIntObject(val2) && BigInt.prototype.valueOf.call(val1) === BigInt.prototype.valueOf.call(val2);
    return isSymbolObject(val2) && Symbol.prototype.valueOf.call(val1) === Symbol.prototype.valueOf.call(val2);
} // Notes: Type tags are historical [[Class]] properties that can be set by
// FunctionTemplate::SetClassName() in C++ or Symbol.toStringTag in JS
// and retrieved using Object.prototype.toString.call(obj) in JS
// See https://tc39.github.io/ecma262/#sec-object.prototype.tostring
// for a list of tags pre-defined in the spec.
// There are some unspecified tags in the wild too (e.g. typed array tags).
// Since tags can be altered, they only serve fast failures
//
// Typed arrays and buffers are checked by comparing the content in their
// underlying ArrayBuffer. This optimization requires that it's
// reasonable to interpret their underlying memory in the same way,
// which is checked by comparing their type tags.
// (e.g. a Uint8Array and a Uint16Array with the same memory content
// could still be different because they will be interpreted differently).
//
// For strict comparison, objects should have
// a) The same built-in type tags
// b) The same prototypes.
function innerDeepEqual(val1, val2, strict, memos) {
    // All identical values are equivalent, as determined by ===.
    if (val1 === val2) {
        if (val1 !== 0) return true;
        return strict ? objectIs(val1, val2) : true;
    } // Check more closely if val1 and val2 are equal.
    if (strict) {
        if (_typeof(val1) !== 'object') return typeof val1 === 'number' && numberIsNaN(val1) && numberIsNaN(val2);
        if (_typeof(val2) !== 'object' || val1 === null || val2 === null) return false;
        if (Object.getPrototypeOf(val1) !== Object.getPrototypeOf(val2)) return false;
    } else {
        if (val1 === null || _typeof(val1) !== 'object') {
            if (val2 === null || _typeof(val2) !== 'object') // eslint-disable-next-line eqeqeq
            return val1 == val2;
            return false;
        }
        if (val2 === null || _typeof(val2) !== 'object') return false;
    }
    var val1Tag = objectToString(val1);
    var val2Tag = objectToString(val2);
    if (val1Tag !== val2Tag) return false;
    if (Array.isArray(val1)) {
        // Check for sparse arrays and general fast path
        if (val1.length !== val2.length) return false;
        var keys1 = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
        var keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);
        if (keys1.length !== keys2.length) return false;
        return keyCheck(val1, val2, strict, memos, kIsArray, keys1);
    } // [browserify] This triggers on certain types in IE (Map/Set) so we don't
    // wan't to early return out of the rest of the checks. However we can check
    // if the second value is one of these values and the first isn't.
    if (val1Tag === '[object Object]') {
        // return keyCheck(val1, val2, strict, memos, kNoIterator);
        if (!isMap(val1) && isMap(val2) || !isSet(val1) && isSet(val2)) return false;
    }
    if (isDate(val1)) {
        if (!isDate(val2) || Date.prototype.getTime.call(val1) !== Date.prototype.getTime.call(val2)) return false;
    } else if (isRegExp(val1)) {
        if (!isRegExp(val2) || !areSimilarRegExps(val1, val2)) return false;
    } else if (isNativeError(val1) || val1 instanceof Error) {
        // Do not compare the stack as it might differ even though the error itself
        // is otherwise identical.
        if (val1.message !== val2.message || val1.name !== val2.name) return false;
    } else if (isArrayBufferView(val1)) {
        if (!strict && (isFloat32Array(val1) || isFloat64Array(val1))) {
            if (!areSimilarFloatArrays(val1, val2)) return false;
        } else if (!areSimilarTypedArrays(val1, val2)) return false;
         // Buffer.compare returns true, so val1.length === val2.length. If they both
        // only contain numeric keys, we don't need to exam further than checking
        // the symbols.
        var _keys = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
        var _keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);
        if (_keys.length !== _keys2.length) return false;
        return keyCheck(val1, val2, strict, memos, kNoIterator, _keys);
    } else if (isSet(val1)) {
        if (!isSet(val2) || val1.size !== val2.size) return false;
        return keyCheck(val1, val2, strict, memos, kIsSet);
    } else if (isMap(val1)) {
        if (!isMap(val2) || val1.size !== val2.size) return false;
        return keyCheck(val1, val2, strict, memos, kIsMap);
    } else if (isAnyArrayBuffer(val1)) {
        if (!areEqualArrayBuffers(val1, val2)) return false;
    } else if (isBoxedPrimitive(val1) && !isEqualBoxedPrimitive(val1, val2)) return false;
    return keyCheck(val1, val2, strict, memos, kNoIterator);
}
function getEnumerables(val, keys) {
    return keys.filter(function(k) {
        return propertyIsEnumerable(val, k);
    });
}
function keyCheck(val1, val2, strict, memos, iterationType, aKeys) {
    // For all remaining Object pairs, including Array, objects and Maps,
    // equivalence is determined by having:
    // a) The same number of owned enumerable properties
    // b) The same set of keys/indexes (although not necessarily the same order)
    // c) Equivalent values for every corresponding key/index
    // d) For Sets and Maps, equal contents
    // Note: this accounts for both named and indexed properties on Arrays.
    if (arguments.length === 5) {
        aKeys = Object.keys(val1);
        var bKeys = Object.keys(val2); // The pair must have the same number of owned properties.
        if (aKeys.length !== bKeys.length) return false;
    } // Cheap key test
    var i = 0;
    for(; i < aKeys.length; i++){
        if (!hasOwnProperty(val2, aKeys[i])) return false;
    }
    if (strict && arguments.length === 5) {
        var symbolKeysA = objectGetOwnPropertySymbols(val1);
        if (symbolKeysA.length !== 0) {
            var count = 0;
            for(i = 0; i < symbolKeysA.length; i++){
                var key = symbolKeysA[i];
                if (propertyIsEnumerable(val1, key)) {
                    if (!propertyIsEnumerable(val2, key)) return false;
                    aKeys.push(key);
                    count++;
                } else if (propertyIsEnumerable(val2, key)) return false;
            }
            var symbolKeysB = objectGetOwnPropertySymbols(val2);
            if (symbolKeysA.length !== symbolKeysB.length && getEnumerables(val2, symbolKeysB).length !== count) return false;
        } else {
            var _symbolKeysB = objectGetOwnPropertySymbols(val2);
            if (_symbolKeysB.length !== 0 && getEnumerables(val2, _symbolKeysB).length !== 0) return false;
        }
    }
    if (aKeys.length === 0 && (iterationType === kNoIterator || iterationType === kIsArray && val1.length === 0 || val1.size === 0)) return true;
     // Use memos to handle cycles.
    if (memos === undefined) memos = {
        val1: new Map(),
        val2: new Map(),
        position: 0
    };
    else {
        // We prevent up to two map.has(x) calls by directly retrieving the value
        // and checking for undefined. The map can only contain numbers, so it is
        // safe to check for undefined only.
        var val2MemoA = memos.val1.get(val1);
        if (val2MemoA !== undefined) {
            var val2MemoB = memos.val2.get(val2);
            if (val2MemoB !== undefined) return val2MemoA === val2MemoB;
        }
        memos.position++;
    }
    memos.val1.set(val1, memos.position);
    memos.val2.set(val2, memos.position);
    var areEq = objEquiv(val1, val2, strict, aKeys, memos, iterationType);
    memos.val1.delete(val1);
    memos.val2.delete(val2);
    return areEq;
}
function setHasEqualElement(set, val1, strict, memo) {
    // Go looking.
    var setValues = arrayFromSet(set);
    for(var i = 0; i < setValues.length; i++){
        var val2 = setValues[i];
        if (innerDeepEqual(val1, val2, strict, memo)) {
            // Remove the matching element to make sure we do not check that again.
            set.delete(val2);
            return true;
        }
    }
    return false;
} // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
// Sadly it is not possible to detect corresponding values properly in case the
// type is a string, number, bigint or boolean. The reason is that those values
// can match lots of different string values (e.g., 1n == '+00001').
function findLooseMatchingPrimitives(prim) {
    switch(_typeof(prim)){
        case 'undefined':
            return null;
        case 'object':
            // Only pass in null as object!
            return undefined;
        case 'symbol':
            return false;
        case 'string':
            prim = +prim;
        // Loose equal entries exist only if the string is possible to convert to
        // a regular number and not NaN.
        // Fall through
        case 'number':
            if (numberIsNaN(prim)) return false;
    }
    return true;
}
function setMightHaveLoosePrim(a, b, prim) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) return altValue;
    return b.has(altValue) && !a.has(altValue);
}
function mapMightHaveLoosePrim(a, b, prim, item, memo) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) return altValue;
    var curB = b.get(altValue);
    if (curB === undefined && !b.has(altValue) || !innerDeepEqual(item, curB, false, memo)) return false;
    return !a.has(altValue) && innerDeepEqual(item, curB, false, memo);
}
function setEquiv(a, b, strict, memo) {
    // This is a lazily initiated Set of entries which have to be compared
    // pairwise.
    var set = null;
    var aValues = arrayFromSet(a);
    for(var i = 0; i < aValues.length; i++){
        var val = aValues[i]; // Note: Checking for the objects first improves the performance for object
        // heavy sets but it is a minor slow down for primitives. As they are fast
        // to check this improves the worst case scenario instead.
        if (_typeof(val) === 'object' && val !== null) {
            if (set === null) set = new Set();
             // If the specified value doesn't exist in the second set its an not null
            // object (or non strict only: a not matching primitive) we'll need to go
            // hunting for something thats deep-(strict-)equal to it. To make this
            // O(n log n) complexity we have to copy these values in a new set first.
            set.add(val);
        } else if (!b.has(val)) {
            if (strict) return false; // Fast path to detect missing string, symbol, undefined and null values.
            if (!setMightHaveLoosePrim(a, b, val)) return false;
            if (set === null) set = new Set();
            set.add(val);
        }
    }
    if (set !== null) {
        var bValues = arrayFromSet(b);
        for(var _i = 0; _i < bValues.length; _i++){
            var _val = bValues[_i]; // We have to check if a primitive value is already
            // matching and only if it's not, go hunting for it.
            if (_typeof(_val) === 'object' && _val !== null) {
                if (!setHasEqualElement(set, _val, strict, memo)) return false;
            } else if (!strict && !a.has(_val) && !setHasEqualElement(set, _val, strict, memo)) return false;
        }
        return set.size === 0;
    }
    return true;
}
function mapHasEqualEntry(set, map, key1, item1, strict, memo) {
    // To be able to handle cases like:
    //   Map([[{}, 'a'], [{}, 'b']]) vs Map([[{}, 'b'], [{}, 'a']])
    // ... we need to consider *all* matching keys, not just the first we find.
    var setValues = arrayFromSet(set);
    for(var i = 0; i < setValues.length; i++){
        var key2 = setValues[i];
        if (innerDeepEqual(key1, key2, strict, memo) && innerDeepEqual(item1, map.get(key2), strict, memo)) {
            set.delete(key2);
            return true;
        }
    }
    return false;
}
function mapEquiv(a, b, strict, memo) {
    var set = null;
    var aEntries = arrayFromMap(a);
    for(var i = 0; i < aEntries.length; i++){
        var _aEntries$i = _slicedToArray(aEntries[i], 2), key = _aEntries$i[0], item1 = _aEntries$i[1];
        if (_typeof(key) === 'object' && key !== null) {
            if (set === null) set = new Set();
            set.add(key);
        } else {
            // By directly retrieving the value we prevent another b.has(key) check in
            // almost all possible cases.
            var item2 = b.get(key);
            if (item2 === undefined && !b.has(key) || !innerDeepEqual(item1, item2, strict, memo)) {
                if (strict) return false; // Fast path to detect missing string, symbol, undefined and null
                // keys.
                if (!mapMightHaveLoosePrim(a, b, key, item1, memo)) return false;
                if (set === null) set = new Set();
                set.add(key);
            }
        }
    }
    if (set !== null) {
        var bEntries = arrayFromMap(b);
        for(var _i2 = 0; _i2 < bEntries.length; _i2++){
            var _bEntries$_i = _slicedToArray(bEntries[_i2], 2), key = _bEntries$_i[0], item = _bEntries$_i[1];
            if (_typeof(key) === 'object' && key !== null) {
                if (!mapHasEqualEntry(set, a, key, item, strict, memo)) return false;
            } else if (!strict && (!a.has(key) || !innerDeepEqual(a.get(key), item, false, memo)) && !mapHasEqualEntry(set, a, key, item, false, memo)) return false;
        }
        return set.size === 0;
    }
    return true;
}
function objEquiv(a, b, strict, keys, memos, iterationType) {
    // Sets and maps don't have their entries accessible via normal object
    // properties.
    var i = 0;
    if (iterationType === kIsSet) {
        if (!setEquiv(a, b, strict, memos)) return false;
    } else if (iterationType === kIsMap) {
        if (!mapEquiv(a, b, strict, memos)) return false;
    } else if (iterationType === kIsArray) for(; i < a.length; i++){
        if (hasOwnProperty(a, i)) {
            if (!hasOwnProperty(b, i) || !innerDeepEqual(a[i], b[i], strict, memos)) return false;
        } else if (hasOwnProperty(b, i)) return false;
        else {
            // Array is sparse.
            var keysA = Object.keys(a);
            for(; i < keysA.length; i++){
                var key = keysA[i];
                if (!hasOwnProperty(b, key) || !innerDeepEqual(a[key], b[key], strict, memos)) return false;
            }
            if (keysA.length !== Object.keys(b).length) return false;
            return true;
        }
    }
     // The pair must have equivalent values for every corresponding key.
    // Possibly expensive deep test:
    for(i = 0; i < keys.length; i++){
        var _key = keys[i];
        if (!innerDeepEqual(a[_key], b[_key], strict, memos)) return false;
    }
    return true;
}
function isDeepEqual(val1, val2) {
    return innerDeepEqual(val1, val2, kLoose);
}
function isDeepStrictEqual(val1, val2) {
    return innerDeepEqual(val1, val2, kStrict);
}
module.exports = {
    isDeepEqual: isDeepEqual,
    isDeepStrictEqual: isDeepStrictEqual
};

},{"object-is":"V34yE","is-nan":"j4zD4","util/":"fZQoa"}],"j4zD4":[function(require,module,exports) {
'use strict';
var callBind = require('call-bind');
var define = require('define-properties');
var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');
var polyfill = callBind(getPolyfill(), Number);
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ define(polyfill, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = polyfill;

},{"call-bind":"bPDkM","define-properties":"arjVC","./implementation":"i6FAo","./polyfill":"1cnxy","./shim":"jKLXz"}],"i6FAo":[function(require,module,exports) {
'use strict';
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ module.exports = function isNaN(value) {
    return value !== value;
};

},{}],"1cnxy":[function(require,module,exports) {
'use strict';
var implementation = require('./implementation');
module.exports = function getPolyfill() {
    if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN('a')) return Number.isNaN;
    return implementation;
};

},{"./implementation":"i6FAo"}],"jKLXz":[function(require,module,exports) {
'use strict';
var define = require('define-properties');
var getPolyfill = require('./polyfill');
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ module.exports = function shimNumberIsNaN() {
    var polyfill = getPolyfill();
    define(Number, {
        isNaN: polyfill
    }, {
        isNaN: function testIsNaN() {
            return Number.isNaN !== polyfill;
        }
    });
    return polyfill;
};

},{"define-properties":"arjVC","./polyfill":"1cnxy"}],"9c9cD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Bootstrap cliui with CommonJS dependencies:
var _indexJs = require("./build/lib/index.js");
var _stringUtilsJs = require("./build/lib/string-utils.js");
function ui(opts) {
    return _indexJs.cliui(opts, {
        stringWidth: (str)=>{
            return [
                ...str
            ].length;
        },
        stripAnsi: _stringUtilsJs.stripAnsi,
        wrap: _stringUtilsJs.wrap
    });
}
exports.default = ui;

},{"./build/lib/index.js":"lWOpy","./build/lib/string-utils.js":"j7myF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lWOpy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UI", ()=>UI
);
parcelHelpers.export(exports, "cliui", ()=>cliui
);
var process = require("process");
'use strict';
const align = {
    right: alignRight,
    center: alignCenter
};
const top = 0;
const right = 1;
const bottom = 2;
const left = 3;
class UI {
    constructor(opts1){
        var _a;
        this.width = opts1.width;
        this.wrap = (_a = opts1.wrap) !== null && _a !== void 0 ? _a : true;
        this.rows = [];
    }
    span(...args) {
        const cols = this.div(...args);
        cols.span = true;
    }
    resetOutput() {
        this.rows = [];
    }
    div(...args1) {
        if (args1.length === 0) this.div('');
        if (this.wrap && this.shouldApplyLayoutDSL(...args1) && typeof args1[0] === 'string') return this.applyLayoutDSL(args1[0]);
        const cols = args1.map((arg)=>{
            if (typeof arg === 'string') return this.colFromString(arg);
            return arg;
        });
        this.rows.push(cols);
        return cols;
    }
    shouldApplyLayoutDSL(...args2) {
        return args2.length === 1 && typeof args2[0] === 'string' && /[\t\n]/.test(args2[0]);
    }
    applyLayoutDSL(str2) {
        const rows = str2.split('\n').map((row)=>row.split('\t')
        );
        let leftColumnWidth = 0;
        // simple heuristic for layout, make sure the
        // second column lines up along the left-hand.
        // don't allow the first column to take up more
        // than 50% of the screen.
        rows.forEach((columns)=>{
            if (columns.length > 1 && mixin.stringWidth(columns[0]) > leftColumnWidth) leftColumnWidth = Math.min(Math.floor(this.width * 0.5), mixin.stringWidth(columns[0]));
        });
        // generate a table:
        //  replacing ' ' with padding calculations.
        //  using the algorithmically generated width.
        rows.forEach((columns)=>{
            this.div(...columns.map((r, i)=>{
                return {
                    text: r.trim(),
                    padding: this.measurePadding(r),
                    width: i === 0 && columns.length > 1 ? leftColumnWidth : undefined
                };
            }));
        });
        return this.rows[this.rows.length - 1];
    }
    colFromString(text) {
        return {
            text,
            padding: this.measurePadding(text)
        };
    }
    measurePadding(str1) {
        // measure padding without ansi escape codes
        const noAnsi = mixin.stripAnsi(str1);
        return [
            0,
            noAnsi.match(/\s*$/)[0].length,
            0,
            noAnsi.match(/^\s*/)[0].length
        ];
    }
    toString() {
        const lines = [];
        this.rows.forEach((row)=>{
            this.rowToString(row, lines);
        });
        // don't display any lines with the
        // hidden flag set.
        return lines.filter((line)=>!line.hidden
        ).map((line)=>line.text
        ).join('\n');
    }
    rowToString(row, lines) {
        this.rasterize(row).forEach((rrow, r)=>{
            let str = '';
            rrow.forEach((col, c)=>{
                const { width  } = row[c]; // the width with padding.
                const wrapWidth = this.negatePadding(row[c]); // the width without padding.
                let ts = col; // temporary string used during alignment/padding.
                if (wrapWidth > mixin.stringWidth(col)) ts += ' '.repeat(wrapWidth - mixin.stringWidth(col));
                // align the string within its column.
                if (row[c].align && row[c].align !== 'left' && this.wrap) {
                    const fn = align[row[c].align];
                    ts = fn(ts, wrapWidth);
                    if (mixin.stringWidth(ts) < wrapWidth) ts += ' '.repeat((width || 0) - mixin.stringWidth(ts) - 1);
                }
                // apply border and padding to string.
                const padding = row[c].padding || [
                    0,
                    0,
                    0,
                    0
                ];
                if (padding[left]) str += ' '.repeat(padding[left]);
                str += addBorder(row[c], ts, '| ');
                str += ts;
                str += addBorder(row[c], ts, ' |');
                if (padding[right]) str += ' '.repeat(padding[right]);
                // if prior row is span, try to render the
                // current row on the prior line.
                if (r === 0 && lines.length > 0) str = this.renderInline(str, lines[lines.length - 1]);
            });
            // remove trailing whitespace.
            lines.push({
                text: str.replace(/ +$/, ''),
                span: row.span
            });
        });
        return lines;
    }
    // if the full 'source' can render in
    // the target line, do so.
    renderInline(source, previousLine) {
        const match = source.match(/^ */);
        const leadingWhitespace = match ? match[0].length : 0;
        const target = previousLine.text;
        const targetTextWidth = mixin.stringWidth(target.trimRight());
        if (!previousLine.span) return source;
        // if we're not applying wrapping logic,
        // just always append to the span.
        if (!this.wrap) {
            previousLine.hidden = true;
            return target + source;
        }
        if (leadingWhitespace < targetTextWidth) return source;
        previousLine.hidden = true;
        return target.trimRight() + ' '.repeat(leadingWhitespace - targetTextWidth) + source.trimLeft();
    }
    rasterize(row1) {
        const rrows = [];
        const widths = this.columnWidths(row1);
        let wrapped;
        // word wrap all columns, and create
        // a data-structure that is easy to rasterize.
        row1.forEach((col, c)=>{
            // leave room for left and right padding.
            col.width = widths[c];
            if (this.wrap) wrapped = mixin.wrap(col.text, this.negatePadding(col), {
                hard: true
            }).split('\n');
            else wrapped = col.text.split('\n');
            if (col.border) {
                wrapped.unshift('.' + '-'.repeat(this.negatePadding(col) + 2) + '.');
                wrapped.push("'" + '-'.repeat(this.negatePadding(col) + 2) + "'");
            }
            // add top and bottom padding.
            if (col.padding) {
                wrapped.unshift(...new Array(col.padding[top] || 0).fill(''));
                wrapped.push(...new Array(col.padding[bottom] || 0).fill(''));
            }
            wrapped.forEach((str, r)=>{
                if (!rrows[r]) rrows.push([]);
                const rrow = rrows[r];
                for(let i = 0; i < c; i++)if (rrow[i] === undefined) rrow.push('');
                rrow.push(str);
            });
        });
        return rrows;
    }
    negatePadding(col1) {
        let wrapWidth = col1.width || 0;
        if (col1.padding) wrapWidth -= (col1.padding[left] || 0) + (col1.padding[right] || 0);
        if (col1.border) wrapWidth -= 4;
        return wrapWidth;
    }
    columnWidths(row2) {
        if (!this.wrap) return row2.map((col)=>{
            return col.width || mixin.stringWidth(col.text);
        });
        let unset = row2.length;
        let remainingWidth = this.width;
        // column widths can be set in config.
        const widths = row2.map((col)=>{
            if (col.width) {
                unset--;
                remainingWidth -= col.width;
                return col.width;
            }
            return undefined;
        });
        // any unset widths should be calculated.
        const unsetWidth = unset ? Math.floor(remainingWidth / unset) : 0;
        return widths.map((w, i)=>{
            if (w === undefined) return Math.max(unsetWidth, _minWidth(row2[i]));
            return w;
        });
    }
}
function addBorder(col, ts, style) {
    if (col.border) {
        if (/[.']-+[.']/.test(ts)) return '';
        if (ts.trim().length !== 0) return style;
        return '  ';
    }
    return '';
}
// calculates the minimum width of
// a column, based on padding preferences.
function _minWidth(col) {
    const padding = col.padding || [];
    const minWidth = 1 + (padding[left] || 0) + (padding[right] || 0);
    if (col.border) return minWidth + 4;
    return minWidth;
}
function getWindowWidth() {
    /* istanbul ignore next: depends on terminal */ if (typeof process === 'object' && process.stdout && process.stdout.columns) return process.stdout.columns;
    return 80;
}
function alignRight(str, width) {
    str = str.trim();
    const strWidth = mixin.stringWidth(str);
    if (strWidth < width) return ' '.repeat(width - strWidth) + str;
    return str;
}
function alignCenter(str, width) {
    str = str.trim();
    const strWidth = mixin.stringWidth(str);
    /* istanbul ignore next */ if (strWidth >= width) return str;
    return ' '.repeat(width - strWidth >> 1) + str;
}
let mixin;
function cliui(opts, _mixin) {
    mixin = _mixin;
    return new UI({
        width: (opts === null || opts === void 0 ? void 0 : opts.width) || getWindowWidth(),
        wrap: opts === null || opts === void 0 ? void 0 : opts.wrap
    });
}

},{"process":"lDnB8","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"j7myF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stripAnsi", ()=>stripAnsi
);
parcelHelpers.export(exports, "wrap", ()=>wrap
);
// Minimal replacement for ansi string helpers "wrap-ansi" and "strip-ansi".
// to facilitate ESM and Deno modules.
// TODO: look at porting https://www.npmjs.com/package/wrap-ansi to ESM.
// The npm application
// Copyright (c) npm, Inc. and Contributors
// Licensed on the terms of The Artistic License 2.0
// See: https://github.com/npm/cli/blob/4c65cd952bc8627811735bea76b9b110cc4fc80e/lib/utils/ansi-trim.js
const ansi = new RegExp("\x1b(?:\\[(?:\\d+[ABCDEFGJKSTm]|\\d+;\\d+[Hfm]|\\d+;\\d+;\\d+m|6n|s|u|\\?25[lh])|\\w)", 'g');
function stripAnsi(str) {
    return str.replace(ansi, '');
}
function wrap(str, width) {
    const [start, end] = str.match(ansi) || [
        '',
        ''
    ];
    str = stripAnsi(str);
    let wrapped = '';
    for(let i = 0; i < str.length; i++){
        if (i !== 0 && i % width === 0) wrapped += '\n';
        wrapped += str.charAt(i);
    }
    if (start && end) wrapped = `${start}${wrapped}${end}`;
    return wrapped;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5Odro":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _path = require("path");
var _fs = require("fs");
exports.default = function(start, callback) {
    let dir = _path.resolve('.', start);
    let tmp, stats = _fs.statSync(dir);
    if (!stats.isDirectory()) dir = _path.dirname(dir);
    while(true){
        tmp = callback(dir, _fs.readdirSync(dir));
        if (tmp) return _path.resolve(dir, tmp);
        dir = _path.dirname(tmp = dir);
        if (tmp === dir) break;
    }
};

},{"path":"dTeSu","fs":"joWnX","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dTeSu":[function(require,module,exports) {
var process = require("process");
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
function assertPath(path) {
    if (typeof path !== 'string') throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
    var res = '';
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47 /*/*/ ) break;
        else code = 47 /*/*/ ;
        if (code === 47 /*/*/ ) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/  || res.charCodeAt(res.length - 2) !== 46 /*.*/ ) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf('/');
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = '';
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = '';
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += '/..';
                    else res = '..';
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += '/' + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 /*.*/  && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = '';
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = process.cwd();
                path = cwd;
            }
            assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + '/' + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return '/' + resolvedPath;
            else return '/';
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return '.';
    },
    normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0) return '.';
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = '.';
        if (path.length > 0 && trailingSeparator) path += '/';
        if (isAbsolute) return '/' + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return '.';
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += '/' + arg;
            }
        }
        if (joined === undefined) return '.';
        return posix.normalize(joined);
    },
    relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return '';
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return '';
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47 /*/*/ ) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47 /*/*/ ) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/ ) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/ ) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47 /*/*/ ) lastCommonSep = i;
        }
        var out = '';
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += '..';
            else out += '/..';
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/ ) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return '.';
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? '/' : '.';
        if (hasRoot && end === 1) return '//';
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return '';
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return '';
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return '';
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== 'object') throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return _format('/', pathObject);
    },
    parse: function parse(path) {
        assertPath(path);
        var ret = {
            root: '',
            dir: '',
            base: '',
            ext: '',
            name: ''
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = '/';
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = '/';
        return ret;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null
};
posix.posix = posix;
module.exports = posix;

},{"process":"lDnB8"}],"joWnX":[function(require,module,exports) {
"use strict";

},{}],"1F0iP":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
var punycode = require('punycode');
var util = require('./util');
exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;
exports.Url = Url;
function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
}
// Reference: RFC 3986, RFC 1808, RFC 2396
// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i, portPattern = /:[0-9]*$/, // Special case for a simple path URL
simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, // RFC 2396: characters reserved for delimiting URLs.
// We actually just auto-escape these.
delims = [
    '<',
    '>',
    '"',
    '`',
    ' ',
    '\r',
    '\n',
    '\t'
], // RFC 2396: characters not allowed for various reasons.
unwise = [
    '{',
    '}',
    '|',
    '\\',
    '^',
    '`'
].concat(delims), // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
autoEscape = [
    '\''
].concat(unwise), // Characters that are never ever allowed in a hostname.
// Note that any invalid chars are also handled, but these
// are the ones that are *expected* to be seen, so we fast-path
// them.
nonHostChars = [
    '%',
    '/',
    '?',
    ';',
    '#'
].concat(autoEscape), hostEndingChars = [
    '/',
    '?',
    '#'
], hostnameMaxLen = 255, hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/, hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, // protocols that can allow "unsafe" and "unwise" chars.
unsafeProtocol = {
    'javascript': true,
    'javascript:': true
}, // protocols that never have a hostname.
hostlessProtocol = {
    'javascript': true,
    'javascript:': true
}, // protocols that always contain a // bit.
slashedProtocol = {
    'http': true,
    'https': true,
    'ftp': true,
    'gopher': true,
    'file': true,
    'http:': true,
    'https:': true,
    'ftp:': true,
    'gopher:': true,
    'file:': true
}, querystring = require('querystring');
function urlParse(url, parseQueryString, slashesDenoteHost) {
    if (url && util.isObject(url) && url instanceof Url) return url;
    var u = new Url;
    u.parse(url, parseQueryString, slashesDenoteHost);
    return u;
}
Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
    if (!util.isString(url)) throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
    // Copy chrome, IE, opera backslash-handling behavior.
    // Back slashes before the query string get converted to forward slashes
    // See: https://code.google.com/p/chromium/issues/detail?id=25916
    var queryIndex = url.indexOf('?'), splitter = queryIndex !== -1 && queryIndex < url.indexOf('#') ? '?' : '#', uSplit = url.split(splitter), slashRegex = /\\/g;
    uSplit[0] = uSplit[0].replace(slashRegex, '/');
    url = uSplit.join(splitter);
    var rest = url;
    // trim before proceeding.
    // This is to support parse stuff like "  http://foo.com  \n"
    rest = rest.trim();
    if (!slashesDenoteHost && url.split('#').length === 1) {
        // Try fast path regexp
        var simplePath = simplePathPattern.exec(rest);
        if (simplePath) {
            this.path = rest;
            this.href = rest;
            this.pathname = simplePath[1];
            if (simplePath[2]) {
                this.search = simplePath[2];
                if (parseQueryString) this.query = querystring.parse(this.search.substr(1));
                else this.query = this.search.substr(1);
            } else if (parseQueryString) {
                this.search = '';
                this.query = {
                };
            }
            return this;
        }
    }
    var proto = protocolPattern.exec(rest);
    if (proto) {
        proto = proto[0];
        var lowerProto = proto.toLowerCase();
        this.protocol = lowerProto;
        rest = rest.substr(proto.length);
    }
    // figure out if it's got a host
    // user@server is *always* interpreted as a hostname, and url
    // resolution will treat //foo/bar as host=foo,path=bar because that's
    // how the browser resolves relative URLs.
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var slashes = rest.substr(0, 2) === '//';
        if (slashes && !(proto && hostlessProtocol[proto])) {
            rest = rest.substr(2);
            this.slashes = true;
        }
    }
    if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
        // there's a hostname.
        // the first instance of /, ?, ;, or # ends the host.
        //
        // If there is an @ in the hostname, then non-host chars *are* allowed
        // to the left of the last @ sign, unless some host-ending character
        // comes *before* the @-sign.
        // URLs are obnoxious.
        //
        // ex:
        // http://a@b@c/ => user:a@b host:c
        // http://a@b?@c => user:a host:c path:/?@c
        // v0.12 TODO(isaacs): This is not quite how Chrome does things.
        // Review our test case against browsers more comprehensively.
        // find the first instance of any hostEndingChars
        var hostEnd = -1;
        for(var i = 0; i < hostEndingChars.length; i++){
            var hec = rest.indexOf(hostEndingChars[i]);
            if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
        }
        // at this point, either we have an explicit point where the
        // auth portion cannot go past, or the last @ char is the decider.
        var auth, atSign;
        if (hostEnd === -1) // atSign can be anywhere.
        atSign = rest.lastIndexOf('@');
        else // atSign must be in auth portion.
        // http://a@b/c@d => host:b auth:a path:/c@d
        atSign = rest.lastIndexOf('@', hostEnd);
        // Now we have a portion which is definitely the auth.
        // Pull that off.
        if (atSign !== -1) {
            auth = rest.slice(0, atSign);
            rest = rest.slice(atSign + 1);
            this.auth = decodeURIComponent(auth);
        }
        // the host is the remaining to the left of the first non-host char
        hostEnd = -1;
        for(var i = 0; i < nonHostChars.length; i++){
            var hec = rest.indexOf(nonHostChars[i]);
            if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
        }
        // if we still have not hit it, then the entire thing is a host.
        if (hostEnd === -1) hostEnd = rest.length;
        this.host = rest.slice(0, hostEnd);
        rest = rest.slice(hostEnd);
        // pull out port.
        this.parseHost();
        // we've indicated that there is a hostname,
        // so even if it's empty, it has to be present.
        this.hostname = this.hostname || '';
        // if hostname begins with [ and ends with ]
        // assume that it's an IPv6 address.
        var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';
        // validate a little.
        if (!ipv6Hostname) {
            var hostparts = this.hostname.split(/\./);
            for(var i = 0, l = hostparts.length; i < l; i++){
                var part = hostparts[i];
                if (!part) continue;
                if (!part.match(hostnamePartPattern)) {
                    var newpart = '';
                    for(var j = 0, k = part.length; j < k; j++)if (part.charCodeAt(j) > 127) // we replace non-ASCII char with a temporary placeholder
                    // we need this to make sure size of hostname is not
                    // broken by replacing non-ASCII by nothing
                    newpart += 'x';
                    else newpart += part[j];
                    // we test again with ASCII char only
                    if (!newpart.match(hostnamePartPattern)) {
                        var validParts = hostparts.slice(0, i);
                        var notHost = hostparts.slice(i + 1);
                        var bit = part.match(hostnamePartStart);
                        if (bit) {
                            validParts.push(bit[1]);
                            notHost.unshift(bit[2]);
                        }
                        if (notHost.length) rest = '/' + notHost.join('.') + rest;
                        this.hostname = validParts.join('.');
                        break;
                    }
                }
            }
        }
        if (this.hostname.length > hostnameMaxLen) this.hostname = '';
        else // hostnames are always lower case.
        this.hostname = this.hostname.toLowerCase();
        if (!ipv6Hostname) // IDNA Support: Returns a punycoded representation of "domain".
        // It only converts parts of the domain name that
        // have non-ASCII characters, i.e. it doesn't matter if
        // you call it with a domain that already is ASCII-only.
        this.hostname = punycode.toASCII(this.hostname);
        var p = this.port ? ':' + this.port : '';
        var h = this.hostname || '';
        this.host = h + p;
        this.href += this.host;
        // strip [ and ] from the hostname
        // the host field still retains them, though
        if (ipv6Hostname) {
            this.hostname = this.hostname.substr(1, this.hostname.length - 2);
            if (rest[0] !== '/') rest = '/' + rest;
        }
    }
    // now rest is set to the post-host stuff.
    // chop off any delim chars.
    if (!unsafeProtocol[lowerProto]) // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for(var i = 0, l = autoEscape.length; i < l; i++){
        var ae = autoEscape[i];
        if (rest.indexOf(ae) === -1) continue;
        var esc = encodeURIComponent(ae);
        if (esc === ae) esc = escape(ae);
        rest = rest.split(ae).join(esc);
    }
    // chop off from the tail first.
    var hash = rest.indexOf('#');
    if (hash !== -1) {
        // got a fragment string.
        this.hash = rest.substr(hash);
        rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf('?');
    if (qm !== -1) {
        this.search = rest.substr(qm);
        this.query = rest.substr(qm + 1);
        if (parseQueryString) this.query = querystring.parse(this.query);
        rest = rest.slice(0, qm);
    } else if (parseQueryString) {
        // no query string, but parseQueryString still requested
        this.search = '';
        this.query = {
        };
    }
    if (rest) this.pathname = rest;
    if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) this.pathname = '/';
    //to support http.request
    if (this.pathname || this.search) {
        var p = this.pathname || '';
        var s = this.search || '';
        this.path = p + s;
    }
    // finally, reconstruct the href based on what has been validated.
    this.href = this.format();
    return this;
};
// format a parsed object into a url string
function urlFormat(obj) {
    // ensure it's an object, and not a string url.
    // If it's an obj, this is a no-op.
    // this way, you can call url_format() on strings
    // to clean up potentially wonky urls.
    if (util.isString(obj)) obj = urlParse(obj);
    if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
    return obj.format();
}
Url.prototype.format = function() {
    var auth = this.auth || '';
    if (auth) {
        auth = encodeURIComponent(auth);
        auth = auth.replace(/%3A/i, ':');
        auth += '@';
    }
    var protocol = this.protocol || '', pathname = this.pathname || '', hash = this.hash || '', host = false, query = '';
    if (this.host) host = auth + this.host;
    else if (this.hostname) {
        host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');
        if (this.port) host += ':' + this.port;
    }
    if (this.query && util.isObject(this.query) && Object.keys(this.query).length) query = querystring.stringify(this.query);
    var search = this.search || query && '?' + query || '';
    if (protocol && protocol.substr(-1) !== ':') protocol += ':';
    // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
    // unless they had them to begin with.
    if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
    } else if (!host) host = '';
    if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
    if (search && search.charAt(0) !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, function(match) {
        return encodeURIComponent(match);
    });
    search = search.replace('#', '%23');
    return protocol + host + pathname + search + hash;
};
function urlResolve(source, relative) {
    return urlParse(source, false, true).resolve(relative);
}
Url.prototype.resolve = function(relative) {
    return this.resolveObject(urlParse(relative, false, true)).format();
};
function urlResolveObject(source, relative) {
    if (!source) return relative;
    return urlParse(source, false, true).resolveObject(relative);
}
Url.prototype.resolveObject = function(relative) {
    if (util.isString(relative)) {
        var rel = new Url();
        rel.parse(relative, false, true);
        relative = rel;
    }
    var result = new Url();
    var tkeys = Object.keys(this);
    for(var tk = 0; tk < tkeys.length; tk++){
        var tkey = tkeys[tk];
        result[tkey] = this[tkey];
    }
    // hash is always overridden, no matter what.
    // even href="" will remove it.
    result.hash = relative.hash;
    // if the relative url is empty, then there's nothing left to do here.
    if (relative.href === '') {
        result.href = result.format();
        return result;
    }
    // hrefs like //foo/bar always cut to the protocol.
    if (relative.slashes && !relative.protocol) {
        // take everything except the protocol from relative
        var rkeys = Object.keys(relative);
        for(var rk = 0; rk < rkeys.length; rk++){
            var rkey = rkeys[rk];
            if (rkey !== 'protocol') result[rkey] = relative[rkey];
        }
        //urlParse appends trailing / to urls like http://www.example.com
        if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) result.path = result.pathname = '/';
        result.href = result.format();
        return result;
    }
    if (relative.protocol && relative.protocol !== result.protocol) {
        // if it's a known url protocol, then changing
        // the protocol does weird things
        // first, if it's not file:, then we MUST have a host,
        // and if there was a path
        // to begin with, then we MUST have a path.
        // if it is file:, then the host is dropped,
        // because that's known to be hostless.
        // anything else is assumed to be absolute.
        if (!slashedProtocol[relative.protocol]) {
            var keys = Object.keys(relative);
            for(var v = 0; v < keys.length; v++){
                var k = keys[v];
                result[k] = relative[k];
            }
            result.href = result.format();
            return result;
        }
        result.protocol = relative.protocol;
        if (!relative.host && !hostlessProtocol[relative.protocol]) {
            var relPath = (relative.pathname || '').split('/');
            while(relPath.length && !(relative.host = relPath.shift()));
            if (!relative.host) relative.host = '';
            if (!relative.hostname) relative.hostname = '';
            if (relPath[0] !== '') relPath.unshift('');
            if (relPath.length < 2) relPath.unshift('');
            result.pathname = relPath.join('/');
        } else result.pathname = relative.pathname;
        result.search = relative.search;
        result.query = relative.query;
        result.host = relative.host || '';
        result.auth = relative.auth;
        result.hostname = relative.hostname || relative.host;
        result.port = relative.port;
        // to support http.request
        if (result.pathname || result.search) {
            var p = result.pathname || '';
            var s = result.search || '';
            result.path = p + s;
        }
        result.slashes = result.slashes || relative.slashes;
        result.href = result.format();
        return result;
    }
    var isSourceAbs = result.pathname && result.pathname.charAt(0) === '/', isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === '/', mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split('/') || [], relPath = relative.pathname && relative.pathname.split('/') || [], psychotic = result.protocol && !slashedProtocol[result.protocol];
    // if the url is a non-slashed url, then relative
    // links like ../.. should be able
    // to crawl up to the hostname, as well.  This is strange.
    // result.protocol has already been set by now.
    // Later on, put the first path part into the host field.
    if (psychotic) {
        result.hostname = '';
        result.port = null;
        if (result.host) {
            if (srcPath[0] === '') srcPath[0] = result.host;
            else srcPath.unshift(result.host);
        }
        result.host = '';
        if (relative.protocol) {
            relative.hostname = null;
            relative.port = null;
            if (relative.host) {
                if (relPath[0] === '') relPath[0] = relative.host;
                else relPath.unshift(relative.host);
            }
            relative.host = null;
        }
        mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
    }
    if (isRelAbs) {
        // it's absolute.
        result.host = relative.host || relative.host === '' ? relative.host : result.host;
        result.hostname = relative.hostname || relative.hostname === '' ? relative.hostname : result.hostname;
        result.search = relative.search;
        result.query = relative.query;
        srcPath = relPath;
    // fall through to the dot-handling below.
    } else if (relPath.length) {
        // it's relative
        // throw away the existing file, and take the new path instead.
        if (!srcPath) srcPath = [];
        srcPath.pop();
        srcPath = srcPath.concat(relPath);
        result.search = relative.search;
        result.query = relative.query;
    } else if (!util.isNullOrUndefined(relative.search)) {
        // just pull out the search.
        // like href='?foo'.
        // Put this after the other two cases because it simplifies the booleans
        if (psychotic) {
            result.hostname = result.host = srcPath.shift();
            //occationaly the auth can get stuck only in host
            //this especially happens in cases like
            //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
            var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
            if (authInHost) {
                result.auth = authInHost.shift();
                result.host = result.hostname = authInHost.shift();
            }
        }
        result.search = relative.search;
        result.query = relative.query;
        //to support http.request
        if (!util.isNull(result.pathname) || !util.isNull(result.search)) result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
        result.href = result.format();
        return result;
    }
    if (!srcPath.length) {
        // no path at all.  easy.
        // we've already handled the other stuff above.
        result.pathname = null;
        //to support http.request
        if (result.search) result.path = '/' + result.search;
        else result.path = null;
        result.href = result.format();
        return result;
    }
    // if a url ENDs in . or .., then it must get a trailing slash.
    // however, if it ends in anything else non-slashy,
    // then it must NOT get a trailing slash.
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === '.' || last === '..') || last === '';
    // strip single dots, resolve double dots to parent dir
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for(var i = srcPath.length; i >= 0; i--){
        last = srcPath[i];
        if (last === '.') srcPath.splice(i, 1);
        else if (last === '..') {
            srcPath.splice(i, 1);
            up++;
        } else if (up) {
            srcPath.splice(i, 1);
            up--;
        }
    }
    // if the path is allowed to go above the root, restore leading ..s
    if (!mustEndAbs && !removeAllDots) for(; up--;)srcPath.unshift('..');
    if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) srcPath.unshift('');
    if (hasTrailingSlash && srcPath.join('/').substr(-1) !== '/') srcPath.push('');
    var isAbsolute = srcPath[0] === '' || srcPath[0] && srcPath[0].charAt(0) === '/';
    // put the host back
    if (psychotic) {
        result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '';
        //occationaly the auth can get stuck only in host
        //this especially happens in cases like
        //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
        var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
        if (authInHost) {
            result.auth = authInHost.shift();
            result.host = result.hostname = authInHost.shift();
        }
    }
    mustEndAbs = mustEndAbs || result.host && srcPath.length;
    if (mustEndAbs && !isAbsolute) srcPath.unshift('');
    if (!srcPath.length) {
        result.pathname = null;
        result.path = null;
    } else result.pathname = srcPath.join('/');
    //to support request.http
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
    result.auth = relative.auth || result.auth;
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
};
Url.prototype.parseHost = function() {
    var host = this.host;
    var port = portPattern.exec(host);
    if (port) {
        port = port[0];
        if (port !== ':') this.port = port.substr(1);
        host = host.substr(0, host.length - port.length);
    }
    if (host) this.hostname = host;
};

},{"punycode":"9Z1Qb","./util":"4qsKg","querystring":"46waF"}],"9Z1Qb":[function(require,module,exports) {
var global = arguments[3];
(function(root) {
    /** Detect free variables */ var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
    var freeModule = typeof module == 'object' && module && !module.nodeType && module;
    var freeGlobal = typeof global == 'object' && global;
    if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) root = freeGlobal;
    /**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */ var punycode, /** Highest positive signed 32-bit float value */ maxInt = 2147483647, /** Bootstring parameters */ base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700, initialBias = 72, initialN = 128, delimiter = '-', /** Regular expressions */ regexPunycode = /^xn--/, regexNonASCII = /[^\x20-\x7E]/, regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, /** Error messages */ errors = {
        'overflow': 'Overflow: input needs wider integers to process',
        'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
        'invalid-input': 'Invalid input'
    }, /** Convenience shortcuts */ baseMinusTMin = base - tMin, floor = Math.floor, stringFromCharCode = String.fromCharCode, /** Temporary variable */ key;
    /*--------------------------------------------------------------------------*/ /**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */ function error(type) {
        throw new RangeError(errors[type]);
    }
    /**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */ function map(array, fn) {
        var length = array.length;
        var result = [];
        while(length--)result[length] = fn(array[length]);
        return result;
    }
    /**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */ function mapDomain(string, fn) {
        var parts = string.split('@');
        var result = '';
        if (parts.length > 1) {
            // In email addresses, only the domain name should be punycoded. Leave
            // the local part (i.e. everything up to `@`) intact.
            result = parts[0] + '@';
            string = parts[1];
        }
        // Avoid `split(regex)` for IE8 compatibility. See #17.
        string = string.replace(regexSeparators, '\x2E');
        var labels = string.split('.');
        var encoded = map(labels, fn).join('.');
        return result + encoded;
    }
    /**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */ function ucs2decode(string) {
        var output = [], counter = 0, length = string.length, value, extra;
        while(counter < length){
            value = string.charCodeAt(counter++);
            if (value >= 55296 && value <= 56319 && counter < length) {
                // high surrogate, and there is a next character
                extra = string.charCodeAt(counter++);
                if ((extra & 64512) == 56320) output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
                else {
                    // unmatched surrogate; only append this code unit, in case the next
                    // code unit is the high surrogate of a surrogate pair
                    output.push(value);
                    counter--;
                }
            } else output.push(value);
        }
        return output;
    }
    /**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */ function ucs2encode(array) {
        return map(array, function(value) {
            var output = '';
            if (value > 65535) {
                value -= 65536;
                output += stringFromCharCode(value >>> 10 & 1023 | 55296);
                value = 56320 | value & 1023;
            }
            output += stringFromCharCode(value);
            return output;
        }).join('');
    }
    /**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */ function basicToDigit(codePoint) {
        if (codePoint - 48 < 10) return codePoint - 22;
        if (codePoint - 65 < 26) return codePoint - 65;
        if (codePoint - 97 < 26) return codePoint - 97;
        return base;
    }
    /**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */ function digitToBasic(digit, flag) {
        //  0..25 map to ASCII a..z or A..Z
        // 26..35 map to ASCII 0..9
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
    }
    /**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */ function adapt(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for(; delta > baseMinusTMin * tMax >> 1; k += base)delta = floor(delta / baseMinusTMin);
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
    }
    /**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */ function decode(input) {
        // Don't use UCS-2
        var output = [], inputLength = input.length, out, i = 0, n = initialN, bias = initialBias, basic, j, index, oldi, w, k, digit, t, /** Cached calculation results */ baseMinusT;
        // Handle the basic code points: let `basic` be the number of input code
        // points before the last delimiter, or `0` if there is none, then copy
        // the first basic code points to the output.
        basic = input.lastIndexOf(delimiter);
        if (basic < 0) basic = 0;
        for(j = 0; j < basic; ++j){
            // if it's not a basic code point
            if (input.charCodeAt(j) >= 128) error('not-basic');
            output.push(input.charCodeAt(j));
        }
        // Main decoding loop: start just after the last delimiter if any basic code
        // points were copied; start at the beginning otherwise.
        for(index = basic > 0 ? basic + 1 : 0; index < inputLength;){
            // `index` is the index of the next character to be consumed.
            // Decode a generalized variable-length integer into `delta`,
            // which gets added to `i`. The overflow checking is easier
            // if we increase `i` as we go, then subtract off its starting
            // value at the end to obtain `delta`.
            for(oldi = i, w = 1, k = base;; k += base){
                if (index >= inputLength) error('invalid-input');
                digit = basicToDigit(input.charCodeAt(index++));
                if (digit >= base || digit > floor((maxInt - i) / w)) error('overflow');
                i += digit * w;
                t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                if (digit < t) break;
                baseMinusT = base - t;
                if (w > floor(maxInt / baseMinusT)) error('overflow');
                w *= baseMinusT;
            }
            out = output.length + 1;
            bias = adapt(i - oldi, out, oldi == 0);
            // `i` was supposed to wrap around from `out` to `0`,
            // incrementing `n` each time, so we'll fix that now:
            if (floor(i / out) > maxInt - n) error('overflow');
            n += floor(i / out);
            i %= out;
            // Insert `n` at position `i` of the output
            output.splice(i++, 0, n);
        }
        return ucs2encode(output);
    }
    /**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */ function encode(input) {
        var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], /** `inputLength` will hold the number of code points in `input`. */ inputLength, /** Cached calculation results */ handledCPCountPlusOne, baseMinusT, qMinusT;
        // Convert the input in UCS-2 to Unicode
        input = ucs2decode(input);
        // Cache the length
        inputLength = input.length;
        // Initialize the state
        n = initialN;
        delta = 0;
        bias = initialBias;
        // Handle the basic code points
        for(j = 0; j < inputLength; ++j){
            currentValue = input[j];
            if (currentValue < 128) output.push(stringFromCharCode(currentValue));
        }
        handledCPCount = basicLength = output.length;
        // `handledCPCount` is the number of code points that have been handled;
        // `basicLength` is the number of basic code points.
        // Finish the basic string - if it is not empty - with a delimiter
        if (basicLength) output.push(delimiter);
        // Main encoding loop:
        while(handledCPCount < inputLength){
            // All non-basic code points < n have been handled already. Find the next
            // larger one:
            for(m = maxInt, j = 0; j < inputLength; ++j){
                currentValue = input[j];
                if (currentValue >= n && currentValue < m) m = currentValue;
            }
            // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
            // but guard against overflow
            handledCPCountPlusOne = handledCPCount + 1;
            if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) error('overflow');
            delta += (m - n) * handledCPCountPlusOne;
            n = m;
            for(j = 0; j < inputLength; ++j){
                currentValue = input[j];
                if (currentValue < n && ++delta > maxInt) error('overflow');
                if (currentValue == n) {
                    // Represent delta as a generalized variable-length integer
                    for(q = delta, k = base;; k += base){
                        t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                        if (q < t) break;
                        qMinusT = q - t;
                        baseMinusT = base - t;
                        output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                        q = floor(qMinusT / baseMinusT);
                    }
                    output.push(stringFromCharCode(digitToBasic(q, 0)));
                    bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                    delta = 0;
                    ++handledCPCount;
                }
            }
            ++delta;
            ++n;
        }
        return output.join('');
    }
    /**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */ function toUnicode(input) {
        return mapDomain(input, function(string) {
            return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
        });
    }
    /**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */ function toASCII(input) {
        return mapDomain(input, function(string) {
            return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
        });
    }
    /*--------------------------------------------------------------------------*/ /** Define the public API */ punycode = {
        /**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */ 'version': '1.4.1',
        /**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */ 'ucs2': {
            'decode': ucs2decode,
            'encode': ucs2encode
        },
        'decode': decode,
        'encode': encode,
        'toASCII': toASCII,
        'toUnicode': toUnicode
    };
    /** Expose `punycode` */ // Some AMD build optimizers, like r.js, check for specific condition patterns
    // like the following:
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) define('punycode', function() {
        return punycode;
    });
    else if (freeExports && freeModule) {
        if (module.exports == freeExports) // in Node.js, io.js, or RingoJS v0.8.0+
        freeModule.exports = punycode;
        else // in Narwhal or RingoJS v0.7.0-
        for(key in punycode)punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
    } else // in Rhino or a web browser
    root.punycode = punycode;
})(this);

},{}],"4qsKg":[function(require,module,exports) {
'use strict';
module.exports = {
    isString: function(arg) {
        return typeof arg === 'string';
    },
    isObject: function(arg) {
        return typeof arg === 'object' && arg !== null;
    },
    isNull: function(arg) {
        return arg === null;
    },
    isNullOrUndefined: function(arg) {
        return arg == null;
    }
};

},{}],"46waF":[function(require,module,exports) {
'use strict';
exports.decode = exports.parse = require('./decode');
exports.encode = exports.stringify = require('./encode');

},{"./decode":"aDCW3","./encode":"6dFZR"}],"aDCW3":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
module.exports = function(qs, sep, eq, options) {
    sep = sep || '&';
    eq = eq || '=';
    var obj = {
    };
    if (typeof qs !== 'string' || qs.length === 0) return obj;
    var regexp = /\+/g;
    qs = qs.split(sep);
    var maxKeys = 1000;
    if (options && typeof options.maxKeys === 'number') maxKeys = options.maxKeys;
    var len = qs.length;
    // maxKeys <= 0 means that we should not limit keys count
    if (maxKeys > 0 && len > maxKeys) len = maxKeys;
    for(var i = 0; i < len; ++i){
        var x = qs[i].replace(regexp, '%20'), idx = x.indexOf(eq), kstr, vstr, k, v;
        if (idx >= 0) {
            kstr = x.substr(0, idx);
            vstr = x.substr(idx + 1);
        } else {
            kstr = x;
            vstr = '';
        }
        k = decodeURIComponent(kstr);
        v = decodeURIComponent(vstr);
        if (!hasOwnProperty(obj, k)) obj[k] = v;
        else if (isArray(obj[k])) obj[k].push(v);
        else obj[k] = [
            obj[k],
            v
        ];
    }
    return obj;
};
var isArray = Array.isArray || function(xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};

},{}],"6dFZR":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
var stringifyPrimitive = function(v) {
    switch(typeof v){
        case 'string':
            return v;
        case 'boolean':
            return v ? 'true' : 'false';
        case 'number':
            return isFinite(v) ? v : '';
        default:
            return '';
    }
};
module.exports = function(obj, sep, eq, name) {
    sep = sep || '&';
    eq = eq || '=';
    if (obj === null) obj = undefined;
    if (typeof obj === 'object') return map(objectKeys(obj), function(k) {
        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
        if (isArray(obj[k])) return map(obj[k], function(v) {
            return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
        else return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
    }).join(sep);
    if (!name) return '';
    return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};
var isArray = Array.isArray || function(xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};
function map(xs, f) {
    if (xs.map) return xs.map(f);
    var res = [];
    for(var i = 0; i < xs.length; i++)res.push(f(xs[i], i));
    return res;
}
var objectKeys = Object.keys || function(obj) {
    var res = [];
    for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
    return res;
};

},{}],"8WlR1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @fileoverview Main entrypoint for libraries using yargs-parser in Node.js
 * CJS and ESM environments.
 *
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */ var _util = require("util");
var _path = require("path");
var _stringUtilsJs = require("./string-utils.js");
var _yargsParserJs = require("./yargs-parser.js");
var _fs = require("fs");
var process = require("process");
// See https://github.com/yargs/yargs-parser#supported-nodejs-versions for our
// version support policy. The YARGS_MIN_NODE_VERSION is used for testing only.
const minNodeVersion = (process && process.env, 12);
if (process && process.version) {
    const major = Number(process.version.match(/v([^.]+)/)[1]);
    if (major < minNodeVersion) throw Error(`yargs parser supports a minimum Node.js version of ${minNodeVersion}. Read our version support policy: https://github.com/yargs/yargs-parser#supported-nodejs-versions`);
}
// Creates a yargs-parser instance using Node.js standard libraries:
const env = process ? process.env : {
};
const parser = new _yargsParserJs.YargsParser({
    cwd: process.cwd,
    env: ()=>{
        return env;
    },
    format: _util.format,
    normalize: _path.normalize,
    resolve: _path.resolve,
    // TODO: figure  out a  way to combine ESM and CJS coverage, such  that
    // we can exercise all the lines below:
    require: (path)=>{
        if (typeof require !== 'undefined') return require(path);
        else if (path.match(/\.json$/)) // Addresses: https://github.com/yargs/yargs/issues/2040
        return JSON.parse(_fs.readFileSync(path, 'utf8'));
        else throw Error('only .json config files are supported in ESM');
    }
});
const yargsParser = function Parser(args, opts) {
    const result = parser.parse(args.slice(), opts);
    return result.argv;
};
yargsParser.detailed = function(args, opts) {
    return parser.parse(args.slice(), opts);
};
yargsParser.camelCase = _stringUtilsJs.camelCase;
yargsParser.decamelize = _stringUtilsJs.decamelize;
yargsParser.looksLikeNumber = _stringUtilsJs.looksLikeNumber;
exports.default = yargsParser;

},{"process":"lDnB8","util":"fZQoa","path":"dTeSu","./string-utils.js":"dbpyG","./yargs-parser.js":"9jN1S","fs":"joWnX","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dbpyG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */ parcelHelpers.export(exports, "camelCase", ()=>camelCase
);
parcelHelpers.export(exports, "decamelize", ()=>decamelize
);
parcelHelpers.export(exports, "looksLikeNumber", ()=>looksLikeNumber
);
function camelCase(str) {
    // Handle the case where an argument is provided as camel case, e.g., fooBar.
    // by ensuring that the string isn't already mixed case:
    const isCamelCase = str !== str.toLowerCase() && str !== str.toUpperCase();
    if (!isCamelCase) str = str.toLowerCase();
    if (str.indexOf('-') === -1 && str.indexOf('_') === -1) return str;
    else {
        let camelcase = '';
        let nextChrUpper = false;
        const leadingHyphens = str.match(/^-+/);
        for(let i = leadingHyphens ? leadingHyphens[0].length : 0; i < str.length; i++){
            let chr = str.charAt(i);
            if (nextChrUpper) {
                nextChrUpper = false;
                chr = chr.toUpperCase();
            }
            if (i !== 0 && (chr === '-' || chr === '_')) nextChrUpper = true;
            else if (chr !== '-' && chr !== '_') camelcase += chr;
        }
        return camelcase;
    }
}
function decamelize(str, joinString) {
    const lowercase = str.toLowerCase();
    joinString = joinString || '-';
    let notCamelcase = '';
    for(let i = 0; i < str.length; i++){
        const chrLower = lowercase.charAt(i);
        const chrString = str.charAt(i);
        if (chrLower !== chrString && i > 0) notCamelcase += `${joinString}${lowercase.charAt(i)}`;
        else notCamelcase += chrString;
    }
    return notCamelcase;
}
function looksLikeNumber(x) {
    if (x === null || x === undefined) return false;
    // if loaded from config, may already be a number.
    if (typeof x === 'number') return true;
    // hexadecimal.
    if (/^0x[0-9a-f]+$/i.test(x)) return true;
    // don't treat 0123 as a number; as it drops the leading '0'.
    if (/^0[^.]/.test(x)) return false;
    return /^[-]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9jN1S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "YargsParser", ()=>YargsParser
);
/**
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */ var _tokenizeArgStringJs = require("./tokenize-arg-string.js");
var _yargsParserTypesJs = require("./yargs-parser-types.js");
var _stringUtilsJs = require("./string-utils.js");
let mixin;
class YargsParser {
    constructor(_mixin){
        mixin = _mixin;
    }
    parse(argsInput, options) {
        const opts = Object.assign({
            alias: undefined,
            array: undefined,
            boolean: undefined,
            config: undefined,
            configObjects: undefined,
            configuration: undefined,
            coerce: undefined,
            count: undefined,
            default: undefined,
            envPrefix: undefined,
            narg: undefined,
            normalize: undefined,
            string: undefined,
            number: undefined,
            __: undefined,
            key: undefined
        }, options);
        // allow a string argument to be passed in rather
        // than an argv array.
        const args1 = _tokenizeArgStringJs.tokenizeArgString(argsInput);
        // tokenizeArgString adds extra quotes to args if argsInput is a string
        // only strip those extra quotes in processValue if argsInput is a string
        const inputIsString = typeof argsInput === 'string';
        // aliases might have transitive relationships, normalize this.
        const aliases1 = combineAliases(Object.assign(Object.create(null), opts.alias));
        const configuration = Object.assign({
            'boolean-negation': true,
            'camel-case-expansion': true,
            'combine-arrays': false,
            'dot-notation': true,
            'duplicate-arguments-array': true,
            'flatten-duplicate-arrays': true,
            'greedy-arrays': true,
            'halt-at-non-option': false,
            'nargs-eats-options': false,
            'negation-prefix': 'no-',
            'parse-numbers': true,
            'parse-positional-numbers': true,
            'populate--': false,
            'set-placeholder-key': false,
            'short-option-groups': true,
            'strip-aliased': false,
            'strip-dashed': false,
            'unknown-options-as-args': false
        }, opts.configuration);
        const defaults1 = Object.assign(Object.create(null), opts.default);
        const configObjects = opts.configObjects || [];
        const envPrefix = opts.envPrefix;
        const notFlagsOption = configuration['populate--'];
        const notFlagsArgv = notFlagsOption ? '--' : '_';
        const newAliases = Object.create(null);
        const defaulted = Object.create(null);
        // allow a i18n handler to be passed in, default to a fake one (util.format).
        const __ = opts.__ || mixin.format;
        const flags = {
            aliases: Object.create(null),
            arrays: Object.create(null),
            bools: Object.create(null),
            strings: Object.create(null),
            numbers: Object.create(null),
            counts: Object.create(null),
            normalize: Object.create(null),
            configs: Object.create(null),
            nargs: Object.create(null),
            coercions: Object.create(null),
            keys: []
        };
        const negative = /^-([0-9]+(\.[0-9]+)?|\.[0-9]+)$/;
        const negatedBoolean = new RegExp('^--' + configuration['negation-prefix'] + '(.+)');
        [].concat(opts.array || []).filter(Boolean).forEach(function(opt) {
            const key = typeof opt === 'object' ? opt.key : opt;
            // assign to flags[bools|strings|numbers]
            const assignment = Object.keys(opt).map(function(key) {
                const arrayFlagKeys = {
                    boolean: 'bools',
                    string: 'strings',
                    number: 'numbers'
                };
                return arrayFlagKeys[key];
            }).filter(Boolean).pop();
            // assign key to be coerced
            if (assignment) flags[assignment][key] = true;
            flags.arrays[key] = true;
            flags.keys.push(key);
        });
        [].concat(opts.boolean || []).filter(Boolean).forEach(function(key) {
            flags.bools[key] = true;
            flags.keys.push(key);
        });
        [].concat(opts.string || []).filter(Boolean).forEach(function(key) {
            flags.strings[key] = true;
            flags.keys.push(key);
        });
        [].concat(opts.number || []).filter(Boolean).forEach(function(key) {
            flags.numbers[key] = true;
            flags.keys.push(key);
        });
        [].concat(opts.count || []).filter(Boolean).forEach(function(key) {
            flags.counts[key] = true;
            flags.keys.push(key);
        });
        [].concat(opts.normalize || []).filter(Boolean).forEach(function(key) {
            flags.normalize[key] = true;
            flags.keys.push(key);
        });
        if (typeof opts.narg === 'object') Object.entries(opts.narg).forEach(([key, value])=>{
            if (typeof value === 'number') {
                flags.nargs[key] = value;
                flags.keys.push(key);
            }
        });
        if (typeof opts.coerce === 'object') Object.entries(opts.coerce).forEach(([key, value])=>{
            if (typeof value === 'function') {
                flags.coercions[key] = value;
                flags.keys.push(key);
            }
        });
        if (typeof opts.config !== 'undefined') {
            if (Array.isArray(opts.config) || typeof opts.config === 'string') [].concat(opts.config).filter(Boolean).forEach(function(key) {
                flags.configs[key] = true;
            });
            else if (typeof opts.config === 'object') Object.entries(opts.config).forEach(([key, value])=>{
                if (typeof value === 'boolean' || typeof value === 'function') flags.configs[key] = value;
            });
        }
        // create a lookup table that takes into account all
        // combinations of aliases: {f: ['foo'], foo: ['f']}
        extendAliases(opts.key, aliases1, opts.default, flags.arrays);
        // apply default values to all aliases.
        Object.keys(defaults1).forEach(function(key) {
            (flags.aliases[key] || []).forEach(function(alias) {
                defaults1[alias] = defaults1[key];
            });
        });
        let error = null;
        checkConfiguration();
        let notFlags = [];
        const argv1 = Object.assign(Object.create(null), {
            _: []
        });
        // TODO(bcoe): for the first pass at removing object prototype  we didn't
        // remove all prototypes from objects returned by this API, we might want
        // to gradually move towards doing so.
        const argvReturn = {
        };
        for(let i1 = 0; i1 < args1.length; i1++){
            const arg = args1[i1];
            const truncatedArg = arg.replace(/^-{3,}/, '---');
            let broken;
            let key;
            let letters;
            let m;
            let next;
            let value;
            // any unknown option (except for end-of-options, "--")
            if (arg !== '--' && isUnknownOptionAsArg(arg)) pushPositional(arg);
            else if (truncatedArg.match(/---+(=|$)/)) {
                // options without key name are invalid.
                pushPositional(arg);
                continue;
            // -- separated by =
            } else if (arg.match(/^--.+=/) || !configuration['short-option-groups'] && arg.match(/^-.+=/)) {
                // Using [\s\S] instead of . because js doesn't support the
                // 'dotall' regex modifier. See:
                // http://stackoverflow.com/a/1068308/13216
                m = arg.match(/^--?([^=]+)=([\s\S]*)$/);
                // arrays format = '--f=a b c'
                if (m !== null && Array.isArray(m) && m.length >= 3) {
                    if (checkAllAliases(m[1], flags.arrays)) i1 = eatArray(i1, m[1], args1, m[2]);
                    else if (checkAllAliases(m[1], flags.nargs) !== false) // nargs format = '--f=monkey washing cat'
                    i1 = eatNargs(i1, m[1], args1, m[2]);
                    else setArg(m[1], m[2], true);
                }
            } else if (arg.match(negatedBoolean) && configuration['boolean-negation']) {
                m = arg.match(negatedBoolean);
                if (m !== null && Array.isArray(m) && m.length >= 2) {
                    key = m[1];
                    setArg(key, checkAllAliases(key, flags.arrays) ? [
                        false
                    ] : false);
                }
            // -- separated by space.
            } else if (arg.match(/^--.+/) || !configuration['short-option-groups'] && arg.match(/^-[^-]+/)) {
                m = arg.match(/^--?(.+)/);
                if (m !== null && Array.isArray(m) && m.length >= 2) {
                    key = m[1];
                    if (checkAllAliases(key, flags.arrays)) // array format = '--foo a b c'
                    i1 = eatArray(i1, key, args1);
                    else if (checkAllAliases(key, flags.nargs) !== false) // nargs format = '--foo a b c'
                    // should be truthy even if: flags.nargs[key] === 0
                    i1 = eatNargs(i1, key, args1);
                    else {
                        next = args1[i1 + 1];
                        if (next !== undefined && (!next.match(/^-/) || next.match(negative)) && !checkAllAliases(key, flags.bools) && !checkAllAliases(key, flags.counts)) {
                            setArg(key, next);
                            i1++;
                        } else if (/^(true|false)$/.test(next)) {
                            setArg(key, next);
                            i1++;
                        } else setArg(key, defaultValue(key));
                    }
                }
            // dot-notation flag separated by '='.
            } else if (arg.match(/^-.\..+=/)) {
                m = arg.match(/^-([^=]+)=([\s\S]*)$/);
                if (m !== null && Array.isArray(m) && m.length >= 3) setArg(m[1], m[2]);
            // dot-notation flag separated by space.
            } else if (arg.match(/^-.\..+/) && !arg.match(negative)) {
                next = args1[i1 + 1];
                m = arg.match(/^-(.\..+)/);
                if (m !== null && Array.isArray(m) && m.length >= 2) {
                    key = m[1];
                    if (next !== undefined && !next.match(/^-/) && !checkAllAliases(key, flags.bools) && !checkAllAliases(key, flags.counts)) {
                        setArg(key, next);
                        i1++;
                    } else setArg(key, defaultValue(key));
                }
            } else if (arg.match(/^-[^-]+/) && !arg.match(negative)) {
                letters = arg.slice(1, -1).split('');
                broken = false;
                for(let j = 0; j < letters.length; j++){
                    next = arg.slice(j + 2);
                    if (letters[j + 1] && letters[j + 1] === '=') {
                        value = arg.slice(j + 3);
                        key = letters[j];
                        if (checkAllAliases(key, flags.arrays)) // array format = '-f=a b c'
                        i1 = eatArray(i1, key, args1, value);
                        else if (checkAllAliases(key, flags.nargs) !== false) // nargs format = '-f=monkey washing cat'
                        i1 = eatNargs(i1, key, args1, value);
                        else setArg(key, value);
                        broken = true;
                        break;
                    }
                    if (next === '-') {
                        setArg(letters[j], next);
                        continue;
                    }
                    // current letter is an alphabetic character and next value is a number
                    if (/[A-Za-z]/.test(letters[j]) && /^-?\d+(\.\d*)?(e-?\d+)?$/.test(next) && checkAllAliases(next, flags.bools) === false) {
                        setArg(letters[j], next);
                        broken = true;
                        break;
                    }
                    if (letters[j + 1] && letters[j + 1].match(/\W/)) {
                        setArg(letters[j], next);
                        broken = true;
                        break;
                    } else setArg(letters[j], defaultValue(letters[j]));
                }
                key = arg.slice(-1)[0];
                if (!broken && key !== '-') {
                    if (checkAllAliases(key, flags.arrays)) // array format = '-f a b c'
                    i1 = eatArray(i1, key, args1);
                    else if (checkAllAliases(key, flags.nargs) !== false) // nargs format = '-f a b c'
                    // should be truthy even if: flags.nargs[key] === 0
                    i1 = eatNargs(i1, key, args1);
                    else {
                        next = args1[i1 + 1];
                        if (next !== undefined && (!/^(-|--)[^-]/.test(next) || next.match(negative)) && !checkAllAliases(key, flags.bools) && !checkAllAliases(key, flags.counts)) {
                            setArg(key, next);
                            i1++;
                        } else if (/^(true|false)$/.test(next)) {
                            setArg(key, next);
                            i1++;
                        } else setArg(key, defaultValue(key));
                    }
                }
            } else if (arg.match(/^-[0-9]$/) && arg.match(negative) && checkAllAliases(arg.slice(1), flags.bools)) {
                // single-digit boolean alias, e.g: xargs -0
                key = arg.slice(1);
                setArg(key, defaultValue(key));
            } else if (arg === '--') {
                notFlags = args1.slice(i1 + 1);
                break;
            } else if (configuration['halt-at-non-option']) {
                notFlags = args1.slice(i1);
                break;
            } else pushPositional(arg);
        }
        // order of precedence:
        // 1. command line arg
        // 2. value from env var
        // 3. value from config file
        // 4. value from config objects
        // 5. configured default value
        applyEnvVars(argv1, true); // special case: check env vars that point to config file
        applyEnvVars(argv1, false);
        setConfig(argv1);
        setConfigObjects();
        applyDefaultsAndAliases(argv1, flags.aliases, defaults1, true);
        applyCoercions(argv1);
        if (configuration['set-placeholder-key']) setPlaceholderKeys(argv1);
        // for any counts either not in args or without an explicit default, set to 0
        Object.keys(flags.counts).forEach(function(key) {
            if (!hasKey(argv1, key.split('.'))) setArg(key, 0);
        });
        // '--' defaults to undefined.
        if (notFlagsOption && notFlags.length) argv1[notFlagsArgv] = [];
        notFlags.forEach(function(key) {
            argv1[notFlagsArgv].push(key);
        });
        if (configuration['camel-case-expansion'] && configuration['strip-dashed']) Object.keys(argv1).filter((key)=>key !== '--' && key.includes('-')
        ).forEach((key)=>{
            delete argv1[key];
        });
        if (configuration['strip-aliased']) [].concat(...Object.keys(aliases1).map((k)=>aliases1[k]
        )).forEach((alias)=>{
            if (configuration['camel-case-expansion'] && alias.includes('-')) delete argv1[alias.split('.').map((prop)=>_stringUtilsJs.camelCase(prop)
            ).join('.')];
            delete argv1[alias];
        });
        // Push argument into positional array, applying numeric coercion:
        function pushPositional(arg) {
            const maybeCoercedNumber = maybeCoerceNumber('_', arg);
            if (typeof maybeCoercedNumber === 'string' || typeof maybeCoercedNumber === 'number') argv1._.push(maybeCoercedNumber);
        }
        // how many arguments should we consume, based
        // on the nargs option?
        function eatNargs(i, key, args, argAfterEqualSign) {
            let ii;
            let toEat = checkAllAliases(key, flags.nargs);
            // NaN has a special meaning for the array type, indicating that one or
            // more values are expected.
            toEat = typeof toEat !== 'number' || isNaN(toEat) ? 1 : toEat;
            if (toEat === 0) {
                if (!isUndefined(argAfterEqualSign)) error = Error(__('Argument unexpected for: %s', key));
                setArg(key, defaultValue(key));
                return i;
            }
            let available = isUndefined(argAfterEqualSign) ? 0 : 1;
            if (configuration['nargs-eats-options']) {
                // classic behavior, yargs eats positional and dash arguments.
                if (args.length - (i + 1) + available < toEat) error = Error(__('Not enough arguments following: %s', key));
                available = toEat;
            } else {
                // nargs will not consume flag arguments, e.g., -abc, --foo,
                // and terminates when one is observed.
                for(ii = i + 1; ii < args.length; ii++){
                    if (!args[ii].match(/^-[^0-9]/) || args[ii].match(negative) || isUnknownOptionAsArg(args[ii])) available++;
                    else break;
                }
                if (available < toEat) error = Error(__('Not enough arguments following: %s', key));
            }
            let consumed = Math.min(available, toEat);
            if (!isUndefined(argAfterEqualSign) && consumed > 0) {
                setArg(key, argAfterEqualSign);
                consumed--;
            }
            for(ii = i + 1; ii < consumed + i + 1; ii++)setArg(key, args[ii]);
            return i + consumed;
        }
        // if an option is an array, eat all non-hyphenated arguments
        // following it... YUM!
        // e.g., --foo apple banana cat becomes ["apple", "banana", "cat"]
        function eatArray(i, key, args, argAfterEqualSign) {
            let argsToSet = [];
            let next = argAfterEqualSign || args[i + 1];
            // If both array and nargs are configured, enforce the nargs count:
            const nargsCount = checkAllAliases(key, flags.nargs);
            if (checkAllAliases(key, flags.bools) && !/^(true|false)$/.test(next)) argsToSet.push(true);
            else if (isUndefined(next) || isUndefined(argAfterEqualSign) && /^-/.test(next) && !negative.test(next) && !isUnknownOptionAsArg(next)) // for keys without value ==> argsToSet remains an empty []
            // set user default value, if available
            {
                if (defaults1[key] !== undefined) {
                    const defVal = defaults1[key];
                    argsToSet = Array.isArray(defVal) ? defVal : [
                        defVal
                    ];
                }
            } else {
                // value in --option=value is eaten as is
                if (!isUndefined(argAfterEqualSign)) argsToSet.push(processValue(key, argAfterEqualSign, true));
                for(let ii = i + 1; ii < args.length; ii++){
                    if (!configuration['greedy-arrays'] && argsToSet.length > 0 || nargsCount && typeof nargsCount === 'number' && argsToSet.length >= nargsCount) break;
                    next = args[ii];
                    if (/^-/.test(next) && !negative.test(next) && !isUnknownOptionAsArg(next)) break;
                    i = ii;
                    argsToSet.push(processValue(key, next, inputIsString));
                }
            }
            // If both array and nargs are configured, create an error if less than
            // nargs positionals were found. NaN has special meaning, indicating
            // that at least one value is required (more are okay).
            if (typeof nargsCount === 'number' && (nargsCount && argsToSet.length < nargsCount || isNaN(nargsCount) && argsToSet.length === 0)) error = Error(__('Not enough arguments following: %s', key));
            setArg(key, argsToSet);
            return i;
        }
        function setArg(key1, val, shouldStripQuotes = inputIsString) {
            if (/-/.test(key1) && configuration['camel-case-expansion']) {
                const alias = key1.split('.').map(function(prop) {
                    return _stringUtilsJs.camelCase(prop);
                }).join('.');
                addNewAlias(key1, alias);
            }
            const value1 = processValue(key1, val, shouldStripQuotes);
            const splitKey = key1.split('.');
            setKey(argv1, splitKey, value1);
            // handle populating aliases of the full key
            if (flags.aliases[key1]) flags.aliases[key1].forEach(function(x) {
                const keyProperties = x.split('.');
                setKey(argv1, keyProperties, value1);
            });
            // handle populating aliases of the first element of the dot-notation key
            if (splitKey.length > 1 && configuration['dot-notation']) (flags.aliases[splitKey[0]] || []).forEach(function(x) {
                let keyProperties = x.split('.');
                // expand alias with nested objects in key
                const a = [].concat(splitKey);
                a.shift(); // nuke the old key.
                keyProperties = keyProperties.concat(a);
                // populate alias only if is not already an alias of the full key
                // (already populated above)
                if (!(flags.aliases[key1] || []).includes(keyProperties.join('.'))) setKey(argv1, keyProperties, value1);
            });
            // Set normalize getter and setter when key is in 'normalize' but isn't an array
            if (checkAllAliases(key1, flags.normalize) && !checkAllAliases(key1, flags.arrays)) {
                const keys = [
                    key1
                ].concat(flags.aliases[key1] || []);
                keys.forEach(function(key) {
                    Object.defineProperty(argvReturn, key, {
                        enumerable: true,
                        get () {
                            return val;
                        },
                        set (value) {
                            val = typeof value === 'string' ? mixin.normalize(value) : value;
                        }
                    });
                });
            }
        }
        function addNewAlias(key, alias) {
            if (!(flags.aliases[key] && flags.aliases[key].length)) {
                flags.aliases[key] = [
                    alias
                ];
                newAliases[alias] = true;
            }
            if (!(flags.aliases[alias] && flags.aliases[alias].length)) addNewAlias(alias, key);
        }
        function processValue(key, val1, shouldStripQuotes) {
            // strings may be quoted, clean this up as we assign values.
            if (shouldStripQuotes) val1 = stripQuotes(val1);
            // handle parsing boolean arguments --foo=true --bar false.
            if (checkAllAliases(key, flags.bools) || checkAllAliases(key, flags.counts)) {
                if (typeof val1 === 'string') val1 = val1 === 'true';
            }
            let value = Array.isArray(val1) ? val1.map(function(v) {
                return maybeCoerceNumber(key, v);
            }) : maybeCoerceNumber(key, val1);
            // increment a count given as arg (either no value or value parsed as boolean)
            if (checkAllAliases(key, flags.counts) && (isUndefined(value) || typeof value === 'boolean')) value = increment();
            // Set normalized value when key is in 'normalize' and in 'arrays'
            if (checkAllAliases(key, flags.normalize) && checkAllAliases(key, flags.arrays)) {
                if (Array.isArray(val1)) value = val1.map((val)=>{
                    return mixin.normalize(val);
                });
                else value = mixin.normalize(val1);
            }
            return value;
        }
        function maybeCoerceNumber(key, value) {
            if (!configuration['parse-positional-numbers'] && key === '_') return value;
            if (!checkAllAliases(key, flags.strings) && !checkAllAliases(key, flags.bools) && !Array.isArray(value)) {
                const shouldCoerceNumber = _stringUtilsJs.looksLikeNumber(value) && configuration['parse-numbers'] && Number.isSafeInteger(Math.floor(parseFloat(`${value}`)));
                if (shouldCoerceNumber || !isUndefined(value) && checkAllAliases(key, flags.numbers)) value = Number(value);
            }
            return value;
        }
        // set args from config.json file, this should be
        // applied last so that defaults can be applied.
        function setConfig(argv) {
            const configLookup = Object.create(null);
            // expand defaults/aliases, in-case any happen to reference
            // the config.json file.
            applyDefaultsAndAliases(configLookup, flags.aliases, defaults1);
            Object.keys(flags.configs).forEach(function(configKey) {
                const configPath = argv[configKey] || configLookup[configKey];
                if (configPath) try {
                    let config = null;
                    const resolvedConfigPath = mixin.resolve(mixin.cwd(), configPath);
                    const resolveConfig = flags.configs[configKey];
                    if (typeof resolveConfig === 'function') {
                        try {
                            config = resolveConfig(resolvedConfigPath);
                        } catch (e) {
                            config = e;
                        }
                        if (config instanceof Error) {
                            error = config;
                            return;
                        }
                    } else config = mixin.require(resolvedConfigPath);
                    setConfigObject(config);
                } catch (ex) {
                    // Deno will receive a PermissionDenied error if an attempt is
                    // made to load config without the --allow-read flag:
                    if (ex.name === 'PermissionDenied') error = ex;
                    else if (argv[configKey]) error = Error(__('Invalid JSON config file: %s', configPath));
                }
            });
        }
        // set args from config object.
        // it recursively checks nested objects.
        function setConfigObject(config, prev) {
            Object.keys(config).forEach(function(key) {
                const value = config[key];
                const fullKey = prev ? prev + '.' + key : key;
                // if the value is an inner object and we have dot-notation
                // enabled, treat inner objects in config the same as
                // heavily nested dot notations (foo.bar.apple).
                if (typeof value === 'object' && value !== null && !Array.isArray(value) && configuration['dot-notation']) // if the value is an object but not an array, check nested object
                setConfigObject(value, fullKey);
                else // setting arguments via CLI takes precedence over
                // values within the config file.
                if (!hasKey(argv1, fullKey.split('.')) || checkAllAliases(fullKey, flags.arrays) && configuration['combine-arrays']) setArg(fullKey, value);
            });
        }
        // set all config objects passed in opts
        function setConfigObjects() {
            if (typeof configObjects !== 'undefined') configObjects.forEach(function(configObject) {
                setConfigObject(configObject);
            });
        }
        function applyEnvVars(argv, configOnly) {
            if (typeof envPrefix === 'undefined') return;
            const prefix = typeof envPrefix === 'string' ? envPrefix : '';
            const env = mixin.env();
            Object.keys(env).forEach(function(envVar) {
                if (prefix === '' || envVar.lastIndexOf(prefix, 0) === 0) {
                    // get array of nested keys and convert them to camel case
                    const keys = envVar.split('__').map(function(key, i) {
                        if (i === 0) key = key.substring(prefix.length);
                        return _stringUtilsJs.camelCase(key);
                    });
                    if ((configOnly && flags.configs[keys.join('.')] || !configOnly) && !hasKey(argv, keys)) setArg(keys.join('.'), env[envVar]);
                }
            });
        }
        function applyCoercions(argv) {
            let coerce;
            const applied = new Set();
            Object.keys(argv).forEach(function(key) {
                if (!applied.has(key)) {
                    coerce = checkAllAliases(key, flags.coercions);
                    if (typeof coerce === 'function') try {
                        const value = maybeCoerceNumber(key, coerce(argv[key]));
                        [].concat(flags.aliases[key] || [], key).forEach((ali)=>{
                            applied.add(ali);
                            argv[ali] = value;
                        });
                    } catch (err) {
                        error = err;
                    }
                }
            });
        }
        function setPlaceholderKeys(argv) {
            flags.keys.forEach((key)=>{
                // don't set placeholder keys for dot notation options 'foo.bar'.
                if (~key.indexOf('.')) return;
                if (typeof argv[key] === 'undefined') argv[key] = undefined;
            });
            return argv;
        }
        function applyDefaultsAndAliases(obj, aliases, defaults, canLog = false) {
            Object.keys(defaults).forEach(function(key) {
                if (!hasKey(obj, key.split('.'))) {
                    setKey(obj, key.split('.'), defaults[key]);
                    if (canLog) defaulted[key] = true;
                    (aliases[key] || []).forEach(function(x) {
                        if (hasKey(obj, x.split('.'))) return;
                        setKey(obj, x.split('.'), defaults[key]);
                    });
                }
            });
        }
        function hasKey(obj, keys) {
            let o = obj;
            if (!configuration['dot-notation']) keys = [
                keys.join('.')
            ];
            keys.slice(0, -1).forEach(function(key) {
                o = o[key] || {
                };
            });
            const key = keys[keys.length - 1];
            if (typeof o !== 'object') return false;
            else return key in o;
        }
        function setKey(obj, keys, value) {
            let o = obj;
            if (!configuration['dot-notation']) keys = [
                keys.join('.')
            ];
            keys.slice(0, -1).forEach(function(key) {
                // TODO(bcoe): in the next major version of yargs, switch to
                // Object.create(null) for dot notation:
                key = sanitizeKey(key);
                if (typeof o === 'object' && o[key] === undefined) o[key] = {
                };
                if (typeof o[key] !== 'object' || Array.isArray(o[key])) {
                    // ensure that o[key] is an array, and that the last item is an empty object.
                    if (Array.isArray(o[key])) o[key].push({
                    });
                    else o[key] = [
                        o[key],
                        {
                        }
                    ];
                    // we want to update the empty object at the end of the o[key] array, so set o to that object
                    o = o[key][o[key].length - 1];
                } else o = o[key];
            });
            // TODO(bcoe): in the next major version of yargs, switch to
            // Object.create(null) for dot notation:
            const key2 = sanitizeKey(keys[keys.length - 1]);
            const isTypeArray = checkAllAliases(keys.join('.'), flags.arrays);
            const isValueArray = Array.isArray(value);
            let duplicate = configuration['duplicate-arguments-array'];
            // nargs has higher priority than duplicate
            if (!duplicate && checkAllAliases(key2, flags.nargs)) {
                duplicate = true;
                if (!isUndefined(o[key2]) && flags.nargs[key2] === 1 || Array.isArray(o[key2]) && o[key2].length === flags.nargs[key2]) o[key2] = undefined;
            }
            if (value === increment()) o[key2] = increment(o[key2]);
            else if (Array.isArray(o[key2])) {
                if (duplicate && isTypeArray && isValueArray) o[key2] = configuration['flatten-duplicate-arrays'] ? o[key2].concat(value) : (Array.isArray(o[key2][0]) ? o[key2] : [
                    o[key2]
                ]).concat([
                    value
                ]);
                else if (!duplicate && Boolean(isTypeArray) === Boolean(isValueArray)) o[key2] = value;
                else o[key2] = o[key2].concat([
                    value
                ]);
            } else if (o[key2] === undefined && isTypeArray) o[key2] = isValueArray ? value : [
                value
            ];
            else if (duplicate && !(o[key2] === undefined || checkAllAliases(key2, flags.counts) || checkAllAliases(key2, flags.bools))) o[key2] = [
                o[key2],
                value
            ];
            else o[key2] = value;
        }
        // extend the aliases list with inferred aliases.
        function extendAliases(...args) {
            args.forEach(function(obj) {
                Object.keys(obj || {
                }).forEach(function(key) {
                    // short-circuit if we've already added a key
                    // to the aliases array, for example it might
                    // exist in both 'opts.default' and 'opts.key'.
                    if (flags.aliases[key]) return;
                    flags.aliases[key] = [].concat(aliases1[key] || []);
                    // For "--option-name", also set argv.optionName
                    flags.aliases[key].concat(key).forEach(function(x) {
                        if (/-/.test(x) && configuration['camel-case-expansion']) {
                            const c = _stringUtilsJs.camelCase(x);
                            if (c !== key && flags.aliases[key].indexOf(c) === -1) {
                                flags.aliases[key].push(c);
                                newAliases[c] = true;
                            }
                        }
                    });
                    // For "--optionName", also set argv['option-name']
                    flags.aliases[key].concat(key).forEach(function(x) {
                        if (x.length > 1 && /[A-Z]/.test(x) && configuration['camel-case-expansion']) {
                            const c = _stringUtilsJs.decamelize(x, '-');
                            if (c !== key && flags.aliases[key].indexOf(c) === -1) {
                                flags.aliases[key].push(c);
                                newAliases[c] = true;
                            }
                        }
                    });
                    flags.aliases[key].forEach(function(x) {
                        flags.aliases[x] = [
                            key
                        ].concat(flags.aliases[key].filter(function(y) {
                            return x !== y;
                        }));
                    });
                });
            });
        }
        function checkAllAliases(key3, flag) {
            const toCheck = [].concat(flags.aliases[key3] || [], key3);
            const keys = Object.keys(flag);
            const setAlias = toCheck.find((key)=>keys.includes(key)
            );
            return setAlias ? flag[setAlias] : false;
        }
        function hasAnyFlag(key) {
            const flagsKeys = Object.keys(flags);
            const toCheck = [].concat(flagsKeys.map((k)=>flags[k]
            ));
            return toCheck.some(function(flag) {
                return Array.isArray(flag) ? flag.includes(key) : flag[key];
            });
        }
        function hasFlagsMatching(arg, ...patterns) {
            const toCheck = [].concat(...patterns);
            return toCheck.some(function(pattern) {
                const match = arg.match(pattern);
                return match && hasAnyFlag(match[1]);
            });
        }
        // based on a simplified version of the short flag group parsing logic
        function hasAllShortFlags(arg) {
            // if this is a negative number, or doesn't start with a single hyphen, it's not a short flag group
            if (arg.match(negative) || !arg.match(/^-[^-]+/)) return false;
            let hasAllFlags = true;
            let next;
            const letters = arg.slice(1).split('');
            for(let j = 0; j < letters.length; j++){
                next = arg.slice(j + 2);
                if (!hasAnyFlag(letters[j])) {
                    hasAllFlags = false;
                    break;
                }
                if (letters[j + 1] && letters[j + 1] === '=' || next === '-' || /[A-Za-z]/.test(letters[j]) && /^-?\d+(\.\d*)?(e-?\d+)?$/.test(next) || letters[j + 1] && letters[j + 1].match(/\W/)) break;
            }
            return hasAllFlags;
        }
        function isUnknownOptionAsArg(arg) {
            return configuration['unknown-options-as-args'] && isUnknownOption(arg);
        }
        function isUnknownOption(arg) {
            arg = arg.replace(/^-{3,}/, '--');
            // ignore negative numbers
            if (arg.match(negative)) return false;
            // if this is a short option group and all of them are configured, it isn't unknown
            if (hasAllShortFlags(arg)) return false;
            // e.g. '--count=2'
            const flagWithEquals = /^-+([^=]+?)=[\s\S]*$/;
            // e.g. '-a' or '--arg'
            const normalFlag = /^-+([^=]+?)$/;
            // e.g. '-a-'
            const flagEndingInHyphen = /^-+([^=]+?)-$/;
            // e.g. '-abc123'
            const flagEndingInDigits = /^-+([^=]+?\d+)$/;
            // e.g. '-a/usr/local'
            const flagEndingInNonWordCharacters = /^-+([^=]+?)\W+.*$/;
            // check the different types of flag styles, including negatedBoolean, a pattern defined near the start of the parse method
            return !hasFlagsMatching(arg, flagWithEquals, negatedBoolean, normalFlag, flagEndingInHyphen, flagEndingInDigits, flagEndingInNonWordCharacters);
        }
        // make a best effort to pick a default value
        // for an option based on name and type.
        function defaultValue(key) {
            if (!checkAllAliases(key, flags.bools) && !checkAllAliases(key, flags.counts) && `${key}` in defaults1) return defaults1[key];
            else return defaultForType(guessType(key));
        }
        // return a default value, given the type of a flag.,
        function defaultForType(type) {
            const def = {
                [_yargsParserTypesJs.DefaultValuesForTypeKey.BOOLEAN]: true,
                [_yargsParserTypesJs.DefaultValuesForTypeKey.STRING]: '',
                [_yargsParserTypesJs.DefaultValuesForTypeKey.NUMBER]: undefined,
                [_yargsParserTypesJs.DefaultValuesForTypeKey.ARRAY]: []
            };
            return def[type];
        }
        // given a flag, enforce a default type.
        function guessType(key) {
            let type = _yargsParserTypesJs.DefaultValuesForTypeKey.BOOLEAN;
            if (checkAllAliases(key, flags.strings)) type = _yargsParserTypesJs.DefaultValuesForTypeKey.STRING;
            else if (checkAllAliases(key, flags.numbers)) type = _yargsParserTypesJs.DefaultValuesForTypeKey.NUMBER;
            else if (checkAllAliases(key, flags.bools)) type = _yargsParserTypesJs.DefaultValuesForTypeKey.BOOLEAN;
            else if (checkAllAliases(key, flags.arrays)) type = _yargsParserTypesJs.DefaultValuesForTypeKey.ARRAY;
            return type;
        }
        function isUndefined(num) {
            return num === undefined;
        }
        // check user configuration settings for inconsistencies
        function checkConfiguration() {
            // count keys should not be set as array/narg
            Object.keys(flags.counts).find((key)=>{
                if (checkAllAliases(key, flags.arrays)) {
                    error = Error(__('Invalid configuration: %s, opts.count excludes opts.array.', key));
                    return true;
                } else if (checkAllAliases(key, flags.nargs)) {
                    error = Error(__('Invalid configuration: %s, opts.count excludes opts.narg.', key));
                    return true;
                }
                return false;
            });
        }
        return {
            aliases: Object.assign({
            }, flags.aliases),
            argv: Object.assign(argvReturn, argv1),
            configuration: configuration,
            defaulted: Object.assign({
            }, defaulted),
            error: error,
            newAliases: Object.assign({
            }, newAliases)
        };
    }
}
// if any aliases reference each other, we should
// merge them together.
function combineAliases(aliases) {
    const aliasArrays = [];
    const combined = Object.create(null);
    let change = true;
    // turn alias lookup hash {key: ['alias1', 'alias2']} into
    // a simple array ['key', 'alias1', 'alias2']
    Object.keys(aliases).forEach(function(key) {
        aliasArrays.push([].concat(aliases[key], key));
    });
    // combine arrays until zero changes are
    // made in an iteration.
    while(change){
        change = false;
        for(let i = 0; i < aliasArrays.length; i++)for(let ii = i + 1; ii < aliasArrays.length; ii++){
            const intersect = aliasArrays[i].filter(function(v) {
                return aliasArrays[ii].indexOf(v) !== -1;
            });
            if (intersect.length) {
                aliasArrays[i] = aliasArrays[i].concat(aliasArrays[ii]);
                aliasArrays.splice(ii, 1);
                change = true;
                break;
            }
        }
    }
    // map arrays back to the hash-lookup (de-dupe while
    // we're at it).
    aliasArrays.forEach(function(aliasArray) {
        aliasArray = aliasArray.filter(function(v, i, self) {
            return self.indexOf(v) === i;
        });
        const lastAlias = aliasArray.pop();
        if (lastAlias !== undefined && typeof lastAlias === 'string') combined[lastAlias] = aliasArray;
    });
    return combined;
}
// this function should only be called when a count is given as an arg
// it is NOT called to set a default value
// thus we can start the count at 1 instead of 0
function increment(orig) {
    return orig !== undefined ? orig + 1 : 1;
}
// TODO(bcoe): in the next major version of yargs, switch to
// Object.create(null) for dot notation:
function sanitizeKey(key) {
    if (key === '__proto__') return '___proto___';
    return key;
}
function stripQuotes(val) {
    return typeof val === 'string' && (val[0] === "'" || val[0] === '"') && val[val.length - 1] === val[0] ? val.substring(1, val.length - 1) : val;
}

},{"./tokenize-arg-string.js":"9q698","./yargs-parser-types.js":"b2Ct3","./string-utils.js":"dbpyG","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9q698":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */ // take an un-split argv string and tokenize it.
parcelHelpers.export(exports, "tokenizeArgString", ()=>tokenizeArgString
);
function tokenizeArgString(argString) {
    if (Array.isArray(argString)) return argString.map((e)=>typeof e !== 'string' ? e + '' : e
    );
    argString = argString.trim();
    let i = 0;
    let prevC = null;
    let c = null;
    let opening = null;
    const args = [];
    for(let ii = 0; ii < argString.length; ii++){
        prevC = c;
        c = argString.charAt(ii);
        // split on spaces unless we're in quotes.
        if (c === ' ' && !opening) {
            if (!(prevC === ' ')) i++;
            continue;
        }
        // don't split the string if we're in matching
        // opening or closing single and double quotes.
        if (c === opening) opening = null;
        else if ((c === "'" || c === '"') && !opening) opening = c;
        if (!args[i]) args[i] = '';
        args[i] += c;
    }
    return args;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"b2Ct3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DefaultValuesForTypeKey", ()=>DefaultValuesForTypeKey1
);
var DefaultValuesForTypeKey1;
(function(DefaultValuesForTypeKey) {
    DefaultValuesForTypeKey["BOOLEAN"] = "boolean";
    DefaultValuesForTypeKey["STRING"] = "string";
    DefaultValuesForTypeKey["NUMBER"] = "number";
    DefaultValuesForTypeKey["ARRAY"] = "array";
})(DefaultValuesForTypeKey1 || (DefaultValuesForTypeKey1 = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4A2hM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hideBin", ()=>hideBin
);
parcelHelpers.export(exports, "getProcessArgvBin", ()=>getProcessArgvBin
);
var process = require("process");
function getProcessArgvBinIndex() {
    if (isBundledElectronApp()) return 0;
    return 1;
}
function isBundledElectronApp() {
    return isElectronApp() && !process.defaultApp;
}
function isElectronApp() {
    return !!process.versions.electron;
}
function hideBin(argv) {
    return argv.slice(getProcessArgvBinIndex() + 1);
}
function getProcessArgvBin() {
    return process.argv[getProcessArgvBinIndex()];
}

},{"process":"lDnB8","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gpV5X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "YError", ()=>YError
);
class YError extends Error {
    constructor(msg){
        super(msg || 'yargs error');
        this.name = 'YError';
        Error.captureStackTrace(this, YError);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9GQn6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "y18n", ()=>y18n1
);
let shim;
class Y18N {
    constructor(opts1){
        // configurable options.
        opts1 = opts1 || {
        };
        this.directory = opts1.directory || './locales';
        this.updateFiles = typeof opts1.updateFiles === 'boolean' ? opts1.updateFiles : true;
        this.locale = opts1.locale || 'en';
        this.fallbackToLanguage = typeof opts1.fallbackToLanguage === 'boolean' ? opts1.fallbackToLanguage : true;
        // internal stuff.
        this.cache = Object.create(null);
        this.writeQueue = [];
    }
    __(...args) {
        if (typeof arguments[0] !== 'string') return this._taggedLiteral(arguments[0], ...arguments);
        const str = args.shift();
        let cb = function() {
        }; // start with noop.
        if (typeof args[args.length - 1] === 'function') cb = args.pop();
        cb = cb || function() {
        }; // noop.
        if (!this.cache[this.locale]) this._readLocaleFile();
        // we've observed a new string, update the language file.
        if (!this.cache[this.locale][str] && this.updateFiles) {
            this.cache[this.locale][str] = str;
            // include the current directory and locale,
            // since these values could change before the
            // write is performed.
            this._enqueueWrite({
                directory: this.directory,
                locale: this.locale,
                cb
            });
        } else cb();
        return shim.format.apply(shim.format, [
            this.cache[this.locale][str] || str
        ].concat(args));
    }
    __n() {
        const args = Array.prototype.slice.call(arguments);
        const singular = args.shift();
        const plural = args.shift();
        const quantity = args.shift();
        let cb = function() {
        }; // start with noop.
        if (typeof args[args.length - 1] === 'function') cb = args.pop();
        if (!this.cache[this.locale]) this._readLocaleFile();
        let str = quantity === 1 ? singular : plural;
        if (this.cache[this.locale][singular]) {
            const entry = this.cache[this.locale][singular];
            str = entry[quantity === 1 ? 'one' : 'other'];
        }
        // we've observed a new string, update the language file.
        if (!this.cache[this.locale][singular] && this.updateFiles) {
            this.cache[this.locale][singular] = {
                one: singular,
                other: plural
            };
            // include the current directory and locale,
            // since these values could change before the
            // write is performed.
            this._enqueueWrite({
                directory: this.directory,
                locale: this.locale,
                cb
            });
        } else cb();
        // if a %d placeholder is provided, add quantity
        // to the arguments expanded by util.format.
        const values = [
            str
        ];
        if (~str.indexOf('%d')) values.push(quantity);
        return shim.format.apply(shim.format, values.concat(args));
    }
    setLocale(locale) {
        this.locale = locale;
    }
    getLocale() {
        return this.locale;
    }
    updateLocale(obj) {
        if (!this.cache[this.locale]) this._readLocaleFile();
        for(const key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) this.cache[this.locale][key] = obj[key];
    }
    _taggedLiteral(parts, ...args1) {
        let str = '';
        parts.forEach(function(part, i) {
            const arg = args1[i + 1];
            str += part;
            if (typeof arg !== 'undefined') str += '%s';
        });
        return this.__.apply(this, [
            str
        ].concat([].slice.call(args1, 1)));
    }
    _enqueueWrite(work) {
        this.writeQueue.push(work);
        if (this.writeQueue.length === 1) this._processWriteQueue();
    }
    _processWriteQueue() {
        const _this = this;
        const work = this.writeQueue[0];
        // destructure the enqueued work.
        const directory = work.directory;
        const locale = work.locale;
        const cb = work.cb;
        const languageFile = this._resolveLocaleFile(directory, locale);
        const serializedLocale = JSON.stringify(this.cache[locale], null, 2);
        shim.fs.writeFile(languageFile, serializedLocale, 'utf-8', function(err) {
            _this.writeQueue.shift();
            if (_this.writeQueue.length > 0) _this._processWriteQueue();
            cb(err);
        });
    }
    _readLocaleFile() {
        let localeLookup = {
        };
        const languageFile = this._resolveLocaleFile(this.directory, this.locale);
        try {
            // When using a bundler such as webpack, readFileSync may not be defined:
            if (shim.fs.readFileSync) localeLookup = JSON.parse(shim.fs.readFileSync(languageFile, 'utf-8'));
        } catch (err) {
            if (err instanceof SyntaxError) err.message = 'syntax error in ' + languageFile;
            if (err.code === 'ENOENT') localeLookup = {
            };
            else throw err;
        }
        this.cache[this.locale] = localeLookup;
    }
    _resolveLocaleFile(directory, locale1) {
        let file = shim.resolve(directory, './', locale1 + '.json');
        if (this.fallbackToLanguage && !this._fileExistsSync(file) && ~locale1.lastIndexOf('_')) {
            // attempt fallback to language only
            const languageFile = shim.resolve(directory, './', locale1.split('_')[0] + '.json');
            if (this._fileExistsSync(languageFile)) file = languageFile;
        }
        return file;
    }
    _fileExistsSync(file) {
        return shim.exists(file);
    }
}
function y18n1(opts, _shim) {
    shim = _shim;
    const y18n = new Y18N(opts);
    return {
        __: y18n.__.bind(y18n),
        __n: y18n.__n.bind(y18n),
        setLocale: y18n.setLocale.bind(y18n),
        getLocale: y18n.getLocale.bind(y18n),
        updateLocale: y18n.updateLocale.bind(y18n),
        locale: y18n.locale
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1AO3V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "YargsFactory", ()=>YargsFactory
);
parcelHelpers.export(exports, "YargsInstance", ()=>YargsInstance
);
parcelHelpers.export(exports, "isYargsInstance", ()=>isYargsInstance
);
var _commandJs = require("./command.js");
var _commonTypesJs = require("./typings/common-types.js");
var _yerrorJs = require("./yerror.js");
var _usageJs = require("./usage.js");
var _argsertJs = require("./argsert.js");
var _completionJs = require("./completion.js");
var _validationJs = require("./validation.js");
var _objFilterJs = require("./utils/obj-filter.js");
var _applyExtendsJs = require("./utils/apply-extends.js");
var _middlewareJs = require("./middleware.js");
var _isPromiseJs = require("./utils/is-promise.js");
var _maybeAsyncResultJs = require("./utils/maybe-async-result.js");
var _setBlockingJs = require("./utils/set-blocking.js");
var _setBlockingJsDefault = parcelHelpers.interopDefault(_setBlockingJs);
var __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _YargsInstance_command, _YargsInstance_cwd, _YargsInstance_context, _YargsInstance_completion, _YargsInstance_completionCommand, _YargsInstance_defaultShowHiddenOpt, _YargsInstance_exitError, _YargsInstance_detectLocale, _YargsInstance_emittedWarnings, _YargsInstance_exitProcess, _YargsInstance_frozens, _YargsInstance_globalMiddleware, _YargsInstance_groups, _YargsInstance_hasOutput, _YargsInstance_helpOpt, _YargsInstance_logger, _YargsInstance_output, _YargsInstance_options, _YargsInstance_parentRequire, _YargsInstance_parserConfig, _YargsInstance_parseFn, _YargsInstance_parseContext, _YargsInstance_pkgs, _YargsInstance_preservedGroups, _YargsInstance_processArgs, _YargsInstance_recommendCommands, _YargsInstance_shim, _YargsInstance_strict, _YargsInstance_strictCommands, _YargsInstance_strictOptions, _YargsInstance_usage, _YargsInstance_versionOpt, _YargsInstance_validation;
function YargsFactory(_shim) {
    return (processArgs = [], cwd = _shim.process.cwd(), parentRequire)=>{
        const yargs = new YargsInstance(processArgs, cwd, parentRequire, _shim);
        Object.defineProperty(yargs, 'argv', {
            get: ()=>{
                return yargs.parse();
            },
            enumerable: true
        });
        yargs.help();
        yargs.version();
        return yargs;
    };
}
const kCopyDoubleDash = Symbol('copyDoubleDash');
const kCreateLogger = Symbol('copyDoubleDash');
const kDeleteFromParserHintObject = Symbol('deleteFromParserHintObject');
const kEmitWarning = Symbol('emitWarning');
const kFreeze = Symbol('freeze');
const kGetDollarZero = Symbol('getDollarZero');
const kGetParserConfiguration = Symbol('getParserConfiguration');
const kGuessLocale = Symbol('guessLocale');
const kGuessVersion = Symbol('guessVersion');
const kParsePositionalNumbers = Symbol('parsePositionalNumbers');
const kPkgUp = Symbol('pkgUp');
const kPopulateParserHintArray = Symbol('populateParserHintArray');
const kPopulateParserHintSingleValueDictionary = Symbol('populateParserHintSingleValueDictionary');
const kPopulateParserHintArrayDictionary = Symbol('populateParserHintArrayDictionary');
const kPopulateParserHintDictionary = Symbol('populateParserHintDictionary');
const kSanitizeKey = Symbol('sanitizeKey');
const kSetKey = Symbol('setKey');
const kUnfreeze = Symbol('unfreeze');
const kValidateAsync = Symbol('validateAsync');
const kGetCommandInstance = Symbol('getCommandInstance');
const kGetContext = Symbol('getContext');
const kGetHasOutput = Symbol('getHasOutput');
const kGetLoggerInstance = Symbol('getLoggerInstance');
const kGetParseContext = Symbol('getParseContext');
const kGetUsageInstance = Symbol('getUsageInstance');
const kGetValidationInstance = Symbol('getValidationInstance');
const kHasParseCallback = Symbol('hasParseCallback');
const kPostProcess = Symbol('postProcess');
const kRebase = Symbol('rebase');
const kReset = Symbol('reset');
const kRunYargsParserAndExecuteCommands = Symbol('runYargsParserAndExecuteCommands');
const kRunValidation = Symbol('runValidation');
const kSetHasOutput = Symbol('setHasOutput');
const kTrackManuallySetKeys = Symbol('kTrackManuallySetKeys');
class YargsInstance {
    constructor(processArgs = [], cwd, parentRequire, shim){
        this.customScriptName = false;
        this.parsed = false;
        _YargsInstance_command.set(this, void 0);
        _YargsInstance_cwd.set(this, void 0);
        _YargsInstance_context.set(this, {
            commands: [],
            fullCommands: []
        });
        _YargsInstance_completion.set(this, null);
        _YargsInstance_completionCommand.set(this, null);
        _YargsInstance_defaultShowHiddenOpt.set(this, 'show-hidden');
        _YargsInstance_exitError.set(this, null);
        _YargsInstance_detectLocale.set(this, true);
        _YargsInstance_emittedWarnings.set(this, {
        });
        _YargsInstance_exitProcess.set(this, true);
        _YargsInstance_frozens.set(this, []);
        _YargsInstance_globalMiddleware.set(this, void 0);
        _YargsInstance_groups.set(this, {
        });
        _YargsInstance_hasOutput.set(this, false);
        _YargsInstance_helpOpt.set(this, null);
        _YargsInstance_logger.set(this, void 0);
        _YargsInstance_output.set(this, '');
        _YargsInstance_options.set(this, void 0);
        _YargsInstance_parentRequire.set(this, void 0);
        _YargsInstance_parserConfig.set(this, {
        });
        _YargsInstance_parseFn.set(this, null);
        _YargsInstance_parseContext.set(this, null);
        _YargsInstance_pkgs.set(this, {
        });
        _YargsInstance_preservedGroups.set(this, {
        });
        _YargsInstance_processArgs.set(this, void 0);
        _YargsInstance_recommendCommands.set(this, false);
        _YargsInstance_shim.set(this, void 0);
        _YargsInstance_strict.set(this, false);
        _YargsInstance_strictCommands.set(this, false);
        _YargsInstance_strictOptions.set(this, false);
        _YargsInstance_usage.set(this, void 0);
        _YargsInstance_versionOpt.set(this, null);
        _YargsInstance_validation.set(this, void 0);
        __classPrivateFieldSet(this, _YargsInstance_shim, shim, "f");
        __classPrivateFieldSet(this, _YargsInstance_processArgs, processArgs, "f");
        __classPrivateFieldSet(this, _YargsInstance_cwd, cwd, "f");
        __classPrivateFieldSet(this, _YargsInstance_parentRequire, parentRequire, "f");
        __classPrivateFieldSet(this, _YargsInstance_globalMiddleware, new _middlewareJs.GlobalMiddleware(this), "f");
        this.$0 = this[kGetDollarZero]();
        this[kReset]();
        __classPrivateFieldSet(this, _YargsInstance_command, __classPrivateFieldGet(this, _YargsInstance_command, "f"), "f");
        __classPrivateFieldSet(this, _YargsInstance_usage, __classPrivateFieldGet(this, _YargsInstance_usage, "f"), "f");
        __classPrivateFieldSet(this, _YargsInstance_validation, __classPrivateFieldGet(this, _YargsInstance_validation, "f"), "f");
        __classPrivateFieldSet(this, _YargsInstance_options, __classPrivateFieldGet(this, _YargsInstance_options, "f"), "f");
        __classPrivateFieldGet(this, _YargsInstance_options, "f").showHiddenOpt = __classPrivateFieldGet(this, _YargsInstance_defaultShowHiddenOpt, "f");
        __classPrivateFieldSet(this, _YargsInstance_logger, this[kCreateLogger](), "f");
    }
    addHelpOpt(opt, msg) {
        const defaultHelpOpt = 'help';
        _argsertJs.argsert('[string|boolean] [string]', [
            opt,
            msg
        ], arguments.length);
        if (__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f")) {
            this[kDeleteFromParserHintObject](__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f"));
            __classPrivateFieldSet(this, _YargsInstance_helpOpt, null, "f");
        }
        if (opt === false && msg === undefined) return this;
        __classPrivateFieldSet(this, _YargsInstance_helpOpt, typeof opt === 'string' ? opt : defaultHelpOpt, "f");
        this.boolean(__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f"));
        this.describe(__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f"), msg || __classPrivateFieldGet(this, _YargsInstance_usage, "f").deferY18nLookup('Show help'));
        return this;
    }
    help(opt1, msg1) {
        return this.addHelpOpt(opt1, msg1);
    }
    addShowHiddenOpt(opt2, msg2) {
        _argsertJs.argsert('[string|boolean] [string]', [
            opt2,
            msg2
        ], arguments.length);
        if (opt2 === false && msg2 === undefined) return this;
        const showHiddenOpt = typeof opt2 === 'string' ? opt2 : __classPrivateFieldGet(this, _YargsInstance_defaultShowHiddenOpt, "f");
        this.boolean(showHiddenOpt);
        this.describe(showHiddenOpt, msg2 || __classPrivateFieldGet(this, _YargsInstance_usage, "f").deferY18nLookup('Show hidden options'));
        __classPrivateFieldGet(this, _YargsInstance_options, "f").showHiddenOpt = showHiddenOpt;
        return this;
    }
    showHidden(opt3, msg3) {
        return this.addShowHiddenOpt(opt3, msg3);
    }
    alias(key6, value8) {
        _argsertJs.argsert('<object|string|array> [string|array]', [
            key6,
            value8
        ], arguments.length);
        this[kPopulateParserHintArrayDictionary](this.alias.bind(this), 'alias', key6, value8);
        return this;
    }
    array(keys15) {
        _argsertJs.argsert('<array|string>', [
            keys15
        ], arguments.length);
        this[kPopulateParserHintArray]('array', keys15);
        this[kTrackManuallySetKeys](keys15);
        return this;
    }
    boolean(keys1) {
        _argsertJs.argsert('<array|string>', [
            keys1
        ], arguments.length);
        this[kPopulateParserHintArray]('boolean', keys1);
        this[kTrackManuallySetKeys](keys1);
        return this;
    }
    check(f, global) {
        _argsertJs.argsert('<function> [boolean]', [
            f,
            global
        ], arguments.length);
        this.middleware((argv, _yargs)=>{
            return _maybeAsyncResultJs.maybeAsyncResult(()=>{
                return f(argv, _yargs.getOptions());
            }, (result)=>{
                if (!result) __classPrivateFieldGet(this, _YargsInstance_usage, "f").fail(__classPrivateFieldGet(this, _YargsInstance_shim, "f").y18n.__('Argument check failed: %s', f.toString()));
                else if (typeof result === 'string' || result instanceof Error) __classPrivateFieldGet(this, _YargsInstance_usage, "f").fail(result.toString(), result);
                return argv;
            }, (err)=>{
                __classPrivateFieldGet(this, _YargsInstance_usage, "f").fail(err.message ? err.message : err.toString(), err);
                return argv;
            });
        }, false, global);
        return this;
    }
    choices(key1, value1) {
        _argsertJs.argsert('<object|string|array> [string|array]', [
            key1,
            value1
        ], arguments.length);
        this[kPopulateParserHintArrayDictionary](this.choices.bind(this), 'choices', key1, value1);
        return this;
    }
    coerce(keys2, value2) {
        _argsertJs.argsert('<object|string|array> [function]', [
            keys2,
            value2
        ], arguments.length);
        if (Array.isArray(keys2)) {
            if (!value2) throw new _yerrorJs.YError('coerce callback must be provided');
            for (const key of keys2)this.coerce(key, value2);
            return this;
        } else if (typeof keys2 === 'object') {
            for (const key of Object.keys(keys2))this.coerce(key, keys2[key]);
            return this;
        }
        if (!value2) throw new _yerrorJs.YError('coerce callback must be provided');
        __classPrivateFieldGet(this, _YargsInstance_options, "f").key[keys2] = true;
        __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").addCoerceMiddleware((argv, yargs)=>{
            let aliases;
            return _maybeAsyncResultJs.maybeAsyncResult(()=>{
                aliases = yargs.getAliases();
                return value2(argv[keys2]);
            }, (result)=>{
                argv[keys2] = result;
                if (aliases[keys2]) for (const alias of aliases[keys2])argv[alias] = result;
                return argv;
            }, (err)=>{
                throw new _yerrorJs.YError(err.message);
            });
        }, keys2);
        return this;
    }
    conflicts(key1, key2) {
        _argsertJs.argsert('<string|object> [string|array]', [
            key1,
            key2
        ], arguments.length);
        __classPrivateFieldGet(this, _YargsInstance_validation, "f").conflicts(key1, key2);
        return this;
    }
    config(key3 = 'config', msg4, parseFn) {
        _argsertJs.argsert('[object|string] [string|function] [function]', [
            key3,
            msg4,
            parseFn
        ], arguments.length);
        if (typeof key3 === 'object' && !Array.isArray(key3)) {
            key3 = _applyExtendsJs.applyExtends(key3, __classPrivateFieldGet(this, _YargsInstance_cwd, "f"), this[kGetParserConfiguration]()['deep-merge-config'] || false, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
            __classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects = (__classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects || []).concat(key3);
            return this;
        }
        if (typeof msg4 === 'function') {
            parseFn = msg4;
            msg4 = undefined;
        }
        this.describe(key3, msg4 || __classPrivateFieldGet(this, _YargsInstance_usage, "f").deferY18nLookup('Path to JSON config file'));
        (Array.isArray(key3) ? key3 : [
            key3
        ]).forEach((k)=>{
            __classPrivateFieldGet(this, _YargsInstance_options, "f").config[k] = parseFn || true;
        });
        return this;
    }
    completion(cmd, desc, fn) {
        _argsertJs.argsert('[string] [string|boolean|function] [function]', [
            cmd,
            desc,
            fn
        ], arguments.length);
        if (typeof desc === 'function') {
            fn = desc;
            desc = undefined;
        }
        __classPrivateFieldSet(this, _YargsInstance_completionCommand, cmd || __classPrivateFieldGet(this, _YargsInstance_completionCommand, "f") || 'completion', "f");
        if (!desc && desc !== false) desc = 'generate completion script';
        this.command(__classPrivateFieldGet(this, _YargsInstance_completionCommand, "f"), desc);
        if (fn) __classPrivateFieldGet(this, _YargsInstance_completion, "f").registerFunction(fn);
        return this;
    }
    command(cmd1, description, builder, handler, middlewares, deprecated) {
        _argsertJs.argsert('<string|array|object> [string|boolean] [function|object] [function] [array] [boolean|string]', [
            cmd1,
            description,
            builder,
            handler,
            middlewares,
            deprecated
        ], arguments.length);
        __classPrivateFieldGet(this, _YargsInstance_command, "f").addHandler(cmd1, description, builder, handler, middlewares, deprecated);
        return this;
    }
    commands(cmd2, description1, builder1, handler1, middlewares1, deprecated1) {
        return this.command(cmd2, description1, builder1, handler1, middlewares1, deprecated1);
    }
    commandDir(dir, opts) {
        _argsertJs.argsert('<string> [object]', [
            dir,
            opts
        ], arguments.length);
        const req = __classPrivateFieldGet(this, _YargsInstance_parentRequire, "f") || __classPrivateFieldGet(this, _YargsInstance_shim, "f").require;
        __classPrivateFieldGet(this, _YargsInstance_command, "f").addDirectory(dir, req, __classPrivateFieldGet(this, _YargsInstance_shim, "f").getCallerFile(), opts);
        return this;
    }
    count(keys3) {
        _argsertJs.argsert('<array|string>', [
            keys3
        ], arguments.length);
        this[kPopulateParserHintArray]('count', keys3);
        this[kTrackManuallySetKeys](keys3);
        return this;
    }
    default(key4, value3, defaultDescription) {
        _argsertJs.argsert('<object|string|array> [*] [string]', [
            key4,
            value3,
            defaultDescription
        ], arguments.length);
        if (defaultDescription) {
            _commonTypesJs.assertSingleKey(key4, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
            __classPrivateFieldGet(this, _YargsInstance_options, "f").defaultDescription[key4] = defaultDescription;
        }
        if (typeof value3 === 'function') {
            _commonTypesJs.assertSingleKey(key4, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
            if (!__classPrivateFieldGet(this, _YargsInstance_options, "f").defaultDescription[key4]) __classPrivateFieldGet(this, _YargsInstance_options, "f").defaultDescription[key4] = __classPrivateFieldGet(this, _YargsInstance_usage, "f").functionDescription(value3);
            value3 = value3.call();
        }
        this[kPopulateParserHintSingleValueDictionary](this.default.bind(this), 'default', key4, value3);
        return this;
    }
    defaults(key5, value4, defaultDescription1) {
        return this.default(key5, value4, defaultDescription1);
    }
    demandCommand(min = 1, max, minMsg, maxMsg) {
        _argsertJs.argsert('[number] [number|string] [string|null|undefined] [string|null|undefined]', [
            min,
            max,
            minMsg,
            maxMsg
        ], arguments.length);
        if (typeof max !== 'number') {
            minMsg = max;
            max = Infinity;
        }
        this.global('_', false);
        __classPrivateFieldGet(this, _YargsInstance_options, "f").demandedCommands._ = {
            min,
            max,
            minMsg,
            maxMsg
        };
        return this;
    }
    demand(keys4, max1, msg5) {
        if (Array.isArray(max1)) {
            max1.forEach((key)=>{
                _commonTypesJs.assertNotStrictEqual(msg5, true, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
                this.demandOption(key, msg5);
            });
            max1 = Infinity;
        } else if (typeof max1 !== 'number') {
            msg5 = max1;
            max1 = Infinity;
        }
        if (typeof keys4 === 'number') {
            _commonTypesJs.assertNotStrictEqual(msg5, true, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
            this.demandCommand(keys4, max1, msg5, msg5);
        } else if (Array.isArray(keys4)) keys4.forEach((key)=>{
            _commonTypesJs.assertNotStrictEqual(msg5, true, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
            this.demandOption(key, msg5);
        });
        else {
            if (typeof msg5 === 'string') this.demandOption(keys4, msg5);
            else if (msg5 === true || typeof msg5 === 'undefined') this.demandOption(keys4);
        }
        return this;
    }
    demandOption(keys5, msg6) {
        _argsertJs.argsert('<object|string|array> [string]', [
            keys5,
            msg6
        ], arguments.length);
        this[kPopulateParserHintSingleValueDictionary](this.demandOption.bind(this), 'demandedOptions', keys5, msg6);
        return this;
    }
    deprecateOption(option, message) {
        _argsertJs.argsert('<string> [string|boolean]', [
            option,
            message
        ], arguments.length);
        __classPrivateFieldGet(this, _YargsInstance_options, "f").deprecatedOptions[option] = message;
        return this;
    }
    describe(keys6, description2) {
        _argsertJs.argsert('<object|string|array> [string]', [
            keys6,
            description2
        ], arguments.length);
        this[kSetKey](keys6, true);
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").describe(keys6, description2);
        return this;
    }
    detectLocale(detect) {
        _argsertJs.argsert('<boolean>', [
            detect
        ], arguments.length);
        __classPrivateFieldSet(this, _YargsInstance_detectLocale, detect, "f");
        return this;
    }
    env(prefix) {
        _argsertJs.argsert('[string|boolean]', [
            prefix
        ], arguments.length);
        if (prefix === false) delete __classPrivateFieldGet(this, _YargsInstance_options, "f").envPrefix;
        else __classPrivateFieldGet(this, _YargsInstance_options, "f").envPrefix = prefix || '';
        return this;
    }
    epilogue(msg7) {
        _argsertJs.argsert('<string>', [
            msg7
        ], arguments.length);
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").epilog(msg7);
        return this;
    }
    epilog(msg8) {
        return this.epilogue(msg8);
    }
    example(cmd3, description3) {
        _argsertJs.argsert('<string|array> [string]', [
            cmd3,
            description3
        ], arguments.length);
        if (Array.isArray(cmd3)) cmd3.forEach((exampleParams)=>this.example(...exampleParams)
        );
        else __classPrivateFieldGet(this, _YargsInstance_usage, "f").example(cmd3, description3);
        return this;
    }
    exit(code, err1) {
        __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
        __classPrivateFieldSet(this, _YargsInstance_exitError, err1, "f");
        if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, "f")) __classPrivateFieldGet(this, _YargsInstance_shim, "f").process.exit(code);
    }
    exitProcess(enabled = true) {
        _argsertJs.argsert('[boolean]', [
            enabled
        ], arguments.length);
        __classPrivateFieldSet(this, _YargsInstance_exitProcess, enabled, "f");
        return this;
    }
    fail(f1) {
        _argsertJs.argsert('<function|boolean>', [
            f1
        ], arguments.length);
        if (typeof f1 === 'boolean' && f1 !== false) throw new _yerrorJs.YError("Invalid first argument. Expected function or boolean 'false'");
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").failFn(f1);
        return this;
    }
    getAliases() {
        return this.parsed ? this.parsed.aliases : {
        };
    }
    async getCompletion(args4, done) {
        _argsertJs.argsert('<array> [function]', [
            args4,
            done
        ], arguments.length);
        if (!done) return new Promise((resolve, reject)=>{
            __classPrivateFieldGet(this, _YargsInstance_completion, "f").getCompletion(args4, (err, completions)=>{
                if (err) reject(err);
                else resolve(completions);
            });
        });
        else return __classPrivateFieldGet(this, _YargsInstance_completion, "f").getCompletion(args4, done);
    }
    getDemandedOptions() {
        _argsertJs.argsert([], 0);
        return __classPrivateFieldGet(this, _YargsInstance_options, "f").demandedOptions;
    }
    getDemandedCommands() {
        _argsertJs.argsert([], 0);
        return __classPrivateFieldGet(this, _YargsInstance_options, "f").demandedCommands;
    }
    getDeprecatedOptions() {
        _argsertJs.argsert([], 0);
        return __classPrivateFieldGet(this, _YargsInstance_options, "f").deprecatedOptions;
    }
    getDetectLocale() {
        return __classPrivateFieldGet(this, _YargsInstance_detectLocale, "f");
    }
    getExitProcess() {
        return __classPrivateFieldGet(this, _YargsInstance_exitProcess, "f");
    }
    getGroups() {
        return Object.assign({
        }, __classPrivateFieldGet(this, _YargsInstance_groups, "f"), __classPrivateFieldGet(this, _YargsInstance_preservedGroups, "f"));
    }
    getHelp() {
        __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
        if (!__classPrivateFieldGet(this, _YargsInstance_usage, "f").hasCachedHelpMessage()) {
            if (!this.parsed) {
                const parse = this[kRunYargsParserAndExecuteCommands](__classPrivateFieldGet(this, _YargsInstance_processArgs, "f"), undefined, undefined, 0, true);
                if (_isPromiseJs.isPromise(parse)) return parse.then(()=>{
                    return __classPrivateFieldGet(this, _YargsInstance_usage, "f").help();
                });
            }
            const builderResponse = __classPrivateFieldGet(this, _YargsInstance_command, "f").runDefaultBuilderOn(this);
            if (_isPromiseJs.isPromise(builderResponse)) return builderResponse.then(()=>{
                return __classPrivateFieldGet(this, _YargsInstance_usage, "f").help();
            });
        }
        return Promise.resolve(__classPrivateFieldGet(this, _YargsInstance_usage, "f").help());
    }
    getOptions() {
        return __classPrivateFieldGet(this, _YargsInstance_options, "f");
    }
    getStrict() {
        return __classPrivateFieldGet(this, _YargsInstance_strict, "f");
    }
    getStrictCommands() {
        return __classPrivateFieldGet(this, _YargsInstance_strictCommands, "f");
    }
    getStrictOptions() {
        return __classPrivateFieldGet(this, _YargsInstance_strictOptions, "f");
    }
    global(globals, global1) {
        _argsertJs.argsert('<string|array> [boolean]', [
            globals,
            global1
        ], arguments.length);
        globals = [].concat(globals);
        if (global1 !== false) __classPrivateFieldGet(this, _YargsInstance_options, "f").local = __classPrivateFieldGet(this, _YargsInstance_options, "f").local.filter((l)=>globals.indexOf(l) === -1
        );
        else globals.forEach((g)=>{
            if (!__classPrivateFieldGet(this, _YargsInstance_options, "f").local.includes(g)) __classPrivateFieldGet(this, _YargsInstance_options, "f").local.push(g);
        });
        return this;
    }
    group(opts1, groupName) {
        _argsertJs.argsert('<string|array> <string>', [
            opts1,
            groupName
        ], arguments.length);
        const existing = __classPrivateFieldGet(this, _YargsInstance_preservedGroups, "f")[groupName] || __classPrivateFieldGet(this, _YargsInstance_groups, "f")[groupName];
        if (__classPrivateFieldGet(this, _YargsInstance_preservedGroups, "f")[groupName]) delete __classPrivateFieldGet(this, _YargsInstance_preservedGroups, "f")[groupName];
        const seen = {
        };
        __classPrivateFieldGet(this, _YargsInstance_groups, "f")[groupName] = (existing || []).concat(opts1).filter((key)=>{
            if (seen[key]) return false;
            return seen[key] = true;
        });
        return this;
    }
    hide(key13) {
        _argsertJs.argsert('<string>', [
            key13
        ], arguments.length);
        __classPrivateFieldGet(this, _YargsInstance_options, "f").hiddenOptions.push(key13);
        return this;
    }
    implies(key7, value5) {
        _argsertJs.argsert('<string|object> [number|string|array]', [
            key7,
            value5
        ], arguments.length);
        __classPrivateFieldGet(this, _YargsInstance_validation, "f").implies(key7, value5);
        return this;
    }
    locale(locale) {
        _argsertJs.argsert('[string]', [
            locale
        ], arguments.length);
        if (!locale) {
            this[kGuessLocale]();
            return __classPrivateFieldGet(this, _YargsInstance_shim, "f").y18n.getLocale();
        }
        __classPrivateFieldSet(this, _YargsInstance_detectLocale, false, "f");
        __classPrivateFieldGet(this, _YargsInstance_shim, "f").y18n.setLocale(locale);
        return this;
    }
    middleware(callback, applyBeforeValidation, global2) {
        return __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").addMiddleware(callback, !!applyBeforeValidation, global2);
    }
    nargs(key8, value6) {
        _argsertJs.argsert('<string|object|array> [number]', [
            key8,
            value6
        ], arguments.length);
        this[kPopulateParserHintSingleValueDictionary](this.nargs.bind(this), 'narg', key8, value6);
        return this;
    }
    normalize(keys7) {
        _argsertJs.argsert('<array|string>', [
            keys7
        ], arguments.length);
        this[kPopulateParserHintArray]('normalize', keys7);
        return this;
    }
    number(keys8) {
        _argsertJs.argsert('<array|string>', [
            keys8
        ], arguments.length);
        this[kPopulateParserHintArray]('number', keys8);
        this[kTrackManuallySetKeys](keys8);
        return this;
    }
    option(key9, opt4) {
        _argsertJs.argsert('<string|object> [object]', [
            key9,
            opt4
        ], arguments.length);
        if (typeof key9 === 'object') Object.keys(key9).forEach((k)=>{
            this.options(k, key9[k]);
        });
        else {
            if (typeof opt4 !== 'object') opt4 = {
            };
            this[kTrackManuallySetKeys](key9);
            if (__classPrivateFieldGet(this, _YargsInstance_versionOpt, "f") && (key9 === 'version' || (opt4 === null || opt4 === void 0 ? void 0 : opt4.alias) === 'version')) this[kEmitWarning]([
                '"version" is a reserved word.',
                'Please do one of the following:',
                '- Disable version with `yargs.version(false)` if using "version" as an option',
                '- Use the built-in `yargs.version` method instead (if applicable)',
                '- Use a different option key',
                'https://yargs.js.org/docs/#api-reference-version', 
            ].join('\n'), undefined, 'versionWarning');
            __classPrivateFieldGet(this, _YargsInstance_options, "f").key[key9] = true;
            if (opt4.alias) this.alias(key9, opt4.alias);
            const deprecate = opt4.deprecate || opt4.deprecated;
            if (deprecate) this.deprecateOption(key9, deprecate);
            const demand = opt4.demand || opt4.required || opt4.require;
            if (demand) this.demand(key9, demand);
            if (opt4.demandOption) this.demandOption(key9, typeof opt4.demandOption === 'string' ? opt4.demandOption : undefined);
            if (opt4.conflicts) this.conflicts(key9, opt4.conflicts);
            if ('default' in opt4) this.default(key9, opt4.default);
            if (opt4.implies !== undefined) this.implies(key9, opt4.implies);
            if (opt4.nargs !== undefined) this.nargs(key9, opt4.nargs);
            if (opt4.config) this.config(key9, opt4.configParser);
            if (opt4.normalize) this.normalize(key9);
            if (opt4.choices) this.choices(key9, opt4.choices);
            if (opt4.coerce) this.coerce(key9, opt4.coerce);
            if (opt4.group) this.group(key9, opt4.group);
            if (opt4.boolean || opt4.type === 'boolean') {
                this.boolean(key9);
                if (opt4.alias) this.boolean(opt4.alias);
            }
            if (opt4.array || opt4.type === 'array') {
                this.array(key9);
                if (opt4.alias) this.array(opt4.alias);
            }
            if (opt4.number || opt4.type === 'number') {
                this.number(key9);
                if (opt4.alias) this.number(opt4.alias);
            }
            if (opt4.string || opt4.type === 'string') {
                this.string(key9);
                if (opt4.alias) this.string(opt4.alias);
            }
            if (opt4.count || opt4.type === 'count') this.count(key9);
            if (typeof opt4.global === 'boolean') this.global(key9, opt4.global);
            if (opt4.defaultDescription) __classPrivateFieldGet(this, _YargsInstance_options, "f").defaultDescription[key9] = opt4.defaultDescription;
            if (opt4.skipValidation) this.skipValidation(key9);
            const desc = opt4.describe || opt4.description || opt4.desc;
            this.describe(key9, desc);
            if (opt4.hidden) this.hide(key9);
            if (opt4.requiresArg) this.requiresArg(key9);
        }
        return this;
    }
    options(key10, opt5) {
        return this.option(key10, opt5);
    }
    parse(args1, shortCircuit, _parseFn) {
        _argsertJs.argsert('[string|array] [function|boolean|object] [function]', [
            args1,
            shortCircuit,
            _parseFn
        ], arguments.length);
        this[kFreeze]();
        if (typeof args1 === 'undefined') args1 = __classPrivateFieldGet(this, _YargsInstance_processArgs, "f");
        if (typeof shortCircuit === 'object') {
            __classPrivateFieldSet(this, _YargsInstance_parseContext, shortCircuit, "f");
            shortCircuit = _parseFn;
        }
        if (typeof shortCircuit === 'function') {
            __classPrivateFieldSet(this, _YargsInstance_parseFn, shortCircuit, "f");
            shortCircuit = false;
        }
        if (!shortCircuit) __classPrivateFieldSet(this, _YargsInstance_processArgs, args1, "f");
        if (__classPrivateFieldGet(this, _YargsInstance_parseFn, "f")) __classPrivateFieldSet(this, _YargsInstance_exitProcess, false, "f");
        const parsed = this[kRunYargsParserAndExecuteCommands](args1, !!shortCircuit);
        const tmpParsed = this.parsed;
        __classPrivateFieldGet(this, _YargsInstance_completion, "f").setParsed(this.parsed);
        if (_isPromiseJs.isPromise(parsed)) return parsed.then((argv)=>{
            if (__classPrivateFieldGet(this, _YargsInstance_parseFn, "f")) __classPrivateFieldGet(this, _YargsInstance_parseFn, "f").call(this, __classPrivateFieldGet(this, _YargsInstance_exitError, "f"), argv, __classPrivateFieldGet(this, _YargsInstance_output, "f"));
            return argv;
        }).catch((err)=>{
            if (__classPrivateFieldGet(this, _YargsInstance_parseFn, "f")) __classPrivateFieldGet(this, _YargsInstance_parseFn, "f")(err, this.parsed.argv, __classPrivateFieldGet(this, _YargsInstance_output, "f"));
            throw err;
        }).finally(()=>{
            this[kUnfreeze]();
            this.parsed = tmpParsed;
        });
        else {
            if (__classPrivateFieldGet(this, _YargsInstance_parseFn, "f")) __classPrivateFieldGet(this, _YargsInstance_parseFn, "f").call(this, __classPrivateFieldGet(this, _YargsInstance_exitError, "f"), parsed, __classPrivateFieldGet(this, _YargsInstance_output, "f"));
            this[kUnfreeze]();
            this.parsed = tmpParsed;
        }
        return parsed;
    }
    parseAsync(args2, shortCircuit1, _parseFn1) {
        const maybePromise = this.parse(args2, shortCircuit1, _parseFn1);
        return !_isPromiseJs.isPromise(maybePromise) ? Promise.resolve(maybePromise) : maybePromise;
    }
    parseSync(args3, shortCircuit2, _parseFn2) {
        const maybePromise = this.parse(args3, shortCircuit2, _parseFn2);
        if (_isPromiseJs.isPromise(maybePromise)) throw new _yerrorJs.YError('.parseSync() must not be used with asynchronous builders, handlers, or middleware');
        return maybePromise;
    }
    parserConfiguration(config) {
        _argsertJs.argsert('<object>', [
            config
        ], arguments.length);
        __classPrivateFieldSet(this, _YargsInstance_parserConfig, config, "f");
        return this;
    }
    pkgConf(key11, rootPath) {
        _argsertJs.argsert('<string> [string]', [
            key11,
            rootPath
        ], arguments.length);
        let conf = null;
        const obj = this[kPkgUp](rootPath || __classPrivateFieldGet(this, _YargsInstance_cwd, "f"));
        if (obj[key11] && typeof obj[key11] === 'object') {
            conf = _applyExtendsJs.applyExtends(obj[key11], rootPath || __classPrivateFieldGet(this, _YargsInstance_cwd, "f"), this[kGetParserConfiguration]()['deep-merge-config'] || false, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
            __classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects = (__classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects || []).concat(conf);
        }
        return this;
    }
    positional(key12, opts2) {
        _argsertJs.argsert('<string> <object>', [
            key12,
            opts2
        ], arguments.length);
        const supportedOpts = [
            'default',
            'defaultDescription',
            'implies',
            'normalize',
            'choices',
            'conflicts',
            'coerce',
            'type',
            'describe',
            'desc',
            'description',
            'alias', 
        ];
        opts2 = _objFilterJs.objFilter(opts2, (k, v)=>{
            if (k === 'type' && ![
                'string',
                'number',
                'boolean'
            ].includes(v)) return false;
            return supportedOpts.includes(k);
        });
        const fullCommand = __classPrivateFieldGet(this, _YargsInstance_context, "f").fullCommands[__classPrivateFieldGet(this, _YargsInstance_context, "f").fullCommands.length - 1];
        const parseOptions = fullCommand ? __classPrivateFieldGet(this, _YargsInstance_command, "f").cmdToParseOptions(fullCommand) : {
            array: [],
            alias: {
            },
            default: {
            },
            demand: {
            }
        };
        _commonTypesJs.objectKeys(parseOptions).forEach((pk)=>{
            const parseOption = parseOptions[pk];
            if (Array.isArray(parseOption)) {
                if (parseOption.indexOf(key12) !== -1) opts2[pk] = true;
            } else if (parseOption[key12] && !(pk in opts2)) opts2[pk] = parseOption[key12];
        });
        this.group(key12, __classPrivateFieldGet(this, _YargsInstance_usage, "f").getPositionalGroupName());
        return this.option(key12, opts2);
    }
    recommendCommands(recommend = true) {
        _argsertJs.argsert('[boolean]', [
            recommend
        ], arguments.length);
        __classPrivateFieldSet(this, _YargsInstance_recommendCommands, recommend, "f");
        return this;
    }
    required(keys9, max2, msg9) {
        return this.demand(keys9, max2, msg9);
    }
    require(keys10, max3, msg10) {
        return this.demand(keys10, max3, msg10);
    }
    requiresArg(keys11) {
        _argsertJs.argsert('<array|string|object> [number]', [
            keys11
        ], arguments.length);
        if (typeof keys11 === 'string' && __classPrivateFieldGet(this, _YargsInstance_options, "f").narg[keys11]) return this;
        else this[kPopulateParserHintSingleValueDictionary](this.requiresArg.bind(this), 'narg', keys11, NaN);
        return this;
    }
    showCompletionScript($0, cmd4) {
        _argsertJs.argsert('[string] [string]', [
            $0,
            cmd4
        ], arguments.length);
        $0 = $0 || this.$0;
        __classPrivateFieldGet(this, _YargsInstance_logger, "f").log(__classPrivateFieldGet(this, _YargsInstance_completion, "f").generateCompletionScript($0, cmd4 || __classPrivateFieldGet(this, _YargsInstance_completionCommand, "f") || 'completion'));
        return this;
    }
    showHelp(level) {
        _argsertJs.argsert('[string|function]', [
            level
        ], arguments.length);
        __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
        if (!__classPrivateFieldGet(this, _YargsInstance_usage, "f").hasCachedHelpMessage()) {
            if (!this.parsed) {
                const parse = this[kRunYargsParserAndExecuteCommands](__classPrivateFieldGet(this, _YargsInstance_processArgs, "f"), undefined, undefined, 0, true);
                if (_isPromiseJs.isPromise(parse)) {
                    parse.then(()=>{
                        __classPrivateFieldGet(this, _YargsInstance_usage, "f").showHelp(level);
                    });
                    return this;
                }
            }
            const builderResponse = __classPrivateFieldGet(this, _YargsInstance_command, "f").runDefaultBuilderOn(this);
            if (_isPromiseJs.isPromise(builderResponse)) {
                builderResponse.then(()=>{
                    __classPrivateFieldGet(this, _YargsInstance_usage, "f").showHelp(level);
                });
                return this;
            }
        }
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").showHelp(level);
        return this;
    }
    scriptName(scriptName) {
        this.customScriptName = true;
        this.$0 = scriptName;
        return this;
    }
    showHelpOnFail(enabled1, message1) {
        _argsertJs.argsert('[boolean|string] [string]', [
            enabled1,
            message1
        ], arguments.length);
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").showHelpOnFail(enabled1, message1);
        return this;
    }
    showVersion(level1) {
        _argsertJs.argsert('[string|function]', [
            level1
        ], arguments.length);
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").showVersion(level1);
        return this;
    }
    skipValidation(keys12) {
        _argsertJs.argsert('<array|string>', [
            keys12
        ], arguments.length);
        this[kPopulateParserHintArray]('skipValidation', keys12);
        return this;
    }
    strict(enabled2) {
        _argsertJs.argsert('[boolean]', [
            enabled2
        ], arguments.length);
        __classPrivateFieldSet(this, _YargsInstance_strict, enabled2 !== false, "f");
        return this;
    }
    strictCommands(enabled3) {
        _argsertJs.argsert('[boolean]', [
            enabled3
        ], arguments.length);
        __classPrivateFieldSet(this, _YargsInstance_strictCommands, enabled3 !== false, "f");
        return this;
    }
    strictOptions(enabled4) {
        _argsertJs.argsert('[boolean]', [
            enabled4
        ], arguments.length);
        __classPrivateFieldSet(this, _YargsInstance_strictOptions, enabled4 !== false, "f");
        return this;
    }
    string(keys13) {
        _argsertJs.argsert('<array|string>', [
            keys13
        ], arguments.length);
        this[kPopulateParserHintArray]('string', keys13);
        this[kTrackManuallySetKeys](keys13);
        return this;
    }
    terminalWidth() {
        _argsertJs.argsert([], 0);
        return __classPrivateFieldGet(this, _YargsInstance_shim, "f").process.stdColumns;
    }
    updateLocale(obj) {
        return this.updateStrings(obj);
    }
    updateStrings(obj1) {
        _argsertJs.argsert('<object>', [
            obj1
        ], arguments.length);
        __classPrivateFieldSet(this, _YargsInstance_detectLocale, false, "f");
        __classPrivateFieldGet(this, _YargsInstance_shim, "f").y18n.updateLocale(obj1);
        return this;
    }
    usage(msg11, description4, builder2, handler2) {
        _argsertJs.argsert('<string|null|undefined> [string|boolean] [function|object] [function]', [
            msg11,
            description4,
            builder2,
            handler2
        ], arguments.length);
        if (description4 !== undefined) {
            _commonTypesJs.assertNotStrictEqual(msg11, null, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
            if ((msg11 || '').match(/^\$0( |$)/)) return this.command(msg11, description4, builder2, handler2);
            else throw new _yerrorJs.YError('.usage() description must start with $0 if being used as alias for .command()');
        } else {
            __classPrivateFieldGet(this, _YargsInstance_usage, "f").usage(msg11);
            return this;
        }
    }
    version(opt6, msg12, ver) {
        const defaultVersionOpt = 'version';
        _argsertJs.argsert('[boolean|string] [string] [string]', [
            opt6,
            msg12,
            ver
        ], arguments.length);
        if (__classPrivateFieldGet(this, _YargsInstance_versionOpt, "f")) {
            this[kDeleteFromParserHintObject](__classPrivateFieldGet(this, _YargsInstance_versionOpt, "f"));
            __classPrivateFieldGet(this, _YargsInstance_usage, "f").version(undefined);
            __classPrivateFieldSet(this, _YargsInstance_versionOpt, null, "f");
        }
        if (arguments.length === 0) {
            ver = this[kGuessVersion]();
            opt6 = defaultVersionOpt;
        } else if (arguments.length === 1) {
            if (opt6 === false) return this;
            ver = opt6;
            opt6 = defaultVersionOpt;
        } else if (arguments.length === 2) {
            ver = msg12;
            msg12 = undefined;
        }
        __classPrivateFieldSet(this, _YargsInstance_versionOpt, typeof opt6 === 'string' ? opt6 : defaultVersionOpt, "f");
        msg12 = msg12 || __classPrivateFieldGet(this, _YargsInstance_usage, "f").deferY18nLookup('Show version number');
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").version(ver || undefined);
        this.boolean(__classPrivateFieldGet(this, _YargsInstance_versionOpt, "f"));
        this.describe(__classPrivateFieldGet(this, _YargsInstance_versionOpt, "f"), msg12);
        return this;
    }
    wrap(cols) {
        _argsertJs.argsert('<number|null|undefined>', [
            cols
        ], arguments.length);
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").wrap(cols);
        return this;
    }
    [(_YargsInstance_command = new WeakMap(), _YargsInstance_cwd = new WeakMap(), _YargsInstance_context = new WeakMap(), _YargsInstance_completion = new WeakMap(), _YargsInstance_completionCommand = new WeakMap(), _YargsInstance_defaultShowHiddenOpt = new WeakMap(), _YargsInstance_exitError = new WeakMap(), _YargsInstance_detectLocale = new WeakMap(), _YargsInstance_emittedWarnings = new WeakMap(), _YargsInstance_exitProcess = new WeakMap(), _YargsInstance_frozens = new WeakMap(), _YargsInstance_globalMiddleware = new WeakMap(), _YargsInstance_groups = new WeakMap(), _YargsInstance_hasOutput = new WeakMap(), _YargsInstance_helpOpt = new WeakMap(), _YargsInstance_logger = new WeakMap(), _YargsInstance_output = new WeakMap(), _YargsInstance_options = new WeakMap(), _YargsInstance_parentRequire = new WeakMap(), _YargsInstance_parserConfig = new WeakMap(), _YargsInstance_parseFn = new WeakMap(), _YargsInstance_parseContext = new WeakMap(), _YargsInstance_pkgs = new WeakMap(), _YargsInstance_preservedGroups = new WeakMap(), _YargsInstance_processArgs = new WeakMap(), _YargsInstance_recommendCommands = new WeakMap(), _YargsInstance_shim = new WeakMap(), _YargsInstance_strict = new WeakMap(), _YargsInstance_strictCommands = new WeakMap(), _YargsInstance_strictOptions = new WeakMap(), _YargsInstance_usage = new WeakMap(), _YargsInstance_versionOpt = new WeakMap(), _YargsInstance_validation = new WeakMap(), kCopyDoubleDash)](argv4) {
        if (!argv4._ || !argv4['--']) return argv4;
        argv4._.push.apply(argv4._, argv4['--']);
        try {
            delete argv4['--'];
        } catch (_err) {
        }
        return argv4;
    }
    [kCreateLogger]() {
        return {
            log: (...args)=>{
                if (!this[kHasParseCallback]()) console.log(...args);
                __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
                if (__classPrivateFieldGet(this, _YargsInstance_output, "f").length) __classPrivateFieldSet(this, _YargsInstance_output, __classPrivateFieldGet(this, _YargsInstance_output, "f") + '\n', "f");
                __classPrivateFieldSet(this, _YargsInstance_output, __classPrivateFieldGet(this, _YargsInstance_output, "f") + args.join(' '), "f");
            },
            error: (...args)=>{
                if (!this[kHasParseCallback]()) console.error(...args);
                __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
                if (__classPrivateFieldGet(this, _YargsInstance_output, "f").length) __classPrivateFieldSet(this, _YargsInstance_output, __classPrivateFieldGet(this, _YargsInstance_output, "f") + '\n', "f");
                __classPrivateFieldSet(this, _YargsInstance_output, __classPrivateFieldGet(this, _YargsInstance_output, "f") + args.join(' '), "f");
            }
        };
    }
    [kDeleteFromParserHintObject](optionKey) {
        _commonTypesJs.objectKeys(__classPrivateFieldGet(this, _YargsInstance_options, "f")).forEach((hintKey)=>{
            if (((key)=>key === 'configObjects'
            )(hintKey)) return;
            const hint = __classPrivateFieldGet(this, _YargsInstance_options, "f")[hintKey];
            if (Array.isArray(hint)) {
                if (hint.includes(optionKey)) hint.splice(hint.indexOf(optionKey), 1);
            } else if (typeof hint === 'object') delete hint[optionKey];
        });
        delete __classPrivateFieldGet(this, _YargsInstance_usage, "f").getDescriptions()[optionKey];
    }
    [kEmitWarning](warning, type, deduplicationId) {
        if (!__classPrivateFieldGet(this, _YargsInstance_emittedWarnings, "f")[deduplicationId]) {
            __classPrivateFieldGet(this, _YargsInstance_shim, "f").process.emitWarning(warning, type);
            __classPrivateFieldGet(this, _YargsInstance_emittedWarnings, "f")[deduplicationId] = true;
        }
    }
    [kFreeze]() {
        __classPrivateFieldGet(this, _YargsInstance_frozens, "f").push({
            options: __classPrivateFieldGet(this, _YargsInstance_options, "f"),
            configObjects: __classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects.slice(0),
            exitProcess: __classPrivateFieldGet(this, _YargsInstance_exitProcess, "f"),
            groups: __classPrivateFieldGet(this, _YargsInstance_groups, "f"),
            strict: __classPrivateFieldGet(this, _YargsInstance_strict, "f"),
            strictCommands: __classPrivateFieldGet(this, _YargsInstance_strictCommands, "f"),
            strictOptions: __classPrivateFieldGet(this, _YargsInstance_strictOptions, "f"),
            completionCommand: __classPrivateFieldGet(this, _YargsInstance_completionCommand, "f"),
            output: __classPrivateFieldGet(this, _YargsInstance_output, "f"),
            exitError: __classPrivateFieldGet(this, _YargsInstance_exitError, "f"),
            hasOutput: __classPrivateFieldGet(this, _YargsInstance_hasOutput, "f"),
            parsed: this.parsed,
            parseFn: __classPrivateFieldGet(this, _YargsInstance_parseFn, "f"),
            parseContext: __classPrivateFieldGet(this, _YargsInstance_parseContext, "f")
        });
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").freeze();
        __classPrivateFieldGet(this, _YargsInstance_validation, "f").freeze();
        __classPrivateFieldGet(this, _YargsInstance_command, "f").freeze();
        __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").freeze();
    }
    [kGetDollarZero]() {
        let $0 = '';
        let default$0;
        if (/\b(node|iojs|electron)(\.exe)?$/.test(__classPrivateFieldGet(this, _YargsInstance_shim, "f").process.argv()[0])) default$0 = __classPrivateFieldGet(this, _YargsInstance_shim, "f").process.argv().slice(1, 2);
        else default$0 = __classPrivateFieldGet(this, _YargsInstance_shim, "f").process.argv().slice(0, 1);
        $0 = default$0.map((x)=>{
            const b = this[kRebase](__classPrivateFieldGet(this, _YargsInstance_cwd, "f"), x);
            return x.match(/^(\/|([a-zA-Z]:)?\\)/) && b.length < x.length ? b : x;
        }).join(' ').trim();
        if (__classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv('_') && __classPrivateFieldGet(this, _YargsInstance_shim, "f").getProcessArgvBin() === __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv('_')) $0 = __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv('_').replace(`${__classPrivateFieldGet(this, _YargsInstance_shim, "f").path.dirname(__classPrivateFieldGet(this, _YargsInstance_shim, "f").process.execPath())}/`, '');
        return $0;
    }
    [kGetParserConfiguration]() {
        return __classPrivateFieldGet(this, _YargsInstance_parserConfig, "f");
    }
    [kGuessLocale]() {
        if (!__classPrivateFieldGet(this, _YargsInstance_detectLocale, "f")) return;
        const locale = __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv('LC_ALL') || __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv('LC_MESSAGES') || __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv('LANG') || __classPrivateFieldGet(this, _YargsInstance_shim, "f").getEnv('LANGUAGE') || 'en_US';
        this.locale(locale.replace(/[.:].*/, ''));
    }
    [kGuessVersion]() {
        const obj = this[kPkgUp]();
        return obj.version || 'unknown';
    }
    [kParsePositionalNumbers](argv1) {
        const args = argv1['--'] ? argv1['--'] : argv1._;
        for(let i = 0, arg; (arg = args[i]) !== undefined; i++)if (__classPrivateFieldGet(this, _YargsInstance_shim, "f").Parser.looksLikeNumber(arg) && Number.isSafeInteger(Math.floor(parseFloat(`${arg}`)))) args[i] = Number(arg);
        return argv1;
    }
    [kPkgUp](rootPath1) {
        const npath = rootPath1 || '*';
        if (__classPrivateFieldGet(this, _YargsInstance_pkgs, "f")[npath]) return __classPrivateFieldGet(this, _YargsInstance_pkgs, "f")[npath];
        let obj = {
        };
        try {
            let startDir = rootPath1 || __classPrivateFieldGet(this, _YargsInstance_shim, "f").mainFilename;
            if (!rootPath1 && __classPrivateFieldGet(this, _YargsInstance_shim, "f").path.extname(startDir)) startDir = __classPrivateFieldGet(this, _YargsInstance_shim, "f").path.dirname(startDir);
            const pkgJsonPath = __classPrivateFieldGet(this, _YargsInstance_shim, "f").findUp(startDir, (dir, names)=>{
                if (names.includes('package.json')) return 'package.json';
                else return undefined;
            });
            _commonTypesJs.assertNotStrictEqual(pkgJsonPath, undefined, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
            obj = JSON.parse(__classPrivateFieldGet(this, _YargsInstance_shim, "f").readFileSync(pkgJsonPath, 'utf8'));
        } catch (_noop) {
        }
        __classPrivateFieldGet(this, _YargsInstance_pkgs, "f")[npath] = obj || {
        };
        return __classPrivateFieldGet(this, _YargsInstance_pkgs, "f")[npath];
    }
    [kPopulateParserHintArray](type1, keys14) {
        keys14 = [].concat(keys14);
        keys14.forEach((key)=>{
            key = this[kSanitizeKey](key);
            __classPrivateFieldGet(this, _YargsInstance_options, "f")[type1].push(key);
        });
    }
    [kPopulateParserHintSingleValueDictionary](builder3, type2, key16, value7) {
        this[kPopulateParserHintDictionary](builder3, type2, key16, value7, (type, key, value)=>{
            __classPrivateFieldGet(this, _YargsInstance_options, "f")[type][key] = value;
        });
    }
    [kPopulateParserHintArrayDictionary](builder4, type3, key14, value9) {
        this[kPopulateParserHintDictionary](builder4, type3, key14, value9, (type, key, value)=>{
            __classPrivateFieldGet(this, _YargsInstance_options, "f")[type][key] = (__classPrivateFieldGet(this, _YargsInstance_options, "f")[type][key] || []).concat(value);
        });
    }
    [kPopulateParserHintDictionary](builder5, type4, key15, value, singleKeyHandler) {
        if (Array.isArray(key15)) key15.forEach((k)=>{
            builder5(k, value);
        });
        else if (((key)=>typeof key === 'object'
        )(key15)) for (const k1 of _commonTypesJs.objectKeys(key15))builder5(k1, key15[k1]);
        else singleKeyHandler(type4, this[kSanitizeKey](key15), value);
    }
    [kSanitizeKey](key18) {
        if (key18 === '__proto__') return '___proto___';
        return key18;
    }
    [kSetKey](key17, set) {
        this[kPopulateParserHintSingleValueDictionary](this[kSetKey].bind(this), 'key', key17, set);
        return this;
    }
    [kUnfreeze]() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const frozen = __classPrivateFieldGet(this, _YargsInstance_frozens, "f").pop();
        _commonTypesJs.assertNotStrictEqual(frozen, undefined, __classPrivateFieldGet(this, _YargsInstance_shim, "f"));
        let configObjects;
        _a = this, _b = this, _c = this, _d = this, _e = this, _f = this, _g = this, _h = this, _j = this, _k = this, _l = this, _m = this, { options: ({
            set value (_o){
                __classPrivateFieldSet(_a, _YargsInstance_options, _o, "f");
            }
        }).value , configObjects , exitProcess: ({
            set value (_o){
                __classPrivateFieldSet(_b, _YargsInstance_exitProcess, _o, "f");
            }
        }).value , groups: ({
            set value (_o){
                __classPrivateFieldSet(_c, _YargsInstance_groups, _o, "f");
            }
        }).value , output: ({
            set value (_o){
                __classPrivateFieldSet(_d, _YargsInstance_output, _o, "f");
            }
        }).value , exitError: ({
            set value (_o){
                __classPrivateFieldSet(_e, _YargsInstance_exitError, _o, "f");
            }
        }).value , hasOutput: ({
            set value (_o){
                __classPrivateFieldSet(_f, _YargsInstance_hasOutput, _o, "f");
            }
        }).value , parsed: this.parsed , strict: ({
            set value (_o){
                __classPrivateFieldSet(_g, _YargsInstance_strict, _o, "f");
            }
        }).value , strictCommands: ({
            set value (_o){
                __classPrivateFieldSet(_h, _YargsInstance_strictCommands, _o, "f");
            }
        }).value , strictOptions: ({
            set value (_o){
                __classPrivateFieldSet(_j, _YargsInstance_strictOptions, _o, "f");
            }
        }).value , completionCommand: ({
            set value (_o){
                __classPrivateFieldSet(_k, _YargsInstance_completionCommand, _o, "f");
            }
        }).value , parseFn: ({
            set value (_o){
                __classPrivateFieldSet(_l, _YargsInstance_parseFn, _o, "f");
            }
        }).value , parseContext: ({
            set value (_o){
                __classPrivateFieldSet(_m, _YargsInstance_parseContext, _o, "f");
            }
        }).value ,  } = frozen;
        __classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects = configObjects;
        __classPrivateFieldGet(this, _YargsInstance_usage, "f").unfreeze();
        __classPrivateFieldGet(this, _YargsInstance_validation, "f").unfreeze();
        __classPrivateFieldGet(this, _YargsInstance_command, "f").unfreeze();
        __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").unfreeze();
    }
    [kValidateAsync](validation, argv2) {
        return _maybeAsyncResultJs.maybeAsyncResult(argv2, (result)=>{
            validation(result);
            return result;
        });
    }
    getInternalMethods() {
        return {
            getCommandInstance: this[kGetCommandInstance].bind(this),
            getContext: this[kGetContext].bind(this),
            getHasOutput: this[kGetHasOutput].bind(this),
            getLoggerInstance: this[kGetLoggerInstance].bind(this),
            getParseContext: this[kGetParseContext].bind(this),
            getParserConfiguration: this[kGetParserConfiguration].bind(this),
            getUsageInstance: this[kGetUsageInstance].bind(this),
            getValidationInstance: this[kGetValidationInstance].bind(this),
            hasParseCallback: this[kHasParseCallback].bind(this),
            postProcess: this[kPostProcess].bind(this),
            reset: this[kReset].bind(this),
            runValidation: this[kRunValidation].bind(this),
            runYargsParserAndExecuteCommands: this[kRunYargsParserAndExecuteCommands].bind(this),
            setHasOutput: this[kSetHasOutput].bind(this)
        };
    }
    [kGetCommandInstance]() {
        return __classPrivateFieldGet(this, _YargsInstance_command, "f");
    }
    [kGetContext]() {
        return __classPrivateFieldGet(this, _YargsInstance_context, "f");
    }
    [kGetHasOutput]() {
        return __classPrivateFieldGet(this, _YargsInstance_hasOutput, "f");
    }
    [kGetLoggerInstance]() {
        return __classPrivateFieldGet(this, _YargsInstance_logger, "f");
    }
    [kGetParseContext]() {
        return __classPrivateFieldGet(this, _YargsInstance_parseContext, "f") || {
        };
    }
    [kGetUsageInstance]() {
        return __classPrivateFieldGet(this, _YargsInstance_usage, "f");
    }
    [kGetValidationInstance]() {
        return __classPrivateFieldGet(this, _YargsInstance_validation, "f");
    }
    [kHasParseCallback]() {
        return !!__classPrivateFieldGet(this, _YargsInstance_parseFn, "f");
    }
    [kPostProcess](argv3, populateDoubleDash, calledFromCommand, runGlobalMiddleware) {
        if (calledFromCommand) return argv3;
        if (_isPromiseJs.isPromise(argv3)) return argv3;
        if (!populateDoubleDash) argv3 = this[kCopyDoubleDash](argv3);
        const parsePositionalNumbers = this[kGetParserConfiguration]()['parse-positional-numbers'] || this[kGetParserConfiguration]()['parse-positional-numbers'] === undefined;
        if (parsePositionalNumbers) argv3 = this[kParsePositionalNumbers](argv3);
        if (runGlobalMiddleware) argv3 = _middlewareJs.applyMiddleware(argv3, this, __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").getMiddleware(), false);
        return argv3;
    }
    [kReset](aliases = {
    }) {
        __classPrivateFieldSet(this, _YargsInstance_options, __classPrivateFieldGet(this, _YargsInstance_options, "f") || {
        }, "f");
        const tmpOptions = {
        };
        tmpOptions.local = __classPrivateFieldGet(this, _YargsInstance_options, "f").local || [];
        tmpOptions.configObjects = __classPrivateFieldGet(this, _YargsInstance_options, "f").configObjects || [];
        const localLookup = {
        };
        tmpOptions.local.forEach((l)=>{
            localLookup[l] = true;
            (aliases[l] || []).forEach((a)=>{
                localLookup[a] = true;
            });
        });
        Object.assign(__classPrivateFieldGet(this, _YargsInstance_preservedGroups, "f"), Object.keys(__classPrivateFieldGet(this, _YargsInstance_groups, "f")).reduce((acc, groupName)=>{
            const keys = __classPrivateFieldGet(this, _YargsInstance_groups, "f")[groupName].filter((key)=>!(key in localLookup)
            );
            if (keys.length > 0) acc[groupName] = keys;
            return acc;
        }, {
        }));
        __classPrivateFieldSet(this, _YargsInstance_groups, {
        }, "f");
        const arrayOptions = [
            'array',
            'boolean',
            'string',
            'skipValidation',
            'count',
            'normalize',
            'number',
            'hiddenOptions', 
        ];
        const objectOptions = [
            'narg',
            'key',
            'alias',
            'default',
            'defaultDescription',
            'config',
            'choices',
            'demandedOptions',
            'demandedCommands',
            'deprecatedOptions', 
        ];
        arrayOptions.forEach((k)=>{
            tmpOptions[k] = (__classPrivateFieldGet(this, _YargsInstance_options, "f")[k] || []).filter((k)=>!localLookup[k]
            );
        });
        objectOptions.forEach((k)=>{
            tmpOptions[k] = _objFilterJs.objFilter(__classPrivateFieldGet(this, _YargsInstance_options, "f")[k], (k)=>!localLookup[k]
            );
        });
        tmpOptions.envPrefix = __classPrivateFieldGet(this, _YargsInstance_options, "f").envPrefix;
        __classPrivateFieldSet(this, _YargsInstance_options, tmpOptions, "f");
        __classPrivateFieldSet(this, _YargsInstance_usage, __classPrivateFieldGet(this, _YargsInstance_usage, "f") ? __classPrivateFieldGet(this, _YargsInstance_usage, "f").reset(localLookup) : _usageJs.usage(this, __classPrivateFieldGet(this, _YargsInstance_shim, "f")), "f");
        __classPrivateFieldSet(this, _YargsInstance_validation, __classPrivateFieldGet(this, _YargsInstance_validation, "f") ? __classPrivateFieldGet(this, _YargsInstance_validation, "f").reset(localLookup) : _validationJs.validation(this, __classPrivateFieldGet(this, _YargsInstance_usage, "f"), __classPrivateFieldGet(this, _YargsInstance_shim, "f")), "f");
        __classPrivateFieldSet(this, _YargsInstance_command, __classPrivateFieldGet(this, _YargsInstance_command, "f") ? __classPrivateFieldGet(this, _YargsInstance_command, "f").reset() : _commandJs.command(__classPrivateFieldGet(this, _YargsInstance_usage, "f"), __classPrivateFieldGet(this, _YargsInstance_validation, "f"), __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f"), __classPrivateFieldGet(this, _YargsInstance_shim, "f")), "f");
        if (!__classPrivateFieldGet(this, _YargsInstance_completion, "f")) __classPrivateFieldSet(this, _YargsInstance_completion, _completionJs.completion(this, __classPrivateFieldGet(this, _YargsInstance_usage, "f"), __classPrivateFieldGet(this, _YargsInstance_command, "f"), __classPrivateFieldGet(this, _YargsInstance_shim, "f")), "f");
        __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").reset();
        __classPrivateFieldSet(this, _YargsInstance_completionCommand, null, "f");
        __classPrivateFieldSet(this, _YargsInstance_output, '', "f");
        __classPrivateFieldSet(this, _YargsInstance_exitError, null, "f");
        __classPrivateFieldSet(this, _YargsInstance_hasOutput, false, "f");
        this.parsed = false;
        return this;
    }
    [kRebase](base, dir1) {
        return __classPrivateFieldGet(this, _YargsInstance_shim, "f").path.relative(base, dir1);
    }
    [kRunYargsParserAndExecuteCommands](args, shortCircuit3, calledFromCommand1, commandIndex = 0, helpOnly = false) {
        let skipValidation = !!calledFromCommand1 || helpOnly;
        args = args || __classPrivateFieldGet(this, _YargsInstance_processArgs, "f");
        __classPrivateFieldGet(this, _YargsInstance_options, "f").__ = __classPrivateFieldGet(this, _YargsInstance_shim, "f").y18n.__;
        __classPrivateFieldGet(this, _YargsInstance_options, "f").configuration = this[kGetParserConfiguration]();
        const populateDoubleDash = !!__classPrivateFieldGet(this, _YargsInstance_options, "f").configuration['populate--'];
        const config = Object.assign({
        }, __classPrivateFieldGet(this, _YargsInstance_options, "f").configuration, {
            'populate--': true
        });
        const parsed = __classPrivateFieldGet(this, _YargsInstance_shim, "f").Parser.detailed(args, Object.assign({
        }, __classPrivateFieldGet(this, _YargsInstance_options, "f"), {
            configuration: {
                'parse-positional-numbers': false,
                ...config
            }
        }));
        const argv = Object.assign(parsed.argv, __classPrivateFieldGet(this, _YargsInstance_parseContext, "f"));
        let argvPromise = undefined;
        const aliases = parsed.aliases;
        let helpOptSet = false;
        let versionOptSet = false;
        Object.keys(argv).forEach((key)=>{
            if (key === __classPrivateFieldGet(this, _YargsInstance_helpOpt, "f") && argv[key]) helpOptSet = true;
            else if (key === __classPrivateFieldGet(this, _YargsInstance_versionOpt, "f") && argv[key]) versionOptSet = true;
        });
        argv.$0 = this.$0;
        this.parsed = parsed;
        if (commandIndex === 0) __classPrivateFieldGet(this, _YargsInstance_usage, "f").clearCachedHelpMessage();
        try {
            this[kGuessLocale]();
            if (shortCircuit3) return this[kPostProcess](argv, populateDoubleDash, !!calledFromCommand1, false);
            if (__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f")) {
                const helpCmds = [
                    __classPrivateFieldGet(this, _YargsInstance_helpOpt, "f")
                ].concat(aliases[__classPrivateFieldGet(this, _YargsInstance_helpOpt, "f")] || []).filter((k)=>k.length > 1
                );
                if (helpCmds.includes('' + argv._[argv._.length - 1])) {
                    argv._.pop();
                    helpOptSet = true;
                }
            }
            const handlerKeys = __classPrivateFieldGet(this, _YargsInstance_command, "f").getCommands();
            const requestCompletions = __classPrivateFieldGet(this, _YargsInstance_completion, "f").completionKey in argv;
            const skipRecommendation = helpOptSet || requestCompletions || helpOnly;
            if (argv._.length) {
                if (handlerKeys.length) {
                    let firstUnknownCommand;
                    for(let i = commandIndex || 0, cmd; argv._[i] !== undefined; i++){
                        cmd = String(argv._[i]);
                        if (handlerKeys.includes(cmd) && cmd !== __classPrivateFieldGet(this, _YargsInstance_completionCommand, "f")) {
                            const innerArgv = __classPrivateFieldGet(this, _YargsInstance_command, "f").runCommand(cmd, this, parsed, i + 1, helpOnly, helpOptSet || versionOptSet || helpOnly);
                            return this[kPostProcess](innerArgv, populateDoubleDash, !!calledFromCommand1, false);
                        } else if (!firstUnknownCommand && cmd !== __classPrivateFieldGet(this, _YargsInstance_completionCommand, "f")) {
                            firstUnknownCommand = cmd;
                            break;
                        }
                    }
                    if (!__classPrivateFieldGet(this, _YargsInstance_command, "f").hasDefaultCommand() && __classPrivateFieldGet(this, _YargsInstance_recommendCommands, "f") && firstUnknownCommand && !skipRecommendation) __classPrivateFieldGet(this, _YargsInstance_validation, "f").recommendCommands(firstUnknownCommand, handlerKeys);
                }
                if (__classPrivateFieldGet(this, _YargsInstance_completionCommand, "f") && argv._.includes(__classPrivateFieldGet(this, _YargsInstance_completionCommand, "f")) && !requestCompletions) {
                    if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, "f")) _setBlockingJsDefault.default(true);
                    this.showCompletionScript();
                    this.exit(0);
                }
            }
            if (__classPrivateFieldGet(this, _YargsInstance_command, "f").hasDefaultCommand() && !skipRecommendation) {
                const innerArgv = __classPrivateFieldGet(this, _YargsInstance_command, "f").runCommand(null, this, parsed, 0, helpOnly, helpOptSet || versionOptSet || helpOnly);
                return this[kPostProcess](innerArgv, populateDoubleDash, !!calledFromCommand1, false);
            }
            if (requestCompletions) {
                if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, "f")) _setBlockingJsDefault.default(true);
                args = [].concat(args);
                const completionArgs = args.slice(args.indexOf(`--${__classPrivateFieldGet(this, _YargsInstance_completion, "f").completionKey}`) + 1);
                __classPrivateFieldGet(this, _YargsInstance_completion, "f").getCompletion(completionArgs, (err, completions)=>{
                    if (err) throw new _yerrorJs.YError(err.message);
                    (completions || []).forEach((completion)=>{
                        __classPrivateFieldGet(this, _YargsInstance_logger, "f").log(completion);
                    });
                    this.exit(0);
                });
                return this[kPostProcess](argv, !populateDoubleDash, !!calledFromCommand1, false);
            }
            if (!__classPrivateFieldGet(this, _YargsInstance_hasOutput, "f")) {
                if (helpOptSet) {
                    if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, "f")) _setBlockingJsDefault.default(true);
                    skipValidation = true;
                    this.showHelp('log');
                    this.exit(0);
                } else if (versionOptSet) {
                    if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, "f")) _setBlockingJsDefault.default(true);
                    skipValidation = true;
                    __classPrivateFieldGet(this, _YargsInstance_usage, "f").showVersion('log');
                    this.exit(0);
                }
            }
            if (!skipValidation && __classPrivateFieldGet(this, _YargsInstance_options, "f").skipValidation.length > 0) skipValidation = Object.keys(argv).some((key)=>__classPrivateFieldGet(this, _YargsInstance_options, "f").skipValidation.indexOf(key) >= 0 && argv[key] === true
            );
            if (!skipValidation) {
                if (parsed.error) throw new _yerrorJs.YError(parsed.error.message);
                if (!requestCompletions) {
                    const validation = this[kRunValidation](aliases, {
                    }, parsed.error);
                    if (!calledFromCommand1) argvPromise = _middlewareJs.applyMiddleware(argv, this, __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").getMiddleware(), true);
                    argvPromise = this[kValidateAsync](validation, argvPromise !== null && argvPromise !== void 0 ? argvPromise : argv);
                    if (_isPromiseJs.isPromise(argvPromise) && !calledFromCommand1) argvPromise = argvPromise.then(()=>{
                        return _middlewareJs.applyMiddleware(argv, this, __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, "f").getMiddleware(), false);
                    });
                }
            }
        } catch (err) {
            if (err instanceof _yerrorJs.YError) __classPrivateFieldGet(this, _YargsInstance_usage, "f").fail(err.message, err);
            else throw err;
        }
        return this[kPostProcess](argvPromise !== null && argvPromise !== void 0 ? argvPromise : argv, populateDoubleDash, !!calledFromCommand1, true);
    }
    [kRunValidation](aliases1, positionalMap, parseErrors, isDefaultCommand) {
        const demandedOptions = {
            ...this.getDemandedOptions()
        };
        return (argv)=>{
            if (parseErrors) throw new _yerrorJs.YError(parseErrors.message);
            __classPrivateFieldGet(this, _YargsInstance_validation, "f").nonOptionCount(argv);
            __classPrivateFieldGet(this, _YargsInstance_validation, "f").requiredArguments(argv, demandedOptions);
            let failedStrictCommands = false;
            if (__classPrivateFieldGet(this, _YargsInstance_strictCommands, "f")) failedStrictCommands = __classPrivateFieldGet(this, _YargsInstance_validation, "f").unknownCommands(argv);
            if (__classPrivateFieldGet(this, _YargsInstance_strict, "f") && !failedStrictCommands) __classPrivateFieldGet(this, _YargsInstance_validation, "f").unknownArguments(argv, aliases1, positionalMap, !!isDefaultCommand);
            else if (__classPrivateFieldGet(this, _YargsInstance_strictOptions, "f")) __classPrivateFieldGet(this, _YargsInstance_validation, "f").unknownArguments(argv, aliases1, {
            }, false, false);
            __classPrivateFieldGet(this, _YargsInstance_validation, "f").limitedChoices(argv);
            __classPrivateFieldGet(this, _YargsInstance_validation, "f").implications(argv);
            __classPrivateFieldGet(this, _YargsInstance_validation, "f").conflicting(argv);
        };
    }
    [kSetHasOutput]() {
        __classPrivateFieldSet(this, _YargsInstance_hasOutput, true, "f");
    }
    [kTrackManuallySetKeys](keys) {
        if (typeof keys === 'string') __classPrivateFieldGet(this, _YargsInstance_options, "f").key[keys] = true;
        else for (const k of keys)__classPrivateFieldGet(this, _YargsInstance_options, "f").key[k] = true;
    }
}
function isYargsInstance(y) {
    return !!y && typeof y.getInternalMethods === 'function';
}

},{"./command.js":"3L5nW","./typings/common-types.js":"aOzMb","./yerror.js":"gpV5X","./usage.js":"3UnZU","./argsert.js":"4vCSz","./completion.js":"iwxgB","./validation.js":"9xcjr","./utils/obj-filter.js":"8ulOi","./utils/apply-extends.js":"9pEhN","./middleware.js":"35bxx","./utils/is-promise.js":"hIFOk","./utils/maybe-async-result.js":"2tteA","./utils/set-blocking.js":"cwCKz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3L5nW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CommandInstance", ()=>CommandInstance
);
parcelHelpers.export(exports, "command", ()=>command
);
parcelHelpers.export(exports, "isCommandBuilderDefinition", ()=>isCommandBuilderDefinition
);
parcelHelpers.export(exports, "isCommandBuilderCallback", ()=>isCommandBuilderCallback
);
parcelHelpers.export(exports, "isCommandHandlerDefinition", ()=>isCommandHandlerDefinition
);
var _commonTypesJs = require("./typings/common-types.js");
var _isPromiseJs = require("./utils/is-promise.js");
var _middlewareJs = require("./middleware.js");
var _parseCommandJs = require("./parse-command.js");
var _yargsFactoryJs = require("./yargs-factory.js");
var _maybeAsyncResultJs = require("./utils/maybe-async-result.js");
var _whichModuleJs = require("./utils/which-module.js");
var _whichModuleJsDefault = parcelHelpers.interopDefault(_whichModuleJs);
const DEFAULT_MARKER = /(^\*)|(^\$0)/;
class CommandInstance {
    constructor(usage1, validation1, globalMiddleware1, shim1){
        this.requireCache = new Set();
        this.handlers = {
        };
        this.aliasMap = {
        };
        this.frozens = [];
        this.shim = shim1;
        this.usage = usage1;
        this.globalMiddleware = globalMiddleware1;
        this.validation = validation1;
    }
    addDirectory(dir, req, callerFile, opts) {
        opts = opts || {
        };
        if (typeof opts.recurse !== 'boolean') opts.recurse = false;
        if (!Array.isArray(opts.extensions)) opts.extensions = [
            'js'
        ];
        const parentVisit = typeof opts.visit === 'function' ? opts.visit : (o)=>o
        ;
        opts.visit = (obj, joined, filename)=>{
            const visited = parentVisit(obj, joined, filename);
            if (visited) {
                if (this.requireCache.has(joined)) return visited;
                else this.requireCache.add(joined);
                this.addHandler(visited);
            }
            return visited;
        };
        this.shim.requireDirectory({
            require: req,
            filename: callerFile
        }, dir, opts);
    }
    addHandler(cmd1, description, builder1, handler, commandMiddleware, deprecated) {
        let aliases = [];
        const middlewares = _middlewareJs.commandMiddlewareFactory(commandMiddleware);
        handler = handler || (()=>{
        });
        if (Array.isArray(cmd1)) {
            if (isCommandAndAliases(cmd1)) [cmd1, ...aliases] = cmd1;
            else for (const command of cmd1)this.addHandler(command);
        } else if (isCommandHandlerDefinition(cmd1)) {
            let command = Array.isArray(cmd1.command) || typeof cmd1.command === 'string' ? cmd1.command : this.moduleName(cmd1);
            if (cmd1.aliases) command = [].concat(command).concat(cmd1.aliases);
            this.addHandler(command, this.extractDesc(cmd1), cmd1.builder, cmd1.handler, cmd1.middlewares, cmd1.deprecated);
            return;
        } else if (isCommandBuilderDefinition(builder1)) {
            this.addHandler([
                cmd1
            ].concat(aliases), description, builder1.builder, builder1.handler, builder1.middlewares, builder1.deprecated);
            return;
        }
        if (typeof cmd1 === 'string') {
            const parsedCommand = _parseCommandJs.parseCommand(cmd1);
            aliases = aliases.map((alias)=>_parseCommandJs.parseCommand(alias).cmd
            );
            let isDefault = false;
            const parsedAliases = [
                parsedCommand.cmd
            ].concat(aliases).filter((c)=>{
                if (DEFAULT_MARKER.test(c)) {
                    isDefault = true;
                    return false;
                }
                return true;
            });
            if (parsedAliases.length === 0 && isDefault) parsedAliases.push('$0');
            if (isDefault) {
                parsedCommand.cmd = parsedAliases[0];
                aliases = parsedAliases.slice(1);
                cmd1 = cmd1.replace(DEFAULT_MARKER, parsedCommand.cmd);
            }
            aliases.forEach((alias)=>{
                this.aliasMap[alias] = parsedCommand.cmd;
            });
            if (description !== false) this.usage.command(cmd1, description, isDefault, aliases, deprecated);
            this.handlers[parsedCommand.cmd] = {
                original: cmd1,
                description,
                handler,
                builder: builder1 || {
                },
                middlewares,
                deprecated,
                demanded: parsedCommand.demanded,
                optional: parsedCommand.optional
            };
            if (isDefault) this.defaultCommand = this.handlers[parsedCommand.cmd];
        }
    }
    getCommandHandlers() {
        return this.handlers;
    }
    getCommands() {
        return Object.keys(this.handlers).concat(Object.keys(this.aliasMap));
    }
    hasDefaultCommand() {
        return !!this.defaultCommand;
    }
    runCommand(command1, yargs, parsed, commandIndex, helpOnly, helpOrVersionSet) {
        const commandHandler = this.handlers[command1] || this.handlers[this.aliasMap[command1]] || this.defaultCommand;
        const currentContext = yargs.getInternalMethods().getContext();
        const parentCommands = currentContext.commands.slice();
        const isDefaultCommand = !command1;
        if (command1) {
            currentContext.commands.push(command1);
            currentContext.fullCommands.push(commandHandler.original);
        }
        const builderResult = this.applyBuilderUpdateUsageAndParse(isDefaultCommand, commandHandler, yargs, parsed.aliases, parentCommands, commandIndex, helpOnly, helpOrVersionSet);
        return _isPromiseJs.isPromise(builderResult) ? builderResult.then((result)=>this.applyMiddlewareAndGetResult(isDefaultCommand, commandHandler, result.innerArgv, currentContext, helpOnly, result.aliases, yargs)
        ) : this.applyMiddlewareAndGetResult(isDefaultCommand, commandHandler, builderResult.innerArgv, currentContext, helpOnly, builderResult.aliases, yargs);
    }
    applyBuilderUpdateUsageAndParse(isDefaultCommand, commandHandler, yargs1, aliases2, parentCommands, commandIndex1, helpOnly1, helpOrVersionSet1) {
        const builder = commandHandler.builder;
        let innerYargs = yargs1;
        if (isCommandBuilderCallback(builder)) {
            const builderOutput = builder(yargs1.getInternalMethods().reset(aliases2), helpOrVersionSet1);
            if (_isPromiseJs.isPromise(builderOutput)) return builderOutput.then((output)=>{
                innerYargs = _yargsFactoryJs.isYargsInstance(output) ? output : yargs1;
                return this.parseAndUpdateUsage(isDefaultCommand, commandHandler, innerYargs, parentCommands, commandIndex1, helpOnly1);
            });
        } else if (isCommandBuilderOptionDefinitions(builder)) {
            innerYargs = yargs1.getInternalMethods().reset(aliases2);
            Object.keys(commandHandler.builder).forEach((key)=>{
                innerYargs.option(key, builder[key]);
            });
        }
        return this.parseAndUpdateUsage(isDefaultCommand, commandHandler, innerYargs, parentCommands, commandIndex1, helpOnly1);
    }
    parseAndUpdateUsage(isDefaultCommand1, commandHandler1, innerYargs, parentCommands1, commandIndex2, helpOnly2) {
        if (isDefaultCommand1) innerYargs.getInternalMethods().getUsageInstance().unfreeze();
        if (this.shouldUpdateUsage(innerYargs)) innerYargs.getInternalMethods().getUsageInstance().usage(this.usageFromParentCommandsCommandHandler(parentCommands1, commandHandler1), commandHandler1.description);
        const innerArgv = innerYargs.getInternalMethods().runYargsParserAndExecuteCommands(null, undefined, true, commandIndex2, helpOnly2);
        return _isPromiseJs.isPromise(innerArgv) ? innerArgv.then((argv)=>({
                aliases: innerYargs.parsed.aliases,
                innerArgv: argv
            })
        ) : {
            aliases: innerYargs.parsed.aliases,
            innerArgv: innerArgv
        };
    }
    shouldUpdateUsage(yargs2) {
        return !yargs2.getInternalMethods().getUsageInstance().getUsageDisabled() && yargs2.getInternalMethods().getUsageInstance().getUsage().length === 0;
    }
    usageFromParentCommandsCommandHandler(parentCommands2, commandHandler2) {
        const c1 = DEFAULT_MARKER.test(commandHandler2.original) ? commandHandler2.original.replace(DEFAULT_MARKER, '').trim() : commandHandler2.original;
        const pc = parentCommands2.filter((c)=>{
            return !DEFAULT_MARKER.test(c);
        });
        pc.push(c1);
        return `$0 ${pc.join(' ')}`;
    }
    applyMiddlewareAndGetResult(isDefaultCommand2, commandHandler3, innerArgv, currentContext, helpOnly3, aliases1, yargs3) {
        let positionalMap = {
        };
        if (helpOnly3) return innerArgv;
        if (!yargs3.getInternalMethods().getHasOutput()) positionalMap = this.populatePositionals(commandHandler3, innerArgv, currentContext, yargs3);
        const middlewares = this.globalMiddleware.getMiddleware().slice(0).concat(commandHandler3.middlewares);
        innerArgv = _middlewareJs.applyMiddleware(innerArgv, yargs3, middlewares, true);
        if (!yargs3.getInternalMethods().getHasOutput()) {
            const validation = yargs3.getInternalMethods().runValidation(aliases1, positionalMap, yargs3.parsed.error, isDefaultCommand2);
            innerArgv = _maybeAsyncResultJs.maybeAsyncResult(innerArgv, (result)=>{
                validation(result);
                return result;
            });
        }
        if (commandHandler3.handler && !yargs3.getInternalMethods().getHasOutput()) {
            yargs3.getInternalMethods().setHasOutput();
            const populateDoubleDash = !!yargs3.getOptions().configuration['populate--'];
            yargs3.getInternalMethods().postProcess(innerArgv, populateDoubleDash, false, false);
            innerArgv = _middlewareJs.applyMiddleware(innerArgv, yargs3, middlewares, false);
            innerArgv = _maybeAsyncResultJs.maybeAsyncResult(innerArgv, (result)=>{
                const handlerResult = commandHandler3.handler(result);
                return _isPromiseJs.isPromise(handlerResult) ? handlerResult.then(()=>result
                ) : result;
            });
            if (!isDefaultCommand2) yargs3.getInternalMethods().getUsageInstance().cacheHelpMessage();
            if (_isPromiseJs.isPromise(innerArgv) && !yargs3.getInternalMethods().hasParseCallback()) innerArgv.catch((error)=>{
                try {
                    yargs3.getInternalMethods().getUsageInstance().fail(null, error);
                } catch (_err) {
                }
            });
        }
        if (!isDefaultCommand2) {
            currentContext.commands.pop();
            currentContext.fullCommands.pop();
        }
        return innerArgv;
    }
    populatePositionals(commandHandler4, argv, context, yargs4) {
        argv._ = argv._.slice(context.commands.length);
        const demanded = commandHandler4.demanded.slice(0);
        const optional = commandHandler4.optional.slice(0);
        const positionalMap = {
        };
        this.validation.positionalCount(demanded.length, argv._.length);
        while(demanded.length){
            const demand = demanded.shift();
            this.populatePositional(demand, argv, positionalMap);
        }
        while(optional.length){
            const maybe = optional.shift();
            this.populatePositional(maybe, argv, positionalMap);
        }
        argv._ = context.commands.concat(argv._.map((a)=>'' + a
        ));
        this.postProcessPositionals(argv, positionalMap, this.cmdToParseOptions(commandHandler4.original), yargs4);
        return positionalMap;
    }
    populatePositional(positional, argv1, positionalMap) {
        const cmd = positional.cmd[0];
        if (positional.variadic) positionalMap[cmd] = argv1._.splice(0).map(String);
        else if (argv1._.length) positionalMap[cmd] = [
            String(argv1._.shift())
        ];
    }
    cmdToParseOptions(cmdString) {
        const parseOptions = {
            array: [],
            default: {
            },
            alias: {
            },
            demand: {
            }
        };
        const parsed = _parseCommandJs.parseCommand(cmdString);
        parsed.demanded.forEach((d)=>{
            const [cmd, ...aliases] = d.cmd;
            if (d.variadic) {
                parseOptions.array.push(cmd);
                parseOptions.default[cmd] = [];
            }
            parseOptions.alias[cmd] = aliases;
            parseOptions.demand[cmd] = true;
        });
        parsed.optional.forEach((o)=>{
            const [cmd, ...aliases] = o.cmd;
            if (o.variadic) {
                parseOptions.array.push(cmd);
                parseOptions.default[cmd] = [];
            }
            parseOptions.alias[cmd] = aliases;
        });
        return parseOptions;
    }
    postProcessPositionals(argv2, positionalMap1, parseOptions, yargs5) {
        const options = Object.assign({
        }, yargs5.getOptions());
        options.default = Object.assign(parseOptions.default, options.default);
        for (const key1 of Object.keys(parseOptions.alias))options.alias[key1] = (options.alias[key1] || []).concat(parseOptions.alias[key1]);
        options.array = options.array.concat(parseOptions.array);
        options.config = {
        };
        const unparsed = [];
        Object.keys(positionalMap1).forEach((key)=>{
            positionalMap1[key].map((value)=>{
                if (options.configuration['unknown-options-as-args']) options.key[key] = true;
                unparsed.push(`--${key}`);
                unparsed.push(value);
            });
        });
        if (!unparsed.length) return;
        const config = Object.assign({
        }, options.configuration, {
            'populate--': false
        });
        const parsed = this.shim.Parser.detailed(unparsed, Object.assign({
        }, options, {
            configuration: config
        }));
        if (parsed.error) yargs5.getInternalMethods().getUsageInstance().fail(parsed.error.message, parsed.error);
        else {
            const positionalKeys = Object.keys(positionalMap1);
            Object.keys(positionalMap1).forEach((key)=>{
                positionalKeys.push(...parsed.aliases[key]);
            });
            const defaults = yargs5.getOptions().default;
            Object.keys(parsed.argv).forEach((key)=>{
                if (positionalKeys.includes(key)) {
                    if (!positionalMap1[key]) positionalMap1[key] = parsed.argv[key];
                    if (!Object.prototype.hasOwnProperty.call(defaults, key) && Object.prototype.hasOwnProperty.call(argv2, key) && Object.prototype.hasOwnProperty.call(parsed.argv, key) && (Array.isArray(argv2[key]) || Array.isArray(parsed.argv[key]))) argv2[key] = [].concat(argv2[key], parsed.argv[key]);
                    else argv2[key] = parsed.argv[key];
                }
            });
        }
    }
    runDefaultBuilderOn(yargs6) {
        if (!this.defaultCommand) return;
        if (this.shouldUpdateUsage(yargs6)) {
            const commandString = DEFAULT_MARKER.test(this.defaultCommand.original) ? this.defaultCommand.original : this.defaultCommand.original.replace(/^[^[\]<>]*/, '$0 ');
            yargs6.getInternalMethods().getUsageInstance().usage(commandString, this.defaultCommand.description);
        }
        const builder = this.defaultCommand.builder;
        if (isCommandBuilderCallback(builder)) return builder(yargs6, true);
        else if (!isCommandBuilderDefinition(builder)) Object.keys(builder).forEach((key)=>{
            yargs6.option(key, builder[key]);
        });
        return undefined;
    }
    moduleName(obj) {
        const mod = _whichModuleJsDefault.default(obj);
        if (!mod) throw new Error(`No command name given for module: ${this.shim.inspect(obj)}`);
        return this.commandFromFilename(mod.filename);
    }
    commandFromFilename(filename) {
        return this.shim.path.basename(filename, this.shim.path.extname(filename));
    }
    extractDesc({ describe , description: description1 , desc  }) {
        for (const test of [
            describe,
            description1,
            desc
        ]){
            if (typeof test === 'string' || test === false) return test;
            _commonTypesJs.assertNotStrictEqual(test, true, this.shim);
        }
        return false;
    }
    freeze() {
        this.frozens.push({
            handlers: this.handlers,
            aliasMap: this.aliasMap,
            defaultCommand: this.defaultCommand
        });
    }
    unfreeze() {
        const frozen = this.frozens.pop();
        _commonTypesJs.assertNotStrictEqual(frozen, undefined, this.shim);
        ({ handlers: this.handlers , aliasMap: this.aliasMap , defaultCommand: this.defaultCommand ,  } = frozen);
    }
    reset() {
        this.handlers = {
        };
        this.aliasMap = {
        };
        this.defaultCommand = undefined;
        this.requireCache = new Set();
        return this;
    }
}
function command(usage, validation, globalMiddleware, shim) {
    return new CommandInstance(usage, validation, globalMiddleware, shim);
}
function isCommandBuilderDefinition(builder) {
    return typeof builder === 'object' && !!builder.builder && typeof builder.handler === 'function';
}
function isCommandAndAliases(cmd) {
    return cmd.every((c)=>typeof c === 'string'
    );
}
function isCommandBuilderCallback(builder) {
    return typeof builder === 'function';
}
function isCommandBuilderOptionDefinitions(builder) {
    return typeof builder === 'object';
}
function isCommandHandlerDefinition(cmd) {
    return typeof cmd === 'object' && !Array.isArray(cmd);
}

},{"./typings/common-types.js":"aOzMb","./utils/is-promise.js":"hIFOk","./middleware.js":"35bxx","./parse-command.js":"iE0Yo","./yargs-factory.js":"1AO3V","./utils/maybe-async-result.js":"2tteA","./utils/which-module.js":"gyxg3","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aOzMb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "assertNotStrictEqual", ()=>assertNotStrictEqual
);
parcelHelpers.export(exports, "assertSingleKey", ()=>assertSingleKey
);
parcelHelpers.export(exports, "objectKeys", ()=>objectKeys
);
function assertNotStrictEqual(actual, expected, shim, message) {
    shim.assert.notStrictEqual(actual, expected, message);
}
function assertSingleKey(actual, shim) {
    shim.assert.strictEqual(typeof actual, 'string');
}
function objectKeys(object) {
    return Object.keys(object);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hIFOk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPromise", ()=>isPromise
);
function isPromise(maybePromise) {
    return !!maybePromise && !!maybePromise.then && typeof maybePromise.then === 'function';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"35bxx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GlobalMiddleware", ()=>GlobalMiddleware
);
parcelHelpers.export(exports, "commandMiddlewareFactory", ()=>commandMiddlewareFactory
);
parcelHelpers.export(exports, "applyMiddleware", ()=>applyMiddleware
);
var _argsertJs = require("./argsert.js");
var _isPromiseJs = require("./utils/is-promise.js");
class GlobalMiddleware {
    constructor(yargs1){
        this.globalMiddleware = [];
        this.frozens = [];
        this.yargs = yargs1;
    }
    addMiddleware(callback, applyBeforeValidation, global = true, mutates = false) {
        _argsertJs.argsert('<array|function> [boolean] [boolean] [boolean]', [
            callback,
            applyBeforeValidation,
            global
        ], arguments.length);
        if (Array.isArray(callback)) {
            for(let i = 0; i < callback.length; i++){
                if (typeof callback[i] !== 'function') throw Error('middleware must be a function');
                const m = callback[i];
                m.applyBeforeValidation = applyBeforeValidation;
                m.global = global;
            }
            Array.prototype.push.apply(this.globalMiddleware, callback);
        } else if (typeof callback === 'function') {
            const m = callback;
            m.applyBeforeValidation = applyBeforeValidation;
            m.global = global;
            m.mutates = mutates;
            this.globalMiddleware.push(callback);
        }
        return this.yargs;
    }
    addCoerceMiddleware(callback1, option) {
        const aliases = this.yargs.getAliases();
        this.globalMiddleware = this.globalMiddleware.filter((m)=>{
            const toCheck = [
                ...aliases[option] || [],
                option
            ];
            if (!m.option) return true;
            else return !toCheck.includes(m.option);
        });
        callback1.option = option;
        return this.addMiddleware(callback1, true, true, true);
    }
    getMiddleware() {
        return this.globalMiddleware;
    }
    freeze() {
        this.frozens.push([
            ...this.globalMiddleware
        ]);
    }
    unfreeze() {
        const frozen = this.frozens.pop();
        if (frozen !== undefined) this.globalMiddleware = frozen;
    }
    reset() {
        this.globalMiddleware = this.globalMiddleware.filter((m)=>m.global
        );
    }
}
function commandMiddlewareFactory(commandMiddleware) {
    if (!commandMiddleware) return [];
    return commandMiddleware.map((middleware)=>{
        middleware.applyBeforeValidation = false;
        return middleware;
    });
}
function applyMiddleware(argv, yargs, middlewares, beforeValidation) {
    return middlewares.reduce((acc, middleware)=>{
        if (middleware.applyBeforeValidation !== beforeValidation) return acc;
        if (middleware.mutates) {
            if (middleware.applied) return acc;
            middleware.applied = true;
        }
        if (_isPromiseJs.isPromise(acc)) return acc.then((initialObj)=>Promise.all([
                initialObj,
                middleware(initialObj, yargs)
            ])
        ).then(([initialObj, middlewareObj])=>Object.assign(initialObj, middlewareObj)
        );
        else {
            const result = middleware(acc, yargs);
            return _isPromiseJs.isPromise(result) ? result.then((middlewareObj)=>Object.assign(acc, middlewareObj)
            ) : Object.assign(acc, result);
        }
    }, argv);
}

},{"./argsert.js":"4vCSz","./utils/is-promise.js":"hIFOk","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4vCSz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "argsert", ()=>argsert
);
var _yerrorJs = require("./yerror.js");
var _parseCommandJs = require("./parse-command.js");
const positionName = [
    'first',
    'second',
    'third',
    'fourth',
    'fifth',
    'sixth'
];
function argsert(arg1, arg2, arg3) {
    function parseArgs() {
        return typeof arg1 === 'object' ? [
            {
                demanded: [],
                optional: []
            },
            arg1,
            arg2
        ] : [
            _parseCommandJs.parseCommand(`cmd ${arg1}`),
            arg2,
            arg3, 
        ];
    }
    try {
        let position = 0;
        const [parsed, callerArguments, _length] = parseArgs();
        const args = [].slice.call(callerArguments);
        while(args.length && args[args.length - 1] === undefined)args.pop();
        const length = _length || args.length;
        if (length < parsed.demanded.length) throw new _yerrorJs.YError(`Not enough arguments provided. Expected ${parsed.demanded.length} but received ${args.length}.`);
        const totalCommands = parsed.demanded.length + parsed.optional.length;
        if (length > totalCommands) throw new _yerrorJs.YError(`Too many arguments provided. Expected max ${totalCommands} but received ${length}.`);
        parsed.demanded.forEach((demanded)=>{
            const arg = args.shift();
            const observedType = guessType(arg);
            const matchingTypes = demanded.cmd.filter((type)=>type === observedType || type === '*'
            );
            if (matchingTypes.length === 0) argumentTypeError(observedType, demanded.cmd, position);
            position += 1;
        });
        parsed.optional.forEach((optional)=>{
            if (args.length === 0) return;
            const arg = args.shift();
            const observedType = guessType(arg);
            const matchingTypes = optional.cmd.filter((type)=>type === observedType || type === '*'
            );
            if (matchingTypes.length === 0) argumentTypeError(observedType, optional.cmd, position);
            position += 1;
        });
    } catch (err) {
        console.warn(err.stack);
    }
}
function guessType(arg) {
    if (Array.isArray(arg)) return 'array';
    else if (arg === null) return 'null';
    return typeof arg;
}
function argumentTypeError(observedType, allowedTypes, position) {
    throw new _yerrorJs.YError(`Invalid ${positionName[position] || 'manyith'} argument. Expected ${allowedTypes.join(' or ')} but received ${observedType}.`);
}

},{"./yerror.js":"gpV5X","./parse-command.js":"iE0Yo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iE0Yo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseCommand", ()=>parseCommand
);
function parseCommand(cmd1) {
    const extraSpacesStrippedCommand = cmd1.replace(/\s{2,}/g, ' ');
    const splitCommand = extraSpacesStrippedCommand.split(/\s+(?![^[]*]|[^<]*>)/);
    const bregex = /\.*[\][<>]/g;
    const firstCommand = splitCommand.shift();
    if (!firstCommand) throw new Error(`No command found in: ${cmd1}`);
    const parsedCommand = {
        cmd: firstCommand.replace(bregex, ''),
        demanded: [],
        optional: []
    };
    splitCommand.forEach((cmd, i)=>{
        let variadic = false;
        cmd = cmd.replace(/\s/g, '');
        if (/\.+[\]>]/.test(cmd) && i === splitCommand.length - 1) variadic = true;
        if (/^\[/.test(cmd)) parsedCommand.optional.push({
            cmd: cmd.replace(bregex, '').split('|'),
            variadic
        });
        else parsedCommand.demanded.push({
            cmd: cmd.replace(bregex, '').split('|'),
            variadic
        });
    });
    return parsedCommand;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2tteA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "maybeAsyncResult", ()=>maybeAsyncResult
);
var _isPromiseJs = require("./is-promise.js");
function maybeAsyncResult(getResult, resultHandler, errorHandler = (err)=>{
    throw err;
}) {
    try {
        const result1 = isFunction(getResult) ? getResult() : getResult;
        return _isPromiseJs.isPromise(result1) ? result1.then((result)=>resultHandler(result)
        ) : resultHandler(result1);
    } catch (err) {
        return errorHandler(err);
    }
}
function isFunction(arg) {
    return typeof arg === 'function';
}

},{"./is-promise.js":"hIFOk","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gyxg3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function whichModule(exported) {
    if (typeof require === 'undefined') return null;
    for(let i = 0, files = Object.keys(undefined), mod; i < files.length; i++){
        mod = undefined[files[i]];
        if (mod.exports === exported) return mod;
    }
    return null;
}
exports.default = whichModule;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3UnZU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "usage", ()=>usage1
);
var _objFilterJs = require("./utils/obj-filter.js");
var _yerrorJs = require("./yerror.js");
var _setBlockingJs = require("./utils/set-blocking.js");
var _setBlockingJsDefault = parcelHelpers.interopDefault(_setBlockingJs);
function isBoolean(fail) {
    return typeof fail === 'boolean';
}
function usage1(yargs, shim) {
    const __ = shim.y18n.__;
    const self = {
    };
    const fails = [];
    self.failFn = function failFn(f) {
        fails.push(f);
    };
    let failMessage = null;
    let showHelpOnFail = true;
    self.showHelpOnFail = function showHelpOnFailFn(arg1 = true, arg2) {
        function parseFunctionArgs() {
            return typeof arg1 === 'string' ? [
                true,
                arg1
            ] : [
                arg1,
                arg2
            ];
        }
        const [enabled, message] = parseFunctionArgs();
        failMessage = message;
        showHelpOnFail = enabled;
        return self;
    };
    let failureOutput = false;
    self.fail = function fail(msg, err) {
        const logger = yargs.getInternalMethods().getLoggerInstance();
        if (fails.length) for(let i = fails.length - 1; i >= 0; --i){
            const fail = fails[i];
            if (isBoolean(fail)) {
                if (err) throw err;
                else if (msg) throw Error(msg);
            } else fail(msg, err, self);
        }
        else {
            if (yargs.getExitProcess()) _setBlockingJsDefault.default(true);
            if (!failureOutput) {
                failureOutput = true;
                if (showHelpOnFail) {
                    yargs.showHelp('error');
                    logger.error();
                }
                if (msg || err) logger.error(msg || err);
                if (failMessage) {
                    if (msg || err) logger.error('');
                    logger.error(failMessage);
                }
            }
            err = err || new _yerrorJs.YError(msg);
            if (yargs.getExitProcess()) return yargs.exit(1);
            else if (yargs.getInternalMethods().hasParseCallback()) return yargs.exit(1, err);
            else throw err;
        }
    };
    let usages = [];
    let usageDisabled = false;
    self.usage = (msg, description)=>{
        if (msg === null) {
            usageDisabled = true;
            usages = [];
            return self;
        }
        usageDisabled = false;
        usages.push([
            msg,
            description || ''
        ]);
        return self;
    };
    self.getUsage = ()=>{
        return usages;
    };
    self.getUsageDisabled = ()=>{
        return usageDisabled;
    };
    self.getPositionalGroupName = ()=>{
        return __('Positionals:');
    };
    let examples = [];
    self.example = (cmd, description)=>{
        examples.push([
            cmd,
            description || ''
        ]);
    };
    let commands = [];
    self.command = function command(cmd, description, isDefault, aliases, deprecated = false) {
        if (isDefault) commands = commands.map((cmdArray)=>{
            cmdArray[2] = false;
            return cmdArray;
        });
        commands.push([
            cmd,
            description || '',
            isDefault,
            aliases,
            deprecated
        ]);
    };
    self.getCommands = ()=>commands
    ;
    let descriptions = {
    };
    self.describe = function describe(keyOrKeys, desc) {
        if (Array.isArray(keyOrKeys)) keyOrKeys.forEach((k)=>{
            self.describe(k, desc);
        });
        else if (typeof keyOrKeys === 'object') Object.keys(keyOrKeys).forEach((k)=>{
            self.describe(k, keyOrKeys[k]);
        });
        else descriptions[keyOrKeys] = desc;
    };
    self.getDescriptions = ()=>descriptions
    ;
    let epilogs = [];
    self.epilog = (msg)=>{
        epilogs.push(msg);
    };
    let wrapSet = false;
    let wrap;
    self.wrap = (cols)=>{
        wrapSet = true;
        wrap = cols;
    };
    function getWrap() {
        if (!wrapSet) {
            wrap = windowWidth();
            wrapSet = true;
        }
        return wrap;
    }
    const deferY18nLookupPrefix = '__yargsString__:';
    self.deferY18nLookup = (str)=>deferY18nLookupPrefix + str
    ;
    self.help = function help() {
        if (cachedHelpMessage) return cachedHelpMessage;
        normalizeAliases();
        const base$0 = yargs.customScriptName ? yargs.$0 : shim.path.basename(yargs.$0);
        const demandedOptions = yargs.getDemandedOptions();
        const demandedCommands = yargs.getDemandedCommands();
        const deprecatedOptions = yargs.getDeprecatedOptions();
        const groups = yargs.getGroups();
        const options = yargs.getOptions();
        let keys = [];
        keys = keys.concat(Object.keys(descriptions));
        keys = keys.concat(Object.keys(demandedOptions));
        keys = keys.concat(Object.keys(demandedCommands));
        keys = keys.concat(Object.keys(options.default));
        keys = keys.filter(filterHiddenOptions);
        keys = Object.keys(keys.reduce((acc, key)=>{
            if (key !== '_') acc[key] = true;
            return acc;
        }, {
        }));
        const theWrap = getWrap();
        const ui = shim.cliui({
            width: theWrap,
            wrap: !!theWrap
        });
        if (!usageDisabled) {
            if (usages.length) {
                usages.forEach((usage)=>{
                    ui.div({
                        text: `${usage[0].replace(/\$0/g, base$0)}`
                    });
                    if (usage[1]) ui.div({
                        text: `${usage[1]}`,
                        padding: [
                            1,
                            0,
                            0,
                            0
                        ]
                    });
                });
                ui.div();
            } else if (commands.length) {
                let u = null;
                if (demandedCommands._) u = `${base$0} <${__('command')}>\n`;
                else u = `${base$0} [${__('command')}]\n`;
                ui.div(`${u}`);
            }
        }
        if (commands.length > 1 || commands.length === 1 && !commands[0][2]) {
            ui.div(__('Commands:'));
            const context = yargs.getInternalMethods().getContext();
            const parentCommands = context.commands.length ? `${context.commands.join(' ')} ` : '';
            if (yargs.getInternalMethods().getParserConfiguration()['sort-commands'] === true) commands = commands.sort((a, b)=>a[0].localeCompare(b[0])
            );
            const prefix = base$0 ? `${base$0} ` : '';
            commands.forEach((command)=>{
                const commandString = `${prefix}${parentCommands}${command[0].replace(/^\$0 ?/, '')}`;
                ui.span({
                    text: commandString,
                    padding: [
                        0,
                        2,
                        0,
                        2
                    ],
                    width: maxWidth1(commands, theWrap, `${base$0}${parentCommands}`) + 4
                }, {
                    text: command[1]
                });
                const hints = [];
                if (command[2]) hints.push(`[${__('default')}]`);
                if (command[3] && command[3].length) hints.push(`[${__('aliases:')} ${command[3].join(', ')}]`);
                if (command[4]) {
                    if (typeof command[4] === 'string') hints.push(`[${__('deprecated: %s', command[4])}]`);
                    else hints.push(`[${__('deprecated')}]`);
                }
                if (hints.length) ui.div({
                    text: hints.join(' '),
                    padding: [
                        0,
                        0,
                        0,
                        2
                    ],
                    align: 'right'
                });
                else ui.div();
            });
            ui.div();
        }
        const aliasKeys = (Object.keys(options.alias) || []).concat(Object.keys(yargs.parsed.newAliases) || []);
        keys = keys.filter((key)=>!yargs.parsed.newAliases[key] && aliasKeys.every((alias)=>(options.alias[alias] || []).indexOf(key) === -1
            )
        );
        const defaultGroup = __('Options:');
        if (!groups[defaultGroup]) groups[defaultGroup] = [];
        addUngroupedKeys(keys, options.alias, groups, defaultGroup);
        const isLongSwitch = (sw)=>/^--/.test(getText(sw))
        ;
        const displayedGroups = Object.keys(groups).filter((groupName)=>groups[groupName].length > 0
        ).map((groupName)=>{
            const normalizedKeys = groups[groupName].filter(filterHiddenOptions).map((key)=>{
                if (aliasKeys.includes(key)) return key;
                for(let i = 0, aliasKey; (aliasKey = aliasKeys[i]) !== undefined; i++){
                    if ((options.alias[aliasKey] || []).includes(key)) return aliasKey;
                }
                return key;
            });
            return {
                groupName,
                normalizedKeys
            };
        }).filter(({ normalizedKeys  })=>normalizedKeys.length > 0
        ).map(({ groupName , normalizedKeys  })=>{
            const switches = normalizedKeys.reduce((acc, key)=>{
                acc[key] = [
                    key
                ].concat(options.alias[key] || []).map((sw)=>{
                    if (groupName === self.getPositionalGroupName()) return sw;
                    else return (/^[0-9]$/.test(sw) ? options.boolean.includes(key) ? '-' : '--' : sw.length > 1 ? '--' : '-') + sw;
                }).sort((sw1, sw2)=>isLongSwitch(sw1) === isLongSwitch(sw2) ? 0 : isLongSwitch(sw1) ? 1 : -1
                ).join(', ');
                return acc;
            }, {
            });
            return {
                groupName,
                normalizedKeys,
                switches
            };
        });
        const shortSwitchesUsed = displayedGroups.filter(({ groupName  })=>groupName !== self.getPositionalGroupName()
        ).some(({ normalizedKeys , switches  })=>!normalizedKeys.every((key)=>isLongSwitch(switches[key])
            )
        );
        if (shortSwitchesUsed) displayedGroups.filter(({ groupName  })=>groupName !== self.getPositionalGroupName()
        ).forEach(({ normalizedKeys , switches  })=>{
            normalizedKeys.forEach((key)=>{
                if (isLongSwitch(switches[key])) switches[key] = addIndentation(switches[key], 4);
            });
        });
        displayedGroups.forEach(({ groupName , normalizedKeys , switches  })=>{
            ui.div(groupName);
            normalizedKeys.forEach((key)=>{
                const kswitch = switches[key];
                let desc = descriptions[key] || '';
                let type = null;
                if (desc.includes(deferY18nLookupPrefix)) desc = __(desc.substring(deferY18nLookupPrefix.length));
                if (options.boolean.includes(key)) type = `[${__('boolean')}]`;
                if (options.count.includes(key)) type = `[${__('count')}]`;
                if (options.string.includes(key)) type = `[${__('string')}]`;
                if (options.normalize.includes(key)) type = `[${__('string')}]`;
                if (options.array.includes(key)) type = `[${__('array')}]`;
                if (options.number.includes(key)) type = `[${__('number')}]`;
                const deprecatedExtra = (deprecated)=>typeof deprecated === 'string' ? `[${__('deprecated: %s', deprecated)}]` : `[${__('deprecated')}]`
                ;
                const extra = [
                    key in deprecatedOptions ? deprecatedExtra(deprecatedOptions[key]) : null,
                    type,
                    key in demandedOptions ? `[${__('required')}]` : null,
                    options.choices && options.choices[key] ? `[${__('choices:')} ${self.stringifiedValues(options.choices[key])}]` : null,
                    defaultString(options.default[key], options.defaultDescription[key]), 
                ].filter(Boolean).join(' ');
                ui.span({
                    text: getText(kswitch),
                    padding: [
                        0,
                        2,
                        0,
                        2 + getIndentation(kswitch)
                    ],
                    width: maxWidth1(switches, theWrap) + 4
                }, desc);
                if (extra) ui.div({
                    text: extra,
                    padding: [
                        0,
                        0,
                        0,
                        2
                    ],
                    align: 'right'
                });
                else ui.div();
            });
            ui.div();
        });
        if (examples.length) {
            ui.div(__('Examples:'));
            examples.forEach((example)=>{
                example[0] = example[0].replace(/\$0/g, base$0);
            });
            examples.forEach((example)=>{
                if (example[1] === '') ui.div({
                    text: example[0],
                    padding: [
                        0,
                        2,
                        0,
                        2
                    ]
                });
                else ui.div({
                    text: example[0],
                    padding: [
                        0,
                        2,
                        0,
                        2
                    ],
                    width: maxWidth1(examples, theWrap) + 4
                }, {
                    text: example[1]
                });
            });
            ui.div();
        }
        if (epilogs.length > 0) {
            const e = epilogs.map((epilog)=>epilog.replace(/\$0/g, base$0)
            ).join('\n');
            ui.div(`${e}\n`);
        }
        return ui.toString().replace(/\s*$/, '');
    };
    function maxWidth1(table, theWrap, modifier) {
        let width = 0;
        if (!Array.isArray(table)) table = Object.values(table).map((v)=>[
                v
            ]
        );
        table.forEach((v)=>{
            width = Math.max(shim.stringWidth(modifier ? `${modifier} ${getText(v[0])}` : getText(v[0])) + getIndentation(v[0]), width);
        });
        if (theWrap) width = Math.min(width, parseInt((theWrap * 0.5).toString(), 10));
        return width;
    }
    function normalizeAliases() {
        const demandedOptions = yargs.getDemandedOptions();
        const options = yargs.getOptions();
        (Object.keys(options.alias) || []).forEach((key)=>{
            options.alias[key].forEach((alias)=>{
                if (descriptions[alias]) self.describe(key, descriptions[alias]);
                if (alias in demandedOptions) yargs.demandOption(key, demandedOptions[alias]);
                if (options.boolean.includes(alias)) yargs.boolean(key);
                if (options.count.includes(alias)) yargs.count(key);
                if (options.string.includes(alias)) yargs.string(key);
                if (options.normalize.includes(alias)) yargs.normalize(key);
                if (options.array.includes(alias)) yargs.array(key);
                if (options.number.includes(alias)) yargs.number(key);
            });
        });
    }
    let cachedHelpMessage;
    self.cacheHelpMessage = function() {
        cachedHelpMessage = this.help();
    };
    self.clearCachedHelpMessage = function() {
        cachedHelpMessage = undefined;
    };
    self.hasCachedHelpMessage = function() {
        return !!cachedHelpMessage;
    };
    function addUngroupedKeys(keys, aliases, groups, defaultGroup) {
        let groupedKeys = [];
        let toCheck = null;
        Object.keys(groups).forEach((group)=>{
            groupedKeys = groupedKeys.concat(groups[group]);
        });
        keys.forEach((key)=>{
            toCheck = [
                key
            ].concat(aliases[key]);
            if (!toCheck.some((k)=>groupedKeys.indexOf(k) !== -1
            )) groups[defaultGroup].push(key);
        });
        return groupedKeys;
    }
    function filterHiddenOptions(key) {
        return yargs.getOptions().hiddenOptions.indexOf(key) < 0 || yargs.parsed.argv[yargs.getOptions().showHiddenOpt];
    }
    self.showHelp = (level)=>{
        const logger = yargs.getInternalMethods().getLoggerInstance();
        if (!level) level = 'error';
        const emit = typeof level === 'function' ? level : logger[level];
        emit(self.help());
    };
    self.functionDescription = (fn)=>{
        const description = fn.name ? shim.Parser.decamelize(fn.name, '-') : __('generated-value');
        return [
            '(',
            description,
            ')'
        ].join('');
    };
    self.stringifiedValues = function stringifiedValues(values, separator) {
        let string = '';
        const sep = separator || ', ';
        const array = [].concat(values);
        if (!values || !array.length) return string;
        array.forEach((value)=>{
            if (string.length) string += sep;
            string += JSON.stringify(value);
        });
        return string;
    };
    function defaultString(value, defaultDescription) {
        let string = `[${__('default:')} `;
        if (value === undefined && !defaultDescription) return null;
        if (defaultDescription) string += defaultDescription;
        else switch(typeof value){
            case 'string':
                string += `"${value}"`;
                break;
            case 'object':
                string += JSON.stringify(value);
                break;
            default:
                string += value;
        }
        return `${string}]`;
    }
    function windowWidth() {
        const maxWidth = 80;
        if (shim.process.stdColumns) return Math.min(maxWidth, shim.process.stdColumns);
        else return maxWidth;
    }
    let version = null;
    self.version = (ver)=>{
        version = ver;
    };
    self.showVersion = (level)=>{
        const logger = yargs.getInternalMethods().getLoggerInstance();
        if (!level) level = 'error';
        const emit = typeof level === 'function' ? level : logger[level];
        emit(version);
    };
    self.reset = function reset(localLookup) {
        failMessage = null;
        failureOutput = false;
        usages = [];
        usageDisabled = false;
        epilogs = [];
        examples = [];
        commands = [];
        descriptions = _objFilterJs.objFilter(descriptions, (k)=>!localLookup[k]
        );
        return self;
    };
    const frozens = [];
    self.freeze = function freeze() {
        frozens.push({
            failMessage,
            failureOutput,
            usages,
            usageDisabled,
            epilogs,
            examples,
            commands,
            descriptions
        });
    };
    self.unfreeze = function unfreeze() {
        const frozen = frozens.pop();
        if (!frozen) return;
        ({ failMessage , failureOutput , usages , usageDisabled , epilogs , examples , commands , descriptions ,  } = frozen);
    };
    return self;
}
function isIndentedText(text) {
    return typeof text === 'object';
}
function addIndentation(text, indent) {
    return isIndentedText(text) ? {
        text: text.text,
        indentation: text.indentation + indent
    } : {
        text,
        indentation: indent
    };
}
function getIndentation(text) {
    return isIndentedText(text) ? text.indentation : 0;
}
function getText(text) {
    return isIndentedText(text) ? text.text : text;
}

},{"./utils/obj-filter.js":"8ulOi","./yerror.js":"gpV5X","./utils/set-blocking.js":"cwCKz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8ulOi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "objFilter", ()=>objFilter
);
var _commonTypesJs = require("../typings/common-types.js");
function objFilter(original = {
}, filter = ()=>true
) {
    const obj = {
    };
    _commonTypesJs.objectKeys(original).forEach((key)=>{
        if (filter(key, original[key])) obj[key] = original[key];
    });
    return obj;
}

},{"../typings/common-types.js":"aOzMb","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cwCKz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var process = require("process");
function setBlocking(blocking) {
    if (typeof process === 'undefined') return;
    [
        process.stdout,
        process.stderr
    ].forEach((_stream)=>{
        const stream = _stream;
        if (stream._handle && stream.isTTY && typeof stream._handle.setBlocking === 'function') stream._handle.setBlocking(blocking);
    });
}
exports.default = setBlocking;

},{"process":"lDnB8","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iwxgB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Completion", ()=>Completion
);
parcelHelpers.export(exports, "completion", ()=>completion
);
var _commandJs = require("./command.js");
var _commonTypesJs = require("./typings/common-types.js");
var _completionTemplatesJs = require("./completion-templates.js");
var _isPromiseJs = require("./utils/is-promise.js");
var _parseCommandJs = require("./parse-command.js");
class Completion {
    constructor(yargs1, usage1, command1, shim1){
        var _a, _b, _c;
        this.yargs = yargs1;
        this.usage = usage1;
        this.command = command1;
        this.shim = shim1;
        this.completionKey = 'get-yargs-completions';
        this.aliases = null;
        this.customCompletionFunction = null;
        this.zshShell = (_c = ((_a = this.shim.getEnv('SHELL')) === null || _a === void 0 ? void 0 : _a.includes('zsh')) || ((_b = this.shim.getEnv('ZSH_NAME')) === null || _b === void 0 ? void 0 : _b.includes('zsh'))) !== null && _c !== void 0 ? _c : false;
    }
    defaultCompletion(args, argv6, current, done) {
        const handlers = this.command.getCommandHandlers();
        for(let i = 0, ii = args.length; i < ii; ++i)if (handlers[args[i]] && handlers[args[i]].builder) {
            const builder = handlers[args[i]].builder;
            if (_commandJs.isCommandBuilderCallback(builder)) {
                const y = this.yargs.getInternalMethods().reset();
                builder(y, true);
                return y.argv;
            }
        }
        const completions = [];
        this.commandCompletions(completions, args, current);
        this.optionCompletions(completions, args, argv6, current);
        this.choicesCompletions(completions, args, argv6, current);
        done(null, completions);
    }
    commandCompletions(completions4, args1, current1) {
        const parentCommands = this.yargs.getInternalMethods().getContext().commands;
        if (!current1.match(/^-/) && parentCommands[parentCommands.length - 1] !== current1 && !this.previousArgHasChoices(args1)) this.usage.getCommands().forEach((usageCommand)=>{
            const commandName = _parseCommandJs.parseCommand(usageCommand[0]).cmd;
            if (args1.indexOf(commandName) === -1) {
                if (!this.zshShell) completions4.push(commandName);
                else {
                    const desc = usageCommand[1] || '';
                    completions4.push(commandName.replace(/:/g, '\\:') + ':' + desc);
                }
            }
        });
    }
    optionCompletions(completions1, args2, argv1, current2) {
        if ((current2.match(/^-/) || current2 === '' && completions1.length === 0) && !this.previousArgHasChoices(args2)) {
            const options = this.yargs.getOptions();
            const positionalKeys = this.yargs.getGroups()[this.usage.getPositionalGroupName()] || [];
            Object.keys(options.key).forEach((key)=>{
                const negable = !!options.configuration['boolean-negation'] && options.boolean.includes(key);
                const isPositionalKey = positionalKeys.includes(key);
                if (!isPositionalKey && !this.argsContainKey(args2, argv1, key, negable)) {
                    this.completeOptionKey(key, completions1, current2);
                    if (negable && !!options.default[key]) this.completeOptionKey(`no-${key}`, completions1, current2);
                }
            });
        }
    }
    choicesCompletions(completions2, args3, argv2, current3) {
        if (this.previousArgHasChoices(args3)) {
            const choices = this.getPreviousArgChoices(args3);
            if (choices && choices.length > 0) completions2.push(...choices);
        }
    }
    getPreviousArgChoices(args4) {
        if (args4.length < 1) return;
        let previousArg = args4[args4.length - 1];
        let filter = '';
        if (!previousArg.startsWith('--') && args4.length > 1) {
            filter = previousArg;
            previousArg = args4[args4.length - 2];
        }
        if (!previousArg.startsWith('--')) return;
        const previousArgKey = previousArg.replace(/-/g, '');
        const options = this.yargs.getOptions();
        if (Object.keys(options.key).some((key)=>key === previousArgKey
        ) && Array.isArray(options.choices[previousArgKey])) return options.choices[previousArgKey].filter((choice)=>!filter || choice.startsWith(filter)
        );
    }
    previousArgHasChoices(args5) {
        const choices = this.getPreviousArgChoices(args5);
        return choices !== undefined && choices.length > 0;
    }
    argsContainKey(args6, argv3, key, negable) {
        if (args6.indexOf(`--${key}`) !== -1) return true;
        if (negable && args6.indexOf(`--no-${key}`) !== -1) return true;
        if (this.aliases) for (const alias of this.aliases[key]){
            if (argv3[alias] !== undefined) return true;
        }
        return false;
    }
    completeOptionKey(key1, completions3, current4) {
        const descs = this.usage.getDescriptions();
        const startsByTwoDashes = (s)=>/^--/.test(s)
        ;
        const isShortOption = (s)=>/^[^0-9]$/.test(s)
        ;
        const dashes = !startsByTwoDashes(current4) && isShortOption(key1) ? '-' : '--';
        if (!this.zshShell) completions3.push(dashes + key1);
        else {
            const desc = descs[key1] || '';
            completions3.push(dashes + `${key1.replace(/:/g, '\\:')}:${desc.replace('__yargsString__:', '')}`);
        }
    }
    customCompletion(args7, argv4, current5, done1) {
        _commonTypesJs.assertNotStrictEqual(this.customCompletionFunction, null, this.shim);
        if (isSyncCompletionFunction(this.customCompletionFunction)) {
            const result = this.customCompletionFunction(current5, argv4);
            if (_isPromiseJs.isPromise(result)) return result.then((list)=>{
                this.shim.process.nextTick(()=>{
                    done1(null, list);
                });
            }).catch((err)=>{
                this.shim.process.nextTick(()=>{
                    done1(err, undefined);
                });
            });
            return done1(null, result);
        } else if (isFallbackCompletionFunction(this.customCompletionFunction)) return this.customCompletionFunction(current5, argv4, (onCompleted = done1)=>this.defaultCompletion(args7, argv4, current5, onCompleted)
        , (completions)=>{
            done1(null, completions);
        });
        else return this.customCompletionFunction(current5, argv4, (completions)=>{
            done1(null, completions);
        });
    }
    getCompletion(args8, done2) {
        const current = args8.length ? args8[args8.length - 1] : '';
        const argv5 = this.yargs.parse(args8, true);
        const completionFunction = this.customCompletionFunction ? (argv)=>this.customCompletion(args8, argv, current, done2)
         : (argv)=>this.defaultCompletion(args8, argv, current, done2)
        ;
        return _isPromiseJs.isPromise(argv5) ? argv5.then(completionFunction) : completionFunction(argv5);
    }
    generateCompletionScript($0, cmd) {
        let script = this.zshShell ? _completionTemplatesJs.completionZshTemplate : _completionTemplatesJs.completionShTemplate;
        const name = this.shim.path.basename($0);
        if ($0.match(/\.js$/)) $0 = `./${$0}`;
        script = script.replace(/{{app_name}}/g, name);
        script = script.replace(/{{completion_command}}/g, cmd);
        return script.replace(/{{app_path}}/g, $0);
    }
    registerFunction(fn) {
        this.customCompletionFunction = fn;
    }
    setParsed(parsed) {
        this.aliases = parsed.aliases;
    }
}
function completion(yargs, usage, command, shim) {
    return new Completion(yargs, usage, command, shim);
}
function isSyncCompletionFunction(completionFunction) {
    return completionFunction.length < 3;
}
function isFallbackCompletionFunction(completionFunction) {
    return completionFunction.length > 3;
}

},{"./command.js":"3L5nW","./typings/common-types.js":"aOzMb","./completion-templates.js":"1Rphy","./utils/is-promise.js":"hIFOk","./parse-command.js":"iE0Yo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1Rphy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "completionShTemplate", ()=>completionShTemplate
);
parcelHelpers.export(exports, "completionZshTemplate", ()=>completionZshTemplate
);
const completionShTemplate = `###-begin-{{app_name}}-completions-###
#
# yargs command completion script
#
# Installation: {{app_path}} {{completion_command}} >> ~/.bashrc
#    or {{app_path}} {{completion_command}} >> ~/.bash_profile on OSX.
#
_{{app_name}}_yargs_completions()
{
    local cur_word args type_list

    cur_word="\${COMP_WORDS[COMP_CWORD]}"
    args=("\${COMP_WORDS[@]}")

    # ask yargs to generate completions.
    type_list=$({{app_path}} --get-yargs-completions "\${args[@]}")

    COMPREPLY=( $(compgen -W "\${type_list}" -- \${cur_word}) )

    # if no match was found, fall back to filename completion
    if [ \${#COMPREPLY[@]} -eq 0 ]; then
      COMPREPLY=()
    fi

    return 0
}
complete -o bashdefault -o default -F _{{app_name}}_yargs_completions {{app_name}}
###-end-{{app_name}}-completions-###
`;
const completionZshTemplate = `#compdef {{app_name}}
###-begin-{{app_name}}-completions-###
#
# yargs command completion script
#
# Installation: {{app_path}} {{completion_command}} >> ~/.zshrc
#    or {{app_path}} {{completion_command}} >> ~/.zsh_profile on OSX.
#
_{{app_name}}_yargs_completions()
{
  local reply
  local si=$IFS
  IFS=$'\n' reply=($(COMP_CWORD="$((CURRENT-1))" COMP_LINE="$BUFFER" COMP_POINT="$CURSOR" {{app_path}} --get-yargs-completions "\${words[@]}"))
  IFS=$si
  _describe 'values' reply
}
compdef _{{app_name}}_yargs_completions {{app_name}}
###-end-{{app_name}}-completions-###
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9xcjr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validation", ()=>validation
);
var _argsertJs = require("./argsert.js");
var _commonTypesJs = require("./typings/common-types.js");
var _levenshteinJs = require("./utils/levenshtein.js");
var _objFilterJs = require("./utils/obj-filter.js");
const specialKeys = [
    '$0',
    '--',
    '_'
];
function validation(yargs, usage, shim) {
    const __ = shim.y18n.__;
    const __n = shim.y18n.__n;
    const self = {
    };
    self.nonOptionCount = function nonOptionCount(argv) {
        const demandedCommands = yargs.getDemandedCommands();
        const positionalCount = argv._.length + (argv['--'] ? argv['--'].length : 0);
        const _s = positionalCount - yargs.getInternalMethods().getContext().commands.length;
        if (demandedCommands._ && (_s < demandedCommands._.min || _s > demandedCommands._.max)) {
            if (_s < demandedCommands._.min) {
                if (demandedCommands._.minMsg !== undefined) usage.fail(demandedCommands._.minMsg ? demandedCommands._.minMsg.replace(/\$0/g, _s.toString()).replace(/\$1/, demandedCommands._.min.toString()) : null);
                else usage.fail(__n('Not enough non-option arguments: got %s, need at least %s', 'Not enough non-option arguments: got %s, need at least %s', _s, _s.toString(), demandedCommands._.min.toString()));
            } else if (_s > demandedCommands._.max) {
                if (demandedCommands._.maxMsg !== undefined) usage.fail(demandedCommands._.maxMsg ? demandedCommands._.maxMsg.replace(/\$0/g, _s.toString()).replace(/\$1/, demandedCommands._.max.toString()) : null);
                else usage.fail(__n('Too many non-option arguments: got %s, maximum of %s', 'Too many non-option arguments: got %s, maximum of %s', _s, _s.toString(), demandedCommands._.max.toString()));
            }
        }
    };
    self.positionalCount = function positionalCount(required, observed) {
        if (observed < required) usage.fail(__n('Not enough non-option arguments: got %s, need at least %s', 'Not enough non-option arguments: got %s, need at least %s', observed, observed + '', required + ''));
    };
    self.requiredArguments = function requiredArguments(argv, demandedOptions) {
        let missing = null;
        for (const key of Object.keys(demandedOptions))if (!Object.prototype.hasOwnProperty.call(argv, key) || typeof argv[key] === 'undefined') {
            missing = missing || {
            };
            missing[key] = demandedOptions[key];
        }
        if (missing) {
            const customMsgs = [];
            for (const key of Object.keys(missing)){
                const msg = missing[key];
                if (msg && customMsgs.indexOf(msg) < 0) customMsgs.push(msg);
            }
            const customMsg = customMsgs.length ? `\n${customMsgs.join('\n')}` : '';
            usage.fail(__n('Missing required argument: %s', 'Missing required arguments: %s', Object.keys(missing).length, Object.keys(missing).join(', ') + customMsg));
        }
    };
    self.unknownArguments = function unknownArguments(argv, aliases, positionalMap, isDefaultCommand, checkPositionals = true) {
        var _a;
        const commandKeys = yargs.getInternalMethods().getCommandInstance().getCommands();
        const unknown = [];
        const currentContext = yargs.getInternalMethods().getContext();
        Object.keys(argv).forEach((key)=>{
            if (!specialKeys.includes(key) && !Object.prototype.hasOwnProperty.call(positionalMap, key) && !Object.prototype.hasOwnProperty.call(yargs.getInternalMethods().getParseContext(), key) && !self.isValidAndSomeAliasIsNotNew(key, aliases)) unknown.push(key);
        });
        if (checkPositionals && (currentContext.commands.length > 0 || commandKeys.length > 0 || isDefaultCommand)) argv._.slice(currentContext.commands.length).forEach((key)=>{
            if (!commandKeys.includes('' + key)) unknown.push('' + key);
        });
        if (checkPositionals) {
            const demandedCommands = yargs.getDemandedCommands();
            const maxNonOptDemanded = ((_a = demandedCommands._) === null || _a === void 0 ? void 0 : _a.max) || 0;
            const expected = currentContext.commands.length + maxNonOptDemanded;
            if (expected < argv._.length) argv._.slice(expected).forEach((key)=>{
                key = String(key);
                if (!currentContext.commands.includes(key) && !unknown.includes(key)) unknown.push(key);
            });
        }
        if (unknown.length) usage.fail(__n('Unknown argument: %s', 'Unknown arguments: %s', unknown.length, unknown.join(', ')));
    };
    self.unknownCommands = function unknownCommands(argv) {
        const commandKeys = yargs.getInternalMethods().getCommandInstance().getCommands();
        const unknown = [];
        const currentContext = yargs.getInternalMethods().getContext();
        if (currentContext.commands.length > 0 || commandKeys.length > 0) argv._.slice(currentContext.commands.length).forEach((key)=>{
            if (!commandKeys.includes('' + key)) unknown.push('' + key);
        });
        if (unknown.length > 0) {
            usage.fail(__n('Unknown command: %s', 'Unknown commands: %s', unknown.length, unknown.join(', ')));
            return true;
        } else return false;
    };
    self.isValidAndSomeAliasIsNotNew = function isValidAndSomeAliasIsNotNew(key, aliases) {
        if (!Object.prototype.hasOwnProperty.call(aliases, key)) return false;
        const newAliases = yargs.parsed.newAliases;
        return [
            key,
            ...aliases[key]
        ].some((a)=>!Object.prototype.hasOwnProperty.call(newAliases, a) || !newAliases[key]
        );
    };
    self.limitedChoices = function limitedChoices(argv) {
        const options = yargs.getOptions();
        const invalid = {
        };
        if (!Object.keys(options.choices).length) return;
        Object.keys(argv).forEach((key)=>{
            if (specialKeys.indexOf(key) === -1 && Object.prototype.hasOwnProperty.call(options.choices, key)) [].concat(argv[key]).forEach((value)=>{
                if (options.choices[key].indexOf(value) === -1 && value !== undefined) invalid[key] = (invalid[key] || []).concat(value);
            });
        });
        const invalidKeys = Object.keys(invalid);
        if (!invalidKeys.length) return;
        let msg = __('Invalid values:');
        invalidKeys.forEach((key)=>{
            msg += `\n  ${__('Argument: %s, Given: %s, Choices: %s', key, usage.stringifiedValues(invalid[key]), usage.stringifiedValues(options.choices[key]))}`;
        });
        usage.fail(msg);
    };
    let implied = {
    };
    self.implies = function implies(key, value) {
        _argsertJs.argsert('<string|object> [array|number|string]', [
            key,
            value
        ], arguments.length);
        if (typeof key === 'object') Object.keys(key).forEach((k)=>{
            self.implies(k, key[k]);
        });
        else {
            yargs.global(key);
            if (!implied[key]) implied[key] = [];
            if (Array.isArray(value)) value.forEach((i)=>self.implies(key, i)
            );
            else {
                _commonTypesJs.assertNotStrictEqual(value, undefined, shim);
                implied[key].push(value);
            }
        }
    };
    self.getImplied = function getImplied() {
        return implied;
    };
    function keyExists(argv, val) {
        const num = Number(val);
        val = isNaN(num) ? val : num;
        if (typeof val === 'number') val = argv._.length >= val;
        else if (val.match(/^--no-.+/)) {
            val = val.match(/^--no-(.+)/)[1];
            val = !Object.prototype.hasOwnProperty.call(argv, val);
        } else val = Object.prototype.hasOwnProperty.call(argv, val);
        return val;
    }
    self.implications = function implications(argv) {
        const implyFail = [];
        Object.keys(implied).forEach((key1)=>{
            const origKey = key1;
            (implied[key1] || []).forEach((value)=>{
                let key = origKey;
                const origValue = value;
                key = keyExists(argv, key);
                value = keyExists(argv, value);
                if (key && !value) implyFail.push(` ${origKey} -> ${origValue}`);
            });
        });
        if (implyFail.length) {
            let msg = `${__('Implications failed:')}\n`;
            implyFail.forEach((value)=>{
                msg += value;
            });
            usage.fail(msg);
        }
    };
    let conflicting = {
    };
    self.conflicts = function conflicts(key, value) {
        _argsertJs.argsert('<string|object> [array|string]', [
            key,
            value
        ], arguments.length);
        if (typeof key === 'object') Object.keys(key).forEach((k)=>{
            self.conflicts(k, key[k]);
        });
        else {
            yargs.global(key);
            if (!conflicting[key]) conflicting[key] = [];
            if (Array.isArray(value)) value.forEach((i)=>self.conflicts(key, i)
            );
            else conflicting[key].push(value);
        }
    };
    self.getConflicting = ()=>conflicting
    ;
    self.conflicting = function conflictingFn(argv) {
        Object.keys(argv).forEach((key)=>{
            if (conflicting[key]) conflicting[key].forEach((value)=>{
                if (value && argv[key] !== undefined && argv[value] !== undefined) usage.fail(__('Arguments %s and %s are mutually exclusive', key, value));
            });
        });
        if (yargs.getInternalMethods().getParserConfiguration()['strip-dashed']) Object.keys(conflicting).forEach((key)=>{
            conflicting[key].forEach((value)=>{
                if (value && argv[shim.Parser.camelCase(key)] !== undefined && argv[shim.Parser.camelCase(value)] !== undefined) usage.fail(__('Arguments %s and %s are mutually exclusive', key, value));
            });
        });
    };
    self.recommendCommands = function recommendCommands(cmd, potentialCommands) {
        const threshold = 3;
        potentialCommands = potentialCommands.sort((a, b)=>b.length - a.length
        );
        let recommended = null;
        let bestDistance = Infinity;
        for(let i = 0, candidate; (candidate = potentialCommands[i]) !== undefined; i++){
            const d = _levenshteinJs.levenshtein(cmd, candidate);
            if (d <= threshold && d < bestDistance) {
                bestDistance = d;
                recommended = candidate;
            }
        }
        if (recommended) usage.fail(__('Did you mean %s?', recommended));
    };
    self.reset = function reset(localLookup) {
        implied = _objFilterJs.objFilter(implied, (k)=>!localLookup[k]
        );
        conflicting = _objFilterJs.objFilter(conflicting, (k)=>!localLookup[k]
        );
        return self;
    };
    const frozens = [];
    self.freeze = function freeze() {
        frozens.push({
            implied,
            conflicting
        });
    };
    self.unfreeze = function unfreeze() {
        const frozen = frozens.pop();
        _commonTypesJs.assertNotStrictEqual(frozen, undefined, shim);
        ({ implied , conflicting  } = frozen);
    };
    return self;
}

},{"./argsert.js":"4vCSz","./typings/common-types.js":"aOzMb","./utils/levenshtein.js":"bBhE1","./utils/obj-filter.js":"8ulOi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bBhE1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "levenshtein", ()=>levenshtein
);
function levenshtein(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    const matrix = [];
    let i;
    for(i = 0; i <= b.length; i++)matrix[i] = [
        i
    ];
    let j;
    for(j = 0; j <= a.length; j++)matrix[0][j] = j;
    for(i = 1; i <= b.length; i++)for(j = 1; j <= a.length; j++){
        if (b.charAt(i - 1) === a.charAt(j - 1)) matrix[i][j] = matrix[i - 1][j - 1];
        else if (i > 1 && j > 1 && b.charAt(i - 2) === a.charAt(j - 1) && b.charAt(i - 1) === a.charAt(j - 2)) matrix[i][j] = matrix[i - 2][j - 2] + 1;
        else matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
    }
    return matrix[b.length][a.length];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9pEhN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyExtends", ()=>applyExtends
);
var _yerrorJs = require("../yerror.js");
let previouslyVisitedConfigs = [];
let shim;
function applyExtends(config, cwd, mergeExtends, _shim) {
    shim = _shim;
    let defaultConfig = {
    };
    if (Object.prototype.hasOwnProperty.call(config, 'extends')) {
        if (typeof config.extends !== 'string') return defaultConfig;
        const isPath = /\.json|\..*rc$/.test(config.extends);
        let pathToDefault = null;
        if (!isPath) try {
            pathToDefault = undefined(config.extends);
        } catch (_err) {
            return config;
        }
        else pathToDefault = getPathToDefaultConfig(cwd, config.extends);
        checkForCircularExtends(pathToDefault);
        previouslyVisitedConfigs.push(pathToDefault);
        defaultConfig = isPath ? JSON.parse(shim.readFileSync(pathToDefault, 'utf8')) : require(config.extends);
        delete config.extends;
        defaultConfig = applyExtends(defaultConfig, shim.path.dirname(pathToDefault), mergeExtends, shim);
    }
    previouslyVisitedConfigs = [];
    return mergeExtends ? mergeDeep(defaultConfig, config) : Object.assign({
    }, defaultConfig, config);
}
function checkForCircularExtends(cfgPath) {
    if (previouslyVisitedConfigs.indexOf(cfgPath) > -1) throw new _yerrorJs.YError(`Circular extended configurations: '${cfgPath}'.`);
}
function getPathToDefaultConfig(cwd, pathToExtend) {
    return shim.path.resolve(cwd, pathToExtend);
}
function mergeDeep(config1, config2) {
    const target = {
    };
    function isObject(obj) {
        return obj && typeof obj === 'object' && !Array.isArray(obj);
    }
    Object.assign(target, config1);
    for (const key of Object.keys(config2))if (isObject(config2[key]) && isObject(target[key])) target[key] = mergeDeep(config1[key], config2[key]);
    else target[key] = config2[key];
    return target;
}

},{"../yerror.js":"gpV5X","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["dLPE9","dkWBj"], "dkWBj", "parcelRequirefe45")

//# sourceMappingURL=cli.js.map
