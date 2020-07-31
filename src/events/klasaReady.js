const { Event } = require('klasa');

module.exports = class extends Event {

	async run() {
		this.client.user.setPresence({ status: 'online' });
	}

};
