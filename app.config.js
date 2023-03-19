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
***REMOVED***,
    updates: {
      fallbackToCacheTimeout: 0,
      url: "https://u.expo.dev/c5edad82-8079-4d3b-a28c-011cb8163f5b",
***REMOVED***,
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
***REMOVED***,
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#131212",
  ***REMOVED***,
      googleServicesFile: "./google-services.json",
      package: "com.devesh16.bento",
***REMOVED***,
    web: {
      favicon: "./assets/favicon.png",
***REMOVED***,
    extra: {
      firebaseEnv: process.env.FIREBASE_ENV,
      eas: {
        projectId: "c5edad82-8079-4d3b-a28c-011cb8163f5b",
  ***REMOVED***,
***REMOVED***,
    runtimeVersion: {
      policy: "sdkVersion",
***REMOVED***,
    plugins: [
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
      "@react-native-firebase/perf",
      "@react-native-firebase/crashlytics",
      [
        "expo-updates",
        {
          username: "devesh16",
    ***REMOVED***,
      ],
    ],
***REMOVED***,
***REMOVED***
