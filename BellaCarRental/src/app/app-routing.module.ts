import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeContentComponent } from './home-content/home-content.component';

const routes: Routes = [{
  path: "", component: HomeContentComponent
},{
path: "contact us", component: ContactUsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
