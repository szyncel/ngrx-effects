import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MaterialModule } from '../material/material.module';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    LoginPageComponent,
    LoginFormComponent
  ],
  providers: [AuthService, AuthGuardService]
})
export class AuthModule { }
