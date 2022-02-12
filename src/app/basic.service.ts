import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  totalVehicle!: Observable<number>;

  queryUrl='https://opendata.rdw.nl/resource/m9d7-ebf2.json';

  constructor(protected  http: HttpClient) { 
    this.totalVehicle=this.http.get<Total[]>(`${this.queryUrl}?$query=select%20count(*)`)
    .pipe(
      map(response => {
        if (response!=null && response.length==1)
        {
          return <number>response[0]["count"];
        }          
        return -1;
      })
    );
   }

  getTotalRegistered() : Observable<number>
  {
    return this.totalVehicle;
  }

}

export interface Total
{
  
  count:number;
}
