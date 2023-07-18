import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCardInputsComponent } from './ngx-card-inputs.component';

describe('NgxCardInputsComponent', () => {
  let component: NgxCardInputsComponent;
  let fixture: ComponentFixture<NgxCardInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCardInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCardInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
