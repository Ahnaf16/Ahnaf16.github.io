'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "83574ec8f93d382c7bbf881fc08ef379",
".git/config": "c6203bdf45bdff704334bc4faab1d0de",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a4af61aa29de39836ee6e9e9486e3d91",
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
".git/index": "f88def9a0f182a331d2ce5f29bd82912",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "66d92dc074114c37c3fc652382a4f037",
".git/logs/refs/heads/main": "66d92dc074114c37c3fc652382a4f037",
".git/logs/refs/remotes/origin/HEAD": "18a1dcea6031e4169f758c960768d76e",
".git/logs/refs/remotes/origin/main": "42a1de07f6a69034a4383a05d23cdfa1",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/02/d962eb93da5322c645e8beca06e9c963fe9187": "8f44e6164d4107241af683704c4f8319",
".git/objects/03/3e4d04c64e33b0d5f004deaddaef46b9121cd3": "b50ce892c59960be4a7b3cf7a1faefca",
".git/objects/04/0b00a9db2c4abfe897930837459a33152c7519": "73158d2e413a8620a76806c711528410",
".git/objects/04/791a3c91aeb4542e82eeefa6037cc461512be4": "ebb4cfb319936daa3ae0bf5ae964f2f5",
".git/objects/04/7a364a84908580a37150fa979590a9ad19ca7c": "6fe49066c58770f5d8a309ac0bde7f5e",
".git/objects/06/489a2804e244f1cf895c0a27e0a4f06f58d336": "57f8ffa1d55dd26b884b4d62d7c63429",
".git/objects/07/e1df469f7c2a720aa6886acc4443860fbf679b": "0a34d137b38186392e85a13709bb04ae",
".git/objects/08/344f93e20f93234574af0061341396bc6bbe44": "14a4e92e044671127b6a0cf43111f10e",
".git/objects/0a/9e7f5eafac239da0e65f4485b6eadb08ef9586": "493dd184b4dc1bb71db6026e195963e4",
".git/objects/0a/e0b19750c51a751bc45f54622443d55d643999": "cefbd50363e8f9ca67f64883e351c3e7",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/8d3e84e5d0d4531fefc0c329d15bdd7b1b3680": "e72a98bd815dc8b937120a9ffb002c5a",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/10/6cc80516f881b88fd9fb0b9579e85c089ce7f8": "81e47d523532a244bdd1f9bfcad45ff3",
".git/objects/10/9df45391a77c319b92bf257b99780940ea362b": "a2b14c80e681e0c9eb73cc2ebe721971",
".git/objects/12/13d5f8d9a10ae15ea0ad24de7f59b76179b80c": "c02e058df9dc11ce87bfd8ac77b062ee",
".git/objects/13/cc53d0d738d2e2c1db8b8297f2647c3bf352cc": "01fd851eddaca4d8f8854be8cc1d1628",
".git/objects/15/675a43e459c9b85b38645754ec1c4adc0364de": "8df2dd6afcd9ffc4e5ee1541b40d3e5c",
".git/objects/16/88562de2984d90b4f6985030a831abc52503d3": "f6f4ea96f1aa3c79576e7bc526f2c4f4",
".git/objects/18/e0b7b0f68464231a08ed914a1a9f21a87fe494": "93424e08f86094cc54cd0b5c7bb4dd95",
".git/objects/1e/9369d7b90c87d7e2c244db92c5048ff0f01303": "77c28a1fecdcba7807b6368b794ea8d1",
".git/objects/1e/c3e7b3c4e330059ab6897353b2327798f669ac": "78881bb9ebc28adf604ad1edee5d8e69",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/28/64e57e9141db0be36ed7322385d6ce8698acaa": "b0764e226630bb9daeb1da9abf62d740",
".git/objects/2b/55d06d548fe9c480b21e52661f1173d85662bd": "a23a423c8f9d0a533525fd1f38cc0497",
".git/objects/2b/977112c8bee68fb8dee12e5c07df78283a17f4": "7bf4b5439f522ea7d42ab597faeec781",
".git/objects/2b/c4293e3288a1e7aa584395c270570ac739ef2e": "efd1dd25dca61e075aea94841c9abec9",
".git/objects/2c/8125c0fe4b2a66aced1743d5890bd48911c0e2": "bf708e2027cb9ad28494f539bc8f0934",
".git/objects/2c/fc083707776aee044d644320c6aaae661de4b4": "2adef5ff274e1510181ad3d888985d27",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/d0786af4d92bfcc8183d54ec11e1f7369b944b": "03afe0799dc6cb13ffee242774a812ce",
".git/objects/30/cb62bd2847e8d4c663ea17d58af0c2b463f6ee": "5a38392c551ba0fe7b06a424ca325280",
".git/objects/31/75ffb7a0e70df837eee40febb9ef37d7a9da96": "4b8290d489d55699b95aaa97d331a1ae",
".git/objects/31/96dbab0350be66f0468588be1b615210d85b9a": "8e02d21d642532fa961d3c95ed462ecc",
".git/objects/33/f6370c1ea4d84915f934380d4f9b4f188fd820": "bd18868c4de632fa700d4cfe1d38f0f2",
".git/objects/35/c8865b3fd0bcac7d89b72e98b4bcfdf1cb24ee": "0811a84e4a799242e68dc55588194319",
".git/objects/36/479cc4a917d74299a02e43b96ef0e04b289b08": "5846c558219a73a5b1be6e852ff431d6",
".git/objects/36/7349087a15af27ee853a67a57f3b232e78c010": "f40420b2b8d3ccd61f981241f2a7cd3f",
".git/objects/3b/49159c392eabc2569952a13ca2a80138589255": "e02b953dafc5f40219b6793f847c624d",
".git/objects/3c/08debe21bbf388b893674522590beb6cfaecc1": "3ff77e031b360afb2fb5ca8cf474a411",
".git/objects/3d/e453e432a4bebc97a4a4b8fac782fc7752438c": "9251f739d6c78f352b66d1005c70cbb7",
".git/objects/3e/69db14448455194c8ed708b6e27f7921ba5894": "c48c4518e0690b065407398d35a729ca",
".git/objects/3e/ecd8d180857233db91af33f22ec1479f4088f0": "4589a3687a465a8d6fe3bc8f840ad466",
".git/objects/40/f0ee0eaaf9ea7bb0ab204eed97a772a9149a02": "7a5290b6a8a46166a88a096129ce43d9",
".git/objects/44/c876e3629bf19a7b550c4afb064fd7a4e782dc": "8a378d50613f000ea2978a9eee67a510",
".git/objects/47/be3499396026e4291ea8bc5bda1062f8f89b72": "ea53cca5cf2b0c70cd8883f07c9f2aeb",
".git/objects/49/1ac5f1893abbb8db23b0386485f9b516bc3727": "49ecd440409706b0647a3e931b4d152e",
".git/objects/49/bb473ed779f458e72527011a8f3a383a71df09": "459b8ef86d281579378354ab74240ec7",
".git/objects/49/ff83e4c955a582bad813520105cb9248112816": "010c5b599456490aae0ae359776a570b",
".git/objects/4a/31a422dd18882ff238c31a1d8c9645d7f81441": "cdcf316c2f9f5319dd1de25ab147f4f0",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/d9601e9e03f281ac21ef5e26af7cc00bdb022e": "5998c63f5ce5f2d5758033be7c5196c2",
".git/objects/52/3f1973b08a69f47ff9a8084b5b4a017feff131": "3b308bbd616b7b9facc46edb06babe21",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/52/cf8f20429175fa3ee5e8ebe6a16b10654ba1da": "ead2efc1e00071582d26fe811a2574e5",
".git/objects/53/2397351f35db4a407bc803fdc5a3400a3440b6": "47f1075d4bbb4e894273ec5f4585fb4a",
".git/objects/55/d0692ffd491227866896771245836d459487d8": "c8da5c53d26f9030ca5bb3272abdb4ea",
".git/objects/56/1ed7cc8f940ac0c82378b9d1eea0890381c62b": "90e59cea21ef89c1738fc48ae9df9ab0",
".git/objects/57/ce26bad7ed8e07ff2dcfe252ff85d4614d24d0": "4e1cd61fe074dcb35f1069e5fefe400c",
".git/objects/57/e5620c29a39711b2ec60e2128927468f5ee713": "6732fbe5a9fd6197d78af6e4c8b5413d",
".git/objects/59/055f0c4ee6870936d2e25cd4774b39259076e0": "83b45151f5bd356bddc8e3ef59c49079",
".git/objects/59/32c0257ac5aadbf7b3d91ae0bf55291a6675ee": "adc788adbfbd8c3d1c08eb5cd3da9228",
".git/objects/59/4db708d71e9bb377955a5cf23a33fed7035de2": "f32a03c71a57887796dcd630da3e0031",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/acef179c16c52c3289d15654a6f6a509d7514d": "d7b950b050d5a1121db4f79b0af63a09",
".git/objects/5b/a4ac0e844b0dfff3e53a8f151f305ab9b935f0": "e92eef2f9b30cf3233937d999a437549",
".git/objects/5c/12966e0dcf0a768ed7dce3e83ea3e5faf77dca": "d97500332e4bf0a10a7bd123642142bf",
".git/objects/5e/56580739d4d8e494eaa98075d0e88a0e677b30": "2ca4165008918a965fe8d75914c526b6",
".git/objects/5e/fbc4a6514f69b210e4313018cc9da01efb9be4": "2aa6d6d90a163341ffba4a1e1010aefb",
".git/objects/5f/48bcb5358ac26c4f32cf85642c8e00ab6f341b": "8af9479966b2d7128b3843133598e06d",
".git/objects/60/0906c990d95c6dc156750cb00094ddd753cf8e": "5daedde8f7855a40bfdc94e9f1422865",
".git/objects/60/e216c2880b2a5a63fcdf090b62d58a130ce9f9": "83b1e998d43e27e3e34a9b2d76640038",
".git/objects/61/47b1aa9d5c572b9f21714e308078dfe74ea901": "e196f7f68ac737afa177ba41c7cb0a27",
".git/objects/61/70a878e63922380ecb3cce4996517923d644b0": "502dba9eeb235d1d39ac682d95b03eb3",
".git/objects/61/ca0cd3025c028211f4751e86a4d37267c703b5": "d3704e2b289d85e5c81488e5a9762004",
".git/objects/63/e311428add03a04bd6b8671ff9178cd9a10618": "609c44f507c5656a379cc1fd96243c8d",
".git/objects/64/217d73222700ad335006ff72229ca94099dca6": "84075480ec6795ff04ef86c43212a857",
".git/objects/65/ced60f0c0c5dec88624bc11a2bc91e940d388e": "210a4733b498cc1e1c1143ec5cd2df90",
".git/objects/66/2b535705ca11b2e58358f525b99aa575d23791": "835daf4f951a3d337261b42fe03b6a4b",
".git/objects/66/587502985a9f967726f422b7195285e6bee1ac": "8d8aa2f75a6474b3a4b7f5807b051ed2",
".git/objects/67/d01c12f71abf9d34e42bf7f388d0849b55fecb": "ddcce60b387d1abbb8a51f09daa0f6d9",
".git/objects/69/b6c9676bcf2236310a209abe7f385a451aae94": "1b48ca8e694ba7f2fa1c8f46326e90bd",
".git/objects/6c/0d6a8dddeb72836fada6e37bad01aecb45764a": "e49e86ff4177fbbc211f35d6dbf2e798",
".git/objects/71/2aac66f5fe4c0af92dd6495e5bb7e276f7ff03": "51efafe54a290e3ebe2326b9ef2e288a",
".git/objects/72/b2c1e484e6aea55f3571ee7dc0ac43b27488fb": "c184c1f9dd251afbc54642e3bc62e88d",
".git/objects/73/974656890c2bdcfbe9b5bbaa486197b0bdb616": "f32e63e8f2d76d0cbfb323696daa83ff",
".git/objects/75/72ec3f54b1f39ad0bad3a81aa23b4c174717ca": "7ec0a5b2d26d4ac246707965da930cc7",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/9e3596c63395221155e4e402a1ae067bfd5b29": "6fefbab54cf112022d144d333723617c",
".git/objects/77/07be910eedad6cb3f1df34a206bbb1f69d02ef": "cfc6597dac281d6fb521fb06911fc08f",
".git/objects/77/676f420580045b82ce4b53f983a209b50551c4": "cd48b007e2aacf6fff3d2dec89fd9b0c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/9986445776635b2831ce887da4ea03ef27bb1a": "4699413aafa67f771d2fbf7c7376132f",
".git/objects/7c/ba8d5a3a69089e67e469ecf41a98508bc56b11": "e03f928676a8a6414fae268743b8cd5f",
".git/objects/7d/263378761f45a71ec8490f13c75f1c44b3beb2": "a9fd3aa8876a8bc489908d504bc72ac9",
".git/objects/81/69bd82f1a99013246ca07162f23492e0caf1b8": "a7365a6e948530e4715165505b7e5359",
".git/objects/81/c0a102764f1131a17d7021e975f2afec18ef13": "153980ce7c80b317cf237ce3ea33eeac",
".git/objects/83/bee912447ec926e6a521caeee9d737208b13ea": "d36a066e3b77e757d32c4ffb6257ae49",
".git/objects/85/8198164d38e8aba3c5b65c808c3a5fbf939931": "dfe91ad0db357ff07c4ea3910e807582",
".git/objects/86/133f20199c44112a247e92d2da219403168e35": "ec06f5f5bef831faf65bf6325cccf40a",
".git/objects/88/2f5d0642ae6c5d26dc21c17b70e3a07092c479": "9b8f216880d763983409c70cac686a81",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/04b69f9e150a895e914e0eaefc30eda4a8cb8e": "7bb4685f1c2e8d3e0016b5f455810b8f",
".git/objects/89/4941af2e65abc12a3cbad114b4f8e6bf089283": "82cf9605ca79a09caeb19b190c0bbb77",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/89/c51a3699bc8d48196281d346afafd9f7aa6663": "25842015d899899ee1a7e1be1d21b905",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/0d8ab1b6be482d3780e004a9553ceae3a61499": "6d492b4255eed9a845a53398fcee158d",
".git/objects/91/5b39b8cf053ca4dda1ee73bf3455b7f9c78f43": "cb41a71866209b604e00667d54837f04",
".git/objects/92/f0478f1cc917b07ed26ee35286cf7977180337": "d8a6367c4c82032a393eaf143c413302",
".git/objects/95/23a745747cf5e468e69346f49aade402f61531": "108f3934633dad8d5c980cf247fc492c",
".git/objects/97/318189b27c99a4c39eca67d3992f6997c4603c": "31ec4c57180784b9c4d8a1c33dc00727",
".git/objects/9a/e486698cbc92619751e5e005ee2a37c99d5c40": "831d2f9d982c7898b85949473fdfe856",
".git/objects/9b/2145f7af6326cd3b3f106975a1f6250cc4e982": "46e21ed0dd6c0679e130595e333eb38c",
".git/objects/9c/9463aa7ecdf82b6d823229dd327c2fc0823341": "46de776cb439d08cd0d371f4017c6e5b",
".git/objects/9c/cbe61456bec11004142cde6a7941a5243285f7": "f34bc75a825ea3507080ff8a3473d341",
".git/objects/9d/0f9392580f77c7ed3c1b2a20b9161c0c0f99a2": "35592f4823dac1eb3b44af81cef953f4",
".git/objects/9e/7608d8a46f323469db3a7a4e931e18d45f9467": "a9aca1086ddf82a00e832e8fec31cce1",
".git/objects/a0/75c7140e9d5beff612de9ce2e3aa2effe4a391": "f5b2151691b3ccb95f681192c43119f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/308c2dc48bccacb097f1965bdc40582df512d6": "08a84f132875ac6d50dc31c3bb9456dc",
".git/objects/a3/feb649f99e987ad1c8aacd6db81fcea6422254": "6eabce3ab60e6a70cbce9692adb3b35c",
".git/objects/a7/781ae0898ef4eec59b28494d4b2c7c6b9e2287": "c13e8eb06aee51823d0ce9a78ad3f023",
".git/objects/a9/424b7364e9193a12afaa200f6ef072c4268949": "4a79d78093f73f910cec2e74af8a905a",
".git/objects/b4/b7f7dd60497b9cfe084776aed966ed6066c7a7": "4ba61489fed23c283409de1b88cc5fe8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/f295c746d9944cdd49d1ad6ea28ecd91e4736c": "9776386b716c46e1024cb922292c31eb",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/873595714be0aed5b3f40c3f409125d58b741e": "090eab633a2fc6144387ae5913e6fe15",
".git/objects/ba/af821c624516e721f5ad11b96981ebae2e2b00": "fe0328ccb6a37d6b1446ef454ecfee3a",
".git/objects/bb/ff01c402b10c9a841a1c250aae7d30ecb5158f": "d73757010a6cb176d2138df24c0a665e",
".git/objects/bc/b2628425fd17bfa8c2da08c6cde90f9557dead": "598d1b5df0d4953c59672fac2474658e",
".git/objects/bd/08d38b0b1a3fd7b8f08b78e92da11820aba5f9": "1983a4e3024d1aef0db954de0bc24d9a",
".git/objects/be/02371c14a436ee92649ba351133ea24c20f535": "f5f41dd54ac569a9e5405666d6571b2f",
".git/objects/c2/dd603f37d40fc42195f5d069075162531d1c9c": "48905502e7601226804039214c8504e1",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c3/e9627f99cd7153b66be6a774d006bf79d2663a": "2f734a617c36fd037b296bee07a6495a",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c5/8ed519c2502ab78792325f05dfede9a8b07724": "d9053f9318b01e42f139e115954269b2",
".git/objects/c6/5f4596ff87b3cb3957f430c3ff8839c5273088": "c48ae45da5bb0344882a5761d26edb2e",
".git/objects/c6/6a380bebbb4befde4d138921aa6bec4384e388": "207f5446d1e22084a41a9851089d6b5c",
".git/objects/c6/d63e00b2a213dc0a303b9310a3d77dd761374c": "a49e7a3d765be3bc8dfe210afdead6e4",
".git/objects/c7/a14ab80ddd4fd112bde7e7154461b99eda91e2": "beed22f3f8e4057d15cdee1bedcf8eed",
".git/objects/c8/dc303cae7f36e764002fcbf7abfcbb0834e3c8": "b94c82264f27b93a5da5095cc4db7d4c",
".git/objects/ca/51b63ce3216e4cc8113288a817ee415d92ff29": "f7b93313d9fb7d2be0d12653d85f2c7a",
".git/objects/ce/22b6d2420aa66d4d33fff49d3159329da4f41e": "4a46144f2ba99f89da5c899234d57baa",
".git/objects/cf/ee12dff87e963ff95fde82baa0b5795bf9c5a4": "43151ceca20bfbd25a5dda57f4851340",
".git/objects/d1/8d6b9fbc72f044467a6acaad8cef39c64a2221": "8045cc6177ab32e0971bc2cf783e355a",
".git/objects/d4/552dc9dce3733c8d7daa6f97c28ccbee6e826b": "a9726d4ad283a85313f53c1cd4473848",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/cc9000e14df92c01b4760cb4c90b05a9a57750": "96cc38666ef4401e98a46aacc0cecc3e",
".git/objects/d6/eef3513a664ecd4b1d2fa26a9775cccdb28ece": "963d72d9d21acc3ec0645b02e560bc7d",
".git/objects/d7/f9a62725c85f9aa68ff480094030f190796f5b": "adcacf0d6c2ebeadde3f9f7e97ac9021",
".git/objects/d8/f8ffeeb485f4bb8b441217e23415a6bc22960a": "85e25c8caafc4e56a38d81ab0e81c323",
".git/objects/db/05b329a2434e6717c809a12aa3d411bc8693aa": "0241822ba20b91dafd96d4769e7b695d",
".git/objects/db/88713d7abf1057982fb5122389c3ba8cd6921c": "fe2bd6ea29a0dc1e9e37b2fc92077b02",
".git/objects/dc/1d86c2828d6eae4e0946afee4aa4f17ea92574": "a6c3a16055835f798f703655be9dfe0f",
".git/objects/dd/3d3e483605e857fe59acc0203f5282b1d60f6f": "62cc74f5a82ea0c223ddcf7b9c8816d5",
".git/objects/df/3d85dfbf0d2481cde035349e37a766f5420218": "6d667990c941bd1336410fefc2c37c4f",
".git/objects/e0/49fdc570fd8a130ed373bccfdbf621b96d54fa": "e920d57bec4a90a5e361908c18b07504",
".git/objects/e0/5ca2d0095e3f4981cf7c3d23e89e56cbd52e59": "2e169a81dfec9216cf3f1d4190198af6",
".git/objects/e0/8f54314cfae687d0343c393eb5f9790f97c629": "b8669161abc18fd514792e7decc513b4",
".git/objects/e0/9ec318c7389f451e98ac640eb919f09aff6f83": "d2b0cd7c9579d0a9ec1d1651a540c6a8",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/7817b41112b04caf13c0111131685dde131c58": "bde45d61916268a338ff5dca6643424f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/5f9e3760d8146a402069cdb8a3ee2c9e42980a": "d4443d8b77e7c5c9414759cddb01e982",
".git/objects/f1/2f654d655a50acabd78deb801bdede86a55b8e": "7da4f3ad69193facc638b3409d65a4a4",
".git/objects/f1/c7a9f5d3609d3c8aeec5ddcb145651b104163a": "1b938b777b14a93c39201896ccb0c8f6",
".git/objects/f2/fb539da4092d8c1c5f22350ccc005c0b6c9662": "9ebe70bf314f48949234fa1d047b547b",
".git/objects/f5/b9440a2eaf740afd0935e68964cd3db0930240": "d24475748239211a694432faa609e0a3",
".git/objects/f5/e3519d74ff57ca21dd345075016e4292c22250": "41700b6d0f3bd2a4c3b69a1363262134",
".git/objects/f6/bddc937836e98360fb0859d59cad4fdb8b9193": "c2b22b7a7f0a28761f2cfe2777b9d5d3",
".git/objects/f7/460763999b0396bf7388ad2ad0ffc7efeb25a0": "f84713912268a88ab54ae8769ba4d3a6",
".git/objects/f7/d5d930d53c7174bdd291f5114955bb319538ed": "b806655aea2e35bfffbffefd4d7573bf",
".git/objects/f8/84a1a17d086af8da80c588fbdedc50a14f278a": "3d4b092f058c87ddfff568681608d710",
".git/objects/fa/e45011b222522bcea637600bf245285470c0c3": "3112180af8611fd08b7131615c12bbb2",
".git/objects/fe/35ed4f5eb48533ad2467e60032cf97fe03b11e": "65f0064b5e9a1c4ed707b4baf1521f3a",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/pack/pack-3a076cdd3fec28395ca157e4278ffe6125a80333.idx": "5c69cc758e8ecd6c336dda374303a60a",
".git/objects/pack/pack-3a076cdd3fec28395ca157e4278ffe6125a80333.pack": "56ecc70595bbc07d78a75332e97b3bfe",
".git/ORIG_HEAD": "306137291ff9c820102e9a96b582ec3a",
".git/packed-refs": "381985fb62c4557c13d46ce6c2569a7b",
".git/refs/heads/main": "2efcaee95e95ef6c83294c609a626e8a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "2efcaee95e95ef6c83294c609a626e8a",
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
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "34b7edf6ddf27749173576160b69d862",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "b62641afc9ab487008e996a5c5865e56",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"icons/android-icon-144x144.png": "bb1e11699a3fdc9566c1b3a1ec842af3",
"icons/android-icon-192x192.png": "4f0c06853f567f4cc946a48855e5f54f",
"icons/android-icon-36x36.png": "d0fe630440d4b878c11de8cba6d57448",
"icons/android-icon-48x48.png": "afec5a0d7e0ee67a571f99f7c5be322a",
"icons/android-icon-72x72.png": "8cda003a77eeff1c5a72ac2ad80badaf",
"icons/android-icon-96x96.png": "25e86109e29dee6ada27f0ba59d0eaad",
"icons/apple-icon-114x114.png": "cdd11fb26de7db3985ceaf25a3f7f051",
"icons/apple-icon-120x120.png": "9c7c11779fc721f797343b4b1ba027b7",
"icons/apple-icon-144x144.png": "bb1e11699a3fdc9566c1b3a1ec842af3",
"icons/apple-icon-152x152.png": "3273aacc97be25b286f0cda58f3a1f4e",
"icons/apple-icon-180x180.png": "29508b2dbac66891bf80d6eca71e7aec",
"icons/apple-icon-57x57.png": "4d2c2937dc8a7508bf4b8882ae1eaff9",
"icons/apple-icon-60x60.png": "e4105f403e285008beeadc89e8715a3b",
"icons/apple-icon-72x72.png": "8cda003a77eeff1c5a72ac2ad80badaf",
"icons/apple-icon-76x76.png": "ff2908de557e2cbbcfdaad56f30be9dc",
"icons/apple-icon-precomposed.png": "71df44fb01b68f8a7c5661a7f4bec0b3",
"icons/apple-icon.png": "71df44fb01b68f8a7c5661a7f4bec0b3",
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
"index.html": "1721f455cd817ec13a0ce7232517902b",
"/": "1721f455cd817ec13a0ce7232517902b",
"main.dart.js": "9965e95b99f51ec2183bf67d12395e30",
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
