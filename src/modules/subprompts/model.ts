import { Connection, Schema,model ,Document} from "mongoose";

export const subpromptsSchema = new Schema<any>(
    {
      _id: { 
        type: Schema.Types.ObjectId, 
        require: true 
      },
      prompts_id:{
        type:Schema.Types.ObjectId,
        required:true
      },
      name:{ 
        type:String,
        required:true
      },
      description:{
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

  export const subpromptsModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("subprompts", subpromptsSchema, "subprompts");