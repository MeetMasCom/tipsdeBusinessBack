import { Moment } from "moment"

export interface ChatI {
    _id?: string
    userFrom: string
    userTo: string
    messague: string
    createdAt?: string | Moment
    updatedAt?: string
}

export interface ChatResponseI {
    date: string
    message: MessageI[]
}

export interface MessageI {
    data: string
    current: boolean
}