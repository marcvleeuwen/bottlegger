import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppBarComponent} from './app-bar.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppBarComponent
  ],
  exports: [
    AppBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AppBarModule {
}
