import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
// import { NavController } from 'ionic-angular';
// import * as firebase from 'firebase/app';
// import { snapshotToArray } from '../../app/env';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'app-lecturer-scan',
  templateUrl: './lecturer-scan.page.html',
  styleUrls: ['./lecturer-scan.page.scss'],
})

export class LecturerScanPage implements OnInit {

  qrcode: string;
  qrData = null;
  createdCode = null;
  scannedCode = null;

  constructor( public router: Router,
               public afAuth: AngularFireAuth,
               public alert: AlertController,
               private barcodeScanner: BarcodeScanner) {}


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
    });
  }


  scan_code() {
    console.log('Enter');
    try {
      this.barcodeScanner.scan().then(
        barcodeData => {
          console.log('mid');
          this.scannedCode = barcodeData.text;
      });
      console.log('sbu-exit');
      return;
    } catch (err) {
        console.log(err);
        this.showAlert('Error', err);
      }
    }



  async showAlert( subheader: string, message: string ) {
    const alert = await this.alert.create({
      header: 'Tutor Tracker',
      subHeader: subheader,
      message,
      buttons: ['Okay.']

    });
    await alert.present();
  }

}
