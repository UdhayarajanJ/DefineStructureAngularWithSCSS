import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalservererrorComponent } from './internalservererror.component';

describe('InternalservererrorComponent', () => {
  let component: InternalservererrorComponent;
  let fixture: ComponentFixture<InternalservererrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalservererrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalservererrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
