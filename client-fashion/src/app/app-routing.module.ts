import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionClientComponent } from './fashion-client/fashion-client.component';
import { FashionDetailClientComponent } from './fashion-detail-client/fashion-detail-client.component';
import { FashionStyleClientComponent } from './fashion-style-client/fashion-style-client.component';

const routes: Routes = [
  { path:"", redirectTo:"fashion-client", pathMatch:"full"},
  { path:"fashion-client", component:FashionClientComponent},
  { path:"fashion-detail-client/:id", component:FashionDetailClientComponent},
  { path:"fashion-style-client/:style", component:FashionStyleClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
