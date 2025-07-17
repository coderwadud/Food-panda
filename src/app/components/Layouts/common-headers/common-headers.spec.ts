import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonHeaders } from './common-headers';

describe('CommonHeaders', () => {
  let component: CommonHeaders;
  let fixture: ComponentFixture<CommonHeaders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonHeaders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonHeaders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
