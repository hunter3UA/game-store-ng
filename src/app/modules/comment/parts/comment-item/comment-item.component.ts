import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
})
export class CommentItemComponent implements OnInit {
  @Input() comments: Array<Comment>;
  constructor() {}

  ngOnInit(): void {}
}
