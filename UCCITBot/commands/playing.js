// eklopfstein
// March 28th 2020
// adding document headers
const botconfig = require("./../botconfig.json");
const permissions = require("./../permissions.json");
let game = "";

module.exports.run = async (bot, message, args) => {
    {
        // If the bot is "off" don't run the command
        if (permissions.power == "off") {
            return;
        }
        // If bot is "on" but user is not an admin
        else if (!message.member.hasPermission(botconfig.admin)) {
            // Inform them they cannot use this command
            return message.reply("Only admins can use this command.");
        }
        // If bot is "on" and user is an admin
        else {
            // Set bot status to the given text
            game = args.join(" ").slice(0);
            bot.user.setActivity(game);
            message.channel.send(bot.user.username + " is now playing " + game);
        }
    }
}

// Name used to reference command
module.exports.reference = {
    name: "playing"
}