import { Connection, Schema,model } from "mongoose";
import { fadSchema} from "../fad/model";

export const commentSchema = new Schema<any>(
    {
      _id: { 
        type: Schema.Types.ObjectId, 
        require: true 
      },
      course_id:{
        type: Schema.Types.ObjectId, 
      },
      user_id:{
        type: Schema.Types.ObjectId, 
      },
      comment: {
        type: String,
      },
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    }
  );
  

  export const commentModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("comment", commentSchema, "comment");