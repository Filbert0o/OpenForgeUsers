import * as request from "request";
import { GitUsers } from "../models/gitUsers.model";


const OPTIONS: any = {
    headers: {
      "User-Agent": "request"
    },
    json: true
  };

export class GithubApiService {
  getGitUsersInfo(cb: (user: GitUsers) => any) {
    request.get(
      "https://api.github.com/users/filbert0o",
      OPTIONS,
      (error: any, response: any, body: any) => {
        let user = new GitUsers(body);
        cb(user);
      }
    );
  }

}
