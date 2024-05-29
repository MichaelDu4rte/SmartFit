import { Component, Input } from '@angular/core';
import { Location } from '../../types/location.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-unique',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-unique.component.html',
  styleUrl: './card-unique.component.scss'
})
export class CardUniqueComponent {

  @Input() card!: Location;
}
