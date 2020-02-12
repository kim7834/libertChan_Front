import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { HomeModule } from './home/home.module';
import { CatalogModule } from './catalog/catalog.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    HomeModule,
    CatalogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
