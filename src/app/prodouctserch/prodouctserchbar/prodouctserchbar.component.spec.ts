import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdouctserchbarComponent } from './prodouctserchbar.component';

describe('ProdouctserchbarComponent', () => {
  let component: ProdouctserchbarComponent;
  let fixture: ComponentFixture<ProdouctserchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdouctserchbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdouctserchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
