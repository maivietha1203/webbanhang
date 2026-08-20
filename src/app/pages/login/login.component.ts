import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = '';
  password = '';
  onLogin() {
    console.log({
      email: this.email,
      password: this.password,
    });
    this.router.navigate(['/']);
  }
  constructor(private router: Router) {}
  goTo(path: string) {
    this.router.navigate([path]);
  }
}
