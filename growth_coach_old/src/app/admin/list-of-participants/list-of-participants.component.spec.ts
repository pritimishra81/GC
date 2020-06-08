import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfParticipantsComponent } from './list-of-participants.component';

describe('ListOfParticipantsComponent', () => {
  let component: ListOfParticipantsComponent;
  let fixture: ComponentFixture<ListOfParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfParticipantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
