const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Vuffy")
.addField(":robot: .moderasyon","Moderasyon komutlarını atar.",true)
.addField(":robot: .eğlence","eğlence komutlarını atar.",true)
.addField(":robot: .ekstra" ,"ekstra komutları gösterir.",true)
.addField(":robot: .kullanıcı","Kullanıcı komutları atar.",true)


message.channel.sendEmbed(lembed)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
  };
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
  };