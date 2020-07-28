import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public productList = []
  public product
  constructor( private _productService: ProductService ) {
    this.productList = this._productService.getData()
   }

  ngOnInit(): void {
  }

}
