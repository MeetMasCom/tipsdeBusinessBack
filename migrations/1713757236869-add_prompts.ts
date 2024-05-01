import getDatabaseConfig from "../migrate-connection";
import * as fs from "fs";
import { promptsModelMongo } from "../src/modules/prompts/model";
import { adminModelMongo } from "../src/modules/admin/model";

export async function up (): Promise<void> {

  const { mongoose } = await getDatabaseConfig();
  let model = await promptsModelMongo(mongoose.connection);
  let userModel = await adminModelMongo(mongoose.connection);

  let collectionFile = fs.readFileSync("Colecciones/prompts.json", { encoding: 'utf8' });
  let records:any = JSON.parse(collectionFile);
  await model.deleteMany({});

  for (let i = 0; i < records.length; i++) {

    let currentValue = records[i];

    currentValue['_id'] = new mongoose.Types.ObjectId(currentValue._id['$oid']);
    let userResult:any = await userModel.findById(currentValue['user_id']["$oid"]);


    currentValue['user_id'] = userResult ? userResult._id : null;

    delete currentValue.created_at;
    delete currentValue.updated_at;
    delete currentValue.__v;


    await model.create(currentValue);

  }

  

}

export async function down (): Promise<void> {

  const { mongoose } = await getDatabaseConfig();
  let model = await promptsModelMongo(mongoose.connection);
  await model.deleteMany({});

}
