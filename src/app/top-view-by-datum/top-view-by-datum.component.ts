import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DatumService, DatumSummary } from '../datum.service';

import {  ChartConfiguration, ChartData,  ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-top-view-by-datum',
  templateUrl: './top-view-by-datum.component.html',
  styleUrls: ['./top-view-by-datum.component.css']
})
export class TopViewByDatumComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public chartOptions: ChartConfiguration['options'] = { 
    plugins:
    {
      legend: {display:true},
      datalabels: { formatter:function(value,context){return (context.dataIndex%5)?'':value}}
    },
    
    elements: {
      line: {
        tension: 0.5
      }},    
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x:{ticks:{callback:function(value,index,ticks){return (index%5)?'':this.getLabelForValue(index)}}},
      y:{ticks:{callback:function(value,index,ticks){return (value===0)?'':parseInt(''+value)/1000+'K';},

    }

  }}

    
  };
  public chartType: ChartType = 'line';
  public chartPlugins = [
    DataLabelsPlugin
  ];

  public chartData!: ChartData<'line'>;





  datumSummary!: Observable<DatumSummary>;

  limitData=20;
  constructor(private datumService:DatumService,private titleService:Title) { }

  ngOnInit(): void {
    this.datumSummary = this.datumService.getDatumSince(this.limitData).pipe(tap(d => { 
     
      this.chartData=
      {
        labels: d.datumTotal.map(a => a.date_extract_y_datum_eerste_toelating_dt),
        datasets: [
          { data: d.datumTotal.map(a => a.count), label: 'Year of First Registration' }
        ]
      };

    }));
    this.titleService.setTitle('View by Year');
  }

}
