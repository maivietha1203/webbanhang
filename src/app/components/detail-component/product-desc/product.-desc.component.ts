import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-desc-component',
  standalone: true,
  templateUrl: './product-desc.component.html',
  styleUrl: './product-desc.component.scss',
  imports: [RouterLink],
})
export class ProductDescColComponent {
  @Input() isActive = false;
  @Output() toggleActive = new EventEmitter<void>();
  handleIsActive(): void {
    this.toggleActive.emit();
  }
}
