import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvpComponent } from './uvp.component';

describe('UvpComponent', () => {
  let component: UvpComponent;
  let fixture: ComponentFixture<UvpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UvpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
