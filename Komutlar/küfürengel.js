const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async(client, message, args) => { 
  let prefix =  db.fetch(`prefix_${message.author.id}`) || "PREFİX"
 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.RichEmbed() 
        .setTitle(`UYARI`)
        .setDescription("**Bu Komutu Kullanmak için `MANAGE_MESSAGES` / `MESAJLARI_YÖNET` Yetkisine Sahip Olmalısın!**")
        .setColor("ff0000")
        .setFooter(`${client.user.username} Küfür-Koruma Sistemi!`, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setTimestamp())
 
 
 if (!args[0]) return    message.channel.send(
      new Discord.RichEmbed()
        .setTitle(`UYARI`)
        .setDescription("**Yanlış Komut Kullanımı!**")
        .setFooter(`DCS Küfür-Koruma Sistemi!`, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setTimestamp()
        .addField(
          `Doğru Kullanım`,
          `\`${prefix}küfür aç\` **veya** \`${prefix}küfür kapat\` **veya** \`${prefix}küfür cezalırol @rol\``)
        .setColor("ff0000"))
      

  let küfür = await db.fetch(`küfür_${message.guild.id}`)
  let küfürkapalim = await db.fetch(`küfürkapali${message.guild.id}`)

  
    if(args[0] == 'cezalırol') {
    let role = message.mentions.roles.first() || message.guild.roles.find(ff => ff.name === args.slice(1).join(' '))
    db.set(`küfürrol${message.guild.id}`, role.id)
    return message.channel.send("Başarıyla Küfür Edene verilecek cezalırol ayarlandı!")}
  
  if (args[0] === 'aç') {
    
if (küfür === 'Açık') {
message.channel.send(new Discord.RichEmbed()
        .setColor("ff0000")
        .setTitle(`UYARI`)
        .setDescription("**__Küfür Koruma__ Zaten Aktif!**")
        .setTimestamp()
  
        .setFooter(`${client.user.username} Küfür-Koruma Sistemi!`, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL))
        message.react('✅')
return
} 
    
else {
    db.set(`küfür_${message.guild.id}`, 'Açık')
    db.delete(`küfürkapali${message.guild.id}`, 'RKapalı')
     message.channel.send(new Discord.RichEmbed()
        .setColor("ff0000")
        .setTitle(`BAŞARILI`)
        .setDescription(
          `**__Küfür Koruma__ Başarıyla Aktif Edildi!\n \n▪ Kapatmak için: \`${prefix}küfür kapat\`**`
        )
        .addField("** **", "**__Not:__** Küfür-Koruma Sistemi `MANAGE_MESSAGES`/`MESAJLARI_YÖNET` Yetkisi Olanları Etkilemez!")
 .setFooter(` Küfür-Koruma Sistemi!`, client.user.avatarURL)
        .setTimestamp()
        .setThumbnail(client.user.avatarURL))
        message.react('✅')
}
    
    
  }
  else if (args[0] == 'kapat') {
    
if (küfürkapalim === 'RKapalı') {            
message.channel.send(new Discord.RichEmbed()
        .setColor("ff0000")
        .setTitle(`UYARI`)
        .setDescription("**__Küfür Koruma__ Zaten Kapalı!**")
        .setTimestamp()
 .setFooter(` Küfür-Koruma Sistemi!`, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL))
return
      
}
else {    
    db.delete(`küfür_${message.guild.id}`, 'Kapalı')
    db.set(`küfürkapali${message.guild.id}`, 'RKapalı')
    db.delete(`küfürrol${message.guild.id}`)
      message.channel.send(new Discord.RichEmbed()
      .setColor("ff0000")
      .setTitle(`BAŞARILI`)
      .setDescription(
        `**__Küfür Koruma Sistemi__ Başarıyla Kapatıldı!\n \n▪ Açmak için: \`${prefix}küfür aç\`**`
      )
      .setTimestamp()
  .setFooter(`DCS Küfür-Koruma Sistemi!`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL))
      message.react('✅')
     }
  }
}

                                                                                                                                                                                    
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["küfür-engel"], 
  permLevel: 0
};

exports.help = {
  name: 'küfür'

};