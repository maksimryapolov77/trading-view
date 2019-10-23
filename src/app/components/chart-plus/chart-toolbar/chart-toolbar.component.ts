import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChartTypes } from '@lib/models';

@Component({
  selector: 'app-chart-toolbar',
  templateUrl: './chart-toolbar.component.html',
  styleUrls: ['./chart-toolbar.component.scss']
})
export class ChartToolbarComponent implements OnInit {

  @Output()
  public readonly selectSubItem = new EventEmitter<string>();

  constructor() { }

  public editorClick() {
    this.selectSubItem.emit(ChartTypes.MonacoEditor);
  };
  
  public chatClick() {
    this.selectSubItem.emit(ChartTypes.RealTimeChart);
  };
  
  public gridClick() {
    this.selectSubItem.emit(ChartTypes.AgTableGrid);
  };

  ngOnInit() {
  }

}
