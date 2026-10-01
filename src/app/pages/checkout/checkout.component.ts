import { Component } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { PopupBankingComponent } from '../../components/popup-banking/popup-banking.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [NzModalModule, PopupBankingComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  isCheckout: boolean = false;
  handleShowCheckout(): void {
    this.isCheckout = true;
  }
  handleCloseCheckout(): void {
    this.isCheckout = false;
  }
}
