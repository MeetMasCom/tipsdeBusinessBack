import { Connection, Schema,model ,Document} from "mongoose";

export const feedbackSchema = new Schema<any>(
    {
      _id: { 
        type: Schema.Types.ObjectId, 
        require: true 
      },
      user_id:{
        type:Schema.Types.ObjectId,
        required:true
      },
      title:{
        type:String,
        required:true
      },
      message:{ 
        type:String,
        required:true
      },
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
  
  );

  export const feedbackModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("feedback", feedbackSchema, "feedback");