import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly translationService: TranslationService
  ){}

  ngOnInit(): void {
    const language = this.activatedRoute.snapshot.parent?.url[0].path ?? 'es';
    this.translationService.setLanguage(language);
  }
}
