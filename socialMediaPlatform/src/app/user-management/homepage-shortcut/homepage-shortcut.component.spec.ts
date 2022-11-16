import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageShortcutComponent } from './homepage-shortcut.component';

describe('HomepageShortcutComponent', () => {
  let component: HomepageShortcutComponent;
  let fixture: ComponentFixture<HomepageShortcutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageShortcutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
