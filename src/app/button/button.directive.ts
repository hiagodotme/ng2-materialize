import {
    Directive,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    Renderer,
} from '@angular/core';

import { Observable } from 'rxjs';

import { HandlePropChanges } from '../shared/handle-prop-changes';

@Directive({
  selector: 'button[mz-button], button[mzButton]',
})
export class MzButtonDirective extends HandlePropChanges implements OnInit {
  @Input() disabled: boolean;
  @Input() flat: boolean;
  @Input() float: boolean;
  @Input() large: boolean;
  @Input() noWaves: boolean;

  private handlers: Object;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer) { }

  ngOnInit() {
    this.initMaterialize();
    this.initHandlers();

    this.handleProperties();
  }

  initMaterialize() {
    this.renderer.setElementClass(this.elementRef.nativeElement, 'btn', true);
  }

  initHandlers() {
    this.handlers = {
      disabled: () => this.handleDisabled(),
      flat: () => this.handleFlat(),
      float: () => this.handleFloat(),
      large: () => this.handleLarge(),
      noWaves: () => this.handleNoWaves(),
    };
  }

  handleDisabled() {
    this.renderer.setElementClass(this.elementRef.nativeElement, 'disabled', this.disabled);
  }

  handleFlat() {
    this.renderer.setElementClass(this.elementRef.nativeElement, 'btn-flat', this.flat);
  }

  handleFloat() {
    this.renderer.setElementClass(this.elementRef.nativeElement, 'btn-floating', this.float);
  }

  handleLarge() {
    this.renderer.setElementClass(this.elementRef.nativeElement, 'btn-large', this.large);
  }

  handleNoWaves() {
    this.renderer.setElementClass(this.elementRef.nativeElement, 'waves-effect', !this.noWaves);
    this.renderer.setElementClass(this.elementRef.nativeElement, 'waves-light', !this.noWaves);
  }
}
