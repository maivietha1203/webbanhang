import { Component, Input } from '@angular/core';
import { Product, Variant } from '../../../../models/product.model';
import { Router } from '@angular/router';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ProductPopupComponent } from '../../../product-popup/product-popup.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'category-content-layout',
  standalone: true,
  templateUrl: './category-content.component.html',
  styleUrl: './category-content.component.scss',
  imports: [NzModalModule, ProductPopupComponent, NgFor, NgIf],
})
export class CategoryContentComponent {
  @Input() categoryProduct: Product[] = [];
  isSortPopup: boolean = false;
  constructor(private router: Router) {}

  handleShowSort(): void {
    this.isSortPopup = true;
  }
  handleSort(): void {
    this.isSortPopup = false;
  }
  onSelectItem(item: any) {
    if (!item) {
      return;
    }
    const selectedProduct = {
      id: item.id,
      image: item.image,
      discount: item.discount,
      name: item.name,
      currentPrice: item.currentPrice,
      regularPrice: item.regularPrice,
      sold: item.sold,
      rating: item.rating,
      variant: item.variants,
    };
    const isValid =
      !!selectedProduct &&
      !!selectedProduct.image?.trim() &&
      !!selectedProduct.name?.trim() &&
      selectedProduct.currentPrice != null &&
      selectedProduct.regularPrice != null &&
      selectedProduct.discount != null &&
      selectedProduct.sold != null &&
      selectedProduct.rating != null &&
      Array.isArray(selectedProduct.variant) &&
      selectedProduct.variant.length > 0 &&
      selectedProduct.variant.every(
        (variant: Variant) => !!variant.image?.trim() && !!variant.name?.trim(),
      );
    if (!isValid) {
      return;
    }

    const stored = localStorage.getItem('recentProducts');

    let products = stored ? JSON.parse(stored) : [];
    products = products.filter((p: Product) => p.id !== selectedProduct.id);

    products.unshift(selectedProduct);

    products = products.slice(0, 4);

    localStorage.setItem('recentProducts', JSON.stringify(products));
    this.router.navigate(['/detail']);
  }
}
