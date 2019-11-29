import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootPageComponent } from './foot-page.component';

describe('FootPageComponent', () => {
  let component: FootPageComponent;
  let fixture: ComponentFixture<FootPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
