import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-similar-layout',
  standalone: true,
  templateUrl: './product-similar.component.html',
  styleUrl: './product-similar.component.scss',
  imports: [NgFor, RouterLink],
})
export class ProductSimilarComponent {
  @Input() isShowSimilar = false;
  @Output() showSimilar = new EventEmitter<void>();
  handleShowProduct(): void {
    this.showSimilar.emit();
  }
}
