import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudComponent } from './stud/stud.component';



@NgModule({
  declarations: [
    StudComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StudComponent
  ]
})
export class StudentModule { }
