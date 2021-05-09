const Database = require("@replit/database");
const db = new Database();
const Discord = require("discord.js");

exports.run = async (client, message, [mesajID]) => {
  let member = message.author;

  let avatar = member.displayAvatarURL({ size: 1024 });
  let veri = await db.get(`mesajayari.${message.guild.id}`);
  message.channel.messages
    .fetch(mesajID)
    .then(napimed => {
      if (!veri) message.react("👍");
      napimed.react("🇳");
      napimed.react("🇦");
      napimed.react("🇵");
      napimed.react("ℹ️");
      napimed.react("🇲");
      console.log(
            "Sunucu adı: " +
            message.guild.name +
            "\nSunucu ID si: " +
            message.guild.id +
            "\nKanal adı: " +
            message.channel.name +
            "\nKanal ID si: " +
            message.channel.id +
            "\nKullanıcı: " +
            message.author.tag +
            "\nMağdur: " +
            napimed.author.tag +
            "\nMesaj: " +
            napimed.content
      );
      if (veri === true) {
        const napimd = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle(napimed.author.username + " HAHA NAPİMLENDİN")
          .setFooter(message.author.username + " seni napimledi", avatar);
        napimed.lineReplyNoMention(napimd);
        message.delete();
      }
    })
    .catch(err => {
      message.lineReplyNoMention("⛔ Bir mesaj IDsi belirtmelisiniz!");
    });
};
