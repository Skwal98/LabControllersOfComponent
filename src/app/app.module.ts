import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HintControllerDirective } from './directives/hint.directive';
import { PrimitiveTextFieldComponent } from './primitive-text-field/primitive-text-field.component';
import { InputTextFieldComponent } from './input-text-field/input-text-field.component';
import { TextfieldCleanerDirective } from './directives/cleaner.directive';

@NgModule({
  declarations: [
    AppComponent,
    PrimitiveTextFieldComponent,
    HintControllerDirective,
    InputTextFieldComponent,
    TextfieldCleanerDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
