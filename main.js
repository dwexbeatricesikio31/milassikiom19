const { Discord, Client} = require('discord.js');

let tokens = [""];

for (var i = 0; i < tokens.length; i++) {
  
  const client = new Client();
  client.login(tokens[i]).then(x => console.log(`${client.user.tag} giriş yaptı!`)).catch(err => console.error(err));
 setTimeout(() => { 
  client.on('ready', () => {
  	client.destroy()
   })
  }, i*500)
}
