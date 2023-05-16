import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproducts, Pstatus } from 'src/app/model/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
   productid!:number
   selectedProduct!:Iproducts;
   canEdit:number=1
  constructor(private _route : ActivatedRoute,
   private _productsService:ProductsService,
    private _router:Router) { }

  ngOnInit(): void {
    this.productid=+this._route.snapshot.params['id']
    this.selectedProduct=this._productsService.getsingleproduct(this.productid)!
    this._route.queryParams
    .subscribe((queryparams:Params)=>{
        console.log(queryparams)
        this.canEdit=+queryparams['canEdit']
    })
  }

  onProductedit(pname:HTMLInputElement, pstatus:HTMLSelectElement){
   let obj:Iproducts={
    pName:pname.value,
    pStatus:pstatus.value as Pstatus,
    pId:this.productid,
    Canreturn:this.selectedProduct.Canreturn
   }
   this._productsService.updateproducts(obj)
   this._router.navigate(['products', this.productid])
  }

}
