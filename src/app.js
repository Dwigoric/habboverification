const HabboVerifyer = require('./lib/structures/HabboVerifyer');
const { config, token } = require('./config.example');

new HabboVerifyer(config).login(token);
