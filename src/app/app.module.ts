import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from './start/start.component';
import { NavComponent } from './shared/nav/nav.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyComponent } from './verify/verify.component';
import { VaultsComponent } from './vaults/vaults.component';
import { LoadComponent } from './shared/load/load.component';
import { FormsModule } from '@angular/forms';
import { VaultComponent } from './vaults/vault.component';
import { VaultContentComponent } from './vaults/vault-content.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    VerifyComponent,
    VaultsComponent,
    LoadComponent,
    VaultComponent,
    VaultContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
