const botconfig = require("./../botconfig.json");

module.exports.run = async (bot, message, args) => {
    {
        // if the bot is powered on
        if (botconfig.power == "off") {
            return;
        }
        else {
            // Will list commands
            message.channel.send("This will be a generic help command");
        }
    }
}

// Name used to reference command
module.exports.reference = {
    name: "help"
}