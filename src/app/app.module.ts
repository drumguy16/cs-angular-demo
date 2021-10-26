import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeOneComponent } from './pages/home-one/home-one.component';
import { HomeTwoComponent } from './pages/home-two/home-two.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { FindTruckComponent } from './components/home-one/find-truck/find-truck.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";


import { ImageCardComponent } from './components/ui/image-card/image-card.component';
import { PercentagesComponent } from './components/home-one/percentages/percentages.component';
import { TestimonialsComponent } from './components/home-one/testimonials/testimonials.component';
import { GetInTouchComponent } from './components/home-one/get-in-touch/get-in-touch.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeOneComponent,
    HomeTwoComponent,
    ButtonComponent,
    FindTruckComponent,
    ImageCardComponent,
    PercentagesComponent,
    TestimonialsComponent,
    GetInTouchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NoopAnimationsModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
