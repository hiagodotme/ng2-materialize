import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MzPaginationModule } from 'ng2-materialize';

import { CodeSnippetModule } from '../shared/code-snippet/code-snippet.module';
import { PropertiesTableModule } from '../shared/properties-table/properties-table.module';
import { PaginationComponent } from './pagination.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CodeSnippetModule,
    CommonModule,
    MzPaginationModule,
    PropertiesTableModule,
  ],
  declarations: [PaginationComponent],
})
export class PaginationModule { }
