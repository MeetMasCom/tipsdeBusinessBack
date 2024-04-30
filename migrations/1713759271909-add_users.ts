import getDatabaseConfig from "../migrate-connection";
import { adminModelMongo, adminSchema } from "../src/modules/admin/model";
import * as fs from "fs";
import { userModelMongo } from "../src/modules/user/model";

export async function up (): Promise<void> {

  const { mongoose } = await getDatabaseConfig();
  let model = await userModelMongo(mongoose.connection);

  let collectionFile = fs.readFileSync("Colecciones/users.json", { encoding: 'utf8' });
  let records:any = JSON.parse(collectionFile);

  let saveData = records.map( (currentValue: any) => {

    currentValue['_id'] = new mongoose.Types.ObjectId(currentValue._id['$oid']);

    delete currentValue.gender;
    delete currentValue.currentResidence;
    delete currentValue.policy;
    delete currentValue.studies;
    delete currentValue.career;
    delete currentValue.sport;
    delete currentValue.createdAt;
    delete currentValue.updatedAt;
    delete currentValue.__v;

    return currentValue;

  });

  await model.create(saveData);

}

export async function down (): Promise<void> {

  const { mongoose } = await getDatabaseConfig();
  let model = await userModelMongo(mongoose.connection);
  await model.deleteMany({});

}
