import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data$:Observable<any>;
  actionFilter:string = null;
  currencyFilter:string = null;

  transactionTypes:any[] = [{label: "Payment", value: "payment"},
  {label: "Authorize", value: "authorize"},
  {label: "Credit", value: "credit"}]
  
  currencies:any[] = [{label: "USD", value: "USD"},
  {label: "EUR", value: "EUR"},
  {label: "FBP", value: "GBP"}]

  constructor(private dataService:DataService){}


  ngOnInit(): void {

    this.data$ = this.dataService.getData({});
    // this.dataService.getData().subscribe(res=>{
    //   console.log(res);
    // });
  }

  search(){
    let params:any = {};
    if(this.currencyFilter){
      params.currency = this.currencyFilter;
    }
    if(this.actionFilter){
      params.action = this.actionFilter;
    }
    console.log("Assigned:", JSON.stringify(params));

    this.data$ = this.dataService.getData(params);

  }

}
