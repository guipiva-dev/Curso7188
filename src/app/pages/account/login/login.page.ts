import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';

import { DataService } from './../../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

form: FormGroup;
hide: boolean = true;

  constructor(
    private fb: FormBuilder,
    private LoadingCtrl: LoadingController,
    private navCtrl: NavController,
    private dataService: DataService
  ) { 
    this.form = fb.group({
      username: ['',
      Validators.compose([
        Validators.required
      ])],
      password: ['',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ])]
    });
  }

  ngOnInit() {
  }

  toggleHide() {
    this.hide = !this.hide;
  }

}
