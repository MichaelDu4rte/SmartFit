import { Component, Input, OnInit } from '@angular/core';
import { FindUnitService } from '../../services/find-unit.service';
import { Location } from '../../types/location.interface';
import { CommonModule } from '@angular/common';
import { CardUniqueComponent } from '../card-unique/card-unique.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, CardUniqueComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit {

  @Input() unitsList: Location[] = [];

  constructor( ) {}

  ngOnInit(): void {
  }
}
