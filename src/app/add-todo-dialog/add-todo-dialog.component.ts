import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Store} from '@ngrx/store';
import {AppState} from '../todo/store/reducers/todo.reducers';
import {Add} from '../todo/store/actions/todo.actions';

@Component({
  selector: 'app-add-todo-dialog',
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: ['./add-todo-dialog.component.css']
})
export class AddTodoDialogComponent {

  constructor(public dialogRef: MatDialogRef<AddTodoDialogComponent>,
              private store: Store<AppState>) {
  }

  add(todo) {
    this.store.dispatch(new Add(todo.value));
    this.dialogRef.close(todo.value);
  }

}
