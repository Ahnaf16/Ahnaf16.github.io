'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "951e1ca9dac943c44d78d098c6a63e1b",
".git/config": "c6203bdf45bdff704334bc4faab1d0de",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c161c962f8101a865a3840ebb9118f2b",
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
".git/index": "6c37a9e424d2d78034db284c8656a942",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7289b0a001cfe44d3c3b629fe8e583ec",
".git/logs/refs/heads/main": "7289b0a001cfe44d3c3b629fe8e583ec",
".git/logs/refs/remotes/origin/HEAD": "5f24a605d55cb93792f84b615d3ea8d3",
".git/logs/refs/remotes/origin/main": "3cd4984d882ccbac70227d18d5a648be",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/03/959cfb89ea43b4f8800ac460d2843673a0f1ca": "bd09b13973f6236082787b38fc82e930",
".git/objects/06/beb250e143c82de249cfcbd87c15e710f26ce7": "4e30df1438199b7545beeb0f923c89fb",
".git/objects/13/e5f168ac056206de8d66237215244f615c698b": "2701d2078eafffe98ef4f7a74f3ba5ac",
".git/objects/1d/e92e21a3688fb31926694eb071ec656d22a0b2": "30174cba6e025bfdc4fac85c558747bb",
".git/objects/2f/7ef2399d786879288df6c34c6ace4f4c9baca7": "786e76f34e0bd7ed99f5681aa4959b30",
".git/objects/37/f34541fe2994bbe535f4a84ef1bb7b7cc4a33e": "9053939a509f0497f12fe645e60b184f",
".git/objects/3a/0f8afff3a85425166cb47ca635853933131da7": "9254f565aa3af5c36347354b42242d6b",
".git/objects/42/17a5c41b0f24d4bba3b8b00208e28cc8b64362": "2d2728e5949c980eea402c5c49ca3ed3",
".git/objects/43/065b98f79be08a1565e46fe290fda50addd097": "62222bb91e9fa68b12a60a721c319c64",
".git/objects/4b/d308cfd6a6f1943ef8f496e3d2bc237237dc6b": "7fedbfb63b76fe47a712d0d32ec5294d",
".git/objects/53/b186caf661f08d655f65450209729ece29f713": "ef4b5d6baf464057eca9f5ad29ac70a3",
".git/objects/5e/2340d35d7908c614b777c4480965067c7695db": "f3796b3bb2099ccd1fe27a8e4034e53c",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/77/6ee8a6951e0f1e6d73f10533eccaefe7822772": "5cf080511a7710ffd4a4b24f0571b6b6",
".git/objects/86/5d51269ab13eb67a3a63557bcbc15e53f14c57": "2150a5ec34b7e7646389e777109e950a",
".git/objects/87/e7cee225cb32e1b89156a159b83b85bba37402": "35e3573a1b1350ae5d9cbffb59443b45",
".git/objects/b2/3724d56b58ebd3de8b457a5aabd336459f1747": "a02ad82b28e739118c3b45cc051d023f",
".git/objects/c4/6d41613b6d99e508ba197b305eaaa74f894772": "d7c42dbdc63d1e0b9fbbf3a550d35e50",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e1/d8c0a62ea2bdb4acac9bc0477ceae2c5cab2f6": "2bc2984fd1648a0287287aad16dd0125",
".git/objects/e2/04dd39cc14e42f584caf5a6b34f8f3d76c3c98": "b845e8335ebb3a734246aa0f710191ad",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f5/24d86559fd9bf669b812f52bf618c9cdf537b0": "82dac6fd4139a8add4351680719f0ed0",
".git/objects/pack/pack-93d47ef3c919ccd3085377da4a4d6b664e7106af.idx": "bbb5f5abbc2baa345b92bbca7e476212",
".git/objects/pack/pack-93d47ef3c919ccd3085377da4a4d6b664e7106af.pack": "fa3f9c40bf63a114a63ec54811c99565",
".git/packed-refs": "295aa45d221e6cdec295853724833cd0",
".git/refs/heads/main": "f2390f2b701a507b02cc1dfe47dca4a4",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "f2390f2b701a507b02cc1dfe47dca4a4",
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
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/android-icon-144x144.png": "1e777f4d1f7a131fe344e77fd886a819",
"icons/android-icon-192x192.png": "dcd6d358255354774abd7b2783f9e8fa",
"icons/android-icon-36x36.png": "f6a5edcb9a8e038152559e0f0745a631",
"icons/android-icon-48x48.png": "b0a4d9c0447d32f1b31518b9325d45de",
"icons/android-icon-72x72.png": "2ec32815ab8d6d7695ca552aa3e56af8",
"icons/android-icon-96x96.png": "8698f2884d40dbac5bde60a8075fe5ea",
"icons/apple-icon-114x114.png": "36dfef8fd5e51d08468b8f6d73ee0d9d",
"icons/apple-icon-120x120.png": "2ef53bc4407e31e283f6ca9de328c79b",
"icons/apple-icon-144x144.png": "1e777f4d1f7a131fe344e77fd886a819",
"icons/apple-icon-152x152.png": "720da0154430278a6380735777cded74",
"icons/apple-icon-180x180.png": "e6e87a36c30732ab3881ffbfedb092e0",
"icons/apple-icon-57x57.png": "969e8f08ed583d8ee44119720da02948",
"icons/apple-icon-60x60.png": "614627d4f6fe9a2dc72a6851c3f617aa",
"icons/apple-icon-72x72.png": "2ec32815ab8d6d7695ca552aa3e56af8",
"icons/apple-icon-76x76.png": "31f24998ee8156f6d8241ca00dfeaa73",
"icons/apple-icon-precomposed.png": "04a7adaa8abe9b4f51c2017dca41a420",
"icons/apple-icon.png": "04a7adaa8abe9b4f51c2017dca41a420",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "3d4f3ce598f87110c76d363025f0eb37",
"icons/favicon-32x32.png": "613fc585a54c0efdad58a315ddf18703",
"icons/favicon-96x96.png": "8698f2884d40dbac5bde60a8075fe5ea",
"icons/favicon.ico": "a7da8ff1d90af95c7bc492d499f32bbd",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "1e777f4d1f7a131fe344e77fd886a819",
"icons/ms-icon-150x150.png": "06f1909cc7b692634a405ba4c67fa4aa",
"icons/ms-icon-310x310.png": "7e1eccd3236e8c4ee8fd80acb6d87b10",
"icons/ms-icon-70x70.png": "748851943f0d7fe0f730930509b16710",
"index.html": "249709b2d29cf9fba84619c9cc1333a7",
"/": "249709b2d29cf9fba84619c9cc1333a7",
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
