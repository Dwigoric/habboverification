const HabboVerifier = require('./lib/structures/HabboVerifier');
const { config, token } = require('./config');

new HabboVerifier(config).login(token);
