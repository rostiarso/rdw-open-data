import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopViewByBrandComponent } from './top-view-by-brand/top-view-by-brand.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TopViewByModelComponent } from './top-view-by-model/top-view-by-model.component';

const routes: Routes = [
  {
    path: '',
    component: TopViewByBrandComponent,
  },
  {
    path: 'brand/:id',
    component: TopViewByModelComponent,
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