import { Connection, Schema,model ,Document} from "mongoose";
import { TipsI } from "../../interfaces/tips.interface";

export const tipsSchema = new Schema<any>(
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
    userLink:{
      type: Array<string>,
      required: false,
    },
    imagen:{
      type:String,
      required:true,
    },
    state:{
      type:Number,
      default:1,
    },
    dateView:{
      type:Date,
      required:false,
    },
    type:{
      type:Number,
      required:true
    }
    
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const tipsModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<TipsI>("tips", tipsSchema, "tips");
