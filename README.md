# Habbo Verifier
A simple Discord bot for Habbo verification using Habbo mottos, built on [klasa framework](https://github.com/dirigeants/klasa).

## Prerequisites
1. A Discord bot app. If you do not have one, you can make one [here](https://discord.com/developers/applications).
2. [Node.js](https://nodejs.org/en/) >= 12.x
3. (Optional) [RethinkDB](https://rethinkdb.com/docs/install/) or [MongoDB](https://www.mongodb.com/try/download/community) or [PostgreSQL](https://www.postgresql.org/)

## Setting Up
1. Clone the `config.example.js` file and rename it to `config.js`
2. At the bottom of the file, put the bot's token to `exports.token`.
3. Install the required dependencies by running `yarn` or `npm install` on your CLI.
4. (Optional) By default, the bot uses the built-in atomic database system. However, you can use RethinkDB, MongoDB, or PostgreSQL. You can edit the database options in the config.js file under the providers object, using the provider's lowercase name as the sub-object name.
5. Run `yarn run run` or `npm run run` on your CLI to start the bot. Alternatively, use a package manager such as [PM2](https://www.npmjs.com/package/pm2) to keep the bot running.

## Modifying
- You can modify the bot's activity using the `presence` property of the config file.
- The default prefix for the bot is `!`. You can change this using `!conf set prefix <new prefix>` or `@botmention conf set prefix <new prefix>`.
- Modify the "not verified" role using `!conf set notVerified @rolemention`. Only members with this role will be able to request a verification code from the bot.
- Modify the "verified" role using `!conf set verified @rolemention`. Once verified, members will be given this role.
- Make sure the unverified and verified roles are below the bot's highest role, and that the bot has Manage Roles permission.
- By default, the bot tries to add the user's Habbo username next to their nickname or Discord username. You can change this by running `!conf set setNickname false`.
- Change the motto prefix with `!conf set codePrefix <newprefix>`. The default motto prefix is `verify`.

## Verifying Process
1. The member runs `!getcode` to get a verification code from the bot, to be sent in their DMs.
2. The member must change their Habbo motto to that code and run `!verify <Habbo username>`.

### License
Code from this repository is licensed under GNU Affero General Public License v3.0.
