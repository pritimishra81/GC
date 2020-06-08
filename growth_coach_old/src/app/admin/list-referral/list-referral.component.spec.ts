import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReferralComponent } from './list-referral.component';

describe('ListReferralComponent', () => {
  let component: ListReferralComponent;
  let fixture: ComponentFixture<ListReferralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReferralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
