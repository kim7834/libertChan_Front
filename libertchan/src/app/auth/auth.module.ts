import { NgModule, Type, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthApi } from './service/auth-api';
import { AuthApiToken } from './service/auth.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AuthModule {
  static forRoot(Service: Type<AuthApi>): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [{ provide: AuthApiToken, useClass: Service }]
    };
  }
}
