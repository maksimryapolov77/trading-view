import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { IWidget, IWidgetComponent, ChartTypes } from '@lib/models';

@Component({
  selector: 'app-chart-plus',
  templateUrl: './chart-plus.component.html',
  styleUrls: ['./chart-plus.component.scss'],
})
export class ChartPlusComponent implements OnInit, IWidgetComponent, AfterViewInit {
  @Input() drawDataset: any;
  @Input() data: any;
  @Input() widget: IWidget;

  gridCount: string[] = [];
  chartCount = 0;
  editorCount = 0;
  
  toolbarSizeData: any;
  chartSizeDataSet: any;
  editorSizeDataSet: any;
  gridSizeDataSet: any;

  symbol: string;
  resetData: any;
  widgetType: string;
  gridStatus: boolean;
  editorStatus: boolean;
  chartStatus: boolean;

  constructor() {
  }

  ngOnInit() {
    this.widgetType = this.widget.type;
  }

  ngAfterViewInit() {
    this.init();
  }

  init(resetData?: any) {
    if (resetData === undefined) {
      return;
    }

    this.resetData = resetData;
    this.updateItemCount();
    this.resetDrawDataSets();
  }

  updateItemCount() {
    switch (this.widgetType) {
      case ChartTypes.AgTableGrid:
        // this.gridCount = ['1'];
        this.gridStatus = !this.gridStatus;
        break;

      case ChartTypes.MonacoEditor:
        // this.editorCount++;
        this.editorStatus = !this.editorStatus;
        break;

      case ChartTypes.RealTimeChart:
        // this.chartCount++;
        this.chartStatus = !this.chartStatus;
        break;
      default:
        break;
    }
  }

  dataSet(percent: number) {
    this.toolbarSizeData = this.resetData;
    const cellDivSize = (this.resetData.height - 20) / 10;
    return {width: this.resetData.width, height: cellDivSize * percent}

  }

  resetDrawDataSets() {
    if (this.chartStatus && !this.gridStatus && !this.editorStatus) {
      this.chartSizeDataSet = this.dataSet(10);
    }
    if (!this.chartStatus && !this.gridStatus && this.editorStatus) {
      this.editorSizeDataSet = this.dataSet(10);
    }
    if (!this.chartStatus && this.gridStatus && !this.editorStatus) {
      this.gridSizeDataSet = this.dataSet(10);
    }
    if (this.chartStatus && this.gridStatus && !this.editorStatus) {
      this.chartSizeDataSet = this.dataSet(6);
      this.gridSizeDataSet = this.dataSet(4);
    }
    if (!this.chartStatus && this.gridStatus && this.editorStatus) {
      this.editorSizeDataSet = this.dataSet(4);
      this.gridSizeDataSet = this.dataSet(6);
    }
    if (this.chartStatus && !this.gridStatus && this.editorStatus) {
      this.chartSizeDataSet = this.dataSet(6);
      this.editorSizeDataSet = this.dataSet(4);
    }
    if (this.chartStatus && this.gridStatus && this.editorStatus) {
      this.chartSizeDataSet = this.dataSet(5);
      this.editorSizeDataSet = this.dataSet(2);
      this.gridSizeDataSet = this.dataSet(3);
    }
  }

  

  chartClick(_event: any) {
    // if (this.chartCount < 1) {
    // }
    this.widgetType = ChartTypes.RealTimeChart;
    this.init(this.resetData);
  }

  gridClick(_event: any) {
    this.widgetType = ChartTypes.AgTableGrid;
    this.init(this.resetData);
  }

  editorClick(_event: any) {
    // if (this.editorCount < 1) {
    // }
    this.widgetType = ChartTypes.MonacoEditor;
    this.init(this.resetData);
  }

  symbolChanged(symbol: string) {
    this.symbol = symbol;
  }
}
