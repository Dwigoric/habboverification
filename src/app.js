const HabboVerifyer = require('./lib/structures/HabboVerifyer');
const { config, token } = require('./config');

new HabboVerifyer(config).login(token);
