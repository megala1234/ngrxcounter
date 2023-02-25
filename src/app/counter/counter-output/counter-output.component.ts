import { AppState } from './../../store/app.state';
import { getCounter, getChannelName } from './../state/counter.selector';
import { Store} from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  // counter$!:Observable<{counter:number}>;

  // ngOnInit(): void {
  //   this.counter$ = this.store.select('counter');
  // }
  counter!:number;
  channelName!:any;
  ngOnInit(): void {
     this.store.select(getCounter).subscribe(counter=>{
       this.counter= counter
     })

     this.store.select(getChannelName).subscribe(channelName=>{
      this.channelName= channelName
    })
  }
 
}
