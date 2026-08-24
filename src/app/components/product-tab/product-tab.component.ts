import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-tab',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './product-tab.component.html',
  styleUrl: './product-tab.component.scss',
})
export class ProductTabComponent {
  @Input() products: any[] = [];
  @ViewChild('productList') productListRef!: ElementRef<HTMLElement>;

  private getItems(): HTMLElement[] {
    return Array.from(
      this.productListRef.nativeElement.querySelectorAll('.product-slider'),
    ) as HTMLElement[];
  }

  scrollRight(): void {
    const el = this.productListRef.nativeElement;
    const items = this.getItems();
    const currentScroll = el.scrollLeft;

    // tìm item đầu tiên nằm ngoài khung nhìn bên phải hiện tại
    const nextItem = items.find((item) => item.offsetLeft > currentScroll + 5);
    if (nextItem) {
      el.scrollTo({ left: nextItem.offsetLeft, behavior: 'smooth' });
    }
  }

  scrollLeft(): void {
    const el = this.productListRef.nativeElement;
    const items = this.getItems();
    const currentScroll = el.scrollLeft;

    // tìm item cuối cùng nằm trước vị trí hiện tại
    const prevItems = items.filter((item) => item.offsetLeft < currentScroll - 5);
    const prevItem = prevItems[prevItems.length - 1];
    if (prevItem) {
      el.scrollTo({ left: prevItem.offsetLeft, behavior: 'smooth' });
    } else {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }
}
