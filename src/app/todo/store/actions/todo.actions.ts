import {Action} from '@ngrx/store';
import {Todo} from '../../models/todo';

export enum TodoActionTypes {
  Add = '[Todo] Add',
  Remove = '[Todo] Remove',
  SHOW_ALL = '[Todo] show all',
  SHOW_SUCCESS = '[Todo] show success'
}

export class Add implements Action {
  readonly type = TodoActionTypes.Add;

  constructor(public payload: Todo) {
  }
}

export class Remove implements Action {
  readonly type = TodoActionTypes.Remove;

  constructor(public payload: any) {
  }
}

export class ShowAllAction implements Action {
  readonly type = TodoActionTypes.SHOW_ALL;
}

export class ShowSuccessAction implements Action {
  readonly type = TodoActionTypes.SHOW_SUCCESS;

  constructor(public payload: Todo[]) {
  }
}


export type TodoActions = Add | Remove | ShowAllAction | ShowSuccessAction;
