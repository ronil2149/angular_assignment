import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { IPost } from '../post';
import { NgIf, NgFor } from '@angular/common';


@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  posts: IPost[] = [];
  constructor(private _postService: PostService) {}

  ngOnInit(): void {
    this._postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
      },
      error: (err) => console.error('Error fetching posts:', err)
    });    
  }
}
