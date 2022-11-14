import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateShoeComponent } from './create-shoe/create-shoe.component';
import { ListShoeComponent } from './list-shoe/list-shoe.component';
import { DeleteShoeComponent } from './delete-shoe/delete-shoe.component';
import { DisplayShoeComponent } from './display-shoe/display-shoe.component';


const routes: Routes = [
  { path: 'create', component: CreateShoeComponent },
  { path: 'list-shoes', component: ListShoeComponent },
  {path: 'delete/:id', component: DeleteShoeComponent},
  {path: 'display/:id', component: DisplayShoeComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
