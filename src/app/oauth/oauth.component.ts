import { Component, OnInit } from '@angular/core';
import {} from 'gapi';
import {} from 'gapi.auth2'

import { environment } from 'environments/environment';
import { SessionService } from 'app/services/session.service'

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.css']
})
export class OAuthComponent implements OnInit {

  private google: Google

  constructor(ss: SessionService) {
    this.google = new Google(ss);
  }

  async ngOnInit(): Promise<void> {
    await this.google.initialize();
  }

}

class Google {

  constructor(private ss: SessionService) {}

  async initialize(): Promise<void> {
    await this.loadClientScript();
    await this.loadOauth2();
    gapi.auth2.init({client_id: environment.client_id}).then(
      () => this.createLoginButton()
    )
  }

  createLoginButton(): void {
    gapi.signin2.render('google-signin', {
      longtitle: true,
      onsuccess: (user: gapi.auth2.GoogleUser) => this.sendIdToken(user)
    })
  }

  sendIdToken(user: gapi.auth2.GoogleUser): void {
    this.ss.loginWithGoogle(user.getAuthResponse().id_token);
  }

  loadOauth2(): Promise<object> {
    return new Promise(resolve => gapi.load('auth2', resolve));
  }

  loadClientScript(): Promise<any> {
    if ((window as any).gapi)
      return Promise.resolve();
    else
      return new Promise(resolve => {
        const script = document.getElementById('google-client-script') as HTMLScriptElement;
        script.onload = resolve;
      });
  }

}
