import { Component, OnInit, ViewChild, ViewContainerRef, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { IWidgetComponent, IWidget } from '@lib/models';
import { WidgetDataService } from '@app/core/services';
import { GridQuotesService } from './../../core/services/grid-quotes.service';

@Component({
  selector: 'app-ag-table-grid',
  templateUrl: './ag-table-grid.component.html',
  styleUrls: ['./ag-table-grid.component.scss'],
})
export class AgTableGridComponent implements OnInit, IWidgetComponent, OnDestroy {
  @Output()
  symbolChanged = new EventEmitter<string>();

  @ViewChild('agGrid', { static: true, read: ViewContainerRef })
  public agGrid: ViewContainerRef;

  @Input()
  public drawDataset: any;

  @Input()
  public data: any;

  @Input()
  public widget: IWidget;

  public width: number;
  public height: number;

  // public columnDefs;
  public rowData: any;

  columnDefs = [
    { headerName: 'Symbol', field: 'v.short_name', sortable: true, filter: true},
    { headerName: 'Original Name', field: 'v.original_name', sortable: true, filter: true, resizable: true },
    { headerName: 'Lp', field: 'v.lp', sortable: true, filter: true, resizable: true },
    { headerName: 'Ask', field: 'v.ask', sortable: true, filter: true, resizable: true },
    { headerName: 'Bid', field: 'v.bid', sortable: true, filter: true, resizable: true },
    { headerName: 'Open Price', field: 'v.open_price', sortable: true, filter: true, resizable: true },
    { headerName: 'High Price', field: 'v.high_price', sortable: true, filter: true, resizable: true },
    { headerName: 'Low Price', field: 'v.low_price', sortable: true, filter: true, resizable: true },
    { headerName: 'Prev Close Price', field: 'v.prev_close_price', sortable: true, filter: true, resizable: true },
    { headerName: 'Volume', field: 'v.volume', sortable: true, filter: true, resizable: true },
  ];

  // private _rowData;

  constructor(
    private _widgetDataSvc: WidgetDataService,
    private _gridQuotesSvc: GridQuotesService,
  ) { }

  public async ngOnInit() {
    this.init();
  	const data: any = await this._gridQuotesSvc.getQuotes();
    this.rowData = data.d;
  }

  ngOnDestroy() {
    console.log('AgTableGridComponent destoryed');
  }

  public init(resetData?: any) {
    this.width = resetData && resetData.width
      ? Math.floor(resetData.width)
      : this.drawDataset && this.drawDataset.width && Math.floor(this.drawDataset.width) || 400;
    this.height = resetData && resetData.height
      ? Math.floor(resetData.height)
      : this.drawDataset && this.drawDataset.height && Math.floor(this.drawDataset.height) || 400;
  }

  public change(e) {
    const { data, rowIndex } = e;

    this.rowData = this.rowData.map((row, index) => rowIndex === index ? data : row);
    this._widgetDataSvc.updateByWidgetId(this.widget.id, this.widget.columnId, { rowData: this.rowData, columnDefs: this.columnDefs });
  }

  onRowClicked(event: { data: { v: { short_name: string; }; }; }) {
    const symbol: string = event.data.v.short_name;
    this.symbolChanged.emit(symbol);
  }
  
}
