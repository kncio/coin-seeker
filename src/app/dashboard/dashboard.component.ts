import { Component, OnInit } from '@angular/core';
import { GlobalStateData } from 'src/models/global.stats';
import { ApiServiceService } from '../api-service.service';
import {millify} from 'millify';
import { ApiNewsServiceService } from '../api-news-service.service';
import { NewsData } from 'src/models/news';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  globalStats: GlobalStateData | undefined;
  news: NewsData[] | undefined;

  constructor(private apiService: ApiServiceService, private newsService: ApiNewsServiceService) { }

  ngOnInit(): void {
    this.getGlobalStats();
    this.getNews();
  }
 
  getGlobalStats(): void {
    this.apiService.getGlobalStats().subscribe(resp=> this.formatNumber(resp.data));
  }

  getNews(): void{
    this.newsService.getNews().subscribe(response => this.news = response.value);
  }

  formatNumber(statsData: GlobalStateData): void{
    this.globalStats = statsData;
    this.globalStats.total24hVolume = millify(Number(this.globalStats.total24hVolume));
    this.globalStats.totalCoins = millify(Number(this.globalStats.totalCoins));
    this.globalStats.totalExchanges = millify(Number(this.globalStats.totalExchanges));
    this.globalStats.totalMarketCap = millify(Number(this.globalStats.totalMarketCap));
    this.globalStats.totalMarkets = millify(Number(this.globalStats.totalMarkets));
  }

}
 