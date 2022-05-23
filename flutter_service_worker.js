'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "024f13cb5edc56284ac95d663af90332",
"assets/assets/font/ShareTechMono-Regular.ttf": "a1cea4ee23cd0a3e68cd6dcc1155613c",
"assets/assets/imgs/1.webp": "0d8ab65699609747b361ec12c457d130",
"assets/assets/imgs/2.webp": "cfde19efc13966aefb691c5102382ca4",
"assets/assets/imgs/3.webp": "cfb28f3afa760e720bd2c7018c1a1159",
"assets/assets/imgs/4.webp": "e1d710af22c7315c75e9aa865489cc50",
"assets/assets/imgs/5.webp": "f43b80600ecc0f66eac9b2ca7e684849",
"assets/assets/imgs/6.webp": "9618be5a868ab4c29c8d4ce6b158da6a",
"assets/assets/imgs/7.webp": "4f3cc26b48d1d618e7fff9be05d5ae57",
"assets/assets/imgs/addProduct.png": "5c4aca73b3dcb7cf5c09bceeadb33672",
"assets/assets/imgs/ahnaf.jpg": "267c9d5037dd48d9dfbe21c45e5b3c78",
"assets/assets/imgs/ai.png": "0e9416936607d501ba85fbe69aad962f",
"assets/assets/imgs/dart.png": "53ad3769f6d6f51f75fd3bcab2843cd4",
"assets/assets/imgs/figma.png": "4f0ef24abbc6529022ba0776f33bab4b",
"assets/assets/imgs/flash.png": "daca119176b2502514ace069d41f2e5b",
"assets/assets/imgs/logo.png": "8141019d7caec753b72933ed8f8fa696",
"assets/assets/imgs/orderInfo.png": "507f1ae2e5bbf72c8df52ac0152fce1b",
"assets/assets/imgs/orderlist.png": "c374aef52d84849ff631577aa7c03941",
"assets/assets/imgs/ps.png": "9ceaba69b7a9f89158ff953107978f3e",
"assets/FontManifest.json": "e4a433a32d2544f0837158a33989071e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "34b7edf6ddf27749173576160b69d862",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "b62641afc9ab487008e996a5c5865e56",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/android-icon-144x144.png": "22d55eb2e8aee99ec3f3316b959eda1b",
"icons/android-icon-192x192.png": "9879730e75e6c3418e3931e11fbb6c6a",
"icons/android-icon-36x36.png": "20c73d6d97ffd7f0b24c5c0ccf9077e3",
"icons/android-icon-48x48.png": "665358c20431331201653f6394e86995",
"icons/android-icon-72x72.png": "35a7890f69c1a1eb64486559734b03ce",
"icons/android-icon-96x96.png": "017db8199c47dc488c0cafdf627c1517",
"icons/apple-icon-114x114.png": "bbcd7fd348165c80a718b31e445c0322",
"icons/apple-icon-120x120.png": "8d9e14810051489bf3ee8a17731df1d7",
"icons/apple-icon-144x144.png": "22d55eb2e8aee99ec3f3316b959eda1b",
"icons/apple-icon-152x152.png": "34c5a1fe29149c1927d8d1922421d1b4",
"icons/apple-icon-180x180.png": "c2d379aa05587f7b96feb253d20d4490",
"icons/apple-icon-57x57.png": "6edbe2758a6e29b905c27b58eb2a344b",
"icons/apple-icon-60x60.png": "415358a433b31a9353cfd3fc5b21704c",
"icons/apple-icon-72x72.png": "35a7890f69c1a1eb64486559734b03ce",
"icons/apple-icon-76x76.png": "a34041a5071e9b6bf49d8705c3fc9dd2",
"icons/apple-icon-precomposed.png": "db7dc430696c116f4ed3de365681a530",
"icons/apple-icon.png": "db7dc430696c116f4ed3de365681a530",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "88020002500fb2bf1f4e12f4b978440c",
"icons/favicon-32x32.png": "c2a2799da5efa757c97abf8931e70148",
"icons/favicon-96x96.png": "017db8199c47dc488c0cafdf627c1517",
"icons/favicon.ico": "cbeff0ef94cefdf5558454585d461cc9",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "22d55eb2e8aee99ec3f3316b959eda1b",
"icons/ms-icon-150x150.png": "4a6ce52d61c852f273d94b563225c775",
"icons/ms-icon-310x310.png": "abd6e0aab71c7391bae64c5bf4da388d",
"icons/ms-icon-70x70.png": "a63c23b0f8da481b6db20007991fdd87",
"index.html": "82e7f6c4826d50abfdccbb07f463108c",
"/": "82e7f6c4826d50abfdccbb07f463108c",
"main.dart.js": "cc035801ea8ec73fcd95b3bda756a198",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"splash/img/dark-1x.png": "76048b158ac017cec3878710997fed09",
"splash/img/dark-2x.png": "e63e362c3ea73832294fc5cab0988605",
"splash/img/dark-3x.png": "d7a54351dfa2197198dabfea689ed1c8",
"splash/img/dark-4x.png": "a0e76129fa3fe3e8be3abd468d412f57",
"splash/img/light-1x.png": "76048b158ac017cec3878710997fed09",
"splash/img/light-2x.png": "e63e362c3ea73832294fc5cab0988605",
"splash/img/light-3x.png": "d7a54351dfa2197198dabfea689ed1c8",
"splash/img/light-4x.png": "a0e76129fa3fe3e8be3abd468d412f57",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "882b8f864fb3871aa4d82f1549988547",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
