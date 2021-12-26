import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinHistoryComponent } from './coin-history.component';

describe('CoinHistoryComponent', () => {
  let component: CoinHistoryComponent;
  let fixture: ComponentFixture<CoinHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
