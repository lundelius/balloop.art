import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBallooramaComponent } from './page-balloorama.component';

describe('PageBallooramaComponent', () => {
  let component: PageBallooramaComponent;
  let fixture: ComponentFixture<PageBallooramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBallooramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBallooramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
