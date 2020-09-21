import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  public shopCategory
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.shopCategory = this.userService.shopList[0]
  }

}
