

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandelsbenamingService {
  queryUrl = 'https://opendata.rdw.nl/resource/m9d7-ebf2.json';
  constructor(private http: HttpClient) { }



  getTopHandelsbenamingByMerk(merk: string, limit: number): Observable<HandelsbenamingByMerkSummary> {

    return this.http.get<HandelsbenamingTotal[]>(`${this.queryUrl}?$query=select handelsbenaming, merk, voertuigsoort, count(*) where  merk="${merk}" group by handelsbenaming, merk,voertuigsoort order by count desc limit ${limit}`)
      .pipe(
        mergeMap(HandelsbenamingTotalArray => 
          this.getTotalRegisteredByMerk(merk).pipe(map(totalResult => 
            { 
              HandelsbenamingTotalArray.forEach(x => x.percentage = x.count / totalResult); 
              return { merk: merk, handelsbenamingTotal: HandelsbenamingTotalArray, total: totalResult };
            })))
      )
  }

  getTopHandelsbenaming(limit: number): Observable<HandelsbenamingSummary> {
    const query=`${this.queryUrl}?$query=select handelsbenaming, merk, voertuigsoort, count(*) group by handelsbenaming, merk, voertuigsoort order by count desc limit ${limit}`;
    console.log(query);
    return this.http.get<HandelsbenamingTotal[]>(query)
      .pipe(
        mergeMap(HandelsbenamingTotalArray => 
          this.getTotalRegistered().pipe(map(totalResult => 
            { 
              HandelsbenamingTotalArray.forEach(x => x.percentage = x.count / totalResult); 
              return { handelsbenamingTotal: HandelsbenamingTotalArray, total: totalResult };
            })))
      )
  }


  getTotalRegistered(): Observable<number> {
    return this.http.get<Total[]>(`${this.queryUrl}?$query=select count(*)`)
      .pipe(
        map(response => {
          if (response != null && response.length == 1) {
            return <number>response[0]["count"];
          }
          return -1;
        })
      );
  }

  getTotalRegisteredByMerk(merk: string): Observable<number> {
    return this.http.get<Total[]>(`${this.queryUrl}?$query=select count(*) where  merk=\"${merk}\"`)
      .pipe(
        map(response => {
          if (response != null && response.length == 1) {
            return <number>response[0]["count"];
          }
          return -1;
        })
      );
  }


}




export interface HandelsbenamingByMerkSummary {
  merk: string;
  handelsbenamingTotal: HandelsbenamingTotal[];
  total: number;
}
export interface HandelsbenamingSummary {

  handelsbenamingTotal: HandelsbenamingTotal[];
  total: number;
}



export interface HandelsbenamingTotal {
  handelsbenaming: string;
  merk:string;
  voertuigsoort:string;
  count: number;
  percentage: number;
}

export interface Total {

  count: number;
}
