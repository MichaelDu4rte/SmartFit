import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { HttpClientModule } from '@angular/common/http';
import { FindUnitService } from './services/find-unit.service';
import { CardsComponent } from './components/cards/cards.component';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Location } from './types/location.interface';
import { LegendComponent } from './components/legend/legend.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormsComponent, LegendComponent, CardsComponent, FooterComponent,HttpClientModule, CommonModule],
  providers: [FindUnitService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showList = new BehaviorSubject(false);
  unitsList: Location[] = [];

  constructor(private unitService: FindUnitService) {

  }

  onSubmit() {
    this.unitsList = this.unitService.getFilteredUnits();
    this.showList.next(true);
  }
}
