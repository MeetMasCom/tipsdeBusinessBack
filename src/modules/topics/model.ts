import { Connection, Schema,model ,Document} from "mongoose";
import { TopicI } from "../../interfaces/topic.interface";

export const topicSchema = new Schema<any>(
  {
    _id: { type: Schema.Types.ObjectId, require: true },
    module_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: true,
    },
    
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const topicModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<TopicI>("topic", topicSchema, "topic");
