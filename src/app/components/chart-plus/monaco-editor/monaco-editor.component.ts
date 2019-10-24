import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectorRef, OnChanges } from '@angular/core';

@Component({
  selector: 'app-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.scss'],
})
export class MonacoEditorComponent implements OnInit, OnChanges {

  @Input() resetData: any;

  @Output() readonly symbolChanged = new EventEmitter<string>();

  width: number;
  height: number;

  editorOptions = {
    automaticLayout: true,
    theme: 'vs-dark',
    selectOnLineNumbers: 'true',
  };

  code = '';

  constructor(
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.init();
  }

  
  ngOnChanges() {
    this.init();
  }
  
  init() {
    this.width = this.resetData.width;
    this.height = this.resetData.height;

    this._cdr.detectChanges();
  }

  onKeyUp() {
    const symbol: string = this.code.replace(/(\r\n|\n|\r)/gm, '');
    this.symbolChanged.emit(symbol);
  }
}
