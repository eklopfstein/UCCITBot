// eklopfstein
// April 28th 2020
// adding message filter
var Filter = require('bad-words'),
    filter = new Filter();


module.exports.run = async (bot, message) => {
    {
        // if message contains profanity
        if (filter.isProfane(message.content))
        {
            // Delete it and send back a clean message
            message.delete();
            message.reply(filter.clean(message.content));
        }
    }
}

// Name used to reference command
module.exports.reference = {
    name: "filter"
}