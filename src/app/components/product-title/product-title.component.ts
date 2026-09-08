import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { NzModalComponent, NzModalContentDirective } from 'ng-zorro-antd/modal';
import { ProductPopupComponent } from '../product-popup/product-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-title',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    NgIf,
    NzModalComponent,
    ProductPopupComponent,
    NzModalContentDirective,
  ],
  templateUrl: './product-title.component.html',
  styleUrl: './product-title.component.scss',
})
export class ProductTitleComponent {
  @Input() products: any[] = [];
  @ViewChild('productList') productListRef!: ElementRef<HTMLElement>;
  isShowPopup = false;
  constructor(private router: Router) {}

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
  showSearchProduct(): void {
    this.isShowPopup = true;
  }
  handleMuzzle(): void {
    this.isShowPopup = false;
  }
  onSelectItem(item: any) {
    const selectedProduct = {
      image: item.image,
      name: item.name,
      currentPrice: item.currentPrice,
      regularPrice: item.regularPrice,
    };

    const stored = localStorage.getItem('recentProducts');

    let products = stored ? JSON.parse(stored) : [];

    products.unshift(selectedProduct);

    // Chỉ giữ 4 sản phẩm gần nhất
    products = products.slice(0, 4);

    localStorage.setItem('recentProducts', JSON.stringify(products));
    this.router.navigate(['/detail']);
  }
}
