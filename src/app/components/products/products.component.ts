import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iproducts } from 'src/app/model/product';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productInfo : Array<Iproducts> =[]
  selectedprodid!: Number
  constructor(private _ProductsService :ProductsService,
    private _router : Router ) { }

  ngOnInit(): void {
    this.productInfo=this._ProductsService.getallProducts()
    this.selectedprodid=this.productInfo[0].pId
  }

  onClick(){
    this._router.navigate(['/users'])
  }

}
