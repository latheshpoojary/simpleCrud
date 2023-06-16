import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuctSideBarComponent } from './prouct-side-bar.component';

describe('ProuctSideBarComponent', () => {
  let component: ProuctSideBarComponent;
  let fixture: ComponentFixture<ProuctSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProuctSideBarComponent]
    });
    fixture = TestBed.createComponent(ProuctSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
