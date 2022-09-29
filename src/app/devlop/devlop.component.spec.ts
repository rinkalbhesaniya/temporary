import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevlopComponent } from './devlop.component';

describe('DevlopComponent', () => {
  let component: DevlopComponent;
  let fixture: ComponentFixture<DevlopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevlopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevlopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
