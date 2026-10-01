import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'category-filter-layout',
  standalone: true,
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.scss',
  imports: [NgFor],
})
export class CategoryFilterComponent {
  isDiscountOne: boolean = false;
  isDiscountTwo: boolean = false;
  isDiscountThree: boolean = false;
  isDiscountFour: boolean = false;
  isDiscountFive: boolean = false;
  handleDiscountOne(): void {
    this.isDiscountOne = !this.isDiscountOne;
  }
  handleDiscountTwo(): void {
    this.isDiscountTwo = !this.isDiscountTwo;
  }
  handleDiscountThree(): void {
    this.isDiscountThree = !this.isDiscountThree;
  }
  handleDiscountFour(): void {
    this.isDiscountFour = !this.isDiscountFour;
  }
  handleDiscountFive(): void {
    this.isDiscountFive = !this.isDiscountFive;
  }
  selectedDiscount = '';

  selectDiscount(value: string) {
    this.selectedDiscount = value;
  }
}
