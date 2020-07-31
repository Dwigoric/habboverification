const { Client } = require('klasa');

module.exports = class HabboVerifyer extends Client {

	constructor(clientOptions) {
		super(clientOptions);

		HabboVerifyer.defaultGuildSchema
			.add('codePrefix', 'string', { default: 'verify' })
			.add('notVerified', 'role')
			.add('setNickname', 'boolean', { default: true })
			.add('verified', 'role');

		HabboVerifyer.defaultUserSchema
			.add('verificationCode', 'string', { configurable: false });
	}

};
