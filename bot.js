const Discord = require('discord.js');
const client = new Discord.Client(); 
const fs = require('fs');


  client.on('message', message => {

    if (message.content === "اقفل") {
                        if(!message.channel.guild) return message.reply('** <a:712799958511648778:739826677206745139> -|To Server Night Club only**');

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('** <a:712799958511648778:739826677206745139> -|You Dont have role**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("** <a:712799958511648778:739826677206745139> -|Chat Night Club has been locked.**")
           });
             }
if (message.content === "افتح") {
    if(!message.channel.guild) return message.reply('** <<a:loadinggg:647272762179846144> -|For server Night Club**');

if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('** <a:712799958511648778:739826677206745139> -|You Dont have role.**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("** <a:712799823425830923:739826677609398433> -|Chat Night Club has been unlocked.**")
           });
             }



});

	
  
  
client.on('message', message => {
    if (message.content.startsWith("لينك")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("** <a:true2:627765848534286346> -|Check the private message.**")

message.author.send(`**link,**`)


    }
});
  client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bcrma')){
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
message.channel.sendMessage('**The message is being sent.** |<a:true:627763355209170955>')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});





let room = "651584508944187403"

client.on("guildMemberAdd", member => {
    let guild = client.channels.get(room).guild.id

    if(member.guild.id != guild) return;
    client.channels.get(room).setName("Welcome "+member.user.username).then(m=> { setTimeout(() => {
        client.channels.get(room).setName(member.guild.name+" - "+member.guild.members.size)
    }, 3000)})
} )

client.on("guildMemberRemove", member => {
    let guild = client.channels.get(room).guild.id

    if(member.guild.id != guild) return;
    client.channels.get(room).setName("Member Left :(").then(m=> { setTimeout(() => {
        client.channels.get(room).setName(member.guild.name+" - "+member.guild.members.size)
    }, 3000)})
})

client.on("voiceStateUpdate" , (oldMember, newMember) => {
    let guild = client.channels.get(room).guild.id

    if(oldMember.guild.id != guild) return;
    let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel
  if(oldUserChannel === undefined && newUserChannel !== undefined) {
        client.channels.get(room).setName("Hii, "+oldMember.user.username).then(m=> { setTimeout(() => {
            client.channels.get(room).setName(oldMember.guild.name+" - "+oldMember.guild.members.size)
            }, 3000)})
  } else if(newUserChannel === undefined){
        client.channels.get(room).setName("Byee, "+oldMember.user.username).then(m=> { setTimeout(() => {
            client.channels.get(room).setName(oldMember.guild.name+" - "+oldMember.guild.members.size)
        }, 3000)})
  }
} )





client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Rawhangi`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Rawhangi ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`System; | Night Club.`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});

client.login("NzM5ODI3MjQxMDg0NzgwNTk2.XygHzw.r3UnpqFttE2jcMbsgRNshJCEhH8");