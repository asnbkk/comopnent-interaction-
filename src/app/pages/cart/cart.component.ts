import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // public productList = []
  public product
  public isMobile: boolean
  constructor( private _productService: ProductService, private deviceService: DeviceDetectorService ) {
    this.isMobile = this.deviceService.isMobile()
  }
  
  ngOnInit(): void {
    
  }

  get data() { //getter allows quickly updata changed data that comes from service
    return this._productService.getData()
  }

}
