import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  word: string = '';
  pages: string | null = null;
  isApiResponse: boolean = false;
  constructor(private http: HttpClient) {}

  onSearch(event: Event) {
    event.preventDefault();
    this.http
      .get<{ pages: string }>(`http://localhost:3000/search?word=${this.word}`)
      .subscribe(
        (response) => {
          this.pages = response.pages;
          this.isApiResponse = true;
        },
        (error) => {
          console.error('Error searching word:', error);
          this.isApiResponse = true;
        }
      );
  }
}
