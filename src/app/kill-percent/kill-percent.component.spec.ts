import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KillPercentComponent } from './kill-percent.component';

describe('killPercentComponent', () => {
  let component: KillPercentComponent;
  let fixture: ComponentFixture<KillPercentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KillPercentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KillPercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
