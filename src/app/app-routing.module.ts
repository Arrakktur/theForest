import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForestDetailComponent } from './pages/forest-detail/forest-detail.component';
import { ForestsComponent } from './pages/forests/forests.component';
import { HomeComponent } from './pages/home/home.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import {ProfileComponent} from "./pages/profile/profile.component";
import {AboutComponent} from "./pages/about/about.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "sign-in", component: SignInComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "forests", component: ForestsComponent },
  { path: "forest-detail", component: ForestDetailComponent },
  { path: "profile", component: ProfileComponent },
  { path: "support", component: AboutComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
