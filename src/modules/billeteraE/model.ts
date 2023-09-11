import { Connection, Schema } from "mongoose";
import { BilleteraI } from "../../interfaces/billeteraE.interface";

export const billeteraSchema = new Schema<any>(
    {
        detalle: {
            type: String,
            required: true
        },
        tipo: {
            type: Number,
            required: true
        },
        alias: {
            type: String,
            required: true
        },
        sigla: {
            type: String,
        },
        dir: {
            type: String,
            required: true
        },
        costo: {
            type: Number,
            required: true
        },
        estado: {
            type: Boolean,
            required: true,
            default: true
        },
        minimo: {
            type: Number,
            required: true
        },
        tag: {
            type: String,
            required: false
        },
        maxRetiroB: {
            type: Number,
            required: true
        },
        maxRetiroP: {
            type: Number,
            required: true
        },
        maxRetiroO: {
            type: Number,
            required: true
        },
        maxRetiroD: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    },

);

export const billeteraModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<BilleteraI>("billetera", billeteraSchema, "billetera");

