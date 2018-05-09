import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './core/auth-guard.service';

const routes: Routes = [
  { path: 'base', component: BaseComponent, canActivate: [AuthGuardService], },
  { path: 'login', component: LoginComponent },
  { path: '',
    redirectTo: '/base',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
