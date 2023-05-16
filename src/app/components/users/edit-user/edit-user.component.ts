import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Istudent, Iuserrole } from 'src/app/model/student';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userId!:number;
  selecteduser!:Istudent
  canedit:boolean=true
  constructor(private _route:ActivatedRoute,
    private _UsersService : UsersService,
    private _router:Router ) { }

  ngOnInit(): void {
    this.userId=+this._route.snapshot.params['id']
    this.selecteduser=this._UsersService.getsingleuser(this.userId)!
    console.log(this.selecteduser)
    this._route.queryParams
         .subscribe((quryParms: Params) => {
          this.canedit=quryParms['canEdit'].includes('user')
          console.log(this.canedit)
         })
  }

  onUserupdate(Uname:HTMLInputElement,userRole:HTMLInputElement){
     let obj:Istudent={
      Username:Uname.value,
      id:this.userId,
      userRole:userRole.value as Iuserrole
     }
     this._UsersService.updateuser(obj)
     this._router.navigate(['users', this.userId])
  }

}
