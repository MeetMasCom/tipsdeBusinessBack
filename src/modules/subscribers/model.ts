import { Connection, Schema,model } from "mongoose";
import { fadSchema} from "../fad/model";

export const subscribersSchema = new Schema<any>(
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
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    }
  );
  

  export const subscribersModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("subscribers", subscribersSchema, "subscribers");