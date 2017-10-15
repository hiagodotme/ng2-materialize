import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mz-pagination-page',
  templateUrl: './pagination-page.component.html',
  styleUrls: ['./pagination-page.component.scss'],
})
export class MzPaginationPageComponent {

  @HostBinding('class.active') @Input() active: boolean;
  @HostBinding('class.disabled') @Input() disabled: boolean;
  // @HostBinding('class.waves-effect') !this.active && !this.disabled;
}
