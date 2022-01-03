import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { CoinsListComponent } from './coins-list/coins-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketsComponent } from './markets/markets.component';
import { ExchangesComponent } from './exchanges/exchanges.component';
import { GlobalStatsComponent } from './global-stats/global-stats.component';
import { CoinHistoryComponent } from './coin-history/coin-history.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { ChartsModule, WavesModule ,MDBBootstrapModule} from 'angular-bootstrap-md'

@NgModule({
  declarations: [
    AppComponent,
    CoinDetailsComponent,
    CoinsListComponent,
    DashboardComponent,
    MarketsComponent,
    ExchangesComponent,
    GlobalStatsComponent,
    CoinHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    ChartsModule,
    WavesModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
