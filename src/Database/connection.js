import mongo from "mongoose";
import config from "../config.json" assert { type: "json" };

export async function DatabaseConnect() {
        try {
             mongo.connect(config.databaseuri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
        } catch (e) {
            console.error(e)
        }
    }