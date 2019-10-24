import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chart-toolbar',
  templateUrl: './chart-toolbar.component.html',
  styleUrls: ['./chart-toolbar.component.scss'],
})
export class ChartToolbarComponent implements OnInit {
  @Input() chartCount: number;
  
  @Input() editorCount: number;

  @Input() resetData: any;
  
  @Output()
  readonly chartClick = new EventEmitter<any>();
  
  @Output()
  readonly gridClick = new EventEmitter<any>();
  
  @Output()
  readonly editorClick = new EventEmitter<any>();
  
  width: number;
  height: number;

  constructor() { }

  ngOnInit() {
    this.width = this.resetData.width;
    this.height = this.resetData.height;
  }

}
