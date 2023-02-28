import { getLoading } from './store/shared/shared.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrxcounter';

  showLoading!:Observable<Boolean>;

  constructor(private store: Store<AppState>){}

  ngOnInit(){

   this.showLoading = this.store.select(getLoading);
  }
}
