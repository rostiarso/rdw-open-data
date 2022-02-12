import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BasicService } from './basic.service';

@Injectable({
  providedIn: 'root'
})
export class VoertuigsoortService extends BasicService {
  


   getTopNVoertuigsoort(limit:number) :Observable<VoertuigsoortSummary>
  {
    
    return this.http.get<VoertuigsoortTotal[]>(`${this.queryUrl}?$query=select voertuigsoort, count(*) group by voertuigsoort order by count desc limit ${limit}`)
    .pipe(
      mergeMap(voertuigsoortTotalArray => this.getTotalRegistered().pipe(map( totalResult => {voertuigsoortTotalArray.forEach(x => x.percentage=x.count/totalResult);return {voertuigsoortTotal:voertuigsoortTotalArray,total:totalResult};})))
    )
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

