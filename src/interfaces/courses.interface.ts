export interface CourseI {
    id?: string;   
    user_id:string;    
    title:string;
    description:string;
    price:string;
    image:string;
    userCourse: string[];
    categoria:number;
    link:string;
    fecha:string;
    dateView:string;
    state:number;
    createdAt?: string;
    updatedAt?: string;
  }

  
export interface CourseUserI {
  _id?: string
  userId: string
  courseId: string
  //walletId?: string
  state: boolean
  createdAt?: string;
  updatedAt?: string;
}
  