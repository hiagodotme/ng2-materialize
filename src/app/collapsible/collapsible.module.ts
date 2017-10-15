import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MzCollapsibleItemComponent } from './collapsible-item/collapsible-item.component';
import { MzCollapsibleComponent } from './collapsible.component';

@NgModule({
  declarations: [
    MzCollapsibleComponent,
    MzCollapsibleItemComponent,
  ],
})
export class MzCollapsibleModule { }
