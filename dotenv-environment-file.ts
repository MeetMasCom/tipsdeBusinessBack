import * as dotenv from "dotenv";

export default function () {

    console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV === "test")
    return dotenv.config({ path: `.env.test`, override: true});

    return dotenv.config({ path: `.env`});

}
