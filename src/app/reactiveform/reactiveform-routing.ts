import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactieveformComponent } from './reactieveform/reactieveform.component';

const routes: Routes = [{ path: '', component: ReactieveformComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveformRoutingModule {}
