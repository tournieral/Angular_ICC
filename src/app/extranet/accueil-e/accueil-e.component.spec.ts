import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilEComponent } from './accueil-e.component';

describe('AccueilEComponent', () => {
  let component: AccueilEComponent;
  let fixture: ComponentFixture<AccueilEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
