import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformRoutingModule } from './reactiveform-routing';
import { ReactieveformComponent } from './reactieveform/reactieveform.component';

@NgModule({
  declarations: [ReactieveformComponent],

  imports: [CommonModule, ReactiveformRoutingModule, ReactiveFormsModule],
})
export class SignupModule {}
