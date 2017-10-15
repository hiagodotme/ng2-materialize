import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MzBadgeModule } from './badge';
import { MzButtonModule } from './button';
import { MzCardModule } from './card';
import { MzCheckboxModule } from './checkbox';
import { MzCollapsibleModule } from './collapsible';
import { MzCollectionModule } from './collection';
import * as Datepicker from './datepicker';
import * as Dropdown from './dropdown';
import * as Icon from './icon';
import * as Input from './input';
import * as Media from './media';
import * as Modal from './modal';
import * as Navbar from './navbar';
import { MzPaginationModule } from './pagination';
import * as Parallax from './parallax';
import * as Progress from './progress';
import * as RadioButton from './radio-button';
import * as Select from './select';
import * as Shared from './shared';
import * as Sidenav from './sidenav';
import * as Spinner from './spinner';
import * as Switch from './switch';
import * as Tab from './tab';
import * as Textarea from './textarea';
import * as Timepicker from './timepicker';
import * as Toast from './toast';
import * as Tooltip from './tooltip';
import * as Validation from './validation';

const MZ_COMPONENTS = [
  MzBadgeModule,
  MzButtonModule,
  MzCardModule,
  MzCheckboxModule,
  MzCollapsibleModule,
  MzCollectionModule,
  Datepicker.MzDatepickerContainerComponent,
  Datepicker.MzDatepickerDirective,
  Dropdown.MzDropdownComponent,
  Dropdown.MzDropdownDividerComponent,
  Dropdown.MzDropdownItemComponent,
  Icon.MzIconDirective,
  Icon.MzIconMdiDirective,
  Input.MzInputContainerComponent,
  Input.MzInputDirective,
  Input.MzInputPrefixDirective,
  Modal.MzModalCloseDirective,
  Modal.MzModalComponent,
  Modal.MzModalContentDirective,
  Modal.MzModalFooterDirective,
  Modal.MzModalHeaderDirective,
  Navbar.MzNavbarComponent,
  Navbar.MzNavbarItemComponent,
  Navbar.MzNavbarItemContainerComponent,
  MzPaginationModule,
  Parallax.MzParallaxComponent,
  Progress.MzProgressComponent,
  RadioButton.MzRadioButtonContainerComponent,
  RadioButton.MzRadioButtonDirective,
  Select.MzSelectContainerComponent,
  Select.MzSelectDirective,
  Sidenav.MzSidenavCollapsibleComponent,
  Sidenav.MzSidenavCollapsibleContentDirective,
  Sidenav.MzSidenavCollapsibleHeaderComponent,
  Sidenav.MzSidenavComponent,
  Sidenav.MzSidenavDividerComponent,
  Sidenav.MzSidenavHeaderComponent,
  Sidenav.MzSidenavLinkComponent,
  Sidenav.MzSidenavSubheaderComponent,
  Spinner.MzSpinnerComponent,
  Switch.MzSwitchContainerComponent,
  Switch.MzSwitchDirective,
  Tab.MzTabComponent,
  Tab.MzTabItemComponent,
  Textarea.MzTextareaDirective,
  Textarea.MzTextareaPrefixDirective,
  Textarea.MzTextareaContainerComponent,
  Timepicker.MzTimepickerContainerComponent,
  Timepicker.MzTimepickerDirective,
  Tooltip.MzTooltipDirective,
  Validation.MzErrorMessageComponent,
  Validation.MzValidationComponent,
];

const MZ_ENTRY_COMPONENTS = [
  Validation.MzErrorMessageComponent,
];

const MZ_PROVIDERS = [
  Media.MzMediaService,
  Modal.MzModalService,
  Shared.MzInjectionService,
  Toast.MzToastService,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: MZ_COMPONENTS,
  declarations: MZ_COMPONENTS,
  entryComponents: MZ_ENTRY_COMPONENTS,
  providers: MZ_PROVIDERS,
})
export class MaterializeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MaterializeModule,
    };
  }
}
