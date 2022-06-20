import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../server/products.service';
import { Router } from '@angular/router';
import { IProducts } from './../../models/products';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {

  product: IProducts = {
    id: 0,
    name: "",
    img: "",
    price: 0,
    description: "",
  }

  constructor(private productsService: ProductsService, private router: Router, private toast: ToastrService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.productsService.addProducts(this.product).subscribe(data => {
      this.router.navigateByUrl('/products'),
        this.toast.success("Thêm thành công")
    })
  }


}
