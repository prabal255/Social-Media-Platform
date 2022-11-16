import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagenavbarComponent } from './homepagenavbar.component';

describe('HomepagenavbarComponent', () => {
  let component: HomepagenavbarComponent;
  let fixture: ComponentFixture<HomepagenavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepagenavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepagenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
