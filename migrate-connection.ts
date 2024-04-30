import mongoose from "mongoose";
import paramsConfig from "./migrate";

const getDatabaseConfig = async () => {
    // In case you using mongoose 6
    // https://mongoosejs.com/docs/guide.html#strictQuery
    mongoose.set('strictQuery', false)

    // Ensure connection is open so we can run migrations
    await mongoose.connect(paramsConfig.uri);
  
    // Return models that will be used in migration methods
    return {
      mongoose
    }
}

export default getDatabaseConfig;