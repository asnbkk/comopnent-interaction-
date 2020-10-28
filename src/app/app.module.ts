import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './pages/cart/cart.component';
import { StallComponent } from './pages/stall/stall.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MainComponent } from './pages/main/main.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { CategoryComponent } from './pages/category/category.component';
import { SubcategoryComponent } from './pages/subcategory/subcategory.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { PromoComponent } from './components/promo/promo.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { SvgComponent } from './components/svg/svg.component';

import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    CartComponent,
    StallComponent,
    FooterComponent,
    LoaderComponent,
    MainComponent,
    MobileHeaderComponent,
    CategoryComponent,
    SubcategoryComponent,
    CategoryListComponent,
    PromoComponent,
    TopBarComponent,
    ButtonComponent,
    SvgComponent,
    GoogleMapsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DeviceDetectorModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMFQYw2Pjfz4957O0llOj_7i4wXOg8rSU'
    })  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
