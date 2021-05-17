/*
In short, when using a Core Module:
DO import modules that should be instantiated once in your app.
DO place services in the module, but do not provide them.
DO NOT declare components, pipes, directives.
DO NOT import the CoreModule into any modules other than the AppModule.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import * as fromComponents from './components';

@NgModule({
  declarations: [
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [...fromComponents.components]
})
export class CoreModule { 
  constructor(){
  }
}
