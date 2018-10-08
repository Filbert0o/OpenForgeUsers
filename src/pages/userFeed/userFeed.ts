import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as request from "request";
import axios from 'axios';

import { GitUsers } from '../../app/models/gitUsers.model';
import { GithubApi } from '../../app/services/githubApi.service';
// import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-userFeed',
  templateUrl: 'userFeed.html'
})
export class UserFeedPage {
  users: any;
  constructor(public navCtrl: NavController){
    this.getUsers();
  }
  getUsers() {
    return axios.get('https://api.github.com/users')
      .then((response) => {
        this.users = response.data;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
