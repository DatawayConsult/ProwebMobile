import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import { DataProvider } from '../../providers/data/data';
import * as _ from 'lodash';

/**
 * Generated class for the InsurancepoliciesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-insurancepolicies',
  templateUrl: 'insurancepolicies.html',
  providers: [DataProvider]
})

export class InsurancepoliciesPage {

public device: any;
public deviceID: any;
public phonesnap: any;  
public tabletsnap: any;
public tablets:FirebaseListObservable<any>;
public phones:FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angFire: AngularFireDatabase) {
      this.device = navParams.get('devicename');
      this.deviceID = navParams.get('deviceID');
      this.phones = angFire.list('/Devices/PHONE/InsurancePolicy/');
      this.tablets = angFire.list('/Devices/TABLET/InsurancePolicy/');
      
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsurancepoliciesPage');
  }

}
