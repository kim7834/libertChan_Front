import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { CatalogDetailComponent } from './catalog/catalog-detail/catalog-detail.component';
import { environment } from 'src/environments/environment';
import { CatalogMosaicComponent } from './catalog/catalog-mosaic/catalog-mosaic.component';
import { TopicComponent } from './topic/topic/topic.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'chan/:shortName', component: CatalogDetailComponent },
  { path: 'chan/:shortName/mosaic', component: CatalogMosaicComponent },
  { path: 'chan/:shortName/:id', component: TopicComponent }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes)
    /** Commande pour debug les routes -> requier module Environment */
    RouterModule.forRoot(routes, {
      enableTracing: !environment.production && environment.enableTracing,
      paramsInheritanceStrategy: 'always'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
