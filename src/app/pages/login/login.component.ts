import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf, RouterLink],
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
    private cdr: ChangeDetectorRef,
  ) {}

  onLogin(): void {
    if (!this.email || !this.password) {
      this.errorMessage = 'Vui lòng nhập đầy đủ tài khoản và mật khẩu';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.authService.login({ usernameOrEmail: this.email, password: this.password }).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.message ?? 'Sai tài khoản hoặc mật khẩu';
        this.cdr.markForCheck();
      },
    });
  }
}
