import { NgModule } from '@angular/core';
import { Http, HttpModule, Response, Headers, RequestOptions} from '@angular/http';
  
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch'; 

import { Product } from '../../product/product'

@NgModule({
  imports: [ HttpModule ],
  providers: [],
  declarations: [   ],
  bootstrap: [   ]
})
 
export  class ProductRepository {
    constructor(private _http: Http) { }

    private baseUrl = "http://localhost:64461/api/"; //yea yea

    get(url: string): Observable<Product> {
        return this._http.get(this.baseUrl+url)
          .map((response: Response) => <Product>response.json())
          .catch(this.handleError);
      }
    
      post(url: string, model: Product): Observable<Product> {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log(body);
        return this._http.post(this.baseUrl+url, body, options)
          .map((response: Response) => <Product>response.json())
          .catch(this.handleError);
      }
    
      put(url: string, id: Product, model: Product): Observable<Product> {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this.baseUrl+url+id, body, options)
          .map((response: Response) => <Product>response.json())
          .catch(this.handleError);
      }
    
      delete(url: string, id: Product): Observable<Product> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.delete(this.baseUrl+url+id,options)
          .map((response: Response) => <Product>response.json())
          .catch(this.handleError);
      }

      private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
      }

 }