import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"users",component:UserComponent},
  {path:'user_list',component:UserListComponent},
  {path:'home',component:HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'book',component:BookComponent},
  {path:'book_list',component:BookListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
