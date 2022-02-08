import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopViewByTypeComponent } from './top-view-by-type.component';

describe('TopViewByTypeComponent', () => {
  let component: TopViewByTypeComponent;
  let fixture: ComponentFixture<TopViewByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopViewByTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopViewByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
