import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styles: []
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.registerCredential().then(r => {});

  }

  registerCredential = async () => {
  //
  //
  //   // example options you will be receiving (aligns with PublicKeyCredentialCreationOptions).
  //   const options = {
  //     rp: {
  //       name: 'WebAuthn Codelab',
  //       id: 'webauthn-codelab.glitch.me'
  //     },
  //     user: {
  //       displayName: 'Test',
  //       id: 'bGFkaWVzIGFuZCBnZW50bGVtYW4sIHdlIGFyZSBmbG9hdGluZyBpbiBzcGFjZQ',
  //       name: 'test'
  //     },
  //     challenge: 'bGFkaWVzIGFuZCBnZW50bGVtYW4sIHdlIGFyZSBmbG9hdGluZyBpbiBzcGFjZQ',
  //     pubKeyCredParams: [
  //       {
  //         type: 'public-key',
  //         alg: -7
  //       }, {
  //         type: 'public-key',
  //         alg: -257
  //       }
  //     ],
  //     timeout: 1800000,
  //     attestation: 'none',
  //     excludeCredentials: [
  //       {
  //         id: 'bGFkaWVzIGFuZCBnZW50bGVtYW4sIHdlIGFyZSBmbG9hdGluZyBpbiBzcGFjZQ',
  //         type: 'public-key',
  //         transports: [
  //           'internal'
  //         ]
  //       }
  //     ],
  //     authenticatorSelection: {
  //       authenticatorAttachment: 'platform',
  //       userVerification: 'required'
  //     }
  //   };
  //
  //   console.log(options.user.id);
  //   options.user.id = base64url.decode(options.user.id, 'utf8');
  //   options.challenge = base64url.decode(options.challenge);
  //
  //   if (options.excludeCredentials) {
  //     for (const cred of options.excludeCredentials) {
  //       cred.id = base64url.decode(cred.id);
  //     }
  //   }

    if (window.PublicKeyCredential) {
      console.log('WebAuthn supported on this browser.');
    } else {
      console.log('WebAuthn not supported on this browser.');
    }
    const UVPAA = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
    if (UVPAA) {
      console.log('User Verifying Platform Authenticator available.');
    } else {
      console.log('You need User Verifying Platform Authenticator.');
    }
  }

}
