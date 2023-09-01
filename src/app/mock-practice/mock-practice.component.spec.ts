import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockPracticeComponent } from './mock-practice.component';

describe('MockPracticeComponent', () => {
  let component: MockPracticeComponent;
  let fixture: ComponentFixture<MockPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockPracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
