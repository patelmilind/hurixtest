import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ImgGalleryComponent } from './img-gallery/img-gallery.component'

const routes: Routes = [
  
  {path:'',component:SignupFormComponent},
  {path:'img-gallery',component:ImgGalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
