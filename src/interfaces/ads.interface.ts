export interface AdsI {
  _id?: string;
  type: number;
  userId: string;
  user?: string
  title: string;
  description: string;
  link: string;
  country: string[];
  age: string[];
  carrer: string[];
  file: string;
  language: string[];
  hobbies: string[];
  gender: string[];
  religion: string[];
  journal: string[];
  dependency: string[];
  state?: number;  //0 activo //1 revision //2 devuleto //3 desactivado
  comentary?: string;
  package: string;
  createdAt?: string;
  updatedAt?: string;
  stop?: boolean
  visit?: number;
}

export interface ReviewAdsI {
  state: number;  //0 activo //1 revision //2 devuleto //3 desactivado
  comentary: string;
}

export interface VisitAdsI {
  usesrId: number;
  adsId: string;
}
