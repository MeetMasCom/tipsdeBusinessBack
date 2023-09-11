export interface UserI extends UserExtraI {
  _id?: string;
  userName: string;
  email: string;
  country?: string;
  password?: string;
  dateBirth: string;
  terms?: boolean;
  state?: UserStateI[];
  profile?: string[];
  type?: UserTypeI;
  sponsorCode?: string;
  sponsor?: string;
  gender?: string;
  preferences?: string;
  age?: number;
  cupo?: number;
  agreements?: boolean;
  socialAgreements?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserExtraI {
  firstname?: string;
  lastname?: string;
  identification?: string;
  weight?: number;
  height?: number;
  eyeColor?: string;
  currentResidence?: string;
  address?: string;
  primaryStreet?: string;
  secondaryStreet?: string;
  reference?: string;
  ethnicity?: string;
  religion?: string;
  policy?: string;
  typeUser?:number;
  motherLanguague?: string;
  languages?: string[];
  foods?: string[];
  profile?: string[];
  rsocials?: string[];
  verify?: boolean;
  hobbies?: string[];
  sports?: string[];
  followers?: string[];
  following?: string[];
  tasteOfClothes?: string[];
  online?: boolean;
  civil_status?: string;
  drink?: string;
  smoke?: string;
  childs?: string;
  studies?: string;
  city?: string;
  body?: string;
  zodiac_sign?: string;
  career?: string;
  sport?: string;
  image?: string;
  dni?: string;
  journal?: string;
  time_work?: string;
}

/**
 * 0 - Bronce
 * 1 - Plata
 * 2 - Oro
 * 3 - Diamante
 */
export type UserTypeI = 0 | 1 | 2 | 3;

/**
 * 0 - Registrado
 * 1 - Datos Básicos Actualizados
 * 2 - Datos Direccion Actualizados
 * 3 - Datos Match Actualizados
 * 4 - Verificado
 * 5 - Dado de baja
 */
export type UserStateI = 0 | 1 | 2 | 3;

export interface LoginUserI {
  userName: string;
  password: string;
}

export interface UserProfileI {
  profile_id: string;
  username: string;
}

export interface UserOtpI {
  _id?: string;
  userId: string;
  otp: number;
  used: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserValidOtpI {
  otp: number;
  userName: string;
  userId?: string;
}

export interface UserAuthI {
  user: UserI;
  token: string;
}

export interface UserCountI {
  total: number;
  online: number;
  men: number;
  woman: number;
}

export interface ResetPasswordI {
  code: number;
  username: string;
  password?: string;
}

export interface ReferralsI {
  _id?: string;
  userId: string;
  level: number;
  user?: string;
  name?: string;
  referralsId: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface SearchUsers {
  country: string;
  age: number[];
  stateCivil?: string;
  heigth?: number;
  eyeColor?: string;
  bodyType?: string;
  drink?: string;
  smoke?: string;
  childrens?: string;
  preferences?:string
}
