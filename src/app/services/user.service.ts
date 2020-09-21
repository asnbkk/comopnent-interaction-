import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ShopJson from '../../assets/data/ShopData.json'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isDarkMode: boolean = false
  public url: string = 'assets/data/shopData.json'
  constructor(private http: HttpClient) {
    if (window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.isDarkMode = true
    }
  }
  public shopList = ShopJson
}
