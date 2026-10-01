import { Component, Input } from '@angular/core';
import { Banner } from '../../models/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'banner-block-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './banner-block.component.html',
  styleUrl: './banner-block.component.scss',
})
export class BannerComponent {
  @Input() banner: Banner | undefined;
}
