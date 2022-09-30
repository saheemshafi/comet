import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexInfoComponent } from './index-info.component';

describe('IndexInfoComponent', () => {
  let component: IndexInfoComponent;
  let fixture: ComponentFixture<IndexInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
