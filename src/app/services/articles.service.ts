import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesInterface } from '../models/articles.model';


@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private api: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<ArticlesInterface[]> {
    return this.http.get(this.api) as Observable<ArticlesInterface[]>;

  }
}
