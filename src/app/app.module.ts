import { NgModule } from '@angular/core';
import { BrowserModule,Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MerkService } from './merk.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';


import { FlexLayoutModule } from '@angular/flex-layout';


import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';




import { TopViewByBrandComponent } from './top-view-by-brand/top-view-by-brand.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TopViewByModelComponent } from './top-view-by-model/top-view-by-model.component';
import { HandelsbenamingService } from './handelsbenaming.service';
import { TopViewByBrandModelComponent } from './top-view-by-brand-model/top-view-by-brand-model.component';
import { TopViewByTypeComponent } from './top-view-by-type/top-view-by-type.component';
import { NgChartsModule } from 'ng2-charts';
import { TopViewByDatumComponent } from './top-view-by-datum/top-view-by-datum.component';



@NgModule({
  declarations: [
    AppComponent,
    TopViewByBrandComponent,
    NotFoundComponent,
    TopViewByModelComponent,
    TopViewByBrandModelComponent,
    TopViewByTypeComponent,
    TopViewByDatumComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    

    FlexLayoutModule,

    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressBarModule,

    AppRoutingModule,
      NgChartsModule

  ],
  providers: [Title,MerkService,HandelsbenamingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
