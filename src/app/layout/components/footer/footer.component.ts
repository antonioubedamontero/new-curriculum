import { Component } from '@angular/core';

import { DateTime } from 'luxon';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear: string = DateTime.now().year.toString();
}
