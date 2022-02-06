import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopViewByBrandComponent } from './top-view-by-brand.component';

describe('TopViewByBrandComponent', () => {
  let component: TopViewByBrandComponent;
  let fixture: ComponentFixture<TopViewByBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopViewByBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopViewByBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
