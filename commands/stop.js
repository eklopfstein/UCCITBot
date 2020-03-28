const botconfig = require("./../botconfig.json");
const permissions = require("./../permissions.json");

module.exports.run = async (bot, message, args) => {
    // If user is not an admin
    if (!message.member.hasPermission(permissions.admin)) {
        // Inform them they cannot use this command
        message.channel.send("Only admins can use this command.");
        return;
    }
    // If user is an admin
    else {
        // "power off" the bot
        bot.user.setActivity("Dead");
        botconfig.power = "off";
        message.channel.send(bot.user.username + " is done!");
        return;
    }
}

// Name used to reference command
module.exports.reference = {
    name: "stop"
}