const { Client, Intents, Permissions } = require("discord.js");


const client = new Client({
  presence: {
        status: 'online',
        afk: false,
        activities: [{
            name: "kjubejka",
            type: "LISTENING",
        }],
  },
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MEMBERS]
});


client.on("ready", async () => {
  console.log(client.user.username, client.user.id);
  
});

client.on("messageCreate", async (message) => {
  const author = await message.guild.members.fetch(message.author.id);
  if (message.content.toLowerCase().startsWith("clear") && author.permissions.has('ADMINISTRATOR')) await clear(message);
});

async function clear(message){
  let members = await message.guild.members.fetch();
  let roles = await message.guild.roles.fetch();
  for(let member of members){
    let confirm = false;
    for(let role of roles){
      if(role[1].id == "667384292694818834"){
      }else if(member[1].roles.cache.has(role[1].id)){
        confirm = true;
      };
    }
    if(confirm == false) member[1].kick();
  }
}

client.login(process.env['token']);
// HTTP Server
const http = require('http');
http.createServer((req, res) => {
  res.write("OK");
  res.end();
}).listen(3000);
