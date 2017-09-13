import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFriendsComponent } from './page-friends.component';

describe('PageFriendsComponent', () => {
  let component: PageFriendsComponent;
  let fixture: ComponentFixture<PageFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
