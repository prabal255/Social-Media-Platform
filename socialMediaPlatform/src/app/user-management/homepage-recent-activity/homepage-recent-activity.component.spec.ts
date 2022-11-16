import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageRecentActivityComponent } from './homepage-recent-activity.component';

describe('HomepageRecentActivityComponent', () => {
  let component: HomepageRecentActivityComponent;
  let fixture: ComponentFixture<HomepageRecentActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageRecentActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageRecentActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
