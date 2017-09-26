import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DemoFormNgModelComponent } from './demo-form-ng-model/demo-form-ng-model.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSkuBuilderComponent } from './demo-form-sku-builder/demo-form-sku-builder.component';
import { DemoFormWithValidationsExplicitComponent } from './demo-form-with-validations-explicit/demo-form-with-validations-explicit.component';
import { DemoFormWithValidationsShorthandComponent } from './demo-form-with-validations-shorthand/demo-form-with-validations-shorthand.component';
import { DemoFormWithCustomValidationsComponent } from './demo-form-with-custom-validations/demo-form-with-custom-validations.component';
import { DemoFormWithEventsComponent } from './demo-form-with-events/demo-form-with-events.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormNgModelComponent,
    DemoFormSkuComponent,
    DemoFormSkuBuilderComponent,
    DemoFormWithValidationsExplicitComponent,
    DemoFormWithValidationsShorthandComponent,
    DemoFormWithCustomValidationsComponent,
    DemoFormWithEventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
