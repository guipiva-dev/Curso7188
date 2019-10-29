import { SecurityUtils } from './../../utils/security.utils';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {

user: UserModel;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.user = SecurityUtils.get();
  }

logout() {
  SecurityUtils.clear();
  this.navCtrl.navigateRoot('/login');
}

}
