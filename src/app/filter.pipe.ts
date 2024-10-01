import { Pipe, PipeTransform } from '@angular/core';
import { IBooks } from './models/ibooks';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value:any, searchTerm: any):any {
  //   if (value.length===0) {
  //     return value;
  //   }

  //   return value.filter(function(search:{name:any}){
  //     return search.name.toLowerCase().indexOf(searchTerm.toLowerCase())> -1
  //   })
   
  // }
  transform(value: any[], searchTerm: string, type: string): any[] {
    if (!value || value.length === 0 || !searchTerm) {
      return value;
    }

    return value.filter((item: any) => {
      if (type === 'user') {
        return (
          item.user_Name?.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
          item.email?.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        );
      } else if (type === 'book') {
        return item.name?.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      }
      return false; // default case
    });
  }
  

}
