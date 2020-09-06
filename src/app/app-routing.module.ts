import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { StallComponent } from './pages/stall/stall.component';
import { MainComponent } from './pages/main/main.component';
import { CategoryComponent } from './pages/category/category.component';
import { SubcategoryComponent } from './pages/subcategory/subcategory.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  // {path: 'stall', component: StallComponent}
  {path: 'cart', component: CartComponent},
  {path: 'category', component: CategoryComponent, children: [
    {path: '', component: CategoryListComponent},
    {path: 'subcategory/:id', component: SubcategoryComponent},
    {path: 'subcategory/:id/:subcat', component: StallComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
