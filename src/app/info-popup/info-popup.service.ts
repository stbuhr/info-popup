import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { InfoPopupComponent } from './info-popup.component';
import { InfoPopupOverlayRef } from './info-popup.overlayref';
import { INFO_POPUP_DATA } from './info-popup.tokens';

export interface InfoPopupConfig {
  panelClass?: string;
  data?: string;
  parent: HTMLElement;
}

@Injectable({
  providedIn: 'root',
})
export class InfoPopupService {
  constructor(private overlay: Overlay) {}

  open(config: InfoPopupConfig): InfoPopupOverlayRef {
    const overlayRef = this.createOverlay(config);

    const dialogRef = new InfoPopupOverlayRef(overlayRef);

    const overlayComponent = this.attachDialogContainer(
      overlayRef,
      config,
      dialogRef
    );

    return dialogRef;
  }

  private getOverlayConfig(config: InfoPopupConfig): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(config.parent)
      .withPositions([
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
          panelClass: 'info-popup-top-left',
        },
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
          panelClass: 'info-popup-top-right',
        },
        {
          originX: 'end',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom',
          panelClass: 'info-popup-bottom-left',
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'end',
          overlayY: 'bottom',
          panelClass: 'info-popup-bottom-right',
        },
      ]);

    // .centerHorizontally()
    // .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: false,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      positionStrategy,
    });

    return overlayConfig;
  }

  private createOverlay(config: InfoPopupConfig) {
    const overlayConfig = this.getOverlayConfig(config);

    return this.overlay.create(overlayConfig);
  }

  private createInjector(
    config: InfoPopupConfig,
    dialogRef: InfoPopupOverlayRef
  ) {
    return Injector.create({
      providers: [
        { provide: InfoPopupOverlayRef, useValue: dialogRef },
        { provide: INFO_POPUP_DATA, useValue: config.data },
      ],
    });
  }

  private attachDialogContainer(
    overlayRef: OverlayRef,
    config: InfoPopupConfig,
    dialogRef: InfoPopupOverlayRef
  ) {
    const injector = this.createInjector(config, dialogRef);

    const containerPortal = new ComponentPortal(
      InfoPopupComponent,
      null,
      injector
    );
    const containerRef = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }
}
