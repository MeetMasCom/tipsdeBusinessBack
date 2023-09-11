import { Connection, Schema,model ,Document} from "mongoose";

export const studentSchema = new Schema<any>(
    {
      _id: { 
        type: Schema.Types.ObjectId, 
        require: true 
      },
      user_id:{
        type:Schema.Types.ObjectId,
        required:true
      },
      course_id:{ 
        type:Schema.Types.ObjectId,
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

  export const studentModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("student", studentSchema, "student");