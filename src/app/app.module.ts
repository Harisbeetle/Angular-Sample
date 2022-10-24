import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateformComponent } from './templateform/templateform.component';

import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildeComponent } from './childe/childe.component';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    TemplateformComponent,
    HomeComponent,
    ParentComponent,
    ChildeComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
