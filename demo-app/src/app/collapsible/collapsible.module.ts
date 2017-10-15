import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MzCollapsibleModule } from 'ng2-materialize';

import { CodeSnippetModule } from '../shared/code-snippet/code-snippet.module';
import { PropertiesTableModule } from '../shared/properties-table/properties-table.module';
import { CollapsibleComponent } from './collapsible.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CodeSnippetModule,
    CommonModule,
    MzCollapsibleModule,
    PropertiesTableModule,
  ],
  declarations: [CollapsibleComponent],
})
export class CollapsibleModule { }
