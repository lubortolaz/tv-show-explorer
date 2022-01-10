import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { LoginComponent } from './views/login/login.component';
import { TvshowsListComponent } from './views/tvshows-list/tvshows-list.component';
import { TvshowDetailsComponent } from './views/tvshow-details/tvshow-details.component';
import { TvshowNewComponent } from './views/tvshow-new/tvshow-new.component';
import { TvshowEditComponent } from './views/tvshow-edit/tvshow-edit.component';
import { ErrorComponent } from './views/error/error.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'tvshows',
    canActivate: [AuthGuard],
    component: TvshowsListComponent,
  },
  {
    path: 'tvshow/new',
    canActivate: [AuthGuard],
    component: TvshowNewComponent,
  },
  {
    path: 'tvshow/:id',
    canActivate: [AuthGuard],
    component: TvshowDetailsComponent,
  },
  {
    path: 'tvshow/edit/:id',
    canActivate: [AuthGuard],
    component: TvshowEditComponent,
  },
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
