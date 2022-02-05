import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MerkService, MerkSummary, MerkTotal } from './merk-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rdw-open-data';
  merkSummary!: Observable<MerkSummary>;
  // dataSource!:Observable<MerkTotal[]>;


  displayedColumns: string[] = ['merk', 'count_merk','percentage'];
  constructor(private merkService: MerkService) { }
  ngOnInit(): void {
    this.merkSummary=this.merkService.getTopNMerk(10);
    // this.dataSource=this.merkSummary.pipe(map( x => {return x.merkTotal;}));
  }

}
