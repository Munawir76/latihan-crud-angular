import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardProductComponent } from './components/card-product/card-product.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import {MatCardModule} from '@angular/material/card';
import { SideBarComponent } from './components/layout/side-bar/side-bar.component';
import { TableProductComponent } from './components/table-product/table-product.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardProductComponent,
    DashboardComponent,
    SideBarComponent,
    TableProductComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
