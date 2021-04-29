import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'

// import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { RwislistComponent } from './rwislist/rwislist.component';
import { RwisTableComponent } from './rwis-table/rwis-table.component';
@NgModule({
  declarations: [
    AppComponent,
    RwislistComponent,
    RwisTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
