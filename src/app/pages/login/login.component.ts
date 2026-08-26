import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service'; // sửa path đúng theo project của bạn
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';
  isLoading = false;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  onLogin(): void {
    if (!this.email || !this.password) {
      this.errorMessage = 'Vui lòng nhập đầy đủ tài khoản và mật khẩu';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.authService.login({ usernameOrEmail: this.email, password: this.password }).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.message ?? 'Sai tài khoản hoặc mật khẩu';
      },
    });
  }

  goTo(path: string): void {
    this.router.navigate([path]);
  }
}
