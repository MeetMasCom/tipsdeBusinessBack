import { Connection, Schema,model ,Document} from "mongoose";
import { AnswerI, ModuleI,TestI } from "../../interfaces/modules.interface";

export const moduleSchema = new Schema<any>(
  {
    _id: { type: Schema.Types.ObjectId, require: true },
    course_id: {
      type: Schema.Types.ObjectId,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    dateView:{
      type:Date,
    },
    test:{
      type:Boolean,
      required:true
    } 
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const moduleModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<ModuleI>("module", moduleSchema, "module");


  export const testSchema = new Schema<any>(
    {
      _id: { type: Schema.Types.ObjectId, require: true },
      module_id: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      test: {
        type: Array<string>,
        required: true,
      }
    },
    {
      timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
      },
    }
  );
  
  export const testModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<TestI>("test", testSchema, "test");
  

    export const answerSchema = new Schema<any>(
      {
        _id: { type: Schema.Types.ObjectId, require: true },
        test_id: {
          type: Schema.Types.ObjectId,
          required: true,
        },
        user_id: {
          type: Schema.Types.ObjectId,
          required: true,
        },
        testanswer: {
          type: Array<string>,
          require: true,
        }
      },
      {
        timestamps: {
          createdAt: "createdAt",
          updatedAt: "updatedAt",
        },
      }
    );
    
    export const answerModelMongo = async (cnxMongo: Connection) =>
      cnxMongo.model<AnswerI>("answer", answerSchema, "answer");
    