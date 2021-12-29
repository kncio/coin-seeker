import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { CoinsListComponent } from './coins-list/coins-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketsComponent } from './markets/markets.component';
import { MarketListTileComponent } from './market-list-tile/market-list-tile.component';
import { ExchangesComponent } from './exchanges/exchanges.component';
import { ExchangeListTileComponent } from './exchange-list-tile/exchange-list-tile.component';
import { GlobalStatsComponent } from './global-stats/global-stats.component';
import { CoinHistoryComponent } from './coin-history/coin-history.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CoinDetailsComponent,
    CoinsListComponent,
    DashboardComponent,
    MarketsComponent,
    MarketListTileComponent,
    ExchangesComponent,
    ExchangeListTileComponent,
    GlobalStatsComponent,
    CoinHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
