import { Component, OnInit, Input } from '@angular/core';
import { ChartTypes, IWidgetComponent, IWidget } from '@lib/models';

@Component({
  selector: 'app-chart-plus',
  templateUrl: './chart-plus.component.html',
  styleUrls: ['./chart-plus.component.scss']
})
export class ChartPlusComponent implements OnInit, IWidgetComponent {

  @Input()
  public drawDataset: any;

  @Input()
  public data: any;

  @Input()
  public widget: IWidget;

  public width;
  public height;
  
  public get showChart(): boolean  {
    return this._showChart;
  }

  public get showGrid(): boolean  {
    return this._showGrid;
  }

  public get showEditor(): boolean  {
    return this._showEditor;
  }

  constructor(
    private _showChart: boolean = true,
    private _showEditor: boolean = true,
    private _showGrid: boolean = true ) { }

  ngOnInit() {
    this.init();
  }

  public onShowChanged(type: string) {
    if (type === ChartTypes.RealTimeChart) {
      this._showChart = !this._showChart;
    } else if (type === ChartTypes.AgTableGrid) {
      this._showGrid = !this._showGrid;
    } else if (type === ChartTypes.MonacoEditor) {
      this._showEditor = !this._showEditor;
    }
  }

  public onSymbolChanged($event) {
    console.log($event);
  }

  public init(resetData?: any) {
    console.log(resetData);
    this.width = resetData && resetData.width 
      ? Math.floor(resetData.width) : this.drawDataset && this.drawDataset.width && Math.floor(this.drawDataset.width) || 400;
    this.height = resetData && resetData.height 
      ? Math.floor(resetData.height) : this.drawDataset && this.drawDataset.height && Math.floor(this.drawDataset.height) || 660;
  }

}
