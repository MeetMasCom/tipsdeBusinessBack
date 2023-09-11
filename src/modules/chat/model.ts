import { Connection, Schema } from "mongoose";
import { ChatI } from "../../interfaces/chat.interface";

export const chatSchema = new Schema<any>(
    {
        _id: { type: Schema.Types.ObjectId, require: true },
        userTo: {
            type: String,
            require: true,
        },
        userFrom: {
            type: String,
            require: true,
        },
        messague: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt",
        },
    }
);

export const chatModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<ChatI>("chats", chatSchema, "chats");



