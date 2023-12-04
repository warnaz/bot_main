'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "c7fa11620ebab1d04a6e64006f018f5a",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "411f776c9a5204d1e466141767f5a8fa",
"canvaskit/chromium/canvaskit.js.symbols": "aa827903660a477d251e8dba03b59a8a",
"canvaskit/chromium/canvaskit.js": "bc979fce6b4b3cc75d54b0d162cafaa7",
"canvaskit/chromium/canvaskit.wasm": "9f249d9e9f2586da273d99ff33356f6c",
"canvaskit/canvaskit.js.symbols": "15066d786d0fefb6bf6b07e90a54b72f",
"canvaskit/canvaskit.js": "321aa0c874f6112cabafc27a74a784b4",
"canvaskit/skwasm.js.symbols": "9f92a7410d7e7817623df1b44f7dd034",
"canvaskit/canvaskit.wasm": "209e2935b87cb67108a2383327092c8b",
"canvaskit/skwasm.wasm": "54112cfd3a0dd75501454de6387e601d",
"version.json": "25cbdb0416a1e38c6ca3d7b0ca72941d",
"manifest.json": "2ed9c6e748ee566d7e84ef4530531ec8",
"index.html": "7b1ce263381095fc2fdcc5674f043b50",
"/": "7b1ce263381095fc2fdcc5674f043b50",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.json": "b985570686883af4380011d47a8ade8e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/FontManifest.json": "1eb4fce862c4198c3fb6075dae8e3dea",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/NOTICES": "58de13827cd1ba012c1093eeb0776e8d",
"assets/fonts/MaterialIcons-Regular.otf": "65e21b5db78a7c132bbb04776ec9c399",
"assets/fonts/Wadik.otf": "319aea7c2e0f2d453d66622ac3728771",
"assets/AssetManifest.bin.json": "a62e42f966dc72e53c4172b4dc4a37fd",
"assets/AssetManifest.smcbin": "e4d95dd5a34fbde8b4276500481c815b",
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
".git/FETCH_HEAD": "ba65f20fe07977dcf77bc89a9199c932",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/ORIG_HEAD": "068417359736f0d7f139a30264b2e1f7",
".git/objects/b7/0818d41ceea1f2c63b181dee7cc24357c7b3b4": "5d687317d45389e6ab9c3d2da43a48ee",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/6a/ce3486e5208c71238183062fa5d1d1b099c6d4": "e51da5cb7b91324b79a79e57fd0036bb",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/2a/585091a466afd03469a38fd47a2c2f5da86b87": "3102889942f844e2944d196218f80b1d",
".git/objects/d1/7b3035cd70df41af4f090d5f64fa549e948843": "98e4ab6342945d58dba54d463be8c7eb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/cc77a33499023935a2afbb46940b53401a0303": "63c7b189a1b51db64a889f574c8e6b8b",
".git/objects/eb/8308bd1f0700577da8e588cb2d28c91c9e7123": "a9eb5e3f5c77818a6e88cd026aa172a1",
".git/objects/eb/05687fbcd3da462a6c76feaad9c29278a4b7db": "57b94e35bac4abf71b825d2d14a4e22b",
".git/objects/22/ff1b285d2d5a8ce9b35eab48c028e930acf29f": "2e6fb2bd971a4be22f636f6909580a0e",
".git/objects/e6/a0addc3d119a20bd31ca0bbb641bbd914c6d8e": "82017245cac32b3f453a69de85778b7f",
".git/objects/e6/245acb4dde146772e4a67e50103aa7dfa9889a": "fe81b76fb8f07e03e2cbcc4ebe923255",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/a0/66f6f75b9f07507621b46b4a45f0129517d9cc": "b336cf9357f19a74e72c3af44f36b205",
".git/objects/a0/d32e0f55af045c709dccf587c605a3497200d2": "a55b7a950e0f28784516f875c8f65a6a",
".git/objects/2c/3c94ded70393e3447853999fc34c5fbdd83a6e": "7fb8e17b5ed0b500d940e15684b21e33",
".git/objects/2c/d6f4333e2b6cf62545b77d23f42ae0ed401e24": "b0a03c0ecbc0f59d7b9d75aacce857a2",
".git/objects/a2/60a772a9a65f2f0ecf56b0493ad9a2a5e451ce": "6f83e7669ddb3ec8dd620f1566ad94bd",
".git/objects/42/4a8abda27a3952b43f00c99db3fbd8721f53d6": "dd7392d6220780a73bd17e6ee89e8ce0",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/46/147552c5db551279abbda26043f01762f3924d": "05fa2aaf8bbc0db3a5ab2c974868816c",
".git/objects/cb/bf09808205886119dc49f2dbc6c0efe3af5221": "4091929a029c2c33372ac79f814d5eba",
".git/objects/77/4ba5deac11dec8c0c780d3e7d653348cff4e1d": "3489c9025242b2f5710720ff8f60124a",
".git/objects/81/70e2a9989d39f99a400fe25277088f3de9edd7": "e949f93d65b56b41a20a8a33eede5bb0",
".git/objects/c8/969d15fc7366975732d28161f4a9798dcfc566": "ad8d7e078dc7cfa43cfad0eda6309a17",
".git/objects/d8/e5326e3c8a42afe5f9952e83509a82fca33663": "28a8166025fbf6b42bc9072eca4d0119",
".git/objects/99/5b83a105730c29e132c9b6edf1ef7542040c1c": "ffa6cd51145456869f881685dd65d7a0",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/42bb70fdbdde2615e8c604e386e237d60b06df": "cd379f001fe4cb3ff8379c348b89ae21",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/d0/a02f9642080792408a2d357983e909e16318e3": "763e4573934ec82b1d47dbeb310b6ce8",
".git/objects/09/6f25a22ab2242b3231c70598fe5895ef4e7c42": "be339047d83c07c85f1288751ac7ca45",
".git/objects/f0/4cf4be975ec0a71d1bff5114d4f0a54ab11fff": "22d226fac8c36a3213d65c6442942a5c",
".git/objects/f0/3bacf02d9d620ef457dc96a7ee19cb8bc4d80f": "d00d219c0ebf5e43fac96ac8843af0d9",
".git/objects/c4/f3a93d2ae340cba027b11c72141eb42a6cb2df": "c508ae398998fcb22468f62f7d2ef7b5",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/62/81288521636cc74fd9650ba2df9320a358975b": "fc41eec736bb2bdc79a56e92e7871553",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/7c/6d68f24628c1d06a1e91dc8b49a48801a90df1": "acbf0bf8a51ac519944cfca8317e37e6",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/30/8db87ab2f2c1fd32e5a703fe3972bc1e9fa7bd": "8737e4efae5b5f4e9111886414ab340d",
".git/objects/60/91453115610a26be516219b185a6e35af3f978": "9557ce68aea7e1f1f342fbbd0ccfb4ce",
".git/objects/91/a8d53fdbfb915a2f537ea70ecd1181c112c0ac": "43ae5e3cbf60637428537251057c734c",
".git/objects/13/1cfef7307dd1e4768d9c8226054e34f48d28c9": "583af5404d5ba90cbf4b98d1bd6f22d1",
".git/objects/01/26766780d78633568df9d5f4a31a0521cb63d6": "e338c7a750cc6ba43af99bce59fd7978",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/101a627b415c113ecc0768f6bfd1f08d0adeb7": "15a05a1f19db15df1fca606bcd424b80",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/b4/eec5620604bef772ad9245384badf709a0006a": "286708b7a289a7a2d44d9b0fe85ff6dd",
".git/objects/2f/2e22b60a072d0e83265505e7667d0280c0bdfa": "d31435eaf6ed6171ac6d0bfa84885703",
".git/objects/0f/7522783a1fce57e4148b2d21e0b7a490a9b66f": "1b718028eeb2a7450ab10e7498c09100",
".git/objects/65/29424588437dd929311c15d37713772f0068e2": "ba651e0a45a46e2f548d8ad06fb00aad",
".git/objects/2d/1b3c2a5ca70ae50fe8d2433f2fa36ad269d6a8": "1cfde4b92d6b110172c5a34e2bae326f",
".git/objects/2d/32dfaccd5d2397d944999a8cd08ef3f6f16c90": "cff43af665d01ea37dbdd1a942efda80",
".git/objects/55/4fe2e62831fb9d223a6a51b8995332cc1e2a7a": "b2d12b29ba24a0b526445feed9f14e5f",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/83/5032f5bd5a0f7d4bd920fb04e0fb90147f4041": "67b6f67f26435612f6870c0db6d28def",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/8e/d8a494ef68c980cdf4afc6307f3326c189674a": "83096ff5b36f688b16b25d973dc0b63b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/a6/b1ee2ad61dd5947ca032093fffba9bcb65d737": "786c89d34bd0351f42e66941f9e7333f",
".git/objects/93/af5de143cb883ef919eda534aaeb2473a81e17": "7d9ac964453107c2173edc33ad634655",
".git/objects/9f/fcb93511b1a97292a3e61394f3d2ecac796a7f": "fc7023ef2af7a06d2873069046d9e8be",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/de/dc5bae3621f179650ad86ae53434d6863b73a9": "f82a27740f5d95aef1c7874989e9cabc",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/82d08b057718ba291fd96eecda848a369a516e": "56040bfad876ab0fc2bf24e2621426a5",
".git/objects/5e/f6bb314c8e42477844893705013741d08858bf": "66dc2e3d3db11b6114251e644bbd9310",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/b9/5b0586df78a117cbd5106e7963d434304107ad": "1d17c3dcddbaa213d5642f8127d19676",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/59/d7ad55596e92a81443e2fae99bfe2d3256c622": "fdc685fc13b33454eb71552801156f48",
".git/objects/80/ca721946fcc0cf8145010e2ff23c91c3b31d9f": "4e6ed7734091a81a378d9d08d6339d83",
".git/objects/80/314d9d6b6614e64bb8656b3a0e5e1a391caf61": "35cc4f322388bde8cf6ff0f235188551",
".git/objects/03/adced295f80737a1104dc15dd805912f2ac16a": "a268b4d21414a6ef4a8bd80dcaf8223b",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/57753f185ba49d93bce78bac5cb2925c6e5305": "a17892873cb8ac5dc2741f468e5f9d53",
".git/objects/0e/669b4e07cc778d40da127db56bf6a66473a192": "57bca735df19c8804721293af09e5812",
".git/objects/50/c5194b273385c019cea905d262e0bed7e0fc49": "43e684042a236763a2a8d33ee8b9ddca",
".git/objects/50/878877c93eb46f324679014f2fa66a405df066": "e216de1e5a8780669c5ab88d9cbca685",
".git/objects/50/e99127bbabd46c14ff5d55ddf2f41f777b3adc": "eed84fb4a0461e2fa186a736354f70f4",
".git/objects/53/3d67a2e2cff14a21f70f200145f553dfdcfb2a": "20e368d08030e5700335f955a5db5527",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/15/506209f378001c14ff1f82e0499b9779d661a0": "18948d920709d2e6e0f382b318297bd2",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/14/aee30cefd50f0522d2fcff9263681f8fb4b4a3": "de4b2abe31acfdeae4474d72a9ecad1e",
".git/objects/7a/3f17fcfa98f3459c9057e13f04f170c7ea2a5c": "2e1f639a341590ccd6c7d77d2d1dac59",
".git/objects/df/3f1caa3d2d7df6ea2465dbb9ed948f364db663": "086eeae412d6d9474553de6e928187fa",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/2b/0cd90190646aed4cfcdb1c7d32d5834d7897a7": "c8e8eabf76f2d2f84b51926161d3b0f5",
".git/objects/2b/4eb44968c417af4ac4431fe85b65913bfe532f": "b5471c62f8944b71c37cf62e356bd32e",
".git/objects/e1/9499f71c0e6ee14717c49fbf710b0e38ef7969": "09f487ffb5f897700bff895b7a33df2f",
".git/objects/b0/5de73ff3d479e00272b78a616680e09c619d68": "0a8633a046abe4bd218cc9ea77f3635a",
".git/objects/84/aa78a1435525da052a9d6b754674381fec0cf9": "7deee86f48789f2e337cb71fd2a05c1e",
".git/objects/3d/f7e7b9df36381b571fffd23e77d0afce28b490": "4c117c5cb51b76fa2e8d56b722c40366",
".git/objects/3d/e06606d42ecc062496bc5c72ad21c5c4bc575f": "3f0940165999d8b53f6ccced04a06b1c",
".git/objects/f5/4ce506cf9d7672bde0e8aa181456f236c8be0e": "1284012991a11aa1f096f658c97de2ee",
".git/objects/f5/ea8c8411a48a6c3769155895492c47730a6271": "7cf06e82fe4c2851a4a94a7330da6dae",
".git/objects/08/baf1983752bec5bb0bb36f25fecf30044eb8e8": "8c59831700b7f8c6e423dcdb6f2b73cd",
".git/objects/69/cdf7f69aa31f8c1c48e7dda49d3711528492fc": "204db027641c8d585680cc48187827dd",
".git/objects/02/297b54797bde5f64ac1e59d359c34b05c80191": "0d57c4116a818f4b5f412638fd0cfb68",
".git/objects/33/d8354633c4e23f4d0fd1367bb5e130821ff967": "5fcd8bcf8e06ba86ca383554a4d75e0d",
".git/objects/5c/fc81300a85e6fc10edfc01b4f2375b1c30d9fa": "0a1b544893afc4ef235373ed419fecd5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/c9/1e71e7c4704a5ea8b00a1ee665fa34af11141e": "72f7b6e9ecced7a4072ff6706d8d68b9",
".git/objects/c9/b84d5732726c38b88306c55a7568a358eb2fbd": "9b797df4e94dc876e1158b5843539a66",
".git/objects/f6/7ab95954354a0df6d34ef7a882a60b10d68038": "3ce1370a30cf71d42b23162f88e5f4ce",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3f/ca02490daf34cfca1b4238c9535153bec6dbd6": "088e9cb92524b4ea9b6906bd1f99c726",
".git/objects/fa/7557963034514995eaaea66561888cc99a0fe8": "211087e6c144d7afbaf83d5e63183321",
".git/objects/ce/7b6d7ef11be45a0172dc35154211396dbd60cf": "843cd63664c75f4865c75051ae8db390",
".git/objects/11/efcfd215695e369473fc72473a8dfa469e7c0e": "db80b25c359eaca67a63db9a1c8e9942",
".git/objects/36/415f5e3bc6650a115028b2942167c3d0f7ca83": "7509497782b27f2df3d308e2ad4f3ae7",
".git/objects/36/706f871de74b71ca986981bc9a0d822128a94b": "5374a69dce8d2a63368964675f513517",
".git/objects/ef/9d73506db6cd05c08f655ee7ef8db561a34528": "e69cceb83d423fa787d2b5b868438e8a",
".git/objects/54/0bec4783ef796feea227a400abd7d698b23a69": "caa50a7197656e71a758712874105e72",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/25/30c83a99bf2c045f3e1c728d3ee9709a89cb57": "e8d76b3f4efdb11894c28aa43b994b4a",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/64/0fcd8ea4ed210dcde19004e22f740fba5ad659": "dd1ac23518109d75fa920c36b5c8ac8f",
".git/objects/e3/842892d44baa37df8307f1f9a5d590c2cbe548": "6131db33b189ea91bbccb7f37aab622b",
".git/objects/e3/bca4977102c4d65f87de802d0fbff7153db293": "868d34e66cb2c3067341422d477f2747",
".git/objects/8b/779d2e79a3abe8010950da6752e2524def17cf": "866a17789bc12434e53d7b5b05f93ba8",
".git/objects/71/cb3ed908e3b29e6f821402c79a03a9c10ac02a": "1c964d944ce709351c1a9128aaa10b9d",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a8/d5f936b0e5c809c8279486433b8322939cece4": "f661bd6a15fbeedc063399272eddd9cc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/remotes/origin/main": "068417359736f0d7f139a30264b2e1f7",
".git/refs/heads/main": "068417359736f0d7f139a30264b2e1f7",
".git/index": "0d3cae93932c2df7096e664858e737b8",
".git/config": "2524e0380a49326a5dc0aadc05e02a94",
".git/logs/HEAD": "458d75898facaf1f335d0c71c87641ac",
".git/logs/refs/remotes/origin/main": "b79d8266de96d56b68d81a1b37cbdb79",
".git/logs/refs/heads/main": "1ea8c5985013a92801174925f13acd8a",
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
".git/COMMIT_EDITMSG": "ff76660951140b22de9e5a929ab92c59"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
