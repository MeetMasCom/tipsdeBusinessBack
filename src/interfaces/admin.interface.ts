export interface AdminI {
    _id?: string;
    userName: string;
    email: string;    
    password?: string;
    state: number;
    rol:string[];   
    sponsorCode?: string;
    createdAt?: string;
    updatedAt?: string;
  }
 

  export interface LoginAdminI {
    userName: string;
    password: string;
  }
  

  export interface AdminAuthI {
    user:AdminI;
    token: string;
  }