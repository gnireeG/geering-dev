import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authService: AuthService){}
  
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  login() {
    const email = this.loginForm.value.email || '';
    const password = this.loginForm.value.password || '';
    this.authService.login(email, password).subscribe({
      next: user => {
        console.log('Logged in:', user);
        //this.router.navigate(['/dashboard']);
      },
      error: err => {
        console.error('Login error:', err);
      }
    });
  }
}