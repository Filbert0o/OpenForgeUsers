import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { GitUsers } from '../reducers/gitUsersReducer';

@Injectable()
export class GitUsersService {
  url = 'https://api.github.com/users/filbert0o';
  // params = {
  //   q: '',
  //   cnt: '8',
  //   units: 'metric',
  //   APPID: '010721642521f31b0fbc8c3831d45951'
  // };

  constructor(private http: HttpClient) { }

  searchGitUsers: Observable<GitUsers> {
    // const urlParams: string = [
    //   `?q=${city}`,
    //   `cnt=${this.params.cnt}`,
    //   `units=${this.params.units}`,
    //   `appid=${this.params.APPID}`
    // ].join('&');

    const queryUrl = `${this.url}`;

    return this.http.get<GitUsers>(queryUrl)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

}
