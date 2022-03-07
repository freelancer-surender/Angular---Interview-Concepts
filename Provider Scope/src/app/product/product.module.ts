import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstProductComponent } from './first-product/first-product.component';
import { SecondProductComponent } from './second-product/second-product.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'first', component: FirstProductComponent },
  { path: 'second', component: SecondProductComponent },
];

@NgModule({
  declarations: [FirstProductComponent, SecondProductComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductModule {}
