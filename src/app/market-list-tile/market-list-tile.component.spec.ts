import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketListTileComponent } from './market-list-tile.component';

describe('MarketListTileComponent', () => {
  let component: MarketListTileComponent;
  let fixture: ComponentFixture<MarketListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketListTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
