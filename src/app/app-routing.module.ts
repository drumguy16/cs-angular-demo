import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeOneComponent } from './pages/home-one/home-one.component';
import { HomeTwoComponent } from './pages/home-two/home-two.component';

const routes: Routes = [
  {
    path: "home-1",
    component: HomeOneComponent,
  },
  {
    path: "home-2",
    component: HomeTwoComponent,
  },
  {
    path: "**",
    redirectTo: "home-1",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
