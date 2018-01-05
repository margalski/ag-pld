import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ProductComponent }  from './product/product.component';
import { ProductModule } from './product/product.module';
// import { CoreModule }   from './core/core.module';
// import { SharedModule }   from './shared/shared.module';
 
import { ProductFilterPipe, ProductActivityIdFilterPipe, SortByPipe } from './core/pipes/sortFilterPagger.pipe'
import { pipeDef } from '@angular/core/src/view/provider';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ProductModule,
    AppRoutingModule,
  ],
  declarations: [ AppComponent, ProductComponent, ProductFilterPipe, ProductActivityIdFilterPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }