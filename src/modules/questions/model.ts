import { Connection, Schema,model ,Document} from "mongoose";
import { QuestionI } from "../../interfaces/question.interface";

export const questionSchema = new Schema<any>(
  {
    _id: { type: Schema.Types.ObjectId, require: true },
    subprompts_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    message: {
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

export const questionModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<QuestionI>("question", questionSchema, "question");
