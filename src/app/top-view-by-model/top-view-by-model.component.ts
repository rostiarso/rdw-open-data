

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import {  HandelsbenamingService,  HandelsbenamingSummary,  HandelsbenamingTotal } from '../handelsbenaming.service';

@Component({
  selector: 'app-top-view-by-brand',
  templateUrl: './top-view-by-model.component.html',
  styleUrls: ['./top-view-by-model.component.css']
})
export class TopViewByModelComponent implements OnInit,OnDestroy {
  limit:number=50;
  merk!: string | null;
  handelsbenamingSummary!: Observable< HandelsbenamingSummary>;
  paramSub!: Subscription;
  // dataSource!:Observable< HandelsbenamingTotal[]>;
  


  displayedColumns: string[] = ['position','handelsbenaming','merk','voertuigsoort', 'count','percentage'];
  constructor(private  HandelsbenamingService:  HandelsbenamingService, private activatedRoute:ActivatedRoute,private titleService: Title) { }
  ngOnDestroy(): void {
    if(this.paramSub)
      this.paramSub.unsubscribe();
  }
  ngOnInit(): void {

        this. handelsbenamingSummary=this. HandelsbenamingService.getTopHandelsbenaming(this.limit);
        this.titleService.setTitle('View by Model');
   
    
    // this.dataSource=this. HandelsbenamingSummary.pipe(map( x => {return x. HandelsbenamingTotal;}));
  }

}
