import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpCacheInterceptorModule, useHttpCacheLocalStorage } from '@ngneat/cashew';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule,
    HttpCacheInterceptorModule.forRoot(),
  ],
  exports: [
  ],
  providers: [
    useHttpCacheLocalStorage
  ],
})
export class PkmngModule {}
