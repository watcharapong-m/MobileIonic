import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MycatalogappPage } from './mycatalogapp.page';

describe('MycatalogappPage', () => {
  let component: MycatalogappPage;
  let fixture: ComponentFixture<MycatalogappPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycatalogappPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MycatalogappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
