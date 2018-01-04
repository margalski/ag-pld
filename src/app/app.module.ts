import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ProductComponent }  from './product/product.component';
import { ProductModule } from './product/product.module';
// import { CoreModule }   from './core/core.module';
// import { SharedModule }   from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    ProductModule,
    AppRoutingModule,
  ],
  declarations: [ AppComponent, ProductComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }