async function appendGuildAvatar() {
    const app = document.querySelector('#app');
  
    // 1. From the HTTP API fetch a list of all of the user's guilds
    const guilds = await fetch(`https://discord.com/api/v10/users/@me/guilds`, {
      headers: {
        // NOTE: we're using the access_token provided by the "authenticate" command
        Authorization: `Bearer ${auth.access_token}`,
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  
    // 2. Find the current guild's info, including it's "icon"
    const currentGuild = guilds.find((g) => g.id === discordSdk.guildId);
  
    // 3. Append to the UI an img tag with the related information
    if (currentGuild != null) {
      const guildImg = document.createElement('img');
      guildImg.setAttribute(
        'src',
        // More info on image formatting here: https://discord.com/developers/docs/reference#image-formatting
        `https://cdn.discordapp.com/icons/${currentGuild.id}/${currentGuild.icon}.webp?size=128`
      );
      guildImg.setAttribute('width', '128px');
      guildImg.setAttribute('height', '128px');
      guildImg.setAttribute('style', 'border-radius: 50%;');
      app.appendChild(guildImg);
    }
}