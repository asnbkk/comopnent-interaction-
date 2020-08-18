import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  public isDarkMode: boolean = false
  constructor() {
    if (window.matchMedia && 
      window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.isDarkMode = true
  }
  }
}
