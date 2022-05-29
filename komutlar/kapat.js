const Database = require("@replit/database");
const db = new Database();

exports.run = async (client, message) => {
    console.log('kapat kullanıldı')
if (message.author.hasPermission('MANAGE_MESSAGES') || message.author.id == "614523861429387439") {
  let veri = await db.get(`mesajayari.${message.guild.id}`);
  if (!veri) return message.lineReplyNoMention("⛔ Mesaj ayarı zaten kapalı!");
  db.delete(`mesajayari.${message.guild.id}`).then(() => {
    message.react("👌");
  });
}else{
    message.lineReplyNoMention("⛔ Bunu yapmaya yetkin yok!")
}

};
