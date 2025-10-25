import { ip } from './../core/models/API';
import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import { Client, Stomp } from '@stomp/stompjs';
// import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketServiceService {

  private stompClient: any;
  private socket: any;
  private messagesSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public messages$: Observable<string[]> = this.messagesSubject.asObservable();

  ip = ip;

  constructor(private zone: NgZone) { }

  connect() {
    // this.socket = new SockJS('http://localhost:8050/ws');
    // this.socket = new SockJS(`${this.ip.replace(':8080', '')}:8050/ws`);
    // this.socket = new SockJS(`https://163.47.37.52:8050/wss`);
    // this.stompClient = Stomp.over(this.socket);

    // this.stompClient.connect({}, (frame: any) => {
    //   console.log('Connected to WebSocket:', frame);

    //   // Subscribe to the topic
    //   this.stompClient.subscribe("/topic/notifications", (message: any) => {
    //     if (message.body) {
    //       const notification = JSON.parse(message.body);
    //       // console.log('Received message:', notification);

    //       // Run inside Angular's zone to update UI properly
    //       this.zone.run(() => {
    //         const currentMessages = this.messagesSubject.value;
    //         currentMessages.push(notification.message);
    //         this.messagesSubject.next(currentMessages);
    //       });
    //     }
    //   });

    //   this.stompClient.subscribe("/topic/notifications-for-person", (message: any) => {
    //     if (message.body) {
    //       const notification = JSON.parse(message.body);
    //       // console.log('Received message:', notification);

    //       // Run inside Angular's zone to update UI properly
    //       this.zone.run(() => {
    //         const currentMessages = this.messagesSubject.value;
    //         currentMessages.push(notification.message);
    //         this.messagesSubject.next(currentMessages);
    //       });
    //     }
    //   });
    // }, (error: any) => {
    //   console.error('WebSocket connection error:', error);
    // });
  }

  disconnect() {
    // if (this.stompClient) {
    //   this.stompClient.disconnect(() => {
    //     console.log('Disconnected from WebSocket');
    //   });
    // }
  }

  sendMessage(message: string) {
    // if (this.stompClient && this.stompClient.connected) {
    //   this.stompClient.send('/app/send', {}, JSON.stringify({ message }));
    //   console.log('Message sent:', message);
    // } else {
    //   console.error('WebSocket is not connected');
    // }
  }

  getMessages(): Observable<string[]> {
    return this.messages$;
  }
}
