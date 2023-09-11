import { Connection, Schema,model ,Document} from "mongoose";

export const packageSchema = new Schema<any>(
    {
      _id: { 
        type: Schema.Types.ObjectId, 
        require: true 
      },
      name:{
        type:String,
        required:1
      },
      description:{ 
        type:String,
        required: true
      },
      visit:{
        type:Number,
        required:true
      },
      state:{
        type: Number,
        require: true,
        default:0
      },
      valor:{
        type:String,
        require:true,
      }
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
  
  );

  export const packageModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("package", packageSchema, "package");