import { Injectable, EventEmitter } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';


@Injectable({
  providedIn: 'root'
})
export class HubconnectionService {
  message = new EventEmitter<string>();
  private hubConnection: HubConnection

  constructor() {
    this.createConnection();
    this.registerOnServerEvents();
    this.startConnection();
   }

  private createConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:44356/messageshub')
      .build();
  }

  private registerOnServerEvents(): void {
    this.hubConnection.on('getSendMessage', (param: string) => {
      console.log('from service ' + param);
      this.message.emit(param);
    })
  }

  private startConnection(): void {
    this.hubConnection
      .start()
      .then(() => {
        console.log('Hub connection started');
      })
      .catch(err => {
        console.log('Error while establishing connection, retrying...');        
      });
  }
}
