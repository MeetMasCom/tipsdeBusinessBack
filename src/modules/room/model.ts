import { Connection, Schema,model ,Document} from "mongoose";

export const roomSchema = new Schema<any>(
    {
      _id: { 
        type: Schema.Types.ObjectId, 
        require: true 
      },
      hotel_id:{
        type:Schema.Types.ObjectId,
        required:1
      },
      number:{ 
        type: Number,
        required: true
      },
      name:{
        type:String,
      },
      dimension:{
        type:String,
      },
      type: {
        type: String,
        required: 1,
      },
      price: {
        type: Array<string>,
      },
      description: {
        type: String,
        required: 1,
      },
      photo: {
        type: Array<string>,
      },    
      actualPrice: {
        type: String,
      },
      service: {
        type: Array<string>,
      }    
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
  
  );

  export const roomModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("room", roomSchema, "room");