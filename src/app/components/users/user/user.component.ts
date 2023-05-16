import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Istudent } from 'src/app/model/student';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
   userId !: number
   userobj ! : Istudent
  constructor(private _route : ActivatedRoute,
    private _router:Router,
               private _usersService:UsersService) { }

  ngOnInit(): void {
    //  console.log(this._route.snapshot)
    //  this.userId =+this._route.snapshot.params['id']
    // this.userobj=this._usersService.getsingleuser(this.userId)
    // console.log(this.userobj)

    this._route.params
    .subscribe((myparams:Params)=>{
    console.log(myparams);
      this.userId=+myparams['id']
      this.userobj=this._usersService.getsingleuser(this.userId)
    }
   
 )}
 gotoedituser(){
   this._router.navigate(['/users',this.userId,'edit'],{
    queryParamsHandling:'preserve'
   })
 }

}
