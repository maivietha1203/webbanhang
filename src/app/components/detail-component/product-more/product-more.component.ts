import { isPlatformBrowser, NgFor } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'product-more-layout',
  standalone: true,
  templateUrl: './product-more.component.html',
  styleUrl: './product-more.component.scss',
  imports: [NgFor],
})
export class ProductMoreComponent implements OnInit {
  @Input() isShowPopup = false;
  @Output() showPopup = new EventEmitter<void>();
  recentProducts: any[] = [];
  handleShowPopup(): void {
    this.showPopup.emit();
  }
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const products = localStorage.getItem('recentProducts');

      if (products) {
        this.recentProducts = JSON.parse(products);
      }
    }
  }
}
