import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASEURL = 'http://localhost:3000/api/chatapp';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {}

  addPost(body): Observable<any> {
    return this.http.post(`${BASEURL}/post/add-post`, body);
  }

  getAllPosts(): Observable<any> {
    return this.http.get(`${BASEURL}/posts`);
  }

  addLike(body): Observable<any> {
    return this.http.post(`${BASEURL}/post/add-like`, body);
  }
}
