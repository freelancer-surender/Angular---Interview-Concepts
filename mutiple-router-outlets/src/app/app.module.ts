import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CircleComponent } from './circle/circle.component';
import { SquareComponent } from './square/square.component';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';
import { OutletComponent } from './outlet/outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CircleComponent,
    SquareComponent,
    RedComponent,
    GreenComponent,
    OutletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
