import { Component } from '@angular/core';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private rest: Restangular) {

  }

  getGasStations() {
    console.log("get gas-station list");
    this.rest.all('areaCode.do?code=F530190510&out=json&area=06').getList().subscribe((results) => {

    });
  }

  ngOnInit() {
    console.log("tab1 page start!");
    this.getGasStations();
  }
}
