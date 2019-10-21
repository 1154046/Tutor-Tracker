import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  // tslint:disable: variable-name
  // username: string;
  email: string;
  password: string;
  confirm_password: string;
  error_1 = 'createuserwithemailandpassword failed: Second argument "password" must be a valid string';
  error_2 = '';
  constructor( public router: Router,
               public afAuth: AngularFireAuth,
               public alert: AlertController ) { }

  ngOnInit() {
  }

  async register() {
    const { email, password, confirm_password } = this;
    let user: string = email;
    user = user.toLowerCase();

    if ( password !== confirm_password ) {
      this.showAlert('Error', 'Passwords do not match');
      return console.error('Passwords don\'t match.');
    }
    // if ( !this.email.includes('@') || !this.email.includes('students.wits.ac.za') || !this.email.includes('wits.ac.za') ) {
    //   this.showAlert('Error', 'Please enter a valid Wits Email address');
    //   return console.error('Invalid Email');
    // }

    if ( password.length < 8 ) {
      this.showAlert('Error', 'Password too Short.');
      return console.error('Password too Short');
    }

    if ( password.length === 0 ) {
      this.showAlert('Error', 'Please Enter a Password.');
      return console.error('Please Enter a Password.');
    }

    if ( password.includes('1234') || password.includes('4321') ||
         password.includes('abcd') || password.includes('dcba') ||
         password.includes('qwer') || password.includes('rewq') ||
         password.includes('0000') ) {
      this.showAlert('Error', 'Password too Simple.');
      return console.error('Password too Simple');
    }

    try {
        const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
        console.log(res);
        this.showAlert('Registration Successful', this.email);
        if ( this.email.includes('students')) {
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['home-lecturer']);
        }
    } catch ( err ) {
        console.dir(err);
        if (err.code === 'auth/email-already-in-use') {
          this.showAlert('Error', 'Wits Email already in use.');
          console.log( err);
        } else if ( err.code === 'auth/argument-error' ) {
            this.showAlert('Error', 'Please enter valid Wits Email and Password');
            console.log( err );
        } else if ( err.code === 'auth/email-already-in-use') {
            this.showAlert('Error', 'Wits Email already registered to another user.');
            console.log( err );
        } else if ( err.code === 'auth/weak-password') {
          this.showAlert('Error', 'Weak Password.');
          console.log( err );
        } else {
            this.showAlert('Error', 'Please enter valid Wits Email and Password');
            console.log( err );
        }
    }
  }

    // const res = await this.afAuth.auth.createUserWithEmailAndPassword(email + '@expedite.co.za', password);
    // console.log(res);
    // this.showAlert('Welcome', 'Registration Successful');
    // this.router.navigate(['waiter']);

    async showAlert( header: string, message: string ) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['Okay.']

    });
    await alert.present();
  }

  redirect_gmail() {
    this.router.navigateByUrl('https://www.mail.google.com/');
    window.open('mail.google.com/', '_system');
  }

}
