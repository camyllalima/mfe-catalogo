const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  //@ts-ignore
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "nextApp",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          partners: "partners@http://localhost:9007/remoteEntry.js",
        },
        exposes: {},
        shared: {},
      })
    );

    return config;
  },
};
