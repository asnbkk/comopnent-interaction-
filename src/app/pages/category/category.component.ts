import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public isMobile: boolean
  constructor(private categoryService: CategoryService,
              private deviceService: DeviceDetectorService) { 
                this.isMobile = this.deviceService.isMobile()
              }

  ngOnInit(): void {
  }
}
