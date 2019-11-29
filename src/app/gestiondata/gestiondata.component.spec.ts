import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiondataComponent } from './gestiondata.component';

describe('GestiondataComponent', () => {
  let component: GestiondataComponent;
  let fixture: ComponentFixture<GestiondataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestiondataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestiondataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
