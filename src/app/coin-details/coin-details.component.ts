import { Component, OnInit } from '@angular/core';
import { Observable, timestamp } from 'rxjs';
import { Coin } from 'src/models/coin';
import { ChartPoint, CoinHistory } from 'src/models/coinHistory';
import { CoinResponseBase, GetCoinResponse } from 'src/models/get.coin.response';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})
export class CoinDetailsComponent implements OnInit {

  coin: Coin | undefined;
  coinBase: CoinResponseBase | undefined;

  coinHistory: ChartPoint[] | undefined;
  coinHistoryObservable: Observable<CoinHistory> | undefined;

  chartLoaded: Boolean = false;
  priceHistoryDataset: Array<any> = [];
  pricesArray: Array<any> = [];
  chartLabels: Array<any> = [];
  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];
  public chartType: string = 'line';
  public chartOptions: any = {
    responsive: true
  };

  

  constructor(private apiService: ApiServiceService, private route: ActivatedRoute,private location: Location) { 
    
  }

  ngOnInit(): void {
    this.getCoin();
    this.getCoinHistory();
  }

  getCoin(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getCoin(id)
      .subscribe(resp => {this.coin = resp.data.coin, this.coinBase = resp.data.base});
  }

  getCoinHistory(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const range = "7d";
      
    this.coinHistoryObservable = this.apiService.getCoinHistory(id,range);
    this.coinHistoryObservable.subscribe(resp => {this.coinHistory = resp.data.history});
    this.coinHistoryObservable.subscribe(resp => this.transformHistory());
  }

  transformHistory(): void{
    this.pricesArray = [];
    this.chartLabels = [];
    this.coinHistory?.forEach(
      point => {
        this.pricesArray?.push(point.price);
        this.chartLabels?.push(point.timestamp);
      }
    );
    this.priceHistoryDataset = [{data:this.pricesArray, label: "USD Price"}]
    this.chartLoaded = true;
  }

}
