import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { MyComboComponent } from './components/shared/my-combo/my-combo.component';
import { MyTableComponent } from './components/shared/my-table/my-table.component';
import { MyCurrencyPipe } from './pipes/my-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyComboComponent,
    MyTableComponent,
    MyCurrencyPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
