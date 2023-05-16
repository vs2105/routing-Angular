import { Injectable } from '@angular/core';
import { Istudent } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   usersArray:Array<Istudent> =[
    {
      Username:'Jhon',
      id: 1,
      userRole:'user'
    },
    {
      Username:'Jenny',
      id:2,
      userRole:'admin'
    },
    {
      Username:'July',
      id:3,
      userRole:'user'
    },
   ]
  constructor() { }

  getAlluser():Array<Istudent>{
    return this.usersArray;
  }

  getsingleuser(id : number){
    return this.usersArray.find(user => user.id === id)!
  }
  
 updateuser(pobj:Istudent){
  this.usersArray.forEach(user=>{
    if(user.id === pobj.id){
      user.Username = pobj.Username
      user.userRole =pobj.userRole
    }
  })
 }
 
}
