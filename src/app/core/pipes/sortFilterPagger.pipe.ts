import {NgModule, Pipe, PipeTransform } from '@angular/core';

 
@NgModule({  
    exports:[],
    providers: [],
})

@Pipe({
    name: 'activityFilter',
    pure: false
})
export class ActivitydFilterPipe implements PipeTransform {
    transform(items: any[], term): any {
        console.log('term', term);
      
        return term 
            ? items.filter(item => item.ActivitySymbol.toLowerCase().indexOf(term.toLowerCase()) !== -1)
            : items;
    }
}

@Pipe({
    name: 'productFilter',
    pure: false
})
export class ProductFilterPipe implements PipeTransform {
    transform(items: any[], term): any {
        console.log('term', term);
      
        return term 
            ? items.filter(item => item.ProductSymbol.toLowerCase().indexOf(term.toLowerCase()) !== -1)
            : items;
    }
}

@Pipe({
    name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
    transform(items: any[], sortedBy: string): any {
        console.log('sortedBy', sortedBy);
        
        return items.sort((a, b) => {return b[sortedBy] - a[sortedBy]});
    }
}