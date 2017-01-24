[![Build Status](https://img.shields.io/travis/doxiaodong/ng2-clip.svg?style=flat-square)](https://travis-ci.org/doxiaodong/ng2-clip)
[![Downloads](https://img.shields.io/npm/dt/ng2-clip.svg?style=flat-square)](https://www.npmjs.com/package/ng2-clip)
[![Versions](https://img.shields.io/npm/v/ng2-clip.svg?style=flat-square)]()
[![License](https://img.shields.io/npm/l/ng2-clip.svg?style=flat-square)]()

# Copy to clipboard using Angular and clipboard.js

# demo
  [https://doxiaodong.github.io/ng2-clip](https://doxiaodong.github.io/ng2-clip)

# Useage

* install `npm i ng2-clip --save`

```typescript
import { NgModule } from '@angular/core'
import { ClipModule } from 'ng2-clip'
@NgModule({
  imports: [
    ClipModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```html
<button clip="The word you want to copy" (onClip)="callback($event)"></button>
<button [clip]="'The word you want to copy'" (onClip)="callback($event)"></button>
```
