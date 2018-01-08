import { NgModule, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'

import { Observable } from 'rxjs/Observable';

import { ProductRepository } from '../core/repository/product.repository';
import { Product } from '../product/product';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ActivitydFilterPipe, ProductFilterPipe, SortByPipe } from '../core/pipes/sortFilterPagger.pipe'

@NgModule({
  imports: [BrowserModule, FormsModule, FormBuilder, FormControl, ReactiveFormsModule, ActivitydFilterPipe, ProductFilterPipe, NgbModule],
  exports: [BrowserModule, FormsModule, FormBuilder, FormControl, ReactiveFormsModule, ActivitydFilterPipe, ProductFilterPipe],
  declarations: [ActivitydFilterPipe, ProductFilterPipe, SortByPipe],
  providers: [ActivitydFilterPipe, ProductFilterPipe]
})

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _productRepository: ProductRepository, private _formBuilder: FormBuilder) { }

  @ViewChild('closeModal') closeModal: ElementRef;

  private Products: Product;
  private Product: Product;
  private ProductForm: FormGroup;

  private productSymbols = [{ value: "A", name: "Produkt A" }, { value: "B", name: "Produkt B" }, { value: "C", name: "Produkt C" }];
  private actionSymbols = [{ value: "A", name: "Czynność A" }, { value: "B", name: "Czynność B" }, { value: "C", name: "Czynność C" }];
  private peopleQuantity = [{ value: "1", name: "Jedna" }, { value: "2", name: "Dwie" }];

  ngOnInit() {
    this.GetProductList();
    this.InitProductForm();
  }

  InitProductForm() {
    this.ProductForm = this._formBuilder.group({
      'ProductSymbol': [this.productSymbols[0].value, Validators.required],
      'ActivitySymbol': [this.actionSymbols[0].value, Validators.required],
      'AtivityDateStr': [new Date().toLocaleString(), Validators.required],
      'PeopleQuantity': [1, Validators.required]
    });
  }

  GetProductList() {
    this._productRepository.get('products').subscribe(s => this.Products = s);
  }

  ProductAdd(product: Product) {
    product.AtivityDate = new Date(product.AtivityDateStr.year, product.AtivityDateStr.month, product.AtivityDateStr.day);
    this._productRepository.post('products/add', product).subscribe(s => {
      this.closeModal.nativeElement.click();
      this.GetProductList();
    });

  }

}
