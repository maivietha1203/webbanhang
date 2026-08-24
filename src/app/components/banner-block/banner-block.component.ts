import { Component, Input } from '@angular/core';
import { Banner } from '../../models/product.model';

@Component({
  selector: 'banner-block-component',
  standalone: true,
  imports: [],
  templateUrl: './banner-block.component.html',
  styleUrl: './banner-block.component.scss',
})
export class BannerComponent {
  @Input() banner: Banner | undefined;
}
