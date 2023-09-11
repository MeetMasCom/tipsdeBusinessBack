import { Connection, Schema,model ,Document} from "mongoose";
import { PostI } from "../../interfaces/post.interface";

export const postSchema = new Schema<any>(
  {
    _id: { type: Schema.Types.ObjectId, require: true },
    user_id: {
      type: Schema.Types.ObjectId,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    photo: {
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

export const postModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<PostI>("post", postSchema, "post");
