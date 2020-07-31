const { Client } = require('klasa');

module.exports = class HabboVerifyer extends Client {

	constructor(clientOptions) {
		super(clientOptions);

		HabboVerifyer.defaultGuildSchema
			.add('codePrefix', 'string')
			.add('notVerified', 'role')
			.add('verified', 'role');

		HabboVerifyer.defaultUserSchema
			.add('verificationCode', 'string', { configurable: false });
	}

};
