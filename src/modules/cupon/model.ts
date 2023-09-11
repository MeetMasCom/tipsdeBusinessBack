import { Connection, Schema,model ,Document} from "mongoose";

export const cuponSchema = new Schema<any>(
    {
      _id: { 
        type: Schema.Types.ObjectId, 
        require: true 
      },
      user_id:{
        type:Schema.Types.ObjectId,
        required:1
      },
      cantidad:{
        type:Number,
        required:false
      },
      porcentaje:{
        type:Number,
        required:false
      },
      state:{
        type: Number,
        require: true,
        default:0
      },
      codigo:{
        type: Number,
      },
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
  
  );

  export const cuponModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("cupon", cuponSchema, "cupon");