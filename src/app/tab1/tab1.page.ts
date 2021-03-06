import { Component } from '@angular/core';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  gasStations: any = [];

  constructor(private rest: Restangular) {

  }

  getGasStations() {
    console.log("get gas-station list");
    this.gasStations = [];

    this.rest.all('/gasstation/getgasstations').getList().subscribe((results) => {
      this.gasStations = results;
    });
  }

  ngOnInit() {
    console.log("tab1 page start!");
    this.getGasStations();
  }
}
