import { Component } from '@angular/core';
import { RatingPopupComponent } from '../../rating-popup/rating-popup.component';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  selector: 'product-star-layout',
  standalone: true,
  templateUrl: './product-star.component.html',
  styleUrl: './product-star.component.scss',
  imports: [RatingPopupComponent, NzModalModule],
})
export class ProductStarComponent {
  isShowRatingPopup: boolean = false;
  showRatingPopup(): void {
    this.isShowRatingPopup = true;
  }
  handleMuzzleRating(): void {
    this.isShowRatingPopup = false;
  }
}
