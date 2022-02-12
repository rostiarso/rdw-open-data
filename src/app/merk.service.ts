import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BasicService } from './basic.service';

@Injectable({
  providedIn: 'root'
})
export class MerkService extends BasicService {



  getTopNMerk(limit: number): Observable<MerkSummary> {

    return this.http.get<MerkTotal[]>(`${this.queryUrl}?$query=select merk, count(*) group by merk order by count desc limit ${limit}`)
      .pipe(
        mergeMap(merkTotalArray => this.getTotalRegistered().pipe(map(totalResult => { merkTotalArray.forEach(x => x.percentage = x.count / totalResult); return { merkTotal: merkTotalArray, total: totalResult }; })))
      )
  }


}

export interface MerkSummary {
  merkTotal: MerkTotal[];
  total: number;
}

export interface MerkTotal {
  merk: string;
  count: number;
  percentage: number;
}

