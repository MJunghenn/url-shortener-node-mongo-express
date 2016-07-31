var config = {};

config.db = {};
config.port = 3001
config.webhost = 'http://localhost:' + config.port + '/';

config.db.host = 'localhost';
config.db.name = 'url_shortener';

module.exports = config;
