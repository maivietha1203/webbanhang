import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

type TabKey = 'bestseller' | 'discount';

@Component({
  selector: 'app-product-tab',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './product-tab.component.html',
  styleUrl: './product-tab.component.scss',
})
export class ProductTabComponent {
  @Input() products: any[] = []; // danh sách "Bán chạy nhất"
  @Input() discountProducts: any[] = []; // danh sách "Giảm giá nhiều nhất"

  @ViewChild('productList') productListRef!: ElementRef<HTMLElement>;

  activeTab: TabKey = 'bestseller';
  slideDirection: 'left' | 'right' = 'left';

  get displayedProducts(): any[] {
    return this.activeTab === 'bestseller' ? this.products : this.discountProducts;
  }

  switchTab(tab: TabKey): void {
    if (tab === this.activeTab) return;

    this.slideDirection = tab === 'discount' ? 'right' : 'left';
    this.activeTab = tab;

    // reset về đầu danh sách khi đổi tab, tránh giữ vị trí scroll cũ của tab trước
    queueMicrotask(() => {
      this.productListRef?.nativeElement.scrollTo({ left: 0, behavior: 'auto' });
    });
  }

  private getItems(): HTMLElement[] {
    return Array.from(
      this.productListRef.nativeElement.querySelectorAll('.product-slider'),
    ) as HTMLElement[];
  }

  scrollRight(): void {
    const el = this.productListRef.nativeElement;
    const items = this.getItems();
    const currentScroll = el.scrollLeft;

    const nextItem = items.find((item) => item.offsetLeft > currentScroll + 5);
    if (nextItem) {
      el.scrollTo({ left: nextItem.offsetLeft, behavior: 'smooth' });
    }
  }

  scrollLeft(): void {
    const el = this.productListRef.nativeElement;
    const items = this.getItems();
    const currentScroll = el.scrollLeft;

    const prevItems = items.filter((item) => item.offsetLeft < currentScroll - 5);
    const prevItem = prevItems[prevItems.length - 1];
    if (prevItem) {
      el.scrollTo({ left: prevItem.offsetLeft, behavior: 'smooth' });
    } else {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }
}
