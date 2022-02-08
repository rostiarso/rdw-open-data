import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoertuigsoortService {
  queryUrl='https://opendata.rdw.nl/resource/m9d7-ebf2.json';
  constructor(private http: HttpClient) { }

   getTopNVoertuigsoort(limit:number) :Observable<VoertuigsoortSummary>
  {
    
    return this.http.get<VoertuigsoortTotal[]>(`${this.queryUrl}?$query=select voertuigsoort, count(*) group by voertuigsoort order by count desc limit ${limit}`)
    .pipe(
      mergeMap(voertuigsoortTotalArray => this.getTotalRegistered().pipe(map( totalResult => {voertuigsoortTotalArray.forEach(x => x.percentage=x.count/totalResult);return {voertuigsoortTotal:voertuigsoortTotalArray,total:totalResult};})))
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

export interface VoertuigsoortSummary
{
  voertuigsoortTotal:VoertuigsoortTotal[];
  total:number;
}

export interface VoertuigsoortTotal
{
  voertuigsoort:string;
  count:number;
  percentage:number;
}

export interface Total
{
  
  count:number;
}
