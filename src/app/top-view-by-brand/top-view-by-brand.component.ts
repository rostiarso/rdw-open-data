import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { map, Observable } from 'rxjs';
import { MerkService, MerkSummary, MerkTotal } from '../merk.service';

@Component({
  selector: 'app-top-view-by-brand',
  templateUrl: './top-view-by-brand.component.html',
  styleUrls: ['./top-view-by-brand.component.css']
})
export class TopViewByBrandComponent implements OnInit {
  limit:number=50;
  merkSummary!: Observable<MerkSummary>;
  // dataSource!:Observable<MerkTotal[]>;


  displayedColumns: string[] = ['position','merk', 'count_merk','percentage'];
  constructor(private merkService: MerkService,private titleService: Title) { }
  ngOnInit(): void {
    this.merkSummary=this.merkService.getTopNMerk(this.limit);
    this.titleService.setTitle('View by Brand');
    // this.dataSource=this.merkSummary.pipe(map( x => {return x.merkTotal;}));
  }

}
