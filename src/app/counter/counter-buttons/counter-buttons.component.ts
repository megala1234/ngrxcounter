import { AppState } from './../../store/app.state';
import { increment,decrement, reset } from './../state/counter.actions';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }


  incrementclick(){
     this.store.dispatch(increment());
  }
  decrementclick(){
    this.store.dispatch(decrement())
  }
  resetclick(){
    this.store.dispatch(reset())
  }


}
