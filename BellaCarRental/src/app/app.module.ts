import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    HomeContentComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
