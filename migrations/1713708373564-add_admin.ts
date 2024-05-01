import getDatabaseConfig from "../migrate-connection";
import { adminModelMongo, adminSchema } from "../src/modules/admin/model";
import * as fs from "fs";

export async function up (): Promise<void> {

  const { mongoose } = await getDatabaseConfig();
  let model = await adminModelMongo(mongoose.connection);

  let collectionFile = fs.readFileSync("Colecciones/admin.json", { encoding: 'utf8' });
  let records:any = JSON.parse(collectionFile);

  let saveData = records.map( (currentValue: any) => {

    currentValue['_id'] = new mongoose.Types.ObjectId(currentValue._id['$oid']);

    delete currentValue.created_at;
    delete currentValue.updated_at;
    delete currentValue.__v;

    return currentValue;

  });

  await model.create(saveData);

}

export async function down (): Promise<void> {

  const { mongoose } = await getDatabaseConfig();
  let model = await adminModelMongo(mongoose.connection);
  await model.deleteMany({});

}
