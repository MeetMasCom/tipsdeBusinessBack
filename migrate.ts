import { default as defineEnvironment} from './dotenv-environment-file'

function getUri(options:string = "") {

    let uri:string = `mongodb://${process.env.MONGO_DB_HOST}/${process.env.MONGO_DB_DATABASE}`;

    if(process.env.MONGO_DB_USERNAME != "" && process.env.MONGO_DB_PASSWORD != "")
        uri = `mongodb://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_HOST}/${process.env.MONGO_DB_DATABASE}`;
        
    if(options)
        uri += `?${options}`;

    return uri;

}

defineEnvironment();

export default {
    "uri": getUri("authSource=admin"),
    "collection": "migrations",
    "migrationsPath": "./migrations",
    "templatePath": "./migrations/template.ts",
    "autosync": false
}