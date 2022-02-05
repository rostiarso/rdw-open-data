import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MerkService {
  queryUrl='https://opendata.rdw.nl/resource/m9d7-ebf2.json';
  constructor(private http: HttpClient) { }

   getTopNMerk(limit:number) :Observable<MerkSummary>
  {
    
    return this.http.get<MerkTotal[]>(`${this.queryUrl}?$query=select merk, count(*) group by merk order by count desc limit ${limit}`)
    .pipe(
      mergeMap(merkTotalArray => this.getTotalRegistered().pipe(map( totalResult => {merkTotalArray.forEach(x => x.percentage=x.count/totalResult);return {merkTotal:merkTotalArray,total:totalResult};})))
    )
  }

  getTotalRegistered() : Observable<number>
  {
    return this.http.get<Total[]>(`${this.queryUrl}?$query=select%20count(*)`)
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
}

export interface MerkSummary
{
  merkTotal:MerkTotal[];
  total:number;
}

export interface MerkTotal
{
  merk:string;
  count:number;
  percentage:number;
}

export interface Total
{
  
  count:number;
}
