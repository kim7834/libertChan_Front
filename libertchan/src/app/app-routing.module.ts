import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { HeaderComponent } from './navigation/header/header.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home' , pathMatch: 'full'},
  // { path: 'home' , component: NavbarComponent},

  { path: 'chan/:shortName' , component: HeaderComponent},
  // { path: 'chan/ac' , component: HeaderComponent},
  // { path: 'chan/po' , component: HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
