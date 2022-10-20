import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdouctdetailsComponent } from './prodouctdetails.component';

describe('ProdouctdetailsComponent', () => {
  let component: ProdouctdetailsComponent;
  let fixture: ComponentFixture<ProdouctdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdouctdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdouctdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
