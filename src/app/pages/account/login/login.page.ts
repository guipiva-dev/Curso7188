import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';

import { DataService } from './../../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private fb: FormBuilder,
    private LoadingCtrl: LoadingController,
    private navCtrl: NavController,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

}
