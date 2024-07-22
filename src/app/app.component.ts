import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoPopupDirective } from './info-popup/info-popup.directive';

@Component({
  selector: 'kode-root',
  standalone: true,
  imports: [RouterOutlet, InfoPopupDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
