import {
  NgModule,
  ModuleWithProviders
} from '@angular/core'
import { ClipDirective } from './clip.directive'

@NgModule({
  declarations: [
    ClipDirective
  ],
  exports: [
    ClipDirective
  ]
})
export class ClipModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ClipModule
    }
  }
}
