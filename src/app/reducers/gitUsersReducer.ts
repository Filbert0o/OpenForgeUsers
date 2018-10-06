import { Action } from '@ngrx/store';
// import { GitUsers } from './../models/gitUsers.model'
import * as GitUsersActions from './../actions/gitUsersActions';

export type Action = GitUsersActions.Actions;

export interface GitUsers {
  url: string;
}

export interface AppState {
  gitUsers: [GitUsers];
}

export function gitUsersReducer(state = [], action) {
  switch(action.type){
    case GitUsersActions.FETCH_GIT_USERS:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
