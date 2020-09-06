import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './interfaces/products'
import { api_url } from '../assets/data/env'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private backend = `${api_url}/api/categories/`
  private backendProducts = `${api_url}/api/products/`
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getCategory(type, name):Observable<any> { 
    return this.http.post(this.backend +   'shop/', {type: type, name: name}, this.httpHeaders)
  }
  GetBySubcat(title, subcatId, type, name): Observable<Products[]> {
    return this.http.post<Products[]>(this.backendProducts + 'subcategory/', { title: title,  subcat: subcatId, type: type, name: name } , this.httpHeaders)
  }
}
  