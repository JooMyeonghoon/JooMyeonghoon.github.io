'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "03a6ecc1dbc74cfaacfeb8b1f09b8998",
".git/config": "d483df789b2c9aab92b8e7a69b323fc2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f4249b7d98ef19cab722531c3c349631",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5797a683135dfb2ed511368b02fea871",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aa2754e782d960607862df508c713202",
".git/logs/refs/heads/main": "aa2754e782d960607862df508c713202",
".git/logs/refs/remotes/origin/HEAD": "795c72a83a93f076710d942676916e51",
".git/logs/refs/remotes/origin/main": "7d531bc572952c2e9b0636ec5acd06d0",
".git/objects/03/6c63655c7ce1e35a03ddaddee883593eb47b2f": "657e1f8cb449528fc4bfe0d1b1a31a4e",
".git/objects/07/d98fa8f849afb410249d2255cbc8f4e545b07f": "f4150227c5397f81cc8f76b40b0db026",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0b/55c0885e877c4de6c5a9b74991bc2b495b03af": "1e53c13c1628f55436016c81d0547e70",
".git/objects/0f/399ceabe5d44ee14b7d1d703a3cb911f9e27ad": "a34df1126ba0c2e7221e470c4725549b",
".git/objects/11/1903bb59423d4903abd56dc6594c5f37e300a5": "84b24ffe8bd16e00d98a55b40b55c173",
".git/objects/16/94345aedf2c498e94644dc118971dee2ff51fc": "f21f8ed635f2eddc1b7342def446d74b",
".git/objects/19/5f0331c00dff733ed20f41e0622da2ff54f80b": "e807025dbe220e3bc1c297fd71364288",
".git/objects/1a/b4e98bd35c52bee1a0b88b410fa1636f41631b": "6f33829a35e5a51611694835b1694bd1",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/8dec42ce1bdb9b20bd87346ffac67c22d49058": "4c01e71662117572ded8a1d866bc8e81",
".git/objects/23/df157b2f876c3cd43a55110d6f6c9c69ffdb9a": "1f5bb7aa670c175e2f3a26cb1cff7d20",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/30/ffe747fcec798a21b77fc528bed4ce4869a599": "e6a99df0e5df9b20e660aef616739943",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/36/bbddc71fc088636aaed72249463fe4dd146886": "348c46e32f19d5548fddc40880286087",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/ee14b298267ff0584a979c920ad67d794b5582": "2b99a4f21a5841007b7f9ea2ae924563",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/48/4b1a55cc7c9771948129d691380bd57ba26ee1": "d52e85c45b0f829e051dd587f9ed1efc",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/65651505c140fab0384b1ea0d8af9a7b187b5f": "dfdc31b9d020afd5ceadea69505f49eb",
".git/objects/4d/93f0ef1d080886d2d9398b30d83c1ed7c9b118": "76a572bf9fdc98aad1e3b761b8d1515d",
".git/objects/4d/fcc4d01c94ad26702fedce2e6dc6abfcf9f1f5": "4212f7d28ef799b7a7d225b713080a6e",
".git/objects/56/916ebd38cdb0d21e6e3c2a088685f42b006ab0": "c86f9fdc8504122f502deffedda8ea3a",
".git/objects/61/b31f57d32ad9a05cfe8dfbf108142c2892a88c": "8ff763e96d50310a46ea86a298c45e18",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/72/49e3c12b980e01a3a2ab5cc88d73f1490ceef5": "5a47486ae8acb1581c5891f815c6ab37",
".git/objects/78/a2b71b2662a9746d848ff26c16d90e4ea52816": "3530f3cba9b15e404a5a8dc8f8b668d4",
".git/objects/7a/69d4dc5998db0555930d121942c37f655a4a89": "8dcd1a66bf223ff3495c7fc7adea7724",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7f/0cf24e8fa09b7c1d98be620bdc57178569349b": "e8256751e9d3b89934dc4eca66b99164",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8a/49cf4b296f40088b4bf0b0dfdb85abc5a91f64": "79706d78ab70f9d05d5f9bc5339d5aed",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/95/af6ce7734eccbee50977508d9784995d426bb4": "ffbda64cfa4c00323215c0801e2817aa",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9d/a95f19d36359a6b2bcd4c4aad3def26aca4974": "6b13ea468f1ce3de81244c39a8a32600",
".git/objects/9d/f6b43535f5fbb44a5612728457ef9333bcad4a": "022772bb178ddabe0b589c5ac7798bd8",
".git/objects/9e/9d2296d0cf23e3c876dc6f4af18290b8661fa9": "8473baa1b37398049576c7d5b49e1e91",
".git/objects/a1/b9880ed50107aa9db2eaf6f0d2b0c3548c5635": "3d9dd8c15376c4a6a29b713acb76a9a3",
".git/objects/a1/f4a475700524bad9d7c109208a0147ad7410ad": "8d0224cf93aa07e559fca88d679f670a",
".git/objects/ab/eb455a2f8380ac6178ada4690410c03c44462d": "824dcb59e75b2364f561e9aa4a1448db",
".git/objects/ac/5880513d70d712451725f8fe5968d115af2a5a": "9365f05047c8d4276724ec6b3d718e8f",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/5cb1a1870398d8d1ffa19942264d17af4e59c6": "293d856587fc7b8b62cc800c5e992f65",
".git/objects/b7/0ff429f697d61487633c77fa86a11232e15596": "c71def08094a5d0bd8f9f3c1329a4a8e",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/aab204642d5c138ae541048e67bc969c1cee2d": "efff14ecf7e2de47b62c6b03163fae47",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c3/5211d1861fc6f54eec8120731da9a991f8dabf": "ccfc3389662b74383f25ed625454f102",
".git/objects/c5/d88709482010a0bc6676fbe750988f4fc3d599": "41c51baf990cb6e56fd13d3e6d814b86",
".git/objects/c7/c568f389b49b930edf2496563d04cde593db40": "9bece72b3880762bfb407afcfafaeedb",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/719770d609fb46e2647f7d1fbe310611093896": "4856bc24f13b6d3eeb920e94dba1136e",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/e3a179babf7a04ebf48cea7f8b958afb1e52ca": "68f123cdebe4698fe91ddbc9263decd5",
".git/objects/da/f2f814f401aace8e85023fad684b58cb8672ba": "882a4e143d88656046f7b059e4c16e2e",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/df/2588607272d06200c36a41974a5bc7b2828c63": "93d1e3f7a1efcbb34396453aea67698c",
".git/objects/e4/6b2ebd00c1c6b540892a24c16d9ba30984acb2": "11fc62f982f7dbe47200d2fc5190343a",
".git/objects/e8/3534a449a16ec7a88d09a0515896d3ee3bd054": "320c65235fbc7c416bbe56eb78935309",
".git/objects/e9/ecf1bfb57d697b6a5d44b39444cd79876079b2": "d3c35454ea140788a9fa13048f7d273c",
".git/objects/ed/34b05692d221e8a129e3a22ee4861c54c75a3e": "c7746c2930c4c71c94ad7ba25110af99",
".git/objects/ee/107ac7734bed140a3ecd947c77191c7d1eebf6": "ad2f90ac5321def751e04e594cc1d154",
".git/objects/fa/a1409f55d5234c2c7fd86d8cb39dce5590967c": "331fe680d7f9ab01e385670ab64fb34b",
".git/objects/fb/3edf5606b83cc7b0bcbc3e44f604493188084d": "1a02dac9f57f0ddafa4a5e9fa32e9b5b",
".git/objects/fe/3735f2267f9d6ae085f6f3dff85c80d7199e43": "2ebc6188557ba716487cb583a8c1f50d",
".git/objects/fe/fe7339d7612a56cf3d3efe38d5e4c07161a516": "e4698d413fa46dd280a815d1a068b992",
".git/objects/pack/pack-48b6b5d32983a398c2c73e88056cd6fa91dd991c.idx": "646c4beb1abf6bccc5a83374c3d65415",
".git/objects/pack/pack-48b6b5d32983a398c2c73e88056cd6fa91dd991c.pack": "2173fb43a30bc75f32e31888e6463c4d",
".git/objects/pack/pack-48b6b5d32983a398c2c73e88056cd6fa91dd991c.rev": "98749cdb91d1da26d27f5f5b1febc0de",
".git/packed-refs": "d25ecf1c27c039077962724041a64596",
".git/refs/heads/main": "0fede1627df3c9d5d9bb1fa6f8a1b4da",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "0fede1627df3c9d5d9bb1fa6f8a1b4da",
".git/sourcetreeconfig.json": "f051a7ff421257e25e4339c04493ee18",
"assets/AssetManifest.bin": "be75d9f30cfd933c3147d26237b839e6",
"assets/AssetManifest.bin.json": "524bfd773a2f018f7bf498cebf60ceec",
"assets/AssetManifest.json": "5ac54d3f18565453b77aec001dafbfa6",
"assets/assets/fonts/Eulyoo1945-Regular.ttf": "4d7e70024953b25dfd6f2d802b565451",
"assets/assets/fonts/Eulyoo1945-SemiBold.ttf": "6eb7b7014fa12610d070261219bed157",
"assets/assets/img/1.jpg": "3be068c3200fdfa4a919387be3a5811f",
"assets/assets/img/1702790248169.jpg": "1f77fb3a0f099a4692a35051ebad7dd5",
"assets/assets/img/1702790248367.jpg": "e4813fb79bec8e05f9bb50913e795727",
"assets/assets/img/2.jpg": "6c8ffc49e16856bbd029d4228c563f4a",
"assets/assets/img/3.jpeg": "9361ab850925143301a35347df4aec95",
"assets/assets/img/4.jpeg": "0ac5a54153b2cc0f78aef294c907f382",
"assets/assets/img/5.jpg": "7165d6d4e89fb8db6e431e06e3227fca",
"assets/assets/img/6.jpeg": "db8969741cae3c0c79fde79ff248e723",
"assets/assets/img/map.png": "7f8b9de3cfdc9c931b2e166208886e65",
"assets/assets/img/map2.png": "b6da734bafb42865ae0995674f517005",
"assets/assets/img/traffic.png": "1c557b1da33d97bf2eb7b48c8450802a",
"assets/assets/img/welcome.jpg": "e39e4f1d5d2da2659aefebb6cf682acb",
"assets/FontManifest.json": "064e40316803472112ca99267e37b556",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/img/1.jpg": "3be068c3200fdfa4a919387be3a5811f",
"assets/img/1702790248169.jpg": "1f77fb3a0f099a4692a35051ebad7dd5",
"assets/img/1702790248367.jpg": "e4813fb79bec8e05f9bb50913e795727",
"assets/img/2.jpg": "6c8ffc49e16856bbd029d4228c563f4a",
"assets/img/3.jpeg": "9361ab850925143301a35347df4aec95",
"assets/img/4.jpeg": "0ac5a54153b2cc0f78aef294c907f382",
"assets/img/5.jpg": "7165d6d4e89fb8db6e431e06e3227fca",
"assets/img/6.jpeg": "db8969741cae3c0c79fde79ff248e723",
"assets/img/map.png": "7f8b9de3cfdc9c931b2e166208886e65",
"assets/img/map2.png": "b6da734bafb42865ae0995674f517005",
"assets/img/traffic.png": "1c557b1da33d97bf2eb7b48c8450802a",
"assets/img/welcome.jpg": "e39e4f1d5d2da2659aefebb6cf682acb",
"assets/NOTICES": "ad3df60aa62a9e58cf61231af4fc7fec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "78730cd4390d44ff86289acbb5c654ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "04fbc3b92a1330b5c18fd80b64c089c6",
"/": "04fbc3b92a1330b5c18fd80b64c089c6",
"main.dart.js": "0e5e1efcbd74a5369466a677cd4da155",
"manifest.json": "6f4e818e32a7192f3e7955399979140e",
"version.json": "fa62a0f385fd246e09c15612da75b2b8"};
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
