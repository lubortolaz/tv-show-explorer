import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvshowsListComponent } from './views/tvshows-list/tvshows-list.component';
import { TvshowDetailsComponent } from './views/tvshow-details/tvshow-details.component';
import { TvshowNewComponent } from './views/tvshow-new/tvshow-new.component';
import { TvshowEditComponent } from './views/tvshow-edit/tvshow-edit.component';
import { ErrorComponent } from './views/error/error.component';
import { LoginComponent } from './views/login/login.component';
import { TvshowFormComponent } from './components/tvshow-form/tvshow-form.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TvshowsListComponent,
    TvshowDetailsComponent,
    TvshowNewComponent,
    TvshowEditComponent,
    ErrorComponent,
    LoginComponent,
    TvshowFormComponent,
    CommentFormComponent,
    ErrorsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
