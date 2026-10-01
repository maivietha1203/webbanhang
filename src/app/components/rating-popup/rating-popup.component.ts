import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzRateModule } from 'ng-zorro-antd/rate';

@Component({
  selector: 'rating-popup-layout',
  imports: [NzRateModule, FormsModule],
  standalone: true,
  templateUrl: './rating-popup.component.html',
  styleUrl: './rating-popup.component.scss',
})
export class RatingPopupComponent {
  @Input() isShowRatingPopup = false;
  @Output() toggleOffRating = new EventEmitter<void>();
  handleOffRating(): void {
    this.toggleOffRating.emit();
  }
}
