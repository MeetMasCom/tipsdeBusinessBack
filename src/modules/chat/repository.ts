import { connectionMongo } from "../../database/conection";
import { Types } from "mongoose";
import { Moment } from "moment"
import { ChatI } from "../../interfaces/chat.interface";
import { chatModelMongo } from "./model";
import moment from "moment";

export class ChatRepository {
    async save(data: ChatI) {
        try {
            const cnxMongo = await connectionMongo();
            const chatModel = await chatModelMongo(cnxMongo);
            const response = await chatModel.create({
                _id: new Types.ObjectId(),
                ...data,
            });
            await cnxMongo.close();
            return response as ChatI;
        } catch (error) {
            throw new Error(error as string);
        }
    }

    async getAll(userTo: string, userFrom: string) {
        try {
            const cnxMongo = await connectionMongo();
            const chatModel = await chatModelMongo(cnxMongo);

            const response1 = await chatModel.find({ userTo, userFrom }).exec();
            const response2 = await chatModel.find({ userTo: userFrom, userFrom: userTo }).exec();
            await cnxMongo.close();
            const unionResponse = response1.concat(response2) as ChatI[];
            const data: ChatI[] = []
            unionResponse.forEach(item => {
                data.push({
                    messague: item.messague,
                    userFrom: item.userFrom,
                    userTo: item.userTo,
                    createdAt: item.createdAt = moment(item.createdAt)
                })
            })

            return data.sort((a, b) => (a.createdAt as Moment).diff(b.createdAt as Moment));

        } catch (error) {
            throw new Error(error as string);
        }
    }
}
