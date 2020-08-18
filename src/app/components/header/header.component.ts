import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public badge
  public toggle = false
  public isMobile: boolean
  constructor(private _productService: ProductService, private deviceService: DeviceDetectorService) {
    this._productService.cart$.subscribe(data => {
      this.badge = data
    })
    this.isMobile = this.deviceService.isMobile()
  }


  ngOnInit(): void {
    let data = JSON.parse(localStorage.getItem('productList'))
    if (data != undefined)
      this.badge = data.length
    else this.badge = 0

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      const newColorScheme = e.matches ? "dark" : "light";
    });
  }

}
