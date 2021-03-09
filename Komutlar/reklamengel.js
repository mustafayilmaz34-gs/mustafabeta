const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async(client, message, args) => { 
  let prefix = db.fetch(`prefix_${message.guild.id}`) || "PREFİX"

 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.RichEmbed() 
        .setTitle(`UYARI`)
        .setDescription("**Bu Komutu Kullanmak için `MANAGE_MESSAGES` / `MESAJLARI_YÖNET` Yetkisine Sahip Olmalısın!**")
        .setColor("ff0000")
      .setFooter(` Reklam-Koruma Sistemi!`, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setTimestamp())
   
  if (!args[0]) return    message.channel.send(
      new Discord.RichEmbed()
        .setTitle(`UYARI`)
        .setDescription("**Yanlış Komut Kullanımı!**")
      .setFooter(`DCS Reklam-Koruma Sistemi!`, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setTimestamp()
        .addField(
          `Doğru Kullanım`,
          `\`${prefix}reklam aç\` **veya** \`${prefix}reklam kapat\` **veya** \`${prefix}reklam cezalırol @rol\``)
        .setColor("ff0000"))

  let reklam = await db.fetch(`reklam_${message.guild.id}`)
  let reklamkapalim = await db.fetch(`reklamkapali${message.guild.id}`)

  
    if(args[0] == 'cezalırol') {
    let role = message.mentions.roles.first() || message.guild.roles.find(ff => ff.name === args.slice(1).join(' '))
    db.set(`reklamrol${message.guild.id}`, role.id)
    return message.channel.send("Başarıyla Reklam yapana verilecek cezalırol ayarlandı!")}
  
  if (args[0] === 'aç') {
    
if (reklam === 'Açık') {
message.channel.send(new Discord.RichEmbed()
        .setColor("ff0000")
        .setTitle(`UYARI`)
        .setDescription("**__Reklam Koruma__ Zaten Aktif!**")
        .setTimestamp()
      .setFooter(` Reklam-Koruma Sistemi!`, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL))

return
} 
    
else {
    db.set(`reklam_${message.guild.id}`, 'Açık')
    db.delete(`reklamkapali${message.guild.id}`, 'RKapalı')
     message.channel.send(new Discord.RichEmbed()
        .setColor("ff0000")
        .setTitle(`BAŞARILI`)
        .setDescription(
          `**__Reklam Koruma__ Başarıyla Aktif Edildi!\n \n▪ Kapatmak için: \`${prefix}reklam kapat\`**`
        )
        .addField("** **", "**__Not:__** Reklam-Koruma Sistemi `MANAGE_MESSAGES`/`MESAJLARI_YÖNET` Yetkisi Olanları Etkilemez!")
      .setFooter(` Reklam-Koruma Sistemi!`, client.user.avatarURL)
        .setTimestamp()
        .setThumbnail(client.user.avatarURL))
        message.react('✅')
}
    
    
  }
  else if (args[0] == 'kapat') {
    
if (reklamkapalim === 'RKapalı') {            
message.channel.send(new Discord.RichEmbed()
        .setColor("ff0000")
        .setTitle(`UYARI`)
        .setDescription("**__Reklam Koruma__ Zaten Kapalı!**")
        .setTimestamp()
      .setFooter(` Reklam-Koruma Sistemi!`, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL))
 
return
      
}
else {    
    db.delete(`reklam_${message.guild.id}`, 'Kapalı')
    db.set(`reklamkapali${message.guild.id}`, 'RKapalı')
    db.delete(`reklamrol${message.guild.id}`)
      message.channel.send(new Discord.RichEmbed()
      .setColor("ff0000")
      .setTitle(`BAŞARILI`)
      .setDescription(
        `**__Reklam Koruma Sistemi__ Başarıyla Kapatıldı!\n \n▪ Açmak için: \`${prefix}reklam aç\`**`
      )
      .setTimestamp()
      .setFooter(` Reklam-Koruma Sistemi!`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL))
      message.react('✅')
     }
  }
}

                                                                                                                                                                                    
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'reklam'

};