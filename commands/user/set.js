const { Command } = require('discord.js-commando');

const update = require('../admin/update')
const addUser = require('../../db/addUser')

module.exports = class SetCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'set',
			group: 'user',
			memberName: 'set',
			description: 'Assigns yourself an in game name.',
			examples: ['demathderp'],
			args: [
				{
					key: 'ign',
					prompt: 'Type in your in game name',
					type: 'string',
				},
			],
		});
	}

	run(message, { ign }) {
        if (message.channel.name !== 'ign') {
            message.reply('Must be in #ign to run');
            return;
        }

		console.log(message.member)
		
		addUser.run(message, '<@' + message.member.id + '>', ign)
		message.reply(
			'\n' +
			'Welcome to fuck it, bw server, ' + ign + '!\n' +
			'*Your in game name has been successfully registered.*'
		)

		const u = new update(this.client)
		u.addServRoles(message.member.id, ign, message)
	}
};