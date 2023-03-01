import { AppState } from './../../../store/app.state';
import { getAuthenticatedState } from './../../../auth/store/auth.selector';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AuthState } from 'src/app/auth/store/auth.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  isAuthenication!:Observable<Boolean>;
  ngOnInit(): void {

    this.isAuthenication =  this.store.select(getAuthenticatedState)

  }

}
