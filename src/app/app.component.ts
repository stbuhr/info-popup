import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoPopupService } from './info-popup/info-popup.service';
import { InfoPopupOverlayRef } from './info-popup/info-popup.overlayref';

@Component({
  selector: 'kode-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  infoPopup = inject(InfoPopupService);

  onCenterButtonClick(event: MouseEvent) {
    this.showInfoPopup(event.target as HTMLElement, 'Center');
  }
  onRightBottomButtonClick(event: MouseEvent) {
    this.showInfoPopup(event.target as HTMLElement, 'Right Bottom');
  }
  onLeftBottomButtonClick(event: MouseEvent) {
    this.showInfoPopup(event.target as HTMLElement, 'Left Bottom');
  }
  onRightTopButtonClick(event: MouseEvent) {
    this.showInfoPopup(event.target as HTMLElement, 'Right Top');
  }
  onLeftTopButtonClick(event: MouseEvent) {
    this.showInfoPopup(event.target as HTMLElement, 'Left Top');
  }

  showInfoPopup(parent: HTMLElement, text: string) {
    this.infoPopup.open({
      data: text,
      parent: parent,
    });
  }
}
