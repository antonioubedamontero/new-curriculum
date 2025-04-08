/* eslint-disable @angular-eslint/prefer-standalone */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumLayoutComponent } from './curriculum-layout.component';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockActivatedRoute } from './mocks/services/activated-route-mock.service';
import { TranslationService } from './services/translation.service';
import { TranslationMockService } from './mocks/services/translation-mock.service';

@Component({
  selector: 'app-header',
  standalone: false,
  template: '<p>header</p>',
})
export class HeaderMockComponent{}

@Component({
  selector: 'app-aside',
  standalone: false,
  template: '<p>aside</p>',
})
export class AsideMockComponent{}

@Component({
  selector: 'app-main',
  standalone: false,
  template: '<p>main</p>',
})
export class MainMockComponent{}

@Component({
  selector: 'app-footer',
  standalone: false,
  template: '<p>footer</p>',
})
export class FooterMockComponent{}

describe('CurriculumLayoutComponent', () => {
  let component: CurriculumLayoutComponent;
  let fixture: ComponentFixture<CurriculumLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CurriculumLayoutComponent,
        HeaderMockComponent,
        AsideMockComponent,
        MainMockComponent,
        FooterMockComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: TranslationService, useClass: TranslationMockService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculumLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a header component', () => {
    const headerComponent = fixture.debugElement.nativeElement.querySelector('app-header');
    expect(headerComponent).toBeTruthy();
  });

  it('should have an aside component', () => {
    const asideComponent = fixture.debugElement.nativeElement.querySelector('app-aside');
    expect(asideComponent).toBeTruthy();
  });

  it('should have a main component', () => {
    const mainComponent = fixture.debugElement.nativeElement.querySelector('app-main');
    expect(mainComponent).toBeTruthy();
  });

  it('should have a footer component', () => {
    const footerComponent = fixture.debugElement.nativeElement.querySelector('app-footer');
    expect(footerComponent).toBeTruthy();
  });
});
