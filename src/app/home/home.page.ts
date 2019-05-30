import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  btc : number;
  eth : number;
  euro : number;
  constructor() {
  }

  public convertEuro() : void{
    this.btc = (this.euro / 7204.8001);
    this.eth = (this.euro / 225.61);
  }

  public convertBtc() : void{
    this.euro = (this.btc / 0.00013879635605712362);
    this.eth = (this.btc / 0.031);
  }

  public convertEth() : void {
    this.euro = (this.eth / 0.004433410179109771);
    this.btc = (this.eth / 0.03129890453834116);
  }
}
