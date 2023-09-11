import { Connection, Schema,model ,Document} from "mongoose";

export const notificationSchema = new Schema<any>(
    {
      _id: { 
        type: Schema.Types.ObjectId, 
        require: true 
      },
      user_id:{
        type:Schema.Types.ObjectId,
        required:1
      },
      user_notification:{ 
        type:Schema.Types.ObjectId,
        required: true
      },
      message:{
        type:String,
        required:false
      },
      state:{
        type: Number,
        require: true,
        default:0
      },
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
  
  );

  export const notificationModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("notification", notificationSchema, "notification");