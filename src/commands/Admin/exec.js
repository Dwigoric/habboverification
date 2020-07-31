// Copyright (c) 2017-2019 dirigeants. All rights reserved. MIT license.
const { Command, Stopwatch, util: { exec, codeBlock } } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['execute'],
			description: 'Execute commands in the terminal, use with EXTREME CAUTION.',
			flagSupport: false,
			guarded: true,
			permissionLevel: 10,
			usage: '<Expression:string>'
		});
	}

	async run(msg, [input]) {
		const stopwatch = new Stopwatch().start();
		const result = await exec(input, { timeout: 'timeout' in msg.flagArgs ? Number(msg.flagArgs.timeout) : 60000 })
			.catch(error => ({ error }));
		const results = [];
		if (result.stdout) results.push(`**\`OUTPUT\`**${codeBlock('', result.stdout)}`);
		if (result.stderr) results.push(`**\`STDERR\`**${codeBlock('', result.stderr)}`);
		if (result.error) results.push(`**\`ERROR\`**${codeBlock('xl', result.error)}`);

		return msg.sendMessage(results.concat(`⏱ ${stopwatch.stop()}`).join('\n'));
	}

};
