export class CommentDTO {
  public id: number;
  public name: string;
  public body: string;
  public answers: Array<CommentDTO>;
  constructor() {
    this.answers = new Array<CommentDTO>();
  }
}
