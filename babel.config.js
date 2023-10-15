module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      // Required for react-native-dotenv
      ["module:react-native-dotenv", {
        "envName": "APP_ENV",
        "moduleName": "@env",
        "path": ".env",
        "blocklist": null,
        "allowlist": ['COINGECKO_API'],
        "safe": false,
        "allowUndefined": true,
        "verbose": false
      }]
    ],
  };
};
