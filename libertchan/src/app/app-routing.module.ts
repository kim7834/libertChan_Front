import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { CatalogDetailComponent } from './catalog/catalog-detail/catalog-detail.component';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },


  { path: '', component: HomeComponent },

  // Route qui requier un login -> canActivate -> privatise une page
  {
    path: 'chan/:shortName',
    component: CatalogDetailComponent,
    canActivate: [AuthGuard]
  }
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
