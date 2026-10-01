import { NgFor } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'banner-col-block-component',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './banner-col-block.component.html',
  styleUrl: './banner-col-block.component.scss',
})
export class BannerColComponent {
  @Input() banner: any[] = [];
}
