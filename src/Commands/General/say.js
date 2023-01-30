import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";

export const Command = {
  data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("say a text you want")
    .addStringOption((option) =>
      option
        .setName("text")
        .setDescription("The text you want to respond with")
        .setRequired(true)
    ),  
  options: {
    disabled: false,
    ownerOnly: false,
    permissions: [],
  },
  /**
   * @param {Object} param
   * @param {import('discord.js').Client} param.client
   * @param {import("discord.js").CommandInteraction} param.int
   */
  run: async ({ client, int }) => {
    const text = int.options.getString("text");
    await int.reply({ content: "Done!", ephemeral: true });
    await int.channel.send(text)
  },
};
