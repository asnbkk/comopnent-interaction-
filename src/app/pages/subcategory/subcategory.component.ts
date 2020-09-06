import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  public id
  public subcategories
  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.subcategories = JSON.parse(localStorage.getItem('subcategories'))
  }

  ngOnInit(): void {
  }

  onNav(cat) {
    this.router.navigate(['category/subcategory/', this.id, cat])
    console.log(this.id, cat)
  }

}
