export class CommentDTO {
  public id: number;
  public name: string;
  public body: string;
  public parentCommentId: number;
  public answers: Array<CommentDTO>;
  public isQuote: boolean;
  public isDeleted: boolean;
  constructor() {
    this.answers = new Array<CommentDTO>();
  }
}
