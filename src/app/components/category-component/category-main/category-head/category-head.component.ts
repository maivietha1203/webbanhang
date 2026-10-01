import { Component } from '@angular/core';

@Component({
  selector: 'category-head-layout',
  standalone: true,
  templateUrl: './category-head.component.html',
  styleUrl: './category-head.component.scss',
  imports: [],
})
export class CategoryHeadComponent {
  isSortList: boolean = false;

  handleSortList(): void {
    this.isSortList = !this.isSortList;
  }
}
