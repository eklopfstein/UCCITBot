const botconfig = require("./../botconfig.json");

module.exports.run = async (bot, message, args) => {
    // If user is not an admin
    if (!message.member.hasPermission(botconfig.admin)) {
        // Inform them they cannot use this command
        return message.reply("Only admins can use this command.");
    }
    // If user is an admin
    else {
        // "power on" the bot
        bot.user.setActivity("God");
        botconfig.power = "on";
        message.channel.send(bot.user.username + " is ready!");

        return;
    }
}

// Name used to reference command
module.exports.reference = {
    name: "start"
}