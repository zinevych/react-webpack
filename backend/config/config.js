var path = require('path'),
  rootPath = path.normalize(__dirname + '/..'),
  env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      secret: 'sec1',
      name: 'reactWebpack'
    },
    port: 3000,
    db: 'mongodb://localhost/reactWebpackDB'
  },

  test: {
    root: rootPath,
    app: {
      name: 'landing1'
    },
    port: 3000,
    db: 'mongodb://localhost/landing1-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'landing1'
    },
    port: 3000,
    db: 'mongodb://localhost/landing1-production'
  }
};

module.exports = config[env];
