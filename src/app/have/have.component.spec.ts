import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveComponent } from './have.component';

describe('HaveComponent', () => {
  let component: HaveComponent;
  let fixture: ComponentFixture<HaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
