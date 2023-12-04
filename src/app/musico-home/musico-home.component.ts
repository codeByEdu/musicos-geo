import { Component } from '@angular/core';

import { NexmoService } from '../services/NexmoService';


const from = "Vonage APIs"
const to = "5511981120937"
const text = 'A text message sent using the Vonage SMS API'


@Component({
  selector: 'app-musico-home',
  templateUrl: './musico-home.component.html',
  styleUrls: ['./musico-home.component.css']
})
export class MusicoHomeComponent {
  watchID: number | null = null;

  constructor(private nexmoService: NexmoService) { }

  sendSMS(text: string) {
    this.nexmoService.sendSMS(text)
      .subscribe(
        response => {
          console.log('Resposta do servidor:', response);
        },
        error => {
          console.error('Erro na chamada ao serviço:', error);
        }
      );
  }

  inscrever() {
    this.watchID = navigator.geolocation.watchPosition(
      (pos) => this.success(pos),
      (err) => this.error(err),
      {
        enableHighAccuracy: true,
        timeout: 5000
      }
    );
  }

  success(pos: GeolocationPosition) {
    console.log(pos.coords.latitude, pos.coords.longitude);
    this.sendSMS(pos.coords.latitude.toString() + pos.coords.longitude.toString());
    // Adicione lógica para exibir as informações no template, se necessário
    // this.h2.textContent = `Latitude:${pos.coords.latitude}, Longitude:${pos.coords.longitude}`;
  }

  error(err: GeolocationPositionError) {
    console.log(err);
  }

  // Adicione esta função se desejar parar de rastrear a localização em algum ponto
  // pararRastreio() {
  //   if (this.watchID) {
  //     navigator.geolocation.clearWatch(this.watchID);
  //   }
  // }
}
