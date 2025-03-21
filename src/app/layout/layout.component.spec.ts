import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  template: '<p>header</p>',
})
export class HeaderComponentMock{}

@Component({
  selector: 'app-aside',
  standalone: false,
  template: '<p>aside</p>',
})
export class AsideComponentMock{}

@Component({
  selector: 'app-main',
  standalone: false,
  template: '<p>main</p>',
})
export class MainComponentMock{}

@Component({
  selector: 'app-footer',
  standalone: false,
  template: '<p>footer</p>',
})
export class FooterComponentMock{}


describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LayoutComponent,
        HeaderComponentMock,
        AsideComponentMock,
        MainComponentMock,
        FooterComponentMock
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
