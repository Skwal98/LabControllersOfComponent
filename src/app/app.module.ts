import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HintControllerDirective } from './directives/hint.directive';
import { PrimitiveTextFieldComponent } from './primitive-text-field/primitive-text-field.component';
import { InputTextFieldComponent } from './input-text-field/input-text-field.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimitiveTextFieldComponent,
    HintControllerDirective,
    InputTextFieldComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
