import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddTodoDialogComponent} from '../../add-todo-dialog/add-todo-dialog.component';
import {AppState, getTodos} from '../store/reducers/todo.reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {ShowAllAction} from '../store/actions/todo.actions';
import {TodoService} from '../todo.service';


@Component({
  selector: 'todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.css']
})
export class TodoListPageComponent implements OnInit {
  todos$: Observable<any>;

  constructor(public dialog: MatDialog,
              private store: Store<AppState>,
              private todoService: TodoService) {
    this.todos$ = this.store.select(getTodos);

  }

  add() {
    const dialogRef = this.dialog.open(AddTodoDialogComponent, {
      height: '300px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(res => console.log(res));
  }


  loadTodos() {
    this.store.dispatch(new ShowAllAction());
  }

  create() {
    this.todoService.createTodo(({id: 12, title: 'trlal', note: 'asdasdasd'})).subscribe(res => console.log(res));
  }

  ngOnInit() {
  }

}
