import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExergueDirective } from './directives/exergue.directive';
import { ArticleComponent } from './article/article.component';
import { ArcEnCielDirective } from './directives/arc-en-ciel.directive';

@NgModule({
  declarations: [
    AppComponent,
    ExergueDirective,
    ArticleComponent,
    ArcEnCielDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
