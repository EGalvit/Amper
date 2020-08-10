import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeskederComponent } from './beskeder.component';

describe('BeskederComponent', () => {
  let component: BeskederComponent;
  let fixture: ComponentFixture<BeskederComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeskederComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeskederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
