import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseRestartComponent } from './base-restart.component';

describe('BaseRestartComponent', () => {
  let component: BaseRestartComponent;
  let fixture: ComponentFixture<BaseRestartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseRestartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseRestartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
