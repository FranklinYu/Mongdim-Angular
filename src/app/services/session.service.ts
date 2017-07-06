import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  private session_id: string;

  constructor() { }

  async loginWithGoogle(id_token: string): Promise<void> {
    console.log('id_token: <%s>', id_token)
    this.session_id = 'fake/base+64';
  }

}
