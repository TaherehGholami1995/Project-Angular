import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { ArticlesInterface } from '../models/articles.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent implements OnInit {
  articles?: Observable<ArticlesInterface[]>;

  constructor(private service: ArticlesService) {}

  ngOnInit(): void {
    this.articles = this.service.getArticles();

  }
}
