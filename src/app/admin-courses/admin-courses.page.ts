import { Component, OnInit } from '@angular/core';
// import { NavController } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { snapshotToArray } from '../../app/env';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.page.html',
  styleUrls: ['./admin-courses.page.scss'],
})
export class AdminCoursesPage implements OnInit {

  courses;
  ref = firebase.database().ref('courses/');
  inputText = '';

  constructor( public alert: AlertController,
               public afAuth: AngularFireAuth,
               public router: Router) {
    this.ref.on('value', resp => {
      this.courses = snapshotToArray(resp);
    });
  }



  ngOnInit() {

  }

  // Tool Bar Methods
  home() {
    this.router.navigate(['home']);
  }

  messages() {
    this.router.navigate(['messages']);
  }

  logout() {
    this.afAuth.auth.signOut()
    .then(res => {
            this.router.navigate(['login']);
            this.showAlert('GoodBye', 'See you soon. :)');
            // this.presentAlert();
          });
  }

  async showAlert( header: string, message: string ) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['Okay.']

    });
    await alert.present();
  }

  addItem(item) {
    item.name.toUpperCase();
    console.log(item);
    if (item.name.length < 8 ) {
      this.showAlert('Error', 'Please Enter a Valid Course Code');
      return;
    }
    if (item !== undefined && item !== null) {
      const newItem = this.ref.push();
      newItem.set(item);
      this.inputText = '';
    }
  }

  async delItems( key ) {
    firebase.database().ref('courses/' + key).remove() ;
  }

  async edit_item( key ) {
    const alert = await this.alert.create({
      header: 'Edit Item',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
       ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Edit',
          handler: data => {
            if ( data.name !== undefined && data.name.length > 0) {
              // logged in
              firebase.database().ref('courses/' + key).update({name: data.name.toUpperCase()});
            } else {
              return false;
            }
          }
        },
        {
          text: 'Delete',
          handler: data => {
            this.delItems(key);          }
        },
      ]
    });
    await alert.present();
  }

}
