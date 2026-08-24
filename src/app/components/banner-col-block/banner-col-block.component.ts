import { NgFor } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'banner-col-block-component',
  standalone: true,
  imports: [NgFor],
  templateUrl: './banner-col-block.component.html',
  styleUrl: './banner-col-block.component.scss',
})
export class BannerColComponent {
  @Input() banner: any[] = [];
}
