const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
      const juke = new Discord.RichEmbed()
      .setColor('BLUE')
      .setAuthor(`Ekstra`, client.user.avatarURL) 
      .setThumbnail(client.user.avatarURL)
      .addField('**🔥 **','`davet`,`istatislik`, `sunucular` ')
      .addField('**🔥 **','`davet-oluştur`,`saat`,`endlesslovebin` ')
       .setFooter(``, client.user.avatarURL)
      .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'ekstra',
      usage: 'ekstra',
      description: 'ekstra komutlarını gösteir.',
};