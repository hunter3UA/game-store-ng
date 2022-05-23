export class Comment {
  public id: number;
  public name: string;
  public body: string;
  public answers: Array<Comment>;
  constructor() {
    this.answers = new Array<Comment>();
  }
}
