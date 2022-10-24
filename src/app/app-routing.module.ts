import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildeComponent } from './childe/childe.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ProdouctdetailsComponent } from './pdetails/prodouctdetails/prodouctdetails.component';

import { TemplateformComponent } from './templateform/templateform.component';
const routes: Routes = [
  { path: 'templateform', component: TemplateformComponent },
  {
    path: 'reactform',
    loadChildren: () =>
      import('./reactiveform/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'prodouctsearchbar',
    loadChildren: () =>
      import('./prodouctserch/prodouctserch.module').then(
        (m) => m.ProdouctserchModule
      ),
  },
  { path: 'prodouctsearchbar/:id', loadChildren: ()=> import('./pdetails/pdetails.module').then((m)=>m.PdetailsModule) },
  { path: 'home', component: HomeComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'childe', component: ChildeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
