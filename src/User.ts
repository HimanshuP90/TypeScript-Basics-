import { Repo } from "./Repo";

export class User {
    login: string;
    fullName: string;
    repoCount: string;
    followerCount: string;
    creationTime: string;
    bio: string;
    repos?: Repo[];

    constructor(userResponse: any) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
        this.creationTime = userResponse.created_at;
        this.bio = userResponse.bio;
    }
}