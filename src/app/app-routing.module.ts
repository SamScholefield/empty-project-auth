import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from "@angular/router";

import { AuthGuard } from "./auth/auth.guard";

import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  //unguarded
  { path: "", component: LoginComponent },
  //guarded
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  //error
  { path: "404", component: NotFoundComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
