import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopViewByDatumComponent } from './top-view-by-datum.component';

describe('TopViewByDatumComponent', () => {
  let component: TopViewByDatumComponent;
  let fixture: ComponentFixture<TopViewByDatumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopViewByDatumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopViewByDatumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
