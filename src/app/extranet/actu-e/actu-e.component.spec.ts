import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuEComponent } from './actu-e.component';

describe('ActuEComponent', () => {
  let component: ActuEComponent;
  let fixture: ComponentFixture<ActuEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
