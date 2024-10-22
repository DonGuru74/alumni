import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventReaderComponent } from './event-reader.component';

describe('EventReaderComponent', () => {
  let component: EventReaderComponent;
  let fixture: ComponentFixture<EventReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventReaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
