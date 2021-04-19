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
  constructor() {}

  ngOnInit(): void {
    console.log(this.property);
  }
  ngOnChanges() {
    console.log(this.chat);
  }
}
