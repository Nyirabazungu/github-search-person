import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()


export class UserRequestService {
  user: User;

  constructor(
    private http: HttpClient) {
    this.user = new User("", "", "", 0, 0, 0, "")
  }


  UserRequest(UserName) {
     var userInput=UserName;
    interface ApiResponse {
      avatar_url: string;
      gravatar_id: string;
      name: string;
      public_repos: number;
      followers: number;
      following: number;
      html_url: string;

    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + userInput + '?access_token=' + environment.apiKey).toPromise().then(response => {

        this.user.avatar_url = response.avatar_url;
        this.user.name = response.name;
        this.user.public_repos = response.public_repos;
        this.user.followers = response.followers;
        this.user.following = response.following;
        this.user.html_url = response.html_url;
        resolve()
      },

      )
    })
    error => {
      this.user.avatar_url = ""
      this.user.name = "Nyirabazungu"
      this.user.public_repos =
        this.user.followers = 0
      this.user.following = 0
      this.user.html_url = ""
    }

    return promise
  }
}

