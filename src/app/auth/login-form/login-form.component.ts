import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';



@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(
    private authService: AuthService,
    public snackBar: MatSnackBar,
    private router:Router
  ) { }


  submit(user) {
    this.authService.login(user.value).subscribe(
      (res) => {
        
        this.snackBar.open('Login success', 'close', {
          duration: 2000,
        });
        this.router.navigate(['/todos']);
      },
      (err) => {
        this.snackBar.open(err, 'close', {
          duration: 2000,
        });
      });
  }

}
