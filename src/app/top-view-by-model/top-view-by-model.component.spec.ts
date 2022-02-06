import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopViewByModelComponent } from './top-view-by-model.component';

describe('TopViewByModelComponent', () => {
  let component: TopViewByModelComponent;
  let fixture: ComponentFixture<TopViewByModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopViewByModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopViewByModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
