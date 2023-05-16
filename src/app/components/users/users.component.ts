import { Component, OnInit } from '@angular/core';
import { Istudent } from 'src/app/model/student';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersInfo:Array<Istudent>=[]
  selecteduser!:Istudent
  constructor(private _UsersService:UsersService) { }

  ngOnInit(): void {
    this.usersInfo=this._UsersService.getAlluser()
    this.selecteduser=this.usersInfo[0]
  }

}
