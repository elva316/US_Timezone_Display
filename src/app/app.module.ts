import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsTimezoneDisplayComponent } from './us-timezone-display/us-timezone-display.component';

@NgModule({
  declarations: [
    AppComponent,
    UsTimezoneDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
