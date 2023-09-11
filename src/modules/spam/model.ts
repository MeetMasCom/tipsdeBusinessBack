import { Connection, Schema,model ,Document} from "mongoose";

export const spamSchema = new Schema<any>(
    {
      _id: { 
        type: Schema.Types.ObjectId, 
        require: true 
      },
      user_id:{
        type:Schema.Types.ObjectId,
        required:1
      },
      user_spam:{ 
        type:Schema.Types.ObjectId,
        required: true
      },
      message:{
        type:String,
        required:false
      },
      title:{
        type:String,
        required:false
      },
      state:{
        type: Number,
        require: true,
        default:0
      },
      notification:{
        type: String,
      },
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
  
  );

  export const spamModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("spam", spamSchema, "spam");