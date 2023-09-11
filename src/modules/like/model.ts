import { Connection, Schema,model ,Document} from "mongoose";

export const likeSchema = new Schema<any>(
    {
      _id: { 
        type: Schema.Types.ObjectId, 
        require: true 
      },
      user_id:{
        type:Schema.Types.ObjectId,
        required:true
      },
      userlike:{ 
        type:Schema.Types.ObjectId,
        required:true
      },
      like:{
        type:Boolean,
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

  export const likeModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("like", likeSchema, "like");