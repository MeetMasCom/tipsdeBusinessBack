export interface ModuleI {
    id?: string;   
    course_id:string;    
    title:string;
    description:string; 
    dateView:string;
    test:boolean;
    createdAt?: string;
    updatedAt?: string;
  }
  

  export interface TestI {
    id?: string;   
    module_id:string;  
    test?: string[];
    createdAt?: string;
    updatedAt?: string;
  }

  
  export interface AnswerI {
    id?: string;   
    test_id:string;  
    user_id:string
    testanswer: string[];
    createdAt?: string;
    updatedAt?: string;
  }
  
  

 