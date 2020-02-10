import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { CatalogDetailComponent } from './catalog/catalog-detail/catalog-detail.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },

  { path: 'chan/:shortName', component: CatalogDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
