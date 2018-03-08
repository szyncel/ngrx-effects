import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, take } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { State, getLoggedIn } from '../store/reducers/auth.reducers';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AuthGuardService implements CanActivate {


  constructor(
    private store: Store<State>,
    public snackBar: MatSnackBar
  ) { }

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(getLoggedIn),
      map(authed => {
        if (!authed) {
          this.snackBar.open('First login', 'close', {
            duration: 2000,
          });
          return false;
        }

        return true;
      }),
      take(1)
    )
  }

}
