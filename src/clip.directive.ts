import {
  Directive,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy
} from '@angular/core'
import * as Clipboard from 'clipboard'

@Directive({
  selector: '[clip]'
})
export class ClipDirective implements OnInit, OnDestroy {
  private clipboard: Clipboard

  @Input('clip') content: string = ''
  @Output() onClip: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private _ele: ElementRef) { }

  ngOnInit() {
    const option: Clipboard.Options = {
      text: (ele) => {
        return this.content
      }
    }
    this.clipboard = new Clipboard(this._ele.nativeElement, option)
    this.clipboard.on('success', () => {
      this.onClip.emit(true)
    })
      .on('error', () => {
        this.onClip.emit(false)
      })
  }

  ngOnDestroy() {
    if (this.clipboard) {
      this.clipboard.destroy()
    }
  }
}
