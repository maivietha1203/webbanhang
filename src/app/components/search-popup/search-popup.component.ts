import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'search-popup-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-popup.component.html',
  styleUrl: './search-popup.component.scss',
})
export class SearchPopupComponent {
  @Output() closePopup = new EventEmitter<void>();

  onCloseClick() {
    this.closePopup.emit();
  }
}
