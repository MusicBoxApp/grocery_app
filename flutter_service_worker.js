'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "07be3db1125f86eaa80e172da841357a",
"assets/AssetManifest.bin.json": "a76d1e581ffca58cd753b601aedcc0f5",
"assets/AssetManifest.json": "8599d7003a018ccbc2df59ae2d29feea",
"assets/assets/fonts/gilroy/Gilroy-Bold.otf": "0f6e082f42f5247d82c3ade9c2a8f928",
"assets/assets/fonts/gilroy/Gilroy-Regular.ttf": "31ff7c1a62a300dbbf9656b4ba14a0d5",
"assets/assets/fonts/gilroy/Gilroy-SemiBold.ttf": "a5cf732b15078843b237bd58f3ed44cd",
"assets/assets/icons/account_icon.svg": "050bf198505a058640776b75526b21a0",
"assets/assets/icons/account_icons/about_icon.svg": "024a8cbba046410c878889b49519ea23",
"assets/assets/icons/account_icons/delivery_icon.svg": "abc776277d93ac27cbccfa99a69e1605",
"assets/assets/icons/account_icons/details_icon.svg": "ec846bc84c77ea4e577152840f9d9c68",
"assets/assets/icons/account_icons/help_icon.svg": "6448de96b9a8b8f8d1d736c1113ad90b",
"assets/assets/icons/account_icons/logout_icon.svg": "62f92181a8a897cee490a2de3631210f",
"assets/assets/icons/account_icons/notification_icon.svg": "8341b61cf67009f516fbc567690a4f09",
"assets/assets/icons/account_icons/orders_icon.svg": "c3ce1730eef16e41b0aaa3e99184fd92",
"assets/assets/icons/account_icons/payment_icon.svg": "d271d1f3e2c2dd6900ba0d3a4fbc2699",
"assets/assets/icons/account_icons/promo_icon.svg": "b979856b9c1e0a604c591fd094840f8f",
"assets/assets/icons/app_icon.svg": "70c6df4ae52c7b73d649d72c5a8e7bcc",
"assets/assets/icons/app_icon_color.svg": "8b764f839c415e3ad1234d230a9dbabd",
"assets/assets/icons/cart_icon.svg": "2d0335789d308b6e20fb1405af3079ce",
"assets/assets/icons/explore_icon.svg": "f199edd6cd3fcd75dc8991ecb28dfd3f",
"assets/assets/icons/favourite_icon.svg": "723263c98b5f137431ee3883867f0ef8",
"assets/assets/icons/location_icon.svg": "80fc62a68756ef27754a55638b3cbd1b",
"assets/assets/icons/order_accepted_icon.svg": "3608e9fef718472b7274f615b90aad87",
"assets/assets/icons/search_icon.svg": "b474aa3145b73d1859f07ef9e3a3fbd1",
"assets/assets/icons/shop_icon.svg": "3aa0f795594c10d071400f02645cb2f0",
"assets/assets/icons/splash_screen_icon.svg": "c06d3ec42e6f85f00c3a13ce5b84e739",
"assets/assets/images/account_image.jpg": "97d58343d1dbfdf11a165d2be3cfec5d",
"assets/assets/images/banner_background.png": "0294141fa07e35f122937705f321a26b",
"assets/assets/images/banner_image.png": "340fb8f1976516980a5a10934483c411",
"assets/assets/images/beverages_images/apple_and_grape_juice.png": "45197bb735464ae596b052acf730339d",
"assets/assets/images/beverages_images/coca_cola.png": "f71d39c43e28d6b82f4d5a966e701b3f",
"assets/assets/images/beverages_images/diet_coke.png": "c93cb95108fad1e2774f8d5a4e17ca57",
"assets/assets/images/beverages_images/orange_juice.png": "93a379d7315aa8d42224a1c513f8b157",
"assets/assets/images/beverages_images/pepsi.png": "c374cecf7664d3688746061faa31ebc9",
"assets/assets/images/beverages_images/sprite.png": "b27abe57d9092f8f17ca0e2c43e610cf",
"assets/assets/images/categories_images/bakery.png": "bf2ffa96a30c3881e0c47cc0aed93601",
"assets/assets/images/categories_images/beverages.png": "e1f34826f21cc2b99c189681748e83a1",
"assets/assets/images/categories_images/dairy.png": "0e848a62e6086b57b9e5805bd2b567d6",
"assets/assets/images/categories_images/fruit.png": "6121583d999d182c10afc19a275be0ea",
"assets/assets/images/categories_images/meat.png": "89149d7a45816f2a4325b03b3595f6de",
"assets/assets/images/categories_images/oil.png": "96fbe4413f208510dece99701efa0f46",
"assets/assets/images/grocery_images/apple.png": "0ac195c1ea076533f671cbdda2fc1e71",
"assets/assets/images/grocery_images/banana.png": "6fdea64b4306e98886129c33527bdec7",
"assets/assets/images/grocery_images/beef.png": "e1f152680d8e5e3cbceccdebce598961",
"assets/assets/images/grocery_images/chicken.png": "dc3752ef1aec6e3c78c64ca94fbc287b",
"assets/assets/images/grocery_images/ginger.png": "9b2f76c03b7a9036ec44649685f7c43b",
"assets/assets/images/grocery_images/pepper.png": "9a9fbea1eb676c76efb057ac5c8a0299",
"assets/assets/images/order_failed_image.png": "a7225a3f5470c2a17da11894749542b3",
"assets/assets/images/pulses.png": "397af0d0d9cc012b7b4cda84149a0ad4",
"assets/assets/images/rise.png": "101386c77ca70f437d9d0d4c0cf822ae",
"assets/assets/images/welcome_image.png": "ba3d8c69b991342d2c080a368734adea",
"assets/FontManifest.json": "7d322c4e0e1795469484081edaadb85e",
"assets/fonts/MaterialIcons-Regular.otf": "f32694557f1824a140c59c5dc5ead9df",
"assets/NOTICES": "8a84a891f3bf11da79501f147feace24",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "1d78ec54976952d9695c343d6bf7da26",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a6d3458117cd54bd9fa4630bd5427e6d",
"/": "a6d3458117cd54bd9fa4630bd5427e6d",
"main.dart.js": "1e6e1f642878c4e6c426c0bd7b43bef3",
"manifest.json": "857d7438891fe081a903fd431d44ce05",
"version.json": "868c6fca6cfa40393c07f0ab75b73b60"};
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
