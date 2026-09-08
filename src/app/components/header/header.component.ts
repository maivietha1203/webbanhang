import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { SearchPopupComponent } from '../search-popup/search-popup.component';
@Component({
  selector: 'header-layout',
  standalone: true,
  imports: [SearchPopupComponent, NzModalModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isSearchVisible = false;

  showSearchModal(): void {
    this.isSearchVisible = true;
  }

  handleCancel(): void {
    this.isSearchVisible = false;
  }
  constructor(private router: Router) {}
  goTo(path: string) {
    this.router.navigate([path]);
  }
}
