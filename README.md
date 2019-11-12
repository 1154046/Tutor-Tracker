[![Build Status](https://travis-ci.org/1154046/Tutor-Tracker.svg?branch=master)](https://travis-ci.org/1154046/Tutor-Tracker)

# TutorTracker-Ionic

The Tutor App is a mobile application designed for both Android and IOS devices. The app is designed as an attempt to simplify Tutor payments by the university and 

The App : ####  i. Allows user registration.
         #### ii. Allows user login.
         iii. Has checks to determine whether person logging in is Tutor or Lecturer, and redirects them accordingly.
         iv. Allows both the tutor and lectuer to edit their profile.
         v. Allows the lecturer to add and remove courses to generate the timetable.
         vi. Allows the tutor to download the timetable for the courses the tutor is tutoring.
         vii. Allows the tutor to generate the QR Code so that lecturer can scan the generated QR Code to append the payment for that                 specific course the tutor generated the QR code for.
         viii. Allows the tutor to view their pending payment.
	xi.Allows both the tutor and the lecturer to post on the forum.

### Prerequisites:
The System requires ionic 4-Framework to be compiled successfully.

### Installing:

#### 1. Download and Install node.js from https://nodejs.org/en/
run 'node -v' to check if installation was successful.


#### 2. Download and Install npm from https://www.npmjs.com/get-npm
run 'npm -v' to check if installation was successful.
If all goes well, run 'npm install npm@latest -g' to update all packages.


#### 3. Install Ionic-Framework and Cordova
run 'npm install -g cordova ionic' to install the framework.


#### 4. Make sure to install the latest version of JDK and Android Studio IDE for Android development
JDK: 
Android Studio:
This is for packaging the app into a installable .apk file.
The process is not so trivial for IOS. Read https://ionicframework.com/docs/v3/intro/deploying/ to learn more about ionic app deployment.


### Compiling:

#### 1. Open cmd terminal 
run 'ionic start' to create an app folder 
Project name: Tutor-Tracker
Framework: Angular | https://angular.io
Starter Template: blank

#### 2. Download and overwrite the src folder into the existing path.

#### 3. Install required libraries and dependecies
run 'npm install' to download and integrate and required dependencies.
run 'npm install -g ionic@latest cordova@latest'

#### 4. Should any imports still fail
run 'npm install xxxx --save' where xxxx is the failed import name.
example: 'npm install @angular/router --save'

#### To run the app in a browser, run 'ionic serve'

#### To run the app in a laboratory app simulator, run 'ionic serve -l'
You'll be prompted to install the laboratory enviroinment.

#### To run it on a device, use  - ionic cordova run android --device.

run 'ionic cordova platform add android' for android deployment initialization
