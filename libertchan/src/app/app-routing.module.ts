import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navigation/navbar/navbar.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home' , pathMatch: 'full'},
  // { path: 'home' , component: NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
