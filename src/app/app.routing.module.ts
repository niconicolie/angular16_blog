import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./components/profile/profile.component";
import { TimelineComponent } from "./components/timeline/timeline.component";
import { LoginComponent } from "./components/pages/login/login.component";
import { SignupComponent } from "./components/pages/signup/signup.component";
import { UserListComponent } from "./components/user-list/user-list.component";

const routes: Routes = [
    { path: 'timeline', component: TimelineComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent},
    { path: '**', redirectTo: '' },
    { path: 'users/:id', component: UserListComponent}

];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}