import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BulletsService } from '../../services/bullets.service';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bullets = [];

  @ViewChild('myNav') nav: NavController
  constructor(public navCtrl: NavController, public bulletsService: BulletsService) {
    this.bullets = bulletsService.getBullets();
  }

  public goToDetail() {
    this.navCtrl.push(DetailPage);
  }
}
