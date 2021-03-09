const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {

    const juke = new Discord.RichEmbed()
      .setColor('BLUE')
      .setAuthor(`Moderasyon`, client.user.avatarURL) 
.setTitle('prefix .')
      .setThumbnail(client.user.avatarURL)
      .addField('**:fire: **','`ban`,`bankaldır`, `reklamengel`,`otorolyardım`,`ototagkanal`,`ototag`,')
      .addField('**:fire: **','`uyar`,`uyarı-kaldır`,`uyarı-sayı`,`!yavaş-mod`,`seviyeyardım`')
      .addField('**:fire: **',' `güvenlik`,`güvenlik-sıfırla`,`sunucu-koruma`,`giriş-izni`,`küfürengel`,`prefix`,`temizle`,`özelkomutyardım`')
    
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
    name: 'moderasyon',
      category: 'moderasyon',
      description: 'moderasyon komutlarını gösteir.',
};