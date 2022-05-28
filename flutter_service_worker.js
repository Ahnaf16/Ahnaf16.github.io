'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2bedb13837e85a2bff8d110f104d3450",
".git/config": "c6203bdf45bdff704334bc4faab1d0de",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "33331b5344e7f288f43f468b825af6c9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c0bd3da747586c9dbc5a7509fe562c46",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0e2866db1b799783ea48fcede1f81557",
".git/logs/refs/heads/main": "0e2866db1b799783ea48fcede1f81557",
".git/logs/refs/remotes/origin/HEAD": "5f24a605d55cb93792f84b615d3ea8d3",
".git/logs/refs/remotes/origin/main": "5566efa51ccf1678d034272dfd5b45e1",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/1d/e92e21a3688fb31926694eb071ec656d22a0b2": "30174cba6e025bfdc4fac85c558747bb",
".git/objects/37/f34541fe2994bbe535f4a84ef1bb7b7cc4a33e": "9053939a509f0497f12fe645e60b184f",
".git/objects/42/17a5c41b0f24d4bba3b8b00208e28cc8b64362": "2d2728e5949c980eea402c5c49ca3ed3",
".git/objects/4b/d308cfd6a6f1943ef8f496e3d2bc237237dc6b": "7fedbfb63b76fe47a712d0d32ec5294d",
".git/objects/5e/2340d35d7908c614b777c4480965067c7695db": "f3796b3bb2099ccd1fe27a8e4034e53c",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/87/e7cee225cb32e1b89156a159b83b85bba37402": "35e3573a1b1350ae5d9cbffb59443b45",
".git/objects/b2/3724d56b58ebd3de8b457a5aabd336459f1747": "a02ad82b28e739118c3b45cc051d023f",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/f5/24d86559fd9bf669b812f52bf618c9cdf537b0": "82dac6fd4139a8add4351680719f0ed0",
".git/objects/pack/pack-93d47ef3c919ccd3085377da4a4d6b664e7106af.idx": "bbb5f5abbc2baa345b92bbca7e476212",
".git/objects/pack/pack-93d47ef3c919ccd3085377da4a4d6b664e7106af.pack": "fa3f9c40bf63a114a63ec54811c99565",
".git/packed-refs": "295aa45d221e6cdec295853724833cd0",
".git/refs/heads/main": "6e7709ecb382186e20d3234999d1164d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "6e7709ecb382186e20d3234999d1164d",
"assets/AssetManifest.json": "3411bb49666be375b60029c2046fb21e",
"assets/assets/font/ShareTechMono-Regular.ttf": "a1cea4ee23cd0a3e68cd6dcc1155613c",
"assets/assets/imgs/1.png": "90d43d6a78402079c62db2eedbca7f43",
"assets/assets/imgs/2.png": "7a4ec93a9a76fb0ae814d35977b6289c",
"assets/assets/imgs/3.png": "e3f9f6fdb1d9ef6c8f3139c14ad9fce0",
"assets/assets/imgs/4.png": "5487eee0c1b2060e9aaa12caa7dafcb9",
"assets/assets/imgs/5.png": "10bf389d4517d3bdd228eff3151e1702",
"assets/assets/imgs/6.png": "7155147aa5348d8251d12c2764418a4b",
"assets/assets/imgs/7.png": "c541d08a687c414b1e6b9c7a17791e64",
"assets/assets/imgs/addProduct.png": "5c4aca73b3dcb7cf5c09bceeadb33672",
"assets/assets/imgs/ahnaf.jpg": "267c9d5037dd48d9dfbe21c45e5b3c78",
"assets/assets/imgs/ai.png": "0e9416936607d501ba85fbe69aad962f",
"assets/assets/imgs/dart.png": "53ad3769f6d6f51f75fd3bcab2843cd4",
"assets/assets/imgs/favicon.png": "89e84d0a2f8fd7bcfbbb8df71a33d3d2",
"assets/assets/imgs/figma%2520b.png": "8063b1d217ce7eac6e45c30b86556466",
"assets/assets/imgs/figma.png": "4f0ef24abbc6529022ba0776f33bab4b",
"assets/assets/imgs/flash.png": "daca119176b2502514ace069d41f2e5b",
"assets/assets/imgs/logo.png": "1188dd695b43f264556f11a8fb221d3e",
"assets/assets/imgs/orderInfo.png": "507f1ae2e5bbf72c8df52ac0152fce1b",
"assets/assets/imgs/orderlist.png": "c374aef52d84849ff631577aa7c03941",
"assets/assets/imgs/ps.png": "9ceaba69b7a9f89158ff953107978f3e",
"assets/assets/imgs/sof.png": "40b275dd78de658f60f05693582adb1d",
"assets/assets/imgs/vscode.png": "a45456c9cfaeda68836178c2f23515b8",
"assets/FontManifest.json": "e4a433a32d2544f0837158a33989071e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "5c69ef219c283acefb8320cd67407f83",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "b62641afc9ab487008e996a5c5865e56",
"canvaskit/canvaskit.js": "3725a0811e16affbef87d783520e61d4",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "491df729e7b715d86fc167feabea031a",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
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
"icons/favicon-16x16.png": "1fac8a7ae98f3e4ad183aad166e1e28d",
"icons/favicon-32x32.png": "c8be20a6810d7b49d0c8ab46073d1009",
"icons/favicon-96x96.png": "25e86109e29dee6ada27f0ba59d0eaad",
"icons/favicon.ico": "5205b7497d19276fe5793ecdcab74955",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "bb1e11699a3fdc9566c1b3a1ec842af3",
"icons/ms-icon-150x150.png": "1933b735a1ca2633cb0ca2a85fdece9c",
"icons/ms-icon-310x310.png": "e08f0783515ce3ef189abf8eab95ee13",
"icons/ms-icon-70x70.png": "7d3dacbf4e108fb4f59e9d0ad619c364",
"index.html": "220ee9aaa44bb0fd31402622bf8c6a36",
"/": "220ee9aaa44bb0fd31402622bf8c6a36",
"main.dart.js": "451693577d14e65fe7c646ad24a1a176",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"README.md": "877e924d35429e3038243549da6f2cbf",
"splash/img/dark-1x.png": "a488c3f9c6693ab4670971fb19bdcb9b",
"splash/img/dark-2x.png": "4dbceae1114d90ca98b697e4fffec643",
"splash/img/dark-3x.png": "8e0e3f81acab4cee5b344ef61e0d0712",
"splash/img/dark-4x.png": "22977b5ad3e53d81f1b79de4d3ccc186",
"splash/img/light-1x.png": "a488c3f9c6693ab4670971fb19bdcb9b",
"splash/img/light-2x.png": "4dbceae1114d90ca98b697e4fffec643",
"splash/img/light-3x.png": "8e0e3f81acab4cee5b344ef61e0d0712",
"splash/img/light-4x.png": "22977b5ad3e53d81f1b79de4d3ccc186",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "882b8f864fb3871aa4d82f1549988547",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
