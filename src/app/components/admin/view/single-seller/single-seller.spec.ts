import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSeller } from './single-seller';

describe('SingleSeller', () => {
  let component: SingleSeller;
  let fixture: ComponentFixture<SingleSeller>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleSeller]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSeller);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
