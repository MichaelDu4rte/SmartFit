import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUniqueComponent } from './card-unique.component';

describe('CardUniqueComponent', () => {
  let component: CardUniqueComponent;
  let fixture: ComponentFixture<CardUniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardUniqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
