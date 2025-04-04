import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideComponent } from './aside.component';
import { TranslateModule } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';
import { MaterialModule } from '../../../base/material/material.module';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MocksModule } from '../../mocks/mocks.module';
import { IndentificationService } from '../../services';
import { IdentificationMockService } from '../../mocks/services/identification-mock.service';

describe('AsideComponent', () => {
  let component: AsideComponent;
  let fixture: ComponentFixture<AsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsideComponent],
      imports: [
        MaterialModule,
        MocksModule
      ],
      providers: [
        TranslateModule,
        provideHttpClient(),  // Configure HttpClient when using with modules
        provideHttpClientTesting,
        {
          provide: IndentificationService,
          useClass: IdentificationMockService
        }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideComponent);
    component = fixture.componentInstance;

    component.ngOnInit();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have email', () => {
    const htmlElementEmail = fixture.debugElement.nativeElement.querySelector('#email');
    expect(htmlElementEmail).toBeTruthy();
  });

  it('should have phone', () => {
    const htmlElementPhone = fixture.debugElement.nativeElement.querySelector('#phone');
    expect(htmlElementPhone).toBeTruthy();
  });

  it('should have city', () => {
    const htmlElementCity = fixture.debugElement.nativeElement.querySelector('#city');
    expect(htmlElementCity).toBeTruthy();
  });
});
