import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { GridQuotesService } from '@app/core/services/grid-quotes.service';

@Component({
  selector: 'app-ag-table-grid',
  templateUrl: './ag-table-grid.component.html',
  styleUrls: ['./ag-table-grid.component.scss'],
})

export class AgTableGridComponent implements OnInit, OnDestroy, AfterViewInit {


  @Input() resetData: any;

  @Output()
  public readonly symbolChanged = new EventEmitter<string>();

  public width: number;
  public height: number;
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

  constructor(
    private _gridQuotesSvc: GridQuotesService,
  ) { }

  public async ngOnInit() {
    const data: any = await this._gridQuotesSvc.getQuotes();
    this.rowData = data.d;
  }
  
  ngAfterViewInit() {
    this.init();
  }

  public ngOnDestroy() {}

  public init() {
    this.width = this.resetData.width;
    this.height = this.resetData.height;
    
  }

  // public change(e) {
  //   const { data, rowIndex } = e;

  //   this.rowData = this.rowData.map((row, index) => rowIndex === index ? data : row);
  //   this._widgetDataSvc.updateByWidgetId(this.widget.id, this.widget.columnId, { rowData: this.rowData, columnDefs: this.columnDefs });
  // }

  onRowClicked(event: { data: { v: { short_name: string; }; }; }) {
    const symbol: string = event.data.v.short_name;
    this.symbolChanged.emit(symbol);
  }
}
