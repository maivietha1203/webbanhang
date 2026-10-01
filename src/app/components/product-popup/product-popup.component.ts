import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'product-popup-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-popup.component.html',
  styleUrl: './product-popup.component.scss',
})
export class ProductPopupComponent {
  @Output() closeProductPopup = new EventEmitter<void>();
  @Output() showCart = new EventEmitter<void>();
  onHandleClose() {
    this.closeProductPopup.emit();
  }
  onHandleShowCart(): void {
    this.showCart.emit();
  }
}
