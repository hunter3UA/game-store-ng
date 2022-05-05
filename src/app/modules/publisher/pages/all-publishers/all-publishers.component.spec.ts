import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPublishersComponent } from './all-publishers.component';

describe('AllPublishersComponent', () => {
  let component: AllPublishersComponent;
  let fixture: ComponentFixture<AllPublishersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPublishersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPublishersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
