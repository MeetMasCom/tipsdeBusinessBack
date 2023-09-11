import { Connection, Schema,model ,Document} from "mongoose";

export const typeRoomSchema = new Schema<any>(
    {
      _id: { 
        type: Schema.Types.ObjectId, 
        require: true 
      },
      hotel_id:{ 
        type: Schema.Types.ObjectId,
        required: true,
      },
      name:{ 
        type: String,
        required: true,
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



  export const typeRoomModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("typeRoom", typeRoomSchema, "typeRoom");