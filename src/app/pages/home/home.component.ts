import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../features/product/product.sevice';
import { Post } from '../../models/post.model';
import { NgFor, NgClass } from '@angular/common';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NzCarouselModule, NgClass],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private productService: ProductService) {}
  posts: Post[] = [];
  effect = 'scrollx';
  // array = [1, 2, 3, 4];
  array = [
    '../../../assets/images/banner/banner-1.webp',
    '../../../assets/images/banner/banner-2.webp',
  ];

  // ngOnInit() {
  //   this.productService.getAll().subscribe({
  //     next: (data) => {
  //       this.posts = data;
  //     },
  //     error: (err) => console.error('Lỗi:', err),
  //   });
  // }
}
