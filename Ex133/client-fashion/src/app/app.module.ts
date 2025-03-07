import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FashionClientComponent } from './fashion-client/fashion-client.component';
import { FashionDetailClientComponent } from './fashion-detail-client/fashion-detail-client.component';
import { FashionStyleClientComponent } from './fashion-style-client/fashion-style-client.component';
import { CkeditorFormatPipe } from './ckeditor-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FashionClientComponent,
    FashionDetailClientComponent,
    FashionStyleClientComponent,
    CkeditorFormatPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
