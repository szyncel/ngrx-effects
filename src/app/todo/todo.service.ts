import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Todo} from './models/todo';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) {
  }

  url = '/api/todo';

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  createTodo(todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, todo);
  }

  // getTodoById(id: string): Observable<Todo[]> {
  //   console.log(id);
  //   return this.http.get<Todo[]>(this.url + '?id=' + id);
  // }

}
