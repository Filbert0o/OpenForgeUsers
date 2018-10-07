import { Action } from '@ngrx/store';
// import { GitUsers } from './../models/gitUsers.model'
import * as GitUsersActions from '../actions/gitUsersActions';
import axios from 'axios';

export type Action = GitUsersActions.All;

export class GitUsers {
  login: string;
  fullName: string;
  repoCount: number;
  followerCount: number;
}

export interface AppState {
  readonly gitUsers: GitUsers[];
}

const initialState: GitUsers = {
  login: 'filbertwhat',
  fullName: 'timfilbert',
  repoCount: 4,
  followerCount: 4
}

export function gitUsersReducer(state: GitUsers[] = [initialState], action: GitUsersActions.All) {

  switch(action.type){
    case GitUsersActions.FETCH_GIT_USERS:
      return [...state, action.payload];
    default:
      return state;
  }
}
