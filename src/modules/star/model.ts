import { Connection, Schema,model } from "mongoose";
import { fadSchema} from "../fad/model";

export const starSchema = new Schema<any>(
    {
      _id: { 
        type: Schema.Types.ObjectId, 
        require: true 
      },
      user_id:{ 
        type: Schema.Types.ObjectId,
        required: true
      },
      fad_id: {
        type: Schema.Types.ObjectId,
        required: 1,
      },
      qualification: {
        type: String,
        require: 1,
      },
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
  
  );
  var fad = model('fad', fadSchema);


  export const starModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("star", starSchema, "star");