import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproducts } from 'src/app/model/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productid!:number
  ProductObj !: Iproducts
  constructor(private _route:ActivatedRoute, private _productsService : ProductsService, private _router:Router) { }

  ngOnInit(): void {
    console.log(this._route.snapshot)
    this.productid = +this._route.snapshot.params['id']
    // console.log(this.productid,typeof this.productid)
     this.ProductObj = this._productsService.getsingleproduct(this.productid)!

  }
  onEditprod(){
   this._router.navigate(['/products',this.productid,'edit'],{
    queryParamsHandling:'preserve'
   })
  }

}
