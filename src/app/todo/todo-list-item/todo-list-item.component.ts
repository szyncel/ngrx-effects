import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input('item') todo: any;


  constructor() {
    console.log(this.todo);
  }

  ngOnInit() {
  }

}
