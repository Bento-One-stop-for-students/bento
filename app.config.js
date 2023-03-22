module.exports = ({ config }) => {
  return {
    ...config,
    extra: {
      firebaseEnv: process.env.FIREBASE_ENV,
      webClientId:
        "864652401846-tai9latbdbms7o0solohb8n9a0kf1g0o.apps.googleusercontent.com",
      eas: {
        projectId: "c5edad82-8079-4d3b-a28c-011cb8163f5b",
      },
    },
    updates: {
      url: "https://u.expo.dev/c5edad82-8079-4d3b-a28c-011cb8163f5b",
    },
    runtimeVersion: {
      policy: "sdkVersion",
    },
  };
};
