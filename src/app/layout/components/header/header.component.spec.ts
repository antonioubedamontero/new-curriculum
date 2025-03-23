import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MocksModule } from '../../../mocks/mocks.module';
import { TranslateServiceMock } from '../../../mocks/services/translate-mock.service';

import { identificationResponseMock } from '../../../mocks/data/identification-response-mock';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        MocksModule
      ],
      providers: [
        provideHttpClient(),  // Configure HttpClient when using with modules
        provideHttpClientTesting,
        TranslateServiceMock
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    component.identificationResponse = identificationResponseMock;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a name', () => {
    const h1Element: HTMLElement = fixture.debugElement.nativeElement.querySelector('h1');
    expect(h1Element).toBeTruthy();
    expect(h1Element.textContent).toBeTruthy();
  });

  it('should have a role', () => {
    const htmlRoleElement: HTMLElement = fixture.debugElement.nativeElement.querySelector('.role');
    expect(htmlRoleElement).toBeTruthy();
    expect(htmlRoleElement.textContent).toBeTruthy();
  });
});
