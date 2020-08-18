import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-stall',
  templateUrl: './stall.component.html',
  styleUrls: ['./stall.component.css']
})
export class StallComponent implements OnInit {
  public cards = []
  public isMobile: boolean
  constructor(private _productService: ProductService, private deviceService: DeviceDetectorService) {
    this.isMobile = this.deviceService.isMobile()
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getProducts()
    }, 0)
  }

  getProducts() {
    this._productService.getProducts().subscribe(data => {
      this.cards = data
    })
  }

}
