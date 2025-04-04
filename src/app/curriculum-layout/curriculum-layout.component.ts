import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-curriculum-layout',
  standalone: false,
  templateUrl: './curriculum-layout.component.html',
  styleUrl: './curriculum-layout.component.scss'
})
export class CurriculumLayoutComponent implements OnInit {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly translationService: TranslationService
  ){}

  ngOnInit(): void {
    const language = this.activatedRoute.snapshot.parent?.url[0].path ?? 'es';
    this.translationService.setLanguage(language);
  }
}
