import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

export enum TitleBoxType {
  INFO,
  ERROR
}

enum TitleBoxColor {
  INFO = 'blue',
  ERROR = 'red'
}

export type TitleClickedEvent = string;

@Component({
  selector: 'app-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent implements OnInit, OnChanges {

  @Input() title = '';
  // @Input() type = TitleBoxType.INFO;

  color = TitleBoxColor.INFO;

  @Input() type: TitleBoxType;


  ngOnChanges(changes: SimpleChanges): void {

    if (changes.type) {
      if (changes.type.currentValue === TitleBoxType.ERROR) {
        this.color = TitleBoxColor.ERROR;
      } else {
        this.color = TitleBoxColor.INFO;
      }
    }
  }

  @Output() titleClicked = new EventEmitter<TitleClickedEvent>();

  constructor() { }

  ngOnInit() {
  }

  sendPing(): void {
    this.titleClicked.emit('MSG');
  }

}
