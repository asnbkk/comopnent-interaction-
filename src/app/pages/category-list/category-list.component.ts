import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public categories
  constructor(private router: Router) {
    this.categories = JSON.parse(localStorage.getItem('categories'))
   }

  ngOnInit(): void {
  }

  onNav(cat) {
    this.router.navigate(['category/subcategory', cat.name])
    localStorage.setItem('subcategories', JSON.stringify(cat.subcategories))
  }

}
