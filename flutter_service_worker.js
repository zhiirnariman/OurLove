'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8424f801f1b6cc545ad374a414e073bc",
"assets/AssetManifest.bin.json": "e4ddfe05f914a793587982e9e2d567c8",
"assets/AssetManifest.json": "a338c472ab40b0dab547d83fda861d80",
"assets/FontManifest.json": "c479fb407eb56d40e99bed6ed7cc068a",
"assets/fonts/MaterialIcons-Regular.otf": "efd12745606445ae90fe43f910ba3896",
"assets/lib/1.JPG": "5dde3afcc8adb696b4d5d5c29f169631",
"assets/lib/10.JPG": "911cf47b689ddc9aeb248b9f3dda1f55",
"assets/lib/11.JPG": "5badac5e291d058e561855a9e6918698",
"assets/lib/12.JPG": "2af43848fb86f0a1b068ad3c3d3578b3",
"assets/lib/13.JPG": "8886a89cdf114858cfda298112a6bcc4",
"assets/lib/14.JPG": "6b8bef0e7decf583c1aeaa43e15d6a79",
"assets/lib/15.JPG": "0799319cb75e7ec1464c55cb0e9a43f3",
"assets/lib/16.JPG": "9f1b0cc982dc3950c17ee4fa8102e0e2",
"assets/lib/17.JPG": "d3aaeb40ff43e6657a2b8b89e7ee2f0d",
"assets/lib/18.JPG": "74606b98245e71a15f86adf16f6f1cf3",
"assets/lib/19.JPG": "f501d0568e3e14a4096c248a6c95b5fd",
"assets/lib/2.JPG": "9d6055b4fba84cefe2c2f37baf8c9c7d",
"assets/lib/20.JPG": "8f6c20b3c976c0ee4cdef19a3e859cf7",
"assets/lib/21.JPG": "cdc3e11f9ce8f6e0c363d2f25fe8228a",
"assets/lib/22.JPG": "2ccca7eadb7c5f6685ff47c574adad68",
"assets/lib/23.JPG": "f641d18bf5e23e0e225231787243c312",
"assets/lib/24.JPG": "e92a92cf79f9975e6e7405bb90482c66",
"assets/lib/3.JPG": "35e756bd9dc7c60a080bfcee20b5f755",
"assets/lib/4.JPG": "648a5f756a303bfa12c3ca27b87e1f44",
"assets/lib/5.JPG": "e89925d92e4b11f7aad2cf7fe3fc4844",
"assets/lib/6.JPG": "09093e0a60b878396a122b4ac79d22b5",
"assets/lib/7.JPG": "398434cb61a9e923952030b41b45c5cd",
"assets/lib/8.JPG": "cd6b1c6c9eb57315837cb01acd0aa108",
"assets/lib/9.JPG": "1b219650ea7bb2f31f2092da9d1a4b58",
"assets/lib/DynaPuff.ttf": "9486565e4af43d5b8f8af8f86f44a799",
"assets/lib/lovely.otf": "f163251c94f6ebf5ba805a42e8c885cd",
"assets/lib/video.gif": "a446ebc63c72a9d839579ae815349eca",
"assets/NOTICES": "041caa30db211adf104d70e22aea274c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "46f785805afe0999c916684fb4d39f62",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c3f0ed43bf1c0984e6a80c2773999582",
"/": "c3f0ed43bf1c0984e6a80c2773999582",
"main.dart.js": "0f1c125c19fccd8f17bbcac4eed6fe45",
"manifest.json": "3d1daa78d1c73be463f9112cdfaa67c1",
"version.json": "9012d3bd9fb32ae84d7afb214827f99e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
