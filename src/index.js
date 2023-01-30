import chalk from "chalk";
import { Client, Collection, GatewayIntentBits } from "discord.js";
import config from "./config.json" assert { type: "json" };
import { CommandHandler, EventHandler } from "./Handler/handler.js";
import { DatabaseConnect } from "./Database/connection.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences
  ],
});

client.commands = new Collection();

CommandHandler(client);
EventHandler(client);
DatabaseConnect();


client.login(config.token);
