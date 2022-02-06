import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MerkService, MerkSummary, MerkTotal } from '../merk.service';

@Component({
  selector: 'app-top-view-by-brand',
  templateUrl: './top-view-by-brand.component.html',
  styleUrls: ['./top-view-by-brand.component.css']
})
export class TopViewByBrandComponent implements OnInit {
  limit:number=50;
  title = `Top ${this.limit} By Brand`;
  merkSummary!: Observable<MerkSummary>;
  // dataSource!:Observable<MerkTotal[]>;


  displayedColumns: string[] = ['position','merk', 'count_merk','percentage'];
  constructor(private merkService: MerkService) { }
  ngOnInit(): void {
    this.merkSummary=this.merkService.getTopNMerk(this.limit);
    // this.dataSource=this.merkSummary.pipe(map( x => {return x.merkTotal;}));
  }

}
