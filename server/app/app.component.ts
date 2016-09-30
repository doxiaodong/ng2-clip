import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core'

@Component({
  selector: 'clip-app',
  encapsulation: ViewEncapsulation.None,
  template: require('./app.html')
})
export class AppComponent implements OnInit {
  text: string = ''
  cpText1: string = '春江潮水连海平'
  cpText2: string = '海上明月共潮生'
  onClip1(e) {
    this.text = this.cpText1
    onClip(2)
  }
  onClip2(e) {
    this.text = this.cpText2
    onClip(e)
  }
  ngOnInit() { }
}

function onClip(e) {
  if (e) {
    alert(`Copy success`)
  } else {
    alert(`Copy error`)
  }
}
