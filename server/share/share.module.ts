import {
  NgModule,
  ModuleWithProviders
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ClipModule } from '../../src'

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ClipModule
  ],
  exports: [
    FormsModule,
    CommonModule,
    ClipModule
  ]
})
export class ShareModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShareModule
    }
  }
}
