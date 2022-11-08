import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestDetailComponent } from './forest-detail.component';

describe('ForestDetailComponent', () => {
  let component: ForestDetailComponent;
  let fixture: ComponentFixture<ForestDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
