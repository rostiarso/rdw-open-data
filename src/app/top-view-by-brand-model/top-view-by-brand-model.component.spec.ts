import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopViewByBrandModelComponent } from './top-view-by-brand-model.component';

describe('TopViewByBrandModelComponent', () => {
  let component: TopViewByBrandModelComponent;
  let fixture: ComponentFixture<TopViewByBrandModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopViewByBrandModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopViewByBrandModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
