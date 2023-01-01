import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCategoryCardComponent } from './index-category-card.component';

describe('IndexCategoryCardComponent', () => {
  let component: IndexCategoryCardComponent;
  let fixture: ComponentFixture<IndexCategoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexCategoryCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
