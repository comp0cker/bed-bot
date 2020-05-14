# bed bot

Bot for Holli's Bed Wars server. Built with NodeJS + love <3

## User Commands

* `[ign]` refers to your in-game-name for Minecraft

#### `!set [ign]`

Sets your ign to `[ign]` in the database. Can only be used in the channel `#set-ign`.

Once run, the user gets the following message:

```
Welcome to fuck it, bw server, demathderp!
Your in game name has been successfully registered.
```

The bot then runs `!update [mentioned user]` (mentioned user being the current user who sent the message) to update their roles accordingly.

#### `!refresh`

Refreshes your roles in the server. Requires that you have run `!set`.

#### `!stats [ign]`

Pulls up the stats of any player.

## Admin Commands

* `[mentioned user]` refers to the user mentioned in Discord, for example **`@j_lancelott`**

#### `!update-all`

Updates all of the roles for all players in the database.

#### `!update [mentioned user]`

Updates the roles for a specific user. Assumes that the user is in the database, else throws an error.

#### `!assign [mentioned user] [ign]`

Assign the mentioned user to their in game name.

#### `!list`

Lists all the users in the database.

## Cron Job

*currently broken help*

The currently implemented cron job runs `!update-all` once every **hour**. This ensures that everyone's stats are up to date with Hive all the time.

## Database

The database used is Postgres deployed on Heroku. The database has the following schema:

```
TABLE users (
    username varchar(255),
    ign varchar(255)
)
```

where `username` is the user's Discord username, and `ign` is their Minecraft in game name.
