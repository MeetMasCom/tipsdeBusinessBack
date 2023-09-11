import moment, { Moment } from "moment";
import { OK_200 } from "../../constants/messages";
import { ChatI, ChatResponseI } from "../../interfaces/chat.interface";
import { ChatRepository } from "./repository";
import { UserRepository } from "../user/repository";
import { UserExtraI, UserI } from "../../interfaces/user.interface";
import { LikeRepository } from "../like/repository";


export class ChatService {
    private repo: ChatRepository;

    constructor() {
        this.repo = new ChatRepository();
    }

    getMessagues = async (userTo: string, userFrom: string): Promise<ChatResponseI[]> => {
        try {
            const data = await this.repo.getAll(userTo, userFrom);
            let chats: ChatI[] = []
            let response: ChatResponseI[] = []

            data.forEach(chat => {
                chats.push({
                    messague: chat.messague,
                    userFrom: chat.userFrom,
                    userTo: chat.userTo,
                    createdAt: moment(chat.createdAt).format("YYYY-MM-DD")
                })
            })

            await Promise.all(chats.map(async (chat) => {
                const element = response.find(f => f.date == chat.createdAt);
                if (!element) {
                    response.push({
                        date: chat.createdAt as string,
                        message: [{
                            current: chat.userFrom != userFrom ? true : false,
                            data: chat.messague,
                        }]
                    })
                } else {
                    element.message.push({
                        current: chat.userFrom != userFrom ? true : false,
                        data: chat.messague,
                    })
                }
                return chat;
            }));



            return response;
        } catch (error) {
            throw new Error(error as string);
        }
    };

    getAllUsersMessagues = async (userId: string): Promise<UserI[]> => {
        try {
            const data = await new LikeRepository().getAllUserLike(userId);

            const users: UserI[] = [];

            await Promise.all(data.map(async (like) => {
                const user = await new UserRepository().getById(like.user_id!);
                if (user) {
                    users.push(user)
                }
            }));

            return users;
        } catch (error) {
            throw new Error(error as string);
        }
    };

    saveMessagues = async (data: ChatI): Promise<string> => {
        try {
            await this.repo.save(data);
            return OK_200;
        } catch (error) {
            throw new Error(error as string);
        }
    };

}
