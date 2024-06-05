import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
