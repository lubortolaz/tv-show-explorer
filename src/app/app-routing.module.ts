import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { LoginComponent } from './views/login/login.component';
import { TvshowsListComponent } from './views/tvshows-list/tvshows-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'tvshows',
    canActivate: [AuthGuard],
    component: TvshowsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
