import { AttachmentBuilder, EmbedBuilder, Events } from "discord.js";
import * as db from "mongoose";
import config from "../config.json" assert { type: "json" };
import emojis from "../emojis.json" assert { type: "json" };

export const Event = {
  name: Events.InteractionCreate,
  once: false,
  async execute(int, client) {
    if (!int.isCommand()) return;

    const command = int.client.commands.get(int.commandName);

    // ======================Disabled======================
    if (command.Command.options.disabled === true) {
      return int.reply({ embeds: [new EmbedBuilder()
      .setTitle(`Command Disabled`)
      .setDescription(`This command is currently disabled.`)
      .setColor("#2F3136")], ephemeral: true });
    } else {
      // ======================Owner Only======================
      if (command.Command.options.ownerOnly === true) {
        if (int.member.id !== config.ownerID) {
          return int.reply({
            content: `Only the owner of the bot can use this command.`,
            ephemeral: true,
          });
        }
      }

      //======================Doesnt exist======================
      if (!command) {
        console.error(`No command matching ${int.commandName} was found.`);
        return;
      }

      // ======================Permissions======================
      // UPDATE: Make this show the permission needed to the user instead of just saying they don't have permission
      if (!int.member.permissions.has(command.Command.options.permissions)) {
        return int.reply({
          content: `You do not have permission to use this command.`,
          ephemeral: true,
        });
      }

      // ======================Run Command======================
      try {
        await command.Command.run({ client, int });
      } catch (error) {
        console.error(`Error executing ${int.commandName}`);
        console.error(error);
      }
    }
  },
};
