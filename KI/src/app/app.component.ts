import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AppComponent {
  inputText: string = '';
  messages: { text: string, isUser: boolean }[] = [];

  constructor(private apiService: ApiService) {}

  onSubmit() {
    if (this.inputText.trim()) {
      this.messages.push({ text: this.inputText, isUser: true });
      this.apiService.sendMessage(this.inputText).subscribe(response => {
        this.messages.push({ text: response.response, isUser: false });
      });
      this.inputText = '';
    }
  }

  @HostListener('document:keydown.enter', ['$event'])
  handleEnterKey(event: KeyboardEvent) {
    this.onSubmit();
  }
}
