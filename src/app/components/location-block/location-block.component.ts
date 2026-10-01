import { Component, Input } from '@angular/core';
import { Banner } from '../../models/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'location-block-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './location-block.component.html',
  styleUrl: './location-block.component.scss',
})
export class LocationComponent {
  @Input() banner: Banner | undefined;
}
