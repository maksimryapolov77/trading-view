import { Component, OnInit, Input, ViewContainerRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { IWidget, IColumnCard } from '@lib/models';

@Component({
  selector: 'app-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.scss']
})
export class MonacoEditorComponent implements OnInit, IWidget {
  @Output()
  symbolChanged = new EventEmitter<string>();

  @ViewChild('monacoEditor', { static: true, read: ViewContainerRef })
  public monacoEditor: ViewContainerRef;

  @Input()
  public drawDataset: any;

  @Input()
  public data: any;

  @Input()
  public widget: IColumnCard;

  public width: number;
  public height: number;

  public editorOptions = {
    theme: 'vs-dark',
    selectOnLineNumbers: 'true',
  };

  public code = '';

  constructor() { }

  public ngOnInit() {
    this.init();
  }

  onKeyUp() {
    console.log('enter ');
    const symbol: string = this.code.replace(/(\r\n|\n|\r)/gm, '');
    this.symbolChanged.emit(symbol);
  }

  public init(resetData?: any) {
    this.width = resetData && resetData.width
      ? Math.floor(resetData.width)
      : this.drawDataset && this.drawDataset.width && Math.floor(this.drawDataset.width) || 400;
    this.height = resetData && resetData.height
      ? Math.floor(resetData.height)
      : this.drawDataset && this.drawDataset.height && Math.floor(this.drawDataset.height) || 400;
  }
}
