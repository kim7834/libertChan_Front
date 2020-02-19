import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { HomeModule } from './home/home.module';
import { CatalogModule } from './catalog/catalog.module';
import { TopicModule } from './topic/topic.module';
import { AuthModule } from './auth/auth.module';
import { AuthApiService } from './auth/service/auth-api.service';
import { HttpInterceptorAuthService } from './auth/service/http-interceptor-auth.service.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    HomeModule,
    CatalogModule,
    TopicModule,
    AuthModule.forRoot(AuthApiService)
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorAuthService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {}
