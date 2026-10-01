import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'popup-banking-component',
  standalone: true,
  imports: [],
  templateUrl: './popup-banking.component.html',
  styleUrl: './popup-banking.component.scss',
})
export class PopupBankingComponent {
  @Output() close = new EventEmitter<void>();
  onCloseBanking(): void {
    this.close.emit();
  }
}
