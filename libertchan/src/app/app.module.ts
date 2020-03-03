import { ConnectedUserComponent } from './connected-user/connected-user.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { HomeModule } from './home/home.module';
import { CatalogModule } from './catalog/catalog.module';
import { TopicModule } from './topic/topic.module';
import { AdministrationModule } from './administration/administration.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BasicAuthInterceptorService } from './Auth/basic-auth-interceptor.service';
import { AddConnectedUserComponent } from './add-connected-user/add-connected-user.component';





@NgModule({
  declarations: [AppComponent, LoginComponent, LogoutComponent, ConnectedUserComponent, AddConnectedUserComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NavigationModule,
    HomeModule,
    HttpClientModule,
    CatalogModule,
    TopicModule,
    AdministrationModule,
    MarkdownModule.forRoot()
  ],
  providers: [ {   provide: HTTP_INTERCEPTORS, useExisting: BasicAuthInterceptorService, multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule {}
