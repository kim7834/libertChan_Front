import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { HomeModule } from './home/home.module';
import { CatalogModule } from './catalog/catalog.module';
import { AuthApiToken } from './auth/service/auth.service';
import { AuthApiService } from './services/auth-api.service';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    HomeModule,
    CatalogModule,
    AuthModule.forRoot(AuthApiService)
  ],
  providers: [
    // {provide: AuthApiToken, useClass: AuthApiService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
