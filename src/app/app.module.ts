import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NewProductComponent } from './products/new-product/new-product.component';
import { ProductsComponent } from './products/products.component';

/* --- IMPORTs --- */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        ProductsComponent,
        NewProductComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MDBBootstrapModule.forRoot(),
        MatSidenavModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        HttpClientModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
    ],
    exports:[
        NewProductComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
