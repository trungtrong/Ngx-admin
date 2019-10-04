import { NgModule } from '@angular/core';
import { LayoutShowcaseComponent } from './lesson-01/layout-showcase.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    ],
  declarations: [
    LayoutShowcaseComponent
  ],
  providers: [ ],
  bootstrap: [LayoutComponent]
})

export class LayoutModule { }
