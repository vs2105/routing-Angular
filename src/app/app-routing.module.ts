import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserComponent } from './components/users/user/user.component';
import { ProductComponent } from './components/products/product/product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';

const routes :Routes=[
  {
    path : '', component:DashboardComponent
  },

  {
    path :'users', component:UsersComponent
  },
  {
    path :'users/:id', component:UserComponent
  },
  {
    path :'users/:id/edit', component:EditUserComponent
  },
  {
    path :'products', component:ProductsComponent
  },
  {
    path :'products/:id', component:ProductComponent
  },
  {
    path :'products/:id/edit', component:EditProductComponent
  },
  {
   path:'**', redirectTo:'pagenotfound'
  },
  {
    path :'pagenotfound', component:PageNotFoundComponent
  }
 ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
