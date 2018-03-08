import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {TodoService} from '../../todo.service';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import * as fromActions from '../actions/todo.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';


@Injectable()
export class TodoEffects {

  constructor(private actions$: Actions,
              private todoService: TodoService) {
  }


  @Effect()
  loadAllTodos$: Observable<Action> = this.actions$
    .ofType(fromActions.TodoActionTypes.SHOW_ALL)
    .switchMap(() =>
      this.todoService.getAllTodos()
        .map(data => new fromActions.ShowSuccessAction(data))
    );

  @Effect()
  createTodo$: Observable<Action> = this.actions$
    .ofType<fromActions.Add>(fromActions.TodoActionTypes.Add)
    .mergeMap(todo =>
        this.todoService.createTodo(todo)
          .map(res => new fromActions.AddSuccess(res))
      // catch
    );

}
