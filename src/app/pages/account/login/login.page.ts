import { SecurityUtils } from './../../../utils/security.utils';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';

import { DataService } from './../../../services/data.service';
import { UserModel } from './../../../models/user.model';

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
    private toastr: ToastController,
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

  async submit() {
    if(this.form.invalid) {
      return;
    }

    const loading = await this.LoadingCtrl.create({message: 'Autenticando...'});
    loading.present();

    this.dataService.authenticate(this.form.value)
    .subscribe(
      (res: UserModel) => {
        SecurityUtils.set(res);
        this.navCtrl.navigateRoot('/');
        console.log('ok');
      },
      (err) => {
        this.showError("Usuário ou senha inválidos.");
        console.log('erro');
        loading.dismiss();
      },
      () => {
        loading.dismiss();
        console.log('done');
      }
    )
  }

  toggleHide() {
    this.hide = !this.hide;
  }

  async showError(message: string) {
    const error = await this.toastr.create({ message: message, showCloseButton: true, closeButtonText: 'Fechar', duration: 3000 })
    error.present();
  }

  async resetPassword() {
    if(this.form.controls["username"].invalid) {
      this.showError("Nome de usuário inválido.")
      return;
    }

    const loading = await this.LoadingCtrl.create({ message: "Restaurando sua senha..." });
    loading.present();
  }
}
