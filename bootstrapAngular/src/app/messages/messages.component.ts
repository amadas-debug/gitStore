import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { IPosts } from '../posts';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
public posts: IPosts[];
  constructor(private _postsService: PostsService, public messageService: MessageService) { }

  ngOnInit() {
    this._postsService.getPosts().subscribe(data => this.posts = data);
  }
}
