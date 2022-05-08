import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
})
export class CommentItemComponent implements OnInit {
  @Input() comments: Array<Comment>;

  @Output() onReply = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  reply(id: number) {
    this.onReply.emit(id);
  }
}
