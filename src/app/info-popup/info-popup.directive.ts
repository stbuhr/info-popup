import { Directive, ElementRef, inject, Input, OnInit } from '@angular/core';
import { InfoPopupService } from './info-popup.service';

@Directive({
  selector: '[kodeInfoPopup]',
  standalone: true,
})
export class InfoPopupDirective implements OnInit {
  infoPopup = inject(InfoPopupService);
  elementRef = inject(ElementRef);

  @Input() kodeInfoId = '';

  ngOnInit(): void {
    this.infoPopup.open({
      data: this.kodeInfoId,
      parent: this.elementRef.nativeElement,
    });
  }
}
