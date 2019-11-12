// tslint:disable: indent
// tslint:disable:class-name
// tslint:disable:no-shadowed-variable
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { auth } from 'firebase/app';


interface user {
	username: string;
	uid: string;
}

@Injectable()
export class UserService {
	private user: user;

	constructor(private afAuth: AngularFireAuth) {

	}

	setUser(user: user) {
		this.user = user;
	}

	getUsername(): string {
		return this.user.username;
	}


	updatePassword(newpassword: string) {
		return this.afAuth.auth.currentUser.updatePassword(newpassword);
	}


	async isAuthenticated() {
		if (this.user) { return true; }

		const user = await this.afAuth.authState.pipe(first()).toPromise();

		if (user) {
			this.setUser({
				username: user.email.split('@')[0],
				uid: user.uid
			});

   return true;
    }
  return false;
  }

  getUID(): string {
    return this.user.uid;
  }
}
