/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js
/* eslint-env node */
const ESLintPlugin = require("eslint-webpack-plugin");
const { configure } = require("quasar/wrappers");
const environmentConfiguration = require("./src/utils/environmentConfig.js");

module.exports = configure(function (ctx) {
  return {
    supportTS: false,
    boot: ["capacitor.js", "firebaseConnection.js"],
    css: ["app.scss"],
    extras: ["line-awesome", "roboto-font"],
    build: {
      vueRouterMode: "hash", // available values: 'hash', 'history'
      chainWebpack(chain) {
        chain.plugin("eslint-webpack-plugin").use(ESLintPlugin, [
          {
            extensions: ["js", "vue"],
          },
        ]);
      },
      env: {
        QENV: environmentConfiguration(process.env.QENV),
      },
    },
    server: {
      type: "http",
      port: 8080,
      open: true,
    },
    framework: {
      config: {},
      iconSet: "line-awesome", // Quasar icon set
      lang: "en-US", // Quasar language pack
      components: [],
      directives: [],
      importStrategy: "auto",
      plugins: ["Loading", "Notify"],
    },
    animations: [],
    ssr: {
      pwa: false,
      prodPort: 3000,
      maxAge: 1000 * 60 * 60 * 24 * 30,
      chainWebpackWebserver(chain) {
        chain.plugin("eslint-webpack-plugin").use(ESLintPlugin, [
          {
            extensions: ["js"],
          },
        ]);
      },
      middlewares: [ctx.prod ? "compression" : "", "render"],
    },
    pwa: {
      workboxPluginMode: "GenerateSW", // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {},

      // for the custom service worker ONLY (/src-pwa/custom-service-worker.[js|ts])
      // if using workbox in InjectManifest mode
      chainWebpackCustomSW(chain) {
        chain.plugin("eslint-webpack-plugin").use(ESLintPlugin, [
          {
            extensions: ["js"],
          },
        ]);
      },
      manifest: {
        name: `Belt-Tech App`,
        short_name: `Belt-Tech App`,
        description: `A Belt-Tech app to sync docs with office`,
        display: "standalone",
        orientation: "portrait",
        background_color: "#ffffff",
        theme_color: "#1A237E",
        icons: [
          {
            src: "icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },
    capacitor: {
      hideSplashscreen: true,
    },
    electron: {
      bundler: "packager", // 'packager' or 'builder
      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',
        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        appId: "mobile-doc-sync",
      },

      // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain
      chainWebpackMain(chain) {
        chain.plugin("eslint-webpack-plugin").use(ESLintPlugin, [
          {
            extensions: ["js"],
          },
        ]);
      },

      // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain
      chainWebpackPreload(chain) {
        chain.plugin("eslint-webpack-plugin").use(ESLintPlugin, [
          {
            extensions: ["js"],
          },
        ]);
      },
    },
  };
});
