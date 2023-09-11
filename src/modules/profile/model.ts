import { Connection, Schema, model, Document } from "mongoose";
import { ProfileI } from "../../interfaces/profile.interface";

export const profileSchema = new Schema<any>(
  {
    _id: { type: Schema.Types.ObjectId, require: true },
    description: {
      type: String,
    },
    name: {
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

export const profileModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<ProfileI>("profile", profileSchema, "profile");
