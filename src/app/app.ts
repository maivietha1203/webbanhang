import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchPopupComponent } from './components/search-popup/search-popup.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchPopupComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('WebBanHang');
}
