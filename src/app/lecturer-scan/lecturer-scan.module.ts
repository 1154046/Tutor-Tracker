import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LecturerScanPage } from './lecturer-scan.page';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

const routes: Routes = [
  {
    path: '',
    component: LecturerScanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    // BarcodeScanner,
    RouterModule.forChild(routes)
  ],
  declarations: [LecturerScanPage]
})
export class LecturerScanPageModule {}
