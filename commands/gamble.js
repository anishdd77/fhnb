const Discord = require("discord.js");
const fs = require("fs");
let credits = require("../jsons/credits.json");

module.exports.run = async (client,message,args) => {
//gamble <amount>

const uwu = message.content.split(" ").slice(1).join(" ");

if(!credits[message.author.id]){
    return message.reply("You don't have any money to gamble")
  }

  let sCoins = credits[message.author.id].credits;

  if(sCoins < uwu) return message.reply("I'm sorry, but you don't have enough money to gamble that much");

  let gabamt = Math.floor(Math.random() * 2) + 1;
  let gablamt = Math.floor(Math.random() * 2) + 1;
  let gambleamt = Math.floor(Math.random() * uwu) + 1;

  if (gabamt == gablamt && uwu == "all") {
    credits[message.author.id] = {
        credits: sCoins + parseInt(sCoins)
      };
    message.channel.send(`:tada: Congrats, you won $${sCoins} and got to keep what you bet`);
  }
  if (gabamt !== gablamt && uwu == "all") {
    credits[message.author.id] = {
        credits: sCoins - parseInt(sCoins)
      };
    message.channel.send(`OUCH!, I'm sorry, but you just lost all of your money`);
  }

  if (gabamt == gablamt && uwu !== "all") {
    credits[message.author.id] = {
        credits: sCoins + parseInt(gambleamt)
      };
    message.channel.send(`:tada: Congrats, you won $${gambleamt} and got to keep what you bet`);
  }
  if (gabamt !== gablamt && uwu !== "all") {
    credits[message.author.id] = {
        credits: sCoins - parseInt(uwu)
      };
    message.channel.send(`Sadly, you just lost $${uwu} ... better luck next time`);
  }

  fs.writeFile("./jsons/credits.json", JSON.stringify(credits), (err) => {
    if(err) cosole.log(err)
  });

}

module.exports.help = {
    name: "gamble"
}