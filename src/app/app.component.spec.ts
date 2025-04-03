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
});


