import { Connection, Schema } from "mongoose";
import { CountryI } from "../../interfaces/country.interface copy";

export const countrySchema = new Schema<any>(
  {
    _id: { type: Schema.Types.ObjectId, require: true },
    code: {
      type: String,
      require: true,
      unique: 1,
    },
    name: {
      type: String,
      require: true,
      unique: 1,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const countryModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<CountryI>("countries", countrySchema, "countries");
