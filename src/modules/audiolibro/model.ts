import { Connection, Schema,model ,Document} from "mongoose";
import { AudioLibroI } from "../../interfaces/audiolibro.interface";

export const audiolibroSchema = new Schema<any>(
  {
    _id: { type: Schema.Types.ObjectId, require: true },
    user_id: { type: Schema.Types.ObjectId, require: true },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    video: {
      type: String,
    },
    userCourse: {
      type: Array<string>,
      required: true,
    },
    imagen:{
      type:String,
    },
    state:{
      type:Number,
      default:1,
    },
    dateView:{
      type:Date,
      required:false,
    }
    
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const audiolibroModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<AudioLibroI>("audiolibro", audiolibroSchema, "audiolibro");
