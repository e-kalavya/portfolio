import { Component, OnInit, AfterViewChecked, Inject, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { ChatBotService } from '../../services/chat-bot.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AllDeviceCompatiable } from './../../common/all-device-compatiable';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent extends AllDeviceCompatiable implements OnInit, AfterViewChecked {

  messageFieldHeight: string;
  userMessage: string;
  altKeyState = false;

  constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher,
    public dialogRef: MatDialogRef<ChatBotComponent>,@Inject(MAT_DIALOG_DATA) private data: any, 
    private botService: ChatBotService) {      
      super(changeDetectorRef, media);
     }

  ngOnInit() {
    this.botService.getResponse('who are you');
  }

  ngAfterViewChecked() {
  }

  handleKeyEvents(event: KeyboardEvent) {
    if(event.altKey){
      this.altKeyState = true;
    }
    if((event.keyCode == 13 || event.which == 13) && this.altKeyState) {
      this.userMessage += '\n';
    }
  }
  
  askBot() {
    let message = this.userMessage;
    this.userMessage = '';
    console.log(message);
  }

}
