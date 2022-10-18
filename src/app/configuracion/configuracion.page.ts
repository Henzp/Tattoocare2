import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) { }

  async showLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Contactando a soporte',
      duration: 3000,
      cssClass: 'custom-loading'
    });

    loading.present();
  }

  ngOnInit() {
  }

}
