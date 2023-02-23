import { Store} from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import { counterState } from '../state/counter.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  constructor(private store: Store<{ counter : counterState}>) { }

  counter$!:Observable<{counter:number}>;

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
  }
  
 
}
