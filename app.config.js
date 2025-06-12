export default {
  expo: {
    name: "Clima Local",
    slug: "clima-local",
    version: "1.0.0",
    sdkVersion: "53.0.0",
    platforms: ["ios", "android", "web"],
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true
    },
    android: {
      package: "com.anonymous.climalocal", // 👈 Agora está no mesmo bloco
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF"
      }
    },
    web: {
      favicon: "./assets/favicon.png"
    }
  }
};
