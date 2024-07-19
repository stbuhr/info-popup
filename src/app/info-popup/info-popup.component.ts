import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  inject,
  OnInit,
} from '@angular/core';
import { InfoPopupOverlayRef } from './info-popup.overlayref';
import { INFO_POPUP_DATA } from './info-popup.tokens';

@Component({
  selector: 'kode-info-popup',
  standalone: true,
  imports: [CommonModule, OverlayModule],
  templateUrl: './info-popup.component.html',
  styleUrl: './info-popup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPopupComponent implements OnInit {
  dialogRef = inject(InfoPopupOverlayRef);

  constructor(@Inject(INFO_POPUP_DATA) public data: string) {}

  ngOnInit() {
    setTimeout(() => {
      this.closePopup();
    }, 10000);
  }

  closePopup() {
    this.dialogRef.close();
  }
}
