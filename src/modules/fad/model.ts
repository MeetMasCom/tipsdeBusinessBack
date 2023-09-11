import { Connection, Schema,model ,Document} from "mongoose";
import { userSchema} from "../user/model";

export const fadSchema = new Schema<any>(
    {
      _id: { 
        type: Schema.Types.ObjectId, 
        require: true 
      },
      user_id:{ 
        type: Schema.Types.ObjectId,
        required: true
      },
      name: {
        type: String,
        required: 1,
      },
      description: {
        type: String
      },
      picture: {
        type: String,
        required: 1,
      }
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
  
  );
  var users = model('users', userSchema);

  interface IPhoto extends Document{
    user_id:string;
    name:string;
    description:string;
    picture:string
  }

  export const fadModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("fad", fadSchema, "fad");