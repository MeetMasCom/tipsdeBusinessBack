<<<<<<< HEAD
import { Connection, Schema,model ,Document} from "mongoose";

=======
import { Connection, Schema} from "mongoose";
>>>>>>> main

export const adminSchema = new Schema<any>(
    {
      _id: { 
        type: Schema.Types.ObjectId, 
        require: true 
      },
      userName:{ 
        type: String,
        required: true
      },
      email: {
        type: String,
        required: 1,
      },
      password: {
        type: String
      },
      state: {
        type: Number,
        default:0
      },
      rol: {
        type: Array,
        required: 1,
      },
      sponsorCode: {
        type: String,
        require: true,
      },
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
  
  );

<<<<<<< HEAD
  export const adminModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("admin", adminSchema, "admin");
=======
export const adminModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<any>("admin", adminSchema, "admin");
>>>>>>> main
