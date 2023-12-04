import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicoHomeComponent } from './musico-home.component';

describe('MusicoHomeComponent', () => {
  let component: MusicoHomeComponent;
  let fixture: ComponentFixture<MusicoHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicoHomeComponent]
    });
    fixture = TestBed.createComponent(MusicoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
