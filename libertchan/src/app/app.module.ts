import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { HeaderComponent } from './navigation/header/header.component';
import { CatalogModule } from './catalog/catalog.module';
import { CatalogDetailComponent } from './catalog/catalog-detail/catalog-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/chan/ac', pathMatch: 'full' },
  { path: 'chan/:shortName', component: CatalogDetailComponent }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    CatalogModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
