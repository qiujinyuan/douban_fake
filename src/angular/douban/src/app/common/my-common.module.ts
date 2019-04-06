import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SizerComponent } from './sizer/sizer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    SizerComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SizerComponent,
    PageNotFoundComponent,
  ]
})
export class MyCommonModule { }
