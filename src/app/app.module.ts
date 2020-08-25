import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from "./pages/home/home.component";
import {AppBarModule} from "./components/app-bar/app-bar.module";
import { PostCardComponent } from './components/post-card/post-card.component';
import {PostCardModule} from "./components/post-card/post-card.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBarModule,
    PostCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
