const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
	
	var neko = message.guild.members.find("id", "377271843502948354");
	if (message.member !== neko)return message.channel.send("you do not have the proper permissions to use this command");
	if (neko) {
	client.user.setStatus("dnd");
	message.channel.send('My Master set my status to: ``"dnd"``');
	console.log('you set my status to dnd');
	}
}

module.exports.help = {
  name: "setdnd"
}