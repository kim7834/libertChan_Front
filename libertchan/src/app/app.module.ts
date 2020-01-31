import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { HeaderComponent } from './navigation/header/header.component';


import { HomeModule } from './home/home.module';
import { CatalogModule } from './catalog/catalog.module';

import { HomeComponent } from './home/home/home.component';
import { CatalogDetailComponent } from './catalog/catalog-detail/catalog-detail.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '' , component: HomeComponent},

  { path: 'chan/:shortName', component: CatalogDetailComponent }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    HomeModule,
    CatalogModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
