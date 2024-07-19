import { OverlayRef } from '@angular/cdk/overlay';

export class InfoPopupOverlayRef {
  constructor(private overlayRef: OverlayRef) {}

  close() {
    this.overlayRef.dispose();
  }
}
