import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addCounter } from '../state/counter.actions';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {

  constructor(private store:Store<{counter:counterState}>) { }
  value!:number;

  ngOnInit(): void {
  }

  addcounter(){
    this.store.dispatch(addCounter({value: this.value*1}))
  }


}
