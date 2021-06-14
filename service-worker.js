/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6547e89c8f1cb925f5c17a58bf26021b"
  },
  {
    "url": "assets/css/0.styles.4a9311fe.css",
    "revision": "0ac538e54acc8d0e73af76b46c0b068c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fc345f48.js",
    "revision": "329a1c0bbce18b9215402b7c12fdb1c7"
  },
  {
    "url": "assets/js/11.b1eb3efe.js",
    "revision": "aff987386c6e6e8be2af36b8f05b94d6"
  },
  {
    "url": "assets/js/12.1c03dc5b.js",
    "revision": "c9f1d0f1e8a26edfb1b24be6f0095a6b"
  },
  {
    "url": "assets/js/13.a5b026c4.js",
    "revision": "84e6f9b8bb8341e5560ecaeda39076ea"
  },
  {
    "url": "assets/js/14.4882253c.js",
    "revision": "9429be50336ef3d3aae3be77b43a67e5"
  },
  {
    "url": "assets/js/15.0e7c210a.js",
    "revision": "c63487b0b4c5cab6adfa7c144491f347"
  },
  {
    "url": "assets/js/16.13b19297.js",
    "revision": "3d040f898b525de706d0a68cf8133e86"
  },
  {
    "url": "assets/js/17.96fd03b8.js",
    "revision": "166ce0b54e9058877dc0ce1a4ce4e61c"
  },
  {
    "url": "assets/js/18.3e7d1193.js",
    "revision": "333a20ecd24fc34272280490e0ea46d7"
  },
  {
    "url": "assets/js/19.e351393c.js",
    "revision": "b418ca729eaae479501665ae9bb939b2"
  },
  {
    "url": "assets/js/2.12a03c4e.js",
    "revision": "ceb9fa3cee7072f793d199fddaaa6b24"
  },
  {
    "url": "assets/js/20.19819121.js",
    "revision": "fe455388f5c3ad006862df765cb8cd6a"
  },
  {
    "url": "assets/js/21.448bf79a.js",
    "revision": "4d6f81838a4988679e185ee28f205571"
  },
  {
    "url": "assets/js/22.8435c6a1.js",
    "revision": "ffc355e8f414de61d9ce8869b2d1328a"
  },
  {
    "url": "assets/js/23.3a13da42.js",
    "revision": "163ac2cfdcf878f8e7ed370de3780d79"
  },
  {
    "url": "assets/js/24.d6dcbb4e.js",
    "revision": "b01b454eaf8c88d99865389afc0bcfbe"
  },
  {
    "url": "assets/js/25.01f445e2.js",
    "revision": "c3314c59850d86949cf0683093793e55"
  },
  {
    "url": "assets/js/26.d2246ac6.js",
    "revision": "49fe2cb2596cd48acf7fff9665ee90a1"
  },
  {
    "url": "assets/js/27.1880a850.js",
    "revision": "d91b623fe658034fb34a91a738f998c2"
  },
  {
    "url": "assets/js/28.79343574.js",
    "revision": "95f3a7846069a661dd7dca727a480b70"
  },
  {
    "url": "assets/js/29.37cf5295.js",
    "revision": "b75d70cf180f796d58fa8045a29b973d"
  },
  {
    "url": "assets/js/3.d25ec344.js",
    "revision": "d681a277ffdc9ee5121226bad1cf6342"
  },
  {
    "url": "assets/js/30.152aa64b.js",
    "revision": "72cdf64d5f265e29174cc1e09c6ee145"
  },
  {
    "url": "assets/js/31.67dcbdce.js",
    "revision": "ceb024d24c67fba040a2fff8d13d55eb"
  },
  {
    "url": "assets/js/32.17b07ca2.js",
    "revision": "f1840770a458929bb8a6aaaf46b3e0aa"
  },
  {
    "url": "assets/js/33.e8113733.js",
    "revision": "5d9f9125b3fc031e77054bb3defbe4ae"
  },
  {
    "url": "assets/js/34.86f42dc3.js",
    "revision": "307115daa52cea8b7bf61322db33f798"
  },
  {
    "url": "assets/js/35.081ec756.js",
    "revision": "96468d87ba174bd5993a26cd1ac755fb"
  },
  {
    "url": "assets/js/36.f1419481.js",
    "revision": "6c621fa92750e726586c265ee45f12f8"
  },
  {
    "url": "assets/js/37.1d056e6a.js",
    "revision": "a247c0bd7855247f936356dc8a4c4c27"
  },
  {
    "url": "assets/js/38.ec662a63.js",
    "revision": "b6bc679e6054f4cef68226371ff2b283"
  },
  {
    "url": "assets/js/39.6ab149d3.js",
    "revision": "058d67c9e810cf6174b75c9fa659a6d0"
  },
  {
    "url": "assets/js/4.a95cd250.js",
    "revision": "b3d95744250d69dfa85484c6251fbd64"
  },
  {
    "url": "assets/js/40.e7b5cfa4.js",
    "revision": "503212b2b544749c6e0bdcc71e40073f"
  },
  {
    "url": "assets/js/41.3619074c.js",
    "revision": "0aee07c91625b884692c0428193038af"
  },
  {
    "url": "assets/js/42.708577d3.js",
    "revision": "344d94a9cae4f116998ca3529ebe182d"
  },
  {
    "url": "assets/js/43.48c71501.js",
    "revision": "2f3e0bac885022936515f42c35bc5d23"
  },
  {
    "url": "assets/js/44.544c0f6b.js",
    "revision": "cc80fd395abd439e66f43791a0d4e663"
  },
  {
    "url": "assets/js/45.726647fc.js",
    "revision": "9866d811c4c170f5d1b0cf3ca17c42ea"
  },
  {
    "url": "assets/js/46.5cc52012.js",
    "revision": "15515436ed5c07953ec72b7737b015d9"
  },
  {
    "url": "assets/js/47.8112ea32.js",
    "revision": "e38de4777dc4684824b2d40ff026b667"
  },
  {
    "url": "assets/js/48.de151aa5.js",
    "revision": "fd4b913074ff6b657bdc35a008fcf38d"
  },
  {
    "url": "assets/js/5.4fc038fb.js",
    "revision": "8065501530e934e7ad7e87417d2d1209"
  },
  {
    "url": "assets/js/6.28ab6acb.js",
    "revision": "705a2849fa449e729e491d1200fd0fd8"
  },
  {
    "url": "assets/js/7.900c5bc2.js",
    "revision": "2e15f5023a8a83d5f35b55246cc937d8"
  },
  {
    "url": "assets/js/8.86f150a2.js",
    "revision": "c9ad62d072b6d92237c74efc1d01c6d2"
  },
  {
    "url": "assets/js/9.b64ba6b5.js",
    "revision": "7ed44d2cd541e3bf149f9ff9d99e3d56"
  },
  {
    "url": "assets/js/app.7c4b7135.js",
    "revision": "58a63ebaff4fc80a6fbdc021c27eb26e"
  },
  {
    "url": "cli/clear/index.html",
    "revision": "9030708b1cda40bec0d811b4ba662ace"
  },
  {
    "url": "cli/describe/index.html",
    "revision": "4437a6593b081b0b7d0c5ae92b9ff918"
  },
  {
    "url": "cli/devtools/index.html",
    "revision": "a7b582318b15636edb0ecd31e8c74739"
  },
  {
    "url": "cli/hide/index.html",
    "revision": "1b6bbd065cfc70ce67bc007751ffa37b"
  },
  {
    "url": "cli/index.html",
    "revision": "392631ff67707afedd24a6291b547ed9"
  },
  {
    "url": "cli/info/index.html",
    "revision": "bd65b38ecb9b15f5cc43378fec28947c"
  },
  {
    "url": "cli/init/index.html",
    "revision": "d43ef2fa093e7c7c51aa74085fd09cc0"
  },
  {
    "url": "cli/kill/index.html",
    "revision": "2d6f30b3638bede1f8dd2e9e33300fe6"
  },
  {
    "url": "cli/logs/index.html",
    "revision": "38b3379a628f22d6426c9446f2482a88"
  },
  {
    "url": "cli/ps/index.html",
    "revision": "7cadef775390b41363be2c9161afb9e2"
  },
  {
    "url": "cli/restart/index.html",
    "revision": "6685ca9f8bc5ddc2add491a5f8972429"
  },
  {
    "url": "cli/show/index.html",
    "revision": "015a557981371a7cb12f4c5f15fa0194"
  },
  {
    "url": "cli/shutdown/index.html",
    "revision": "dc2bec333d4d7a3c93a1fa112e60123e"
  },
  {
    "url": "cli/start/index.html",
    "revision": "191df36e10d9f5e06104c859304922c1"
  },
  {
    "url": "cli/stop/index.html",
    "revision": "d2936d7d3fba5d96f386fb0dda0a4810"
  },
  {
    "url": "cli/version/index.html",
    "revision": "519674f23e21ed87b06c524bbf98e93c"
  },
  {
    "url": "config/application/index.html",
    "revision": "8d5ff1a1f33fafbe31d16e0a5cdb5028"
  },
  {
    "url": "config/applicationSecurityPolicy/index.html",
    "revision": "be2ec01953225bef3ac49d330c2b7472"
  },
  {
    "url": "config/external/index.html",
    "revision": "1388445fd847dcf52472d391cc83b3f9"
  },
  {
    "url": "config/externalSecurityPolicy/index.html",
    "revision": "f47b45448f0f83f3504ea62a11a2bc3e"
  },
  {
    "url": "config/index.html",
    "revision": "45ebf6a606da7c18a7b646215dcef989"
  },
  {
    "url": "config/metadata/index.html",
    "revision": "3af1d268f81f2fc8585959408616ad4c"
  },
  {
    "url": "config/service/index.html",
    "revision": "f226845faa72132b931e92fdb554766d"
  },
  {
    "url": "config/serviceSecurityPolicy/index.html",
    "revision": "be36c99ff7ba4cc09e8e9a8e5916da6b"
  },
  {
    "url": "config/session/index.html",
    "revision": "598a199e44610c5a1c857113dd13baa7"
  },
  {
    "url": "config/storage/index.html",
    "revision": "54eddecc592499677960fe5745656a62"
  },
  {
    "url": "config/tray/index.html",
    "revision": "3b95406571838c18ec4e13cfad37310d"
  },
  {
    "url": "config/updatePolicy/index.html",
    "revision": "c7f0db99eadd54d6a0af542750b61888"
  },
  {
    "url": "favicon-16.png",
    "revision": "96549c584a8e0fe1736caedac20ba4ce"
  },
  {
    "url": "favicon-32.png",
    "revision": "fd6f990095840d43ddde90a3e06ddd12"
  },
  {
    "url": "guide/index.html",
    "revision": "eed943fccdfae459e084b45ba15ba64c"
  },
  {
    "url": "icon-256.png",
    "revision": "630a99247bd8c4bff944a41035c5f1b5"
  },
  {
    "url": "icon-512.png",
    "revision": "079bf353ee7c2456844800e3ff607e5f"
  },
  {
    "url": "index.html",
    "revision": "a8e695e96eb504a06843f8254c4e4559"
  },
  {
    "url": "sdk/desktop/index.html",
    "revision": "b77560175b99e05969d4785ba65c951a"
  },
  {
    "url": "sdk/globalshortcut/index.html",
    "revision": "8758c4da793d43b59ecdd84c888f5df0"
  },
  {
    "url": "sdk/index.html",
    "revision": "7c692a63645e41018f3a268e992bbb80"
  },
  {
    "url": "sdk/launcher/index.html",
    "revision": "109877dd06a7c48efab218685a2f2d7e"
  },
  {
    "url": "sdk/logger/index.html",
    "revision": "9cb804bd74c40f3dafd1c39a68b8872d"
  },
  {
    "url": "sdk/registry/index.html",
    "revision": "50255789e798acd9627b924e321b4550"
  },
  {
    "url": "sdk/router/index.html",
    "revision": "b9e2c4163deecacc5bdd55c7942ffdf8"
  },
  {
    "url": "sdk/screen/index.html",
    "revision": "77cdbfb4dace74eda2be9d3011fd59db"
  },
  {
    "url": "sdk/window/index.html",
    "revision": "ff273b151ff122c1754af385f5289c9f"
  },
  {
    "url": "support/index.html",
    "revision": "f7533707b61337fea0400ff67c1606dc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
