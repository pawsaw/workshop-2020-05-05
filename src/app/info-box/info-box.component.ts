import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _isHidden = false;

  get isHidden(): boolean {
    return this._isHidden;
  }

  constructor() { }

  ngOnInit() {
  }

  toggleVisiblity() {
    this._isHidden = !this._isHidden;
  }

}
