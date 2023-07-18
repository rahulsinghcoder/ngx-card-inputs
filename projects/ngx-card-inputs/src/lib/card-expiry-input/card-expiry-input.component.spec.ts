import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExpiryInputComponent } from './card-expiry-input.component';

describe('CardExpiryInputComponent', () => {
  let component: CardExpiryInputComponent;
  let fixture: ComponentFixture<CardExpiryInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardExpiryInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExpiryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
