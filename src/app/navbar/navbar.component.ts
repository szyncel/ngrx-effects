import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';
import { State, getLoggedIn } from '../auth/store/reducers/auth.reducers';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user$:Observable<boolean>

  constructor(
    private authService: AuthService,
    public snackBar: MatSnackBar,
    private store:Store<State>,
    private router:Router
  ) {
    this.user$=this.store.select(getLoggedIn);
   }


  logout() {
    this.authService.logout().subscribe(res => {
      this.snackBar.open('Logout success', 'close', {
        duration: 2000,
      });
      this.router.navigate(['/']);
    })
  }
}
