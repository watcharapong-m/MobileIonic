import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MymapPage } from './mymap.page';

describe('MymapPage', () => {
  let component: MymapPage;
  let fixture: ComponentFixture<MymapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MymapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
