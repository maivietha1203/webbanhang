import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { CategoryFilterComponent } from '../../components/category-component/category-filter/category-filter.component';
import { CategoryHeadComponent } from '../../components/category-component/category-main/category-head/category-head.component';
import { CategoryContentComponent } from '../../components/category-component/category-main/category-content/category-content.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterLink, CategoryFilterComponent, CategoryHeadComponent, CategoryContentComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  CategoryProducts: Product[] = [
    {
      id: 10,
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
      sold: 46,
      rating: 3.7,
    },
    {
      id: 11,
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
      sold: 46,
      rating: 3.7,
    },
    {
      id: 12,
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
      sold: 46,
      rating: 3.7,
    },
  ];
}
