import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addCounter } from '../state/counter.actions';
import { counterState } from '../state/counter.state';
import {  getChannelName } from './../state/counter.selector';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {

  constructor(private store:Store<{counter:counterState}>) { }
  value!:number;
  channelName!:any;
  ngOnInit(): void {

    this.store.select(getChannelName).subscribe(channelName=>{
      this.channelName= channelName
    })
  }

  addcounter(){
    this.store.dispatch(addCounter({value: this.value*1}))
  }


}
