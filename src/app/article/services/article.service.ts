import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Article } from './article';

const ARTICLES = [
  new Article(1, 'Core Java Tutorial', 'Java'),
  new Article(2, 'Angular Tutorial', 'Angular'),
  new Article(3, 'Hibernate Tutorial', 'Hibernate')
];
const articlesObservable = Observable.of(ARTICLES);

@Injectable()
export class ArticleService {
  getArticles(): Observable<Article[]> {
    return articlesObservable;
  }
  getArticle(id: number): Observable<Article> {
    return this.getArticles().map(articles =>
      articles.find(article => article.articleId === id)
    );
  }
  updateArticle(article: Article): Observable<Article> {
    return this.getArticles().map(articles => {
      let articleObj = articles.find(ob => ob.articleId === article.articleId);
      articleObj = article;
      return articleObj;
    });
  }
}
