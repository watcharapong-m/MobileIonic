import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatalogresultPage } from './catalogresult.page';

describe('CatalogresultPage', () => {
  let component: CatalogresultPage;
  let fixture: ComponentFixture<CatalogresultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogresultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogresultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
