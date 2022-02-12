import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { map, Observable, tap } from 'rxjs';
import { MerkService, MerkSummary, MerkTotal } from '../merk.service';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-top-view-by-brand',
  templateUrl: './top-view-by-brand.component.html',
  styleUrls: ['./top-view-by-brand.component.css']
})
export class TopViewByBrandComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.

    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'center',
        align: 'center'
      }
    }
  };
  public chartType: ChartType = 'pie';
  public chartPlugins = [
    DataLabelsPlugin
  ];

  public chartData!: ChartData<'pie'>;



  limit: number = 50;
  chartLimit:number = 3;
  merkSummary!: Observable<MerkSummary>;
  // dataSource!:Observable<MerkTotal[]>;


  displayedColumns: string[] = ['position', 'merk', 'count_merk', 'percentage'];
  constructor(private merkService: MerkService, private titleService: Title) { }
  ngOnInit(): void {
    this.merkSummary = this.merkService.getTopNMerk(this.limit).pipe(tap(m => { 
     
      this.chartData=
      {
        labels: m.merkTotal.map(a => a.merk).slice(0,this.chartLimit),
        datasets: [
          { data: m.merkTotal.map(a => a.count).slice(0,this.chartLimit), label: 'Brand' }
        ]
      };

    }));
    this.titleService.setTitle('View by Brand');
    
  }





}
