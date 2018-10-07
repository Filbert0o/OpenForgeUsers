// import {Injectable} from '@angular/core';
//
// import {Actions, Effect} from '@ngrx/effects';
// import {catchError, map, switchMap} from 'rxjs/operators';
//
// import * as GitUsersActions from '../actions/gitUsersActions';
// import {GithubService} from '../services/github.service';
// import {of} from 'rxjs/observable/of';
//
// @Injectable()
// export class GitUsersEffects {
//
//   constructor(private actions$: Actions,
//               private githubService: GithubService) {
//   }
// 
//   @Effect()
//   searchUsers$ = this.actions$.ofType(GitUsersActions.FETCH_GIT_USERS).pipe(
//     map((action: GitUsersActions.FetchGitUsers) => action.payload),
//     switchMap(cityStringInput => {
//       return this.githubService.searchGitUsers()
//         .pipe(
//           map(weather => new GitUsersActions.FetchGitUsers())
//         );
//     })
//   );
// }
