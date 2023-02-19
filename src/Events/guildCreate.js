import { EmbedBuilder, Events } from "discord.js";
import { Guild } from "../Database/Schemas/guild.js";
export const Event = {
  name: Events.GuildCreate,
  once: true,
  async execute(guild, client) {
    Guild.findOne({ guildID: guild.id }, async (err, data) => {
      if (err) throw err;
      if (!data) {
        await new Guild({
          guildID: guild.id,
          memberCount: guild.memberCount,
          ownerID: guild.ownerId,
          createdTimestamp: guild.createdTimestamp,
          name: guild.name,
          icon: guild.iconURL() ?? 'None present',
          banner: guild.bannerURL() ?? 'None present',
          region: guild.region,
        }).save();
      }
    });

    // UPDATE THIS CODE LATER TO SEND MESSAGES TO THE SAME CHANNEL BUT THROUGH THE DATABASE

    // if possible

    const channel = await client.channels.fetch("1069827437824839770");
    const embed = new EmbedBuilder()
    .setTitle("Joined a new guild!")
    .setDescription(`Joined \`\`${guild.name}\`\` with \`\`${guild.memberCount}\`\` members!`)
    channel.send({ embeds: [embed]})
  },
};
