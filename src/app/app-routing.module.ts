import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdouctdetailsComponent } from './prodouctdetails/prodouctdetails.component';
import { ProdouctserchbarComponent } from './prodouctserchbar/prodouctserchbar.component';
import { ReactieveformComponent } from './reactieveform/reactieveform.component';
import { TemplateformComponent } from './templateform/templateform.component';

const routes: Routes = [
  { path: 'templateform', component: TemplateformComponent },
  { path: 'reactieveform', component: ReactieveformComponent },
  { path: 'prodouctsearchbar', component: ProdouctserchbarComponent },
  { path: 'prodouctsearchbar/:id', component: ProdouctdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
