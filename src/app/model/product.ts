export interface Iproducts{
    pName:string,
    pId:number,
    pStatus:Pstatus,
    Canreturn: number
}

export type Pstatus = 'In-Progress' | 'Dispatched' | 'Deliverd'