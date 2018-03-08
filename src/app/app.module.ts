import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MaterialModule} from './material/material.module';
import {NavbarComponent} from './navbar/navbar.component';
import {AppRoutingModule} from './/app-routing.module';
import {HomePageComponent} from './home-page/home-page.component';
import {AddTodoDialogComponent} from './add-todo-dialog/add-todo-dialog.component';
import {AuthModule} from './auth/auth.module';
import {TodoListPageComponent} from './todo/todo-list-page/todo-list-page.component';
import {TodoDetailsPageComponent} from './todo/todo-details-page/todo-details-page.component';
import {TodoListComponent} from './todo/todo-list/todo-list.component';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducerTodo} from './todo/store/reducers/todo.reducers';
import {reducer} from './auth/store/reducers/auth.reducers';
import {TodoModule} from './todo/todo.module';
import {TodoListItemComponent} from './todo/todo-list-item/todo-list-item.component';
import {TestData} from './test-data';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {TodoService} from './todo/todo.service';
import { HttpClientModule } from '@angular/common/http';
import {TodoEffects} from './todo/store/effects/todo.effects';
import {EffectsModule} from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    TodoListPageComponent,
    TodoDetailsPageComponent,
    TodoListComponent,
    AddTodoDialogComponent,
    TodoListItemComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    TodoModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(TestData),
    EffectsModule.forRoot([TodoEffects]),
    StoreModule.forRoot({
      todo: reducerTodo,
      auth: reducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
