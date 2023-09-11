import { Connection, Schema,model ,Document} from "mongoose";

export const hotelSchema = new Schema<any>(
    {
      _id: { 
        type: Schema.Types.ObjectId, 
        require: true 
      },
      user_id:{
        type:Schema.Types.ObjectId,
        required:1
      },
      name:{ 
        type: String,
        required: true
      },
      address: {
        type: String,
        required: 1,
      },
      phone: {
        type: String,
        require: true
      },
      detail: {
        type: String,
      },
      comment: {
        type: String,
      },
      ruc:{
        type:String,
        required:true
      },
      web:{
        type:String,
        required:true
      },
      country: {
        type: String,
        required: 1,
      },
      city: {
        type: String,
        required: 1,
      },
      stars: {
        type: Number,
        required: 1,
      },
      manager: {
        type: String,
        required: 1,
      },
      state:{
        type:Number,
        default:0
      },
      services:{
        type: Array<string>,
      },
      policies:{
        type: Array<string>,
      },
      doc:{
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

  export const hotelModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("hotel", hotelSchema, "hotel");

    export const policiesSchema = new Schema<any>(
      {
        _id: { 
          type: Schema.Types.ObjectId, 
          require: true 
        },
        hotel_id:{
          type: Schema.Types.ObjectId, 
          required:1
        },
        policies:{
          type:Array<string>,
          required:1
        },
        comment:{
          type:String,
        },
        state:{
          type:Number,
          default:0,
        }
      },
      {
        timestamps: {
          createdAt: "created_at",
          updatedAt: "updated_at",
        },
      },
    
    );

    export const policiesModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("policies", policiesSchema, "policies");