import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { Authenticate, User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { State } from '../store/reducers/auth.reducers';
import { Login, Logout } from '../store/actions/auth.actions';

@Injectable()
export class AuthService {

  constructor(
    private store: Store<State>
  ) { }

  login(user:Authenticate):Observable<User> {
    if (user.user == 'test' && user.password=='test') {
      //change state
      this.store.dispatch(new Login(user));
      return of({ user: user.user });
    } else {
      return _throw('Invalid username or password');
    }
  }

  logout(){
    this.store.dispatch(new Logout());
    //change state
    return of(true);
  }

}
