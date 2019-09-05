import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { UpperFooterComponent } from './footer/upper-footer/upper-footer.component';
import { LowerFooterComponent } from './footer/lower-footer/lower-footer.component';
import { SearchComponent } from './search/search.component';

import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    UpperFooterComponent,
    LowerFooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
