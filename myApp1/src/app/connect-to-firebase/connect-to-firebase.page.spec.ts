import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConnectToFirebasePage } from './connect-to-firebase.page';

describe('ConnectToFirebasePage', () => {
  let component: ConnectToFirebasePage;
  let fixture: ComponentFixture<ConnectToFirebasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectToFirebasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConnectToFirebasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
