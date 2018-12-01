import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class QuoteService {
  constructor(private httpClient: HttpClient) {}

  getRandomQuote() {
    return this.httpClient.get('http://timestamilnews.in/api/recentNews');
  }
}
