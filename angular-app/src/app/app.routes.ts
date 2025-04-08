import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './posts/posts.component';
import { FormComponent } from './pages/form/form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'api-data', component: PostsComponent },
  { path: 'form', component: FormComponent }
];
