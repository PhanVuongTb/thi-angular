import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  {
    path: "products", children: [
      { path: "", component: ProductsComponent },
      { path: "add", component: ProductsAddComponent },
      { path: ":id/edit", component: ProductsEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
