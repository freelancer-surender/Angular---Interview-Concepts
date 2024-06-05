import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircleComponent } from './circle/circle.component';
import { SquareComponent } from './square/square.component';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';
import { OutletComponent } from './outlet/outlet.component';

const routes: Routes = [
  {
    path: "", redirectTo: "colors", pathMatch: "full",
  },
  {
    path: "colors", component: OutletComponent, children: [
      { path: "", component: RedComponent, outlet: "left" },
      { path: "", component: GreenComponent, outlet: "right" }
    ]
  },
  {
    path: "shapes", component: OutletComponent, children: [
      { path: "", component: CircleComponent, outlet: "left" },
      { path: "", component: SquareComponent, outlet: "right" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
