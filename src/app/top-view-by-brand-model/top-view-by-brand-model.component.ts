

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import {  HandelsbenamingService,  HandelsbenamingByMerkSummary,  HandelsbenamingTotal } from '../handelsbenaming.service';

@Component({
  selector: 'app-top-view-by-brand',
  templateUrl: './top-view-by-brand-model.component.html',
  styleUrls: ['./top-view-by-brand-model.component.css']
})
export class TopViewByBrandModelComponent implements OnInit,OnDestroy {
  limit:number=10;
  merk!: string | null;
  handelsbenamingSummary!: Observable< HandelsbenamingByMerkSummary>;
  paramSub!: Subscription;
  // dataSource!:Observable< HandelsbenamingTotal[]>;


  displayedColumns: string[] = ['position','handelsbenaming','voertuigsoort', 'count','percentage'];
  constructor(private  HandelsbenamingService:  HandelsbenamingService, private activatedRoute:ActivatedRoute,private titleService: Title) { }
  ngOnDestroy(): void {
    if(this.paramSub)
      this.paramSub.unsubscribe();
  }
  ngOnInit(): void {
    

    this.paramSub=this.activatedRoute.paramMap.subscribe(params => { 
      console.log(params);
       this.merk = params.get('id'); 
       if(this.merk)
       {
        this. handelsbenamingSummary=this. HandelsbenamingService.getTopHandelsbenamingByMerk(this.merk,this.limit);
        this.titleService.setTitle(`${this.merk} Top Model`);
       }
       
   });    
    
    // this.dataSource=this. HandelsbenamingSummary.pipe(map( x => {return x. HandelsbenamingTotal;}));
  }

}
