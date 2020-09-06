import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { CategoryService } from 'src/app/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stall',
  templateUrl: './stall.component.html',
  styleUrls: ['./stall.component.css']
})
export class StallComponent implements OnInit {
  public cards = []
  public title
  public isMobile: boolean
  public subcategory
  constructor(private categoryService: CategoryService, 
              private deviceService: DeviceDetectorService,
              private route: ActivatedRoute) {
    this.isMobile = this.deviceService.isMobile()
    this.title = this.route.snapshot.paramMap.get('id')
    this.subcategory = decodeURI(this.route.snapshot.paramMap.get('subcat'))
  }

  ngOnInit(): void {
    this.categoryService.GetBySubcat(this.title, this.subcategory, 'magaz', 'мкр. Астана, 4/1').subscribe(data => {
      // this.cards = data
      console.log(data)
    })
  }
}
