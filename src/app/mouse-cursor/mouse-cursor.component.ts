import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.scss']
})
export class MouseCursorComponent implements OnInit {

  x = -1;
  y = -1;

  constructor() { }

  ngOnInit() {
  }

  onMouseMove({ clientX, clientY }: MouseEvent): void {
    this.x = clientX;
    this.y = clientY;
  }

}
