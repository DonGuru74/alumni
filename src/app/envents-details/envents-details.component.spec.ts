import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnventsDetailsComponent } from './envents-details.component';

describe('EnventsDetailsComponent', () => {
  let component: EnventsDetailsComponent;
  let fixture: ComponentFixture<EnventsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnventsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnventsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
