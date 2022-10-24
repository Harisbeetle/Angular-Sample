import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactieveformComponent } from './reactieveform.component';

describe('ReactieveformComponent', () => {
  let component: ReactieveformComponent;
  let fixture: ComponentFixture<ReactieveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactieveformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactieveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
