import { StarI } from "./star.interface";

export interface PoliciesI {
    id?: string;    
    hotel_id:string;
    policies:string[];
    state:number;
    comment:String;
  }
