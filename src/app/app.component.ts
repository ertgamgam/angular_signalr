import { Component } from '@angular/core';
import { HubconnectionService } from './hubconnection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Loading...';

  constructor(private signalrService: HubconnectionService){    
    this.subscribeToMessageEvent();   
  }

  private subscribeToMessageEvent():void{
    this.signalrService.message.subscribe((message:string)=>{
      console.log('from component' +message);
      this.message=message;
    })
}

}
