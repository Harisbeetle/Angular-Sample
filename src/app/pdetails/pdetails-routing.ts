import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdouctdetailsComponent } from './prodouctdetails/prodouctdetails.component';


const routes: Routes = [{ path: '', component:ProdouctdetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdetailsRoutingModule{}
