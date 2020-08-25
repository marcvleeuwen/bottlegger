import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AppConstants} from "./app.constants";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppConstants.appRoutes.HOME
  }, {
    path: AppConstants.appRoutes.HOME,
    component: HomeComponent
  }, {
    path: AppConstants.appRoutes.COMMENTS,
    component: HomeComponent
  }, {
    path: AppConstants.appRoutes.MESSAGES,
    component: HomeComponent
  }, {
    path: AppConstants.appRoutes.SEARCH,
    component: HomeComponent
  }, {
    path: AppConstants.appRoutes.PROFILE,
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
