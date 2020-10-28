import { Component, AfterContentInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { UserService } from './services/user.service';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 'component-interaction';
  
  // public isMobile: boolean
  public isDarkMode: boolean
  constructor(private deviceService: DeviceDetectorService, 
              private userService: UserService,
              private categoryService: CategoryService
              ) {
    this.isDarkMode = this.userService.isDarkMode
  }

  get isMobile() {
    return this.deviceService.isMobile()
  }

  ngAfterContentInit() {
    this.categoryService.getCategory('magaz', 'мкр. Астана, 4/1').subscribe(data => {
      let categories = data
      // console.log(data)
      localStorage.setItem('categories', JSON.stringify(categories))
    })

  }
}
