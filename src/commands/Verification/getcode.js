const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Get your code for verifying your Habbo character!'
		});
	}

	async run(message) {
		if (!message.member.roles.cache.has(message.guild.settings.get('notVerified'))) throw 'You are not unverified.';
		if (message.author.settings.get('verificationCode')) throw `You already have a code! Change your Habbo motto to it and run \`${message.guild.settings.get('prefix')}verify <Habbo username>\`.`;
		const code = Date.now().toString(36);
		await message.author.settings.update('verificationCode', code);
		// eslint-disable-next-line max-len
		await message.author.send(`Please change your Habbo motto to \`${message.guild.settings.get('codePrefix')}-${code}\` then run the command \`${message.guild.settings.get('prefix')}verify <Habbo username>\`.`)
			.catch(() => {
				message.author.settings.reset('verificationCode');
				throw 'Please make sure that I can send you DMs!';
			});
		message.send('Your verification code has been generated! Please check your DMs.');
	}

};
