import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdouctserchbarComponent } from './prodouctserchbar/prodouctserchbar.component';


const routes: Routes = [
 {path:'',component:ProdouctserchbarComponent}

];

@NgModule({
imports:[RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductserchRoutingModule{}
