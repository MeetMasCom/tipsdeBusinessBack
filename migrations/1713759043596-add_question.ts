import getDatabaseConfig from "../migrate-connection";
import * as fs from "fs";
import { subpromptsModelMongo } from "../src/modules/subprompts/model";
import { questionModelMongo } from "../src/modules/questions/model";

export async function up (): Promise<void> {

  const { mongoose } = await getDatabaseConfig();
  let model = await questionModelMongo(mongoose.connection);
  let subpromptsModel = await subpromptsModelMongo(mongoose.connection);

  let collectionFile = fs.readFileSync("Colecciones/question.json", { encoding: 'utf8' });
  let records:any = JSON.parse(collectionFile);
  await model.deleteMany({});

  for (let i = 0; i < records.length; i++) {

    let currentValue = records[i];

    currentValue['_id'] = new mongoose.Types.ObjectId(currentValue._id['$oid']);
    let subPromptsResult:any = await subpromptsModel.findById(currentValue['subprompts_id']["$oid"]);
    currentValue['subprompts_id'] = subPromptsResult ? subPromptsResult._id : null;

    delete currentValue.createdAt;
    delete currentValue.updatedAt;
    delete currentValue.__v;


    await model.create(currentValue);

  }  

}

export async function down (): Promise<void> {

  const { mongoose } = await getDatabaseConfig();
  let model = await questionModelMongo(mongoose.connection);
  await model.deleteMany({});

}
