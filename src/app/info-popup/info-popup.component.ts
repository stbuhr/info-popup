import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  Inject,
  inject,
  Signal,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { InfoPopupOverlayRef } from './info-popup.overlayref';
import { INFO_POPUP_DATA } from './info-popup.tokens';
import { InfoPopupLoader } from './info-popup-loader.interface';

@Component({
  selector: 'kode-info-popup',
  standalone: true,
  imports: [CommonModule, OverlayModule],
  templateUrl: './info-popup.component.html',
  styleUrl: './info-popup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPopupComponent {
  dialogRef = inject(InfoPopupOverlayRef);
  loaderService = inject(InfoPopupLoader);

  countdown = signal(200);
  countdownPadding = computed(() => {
    return `${(100 - this.countdown() / 2) / 2}%`;
  });
  content: Signal<string | undefined>;
  isLoading = computed(() => !this.content());

  constructor(@Inject(INFO_POPUP_DATA) public data: string) {
    this.content = toSignal(this.loaderService.loadInfo('1', this.data));

    effect(() => {
      if (this.content()) {
        const interval = setInterval(() => {
          this.countdown.update((countdown) => countdown - 1);
          console.log('Countdown: ' + this.countdown());
          if (this.countdown() === 0) {
            this.closePopup();
            clearInterval(interval);
          }
        }, 50);
      }
    });
  }

  closePopup() {
    this.dialogRef.close();
  }
}
