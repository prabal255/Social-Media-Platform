import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageFollowingComponent } from './homepage-following.component';

describe('HomepageFollowingComponent', () => {
  let component: HomepageFollowingComponent;
  let fixture: ComponentFixture<HomepageFollowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageFollowingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
