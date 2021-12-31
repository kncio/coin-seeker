import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExchangesComponent } from './exchanges/exchanges.component';
import { MarketsComponent } from './markets/markets.component';

const routes: Routes = [
  {path: 'coin/:id',component: CoinDetailsComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'markets', component: MarketsComponent},
  {path: 'exchanges', component: ExchangesComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
