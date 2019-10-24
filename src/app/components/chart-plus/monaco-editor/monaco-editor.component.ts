import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.scss'],
})
export class MonacoEditorComponent implements OnInit {
  @Input() resetData: any;

  @Output() readonly symbolChanged = new EventEmitter<string>();

  public width: number;
  public height: number;

  public editorOptions = {
    theme: 'vs-dark',
    selectOnLineNumbers: 'true',
  };

  public code = '';

  constructor(
    private _cdr: ChangeDetectorRef,
  ) {}

  public ngOnInit() {
    this.init();
  }

  public init() {
    this.width = this.resetData.width;

    this.height = this.resetData.height;

    this._cdr.detectChanges();
  }

  public onKeyUp() {
    const symbol: string = this.code.replace(/(\r\n|\n|\r)/gm, '');
    this.symbolChanged.emit(symbol);
  }
}
