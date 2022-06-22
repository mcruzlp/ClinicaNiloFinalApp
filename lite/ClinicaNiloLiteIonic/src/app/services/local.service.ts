import { PatientService } from 'src/app/services/patient.service';
import { Patient } from './../model/patient';
import { LocalUser } from './../model/localuser';
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  user: LocalUser = { localUserEmail: '' };
  rememberData = false;

  constructor() {
    /* this.getLocalUserFromStorage().then((data) => (this.user = data));
    this.getStateFromStorage().then((data) => (this.rememberData = data)); */
  }

  public getLocalUser(): LocalUser {
    return this.user;
  }

  public async getLocalUserFromStorage(): Promise<LocalUser> {
    const ret = await Storage.get({ key: 'user' });
    return JSON.parse(ret.value) ? JSON.parse(ret.value) : '';
  }
  public async getStateFromStorage(): Promise<boolean> {
    return await Storage.get({ key: 'rememberData' });
  }

  public async saveLocalData(remember: boolean, uEmail: string) {
    this.rememberData = remember;
    if (remember == true) {
      this.user.localUserEmail = uEmail;
    } else {
      this.user.localUserEmail = '';
    }
    await this.saveLocalUser(this.user);
    await this.saveRememberState(this.rememberData);
  }

  public async saveLocalUser(user: LocalUser) {
    await Storage.set({
      key: 'user',
      value: JSON.stringify(user),
    });
  }
  public async saveRememberState(r: boolean) {
    await Storage.set({
      key: 'remember',
      value: r,
    });
  }
}
