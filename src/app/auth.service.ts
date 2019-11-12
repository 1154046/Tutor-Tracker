import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../app/users.service';

@Injectable()
export class AuthService implements CanActivate {
// tslint:disable:indent

	constructor(private router: Router, private user: UserService) {

	}

	async canActivate(route) {
		if (await this.user.isAuthenticated()) {
			return true;
		}

		this.router.navigate(['/login']);
		return false;
	}
}
