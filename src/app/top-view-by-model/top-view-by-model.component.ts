

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
  limit:number=10;
  merk!: string | null;
  handelsbenamingSummary!: Observable< HandelsbenamingSummary>;
  paramSub!: Subscription;
  // dataSource!:Observable< HandelsbenamingTotal[]>;
  title = `Top ${this.limit} By Brand ${this.merk}`;


  displayedColumns: string[] = ['position','handelsbenaming', 'count_handelsbenaming','percentage'];
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
        this. handelsbenamingSummary=this. HandelsbenamingService.getTopHandelsbenaming(this.merk,this.limit);
        this.titleService.setTitle(`${this.merk} Top Model`);
       }
       
   });    
    
    // this.dataSource=this. HandelsbenamingSummary.pipe(map( x => {return x. HandelsbenamingTotal;}));
  }

}
