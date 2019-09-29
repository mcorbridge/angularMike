import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooComponent } from './foo/foo.component';
import { FooService} from './foo/foo.service';
import {MyTable} from './myTable/mytable.component';
import {MyGetComponent} from './myGet/myGet.component';
import {MyGetService} from './myGet/myGet.service';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent},
    ]),
    MatCardModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    FooComponent,
    ProductListComponent,
    MyGetComponent,
    MyTable
  ],
  providers: [FooService, MyGetService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
