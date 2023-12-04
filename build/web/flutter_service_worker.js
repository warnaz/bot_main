'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "ef69d84060a15df61e25cb57bae23111",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"version.json": "25cbdb0416a1e38c6ca3d7b0ca72941d",
"manifest.json": "2ed9c6e748ee566d7e84ef4530531ec8",
"index.html": "9d74300c7a942967e22f4eeed91db41a",
"/": "9d74300c7a942967e22f4eeed91db41a",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.json": "b985570686883af4380011d47a8ade8e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/FontManifest.json": "1eb4fce862c4198c3fb6075dae8e3dea",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/NOTICES": "2cfe872e25e9e696ec3822c705f5fce3",
"assets/fonts/MaterialIcons-Regular.otf": "65e21b5db78a7c132bbb04776ec9c399",
"assets/fonts/Wadik.otf": "319aea7c2e0f2d453d66622ac3728771",
"assets/AssetManifest.bin": "1d94df84f2e225c75b9ca90718a33605",
"assets/assets/menu_ref.svg": "1bcaa8fb483171229d48d127e1fbac52",
"assets/assets/check.svg": "a9c2d938cb2aa1e44c16c12c3dd7bc89",
"assets/assets/VectorWhite.png": "0614251c21606bdc5d7d443754afc8bd",
"assets/assets/CaretLeft.png": "761b8ee707622a766ccaa7b5e9dc6101",
"assets/assets/setting.png": "5c349846035e719f9c7fd2f29e3f8d3a",
"assets/assets/main.svg": "948d1990ae19d461ecde2bab99b0ac13",
"assets/assets/menu_acc.svg": "b47386f6772c84e8f2a780c398dd3438",
"assets/assets/menu_support.svg": "39666837ba92cde6b1df114083d8ea8b",
"assets/assets/zr.svg": "687b993b493e2a77a470b62c0408baaf",
"assets/assets/Vector.png": "795f71143ec23e2ba9e2f0f81652d480",
"assets/assets/menu_main.svg": "bfbe0a761c65d010d8b8f39ed2fa06d9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/6a/ce3486e5208c71238183062fa5d1d1b099c6d4": "e51da5cb7b91324b79a79e57fd0036bb",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/2a/585091a466afd03469a38fd47a2c2f5da86b87": "3102889942f844e2944d196218f80b1d",
".git/objects/d1/7b3035cd70df41af4f090d5f64fa549e948843": "98e4ab6342945d58dba54d463be8c7eb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/05687fbcd3da462a6c76feaad9c29278a4b7db": "57b94e35bac4abf71b825d2d14a4e22b",
".git/objects/22/ff1b285d2d5a8ce9b35eab48c028e930acf29f": "2e6fb2bd971a4be22f636f6909580a0e",
".git/objects/e6/245acb4dde146772e4a67e50103aa7dfa9889a": "fe81b76fb8f07e03e2cbcc4ebe923255",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/c8/969d15fc7366975732d28161f4a9798dcfc566": "ad8d7e078dc7cfa43cfad0eda6309a17",
".git/objects/d8/e5326e3c8a42afe5f9952e83509a82fca33663": "28a8166025fbf6b42bc9072eca4d0119",
".git/objects/b2/42bb70fdbdde2615e8c604e386e237d60b06df": "cd379f001fe4cb3ff8379c348b89ae21",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/f0/3bacf02d9d620ef457dc96a7ee19cb8bc4d80f": "d00d219c0ebf5e43fac96ac8843af0d9",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/7c/6d68f24628c1d06a1e91dc8b49a48801a90df1": "acbf0bf8a51ac519944cfca8317e37e6",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/30/8db87ab2f2c1fd32e5a703fe3972bc1e9fa7bd": "8737e4efae5b5f4e9111886414ab340d",
".git/objects/01/26766780d78633568df9d5f4a31a0521cb63d6": "e338c7a750cc6ba43af99bce59fd7978",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/101a627b415c113ecc0768f6bfd1f08d0adeb7": "15a05a1f19db15df1fca606bcd424b80",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/2f/2e22b60a072d0e83265505e7667d0280c0bdfa": "d31435eaf6ed6171ac6d0bfa84885703",
".git/objects/2d/32dfaccd5d2397d944999a8cd08ef3f6f16c90": "cff43af665d01ea37dbdd1a942efda80",
".git/objects/55/4fe2e62831fb9d223a6a51b8995332cc1e2a7a": "b2d12b29ba24a0b526445feed9f14e5f",
".git/objects/83/5032f5bd5a0f7d4bd920fb04e0fb90147f4041": "67b6f67f26435612f6870c0db6d28def",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/8e/d8a494ef68c980cdf4afc6307f3326c189674a": "83096ff5b36f688b16b25d973dc0b63b",
".git/objects/9f/fcb93511b1a97292a3e61394f3d2ecac796a7f": "fc7023ef2af7a06d2873069046d9e8be",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/de/dc5bae3621f179650ad86ae53434d6863b73a9": "f82a27740f5d95aef1c7874989e9cabc",
".git/objects/20/82d08b057718ba291fd96eecda848a369a516e": "56040bfad876ab0fc2bf24e2621426a5",
".git/objects/b9/5b0586df78a117cbd5106e7963d434304107ad": "1d17c3dcddbaa213d5642f8127d19676",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/59/d7ad55596e92a81443e2fae99bfe2d3256c622": "fdc685fc13b33454eb71552801156f48",
".git/objects/03/57753f185ba49d93bce78bac5cb2925c6e5305": "a17892873cb8ac5dc2741f468e5f9d53",
".git/objects/0e/669b4e07cc778d40da127db56bf6a66473a192": "57bca735df19c8804721293af09e5812",
".git/objects/50/c5194b273385c019cea905d262e0bed7e0fc49": "43e684042a236763a2a8d33ee8b9ddca",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/7a/3f17fcfa98f3459c9057e13f04f170c7ea2a5c": "2e1f639a341590ccd6c7d77d2d1dac59",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/2b/4eb44968c417af4ac4431fe85b65913bfe532f": "b5471c62f8944b71c37cf62e356bd32e",
".git/objects/b0/5de73ff3d479e00272b78a616680e09c619d68": "0a8633a046abe4bd218cc9ea77f3635a",
".git/objects/f5/ea8c8411a48a6c3769155895492c47730a6271": "7cf06e82fe4c2851a4a94a7330da6dae",
".git/objects/33/d8354633c4e23f4d0fd1367bb5e130821ff967": "5fcd8bcf8e06ba86ca383554a4d75e0d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/f6/7ab95954354a0df6d34ef7a882a60b10d68038": "3ce1370a30cf71d42b23162f88e5f4ce",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3f/ca02490daf34cfca1b4238c9535153bec6dbd6": "088e9cb92524b4ea9b6906bd1f99c726",
".git/objects/fa/7557963034514995eaaea66561888cc99a0fe8": "211087e6c144d7afbaf83d5e63183321",
".git/objects/36/706f871de74b71ca986981bc9a0d822128a94b": "5374a69dce8d2a63368964675f513517",
".git/objects/54/0bec4783ef796feea227a400abd7d698b23a69": "caa50a7197656e71a758712874105e72",
".git/objects/25/30c83a99bf2c045f3e1c728d3ee9709a89cb57": "e8d76b3f4efdb11894c28aa43b994b4a",
".git/objects/e3/842892d44baa37df8307f1f9a5d590c2cbe548": "6131db33b189ea91bbccb7f37aab622b",
".git/objects/8b/779d2e79a3abe8010950da6752e2524def17cf": "866a17789bc12434e53d7b5b05f93ba8",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a8/d5f936b0e5c809c8279486433b8322939cece4": "f661bd6a15fbeedc063399272eddd9cc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/remotes/origin/main": "d8688c894d7491a20d7daaab14ab6a86",
".git/refs/heads/main": "d8688c894d7491a20d7daaab14ab6a86",
".git/index": "d34ddbe100e946adedf52e720a76e847",
".git/config": "2524e0380a49326a5dc0aadc05e02a94",
".git/logs/HEAD": "09b4f9c74b5a1557f1127c6742a2f641",
".git/logs/refs/remotes/origin/main": "12463ee7a9956f4fa5f1344ba027a456",
".git/logs/refs/heads/main": "a995827ebc76e2bffb2ff0c68adafab1",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "694db48583a5faa94f3a8da5ac9a53d5"};
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
