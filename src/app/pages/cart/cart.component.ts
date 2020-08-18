import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // public productList = []
  public product
  constructor( private _productService: ProductService ) {
    
  }
  
  ngOnInit(): void {
    
  }

  get data() { //getter allows quickly updata changed data that comes from service
    console.log('action')
    return this._productService.getData()
  }

}
