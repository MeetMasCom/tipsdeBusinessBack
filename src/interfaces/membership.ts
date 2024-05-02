export interface MembershipI {
    _id?: string
    code: string
    name: string
    price: number
    state: boolean
    description: string
    createdAt?: string;
    updatedAt?: string;
}


export interface MembershipUserI {
    _id?: string
    userId: string
    name?: string
    membershipId: string
    walletId?: string    
    descuento:number
    tiempo:number
    state: boolean
    createdAt?: string;
    updatedAt?: string;
}