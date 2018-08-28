import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-combo',
  templateUrl: './my-combo.component.html',
  styleUrls: ['./my-combo.component.css']
})
export class MyComboComponent implements OnInit {

  @Input() placeholder:string;
  @Input() options:Option[];

  @Output() valueChanged: EventEmitter<number> = new EventEmitter();
  showOptions:boolean=false;
  selectedOption:Option;

  constructor() {
   }

  ngOnInit() {
    this.selectedOption={value:"", label:this.placeholder};
    console.log(this.selectedOption);
  }

  setValue(newValue){
    this.selectedOption=newValue;
    this.valueChanged.emit(newValue.value);
    this.showOptions = false;
  }

}

interface Option {
  label: string;
  value: string;
}