import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-interaction';
  public isMobile: boolean
  public isDarkMode: boolean
  constructor(private deviceService: DeviceDetectorService, private userService: UserService) {
    this.isMobile = this.deviceService.isMobile()

    this.isDarkMode = this.userService.isDarkMode
  }
}
