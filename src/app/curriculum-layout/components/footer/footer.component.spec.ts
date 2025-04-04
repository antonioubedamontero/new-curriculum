import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MocksModule } from '../../mocks/mocks.module';
import { IndentificationService } from '../../services';
import { IdentificationMockService } from '../../mocks/services/identification-mock.service';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [
        MocksModule
      ],
      providers: [
        provideHttpClient(),  // Configure HttpClient when using with modules,
        provideHttpClientTesting,
        {
          provide: IndentificationService,
          useClass: IdentificationMockService
        }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;

    component.ngOnInit();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get name and surname from endpoints', (done) => {
    fixture.whenStable().then(() => {
      expect(component.nameAndSurname).toBeTruthy();
      done();
    });
  });

  it('should render copyright with name and surname', (done) => {
    fixture.whenStable().then(() => {
      const h2ElementComponent: HTMLElement = fixture.debugElement.nativeElement.querySelector('h2');
      expect(h2ElementComponent).toBeTruthy();
      done();
    });
  });

  it('should render candidate\' networks', (done) => {
    fixture.whenStable().then(() => {
      const htmlNetworksElements: HTMLCollection = fixture.debugElement.nativeElement.querySelectorAll('.networks__container');
      expect(htmlNetworksElements).toBeTruthy();
      expect(htmlNetworksElements.length).toBeGreaterThan(0);
      done();
    });
  })
});
