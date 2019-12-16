const Discord = require("discord.js");
const prefixes = require("../jsons/prefixes.json");

module.exports.run = async (client,message,args) => {
	
	const prefix = prefixes[message.guild.id].prefixes;
const uwu = message.content.split(" ").slice(1).join(" ");

if (!uwu && message.author.id !== "377271843502948354") {	
    const RichEmbed = new Discord.RichEmbed()
    .setColor(`${message.member.displayHexColor}`)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL)
    .setTitle(`help for ${client.user.username}`)
    .addField('**Misc commands:**', '`ping` `glitch` `emote` `remindme` `cookies` `give` `google` `translate` `urban` `anime` `weather` `getinvite` `invite` `role` `sayd` `rep` `setdesc`')
    .addField('**Image commands:**', '`neko` `rem` `animepic` `nsfw` `lizard` `dog` `bird` `bunny` `pat` `pout` `cry` `hug` `kiss` `OwO` `avatar` `servericon`')
	.addField('**Currency commands:**', '`gamble` `balance` `bank` `transfer`')
    .addField('**Moderation commands:**', '`lvls` `poll` `mute` `kick` `ban` `prune` `setprefix` `setlvlmsg` `warn` `clearwarn`')
    .addField('**Information commands:**', '`roleinfo` `serverinfo` `botinfo` `userinfo` `profile` `level`')
    .addField('**Music commands:**', '`play` `skip` `stop` `pause` `resume` `volume` `np` `queue`')
    .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
    message.channel.send({embed: RichEmbed});
    console.log(`help command has been used by ${message.author.username} in ${message.channel.guild}`);
}
if (!uwu && message.author.id == "377271843502948354") {	
    const RichEmbed = new Discord.RichEmbed()
    .setColor(`${message.member.displayHexColor}`)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL)
    .setTitle(`help for ${client.user.username}`)
    .addField('**Misc commands:**', '`ping` `glitch` `emote` `remindme` `cookies` `give` `google` `translate` `urban` `anime` `weather` `getinvite` `invite` `role` `sayd` `rep` `setdesc`')
    .addField('**Image commands:**', '`neko` `rem` `animepic` `nsfw` `lizard` `dog` `bird` `bunny` `pat` `pout` `cry` `hug` `kiss` `OwO` `avatar` `servericon`')
	.addField('**Currency commands:**', '`gamble` `balance` `bank` `transfer`')
    .addField('**Moderation commands:**', '`lvls` `poll` `mute` `kick` `ban` `prune` `setprefix` `setlvlmsg` `warn` `clearwarn`')
    .addField('**Information commands:**', '`roleinfo` `serverinfo` `botinfo` `userinfo` `profile` `level`')
    .addField('**Masters exclusive:**', '`setbotname` `setinv` `seton` `setdnd` `setidle` `eval` `restart` `reload` `leave`')
	.addField('**Music commands:**', '`play` `skip` `stop` `pause` `resume` `volume` `np` `queue`')
    .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
    message.channel.send({embed: RichEmbed});
    console.log(`help command has been used by ${message.author.username} in ${message.channel.guild}`);
}

}
module.exports.help = {
    name: "help",
	alias: "h",
	type: "help"
}
