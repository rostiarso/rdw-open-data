import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { map, Observable } from 'rxjs';
import { VoertuigsoortService, VoertuigsoortSummary, VoertuigsoortTotal } from '../voertuigsoort.service';

@Component({
  selector: 'app-top-view-by-brand',
  templateUrl: './top-view-by-type.component.html',
  styleUrls: ['./top-view-by-type.component.css']
})
export class TopViewByTypeComponent implements OnInit {
  limit:number=50;
  typeSummary!: Observable<VoertuigsoortSummary>;
  // dataSource!:Observable<MerkTotal[]>;


  displayedColumns: string[] = ['voertuigsoort','count','percentage'];
  constructor(private voertuigsoortService: VoertuigsoortService,private titleService: Title) { }
  ngOnInit(): void {
    this.typeSummary=this.voertuigsoortService.getTopNVoertuigsoort(this.limit);
    this.titleService.setTitle('View by Type');
    // this.dataSource=this.merkSummary.pipe(map( x => {return x.merkTotal;}));
  }

}
