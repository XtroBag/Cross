import { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder, AttachmentBuilder } from "discord.js";
import { GrabPhoto } from "../../Photos/photoHandler.js";

export const Command = {
  data: new SlashCommandBuilder()
    .setName("image")
    .setDescription("This is a test of a picture"),
  options: { 
    disabled: false,
    ownerOnly: false, 
    permissions:  [],  
  }, 
  /**s
   * @param {Object} param
   * @param {import('discord.js').Client} param.client
   * @param {import("discord.js").CommandInteraction} param.int
   */
  run: async ({ client, int }) => {
    const file = new AttachmentBuilder(GrabPhoto('Cross.png'))
    await int.reply({ files: [file] });

    
  },
};
