import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashionUpdateComponent } from './fashion-update/fashion-update.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    FashionComponent,
    FashionUpdateComponent,
    FashionNewComponent,
    FashionDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    CKEditorModule, 
    QuillModule.forRoot()
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }