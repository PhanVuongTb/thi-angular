import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../server/products.service';
import { IProducts } from './../../models/products';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product!: IProducts[];

  constructor(private productsService: ProductsService, private toart: ToastrService) { }

  ngOnInit(): void {
    this.getProductList()
  }

  getProductList() {
    this.productsService.getProductsList().subscribe(data => {
      this.product = data
    })
  }

  onXoa(id: any) {
    this.productsService.xoaProducts(id).subscribe(() => {
      this.product = this.product.filter(item => item.id !== id)
      this.toart.success("Bạn đã xóa thành công")
      alert("Bạn đã xóa thành công")
    })
  }


}
