import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdouctdetailsComponent } from './prodouctdetails/prodouctdetails.component';
import { PdetailsRoutingModule } from './pdetails-routing';



@NgModule({
  declarations: [ProdouctdetailsComponent],
  imports: [
    CommonModule,
    PdetailsRoutingModule
  ]
})
export class PdetailsModule { }
