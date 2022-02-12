import { Injectable } from '@angular/core';
import { map, mergeMap } from 'rxjs';
import { BasicService } from './basic.service';

@Injectable({
  providedIn: 'root'
})
export class DatumService extends BasicService {
  currentYear=new Date().getFullYear();


  queryAll:string=`${this.queryUrl}?$query=select date_extract_y(datum_eerste_toelating_dt), count(*) where datum_eerste_toelating_dt is not null and kenteken is not null group by date_extract_y_datum_eerste_toelating_dt order by date_extract_y_datum_eerste_toelating_dt`;


  getAllDatum()
  {
    return this.http.get<DatumTotal[]>(this.queryAll)
    .pipe(
      mergeMap(datumTotalArray => this.getTotalRegistered().pipe(map(totalResult => {
        datumTotalArray.forEach(x => x.percentage = x.count / totalResult); 
         return { datumTotal: datumTotalArray, total: totalResult }; })))
    )

  }
  getDatumSince(limit:number)
  {
    return this.http.get<DatumTotal[]>(`${this.queryUrl}?$query=select date_extract_y(datum_eerste_toelating_dt), count(*) where datum_eerste_toelating_dt is not null and date_extract_y(datum_eerste_toelating_dt) > ${this.currentYear-limit} and kenteken is not null group by date_extract_y_datum_eerste_toelating_dt order by date_extract_y_datum_eerste_toelating_dt`)
    .pipe(
      mergeMap(datumTotalArray => this.getTotalRegistered().pipe(map(totalResult => {
        datumTotalArray.forEach(x => x.percentage = x.count / totalResult); 
         return { datumTotal: datumTotalArray, total: totalResult }; })))
    )

  }  
}


export interface DatumSummary
{
  datumTotal:DatumTotal[];
  total:number;
}

export interface DatumTotal
{
  date_extract_y_datum_eerste_toelating_dt:string;
  count:number;
  percentage:number;
}