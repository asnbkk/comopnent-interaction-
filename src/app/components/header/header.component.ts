import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public badge
  constructor(private _productService: ProductService) {
    this._productService.cart$.subscribe(data => {
      this.badge = data
    })
   }

  ngOnInit(): void {
    let data = JSON.parse(localStorage.getItem('productList'))
    if(data != undefined)
      this.badge = data.length
    else this.badge = 0
  }

}
