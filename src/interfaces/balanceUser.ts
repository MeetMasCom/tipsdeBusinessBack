export interface BalanceUserI {
    _id?: string;
    userId?: string;
    balance: number;
    alias?: string;
    sigla?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface BalanceUserAllI {
    userId: string;
    balance: number;
    updatedAt?: string;
}

export interface RechargeI {
    id?: string;
    dir: string;
    file: string;
    hash: string;
    amount: number;
    detail: string;
    remark?: string;
    walletId: string;
    userId: string;
    status: number;
    user?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface ReviewRechargeI {
    id: string;
    remark: string;
    status: number;
    value: number;
}

export interface ReviewRetreatI {
    id: string;
    remark: string;
    value: number;
    status: number;
    file: string;
}

export interface RetreatI {
    _id?: string
    userId: string
    userName?: string
    walletId: string;
    statusDetail?: string;
    amount: number;
    remark?: string;
    file?: string;
    status?: number; // 0 enviado, 1 aprobado, 2 rechazado
    createdAt?: string;
    updatedAt?: string;
    detalle?: string;
    dir?: string;
    tag?: string;
}