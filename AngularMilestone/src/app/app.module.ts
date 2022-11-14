import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreateShoeComponent } from './create-shoe/create-shoe.component';
import { DisplayShoeComponent } from './display-shoe/display-shoe.component';
import { ListShoeComponent } from './list-shoe/list-shoe.component';
import { AppRoutingModule } from './app-routing.module';
import { DeleteShoeComponent } from './delete-shoe/delete-shoe.component';
import { UpdateShoeComponent } from './update-shoe/update-shoe.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateShoeComponent,
    DisplayShoeComponent,
    ListShoeComponent,
    DeleteShoeComponent,
    UpdateShoeComponent,
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
