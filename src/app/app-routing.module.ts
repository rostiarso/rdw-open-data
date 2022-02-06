import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopViewByBrandComponent } from './top-view-by-brand/top-view-by-brand.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TopViewByBrandComponent,
    children: []
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }