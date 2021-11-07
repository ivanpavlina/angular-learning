import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ServerComponent} from "./server/server.component";
import {HttpClientModule} from "@angular/common/http";
import { ServersComponent } from './servers/servers.component';
import {SuccessAlertComponent} from "./succes-alert/success-alert.component";
import {WarningAlertComponent} from "./warning-alert/warning-alert.component";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
