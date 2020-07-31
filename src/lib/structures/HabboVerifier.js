const { Client } = require('klasa');

module.exports = class HabboVerifier extends Client {

	constructor(clientOptions) {
		super(clientOptions);

		HabboVerifier.defaultGuildSchema
			.add('codePrefix', 'string', { default: 'verify' })
			.add('notVerified', 'role')
			.add('setNickname', 'boolean', { default: true })
			.add('verified', 'role');

		HabboVerifier.defaultUserSchema
			.add('verificationCode', 'string', { configurable: false });
	}

};
