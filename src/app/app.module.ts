import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ErpModule } from './sections/erp/erp.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SplashComponent } from './components/shared/splash/splash.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SplashComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
