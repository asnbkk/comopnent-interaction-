import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interfaces/product';
import { DeviceDetectorService } from 'ngx-device-detector';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() type: string
  private _data
  // data
  cart
  public isMobile: boolean
  constructor( private _productService: ProductService, private deviceService: DeviceDetectorService ) {
    this.isMobile = this.deviceService.isMobile()
  }

  public existingCart = []

    
  ngOnInit(): void {
    let cart = JSON.parse(localStorage.getItem('productList')) || []
    this.cart = cart
    cart.forEach(item => {
      this.existingCart.push(item.name)
    })
  }

  get card() {
    return this._data
  }
  @Input()
  set card(value) { //setter: interceptor for input value
    this.cart = JSON.parse(localStorage.getItem('productList')) || [] //get array of products from cart(localStorage)
    if(this.cart.some(_product => _product.name == value.name)) { //check: if "value" is already in cart. If so, change value of qnt to the identical as its in cart
    let temp = this.cart.find(o => o.name == value.name)
    value.qnt = temp.qnt
  }
  // this.data = value//import all data
  this._data = value //hz
  }  


  addToCart(product: Product) {
    let cart = JSON.parse(localStorage.getItem('productList')) || []
    this.existingCart.push(product.name)
    if(!cart.some(_product => _product.name == product.name)) {
      this._productService.setData(product)
    }
  }
  onDelete(product) {
    let i = this.existingCart.findIndex(o => o == product.name)
    this.existingCart.splice(i, 1)
    this._productService.deleteFromCart(product)
  }
  onAdd(product) {
    this._productService.incrementQnt(product)
  }
  onSubstract(product) {
    this._productService.decrementQnt(product)
  }
}
