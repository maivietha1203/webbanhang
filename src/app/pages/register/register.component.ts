import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service'; // sửa path đúng theo project của bạn

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  email = '';
  password = '';
  username = '';
  role = 1; // mặc định Customer (0 = admin, 1 = customer, 2 = staff)
  errorMessage = '';
  isLoading = false;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  goTo(path: string): void {
    this.router.navigate([path]);
  }

  onRegister(): void {
    if (!this.username || !this.email || !this.password) {
      this.errorMessage = 'Vui lòng nhập đầy đủ thông tin';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.authService
      .register({
        username: this.username,
        email: this.email,
        password: this.password,
        role: this.role,
      })
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.router.navigate(['/login']);
        },
        error: (err) => {
          this.isLoading = false;
          this.errorMessage = err?.error?.message ?? 'Đăng ký thất bại';
        },
      });
  }
}
