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
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
})({"1Fqy1":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"gLLPy":[function(require,module,exports,__globalThis) {
// -------------------------------------------------
var _uiJs = require("./mohamad/ui.js");
var _networkJs = require("./mohamad/network.js");
var _localstorageJs = require("./mohamad/localstorage.js");
// ----------------------------------------
// search
var _searchJs = require("./Alireza/searchBar/search.js");
document.addEventListener("DOMContentLoaded", ()=>{
    const carouselWrapper = document.getElementById("carousel-wrapper");
    const movieGrid = document.getElementById("movie-grid");
    const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjhhODEyNWFjM2JmMmNlOGIzNzE0NWRlNGI3NzZjMiIsIm5iZiI6MTczMzE1NDM2Mi4xOTgwMDAyLCJzdWIiOiI2NzRkZDYzYTA1YWYxMDAxNWZiODQ0OGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wDJPDhA6FadKoAJxohE13cB9BISD1In84Z0LjenSQtU"
        }
    };
    const showItem = (index)=>{
        const carouselItems = carouselWrapper.querySelectorAll("[data-carousel-item]");
        carouselItems.forEach((item, i)=>{
            item.classList.toggle("hidden", i !== index);
        });
    };
    let currentIndex = 0;
    document.getElementById("carousel-prev").addEventListener("click", ()=>{
        currentIndex = currentIndex > 0 ? currentIndex - 1 : carouselWrapper.children.length - 1;
        showItem(currentIndex);
    });
    document.getElementById("carousel-next").addEventListener("click", ()=>{
        currentIndex = currentIndex < carouselWrapper.children.length - 1 ? currentIndex + 1 : 0;
        showItem(currentIndex);
    });
    (0, _networkJs.fetchPopularMovies)(url, options).then((movies)=>{
        const carouselMovies = movies.slice(0, 5);
        (0, _uiJs.updateCarousel)(carouselWrapper, carouselMovies);
        (0, _uiJs.populateMovieGrid)(movieGrid, movies, (0, _localstorageJs.favoritesManager), (id)=>(0, _networkJs.fetchMovieDetails)(id, options));
    }).catch((error)=>{
        console.error("Error fetching popular movies:", error);
    });
});
// -------------------------------------------------
// To the Top
$(document).ready(function() {
    var back_to_top_button = [
        '<a href="#top" class="back-to-top" style="',
        "position: fixed; ",
        "bottom: 8px; ",
        "right: 1px; ",
        "padding: 1em; ",
        "z-index: 100; ",
        "color: white; ",
        "text-align: center; ",
        "border-radius: 5px; ",
        "font-family: Arial, sans-serif; ",
        "font-size: 50px; ",
        "text-decoration: none; ",
        "display: none; ",
        '">\u21E7</a>'
    ].join("");
    $("body").append(back_to_top_button);
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) $(".back-to-top").fadeIn().addClass("flash-effect");
        else $(".back-to-top").fadeOut().removeClass("flash-effect");
    });
    // Smooth scroll
    $(".back-to-top").click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
document.addEventListener("DOMContentLoaded", ()=>{
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("default-search");
    const movieGrid = document.getElementById("movie-grid");
    (0, _searchJs.setupSearch)(searchForm, searchInput, movieGrid);
}); // // journal
 // import renderCardList from "./test/ui.js";
 // document.addEventListener("DOMContentLoaded", () => {
 //   renderCardList();
 //   console.log("Card List");
 // });
 // // document.addEventListener("DOMContentLoaded", renderCardList);

},{"./mohamad/ui.js":"iWMel","./mohamad/network.js":"b25tK","./mohamad/localstorage.js":"9rLnQ","./Alireza/searchBar/search.js":"jbbMi"}],"iWMel":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateCarousel", ()=>updateCarousel);
parcelHelpers.export(exports, "populateMovieGrid", ()=>populateMovieGrid);
function updateCarousel(carouselWrapper, movies) {
    movies.forEach((movie, index)=>{
        const carouselElement = document.createElement("div");
        index === 0 ? carouselElement.classList.add("duration-700", "ease-in-out") : carouselElement.classList.add("hidden");
        carouselElement.setAttribute("data-carousel-item", "");
        const carouselImage = document.createElement("img");
        carouselImage.src = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
        carouselImage.classList.add("absolute", "block", "w-full", "h-full", "object-cover", "top-0", "left-0");
        carouselImage.alt = "...";
        carouselElement.appendChild(carouselImage);
        carouselWrapper.appendChild(carouselElement);
    });
}
function populateMovieGrid(movieGrid, movies, addToFavorites, fetchMovieDetails) {
    movies.forEach((movie)=>{
        const movieElement = document.createElement("div");
        movieElement.classList.add("bg-[#22252E]", "rounded-lg", "shadow-lg", "overflow-hidden", "relative", "flex", "flex-col", "transition", "transform", "hover:scale-105", "hover:shadow-2xl", "m-[20px]", "mb-[20px]");
        const movieImage = document.createElement("img");
        movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        movieImage.classList.add("w-full", "h-64", "object-cover");
        movieElement.appendChild(movieImage);
        const movieInfo = document.createElement("div");
        movieInfo.classList.add("p-4", "flex-grow", "flex", "flex-col", "justify-between");
        const movieTitle = document.createElement("h3");
        movieTitle.textContent = movie.title;
        movieTitle.classList.add("text-lg", "font-semibold", "mb-2", "text-white");
        movieInfo.appendChild(movieTitle);
        const movieRating = document.createElement("p");
        movieRating.textContent = `Rating: ${movie.vote_average}`;
        movieRating.classList.add("text-white", "mb-2");
        movieInfo.appendChild(movieRating);
        fetchMovieDetails(movie.id).then((details)=>{
            const movieLength = document.createElement("p");
            movieLength.textContent = `Length: ${details.runtime} mins`;
            movieLength.classList.add("text-white", "mb-2");
            movieInfo.appendChild(movieLength);
        });
        movieElement.appendChild(movieInfo);
        const favBtnContainer = document.createElement("div");
        favBtnContainer.classList.add("absolute", "bottom-3", "right-2");
        const favBtn = document.createElement("button");
        favBtn.innerHTML = '<i class="fas fa-heart"></i>';
        favBtn.classList.add("text-white", "hover:text-red-500", "transition");
        function isFavorite(movieId) {
            const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
            return favorites.includes(movieId);
        }
        if (isFavorite(movie.id)) favBtn.classList.add("text-red-500");
        favBtn.addEventListener("click", ()=>addToFavorites.toggle(movie, favBtn));
        favBtnContainer.appendChild(favBtn);
        movieElement.appendChild(favBtnContainer);
        movieGrid.appendChild(movieElement);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
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
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"b25tK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchPopularMovies", ()=>fetchPopularMovies);
parcelHelpers.export(exports, "fetchMovieDetails", ()=>fetchMovieDetails);
async function fetchPopularMovies(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.results;
}
async function fetchMovieDetails(movieId, options) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9rLnQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "favoritesManager", ()=>favoritesManager);
const favoritesManager = {
    getFavorites: ()=>JSON.parse(localStorage.getItem("favorites")) || [],
    isFavorite: (movieId)=>{
        const favorites = favoritesManager.getFavorites();
        return favorites.some((fav)=>fav.id === movieId);
    },
    addFavorite: (movie)=>{
        const favorites = favoritesManager.getFavorites();
        favorites.push(movie);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    },
    removeFavorite: (movieId)=>{
        const favorites = favoritesManager.getFavorites();
        const updatedFavorites = favorites.filter((fav)=>fav.id !== movieId);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    },
    toggle: (movie, button)=>{
        if (favoritesManager.isFavorite(movie.id)) {
            favoritesManager.removeFavorite(movie.id);
            button.classList.remove("text-red-500");
            button.classList.add("text-white");
        } else {
            favoritesManager.addFavorite(movie);
            button.classList.remove("text-white");
            button.classList.add("text-red-500");
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jbbMi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setupSearch", ()=>setupSearch);
var _apiJs = require("./api.js");
const setupSearch = (form, input, movieGrid)=>{
    const getFavorites = ()=>JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = (movieId)=>getFavorites().some((fav)=>fav.id === movieId);
    const toggleFavorite = (movie, favBtn)=>{
        let favorites = getFavorites();
        if (isFavorite(movie.id)) {
            favorites = favorites.filter((fav)=>fav.id !== movie.id);
            favBtn.classList.remove("text-red-500");
            favBtn.classList.add("text-gray-400");
        } else {
            favorites.push(movie);
            favBtn.classList.add("text-red-500");
            favBtn.classList.remove("text-gray-400");
        }
        localStorage.setItem("favorites", JSON.stringify(favorites));
    };
    form.addEventListener("submit", async (event)=>{
        event.preventDefault();
        const query = input.value.trim();
        if (!query) {
            alert("Please enter a search term!");
            return;
        }
        movieGrid.innerHTML = "<p>Loading...</p>";
        try {
            const data = await (0, _apiJs.fetchMovies)(query);
            if (!data.results || data.results.length === 0) {
                movieGrid.innerHTML = "<p>No results found!</p>";
                return;
            }
            movieGrid.innerHTML = "";
            data.results.forEach((movie)=>{
                const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image";
                const movieElement = document.createElement("div");
                movieElement.className = "bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col items-center m-4 relative";
                movieElement.innerHTML = `
          <img src="${poster}" alt="${movie.title}" class="w-full h-64 object-cover" />
          <div class="p-4">
            <h3 class="text-lg font-semibold text-white">${movie.title}</h3>
            <p class="text-gray-400">Rating: ${movie.vote_average}</p>
          </div>
        `;
                const favBtn = document.createElement("button");
                favBtn.className = "absolute bottom-2 right-2 text-gray-400 hover:text-red-500 transition text-xl";
                favBtn.innerHTML = `<i class="fas fa-heart"></i>`;
                if (isFavorite(movie.id)) favBtn.classList.add("text-red-500");
                favBtn.addEventListener("click", ()=>toggleFavorite(movie, favBtn));
                movieElement.appendChild(favBtn);
                movieGrid.appendChild(movieElement);
            });
        } catch (error) {
            movieGrid.innerHTML = `<p>An error occurred: ${error.message}</p>`;
        }
    });
};

},{"./api.js":"46XWu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"46XWu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchMovies", ()=>fetchMovies);
const fetchMovies = async (query)=>{
    const API_URL = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1`;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTRjMWNmN2ZiMTA0NmY1YTBiNDhjMjg2MmZiZWI0YSIsIm5iZiI6MTczMzE1MzM5NC45NTI5OTk4LCJzdWIiOiI2NzRkZDI3MjQ1NThkYWU0NDkzZGRmMGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d5AF86elO4LfJXvkFzC8-wYI17Ow-_MFCJh6FyF5HdE"
        }
    };
    try {
        const response = await fetch(API_URL, options);
        if (!response.ok) {
            console.error(`API error: ${response.status} ${response.statusText}`);
            throw new Error(`API error: ${response.status}`);
        }
        const data = await response.json();
        console.log("API response:", data);
        return data;
    } catch (error) {
        console.error("Error fetching movies:", error.message);
        throw error;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1Fqy1","gLLPy"], "gLLPy", "parcelRequire94c2")

//# sourceMappingURL=index.4d6bcbeb.js.map
