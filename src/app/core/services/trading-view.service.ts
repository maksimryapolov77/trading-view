import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TradingViewService {
  public _tradingView = (window as any).TradingView;

  public get TradingView(): any {
    return this._tradingView;
  }

  public init(params: any) {
    new this._tradingView.widget(params);
  }

  public createMediumWidget(params: any) {
    new this._tradingView.MediumWidget(params);
  }
}
