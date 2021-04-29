import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RwislistComponent } from './rwislist.component';

describe('RwislistComponent', () => {
  let component: RwislistComponent;
  let fixture: ComponentFixture<RwislistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RwislistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RwislistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
