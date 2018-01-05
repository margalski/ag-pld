import { NgModule, Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'

import { Observable } from 'rxjs/Observable';

import { ProductRepository } from '../core/repository/product.repository';
import { Product } from '../product/product';

import { ProductActivityIdFilterPipe, ProductFilterPipe, SortByPipe } from '../core/pipes/sortFilterPagger.pipe'

@NgModule({
  imports: [BrowserModule, FormsModule, ProductActivityIdFilterPipe, ProductFilterPipe],
  exports: [ProductActivityIdFilterPipe, ProductFilterPipe],
  declarations: [ProductActivityIdFilterPipe, ProductFilterPipe, SortByPipe],
  providers: [ProductActivityIdFilterPipe, ProductFilterPipe]
})

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Products: Product;

  constructor(private _productRepository: ProductRepository) { }

  ngOnInit() { this.GetProductList(); }

  GetProductList() {
    this._productRepository.get('products').subscribe(s => this.Products = s);
    //.subscribe(res => this._products = res);
  }
}
