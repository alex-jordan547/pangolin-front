import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PangolinComponent } from './pangolin.component';

describe('PangolinComponent', () => {
  let component: PangolinComponent;
  let fixture: ComponentFixture<PangolinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PangolinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PangolinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
