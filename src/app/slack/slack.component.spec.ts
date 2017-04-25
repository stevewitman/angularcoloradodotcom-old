import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlackComponent } from './slack.component';

describe('SlackInviteComponent', () => {
  let component: SlackComponent;
  let fixture: ComponentFixture<SlackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
