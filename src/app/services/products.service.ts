import { Injectable } from '@angular/core';
import { Iproducts } from '../model/product';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsArray : Array<Iproducts>=[
    {
      pName:'samsung M31',
      pId:1,
      pStatus:'In-Progress',
      Canreturn:1
    },
    {
      pName:'iphone 14',
      pId:2,
      pStatus:'Dispatched',
      Canreturn:0
    },
    {
      pName:'samsung S22',
      pId:3,
      pStatus:'Deliverd',
      Canreturn:1
    },

  ]
  constructor(private _snackbarService:SnackbarService) { }

  getallProducts():Array<Iproducts>{
   return this.productsArray
  }

  getsingleproduct(id:number){
   return this.productsArray.find(prod => prod.pId === id)
  }

  updateproducts(prodobj:Iproducts){
    this.productsArray.forEach(prod=>{
      if(prod.pId === prodobj.pId){
        prod.pName = prodobj.pName;
        prod.pStatus = prodobj.pStatus
      }
      
    })
     this._snackbarService.openSnackBar(`${prodobj.pName} is updated sucessfully !!!`)
  }
}
