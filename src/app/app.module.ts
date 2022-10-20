import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactieveformComponent } from './reactieveform/reactieveform.component';
import { ProdouctserchbarComponent } from './prodouctserchbar/prodouctserchbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdouctdetailsComponent } from './prodouctdetails/prodouctdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateformComponent,
    ReactieveformComponent,
    ProdouctserchbarComponent,
    ProdouctdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
