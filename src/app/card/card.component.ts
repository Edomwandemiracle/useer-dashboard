import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() chat;
  @Input() label;
  @Input() property;
  capex: any;
  opex: any;
  assets: any;
  in_use: any;
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges() {
    if (this.chat?.label === 'assets') {
      this.in_use = this.chat['in-use'];
    }
  }
}
