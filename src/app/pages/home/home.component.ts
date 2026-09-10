import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { NgFor, NgClass } from '@angular/common';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { ServiceComponent } from '../../components/service-block/service-block.component';
import { VoucherComponent } from '../../components/voucher-block/voucher-block.component';
import { ProductTabComponent } from '../../components/product-tab/product-tab.component';
import { ProductTitleComponent } from '../../components/product-title/product-title.component';
import { Banner, Product } from '../../models/product.model';
import { NewsComponent } from '../../components/news-block/news-block.component';
import { BannerComponent } from '../../components/banner-block/banner-block.component';
import { CustomerComponent } from '../../components/customer-col-block/customer-col-block.component';
import { BannerColComponent } from '../../components/banner-col-block/banner-col-block.component';
import { LocationComponent } from '../../components/location-block/location-block.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    NzCarouselModule,
    NgClass,
    ServiceComponent,
    VoucherComponent,
    ProductTabComponent,
    ProductTitleComponent,
    NewsComponent,
    BannerComponent,
    CustomerComponent,
    BannerColComponent,
    LocationComponent,
  ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  posts: Post[] = [];
  effect = 'scrollx';
  // array = [1, 2, 3, 4];
  array = [
    '../../../assets/images/banner/banner-1.webp',
    '../../../assets/images/banner/banner-2.webp',
  ];
  bestSellerProducts: Product[] = [
    {
      id: 1,
      image: '../../../assets/images/product-1.webp',
      discount: '-10%',
      name: 'Áo Khoác Gió 2 Lớp Chống Nước',
      variants: [
        {
          image: '../../../assets/images/product/variant/variant-xanh-than.webp',
          name: 'Xanh than',
        },
        {
          image: '../../../assets/images/product/variant/variant-xanh-troi.webp',
          name: 'xanh trời',
        },
        {
          image: '../../../assets/images/product/variant/variant-trang.webp',
          name: 'Trắng',
        },
      ],
      currentPrice: '359.000đ',
      regularPrice: '399.000đ',
      sold: 45,
      rating: 4.7,
    },
  ];
  springSummerProducts: Product[] = [
    {
      id: 2,
      image: '../../../assets/images/product-1.webp',
      discount: '-10%',
      name: 'Áo Khoác Gió 2 Lớp Chống Nước',
      variants: [
        {
          image: '../../../assets/images/product/variant/variant-xanh-than.webp',
          name: 'Xanh than',
        },
        {
          image: '../../../assets/images/product/variant/variant-xanh-troi.webp',
          name: 'xanh trời',
        },
        {
          image: '../../../assets/images/product/variant/variant-trang.webp',
          name: 'Trắng',
        },
      ],
      currentPrice: '359.000đ',
      regularPrice: '399.000đ',
      sold: 45,
      rating: 4.7,
    },
  ];
  cuteSetProducts: Product[] = [
    {
      id: 3,
      image: '../../../assets/images/product-1.webp',
      discount: '-10%',
      name: 'Áo Khoác Gió 2 Lớp Chống Nước',
      variants: [
        {
          image: '../../../assets/images/product/variant/variant-xanh-than.webp',
          name: 'Xanh than',
        },
        {
          image: '../../../assets/images/product/variant/variant-xanh-troi.webp',
          name: 'xanh trời',
        },
        {
          image: '../../../assets/images/product/variant/variant-trang.webp',
          name: 'Trắng',
        },
      ],
      currentPrice: '359.000đ',
      regularPrice: '399.000đ',
      sold: 45,
      rating: 4.7,
    },
  ];
  activeWearProducts: Product[] = [
    {
      id: 4,
      image: '../../../assets/images/product-1.webp',
      discount: '-10%',
      name: 'Áo Khoác Gió 2 Lớp Chống Nước',
      variants: [
        {
          image: '../../../assets/images/product/variant/variant-xanh-than.webp',
          name: 'Xanh than',
        },
        {
          image: '../../../assets/images/product/variant/variant-xanh-troi.webp',
          name: 'xanh trời',
        },
        {
          image: '../../../assets/images/product/variant/variant-trang.webp',
          name: 'Trắng',
        },
      ],
      currentPrice: '359.000đ',
      regularPrice: '399.000đ',
      sold: 45,
      rating: 4.7,
    },
  ];
  officeWearProducts: Product[] = [
    {
      id: 5,
      image: '../../../assets/images/product-1.webp',
      discount: '-10%',
      name: 'Áo Khoác Gió 2 Lớp Chống Nước',
      variants: [
        {
          image: '../../../assets/images/product/variant/variant-xanh-than.webp',
          name: 'Xanh than',
        },
        {
          image: '../../../assets/images/product/variant/variant-xanh-troi.webp',
          name: 'xanh trời',
        },
        {
          image: '../../../assets/images/product/variant/variant-trang.webp',
          name: 'Trắng',
        },
      ],
      currentPrice: '299.000đ',
      regularPrice: '399.000đ',
      sold: 45,
      rating: 4.7,
    },
  ];
  saleProducts: Product[] = [
    {
      id: 6,
      image: '../../../assets/images/product-1.webp',
      discount: '-50%',
      name: 'Áo Polo Nam AIR-COOL 5S Fashion Phong Cách Thể Thao Khỏe Khoắn',
      variants: [
        {
          image: '../../../assets/images/product/variant/variant-xanh-than.webp',
          name: 'Xanh than',
        },
        {
          image: '../../../assets/images/product/variant/variant-xanh-troi.webp',
          name: 'xanh trời',
        },
        {
          image: '../../../assets/images/product/variant/variant-trang.webp',
          name: 'Trắng',
        },
      ],
      currentPrice: '229.000đ',
      regularPrice: '309.000đ',
      sold: 84,
      rating: 5,
    },
  ];
  banner1: Banner = {
    image: '../../../assets/images/banner/banner-block-1.webp',
    link: '/collection/xuan-he',
    alt: 'BST Xuân Hè 2026',
  };

  banner2: Banner = {
    image: '../../../assets/images/banner/banner-block-2.webp',
    link: '/sale',
    alt: 'Khuyến mãi mùa hè',
  };

  banner3: Banner = {
    image: '../../../assets/images/banner/banner-block-3.webp',
    link: '/sale',
    alt: 'Khuyến mãi mùa hè',
  };
  banner4: Banner = {
    image: '../../../assets/images/banner/banner-block-4.webp',
    link: '/sale',
    alt: 'Khuyến mãi mùa hè',
  };
  banner5: Banner = {
    image: '../../../assets/images/banner/banner-block-5.webp',
    link: '/sale',
    alt: 'Khuyến mãi mùa hè',
  };
  banner6: Banner = {
    image: '../../../assets/images/banner/banner-block-6.webp',
    link: '/sale',
    alt: 'Khuyến mãi mùa hè',
  };
  banner = [
    {
      image: '../../../assets/images/banner/banner-block-7.webp',
      link: '123.com',
      alt: '1111',
    },
    {
      image: '../../../assets/images/banner/banner-block-8.webp',
      link: '123.com',
      alt: '111',
    },
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
