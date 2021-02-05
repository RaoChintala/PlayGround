import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {ApiService} from './services/api-service.service';
import {ResponseTimeFormatPipe} from './pipe/response-time-format.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        ResponseTimeFormatPipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        ApiService,
        DatePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
