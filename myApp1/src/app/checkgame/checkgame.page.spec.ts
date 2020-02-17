import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckgamePage } from './checkgame.page';

describe('CheckgamePage', () => {
  let component: CheckgamePage;
  let fixture: ComponentFixture<CheckgamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckgamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckgamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
