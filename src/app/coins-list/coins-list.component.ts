import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from 'src/models/coin';
import { GetCoinsResponse } from 'src/models/get.coins.response';
import { ApiServiceService } from '../api-service.service';
import { NavigationExtras, Router } from '@angular/router';
import {millify} from 'millify';
import { CoinDetailsComponent } from '../coin-details/coin-details.component';

@Component({
  selector: 'app-coins-list',
  templateUrl: './coins-list.component.html',
  styleUrls: ['./coins-list.component.css']
})
export class CoinsListComponent implements OnInit {

  coinsResponse: GetCoinsResponse | undefined;
  coins: Coin[] | undefined;

  constructor(private apiService: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
   this.getCoins();
  }

  getCoins(): void{
    this.apiService.getCoins().subscribe(response => {
      this.coinsResponse = response;
      this.coins = response.data.coins.map<Coin>(coin => this.formatStrings(coin));
    });
  }  

  formatStrings(coin: Coin): Coin {
    const result : Coin = coin;
    result.price = millify(Number(result.price));
    result.marketCap = millify(Number(result.marketCap));
    return result; 
  }

  navigate(id:Number): void{
    this.router.navigateByUrl(`/coin/${id}`);
  }

}
 