# Copy to clipboard using Angular and clipboard.js

# demo
  [http://ng2-clip.darlin.me](http://ng2-clip.darlin.me)

# Useage

* install `npm i ng2-clip` --save-dev

```typescript
import { NgModule } from '@angular/core
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
