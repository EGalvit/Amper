import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartsideComponent } from './startside.component';

describe('StartsideComponent', () => {
  let component: StartsideComponent;
  let fixture: ComponentFixture<StartsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
