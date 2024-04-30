import getDatabaseConfig from "../migrate-connection";
import * as fs from "fs";
import { promptsModelMongo } from "../src/modules/prompts/model";
import { subpromptsModelMongo } from "../src/modules/subprompts/model";

export async function up (): Promise<void> {

  const { mongoose } = await getDatabaseConfig();
  let model = await subpromptsModelMongo(mongoose.connection);
  let promptsModel = await promptsModelMongo(mongoose.connection);

  let collectionFile = fs.readFileSync("Colecciones/subprompts.json", { encoding: 'utf8' });
  let records:any = JSON.parse(collectionFile);
  await model.deleteMany({});

  for (let i = 0; i < records.length; i++) {

    let currentValue = records[i];

    currentValue['_id'] = new mongoose.Types.ObjectId(currentValue._id['$oid']);
    let promptsResult:any = await promptsModel.findById(currentValue['prompts_id']["$oid"]);
    currentValue['prompts_id'] = promptsResult ? promptsResult._id : null;

    delete currentValue.created_at;
    delete currentValue.updated_at;
    delete currentValue.__v;


    await model.create(currentValue);

  }

  

}

export async function down (): Promise<void> {

  const { mongoose } = await getDatabaseConfig();
  let model = await subpromptsModelMongo(mongoose.connection);
  await model.deleteMany({});

}
