import getDatabaseConfig from "../migrate-connection";
import * as fs from "fs";
import { countryModelMongo } from "../src/modules/country/model";

export async function up (): Promise<void> {

  const { mongoose } = await getDatabaseConfig();
  let model = await countryModelMongo(mongoose.connection);

  let collectionFile = fs.readFileSync("Colecciones/countries.json", { encoding: 'utf8' });
  let records:any = JSON.parse(collectionFile);

  let saveData = records.map( (currentValue: any) => {
    currentValue['_id'] = new mongoose.Types.ObjectId(currentValue._id);
    return currentValue;
  });

  await model.create(saveData);

}

export async function down (): Promise<void> {

  const { mongoose } = await getDatabaseConfig();
  let model = await countryModelMongo(mongoose.connection);
  await model.deleteMany({});

}
