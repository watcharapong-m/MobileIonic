import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultbmiPage } from './resultbmi.page';

describe('ResultbmiPage', () => {
  let component: ResultbmiPage;
  let fixture: ComponentFixture<ResultbmiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultbmiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultbmiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
