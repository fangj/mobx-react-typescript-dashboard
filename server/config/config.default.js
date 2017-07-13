'use strict';
const path=require("path");

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1499925580634_8678';

  // add your config here
  config.static = {
        prefix: "/",
        dir: path.join(appInfo.baseDir, 'public')
    };

    config.security = {
        csrf: {
            enable: false,
        },
    };
  return config;
};
