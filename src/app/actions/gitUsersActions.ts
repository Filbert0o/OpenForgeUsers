// import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store';
// import { GitUsers } from './../models/gitUsers.model'
import { GitUsers } from '../reducers/gitUsersReducer';

export const FETCH_GIT_USERS = 'FETCH_GIT_USERS';

export class FetchGitUsers implements Action {
  readonly type = FETCH_GIT_USERS

  constructor(public payload: GitUsers) {}
}

export type Actions = FetchGitUsers
