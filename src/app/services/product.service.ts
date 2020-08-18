import { Injectable, DoCheck } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements DoCheck{
  private length = new Subject<number>()
  cart$ = this.length.asObservable()
  
  data = []

  dataChange: Subject<any> = new Subject<any>()
  
  private _url = "assets/data/products.json"
  constructor( private http: HttpClient ) {
      this.dataChange.subscribe((value) => {
        this.data = value
      })

      this.data = JSON.parse(localStorage.getItem('productList'))

    }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this._url)
  }
  
  setData(data) {
    this.data = JSON.parse(localStorage.getItem('productList')) || []
    data.total = data.price * data.qnt
    this.data.push(data)
    let products = JSON.stringify(this.data)
    localStorage.setItem('productList', products)
    this.length.next(this.data.length)
  }

  ngDoCheck() {
    this.data = JSON.parse(localStorage.getItem('productList'))
  }

  getData() {
    return this.data
  }

  incrementQnt(product) {    
    let products = JSON.parse(localStorage.getItem("productList") || "[]")
    if(!products.some(_product => _product.name == product.name)) {
      product.qnt = ++product.qnt
      product.total = product.price * product.qnt
    }
    else {
      let i = products.findIndex(o => o.name == product.name)
      products[i].qnt += 1
      products[i].total = products[i].price * products[i].qnt
      localStorage.setItem("productList", JSON.stringify(products))
      product.qnt = ++product.qnt
    }
  }

  decrementQnt(product) {
    let products = JSON.parse(localStorage.getItem("productList") || "[]")
    if(products.some(_product => _product.name == product.name)) {
      let i = products.findIndex(o => o.name == product.name)
      if(products[i].qnt > 1) {
        products[i].qnt -= 1
        products[i].total = products[i].total - products[i].price
        localStorage.setItem("productList", JSON.stringify(products))
        product.qnt = --product.qnt
      }
    }
    else {
      product.qnt = --product.qnt
    }
  }

  deleteFromCart(product) {
    let products = JSON.parse(localStorage.getItem("productList") || "[]")
    products.forEach(item => {
      if(item.name == product.name) {
        product.qnt = 1
        let i = products.indexOf(item)
        products.splice(i, 1)
      }
    })
    this.data = products
    this.length.next(products.length)
    localStorage.setItem("productList", JSON.stringify(products))
  }
  

}
