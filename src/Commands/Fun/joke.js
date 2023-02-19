import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";

export const Command = {
  data: new SlashCommandBuilder()
    .setName("joke")
    .setDescription("get a random joke"),
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
        
  },
};
