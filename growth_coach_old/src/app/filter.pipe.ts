import { Pipe, PipeTransform } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: String[]): any[] {
    if(!items) return [];
    if(!searchText) return items;
    return items.filter( it => {
      if(it.createdBy != null){
        const createdBy = it.createdBy.toLotawerCase().toString().includes(searchText) 
      
        return createdBy ;
      }

     

      
      const firstName =  it.firstName.toLowerCase().toString().includes(searchText) 
      const lastName =  it.lastName.toLowerCase().toString().includes(searchText) 
      const address = it.address.toLowerCase().includes(searchText)
     
      
     
      if(it.midName == null){
        return (firstName + lastName + address);
      }
      else{
        const midName =  it.midName.toLowerCase().toString().includes(searchText)
        return (firstName + midName + lastName + address);
      }
     
      
     
     
 
    });
  }
   
}
