import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdouctserchbarComponent } from './prodouctserchbar/prodouctserchbar.component';
import { ProductserchRoutingModule } from './productserc-routing.module';
import { FormGroup, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProdouctserchbarComponent],
  imports: [
    CommonModule,
    ProductserchRoutingModule,
    FormsModule,
    
  ]
})
export class ProdouctserchModule { }
