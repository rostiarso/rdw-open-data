

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

  getTopHandelsbenaming(merk: string, limit: number): Observable<HandelsbenamingSummary> {

    return this.http.get<HandelsbenamingTotal[]>(`${this.queryUrl}?$query=select handelsbenaming, count(*) where  merk="${merk}" group by handelsbenaming order by count desc limit ${limit}`)
      .pipe(
        mergeMap(HandelsbenamingTotalArray => 
          this.getTotalRegistered(merk).pipe(map(totalResult => 
            { 
              HandelsbenamingTotalArray.forEach(x => x.percentage = x.count / totalResult); 
              return { merk: merk, handelsbenamingTotal: HandelsbenamingTotalArray, total: totalResult };
            })))
      )
  }

  getTotalRegistered(merk: string): Observable<number> {
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

export interface HandelsbenamingSummary {
  merk: string;
  handelsbenamingTotal: HandelsbenamingTotal[];
  total: number;
}

export interface HandelsbenamingTotal {
  handelsbenaming: string;
  count: number;
  percentage: number;
}

export interface Total {

  count: number;
}
