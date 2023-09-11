import { Connection, Schema } from "mongoose";
import { BilleteraUserI } from "../../interfaces/billeteraU.interface";


export const billeteraUSchema = new Schema<any>(
    {
        userId: {
            type: String,
            require: true,
        },
        detalle: {
            type: String,
            required: true
        },
        estado: {
            type: Boolean,
            required: true,
            default: true
        },
        dir: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true,
        },
        tag: {
            type: String,
            required: false,
        },
        alias: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    },

);

export const billeteraUModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<BilleteraUserI>("billeteraU", billeteraUSchema, "billeteraU");
