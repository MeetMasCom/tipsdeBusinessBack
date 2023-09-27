import { Connection, Schema,model ,Document} from "mongoose";

export const promptsSchema = new Schema<any>(
    {
      _id: { 
        type: Schema.Types.ObjectId, 
        require: true 
      },
      user_id:{
        type:Schema.Types.ObjectId,
        required:true
      },
      name:{ 
        type:String,
        required:true
      },
      description:{
        type:String,
        required:false
      },
      userCourse: {
        type: Array<string>,
        required: true,
      },
      state:{
        type: Number,
        require: true,
        default:0
      },
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
  
  );

  export const promptsModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<any>("prompts", promptsSchema, "prompts");

    export const promptsPriceSchema = new Schema<any>(
      {
        _id: { 
          type: Schema.Types.ObjectId, 
          require: true 
        },        
        price: {
          type: Number,
          required: true,
        },
        state:{
          type: Number,
          require: true,
          default:0
        },
      },
      {
        timestamps: {
          createdAt: "created_at",
          updatedAt: "updated_at",
        },
      },
    
    );
  
    export const promptsPriceModelMongo = async (cnxMongo: Connection) =>
      cnxMongo.model<any>("promptsPrice", promptsPriceSchema, "promptsPrice");

      export const promptsUserSchema = new Schema<any>(
        {
          _id: { 
            type: Schema.Types.ObjectId, 
            require: true 
          },  
          userId: {
            type: Schema.Types.ObjectId, 
            require: true 
          },  
          packageId:{
            type: Schema.Types.ObjectId, 
          },
          price: {
            type: Number,
            required: true,
          },
          state:{
            type: Number,
            require: true,
            default:0
          },
        },
        {
          timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
          },
        },
      
      );
    
      export const promptsUserModelMongo = async (cnxMongo: Connection) =>
        cnxMongo.model<any>("promptsUser", promptsUserSchema, "promptsUser");