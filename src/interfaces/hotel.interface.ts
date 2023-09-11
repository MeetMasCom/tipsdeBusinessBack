import { StarI } from "./star.interface";

export interface HotelI extends HotelExtraI{
    id?: string;    
    user_id:string,
    name:string;
    address:string;
    phone:string;
    country:string;
    ruc:string;
    city:string;
    web:string;
    stars:string;
    manager:string;
    detail:string;
    comment:String;
    doc:string[];
    state?:number;
    createdAt?: string;
    updatedAt?: string;
  }

  export interface HotelExtraI{
    service: any;
    services:string[]
    policies:string[]
  }
  