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

  toolbarSizeData: any;

  gridCount: string[] = [];
  chartCount = 0;
  editorCount = 0;
  chartSizeDataSet: any;
  editorSizeDataSet: any;
  gridSizeDataSet: any;
  symbol: string;

  constructor() {
  }

  ngOnInit() {
    this.init();
  }
  
  ngAfterViewInit() {
  }

  init(resetData?: any) {
    console.log(resetData);
    const widgetType = this.widget.type;
    switch (widgetType) {
      case ChartTypes.AgTableGrid:
        this.gridCount = ['1'];
        break;

      case ChartTypes.MonacoEditor:
        this.editorCount++;
        break;

      case ChartTypes.RealTimeChart:
        this.chartCount++;
        break;
      default:
        break;
    }

    if (resetData === undefined){
      return;
    }

    this.toolbarSizeData = resetData;

    const cellDivSize = (resetData.height - 30) / 10;

    this.chartSizeDataSet = {width: resetData.width, height: cellDivSize * 5}
    this.editorSizeDataSet = {width: resetData.width, height: cellDivSize * 2}
    this.gridSizeDataSet = {width: resetData.width, height: cellDivSize * 3}

    console.log(this.drawDataset);
    console.log(this.data);
    console.log(this.widget.type);
    console.log(resetData);
  }

  chartClick(_event: any) {
    console.log('chartClicked');
    if (this.chartCount < 1) {
      this.chartCount++;
    }
  }

  gridClick(_event: any) {
    console.log('gridClicked');
    this.gridCount.push('1');
  }

  editorClick(_event: any) {
    console.log('editorClicked');
    if (this.editorCount < 1) {
      this.editorCount++;
    }
  }

  symbolChanged(symbol: string) {
    this.symbol = symbol;
  }
}
