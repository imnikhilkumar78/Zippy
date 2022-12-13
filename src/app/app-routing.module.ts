import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


const routes: Routes=[
  { path: "", pathMatch: "full", redirectTo: "home" },
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers:[]
})
export class AppRoutingModule { }
