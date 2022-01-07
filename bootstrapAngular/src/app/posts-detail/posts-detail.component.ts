import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostsService } from '../posts.service';
import { IPosts } from '../posts';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css']
})
export class PostsDetailComponent implements OnInit {
  public _post: IPosts;
  constructor(private postsService: PostsService, private route: ActivatedRoute, public messageService: MessageService) { }
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
     this.postsService.getPost(id)
         .subscribe(data => this._post = data);
  }
}
