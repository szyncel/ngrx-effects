import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { AuthGuardService } from './auth/services/auth-guard.service';
import { TodoListPageComponent } from './todo/todo-list-page/todo-list-page.component';
import { TodoDetailsPageComponent } from './todo/todo-details-page/todo-details-page.component';



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'todos', component: TodoListPageComponent, canActivate: [AuthGuardService] },
  { path: 'todos/:id', component: TodoDetailsPageComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
