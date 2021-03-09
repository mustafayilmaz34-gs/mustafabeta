const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
      const juke = new Discord.RichEmbed()
      .setColor('BLUE')
      .setAuthor(`Vuffy`, client.user.avatarURL) 
      .setThumbnail(client.user.avatarURL)
      .addField('**:fire: **','`espri`, `koş`, `karat`, `tokatat`, ')
      .addField('**:fire: **','`avatar`,`mcödül`, `zar-at`, ')
    .addField("**:fire: **", "`gol-at`,`sansli-sayim`,`Adam Asmaca` ,`güzelsözler`,`yazıtura`")
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
    name: 'eğlence',
      category: 'eğlence',
      description: 'eğlence komutlarını gösteir.',
};