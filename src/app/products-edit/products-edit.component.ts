import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IProducts } from 'src/models/products';
import { ProductsService } from 'src/server/products.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  product: IProducts = {
    id: 0,
    name: "",
    img: "",
    price: 0,
    description: "",
  }

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute, private router: Router, private toast: ToastrService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    this.productsService.getProducts(id).subscribe(data => {
      this.product = data
    })
  }

  onClick() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    this.productsService.putProducts(this.product).subscribe(data => {
      this.router.navigateByUrl("/products")
      this.toast.success("Sửa thành công")
    })
  }

}
