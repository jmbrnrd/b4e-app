import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyComponent } from './verify/verify.component';
import { VaultsComponent } from './vaults/vaults.component';
import { VaultComponent } from './vaults/vault.component';

const routes: Routes = [
  // Default route
  { path: '', component: StartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'verify', component: VerifyComponent },
  { path: 'vaults', component: VaultsComponent },
  { path: 'vault/:id', component: VaultComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
