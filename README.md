# Habbo Verifyer
A simple Discord bot for Habbo verification using Habbo mottos, built on [klasa framework](https://github.com/dirigeants/klasa).

## Prerequisites
1. A Discord bot app. If you do not have one, you can make one [here](https://discord.com/developers/applications).
2. [Node.js](https://nodejs.org/en/) >= 12.x
3. [RethinkDB](https://rethinkdb.com/docs/install/)

## Setting Up
1. Clone the `config.example.js` file and rename it to `config.js`
2. At the bottom of the file, put the bot's token to `exports.token`.
3. Install the required dependencies by running `yarn` or `npm install` on your CLI.
4. Start your RethinkDB instance.
5. Run `yarn run run` or `npm run run` on your CLI to start the bot. Alternatively, use a package manager such as [PM2](https://www.npmjs.com/package/pm2) to keep the bot running.

## Modifying
- The default prefix for the bot is `!`. You can change this using `!conf set prefix <new prefix>` or `@botmention conf set prefix <new prefix>`.
- Modify the "not verified" role using `!conf set notVerified @rolemention`. Only members with this role will be able to request a verification code from the bot.
- Modify the "verified" role using `!conf set verified @rolemention`. Once verified, members will be given this role.
- Make sure the unverified and verified roles are below the bot's highest role, and that the bot has Manage Roles permission.
- Change the motto prefix with `!conf set codePrefix <newprefix>`.

## Verifying Process
1. The member runs `!getcode` to get a verification code from the bot, to be sent in their DMs.
2. The member must change their Habbo motto to that code and run `!verify <Habbo username>`.

### License
Code from this repository is licensed under GNU Affero General Public License v2.0.