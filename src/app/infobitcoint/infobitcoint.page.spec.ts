import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { Services } from '../config/services';
import { InfobitcointPage } from './infobitcoint.page';


describe('InfobitcointPage', () => {
  let component: InfobitcointPage;
  let fixture: ComponentFixture<InfobitcointPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InfobitcointPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [Services]
    }).compileComponents();

    fixture = TestBed.createComponent(InfobitcointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
