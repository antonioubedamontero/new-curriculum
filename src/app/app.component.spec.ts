import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { TranslateServiceMock } from './mocks/services/translate-mock.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  template: '<p>layout</p>',
})
export class LayoutComponentMock{}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
      ],
      declarations: [
        AppComponent,
        LayoutComponentMock
      ],
      providers: [
        {
          provide: TranslateService,
          useClass: TranslateServiceMock
        }
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.ngOnInit(); // Call explicity onInit (not called automatically)

    expect(app).toBeTruthy();
  });

  it('should have a router-outlet inside', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.ngOnInit(); // Call explicity onInit (not called automatically)

    const routerOutlet = fixture.debugElement.nativeElement.querySelector('router-outlet');
    expect(routerOutlet).toBeTruthy();
  });

  describe('- when storage has language with value..', () => {
    it('es or en (a value), it uses that language in translate', () => {
      const getItemStorageSpy = spyOn(window.localStorage, 'getItem').and.returnValue('es');

      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;

      const translateUseSpy = spyOn(app.translate, 'use');

      app.ngOnInit(); // Call explicity onInit (not called automatically)

      expect(getItemStorageSpy).toHaveBeenCalledOnceWith('language');
      expect(translateUseSpy).toHaveBeenCalledOnceWith('es');
    })

    it('no value, it uses the language that is in browserLang in translate', () => {
      const getItemStorageSpy = spyOn(window.localStorage, 'getItem',).and.returnValue(null);

      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;

      const getBrowserLangSpy = spyOn(app.translate, 'getBrowserLang').and.callThrough();
      const translateUseSpy = spyOn(app.translate, 'use');

      app.ngOnInit(); // Call explicity onInit (not called automatically)

      expect(getItemStorageSpy).toHaveBeenCalledOnceWith('language');
      expect(getBrowserLangSpy).toHaveBeenCalledTimes(1);
      expect(translateUseSpy).toHaveBeenCalledOnceWith('en');
    })
  });
});


