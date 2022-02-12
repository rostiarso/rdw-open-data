import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopViewByBrandComponent } from './top-view-by-brand/top-view-by-brand.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TopViewByModelComponent } from './top-view-by-model/top-view-by-model.component';
import { TopViewByBrandModelComponent } from './top-view-by-brand-model/top-view-by-brand-model.component';
import { TopViewByTypeComponent } from './top-view-by-type/top-view-by-type.component';
import { TopViewByDatumComponent } from './top-view-by-datum/top-view-by-datum.component';

const routes: Routes = [
  {
    path: '',
    component: TopViewByBrandComponent,
  },
  {
    path: 'topbrand',
    component: TopViewByBrandComponent,
  }, 
  {
    path: 'datum',
    component: TopViewByDatumComponent,
  },     
  {
    path: 'topmodel',
    component: TopViewByModelComponent,
  },  
  {
    path: 'toptype',
    component: TopViewByTypeComponent,
  },  
  {
    path: 'brand/:id',
    component: TopViewByBrandModelComponent,
  },  
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }