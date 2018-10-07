// import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store';
// import { GitUsers } from './../models/gitUsers.model'
import { GitUsers } from '../reducers/gitUsersReducer';
import axios from 'axios';

const ROOT_URL = `https://api.github.com/users`;

export const FETCH_GIT_USERS = 'FETCH_GIT_USERS';

export class FetchGitUsers implements Action {
  const url = `${ROOT_URL}/filbert0o>`;
  const response = (axios.get(url));



  readonly type = FETCH_GIT_USERS
  constructor(public payload: GitUsers[response]) {}
}

export type All = FetchGitUsers
