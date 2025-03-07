import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionComponent } from './fashion/fashion.component';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionUpdateComponent } from './fashion-update/fashion-update.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';

const routes: Routes = [
  { path:"", redirectTo:"admin-fashion", pathMatch:"full"},
  { path:"admin-fashion", component:FashionComponent},
  { path:"admin-fashion-detail/:id", component:FashionDetailComponent},
  { path:"admin-fahion-edit/:id", component:FashionUpdateComponent},
  { path: "admin-fashion-new", component:FashionNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[
  FashionComponent,
  ]