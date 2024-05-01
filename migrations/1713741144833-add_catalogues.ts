import getDatabaseConfig from "../migrate-connection";
import * as fs from "fs";
import { catalogueModelMongo } from "../src/modules/catalogue/model";

export async function up (): Promise<void> {

  const { mongoose } = await getDatabaseConfig();
  let model = await catalogueModelMongo(mongoose.connection);

  let collectionFile = fs.readFileSync("Colecciones/catalogues.json", { encoding: 'utf8' });
  let records:any = JSON.parse(collectionFile);
  await model.deleteMany({});

  for (let i = 0; i < records.length; i++) {

    let currentValue = records[i];

    currentValue['_id'] = new mongoose.Types.ObjectId(currentValue._id['$oid']);

    if(currentValue['parentCatalogueId'] != null){

        let result:any = await model.findById(currentValue['parentCatalogueId']["$oid"]);
        currentValue['parentCatalogueId'] = result ? result._id : null;

    }

    delete currentValue.createdAt;
    delete currentValue.updatedAt;
    delete currentValue.__v;

    await model.create(currentValue);

  }

  

}

export async function down (): Promise<void> {

  const { mongoose } = await getDatabaseConfig();
  let model = await catalogueModelMongo(mongoose.connection);
  await model.deleteMany({});

}
