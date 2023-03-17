export default () => ({
  expo: {
    name: "Bento",
    slug: "bento",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "cover",
      backgroundColor: "#131212",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#131212",
      },
      googleServicesFile: "./google-services.json",
      package: "com.devesh16.bento",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "c5edad82-8079-4d3b-a28c-011cb8163f5b",
      },
    },
    plugins: [
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
      "@react-native-firebase/perf",
      "@react-native-firebase/crashlytics",
    ],
  },
});
