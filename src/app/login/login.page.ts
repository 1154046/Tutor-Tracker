import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // tslint:disable: no-inferrable-types
  // tslint:disable: no-inferrable-types
  username: string = '';
  password: string = '';
  constructor( public router: Router,
               public afAuth: AngularFireAuth,
               public alert: AlertController,
               public user: UserService ) { }

  ngOnInit() {
  }

  async login() {
    const { username, password } = this;
    let user: string = username;
    user = user.toLowerCase();
    try {

      if ( username.length === 0 ) {
        this.showAlert('Error', 'Email Cannot be empty.');
        return;
      }

      if ( password.length === 0 ) {
        this.showAlert('Error', 'Password Cannot be empty.');
        return;
      }

      if ( password.length < 8 ) {
        this.showAlert('Error', 'Password too Short.');
        return;
      }

      if (!user.includes('students')) {
        const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password);
        if (res.user) {
          this.user.setUser({
            username,
            uid: res.user.uid
          });
          this.showAlert('Welcome Lecturer', this.username);
          this.router.navigate(['/tabs']);
        }
        // this.router.navigate(['home-lecturer']);
      } else if ( user.includes('admin') ) {
        const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password);

        if (res.user) {
          this.user.setUser({
            username,
            uid: res.user.uid
          });

          this.showAlert('Welcome', 'Admin');
          this.router.navigate(['/tabs']);
        }
      } else {
        const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password);
        if (res.user) {
          this.user.setUser({
            username,
            uid: res.user.uid
          });
          console.log(res);
          this.showAlert('Welcome Tutor', this.username);
          this.router.navigate(['/tabs']);
        }
      }
    } catch ( err ) {
        console.dir(err);
        if (err.code === 'auth/user-not-found') {
          this.showAlert('Error', 'User not found');
          console.log( 'user not found' );
        } else if ( err.code === 'auth/argument-error' ) {
            this.showAlert('Error', 'Please enter valid username and password');
            console.log( err );
        } else if ( err.code === 'auth/email-already-in-use') {
            this.showAlert('Error', 'User Error');
            console.log( err );
        } else if ( err.code === 'auth/wrong-password' ) {
            this.showAlert('Error', 'Incorrect Password');
            console.log( err );
        } else if ( err.code === 'auth/invalid-email') {
            this.showAlert('Error', 'Please Enter a Valid Wits Email. ');
            console.log( err );
        } else {
            this.showAlert('Error', 'Please enter valid username and password');
            console.log( err );
        }
    }
  }
  async showAlert( header: string, message: string ) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['Okay.']

    });
    await alert.present();
  }

  register() {
    this.router.navigate(['register']);
  }
}
