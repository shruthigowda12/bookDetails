import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
  {path:"book-details", component:BookDetailsComponent},
  {path:"book-details/:bookId", component:BookDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const route=[BookDetailsComponent]
