export class GitUsers {
  login: string;
  fullName: string;
  userAvatar: string;
  bio: string;
  company: string;
  location: string;
  blog: string;
  repoCount: number;
  followerCount: number;

  constructor(userResponse: any) {
    this.login = userResponse.login;
    this.fullName = userResponse.name;
    this.userAvatar = userResponse.userAvatar;
    this.bio = userResponse.bio;
    this.company = userResponse.company;
    this.location = userResponse.location;
    this.blog = userResponse.blog;
    this.repoCount = userResponse.public_repos;
    this.followerCount = userResponse.followers;
  }
}
