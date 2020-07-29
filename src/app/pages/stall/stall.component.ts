import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-stall',
  templateUrl: './stall.component.html',
  styleUrls: ['./stall.component.css']
})
export class StallComponent implements OnInit {
  public cards = []
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this._productService.getProducts().subscribe(data => {
      this.cards = data
    })
  }

}
