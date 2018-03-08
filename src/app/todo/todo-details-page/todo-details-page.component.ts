import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../models/todo';
import {ActivatedRoute, Router} from '@angular/router';
import {State} from '../../auth/store/reducers/auth.reducers';
import {Store} from '@ngrx/store';
import {Remove} from '../store/actions/todo.actions';
import {TodoService} from '../todo.service';

@Component({
  selector: 'todo-details-page',
  templateUrl: './todo-details-page.component.html',
  styleUrls: ['./todo-details-page.component.css']
})
export class TodoDetailsPageComponent implements OnInit {
  id;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<State>,
              private todoService: TodoService) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) console.log(this.id);
  }

  remove() {
    this.store.dispatch(new Remove(this.id));
    this.router.navigate(['/todos']);

  }

  test() {
    this.todoService.getAllTodos().subscribe(res => console.log(res));
  }

  ngOnInit() {
  }

}
