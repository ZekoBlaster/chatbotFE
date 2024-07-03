// src/app/chatbot.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'http://192.168.1.49:5000/nicolaSimulator';

  constructor(private http: HttpClient) {}

  generateResponse(chatHistory: any[], latestMessage: string): Observable<any> {
    const payload = {
      chat_history: chatHistory,
      content: latestMessage
    };
    return this.http.post<any>(this.apiUrl, payload);
  }
}
