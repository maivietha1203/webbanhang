import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  email = '';
  password = '';
  username = '';
  constructor(private router: Router) {}
  goTo(path: string) {
    this.router.navigate([path]);
  }
  onRegister() {
    console.log({
      email: this.email,
      password: this.password,
      username: this.username,
    });
    this.router.navigate(['/login']);
  }
}
