import { Connection, Schema } from "mongoose";
import { CatalogueI } from "../../interfaces/catalogue.interface";

export const catalogueSchema = new Schema<any>(
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
    },
    parentCatalogueId: {
      type: Schema.Types.ObjectId,
      require: false,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const catalogueModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<CatalogueI>("catalogues", catalogueSchema, "catalogues");
