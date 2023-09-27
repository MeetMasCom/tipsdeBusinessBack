export interface PromptsI {
    id?: string;    
    user_id:string,
    name:string;
    description:string;
    userCourse: string[];
    estate:number
  }


  export interface PromptsPriceI {
    id?: string;    
    price:number;
    estate:number
  }

  export interface PromptsUserI {
    _id?: string
    userId: string,
    value:number,
    name?: string
    membershipId: string
    walletId?: string  
    state: boolean
    createdAt?: string;
    updatedAt?: string;
}