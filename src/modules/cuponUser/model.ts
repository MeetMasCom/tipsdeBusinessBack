import { Connection, Schema,model ,Document} from "mongoose";

export const cuponUserSchema = new Schema<any>(
    {
      _id: { 
        type: Schema.Types.ObjectId, 
        require: true 
      },
      user_id:{
        type:Schema.Types.ObjectId,
        required:1
      },
      user_cupon:{
        type:Schema.Types.ObjectId,
        required:1
      },
      cupon_id:{
        type:Schema.Types.ObjectId,
        require: true 
      },
      state:{
        type: Number,
        require: true,
        default:0
      }
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
  
  );

  export const cuponUserModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("cuponUser", cuponUserSchema, "cuponUser");