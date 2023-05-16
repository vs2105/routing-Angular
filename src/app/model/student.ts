export interface Istudent{
    Username:string,
    id:number,
    userRole:Iuserrole
}

export type Iuserrole = 'user'|'admin'