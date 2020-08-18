import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-interaction';
  public isMobile: boolean
  constructor(private deviceService: DeviceDetectorService) {
    this.isMobile = this.deviceService.isMobile()
  }
}
