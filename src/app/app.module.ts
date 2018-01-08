import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder, ControlValueAccessor,  NG_VALUE_ACCESSOR } from '@angular/forms';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ProductComponent }  from './product/product.component';
import { ProductModule } from './product/product.module'; 
 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ProductFilterPipe, ActivitydFilterPipe, SortByPipe } from './core/pipes/sortFilterPagger.pipe'
import { pipeDef } from '@angular/core/src/view/provider';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ProductModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [ AppComponent, ProductComponent, ProductFilterPipe, ActivitydFilterPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }