import { Connection, Schema,model ,Document} from "mongoose";

export const serviceSchema = new Schema<any>(
    {
      _id: { 
        type: Schema.Types.ObjectId, 
        require: true 
      },
      hotel_id:{ 
        type: Schema.Types.ObjectId,
        required: true
      },
      description: {
        type: String,
        required:true
      }
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
  
  );



  export const serviceModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("service", serviceSchema, "service");