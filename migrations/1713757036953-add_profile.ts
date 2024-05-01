import getDatabaseConfig from "../migrate-connection";
import * as fs from "fs";
import { profileModelMongo } from "../src/modules/profile/model";

export async function up (): Promise<void> {

  const { mongoose } = await getDatabaseConfig();
  let model = await profileModelMongo(mongoose.connection);

  let collectionFile = fs.readFileSync("Colecciones/profile.json", { encoding: 'utf8' });
  let records:any = JSON.parse(collectionFile);

  let saveData = records.map( (currentValue: any) => {
    currentValue['_id'] = new mongoose.Types.ObjectId(currentValue._id['$oid']);
    return currentValue;
  });

  await model.create(saveData);

}

export async function down (): Promise<void> {

  const { mongoose } = await getDatabaseConfig();
  let model = await profileModelMongo(mongoose.connection);
  await model.deleteMany({});

}
