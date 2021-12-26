import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeListTileComponent } from './exchange-list-tile.component';

describe('ExchangeListTileComponent', () => {
  let component: ExchangeListTileComponent;
  let fixture: ComponentFixture<ExchangeListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeListTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
