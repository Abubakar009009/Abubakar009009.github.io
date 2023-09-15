'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "cac4213c59c0c0c219f72739c86a61a9",
"assets/AssetManifest.smcbin": "35ec68c091b0df859e6957c8fc70ceff",
"assets/assets/images/appdev.png": "0534ac7ec9bad73ddaf6f6a52ca572e0",
"assets/assets/images/backgroundimage.jpeg": "2301a8c624896f52e35ff74d93501e79",
"assets/assets/images/backmail.jpg": "b9ce5dca18fa50ab9b29d194d89024a8",
"assets/assets/images/chatapp.png": "ed7a7f38e8646162a86acc6515416645",
"assets/assets/images/csharp.png": "1357360971121bae9a323e464dfc85f4",
"assets/assets/images/dart.png": "8e69edcacac82a4bc00e8156b2a848c6",
"assets/assets/images/dart02.png": "4b3411dcfc5af6c1e6406e44792bac1e",
"assets/assets/images/data.png": "5e19a08444c8872ec77d89984e06b9dd",
"assets/assets/images/developer.png": "3967528c7903afad7a72724313f441f3",
"assets/assets/images/ecommerence.png": "49aa6f21c4c6cfc2f8848cbe054eded4",
"assets/assets/images/game-development.png": "1f6eb456679ab12260e242f34033c733",
"assets/assets/images/github.png": "84597e4c4151e7ea8339f3c1568e82e4",
"assets/assets/images/image.png": "085aeceae4f51a202a466d9855e72d1b",
"assets/assets/images/instagram.png": "1be561f0c670fe46c77e96faf94262b8",
"assets/assets/images/iosicon.png": "d701a75abe30177f909acbe5cfb21d4c",
"assets/assets/images/java.png": "74e943d82452f81f6a0bb0b51ac6785d",
"assets/assets/images/linkedin.png": "73f7b2c95e09a9ac1c93922dd1cf6801",
"assets/assets/images/mailbackground.jpg": "9eddb6dd5ad991d582ca18aed40afcd4",
"assets/assets/images/manjumping.jpg": "002ff6e9b06273fb5b0a810e87ab0a7c",
"assets/assets/images/mansitting.jpg": "7c4246810c276b8f603c01aead8acc35",
"assets/assets/images/messageback.jpg": "c485da9987a223700de58a5c83d4fc76",
"assets/assets/images/myprofile01.jpg": "9b0c0c6af2cc2ad2e438aa399c4feb00",
"assets/assets/images/myprofile02.jpg": "c1c75e91bd8d35addc350ce97254b396",
"assets/assets/images/news.png": "5565b6d1e933fc42fc700877a4f21d99",
"assets/assets/images/people.png": "586018ee40e0eb9efe30faa711319300",
"assets/assets/images/projecticon.png": "bd7d127c3c9d3ba9ef5200cf6bf0a01f",
"assets/assets/images/pyhton.png": "f3cf86229b360a9cbbac567a6065366c",
"assets/assets/images/travelapp.jpeg": "f2d97175d4a67d2c34931871eced8337",
"assets/assets/images/working.png": "5bfb28ab533677833d23c65281337830",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "e21829aae420cb06b4e7c9951b42a151",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f06dfeddfe0e2ab032b70af5ef8f7a33",
"/": "f06dfeddfe0e2ab032b70af5ef8f7a33",
"main.dart.js": "5435b359a234ca41068578f9dd71b20f",
"manifest.json": "77dd4fa8b09b0353a4e9d22c7179feee",
"version.json": "181024bfbb1aa9cd2e5366a9ee83ebb5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
