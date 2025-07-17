import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerCategoryList } from './seller-category-list';

describe('SellerCategoryList', () => {
  let component: SellerCategoryList;
  let fixture: ComponentFixture<SellerCategoryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerCategoryList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerCategoryList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
