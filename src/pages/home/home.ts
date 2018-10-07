import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Store } from '@ngrx/store';
import * as GitUsersActions from '../../app/actions/gitUsersActions';
import { GitUsers, AppState } from '../../app/reducers/gitUsersReducer';
import { Observable } from "rxjs/Observable";
import axios from 'axios';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // gitUsers: Observable<any>;
  gitUsers: Observable<GitUsers[]>;

  constructor(public navCtrl: NavController, private store: Store<AppState>) {
    this.gitUsers = store.select('gitUsers');
  }
}
