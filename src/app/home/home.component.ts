import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string;
  news: any;
  isLoading: boolean;

  constructor(private quoteService: QuoteService, private http: HttpClient) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote().subscribe((quote: string) => {
      this.news = quote;
      console.log(this.news);
    });
  }
}
