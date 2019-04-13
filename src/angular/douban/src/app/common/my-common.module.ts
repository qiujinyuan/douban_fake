import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SizerComponent } from './sizer/sizer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SimpleFooterComponent } from './simple-footer/simple-footer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    SizerComponent,
    PageNotFoundComponent,
    SimpleFooterComponent,
    FeedbackComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    SizerComponent,
    PageNotFoundComponent,
    SimpleFooterComponent,
    FeedbackComponent,
    MenuComponent,
  ]
})
export class MyCommonModule { }
