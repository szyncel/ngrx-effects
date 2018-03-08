import {Todo} from '../../models/todo';
import {TodoActions, TodoActionTypes} from '../actions/todo.actions';
import {State, createFeatureSelector, createSelector} from '@ngrx/store';


export interface AppState {
  todos: Todo[];
}


export const initialState: AppState = {todos: []};

export function reducerTodo(state = initialState, action: TodoActions): AppState {
  switch (action.type) {
    case TodoActionTypes.Add:
      return {
        ...state,
        todos: [...state.todos,
          action.payload]
      };
    case TodoActionTypes.Remove:
      return {todos: state.todos.filter(todo => todo.title !== action.payload)};
    case TodoActionTypes.SHOW_SUCCESS:
      return {
        todos: action.payload
      };

    default:
      return state;
  }
}

export const getTodoState = createFeatureSelector<AppState>('todo');

export const getTodos = createSelector(
  getTodoState,
  (state: AppState) => state.todos
);
