const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const locations = require("./locations.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({ disableEveryone: true });
bot.commands = new Discord.Collection();

// Reads through files in the commands folder
fs.readdir("./commands/", (err, files) => {

    // if there is an error log to the console
    if (err) console.log(err);

    // Excule any non js files
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    // If no commands are found log to the console
    if (jsfile.length <= 0) {
        console.log("Couldn't find commands.");
        return;
    }

    // Reads through and loads all the commands
    jsfile.forEach((command) => {
        let file = require(`./commands/${command}`);
        console.log(`${command} loaded!`);
        bot.commands.set(file.reference.name, file);
    });

});


bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);

    // List off all members in the server
    let server = bot.guilds.get('564330850465087539');
    server.members.forEach(member => {
        console.log(member.user.username)
    });
});

// When any message is sent
bot.on("message", async message => {
    // Ignores own messages
    if (message.author.bot) return;
    // currently does not take commands over DM
    if (message.channel.type === "dm") return;

    // reads the message to see if it is a command
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    // toLowerCase to make commands not case sensitive
    let commandfile = bot.commands.get(cmd.slice(prefix.length).toLowerCase());
    // if the message was a command it runs it
    if (commandfile) commandfile.run(bot, message, args);

});

// Sends a welcome message whenever some joins
bot.on('guildMemberAdd', member => {
    channelID.send(`Welcome to UCC IT server, ${member}.`);
});

// Sends a goodbye message whenever some leaves
bot.on("guildMemberRemove", (member) => {
    channelID.send(`Bye bye, ${member}.`);
});

// connect to server(s)
bot.login(tokenfile.token);