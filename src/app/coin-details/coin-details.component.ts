import { Component, OnInit } from '@angular/core';
import { Coin } from 'src/models/coin';
import { CoinResponseBase, GetCoinResponse } from 'src/models/get.coin.response';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})
export class CoinDetailsComponent implements OnInit {

  coin: Coin | undefined;
  coinBase: CoinResponseBase | undefined;
  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.getCoin()
  }

  getCoin(): void{
    const id = 2;
    this.apiService.getCoin(id)
      .subscribe(resp => {this.coin = resp.data.coin, this.coinBase = resp.data.base});
  }

}
