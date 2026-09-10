import { Component, NgModule, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductNameComponent } from '../../components/detail-component/product-info/product-name/product-name.component';
import { ProductDescComponent } from '../../components/detail-component/product-info/product-desc/product-desc.component';
import { ProductRatingComponent } from '../../components/detail-component/product-info/product-rating/product-rating.component';
import { ProductPriceComponent } from '../../components/detail-component/product-info/product-price/product-price.component';
import { ProductVariantComponent } from '../../components/detail-component/product-info/product-variant/product-variant.component';
import { ProductActionComponent } from '../../components/detail-component/product-info/product-action/product-action.component';
import { ProductServiceComponent } from '../../components/detail-component/product-info/product-service/product-service.component';
import { ProductFeatureComponent } from '../../components/detail-component/product-info/product-feature/product-feature.component';
import { ProductPopupComponent } from '../../components/product-popup/product-popup.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NgFor, NgIf } from '@angular/common';
import { ProductDescColComponent } from '../../components/detail-component/product-desc/product.-desc.component';
import { ProductMoreComponent } from '../../components/detail-component/product-more/product-more.component';
import { ProductStarComponent } from '../../components/detail-component/product-star/product-star.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    RouterLink,
    ProductNameComponent,
    ProductDescComponent,
    ProductRatingComponent,
    ProductPriceComponent,
    ProductVariantComponent,
    ProductActionComponent,
    ProductServiceComponent,
    ProductFeatureComponent,
    ProductPopupComponent,
    NzModalModule,
    NgFor,
    NgIf,
    ProductDescColComponent,
    ProductMoreComponent,
    ProductStarComponent,
  ],

  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  isActive = false;
  isShowPopup = false;

  handleIsActive(): void {
    this.isActive = !this.isActive;
  }
  showSearchProduct(): void {
    this.isShowPopup = true;
  }
  handleMuzzle(): void {
    this.isShowPopup = false;
  }
}
