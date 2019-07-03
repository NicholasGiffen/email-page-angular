import { Injectable } from '@angular/core'; //makes reusable a service.
import { HttpClient} from '@angular/common/http';   //added this import line, going to use it                                        //helps API connections. looks similar to components

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users') //using free public api for web testing right here
  } //before we can use this http client, we have to refer back to app.moduel file

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users'+userId) //using free public api for web testing right here
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts') //using free public api for web testing right here
  }
}
