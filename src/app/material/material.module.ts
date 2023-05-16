import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule, 
    MatFormFieldModule,
    MatInputModule,
    MatListModule
  ],
  exports:[
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatInputModule,
    MatListModule
  ]
})
export class MaterialModule { }
