import { Connection, Schema, model, Document } from "mongoose";
import { CourseI, CourseUserI } from "../../interfaces/courses.interface";

export const courseSchema = new Schema<any>(
  {
    _id: { type: Schema.Types.ObjectId, require: true },
    user_id: {
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
    price: {
      type: Number,
      require: true,
    },
    userCourse: {
      type: Array<string>,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    categoria: {
      type: Number,
      required: true,
    },
    type: {
      type: Number,
      default:1,
    },
    link: {
      type: String,
    },
    fecha:{
      type:Date,
    },
    state:{
      type:Number,
      default:1,
    }
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const courseModelMongo = async (cnxMongo: Connection) =>
  cnxMongo.model<CourseI>("course", courseSchema, "course");


  export const courseUserSchema = new Schema<any>(
    {
      _id: { type: Schema.Types.ObjectId, require: true },
      userId: {
        type: String,
        require: true,
      },
      courseId: {
        type: String,
        require: true,
      },
      state: {
        type: Boolean,
        require: true,
        default: true,
      },
    },
    {
      timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
      },
    }
  );
  
  export const courseUserModelMongo = async (cnxMongo: Connection) =>
    cnxMongo.model<CourseUserI>(
      "courseUser",
      courseUserSchema,
      "courseUser"
    );
  