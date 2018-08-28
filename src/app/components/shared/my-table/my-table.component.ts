import { Component, OnInit, Input, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  creditCardsDictionary:any={1060 : "Diners Club", 1020: "VISA", 1010 : "MasterCard"}
  amountWidth:string = 'auto';
  digitsWidth:string = 'auto';
  selectedRow:number= -1;
  @Input() data:any[];
  @ViewChild('amountth') amountRef:ElementRef;
  @ViewChild('lastDigits') lastDigitsRef:ElementRef;

  constructor(private changeDetectorRef:ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    
    const newAmountWidth = this.amountRef.nativeElement.offsetWidth +'px';
    const newDigistWidth = this.lastDigitsRef.nativeElement.offsetWidth +'px';
    console.log(newAmountWidth);
    if(newAmountWidth!= this.amountWidth){
      this.amountWidth = newAmountWidth;      
      // this.changeDetectorRef.detectChanges();
    }
    if(newDigistWidth != this.digitsWidth){
      this.digitsWidth = newDigistWidth;      
      // this.changeDetectorRef.detectChanges();

    }

  }

}
