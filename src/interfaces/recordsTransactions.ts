export interface RecordsTransactionI {
    _id?: string
    userId: string
    value: number
    detail: string
    walletId?: string
    typeTransaction: string
    referValue?: number
    status?: boolean
    companyValue?: number
    stripePaymentIntent?: string;
    createdAt?: string;
    updatedAt?: string;
}