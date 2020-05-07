import { Component, OnInit } from '@angular/core';
import { TitleBoxType, TitleClickedEvent } from './title-box/title-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  TitleBoxType = TitleBoxType;

  title = 'bookm';
  anyVariable = '';

  counter = 0;


  ngOnInit(): void {
    setInterval(() => {
      this.counter += 1;
      this.anyVariable = `${this.counter}`;
    }, 2000);
  }

  logReceivedMessage(msg: TitleClickedEvent): void {
    console.log('Received message', msg);
  }

}
