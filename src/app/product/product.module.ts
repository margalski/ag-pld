import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProductRepository } from '../core/repository/product.repository';

import { ProductFilterPipe, ProductActivityIdFilterPipe, SortByPipe } from '../core/pipes/sortFilterPagger.pipe';

@NgModule({
    imports: [ProductRepository, FormsModule, BrowserModule,],
    declarations: [],
    exports: [],
    providers: [],
})
export class ProductModule {

}