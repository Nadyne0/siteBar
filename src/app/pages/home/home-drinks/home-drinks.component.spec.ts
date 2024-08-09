import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDrinksComponent } from './home-drinks.component';

describe('HomeDrinksComponent', () => {
  let component: HomeDrinksComponent;
  let fixture: ComponentFixture<HomeDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDrinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
