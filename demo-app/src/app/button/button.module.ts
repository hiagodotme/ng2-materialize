import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MzButtonModule } from 'ng2-materialize';

import { CodeSnippetModule } from '../shared/code-snippet/code-snippet.module';
import { PropertiesTableModule } from '../shared/properties-table/properties-table.module';
import { ButtonComponent } from './button.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CodeSnippetModule,
    CommonModule,
    MzButtonModule,
    PropertiesTableModule,
  ],
  declarations: [ ButtonComponent ],
})
export class ButtonModule { }
