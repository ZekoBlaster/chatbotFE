// src/app/chat/chat.component.ts
import { Component } from '@angular/core';
import { ChatbotService } from '../chatbot.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  chatHistory: any[] = [];
  latestMessage: string = '';

  constructor(private chatbotService: ChatbotService) {}

  sendMessage() {
    if (this.latestMessage.trim()) {
      this.chatHistory.push({ role: 'human', content: this.latestMessage });
      this.chatbotService.generateResponse(this.chatHistory, this.latestMessage).subscribe(
        response => {
          this.chatHistory.push({ role: 'ai', content: response.output });
          this.latestMessage = '';
        },
        error => {
          console.error('Error:', error);
        }
      );
    }
  }
}
