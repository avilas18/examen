import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string = 'Angel Avila';
  usuario = {
    email: '',
    telefono: '',
    fechaNacimiento: ''
  };

  constructor(private alertController: AlertController) { }

  ngOnInit() {}

  async openDatePicker() {
    const alert = await this.alertController.create({
      header: 'Seleccionar Fecha de Cumpleaños',
      inputs: [
        {
          name: 'fechaNacimiento',
          type: 'date',
          value: this.usuario.fechaNacimiento,
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            this.usuario.fechaNacimiento = data.fechaNacimiento;
          }
        }
      ]
    });

    await alert.present();
  }

  onSubmit(formulario: NgForm) {
    console.log('submit');
    console.log(this.usuario);
    console.log(formulario);
  }
}
