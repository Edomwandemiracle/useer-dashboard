import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { take, filter } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  data: any;
  // capex_balance: number;
  // capex_spent: number;
  // opex_balance: number;
  // opex_spent: number;
  // asset_use: number;
  // asset_active: number;
  // notifications: number;
  data1: any;
  label = {
    capex: 'capex',
    opex: 'opex',
    assets: 'assets',
  };
  assetsprop = {
    total_cards: 'Total Cards',
    cards_inUse: 'Cards in-Use',
    in_use: 'In-use',
    in_active: 'In-active',
  };
  capexprop = {
    total_play: 'Total Play',
    total_spent: 'Total Spent',
    balance: 'Balance',
  };
  opexprop = {
    total_play: 'Total Work',
    total_spent: 'Total Spent',
    balance: 'Balance',
  };
  capex: any;
  opex: any;
  assets: any;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getStat()
      .pipe(take(1))
      .subscribe((res) => {
        this.data = res[0];

        this.data.chart_stat.forEach((x) => {
          if (x.label === 'capex') {
            this.capex = x;
          }
          if (x.label === 'opex') {
            this.opex = x;
          }
          if (x.label === 'assets') {
            this.assets = x;
          }
        });
      });
  }
}
