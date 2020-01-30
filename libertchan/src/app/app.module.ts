import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { SelectedChannelService } from './navigation/selected-channel.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NavigationModule],
  providers: [SelectedChannelService],
  bootstrap: [AppComponent]
})
export class AppModule {}
