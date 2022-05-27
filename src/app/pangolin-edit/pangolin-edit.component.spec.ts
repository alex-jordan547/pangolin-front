import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PangolinEditComponent } from './pangolin-edit.component';

describe('PangolinEditComponent', () => {
  let component: PangolinEditComponent;
  let fixture: ComponentFixture<PangolinEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PangolinEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PangolinEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
