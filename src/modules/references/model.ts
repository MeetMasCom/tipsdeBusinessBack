import { Connection, Schema,model } from "mongoose";
import { fadSchema} from "../fad/model";

export const referencesSchema = new Schema<any>(
    {
      _id: { 
        type: Schema.Types.ObjectId, 
        require: true 
      },
      course_id:{
        type: Schema.Types.ObjectId, 
      },
      user_id:{
        type: Schema.Types.ObjectId, 
      },
      comment: {
        type: String,
      },
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    }
  );
  

  export const referencesModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("references", referencesSchema, "references");

    export const referencesTipsSchema = new Schema<any>(
      {
        _id: { 
          type: Schema.Types.ObjectId, 
          require: true 
        },
        course_id:{
          type: Schema.Types.ObjectId, 
        },
        user_id:{
          type: Schema.Types.ObjectId, 
        },
        comment: {
          type: String,
        },
      },
      {
        timestamps: {
          createdAt: "created_at",
          updatedAt: "updated_at",
        },
      }
    );
    
  
    export const referencesTipsModelMongo = async (cnxMongo: Connection) =>
      cnxMongo.model<any>("referencesTips", referencesTipsSchema, "referencesTips");