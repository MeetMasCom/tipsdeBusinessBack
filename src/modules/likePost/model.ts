import { Connection, Schema,model ,Document} from "mongoose";

export const likePostSchema = new Schema<any>(
    {
      _id: { 
        type: Schema.Types.ObjectId, 
        require: true 
      },
      post_id:{
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

  export const likePostModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("likePost", likePostSchema, "likePost");